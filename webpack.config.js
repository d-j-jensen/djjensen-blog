// browser-sync start --server \"dist\" --files \"dist\" --ss \"dist\"
// node-sass --include-path node_modules/normalize-scss/sass --output-style compressed -o dist src/scss
// postcss -u autoprefixer -r dist/*.css
// stylelint src/scss/*.scss --syntax scss || true
// imagemin src/images/**/* --out-dir=dist/images
// posthtml -c posthtml.json

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}