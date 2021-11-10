/**
 * test/spec/components/sys-logo-type-16bit.js
 * Tests sys-logo-type-16bit component
 */

import { mount } from '@vue/test-utils'
import test from 'ava'

import SysLogoType16bit from '../../../src/components/sys-logo-type-16bit.vue'

test('renders an img tag', (t) => {
  const wrapper = mount(SysLogoType16bit)
  const html = wrapper.html()

  t.true(html.includes('<img'))
})
