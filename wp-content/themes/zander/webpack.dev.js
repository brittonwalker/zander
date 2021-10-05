const {
    merge
} = require('webpack-merge');
const {
    themePath,
    ...common
} = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
        new LiveReloadPlugin(),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, `${themePath}/assets/js/`),
    },
});