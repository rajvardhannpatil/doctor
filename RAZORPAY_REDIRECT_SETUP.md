# Razorpay Payment Success Redirect Setup

## Configure Razorpay Payment Link Redirect

To show the WhatsApp modal automatically after successful payment, you need to configure the success redirect URL in your Razorpay dashboard:

### Steps:

1. **Log in to Razorpay Dashboard**
   - Go to https://dashboard.razorpay.com
   - Navigate to **Payment Links** section

2. **Edit Your Payment Link**
   - Find your payment link (the one you're using: `https://rzp.io/rzp/ZmxRXjJ`)
   - Click on it to edit

3. **Set Success Redirect URL**
   - Look for **"Redirect URL"** or **"Success URL"** field
   - Set it to your website URL with payment status parameter:
     ```
     https://yourwebsite.com/?payment_status=success
     ```
   - For local testing:
     ```
     http://localhost:5173/?payment_status=success
     ```

4. **Save Changes**

### How It Works:

- When user completes payment on Razorpay, they'll be redirected back to your site
- The URL will contain `?payment_status=success`
- The WhatsApp modal will automatically appear
- User can click "Join WhatsApp Group" to join your group

### Alternative Method (Manual):

If you can't configure redirect URL, you can manually trigger the modal by calling:
```javascript
localStorage.setItem('payment_success', 'true');
window.location.reload();
```

This can be done from a webhook or admin panel after confirming payment.

