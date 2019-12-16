/**
 * test/spec/components/sys-header-5.js
 * Tests sys-header-5 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysHeader5 from '../../../src/components/sys-header-5.vue'

test(TagProp, SysHeader5, 'h1')
test(TagProp, SysHeader5, 'h2')
test(TagProp, SysHeader5, 'h3')
test(TagProp, SysHeader5, 'h4')
test(TagProp, SysHeader5, 'h5')
test(TagProp, SysHeader5, 'h6')
test(TagProp, SysHeader5, 'span')
test(TagProp, SysHeader5, 'p')
