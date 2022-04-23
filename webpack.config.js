const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']},
            { test: /\.ts$/ , use: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './images', to: 'images', noErrorOnMissing: true }
            ]
        }),
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })
    ]


}