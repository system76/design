/**
 * test/spec/components/sys-logo.js
 * Tests sys-logo component
 */

import { mount } from '@vue/test-utils'
import test from 'ava'

import SysLogo from '../../../src/components/sys-logo.vue'

test('renders an svg tag', (t) => {
  const wrapper = mount(SysLogo)
  const html = wrapper.html()

  t.true(html.includes('<svg'))
})

test('uses the given class props', (t) => {
  const wrapper = mount(SysLogo, {
    propsData: {
      accentClass: 'accent-test-class',
      backgroundClass: 'background-test-class',
      foregroundClass: 'foreground-test-class'
    }
  })
  const html = wrapper.html()

  t.true(html.includes('accent-test-class'))
  t.true(html.includes('background-test-class'))
  t.true(html.includes('foreground-test-class'))
})
