# https://github.com/laravel/vite-plugin/blob/main/UPGRADE.md#migrating-from-laravel-mix-to-vite

# Rootユーザーで実行する
curl -fsSL https://rpm.nodesource.com/setup_lts.x -o nodesource_setup.sh
bash nodesource_setup.sh
yum install -y curl
node -v

npm audit fix
npm install --save-dev vite laravel-vite-plugin
npm install --save @fortawesome/fontawesome-free
npm install --save-dev vite laravel-vite-plugin
npm install --save-dev @vitejs/plugin-vue
npx update-browserslist-db@latest
vim vite.config.js
cat vite.config.js
### import { defineConfig } from 'vite';
### import laravel from 'laravel-vite-plugin';
### import autoprefixer from 'autoprefixer';
### import sass from 'sass';
### 
### export default defineConfig({
###   plugins: [
###     laravel({
###       input: [
###           'resources/js/app.js',
###           'resources/sass/app.scss',
###       ],
###       refresh: true,
###     }),
###   ],
###   resolve: {
###     alias: {
###       '$': 'jquery',
###       'jquery': 'jquery',
###     },
###   },
###   css: {
###     preprocessorOptions: {
###       scss: {
###         outputStyle: 'compressed',
###       },
###     },
###     postcss: {
###       plugins: [
###         autoprefixer({
###           grid: true,
###         }),
###       ],
###     },
###   },
###   build: {
###     sourcemap: process.env.NODE_ENV !== 'production' ? 'inline' : false,
###     rollupOptions: {
###       output: {
###         manualChunks: {
###           vendor: ['jquery'],
###         },
###       },
###     },
###   },
### });

vim resources/js/bootstrap.js
cat resources/js/bootstrap.js
### import _ from 'lodash';
### window._ = _;
###
### /**
###  * We'll load the axios HTTP library which allows us to easily issue requests
###  * to our Laravel back-end. This library automatically handles sending the
###  * CSRF token as a header based on the value of the "XSRF" token cookie.
###  */
###
### import axios from 'axios';
### window.axios = axios;
###
### window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
###
### /**
###  * Echo exposes an expressive API for subscribing to channels and listening
###  * for events that are broadcast by Laravel. Echo and event broadcasting
###  * allows your team to easily build robust real-time web applications.
###  */
###
### // import Echo from 'laravel-echo';
###
### // window.Pusher = require('pusher-js');
###
### // window.Echo = new Echo({
### //     broadcaster: 'pusher',
### //     key: process.env.MIX_PUSHER_APP_KEY,
### //     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
### //     forceTLS: true
### // });

