import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio-v5/", // YOUR REPO NAME HERE
  plugins: [react()],
})
