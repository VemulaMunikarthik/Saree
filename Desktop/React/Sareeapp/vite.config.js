import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace Saree with the EXACT name of your GitHub repo!
export default defineConfig({
  plugins: [react()],
  base: '/Saree/',  // ← This is essential for GitHub Pages!
})
