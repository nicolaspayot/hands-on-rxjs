'use strict';

/* eslint-disable no-var */
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', './index.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Hammer: 'hammerjs/hammer'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'ng-cache'
      },
      {
        test: /\.(svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(jpg|png|eot|ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?cacheDirectory=true&presets[]=es2015!eslint',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval'
};
