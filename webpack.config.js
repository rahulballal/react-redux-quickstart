'use strict';
const path = require('path');

const webpackConfiguration = {
  entry: path.join(__dirname, 'src','app','index.js'),
  output: {
    path: __dirname,
    fileName: path.join(__dirname, 'build','js', 'bundle.js')
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: __dirname,
    modulesDirectories:[
      'node_modules',
      './src/app/components',
      './src/app/containers',      
      './src/app/services',
      './src/app/actions',
      './src/app/reducers',
      './src/app/store'
    ],
    alias: {
      appStyles: 'src/app/styles/main.scss',
      actions: 'src'
    }
  },
  devtool: 'eval-source-map',
  debug: true,
  target: 'web',
  noInfo: true,
  plugins: [],
  module: {
    loaders:[]
  }
};

module.exports = webpackConfiguration;
