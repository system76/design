/**
 * styleguide.config.js
 * Configures styleguide so we have a nice documentation page about our build
 * design logic.
 */

const { resolve } = require('path')

module.exports = {
  title: '@system76/design',

  template: {
    title: '@system76/design',
    lang: 'en',
    trimWhitespace: true,
    head: {
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0',
      }, {
        name: 'format-detection',
        content: 'telephone=no',
      }]
    }
  },

  theme: {
    maxWidth: '100%',
    sidebarWidth: 250,
    fontFamily: {
      base: ["'Fira Sans'", 'Helvetica', 'Arial', 'sans-serif'],
      monospace: ['Ubuntu Mono', "'Liberation Mono'", 'Menlo', 'monospace']
    }
  },

  editorConfig: {
    theme: 'night'
  },

  require: [
    resolve(__dirname, 'src/assets/index.css'),
  ],

  defaultExample: true,
  pagePerSection: true,

  styleguideDir: resolve(__dirname, 'docs'),

  sections: [{
    name: 'About',
    content: resolve(__dirname, 'src/pages/index.md'),
    sectionDepth: 1,
    exampleMode: 'hide',
    usageMode: 'hide'
  }, {
    name: 'Tokens',
    content: resolve(__dirname, 'src/pages/tokens.md'),
    sectionDepth: 1,
    exampleMode: 'hide',
    usageMode: 'hide',
    components: () => [
      "./src/components/Colors.vue"
    ]
  }]
}
