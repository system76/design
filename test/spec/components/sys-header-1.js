/**
 * web-design/test/spec/components/sys-header-1.js
 * Tests sys-header-1 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysHeader1 from '../../../src/components/sys-header-1.vue'

test(TagProp, SysHeader1, 'h1')
test(TagProp, SysHeader1, 'h2')
test(TagProp, SysHeader1, 'h3')
test(TagProp, SysHeader1, 'h4')
test(TagProp, SysHeader1, 'h5')
test(TagProp, SysHeader1, 'h6')
test(TagProp, SysHeader1, 'span')
test(TagProp, SysHeader1, 'p')
