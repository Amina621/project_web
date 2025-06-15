import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:3000', // Change this to your API server URL
        changeOrigin: true,
        secure: false, // Set to true if your API uses HTTPS
      },
    }
  },
  plugins: [react()],
})
