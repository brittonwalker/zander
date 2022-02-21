const path = require('path');
const themePath = '.';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const globImporter = require('node-sass-glob-importer');

module.exports = {
  themePath,
  entry: {
    zander: [
      `${themePath}/js/main.js`,
      `${themePath}/scss/main.scss`
    ],
  },
  devtool: 'source-map',
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'node_modules'), 'node_modules'],
    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    },
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules\/(?!(bootstrap|wpapi)\/).*/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                importer: globImporter(),
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {},
};
