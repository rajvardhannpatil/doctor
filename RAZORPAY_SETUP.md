# Razorpay Payment Integration Setup Guide

This guide will help you set up Razorpay payment integration for your workshop registration website.

## Step 1: Create a Razorpay Account

1. Go to [https://razorpay.com](https://razorpay.com)
2. Sign up for an account
3. Complete the KYC verification process

## Step 2: Choose Payment Method

You have two options for integrating Razorpay:

### Option 1: Payment Links (Easiest - Recommended for beginners)

**Advantages:**
- No backend required
- Easy to set up
- Perfect for simple use cases

**Steps:**
1. Log in to your Razorpay Dashboard
2. Go to **Payment Links** section
3. Click **Create Payment Link**
4. Fill in the details:
   - **Name:** Gut Reset Workshop
   - **Description:** 3 Days Live Masterclass by Dr. Akash Dongale
   - **Amount:** ₹199.00
   - **Customer Details:** Enable if you want to collect customer information
5. Click **Create Link**
6. Copy the Payment Link URL (it will look like: `https://pages.razorpay.com/pl_OxkVo9EzEKKHJO/view`)

### Option 2: Checkout Integration (More secure - Requires backend)

**Advantages:**
- More control over payment flow
- Better customization
- Real-time order creation

**Steps:**
1. Log in to your Razorpay Dashboard
2. Go to **Settings** > **API Keys**
3. Copy your **Key ID** (it will look like: `rzp_test_XXXXXXXXXX` or `rzp_live_XXXXXXXXXX`)
4. Copy your **Key Secret** (keep this secure - never share in frontend code!)
5. Set up a backend server to create orders (order creation must be on server-side for security)

## Step 3: Configure Environment Variables

1. Create a `.env` file in the root directory of your project
2. Add one of the following configurations:

### For Payment Links (Option 1):
```env
VITE_RAZORPAY_PAYMENT_LINK=https://pages.razorpay.com/pl_YOUR_PAYMENT_LINK_ID/view
```

### For Checkout Integration (Option 2):
```env
VITE_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
# Note: Secret Key should NEVER be in frontend code
# Secret Key should only be used in your backend server
```

## Step 4: Test Your Integration

1. Make sure your `.env` file is in the root directory
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Click any "Register" or "Enroll Now" button on your website
4. You should be redirected to the Razorpay payment page

## Important Notes

- **Test Mode:** By default, Razorpay starts in test mode. You can test payments using test cards from [Razorpay Test Cards](https://razorpay.com/docs/payments/test-cards/)
- **Live Mode:** Once you're ready, activate your account in Razorpay Dashboard to go live
- **Security:** Never put your Razorpay Secret Key in frontend code. It should only be used in backend APIs
- **Environment Variables:** Variables starting with `VITE_` are exposed to the frontend. Never put sensitive secrets there

## Payment Flow

When a user clicks any register/enroll button:
1. The payment handler function is called
2. User is redirected to Razorpay payment page (Payment Link) or Razorpay Checkout modal
3. User completes payment on Razorpay's secure payment page
4. After successful payment, user is redirected back (you can customize this in Razorpay Dashboard)

## Customizing Payment Page

You can customize the payment page in Razorpay Dashboard:
- Add your logo
- Change colors to match your brand
- Add custom fields
- Set up email/SMS notifications

## Need Help?

- Razorpay Documentation: [https://razorpay.com/docs](https://razorpay.com/docs)
- Razorpay Support: Available in your Razorpay Dashboard

## Buttons Connected

The following buttons are now connected to Razorpay:
- Header: "Enroll Now"
- Workshop Intro: "Reserve my seat @ ₹199"
- Bonuses: "Reserve my seat @ ₹199"
- Testimonials: "मी सहभागी होण्यास तयार आहे - Payment / Join"
- Final CTA: "मी सहभागी होण्यास तयार आहे - Payment / Join"

All buttons will redirect users to the Razorpay payment page when clicked!

