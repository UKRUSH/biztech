// Test Gmail Configuration
const nodemailer = require('nodemailer');
require('dotenv').config();

async function testGmailConnection() {
  console.log('🔧 Testing Gmail configuration...');
  console.log('Email:', process.env.GMAIL_USER);
  console.log('App Password:', process.env.GMAIL_APP_PASSWORD ? 'Set (length: ' + process.env.GMAIL_APP_PASSWORD.length + ')' : 'Not set');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER || 'ukrush12@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'quzdusifjenm vgqm'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');

    // Send test email
    const testEmail = {
      from: '"BIZmaster Test" <' + (process.env.GMAIL_USER || 'ukrush12@gmail.com') + '>',
      to: 'ukrush12@gmail.com',
      subject: '🚀 Test Email - BIZmaster Nodemailer Setup',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #a904e8 0%, #b520f0 100%); color: white; padding: 20px; text-align: center; border-radius: 10px;">
            <h2>✅ Nodemailer Test Successful!</h2>
          </div>
          <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 10px; border-left: 4px solid #a904e8;">
            <p><strong>🎉 Great news!</strong> Your Gmail configuration is working perfectly.</p>
            <p><strong>📧 From:</strong> ${process.env.GMAIL_USER || 'ukrush12@gmail.com'}</p>
            <p><strong>📅 Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>🔧 Configuration:</strong> smtp.gmail.com:587</p>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center;">
            This is an automated test from your BIZmaster contact form system.
          </p>
        </div>
      `,
      text: `
✅ Nodemailer Test Successful!

Great news! Your Gmail configuration is working perfectly.

From: ${process.env.GMAIL_USER || 'ukrush12@gmail.com'}
Timestamp: ${new Date().toLocaleString()}
Configuration: smtp.gmail.com:587

This is an automated test from your BIZmaster contact form system.
      `
    };

    const info = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📬 Check your inbox: ukrush12@gmail.com');
    
  } catch (error) {
    console.error('❌ Gmail test failed:', error.message);
    console.error('Full error:', error);
  }
}

testGmailConnection();