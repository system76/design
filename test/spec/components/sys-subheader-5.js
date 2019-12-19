/**
 * test/spec/components/sys-subheader-5.js
 * Tests sys-subheader-5 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysSubheader5 from '../../../src/components/sys-subheader-5.vue'

test(TagProp, SysSubheader5, 'h1')
test(TagProp, SysSubheader5, 'h2')
test(TagProp, SysSubheader5, 'h3')
test(TagProp, SysSubheader5, 'h4')
test(TagProp, SysSubheader5, 'h5')
test(TagProp, SysSubheader5, 'h6')
test(TagProp, SysSubheader5, 'span')
test(TagProp, SysSubheader5, 'p')
