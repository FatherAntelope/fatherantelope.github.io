import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      minify: true,
      output: {
        format: 'umd',
        entryFileNames: '[name].js',
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '~': '/src',
    }
  },
  server: {
    host: true,
    port: 8080,
  },
  plugins: [react(), tsconfigPaths()],
});
