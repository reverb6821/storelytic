import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8081,
    proxy: {
        //Focus here
        '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
            rewrite: (path) => { console.log(path); return path.replace('/^\/api/', '') }
        }
    }
}
})
