/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: '127.0.0.1',
    port: 4000,
  },
  test: {
    css: false,
    globals: true,
    watch: false,
    environment: 'jsdom',
    setupFiles: './src/setup-test.ts',
  },
  build: {
    sourcemap: true,
  },
})
