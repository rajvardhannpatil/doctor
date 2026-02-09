# Quick Razorpay Setup Guide (5 Minutes)

## Step 1: Create Razorpay Account (2 minutes)

1. Go to: **https://razorpay.com**
2. Click **Sign Up** (it's FREE!)
3. Enter your email and create account
4. Complete basic verification (just email verification needed for testing)

## Step 2: Create Payment Link (2 minutes)

1. After logging in, go to **Dashboard**
2. Click on **Payment Links** in the left menu
3. Click the **+ Create Payment Link** button
4. Fill in:
   - **Name:** `Gut Reset Workshop`
   - **Description:** `3 Days Live Masterclass by Dr. Akash Dongale`
   - **Amount:** `₹199.00`
   - **Customer Details:** Enable if you want to collect email/phone
5. Click **Create Link**
6. **Copy the Payment Link URL** - it will look like:
   ```
   https://pages.razorpay.com/pl_OxkVo9EzEKKHJO/view
   ```

## Step 3: Add Link to .env File (1 minute)

1. Open the `.env` file in your project root
2. Find this line (currently commented):
   ```
   # VITE_RAZORPAY_PAYMENT_LINK=https://pages.razorpay.com/pl_YOUR_LINK_ID/view
   ```
3. Uncomment it and replace `YOUR_LINK_ID` with your actual Payment Link ID:
   ```
   VITE_RAZORPAY_PAYMENT_LINK=https://pages.razorpay.com/pl_OxkVo9EzEKKHJO/view
   ```
4. Change `VITE_DEMO_MODE=true` to `VITE_DEMO_MODE=false`
5. Save the file
6. **Restart your development server** (Ctrl+C, then `npm run dev`)

## Step 4: Test It!

1. Click any "Register" or "Enroll Now" button
2. You should now be redirected to Razorpay payment page!

## Testing Payments

Razorpay provides test cards for testing:
- **Test Card:** `4111 1111 1111 1111`
- **Expiry:** Any future date (e.g., `12/25`)
- **CVV:** Any 3 digits (e.g., `123`)
- **Name:** Any name

## That's It! 🎉

Your payment integration is now live!

**Note:** 
- Test mode is for testing only
- To accept real payments, complete KYC in Razorpay Dashboard
- Never commit your `.env` file to Git (it should be in `.gitignore`)

## Need Help?

- Razorpay Dashboard: https://dashboard.razorpay.com
- Test Cards: https://razorpay.com/docs/payments/test-cards/

