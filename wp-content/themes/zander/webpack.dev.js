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

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
        new LiveReloadPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, `${themePath}/assets/js/`),
    },
});