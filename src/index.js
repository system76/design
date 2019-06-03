/**
 * web-design/entry.js
 * Exports everything related to System76 design
 */

import './assets/styles/main.css'

import * as components from './components'

export function install (Vue) {
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName])
  })
}

export * from './components'
export * from './tokens/index.module.js'
