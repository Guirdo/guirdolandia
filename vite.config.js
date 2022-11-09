import glob from 'glob'
import { resolve, relative, extname, basename, sep } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'pages')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname, 'public')

const input = Object.fromEntries(glob.sync('pages/**/*.html').map(file => {
    const fileName = resolve(root, relative('pages', file))
    let entryFile = relative('pages', file.slice(0, file.length - basename(file).length))
    let filePathSep = entryFile.split(sep)

    //When it comes to build a post file
    if (filePathSep.find(e => e === 'post')) {
        entryFile = basename(file).substring(0, basename(file).length - extname(file).length)
        return [entryFile, fileName]
    }
    //The main file
    if (filePathSep[0] === '') {
        return ['main', fileName]
    }

    return [entryFile, fileName]
}))

console.log(input)

export default defineConfig({
    root,
    publicDir,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input,
            output: {
                //Removing hash from output files
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    }
})