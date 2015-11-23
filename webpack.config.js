'use strict';

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', './index.js']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'ng-cache'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass'
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
