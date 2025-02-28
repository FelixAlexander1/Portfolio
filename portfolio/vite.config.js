// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      buildEnd() {
        // Esto solo es necesario si usas Netlify, no para Vercel
        copyFileSync(
          resolve(__dirname, 'public/_redirects'), 
          resolve(__dirname, 'dist/_redirects')
        );
      },
    },
  ],
  build: {
    outDir: 'dist', // Asegúrate de que la carpeta de salida sea correcta
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ruta correcta al index.html
      },
    },
  },
  publicDir: 'public', // Confirma que la carpeta pública esté bien ubicada
  root: '.', // Define correctamente la raíz del proyecto
})

