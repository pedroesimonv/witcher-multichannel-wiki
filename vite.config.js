import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        adaptaciones: resolve(__dirname, 'adaptaciones.html'),
        autor: resolve(__dirname, 'autor.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
});