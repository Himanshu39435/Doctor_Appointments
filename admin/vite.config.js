import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: 5174
  },
  
  // *** Add this 'base' property for GitHub Pages deployment ***
  base: "/doctor_appointment/", 
})