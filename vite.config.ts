import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    css: true,
    coverage: {
      provider: 'v8',
      include: ['src/components/**/*.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
      exclude: ['node_modules/', 'src/setupTest.ts'],
      reporter: ['text', 'html'],
    },
  },
})
