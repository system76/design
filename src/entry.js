/**
 * entry.js
 * Exports everything related to System76 design for browser script entry
 */

import * as plugin from './index'

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export * from './index'
