import {defineConfig} from 'vite'

export default defineConfig({
    base: '/portfolio_2/',
    build: {
        outDir: './docs',
        emptyOutDir: true
    }
})