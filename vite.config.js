import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Group pages together
          pages: [
            'src/Pages/tracklist.jsx',
            'src/Pages/Home.jsx',
            'src/Pages/About.jsx',
            'src/Pages/Contact.jsx',
            'src/Pages/Project.jsx'
          ],
          // Keep vendor libraries separate (removed duplicates)
          vendor: ['react', 'react-dom', 'react-router-dom']
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    // Add MIME type headers for dev server
    middlewareMode: false
  },
  preview: {
    port: 4173,
    host: true
  }
})