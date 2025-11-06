# 📧 BIZmaster Backend Server Setup

This backend server handles contact form submissions from the BIZmaster website and sends emails to **ukrush12@gmail.com** using **Nodemailer**.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
cd biztech-backend
npm install
```

### 2. Configure Email Settings
Edit the `.env` file:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
TARGET_EMAIL=ukrush12@gmail.com
PORT=3001
```

### 3. Get Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Factor Authentication** (required)
3. Go to **Security > App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `.env` file

### 4. Start the Server
```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

## 📋 API Endpoints

### POST `/api/contact`
Sends contact form data to ukrush12@gmail.com

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "company": "Tech Corp",
  "service": "Strategic Consulting",
  "message": "I need help with business strategy"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully!",
  "data": {
    "messageId": "email-id",
    "to": "ukrush12@gmail.com",
    "timestamp": "2025-11-06T10:30:00.000Z"
  }
}
```

### GET `/api/health`
Check if server is running

### GET `/api/contacts`
View contact log information

## 🔧 Frontend Integration

The React contact form automatically connects to:
1. **Primary**: Your backend server (`http://localhost:3001/api/contact`)
2. **Fallback**: FormSubmit.co (if backend is unavailable)

## ✅ Features

- 📧 **Direct Email Delivery** to ukrush12@gmail.com
- 🎨 **HTML Email Templates** with BIZmaster branding
- 🔄 **Automatic Fallback** to external services
- 📝 **Server Logging** of all submissions
- 🚀 **CORS Enabled** for frontend integration
- 🔐 **Environment Variables** for security

## 🐛 Troubleshooting

**Email not sending?**
1. Check Gmail app password is correct (16 characters)
2. Verify 2FA is enabled on your Google account
3. Check server logs for error messages
4. Test with `/api/health` endpoint

**Backend not connecting?**
1. Ensure server is running on port 3001
2. Check CORS settings allow your frontend domain
3. Verify frontend is calling `http://localhost:3001/api/contact`

## 📞 Contact

All form submissions are sent to: **ukrush12@gmail.com**

Server runs on: **http://localhost:3001**
