/**
 * web-design/test/spec/components/sys-subheader-1.js
 * Tests sys-subheader-1 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysSubheader1 from '../../../src/components/sys-subheader-1.vue'

test(TagProp, SysSubheader1, 'h1')
test(TagProp, SysSubheader1, 'h2')
test(TagProp, SysSubheader1, 'h3')
test(TagProp, SysSubheader1, 'h4')
test(TagProp, SysSubheader1, 'h5')
test(TagProp, SysSubheader1, 'h6')
test(TagProp, SysSubheader1, 'span')
test(TagProp, SysSubheader1, 'p')
