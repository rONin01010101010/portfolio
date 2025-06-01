import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
let process;
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2015', // Better browser compatibility
    rollupOptions: {
      output: {
        // Simplified chunking to avoid module loading issues
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    // Add explicit MIME types for dev server
    fs: {
      strict: false
    }
  },
  preview: {
    port: 4173,
    host: true
  },
  // Explicitly define file types
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})