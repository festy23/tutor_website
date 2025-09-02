// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tutor_website_v4/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/features': '/src/features',
      '@/shared': '/src/shared',
      '@/assets': '/src/assets',
    },
  },
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'aos'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
