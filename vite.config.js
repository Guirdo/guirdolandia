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
    }else if(filePathSep.find(e => e === 'easteregg')){
        entryFile = basename(file).substring(0, basename(file).length - extname(file).length)
        return [entryFile, fileName]
    }
    //The main file
    if (filePathSep[0] === '') {
        if(basename(file) === 'index'){
            return ['main', fileName]
        }

        return[basename(file).substring(0, basename(file).length - extname(file).length),fileName]
    }

    return [entryFile, fileName]
}))

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