/**
 * test/spec/components/sys-header-3.js
 * Tests sys-header-3 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysHeader3 from '../../../src/components/sys-header-3.vue'

test(TagProp, SysHeader3, 'h1')
test(TagProp, SysHeader3, 'h2')
test(TagProp, SysHeader3, 'h3')
test(TagProp, SysHeader3, 'h4')
test(TagProp, SysHeader3, 'h5')
test(TagProp, SysHeader3, 'h6')
test(TagProp, SysHeader3, 'span')
test(TagProp, SysHeader3, 'p')
