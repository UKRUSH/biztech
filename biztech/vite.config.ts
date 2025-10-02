import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    
    // Define global constants
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    // Path resolution
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@contexts': path.resolve(__dirname, './src/contexts'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },

    // Development server configuration
    server: {
      port: parseInt(env.VITE_PORT) || 3000,
      host: env.VITE_HOST === 'true' || 'localhost',
      open: env.VITE_OPEN_BROWSER === 'true',
      cors: true,
      strictPort: false,
      historyApiFallback: true,
    },

    // Preview server configuration
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT) || 4173,
      host: env.VITE_HOST === 'true' || 'localhost',
      open: env.VITE_OPEN_BROWSER === 'true',
      historyApiFallback: true,
    },

    // Build configuration
    build: {
      outDir: env.VITE_BUILD_DIR || 'dist',
      assetsDir: 'assets',
      sourcemap: env.VITE_SOURCE_MAP === 'true',
      minify: env.NODE_ENV === 'production' ? 'esbuild' : false,
      target: 'esnext',
      
      // Rollup options
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },

      // Build performance
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096,
    },

    // CSS configuration
    css: {
      devSourcemap: true,
    },

    // Environment variables
    envPrefix: 'VITE_',
    envDir: './',

    // Optimization
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@emailjs/browser',
      ],
      exclude: [],
    },

    // Base public path
    base: env.VITE_BASE_URL || '/',

    // Public directory
    publicDir: 'public',
  }
})
