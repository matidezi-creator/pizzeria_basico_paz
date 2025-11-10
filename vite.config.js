import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  root: '.', // raíz del proyecto
  build: {
    outDir: 'dist', // carpeta de salida
    rollupOptions: {
      input: {
        main: 'index.html',
        menu: 'menu.html',
      },
    },
  },
  server: {
    open: '/index.html',
  },
});
