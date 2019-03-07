/**
 * styleguide.config.js
 * Configures styleguide so we have a nice documentation page about our build
 * design logic.
 */

const { resolve } = require('path')
const { version } = require('./package.json')

module.exports = {
  title: '@system76/design',
  version,
  theme: {
    maxWidth: '100%',
    sidebarWidth: 240,
    fontFamily: {
      base: ["'Fira Sans'", 'Helvetica', 'Arial', 'sans-serif'],
      monospace: ['Consolas', "'Liberation Mono'", 'Menlo', 'monospace']
    }
  },
  editorConfig: {
    theme: 'night'
  },
  components: resolve(__dirname, 'src/components/**/[A-Z]*.vue'),
  defaultExample: true,
  pagePerSection: true,
  styleguideDir: resolve(__dirname, 'docs')
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // }
}
