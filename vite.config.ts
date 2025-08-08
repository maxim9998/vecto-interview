import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths(), svgr()],
  server: {
    open: true,
    port: 7000,
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    minify: 'esbuild',
    outDir: 'dist',
    chunkSizeWarningLimit: 400,

    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          'react-icons': ['react-icons'],
        },
      },
    },
  },

  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
