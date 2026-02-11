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
  
  // Debug: Log the payment link to console
  console.log('Payment Link from env:', paymentLink);
  console.log('All env vars:', import.meta.env);
  
  // Check if payment link exists
  if (!paymentLink || paymentLink.trim() === '') {
    alert(
      'Payment link not configured.\n\n' +
      'Please add your Razorpay payment link to the .env file:\n' +
      'VITE_RAZORPAY_PAYMENT_LINK=your_payment_link_here\n\n' +
      'After adding, restart your development server.'
    );
    console.error('VITE_RAZORPAY_PAYMENT_LINK is not set in environment variables');
    return;
  }
  
  // Open Razorpay payment link in new window/tab
  console.log('Opening payment link:', paymentLink);
  
  // Set a flag to check for payment success when user returns
  localStorage.setItem('payment_pending', 'true');
  
  // Open payment link
  const paymentWindow = window.open(paymentLink, '_blank');
  
  // Listen for when the payment window closes (user returns)
  // Note: This is a fallback. Razorpay payment links typically redirect back to a success page
  // You should configure the success redirect URL in Razorpay dashboard to point back to your site
  // with a parameter like: ?payment_status=success
  
  // Check periodically if window is closed (user might have completed payment)
  const checkWindow = setInterval(() => {
    if (paymentWindow && paymentWindow.closed) {
      clearInterval(checkWindow);
      // Check if payment was successful (this will be set by the redirect URL)
      // For now, we'll rely on URL parameters when user returns to the site
    }
  }, 1000);
  
  // Clear interval after 5 minutes
  setTimeout(() => {
    clearInterval(checkWindow);
  }, 300000);
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

// Function to mark payment as successful (can be called from webhook or redirect)
export const markPaymentSuccess = () => {
  localStorage.setItem('payment_success', 'true');
  // Reload the page to show the modal
  window.location.reload();
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

