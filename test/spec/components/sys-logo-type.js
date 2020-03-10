/**
 * test/spec/components/sys-logo-type.js
 * Tests sys-logo-type component
 */

import { mount } from '@vue/test-utils'
import test from 'ava'

import SysLogoType from '../../../src/components/sys-logo-type.vue'

test('renders an svg tag', (t) => {
  const wrapper = mount(SysLogoType)
  const html = wrapper.html()

  t.true(html.includes('<svg'))
})

test('uses the given class props', (t) => {
  const wrapper = mount(SysLogoType, {
    propsData: {
      accentClass: 'accent-test-class',
      foregroundClass: 'foreground-test-class'
    }
  })
  const html = wrapper.html()

  t.true(html.includes('accent-test-class'))
  t.true(html.includes('foreground-test-class'))
})
