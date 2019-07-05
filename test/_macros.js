/**
 * web-design/test/_macros.js
 * Helpful Ava test macros
 */

import { mount } from '@vue/test-utils'

const TagProp = (t, component, tag) => {
  const wrapper = mount(component, {
    propsData: { tag }
  })

  t.is(wrapper.element.tagName, tag.toUpperCase())
}

TagProp.title = (provided = '', component, tag) =>
  `${component.name} accepts "${tag}" tag prop and outputs a "${tag}" element`

export { TagProp }
