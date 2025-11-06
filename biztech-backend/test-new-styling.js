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
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@example.com',
  company: 'Tech Solutions Inc.',
  service: 'Web Development',
  message: 'Hello! I am interested in your web development services. We need a modern, responsive website for our growing tech company. Could you please provide more details about your pricing and timeline?\n\nBest regards,\nJohn'
};

// Create the enhanced email content
const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #2c3e50;
            background-color: #f8f9fa;
        }
        .email-wrapper { 
            max-width: 650px; 
            margin: 20px auto; 
            background: white; 
            border-radius: 12px; 
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(169, 4, 232, 0.1);
        }
        .header { 
            background: linear-gradient(135deg, #a904e8 0%, #8e44ad 50%, #9b59b6 100%); 
            color: white; 
            padding: 30px 20px; 
            text-align: center;
            position: relative;
        }
        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #f39c12, #e74c3c, #e67e22);
        }
        .header h1 { 
            font-size: 26px; 
            font-weight: 600; 
            margin-bottom: 8px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .header p { 
            font-size: 16px; 
            opacity: 0.9; 
            font-weight: 300;
        }
        .content { 
            padding: 35px 30px; 
            background: white;
        }
        .contact-info {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 25px;
            border-left: 5px solid #a904e8;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        .info-item { 
            display: flex;
            align-items: center;
            padding: 12px 0;
        }
        .info-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #a904e8, #9b59b6);
            color: white;
            border-radius: 50%;
            margin-right: 15px;
            font-size: 16px;
            flex-shrink: 0;
        }
        .info-content {
            flex: 1;
        }
        .info-label { 
            font-weight: 600; 
            color: #34495e;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
        }
        .info-value { 
            color: #2c3e50;
            font-size: 16px;
            font-weight: 500;
        }
        .message-section {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 25px;
        }
        .message-header {
            background: linear-gradient(135deg, #a904e8, #9b59b6);
            color: white;
            padding: 15px 20px;
            font-weight: 600;
            font-size: 16px;
        }
        .message-body { 
            padding: 25px; 
            background: #fdfdfd;
            font-size: 15px;
            line-height: 1.8;
            color: #444;
            border-left: 4px solid #a904e8;
        }
        .timestamp {
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            border-top: 1px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
        .footer { 
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            text-align: center; 
            padding: 25px 20px;
        }
        .footer p {
            margin-bottom: 8px;
            opacity: 0.9;
        }
        .reply-button {
            display: inline-block;
            background: linear-gradient(135deg, #a904e8, #9b59b6);
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 15px;
            transition: all 0.3s ease;
        }
        @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; gap: 15px; }
            .content { padding: 25px 20px; }
            .contact-info { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="header">
            <h1>🚀 New Contact Inquiry</h1>
            <p>BIZmaster Solutions - Professional Services</p>
        </div>
        
        <div class="content">
            <div class="contact-info">
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-icon">👤</div>
                        <div class="info-content">
                            <div class="info-label">Client Name</div>
                            <div class="info-value">${testData.firstName} ${testData.lastName}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">📧</div>
                        <div class="info-content">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">${testData.email}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">🏢</div>
                        <div class="info-content">
                            <div class="info-label">Company</div>
                            <div class="info-value">${testData.company || 'Individual Client'}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">🔧</div>
                        <div class="info-content">
                            <div class="info-label">Service Interest</div>
                            <div class="info-value">${testData.service || 'General Inquiry'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="message-section">
                <div class="message-header">
                    💬 Client Message
                </div>
                <div class="message-body">
                    ${testData.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>

        <div class="timestamp">
            📅 Received: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit'
            })}
        </div>

        <div class="footer">
            <p>✉️ This inquiry was submitted through the BIZmaster Solutions contact form</p>
            <p>💡 You can reply directly to this email to respond to the client</p>
            <a href="mailto:${testData.email}" class="reply-button">Reply to ${testData.firstName}</a>
        </div>
    </div>
</body>
</html>`;

// Send test email
const mailOptions = {
  from: '"BIZmaster Contact Form" <ukrush12@gmail.com>',
  to: 'ukrush12@gmail.com',
  replyTo: testData.email,
  subject: '🚀 New Client Inquiry: John Smith | Web Development - BIZmaster Solutions',
  html: emailContent
};

async function sendTestEmail() {
  try {
    console.log('📧 Sending test email with new styling...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    console.log('🎨 New email styling applied!');
  } catch (error) {
    console.error('❌ Error sending test email:', error);
  }
}

sendTestEmail();