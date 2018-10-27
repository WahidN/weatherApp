const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("@babel/polyfill");

module.exports = {
    entry: ['@babel/polyfill', './src/js/app.js'],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /\.js$/, 
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]

};