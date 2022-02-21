const {
    merge
} = require('webpack-merge');
const {
    themePath,
    ...common
} = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/[name].min.css',
        }),
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, `${themePath}/assets/js/`),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
});