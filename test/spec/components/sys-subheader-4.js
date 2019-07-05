/**
 * web-design/test/spec/components/sys-subheader-4.js
 * Tests sys-subheader-4 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysSubheader4 from '../../../src/components/sys-subheader-4.vue'

test(TagProp, SysSubheader4, 'h1')
test(TagProp, SysSubheader4, 'h2')
test(TagProp, SysSubheader4, 'h3')
test(TagProp, SysSubheader4, 'h4')
test(TagProp, SysSubheader4, 'h5')
test(TagProp, SysSubheader4, 'h6')
test(TagProp, SysSubheader4, 'span')
test(TagProp, SysSubheader4, 'p')
