'use strict';

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', './index.js']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory=true&presets[]=es2015!eslint',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval'
};
