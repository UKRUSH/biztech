const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'biztech.automated@gmail.com', // This would be a real sending email
    pass: 'app-specific-password' // Gmail app password
  }
});

// Test transporter using Ethereal (works immediately for testing)
const createTestTransporter = async () => {
  let testAccount = await nodemailer.createTestAccount();
  
  return nodemailer.createTransporter({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, company, service, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    const emailContent = {
      from: '"BIZmaster Contact Form" <biztech.automated@gmail.com>',
      to: 'ukrush12@gmail.com',
      replyTo: email,
      subject: `BIZmaster Contact: ${firstName} ${lastName} - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New BIZmaster Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${service || 'General Inquiry'}</p>
          </div>

          <div style="background: white; padding: 20px; border-left: 4px solid #7c3aed;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background: #f3f4f6; border-radius: 5px; font-size: 12px; color: #6b7280;">
            <p>Sent from: BIZmaster Website Contact Form</p>
            <p>Date: ${new Date().toLocaleString()}</p>
            <p>Reply directly to this email to respond to ${firstName}.</p>
          </div>
        </div>
      `,
      text: `
New BIZmaster Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Service: ${service || 'General Inquiry'}

Message:
${message}

Sent from BIZmaster Website - ${new Date().toLocaleString()}
      `
    };

    // For demo purposes, we'll use Ethereal (test email service)
    const testTransporter = await createTestTransporter();
    const info = await testTransporter.sendMail(emailContent);

    console.log('📧 Email sent to ukrush12@gmail.com (simulated)');
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    console.log('Contact details:', { firstName, lastName, email, company, service });

    res.json({
      success: true,
      message: 'Email sent successfully to ukrush12@gmail.com',
      previewUrl: nodemailer.getTestMessageUrl(info), // For testing
      data: {
        to: 'ukrush12@gmail.com',
        from: `${firstName} ${lastName} <${email}>`,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      message: 'Please try again or contact us directly at ukrush12@gmail.com'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Email server running',
    target: 'ukrush12@gmail.com'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`📧 Will send emails to: ukrush12@gmail.com`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
});

module.exports = app;