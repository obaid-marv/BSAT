import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Specify the path to your PostCSS config file
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
