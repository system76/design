/**
 * web-design
 * Exports a bunch of helpful System76 design related components and styles
 */

// Needed to generate a css file with webpack
import './assets/styles/main.css'

import Header1 from './components/header-1.vue'
import Header2 from './components/header-2.vue'
import Header3 from './components/header-3.vue'
import Header4 from './components/header-4.vue'
import Header5 from './components/header-5.vue'
import Header6 from './components/header-6.vue'

import Paragraph1 from './components/paragraph-1.vue'
import Paragraph2 from './components/paragraph-2.vue'

import Subheader1 from './components/subheader-1.vue'
import Subheader2 from './components/subheader-2.vue'
import Subheader3 from './components/subheader-3.vue'
import Subheader4 from './components/subheader-4.vue'

export {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,

  Paragraph1,
  Paragraph2,

  Subheader1,
  Subheader2,
  Subheader3,
  Subheader4
}

export * from './tokens/index.module.js'
