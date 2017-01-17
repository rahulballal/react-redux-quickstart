'use strict';
const devConfig = require('./webpack.config.js');
const overrides = {};

module.exports = Object.assign({}, devConfig, overrides);
