const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css', {
    sassOptions: {
        outputStyle: "compressed",
    }
})
.options({
    autoprefixer: {
        options: {
            grid: true,
        },
    },
})
.autoload({
    "jquery": ['$', 'window.jQuery'],
})
.version();

if (!mix.inProduction()) {
    mix.sourceMaps(true, 'inline-source-map');
}
mix.extract();
