const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER || 'ukrush12@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'quzd usif jenm vgqm'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test data
const testData = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah.johnson@example.com',
  company: 'Creative Agency',
  service: 'Branding & Design',
  message: 'Hi there!\n\nI love the simple and clean design of your email templates. We are looking for branding services for our startup.\n\nCould you help us?\n\nThanks!\nSarah'
};

// Create the simplified email content
const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333;
            background: #f5f5f5;
            padding: 20px;
        }
        .email-container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 10px; 
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .header { 
            background: #a904e8; 
            color: white; 
            padding: 25px 20px; 
            text-align: center;
        }
        .header h1 { 
            font-size: 24px; 
            margin-bottom: 5px;
        }
        .header p { 
            font-size: 16px; 
            opacity: 0.9; 
        }
        .content { 
            padding: 30px 25px; 
        }
        .info-card {
            background: #f9f9f9;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            border-left: 4px solid #a904e8;
        }
        .info-row { 
            display: flex;
            margin-bottom: 12px;
            align-items: center;
        }
        .info-row:last-child { margin-bottom: 0; }
        .info-icon {
            width: 30px;
            height: 30px;
            background: #a904e8;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            font-size: 14px;
        }
        .info-text {
            flex: 1;
        }
        .info-label { 
            font-weight: bold; 
            color: #555;
            font-size: 13px;
            text-transform: uppercase;
            margin-bottom: 2px;
        }
        .info-value { 
            color: #333;
            font-size: 16px;
        }
        .message-box {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            margin-top: 20px;
        }
        .message-title {
            background: #a904e8;
            color: white;
            padding: 12px 20px;
            font-weight: bold;
            font-size: 16px;
        }
        .message-content { 
            padding: 20px; 
            font-size: 15px;
            line-height: 1.6;
            color: #444;
        }
        .footer { 
            background: #333;
            color: white;
            text-align: center; 
            padding: 20px;
        }
        .footer p {
            margin-bottom: 6px;
            font-size: 14px;
        }
        .reply-btn {
            display: inline-block;
            background: #a904e8;
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 10px;
        }
        .time-stamp {
            text-align: center;
            padding: 15px;
            background: #f0f0f0;
            color: #666;
            font-size: 13px;
        }
        @media (max-width: 600px) {
            .content { padding: 20px 15px; }
            .info-card { padding: 15px; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>✉️ New Message</h1>
            <p>BIZmaster Solutions</p>
        </div>
        
        <div class="content">
            <div class="info-card">
                <div class="info-row">
                    <div class="info-icon">👤</div>
                    <div class="info-text">
                        <div class="info-label">Name</div>
                        <div class="info-value">${testData.firstName} ${testData.lastName}</div>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon">📧</div>
                    <div class="info-text">
                        <div class="info-label">Email</div>
                        <div class="info-value">${testData.email}</div>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon">🏢</div>
                    <div class="info-text">
                        <div class="info-label">Company</div>
                        <div class="info-value">${testData.company || 'Not specified'}</div>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon">🔧</div>
                    <div class="info-text">
                        <div class="info-label">Service</div>
                        <div class="info-value">${testData.service || 'General Inquiry'}</div>
                    </div>
                </div>
            </div>

            <div class="message-box">
                <div class="message-title">
                    💬 Message
                </div>
                <div class="message-content">
                    ${testData.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>

        <div class="time-stamp">
            📅 ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
        </div>

        <div class="footer">
            <p>Contact Form Submission</p>
            <p>Reply directly to this email</p>
            <a href="mailto:${testData.email}" class="reply-btn">Reply to ${testData.firstName}</a>
        </div>
    </div>
</body>
</html>`;

// Send test email
const mailOptions = {
  from: '"BIZmaster Contact Form" <ukrush12@gmail.com>',
  to: 'ukrush12@gmail.com',
  replyTo: testData.email,
  subject: '✉️ New Client Inquiry: Sarah Johnson | Branding & Design - BIZmaster Solutions',
  html: emailContent
};

async function sendTestEmail() {
  try {
    console.log('📧 Sending test email with SIMPLE, ATTRACTIVE styling...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Simple styled email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    console.log('🎨 New simple & attractive email styling applied!');
  } catch (error) {
    console.error('❌ Error sending test email:', error);
  }
}

sendTestEmail();