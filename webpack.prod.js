const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
var path = require('path')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
      loaders: [
          {
              test: /\.js/,
              loaders: ['babel-loader'],
              include: path.join(__dirname, 'src')
          },
          {
              test: /\.css/,
              loaders: ['style-loader', 'css-loader'],
          }
      ]
  }
});