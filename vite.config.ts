// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', 
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
