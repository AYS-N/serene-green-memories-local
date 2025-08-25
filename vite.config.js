
import { defineConfig } from 'vite'

export default defineConfig(() => ({
  base: '/serene-green-memories-local/',
  server: {
    host: "::",
    port: 8080,
    open: '/',
  },
  plugins: [],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        services: 'services.html',
        contact: 'contact.html',
        faq: 'faq.html',
        blog: 'blog.html',
        blogDetail: 'blog-detail.html',
        mainJs: 'js/main.js'
      }
    }
  }
}))
