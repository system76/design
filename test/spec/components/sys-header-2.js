/**
 * test/spec/components/sys-header-2.js
 * Tests sys-header-2 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysHeader2 from '../../../src/components/sys-header-2.vue'

test(TagProp, SysHeader2, 'h1')
test(TagProp, SysHeader2, 'h2')
test(TagProp, SysHeader2, 'h3')
test(TagProp, SysHeader2, 'h4')
test(TagProp, SysHeader2, 'h5')
test(TagProp, SysHeader2, 'h6')
test(TagProp, SysHeader2, 'span')
test(TagProp, SysHeader2, 'p')
