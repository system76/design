/**
 * web-design/test/spec/components/sys-header-4.js
 * Tests sys-header-4 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysHeader4 from '../../../src/components/sys-header-4.vue'

test(TagProp, SysHeader4, 'h1')
test(TagProp, SysHeader4, 'h2')
test(TagProp, SysHeader4, 'h3')
test(TagProp, SysHeader4, 'h4')
test(TagProp, SysHeader4, 'h5')
test(TagProp, SysHeader4, 'h6')
test(TagProp, SysHeader4, 'span')
test(TagProp, SysHeader4, 'p')
