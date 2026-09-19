import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Pastikan ini diimport

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Masukkan plugin ini di sini
  ],
  base: '/myportfolio/', // Sesuaikan dengan nama repo GitHub Anda
})