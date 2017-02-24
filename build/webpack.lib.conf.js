var webpack = require('webpack');
var path = require('path');
var libraryName = 'vue-slideout';
var outputFile = libraryName + '.js';
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var config = merge(baseWebpackConfig, {
  entry: path.resolve(__dirname, '../src/plugin/plugin.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    "slideout": "slideout"
  }
});

module.exports = config;
