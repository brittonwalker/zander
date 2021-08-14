const {
    merge
} = require('webpack-merge');
const {
    themePath,
    ...common
} = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/[name].min.css',
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, `${themePath}/assets/js/`),
    },
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCSSAssetsPlugin()],
    },
});