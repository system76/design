/**
 * web-design/test/spec/components/sys-subheader-2.js
 * Tests sys-subheader-2 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysSubheader2 from '../../../src/components/sys-subheader-2.vue'

test(TagProp, SysSubheader2, 'h1')
test(TagProp, SysSubheader2, 'h2')
test(TagProp, SysSubheader2, 'h3')
test(TagProp, SysSubheader2, 'h4')
test(TagProp, SysSubheader2, 'h5')
test(TagProp, SysSubheader2, 'h6')
test(TagProp, SysSubheader2, 'span')
test(TagProp, SysSubheader2, 'p')
