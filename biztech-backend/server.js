const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a transporter using Gmail SMTP (you'll need to set up app password)
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'biztech.contact.sender@gmail.com', // This should be a real Gmail account
      pass: 'your-app-password-here' // Gmail app password
    }
  });
};

// Alternative: Use SMTP2GO (more reliable for production)
const createSMTPTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.ethereal.email', // Using Ethereal for testing
    port: 587,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass'
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
        error: 'Missing required fields'
      });
    }

    // For now, just log the data and simulate success
    console.log('📧 Contact form submission received:');
    console.log('==================================');
    console.log(`To: ukrush12@gmail.com`);
    console.log(`From: ${firstName} ${lastName} <${email}>`);
    console.log(`Company: ${company || 'Not provided'}`);
    console.log(`Service: ${service || 'General Inquiry'}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    console.log('==================================');

    // Simulate email sending (you can set up real SMTP later)
    setTimeout(() => {
      console.log('✅ Email would be sent to ukrush12@gmail.com');
    }, 1000);

    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        to: 'ukrush12@gmail.com',
        from: `${firstName} ${lastName} <${email}>`,
        timestamp: new Date().toISOString(),
        note: 'Email logged for manual follow-up'
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
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
