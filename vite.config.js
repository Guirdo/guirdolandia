import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'pages')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname,'public')

export default defineConfig({
    root,
    publicDir,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                home: resolve(root, 'home', 'index.html'),
                guestbook: resolve(root, 'guestbook', 'index.html'),
            }
        }
    }
})