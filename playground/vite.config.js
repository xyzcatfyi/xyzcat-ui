import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Import directly from src — no reinstall needed
      'xyzcat-ui': resolve(__dirname, '../src/index.js'),
    },
  },
});
