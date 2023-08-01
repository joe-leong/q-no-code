import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import veauryVitePlugins from 'veaury/vite/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // vueJsx(),
    veauryVitePlugins({
      type: 'vue'
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true
      },
      dts: './auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
