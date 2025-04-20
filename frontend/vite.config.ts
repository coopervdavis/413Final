import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // or any port you want
    strictPort: true, // optional, will fail if the port is taken
  },
})
