/**
 * web-design/test/spec/components/sys-header-6.js
 * Tests sys-header-6 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysHeader6 from '../../../src/components/sys-header-6.vue'

test(TagProp, SysHeader6, 'h1')
test(TagProp, SysHeader6, 'h2')
test(TagProp, SysHeader6, 'h3')
test(TagProp, SysHeader6, 'h4')
test(TagProp, SysHeader6, 'h5')
test(TagProp, SysHeader6, 'h6')
test(TagProp, SysHeader6, 'span')
test(TagProp, SysHeader6, 'p')
