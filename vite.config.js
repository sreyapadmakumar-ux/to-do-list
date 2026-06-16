import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This automatically handles the base path for local development AND GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
})