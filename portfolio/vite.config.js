import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Directorio de salida
    rollupOptions: {
      input: 'index.html', // Asegúrate de que este archivo sea el de entrada
    },
  },
});