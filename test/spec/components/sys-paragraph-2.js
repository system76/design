/**
 * test/spec/components/sys-paragraph-2.js
 * Tests sys-paragraph-2 component
 */

import test from 'ava'

import { TagProp } from '../../_macros'
import SysParagraph2 from '../../../src/components/sys-paragraph-2.vue'

test(TagProp, SysParagraph2, 'h1')
test(TagProp, SysParagraph2, 'h2')
test(TagProp, SysParagraph2, 'h3')
test(TagProp, SysParagraph2, 'h4')
test(TagProp, SysParagraph2, 'h5')
test(TagProp, SysParagraph2, 'h6')
test(TagProp, SysParagraph2, 'span')
test(TagProp, SysParagraph2, 'p')
