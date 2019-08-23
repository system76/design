/**
 * test/spec/components/sys-paragraph-1.js
 * Tests sys-paragraph-1 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysParagraph1 from '../../../src/components/sys-paragraph-1.vue'

test(TagProp, SysParagraph1, 'h1')
test(TagProp, SysParagraph1, 'h2')
test(TagProp, SysParagraph1, 'h3')
test(TagProp, SysParagraph1, 'h4')
test(TagProp, SysParagraph1, 'h5')
test(TagProp, SysParagraph1, 'h6')
test(TagProp, SysParagraph1, 'span')
test(TagProp, SysParagraph1, 'p')
