/**
 * minimal.js
 * Exports a minimal copy of System76 design tokens. Useful if we are using a
 * different CSS library, like tailwind.
 */

import './assets/styles/minimal.css'

import * as components from './components'

export function install (Vue) {
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })
}

export * from './components'
export * from './tokens/index.module.js'
