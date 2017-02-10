let mix = require('laravel-mix').mix;

let env = 'test/';

mix.sass('resources/assets/sass/codeartisan-ui.scss',env+'css/codeartisan.css');
//mix.js('resources/assets/js/button.js',env+'js/button.js')