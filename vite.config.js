import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'src',
  build: {
    outDir: 'dist',
    sourcemap: true, // Enable for debugging
    rollupOptions: {
      output: {
        manualChunks: undefined // Remove all chunking
      }
    }
  }
})