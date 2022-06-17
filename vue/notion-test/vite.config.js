import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '~', replacement: `${__dirname}/src` }],
  },
  css: {
    //전역등록
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/scss/variables";',
      },
    },
  },
})
