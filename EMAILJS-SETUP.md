# 📧 EmailJS Setup Instructions for ukrush12@gmail.com

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose "Gmail" service
4. Connect your Gmail account (or the account you want to send emails from)
5. Copy the **Service ID** (looks like: service_abc123)

## Step 3: Create Email Template
1. Go to Email Templates in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
BIZmaster Contact: {{from_name}}
```

### Template Body:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #7c3aed; margin-bottom: 20px;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{from_name}}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{from_email}}</td>
            </tr>
            <tr style="background: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{company}}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service Interest:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{service_interest}}</td>
            </tr>
        </table>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="margin-bottom: 0; line-height: 1.6;">{{message}}</p>
        </div>
        
        <div style="background: #e0e7ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <strong>Reply To:</strong> {{reply_to}}<br>
            <small style="color: #666;">This email was sent via BIZmaster contact form</small>
        </div>
    </div>
</div>
```

4. Set these template variables:
   - `from_name`
   - `from_email`
   - `company`
   - `service_interest`
   - `message`
   - `reply_to`

5. Copy the **Template ID** (looks like: template_abc123)

## Step 3: Get Public Key
1. Go to Account settings
2. Copy your **Public Key** (looks like: abc123xyz)

## Step 4: Update the Code
Replace these values in your React component:

```javascript
// In WorkingContactForm.tsx or Contact.tsx
emailjs.init('YOUR_PUBLIC_KEY')  // Replace with your actual public key

const result = await emailjs.send(
  'YOUR_SERVICE_ID',   // Replace with your service ID from step 2
  'YOUR_TEMPLATE_ID',  // Replace with your template ID from step 3
  emailParams
)
```

## Step 5: Set Destination Email
In your EmailJS service settings, you can either:
- Set `ukrush12@gmail.com` as the default recipient
- OR pass it dynamically in the template parameters:

```javascript
const emailParams = {
  to_email: 'ukrush12@gmail.com',  // Destination email
  from_name: `${formData.firstName} ${formData.lastName}`,
  from_email: formData.email,
  company: formData.company || 'Not provided',
  service_interest: formData.service || 'General Inquiry',
  message: formData.message,
  reply_to: formData.email
}
```

## Testing
1. Once configured, test the form
2. Check ukrush12@gmail.com inbox for the email
3. EmailJS free plan allows 200 emails/month

## Alternative: Quick mailto Solution
If EmailJS setup is too complex, the current mailto fallback will work immediately:
- Opens user's email client
- Pre-fills ukrush12@gmail.com as recipient
- User just needs to click "Send"

## Files Created:
- `WorkingContactForm.tsx` - Clean contact form component
- `working-emailjs.html` - Standalone HTML test page
- `email-test.html` - Simple test form

Choose the approach that works best for your needs!