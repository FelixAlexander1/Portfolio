import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define la carpeta de salida
    rollupOptions: {
      input: 'index.html', // Asegúrate de que este archivo está presente
    },
  },
});