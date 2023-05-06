import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_API_ENDPOINT_URL":
      "https://shree-dental-and-care.vercel.app/",
  },
});
