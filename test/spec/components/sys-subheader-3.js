/**
 * test/spec/components/sys-subheader-3.js
 * Tests sys-subheader-3 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysSubheader3 from '../../../src/components/sys-subheader-3.vue'

test(TagProp, SysSubheader3, 'h1')
test(TagProp, SysSubheader3, 'h2')
test(TagProp, SysSubheader3, 'h3')
test(TagProp, SysSubheader3, 'h4')
test(TagProp, SysSubheader3, 'h5')
test(TagProp, SysSubheader3, 'h6')
test(TagProp, SysSubheader3, 'span')
test(TagProp, SysSubheader3, 'p')
