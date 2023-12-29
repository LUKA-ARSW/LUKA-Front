import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    host: true,
    port: 14000,
  },

  resolve: {
    alias: {
      '@*': '/src',
      '@componentes': '/src/componentes',
      '@paginas': '/src/paginas',
      '@util': '/src/util',
      '@img': '/src/img',
      '@hooks': '/src/hooks',
      '@style': '/src/style',
      '@servicios': '/src/servicios',
    },
  }

})
