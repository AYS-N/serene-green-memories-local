
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(() => ({
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
        blogDetail: 'blog-detail.html'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
}))
