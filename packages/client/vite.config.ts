import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: '../../public',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
