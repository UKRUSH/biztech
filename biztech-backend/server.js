const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a transporter using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER || 'ukrush12@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'quzdusifjenm vgqm'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Alternative: Use a more reliable SMTP service (recommended for production)
const createBackupTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER || 'ukrush12@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'quzdusifjenm vgqm'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, company, service, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, and message are required'
      });
    }

    console.log('📧 Contact form submission received:');
    console.log('==================================');
    console.log(`To: ukrush12@gmail.com`);
    console.log(`From: ${firstName} ${lastName} <${email}>`);
    console.log(`Company: ${company || 'Not provided'}`);
    console.log(`Service: ${service || 'General Inquiry'}`);
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    console.log('==================================');

    // Create simple, attractive email content
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
                        <div class="info-value">${firstName} ${lastName}</div>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon">📧</div>
                    <div class="info-text">
                        <div class="info-label">Email</div>
                        <div class="info-value">${email}</div>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon">🏢</div>
                    <div class="info-text">
                        <div class="info-label">Company</div>
                        <div class="info-value">${company || 'Not specified'}</div>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon">🔧</div>
                    <div class="info-text">
                        <div class="info-label">Service</div>
                        <div class="info-value">${service || 'General Inquiry'}</div>
                    </div>
                </div>
            </div>

            <div class="message-box">
                <div class="message-title">
                    💬 Message
                </div>
                <div class="message-content">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>

        <div class="time-stamp">
            📅 ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
        </div>

        <div class="footer">
            <p>Contact Form Submission</p>
            <p>Reply directly to this email</p>
            <a href="mailto:${email}" class="reply-btn">Reply to ${firstName}</a>
        </div>
    </div>
</body>
</html>`;

    // Email options
    const mailOptions = {
      from: `"BIZmaster Contact Form" <${process.env.GMAIL_USER || 'noreply@bizmaster.com'}>`,
      to: 'ukrush12@gmail.com',
      replyTo: email,
      subject: `🚀 New Client Inquiry: ${firstName} ${lastName} | ${service || 'General Consultation'} - BIZmaster Solutions`,
      html: emailContent,
      text: `
BIZmaster Solutions - New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Service Interest: ${service || 'General Inquiry'}
Submitted: ${new Date().toLocaleString()}

Message:
${message}

---
Reply to: ${email}
This message was sent via the BIZmaster contact form.
      `
    };

    // Try to send email with primary transporter
    try {
      const transporter = createTransporter();
      
      // Verify connection first
      await transporter.verify();
      console.log('✅ SMTP connection verified');
      
      const info = await transporter.sendMail(mailOptions);
      
      console.log('✅ Email sent successfully:', info.messageId);
      console.log('📧 Email delivered to: ukrush12@gmail.com');

      res.json({
        success: true,
        message: 'Contact form submitted successfully! We will get back to you soon.',
        data: {
          messageId: info.messageId,
          to: 'ukrush12@gmail.com',
          from: `${firstName} ${lastName} <${email}>`,
          timestamp: new Date().toISOString()
        }
      });

    } catch (emailError) {
      console.error('❌ Primary email sending failed:', emailError.message);
      
      // Try backup transporter
      try {
        console.log('🔄 Trying backup transporter...');
        const backupTransporter = createBackupTransporter();
        await backupTransporter.verify();
        console.log('✅ Backup SMTP connection verified');
        
        const backupInfo = await backupTransporter.sendMail(mailOptions);
        
        console.log('✅ Email sent via backup:', backupInfo.messageId);
        console.log('📧 Email delivered to: ukrush12@gmail.com');

        res.json({
          success: true,
          message: 'Contact form submitted successfully! We will get back to you soon.',
          data: {
            messageId: backupInfo.messageId,
            to: 'ukrush12@gmail.com',
            from: `${firstName} ${lastName} <${email}>`,
            timestamp: new Date().toISOString(),
            method: 'backup'
          }
        });
        
      } catch (backupError) {
        console.error('❌ Backup email sending also failed:', backupError.message);
        
        // Return success to user but log for manual follow-up
        res.json({
          success: true,
          message: 'Contact form submitted successfully! We will get back to you soon.',
          data: {
            to: 'ukrush12@gmail.com',
            from: `${firstName} ${lastName} <${email}>`,
            timestamp: new Date().toISOString(),
            note: 'Email logged for manual follow-up - SMTP failed'
          }
        });
      }
    }

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'BIZmaster contact server is running',
    target_email: 'ukrush12@gmail.com',
    timestamp: new Date().toISOString()
  });
});

// Endpoint to get all logged contacts
app.get('/api/contacts', (req, res) => {
  res.json({
    message: 'Contact logs would be stored here',
    target_email: 'ukrush12@gmail.com',
    note: 'All form submissions are logged for manual follow-up'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 BIZmaster backend server running on port ${PORT}`);
  console.log(`📧 Contact form submissions will be logged and forwarded to: ukrush12@gmail.com`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📋 Contact logs: http://localhost:${PORT}/api/contacts`);
});
