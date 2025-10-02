# Environment Configuration Guide

This project uses environment variables to configure different aspects of the application. Here's how to set them up and use them.

## 📁 Environment Files

- `.env` - Default environment variables
- `.env.development` - Development-specific variables
- `.env.production` - Production-specific variables  
- `.env.local` - Local overrides (not committed to git)
- `.env.local.example` - Example of local variables

## 🔧 Setup Instructions

### 1. Copy the Example File
```bash
cp .env.local.example .env.local
```

### 2. Fill in Your Values
Edit `.env.local` with your actual API keys and configuration:

```bash
# Email Service Keys (Required for contact form)
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 3. Restart Development Server
After changing environment variables, restart your dev server:
```bash
npm run dev
```

## 📧 Email Configuration

The contact form supports multiple email services. Configure at least one:

### FormSubmit.co (Recommended)
- No API key required
- Set `VITE_FORMSUBMIT_EMAIL=ukrush12@gmail.com`

### EmailJS
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Web3Forms
```bash
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

## 🔍 Using Environment Variables

### In React Components
```typescript
import { env } from '@utils/env'

// Use environment variables
console.log(env.APP_NAME)
console.log(env.CONTACT_EMAIL)
console.log(env.IS_DEVELOPMENT)
```

### Direct Access
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL
const isDev = import.meta.env.MODE === 'development'
```

## 🎛️ Configuration Categories

### App Settings
- `VITE_APP_NAME` - Application name
- `VITE_APP_TITLE` - Page title
- `VITE_APP_DESCRIPTION` - Meta description

### Development Server
- `VITE_PORT` - Development server port (default: 3000)
- `VITE_HOST` - Host address
- `VITE_OPEN_BROWSER` - Auto-open browser

### API Configuration
- `VITE_API_BASE_URL` - Base API endpoint
- `VITE_API_VERSION` - API version
- `VITE_API_TIMEOUT` - Request timeout

### Feature Flags
- `VITE_ENABLE_DARK_MODE` - Enable dark mode toggle
- `VITE_ENABLE_ANIMATIONS` - Enable page animations
- `VITE_ENABLE_CONTACT_FORM` - Enable contact form
- `VITE_ENABLE_ANALYTICS` - Enable tracking

### Performance
- `VITE_LAZY_LOADING` - Enable lazy loading
- `VITE_IMAGE_OPTIMIZATION` - Optimize images
- `VITE_SOURCE_MAP` - Generate source maps

## 🔒 Security Notes

- Never commit `.env.local` files to git
- Use `VITE_` prefix for client-side variables
- Sensitive keys should not be in client-side code
- Use server-side environment variables for secrets

## 🚀 Deployment

### Vercel
Set environment variables in Vercel dashboard:
1. Go to Project Settings
2. Click Environment Variables
3. Add your production variables

### Other Platforms
Set these key variables:
- `NODE_ENV=production`
- `VITE_CONTACT_EMAIL=ukrush12@gmail.com`
- `VITE_API_BASE_URL=your_production_api`

## 🛠️ Build Process

The build process automatically:
- Loads appropriate `.env` files
- Optimizes bundle size
- Generates source maps (if enabled)
- Creates vendor chunks for better caching

```bash
# Development build
npm run dev

# Production build  
npm run build

# Preview production build
npm run preview
```

## 📊 Environment Utilities

Use the env utility for type-safe access:

```typescript
import { env, isDevelopment, logEnvInfo } from '@utils/env'

// Log environment info (development only)
logEnvInfo()

// Conditional logic
if (isDevelopment()) {
  console.log('Development mode')
}

// Feature flags
if (env.ENABLE_ANALYTICS) {
  initAnalytics()
}
```