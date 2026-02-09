/**
 * Razorpay Payment Integration
 * 
 * To use Razorpay:
 * 1. Create a Razorpay account at https://razorpay.com
 * 2. Get your API keys from Dashboard > Settings > API Keys
 * 3. For Payment Links (Easiest):
 *    - Create a Payment Link in Razorpay Dashboard
 *    - Add the Payment Link URL to your .env file as VITE_RAZORPAY_PAYMENT_LINK
 * 
 * 4. For Checkout Integration (More Secure, requires backend):
 *    - Add your Razorpay Key ID to .env as VITE_RAZORPAY_KEY_ID
 *    - Set up a backend API to create orders (order creation should be on server-side)
 */

// Option 1: Using Payment Link (Simple - No backend needed)
export const openRazorpayPaymentLink = () => {
  // Check if payment link is configured in environment variables
  const paymentLink = import.meta.env.VITE_RAZORPAY_PAYMENT_LINK;
  
  // Demo/Test mode - Remove this after setting up real Razorpay account
  const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === 'true' || !paymentLink;
  
  if (DEMO_MODE) {
    // Show demo message with instructions
    const userWantsDemo = confirm(
      'Payment link not configured yet.\n\n' +
      'Would you like to:\n' +
      '1. See demo instructions (OK)\n' +
      '2. Test with sample Razorpay link (Cancel)\n\n' +
      'To set up real payment:\n' +
      '1. Create free account at razorpay.com\n' +
      '2. Create Payment Link (takes 2 minutes)\n' +
      '3. Add link to .env file'
    );
    
    if (userWantsDemo) {
      // Open demo/test Razorpay page
      // You can replace this with an actual test payment link once you create your Razorpay account
      const demoLink = 'https://razorpay.com/payment-button/pl_test_YOUR_LINK_ID/view';
      alert(
        'DEMO MODE\n\n' +
        'To get your real payment link:\n\n' +
        '1. Go to: https://razorpay.com\n' +
        '2. Sign up (free, takes 2 minutes)\n' +
        '3. Go to Dashboard > Payment Links\n' +
        '4. Click "Create Payment Link"\n' +
        '5. Set amount to ₹199\n' +
        '6. Copy the Payment Link URL\n' +
        '7. Create .env file in project root\n' +
        '8. Add: VITE_RAZORPAY_PAYMENT_LINK=your_link_here\n\n' +
        'For now, click OK to see Razorpay test page format.'
      );
      // This will open Razorpay's general payment page format for reference
      window.open('https://razorpay.com/payment-links/', '_blank');
    } else {
      console.log('User cancelled. Please configure VITE_RAZORPAY_PAYMENT_LINK in .env file');
    }
    return;
  }
  
  // Open Razorpay payment link in new window/tab
  window.open(paymentLink, '_blank');
};

// Option 2: Using Razorpay Checkout (Requires backend for order creation)
export const openRazorpayCheckout = async (orderData) => {
  const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  
  if (!keyId) {
    alert('Razorpay key not configured. Please contact support.');
    console.error('Razorpay Key ID not found in environment variables');
    return;
  }

  // Load Razorpay script dynamically
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.onerror = () => {
    alert('Unable to load Razorpay. Please check your internet connection.');
  };

  document.body.appendChild(script);

  return new Promise((resolve, reject) => {
    script.onload = () => {
      const options = {
        key: keyId,
        amount: orderData.amount || 19900, // Amount in paise (₹199 = 19900 paise)
        currency: 'INR',
        name: 'WHOLENESS WELLNESS',
        description: 'Gut Reset Workshop - 3 Days Live Masterclass',
        image: '/logo.png', // Optional: Your logo URL
        order_id: orderData.orderId, // This should come from your backend
        handler: function (response) {
          // Payment successful
          console.log('Payment successful:', response);
          resolve(response);
          
          // You can redirect or show success message
          alert('Payment Successful! Your registration is confirmed.');
          
          // Optionally redirect to success page
          // window.location.href = '/payment-success';
        },
        prefill: {
          name: orderData.name || '',
          email: orderData.email || '',
          contact: orderData.contact || ''
        },
        notes: {
          workshop: 'Gut Reset Workshop',
          workshop_type: '3 Days Live Masterclass'
        },
        theme: {
          color: '#FFD700' // Yellow color to match your theme
        },
        modal: {
          ondismiss: function() {
            reject(new Error('Payment cancelled by user'));
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    };
  });
};

// Main function to handle payment (uses Payment Link by default)
export const handlePayment = (paymentMethod = 'link') => {
  if (paymentMethod === 'link') {
    openRazorpayPaymentLink();
  } else {
    // For checkout, you'll need to fetch order from backend first
    // Example:
    // fetch('/api/create-order', { method: 'POST', body: { amount: 199 } })
    //   .then(res => res.json())
    //   .then(orderData => openRazorpayCheckout(orderData))
    //   .catch(err => console.error('Error creating order:', err));
    
    console.warn('Checkout method requires backend order creation. Using Payment Link instead.');
    openRazorpayPaymentLink();
  }
};

