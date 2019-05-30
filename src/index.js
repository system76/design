/**
 * web-design
 * Exports a bunch of helpful System76 design related components and styles
 */

// Needed to generate a css file with webpack
import './assets/styles/main.css'

import SysHeader1 from './components/sys-header-1.vue'
import SysHeader2 from './components/sys-header-2.vue'
import SysHeader3 from './components/sys-header-3.vue'
import SysHeader4 from './components/sys-header-4.vue'
import SysHeader5 from './components/sys-header-5.vue'
import SysHeader6 from './components/sys-header-6.vue'

import SysParagraph1 from './components/sys-paragraph-1.vue'
import SysParagraph2 from './components/sys-paragraph-2.vue'

import SysSubheader1 from './components/sys-subheader-1.vue'
import SysSubheader2 from './components/sys-subheader-2.vue'
import SysSubheader3 from './components/sys-subheader-3.vue'
import SysSubheader4 from './components/sys-subheader-4.vue'

export {
  SysHeader1,
  SysHeader2,
  SysHeader3,
  SysHeader4,
  SysHeader5,
  SysHeader6,

  SysParagraph1,
  SysParagraph2,

  SysSubheader1,
  SysSubheader2,
  SysSubheader3,
  SysSubheader4
}

export * from './tokens/index.module.js'
