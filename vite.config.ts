import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@app': path.resolve(__dirname, 'src/app/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@layout': path.resolve(__dirname, 'src/components/layout/'),
    }
  }
})
