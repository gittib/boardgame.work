import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import autoprefixer from 'autoprefixer';
import sass from 'sass';

export default defineConfig({
  plugins: [
    laravel({
      input: [
          'resources/js/app.js',
          'resources/sass/app.scss',
      ],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '$': 'jquery',
      'jquery': 'jquery',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        outputStyle: 'compressed',
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          grid: true,
        }),
      ],
    },
  },
  build: {
    sourcemap: process.env.NODE_ENV !== 'production' ? 'inline' : false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['jquery'],
        },
      },
    },
  },
});
