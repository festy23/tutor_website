import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  base: 'https://festy23.github.io/tutor_website/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})