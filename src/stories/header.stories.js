import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import SysHeader1 from '../components/sys-header-1.vue'
import SysHeader2 from '../components/sys-header-2.vue'
import SysHeader3 from '../components/sys-header-3.vue'
import SysHeader4 from '../components/sys-header-4.vue'
import SysHeader5 from '../components/sys-header-5.vue'
import SysHeader6 from '../components/sys-header-6.vue'

import SysParagraph1 from '../components/sys-paragraph-1.vue'
import SysParagraph2 from '../components/sys-paragraph-2.vue'

import SysSubheader1 from '../components/sys-subheader-1.vue'
import SysSubheader2 from '../components/sys-subheader-2.vue'
import SysSubheader3 from '../components/sys-subheader-3.vue'
import SysSubheader4 from '../components/sys-subheader-4.vue'

storiesOf('Typography', module)
  .add('header-1', () => ({
    components: { SysHeader1 },
    props: {
      tag: { default: text('Tag', 'h1') },
      text: { default: text('Text', 'Hello Header 1!') }
    },
    template: '<sys-header-1 :tag="tag">{{ text }}</sys-header-1>'
  }))
  .add('header-2', () => ({
    components: { SysHeader2 },
    props: {
      tag: { default: text('Tag', 'h2') },
      text: { default: text('Text', 'Hello Header 2!') }
    },
    template: '<sys-header-2 :tag="tag">{{ text }}</sys-header-2>'
  }))
  .add('header-3', () => ({
    components: { SysHeader3 },
    props: {
      tag: { default: text('Tag', 'h3') },
      text: { default: text('Text', 'Hello Header 3!') }
    },
    template: '<sys-header-3 :tag="tag">{{ text }}</sys-header-3>'
  }))
  .add('header-4', () => ({
    components: { SysHeader4 },
    props: {
      tag: { default: text('Tag', 'h4') },
      text: { default: text('Text', 'Hello Header 4!') }
    },
    template: '<sys-header-4 :tag="tag">{{ text }}</sys-header-4>'
  }))
  .add('header-5', () => ({
    components: { SysHeader5 },
    props: {
      tag: { default: text('Tag', 'h5') },
      text: { default: text('Text', 'Hello Header 5!') }
    },
    template: '<sys-header-5 :tag="tag">{{ text }}</sys-header-5>'
  }))
  .add('header-6', () => ({
    components: { SysHeader6 },
    props: {
      tag: { default: text('Tag', 'h6') },
      text: { default: text('Text', 'Hello Header 6!') }
    },
    template: '<sys-header-6 :tag="tag">{{ text }}</sys-header-6>'
  }))
  .add('paragraph-1', () => ({
    components: { SysParagraph1 },
    props: {
      tag: { default: text('Tag', 'p') },
      text: { default: text('Text', 'Hello Paragraph Text 1!') }
    },
    template: '<sys-paragraph-1 :tag="tag">{{ text }}</sys-paragraph-1>'
  }))
  .add('paragraph-2', () => ({
    components: { SysParagraph2 },
    props: {
      tag: { default: text('Tag', 'p') },
      text: { default: text('Text', 'Hello Paragraph Text 2!') }
    },
    template: '<sys-paragraph-2 :tag="tag">{{ text }}</sys-paragraph-2>'
  }))
  .add('subheader-1', () => ({
    components: { SysSubheader1 },
    props: {
      tag: { default: text('Tag', 'h1') },
      text: { default: text('Text', 'Hello Subheader 1!') }
    },
    template: '<sys-subheader-1 :tag="tag">{{ text }}</sys-subheader-1>'
  }))
  .add('subheader-2', () => ({
    components: { SysSubheader2 },
    props: {
      tag: { default: text('Tag', 'h2') },
      text: { default: text('Text', 'Hello Subheader 2!') }
    },
    template: '<sys-subheader-2 :tag="tag">{{ text }}</sys-subheader-2>'
  }))
  .add('subheader-3', () => ({
    components: { SysSubheader3 },
    props: {
      tag: { default: text('Tag', 'h3') },
      text: { default: text('Text', 'Hello Subheader 3!') }
    },
    template: '<sys-subheader-3 :tag="tag">{{ text }}</sys-subheader-3>'
  }))
  .add('subheader-4', () => ({
    components: { SysSubheader4 },
    props: {
      tag: { default: text('Tag', 'h4') },
      text: { default: text('Text', 'Hello Subheader 4!') }
    },
    template: '<sys-subheader-4 :tag="tag">{{ text }}</sys-subheader-4>'
  }))
