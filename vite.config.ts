import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uno from 'unocss/vite'
import Svg from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), uno(), Svg()]
})
