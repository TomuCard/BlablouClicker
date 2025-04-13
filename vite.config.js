import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@partials': path.resolve(__dirname, 'src/components/partials'),

      '@storeGame': path.resolve(__dirname, 'src/store/useGameStore.jsx'),
      '@storeAutoClick': path.resolve(__dirname, 'src/store/useAutoClickStore.jsx'),
      '@storeClickPower': path.resolve(__dirname, 'src/store/useClickPowerStore.jsx'),
      '@autoSave': path.resolve(__dirname, 'src/store/useLocalStorage.jsx'),

      '@assets': path.resolve(__dirname, 'src/assets'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    }
  }
})
