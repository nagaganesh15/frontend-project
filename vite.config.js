import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-project/", // Update to match GitHub Pages repo name
  plugins: [react()]
})
