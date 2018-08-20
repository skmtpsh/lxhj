'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://172.16.100.15:8180/api"'
  BASE_API: '"http://58.56.160.126:18080/api"'
})
