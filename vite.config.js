import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { quasar } from '@quasar/vite-plugin';
import path from 'path';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3010,
        strictPort: true,
        hmr: {
            host: '18.179.14.183',
        },
    },
    base: '/',
    resolve: {
        alias: {
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        }
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        quasar({
            // sassVariables: 'resources/css/quasar-variables.sass'
        }),
    ],
});
