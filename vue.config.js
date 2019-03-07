/**
 * vue.config.js
 * Configures vue cli settings. This is mostly a no-op because this repository
 * does not generate an output with normal vue code.
 */

const { resolve } = require('path')

module.exports = {
  outputDir: resolve(__dirname, 'docs')
}
