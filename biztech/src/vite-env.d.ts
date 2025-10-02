/// <reference types="vite/client" />

interface ImportMetaEnv {
  // App Configuration
  readonly VITE_APP_NAME: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_APP_VERSION: string

  // Server Configuration
  readonly VITE_PORT: string
  readonly VITE_HOST: string
  readonly VITE_OPEN_BROWSER: string
  readonly VITE_PREVIEW_PORT: string
  readonly VITE_BASE_URL: string

  // API Configuration
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_VERSION: string
  readonly VITE_API_TIMEOUT: string

  // Email Service Configuration
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_FORMSUBMIT_EMAIL: string
  readonly VITE_WEB3FORMS_ACCESS_KEY: string
  readonly VITE_GETFORM_ENDPOINT: string

  // Contact Information
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_CONTACT_PHONE: string
  readonly VITE_COMPANY_ADDRESS: string

  // Social Media
  readonly VITE_SOCIAL_LINKEDIN: string
  readonly VITE_SOCIAL_TWITTER: string
  readonly VITE_SOCIAL_FACEBOOK: string
  readonly VITE_SOCIAL_INSTAGRAM: string

  // Analytics
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_FACEBOOK_PIXEL_ID: string
  readonly VITE_HOTJAR_ID: string

  // Feature Flags
  readonly VITE_ENABLE_DARK_MODE: string
  readonly VITE_ENABLE_ANIMATIONS: string
  readonly VITE_ENABLE_CONTACT_FORM: string
  readonly VITE_ENABLE_ANALYTICS: string

  // Build Configuration
  readonly VITE_BUILD_DIR: string
  readonly VITE_SOURCE_MAP: string

  // Performance
  readonly VITE_LAZY_LOADING: string
  readonly VITE_IMAGE_OPTIMIZATION: string
  readonly VITE_BUNDLE_ANALYZER: string

  // Security
  readonly VITE_SECURITY_HEADERS: string
  readonly VITE_CORS_ORIGINS: string

  // Debug & Development
  readonly VITE_DEBUG_MODE: string
  readonly VITE_SHOW_CONSOLE_LOGS: string
  readonly VITE_DEV_TOOLS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}