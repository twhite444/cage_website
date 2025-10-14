import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  base: '/', // Changed for Vercel deployment
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
          carousel: ['react-slick', 'slick-carousel'],
          maps: ['react-leaflet', 'leaflet'],
          icons: ['react-icons']
        },
      },
    },
    // Enhanced build optimization
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Image optimization for development
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
