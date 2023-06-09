const mix = require('laravel-mix');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader/lib/plugin')

var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin(),
        new VuetifyLoaderPlugin()
    ]
    // other webpack config ...
}

mix.webpackConfig(webpackConfig);

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');