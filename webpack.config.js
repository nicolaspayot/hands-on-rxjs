'use strict';

var webpack = require('webpack')

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: ['webpack/hot/dev-server', './index.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { cacheDirectory: true, presets: [ 'es2015' ] }
      }
    ]
  },
  devtool : 'eval'
};
