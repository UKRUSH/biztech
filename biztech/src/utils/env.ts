// Environment Variables Utility
// This file provides type-safe access to environment variables

export const env = {
  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'BIZtech',
  APP_TITLE: import.meta.env.VITE_APP_TITLE || 'BIZtech - Business Solutions', 
  APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Professional business consulting services',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',

  // Server Configuration
  PORT: parseInt(import.meta.env.VITE_PORT) || 3000,
  HOST: import.meta.env.VITE_HOST || 'localhost',
  BASE_URL: import.meta.env.VITE_BASE_URL || '/',

  // API Configuration  
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.biztech.com',
  API_VERSION: import.meta.env.VITE_API_VERSION || 'v1',
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,

  // Contact Information
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'ukrush12@gmail.com',
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || '+1-555-0123',
  COMPANY_ADDRESS: import.meta.env.VITE_COMPANY_ADDRESS || '123 Business Ave, Tech City',

  // Email Services
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  FORMSUBMIT_EMAIL: import.meta.env.VITE_FORMSUBMIT_EMAIL || 'ukrush12@gmail.com',
  WEB3FORMS_ACCESS_KEY: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  GETFORM_ENDPOINT: import.meta.env.VITE_GETFORM_ENDPOINT,

  // Social Media
  SOCIAL_LINKEDIN: import.meta.env.VITE_SOCIAL_LINKEDIN,
  SOCIAL_TWITTER: import.meta.env.VITE_SOCIAL_TWITTER,
  SOCIAL_FACEBOOK: import.meta.env.VITE_SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM: import.meta.env.VITE_SOCIAL_INSTAGRAM,

  // Analytics
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  FACEBOOK_PIXEL_ID: import.meta.env.VITE_FACEBOOK_PIXEL_ID,
  HOTJAR_ID: import.meta.env.VITE_HOTJAR_ID,

  // Feature Flags
  ENABLE_DARK_MODE: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
  ENABLE_ANIMATIONS: import.meta.env.VITE_ENABLE_ANIMATIONS === 'true',
  ENABLE_CONTACT_FORM: import.meta.env.VITE_ENABLE_CONTACT_FORM === 'true',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',

  // Development
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',
  SHOW_CONSOLE_LOGS: import.meta.env.VITE_SHOW_CONSOLE_LOGS === 'true',
  DEV_TOOLS: import.meta.env.VITE_DEV_TOOLS === 'true',

  // Environment
  NODE_ENV: import.meta.env.MODE,
  IS_DEVELOPMENT: import.meta.env.MODE === 'development',
  IS_PRODUCTION: import.meta.env.MODE === 'production',
} as const;

// Helper functions
export const isDevelopment = () => env.IS_DEVELOPMENT;
export const isProduction = () => env.IS_PRODUCTION;

// Type for environment configuration
export type EnvConfig = typeof env;

// Debug function
export const logEnvInfo = () => {
  if (env.SHOW_CONSOLE_LOGS) {
    console.group('🔧 Environment Configuration');
    console.log('Mode:', env.NODE_ENV);
    console.log('App Name:', env.APP_NAME);
    console.log('Version:', env.APP_VERSION);
    console.log('API Base URL:', env.API_BASE_URL);
    console.log('Contact Email:', env.CONTACT_EMAIL);
    console.groupEnd();
  }
};

// Export default
export default env;