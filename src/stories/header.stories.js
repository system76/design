import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import Header1 from '../components/header-1.vue'
import Header2 from '../components/header-2.vue'
import Header3 from '../components/header-3.vue'
import Header4 from '../components/header-4.vue'
import Header5 from '../components/header-5.vue'
import Header6 from '../components/header-6.vue'

import Paragraph1 from '../components/paragraph-1.vue'
import Paragraph2 from '../components/paragraph-2.vue'

import Subheader1 from '../components/subheader-1.vue'
import Subheader2 from '../components/subheader-2.vue'
import Subheader3 from '../components/subheader-3.vue'
import Subheader4 from '../components/subheader-4.vue'

storiesOf('Typography', module)
  .add('header-1', () => ({
    components: { Header1 },
    props: {
      tag: { default: text('Tag', 'h1') },
      text: { default: text('Text', 'Hello Header 1!') }
    },
    template: '<header-1 :tag="tag">{{ text }}</header-1>'
  }))
  .add('header-2', () => ({
    components: { Header2 },
    props: {
      tag: { default: text('Tag', 'h2') },
      text: { default: text('Text', 'Hello Header 2!') }
    },
    template: '<header-2 :tag="tag">{{ text }}</header-2>'
  }))
  .add('header-3', () => ({
    components: { Header3 },
    props: {
      tag: { default: text('Tag', 'h3') },
      text: { default: text('Text', 'Hello Header 3!') }
    },
    template: '<header-3 :tag="tag">{{ text }}</header-3>'
  }))
  .add('header-4', () => ({
    components: { Header4 },
    props: {
      tag: { default: text('Tag', 'h4') },
      text: { default: text('Text', 'Hello Header 4!') }
    },
    template: '<header-4 :tag="tag">{{ text }}</header-4>'
  }))
  .add('header-5', () => ({
    components: { Header5 },
    props: {
      tag: { default: text('Tag', 'h5') },
      text: { default: text('Text', 'Hello Header 5!') }
    },
    template: '<header-5 :tag="tag">{{ text }}</header-5>'
  }))
  .add('header-6', () => ({
    components: { Header6 },
    props: {
      tag: { default: text('Tag', 'h6') },
      text: { default: text('Text', 'Hello Header 6!') }
    },
    template: '<header-6 :tag="tag">{{ text }}</header-6>'
  }))
  .add('paragraph-1', () => ({
    components: { Paragraph1 },
    props: {
      tag: { default: text('Tag', 'p') },
      text: { default: text('Text', 'Hello Paragraph Text 1!') }
    },
    template: '<paragraph-1 :tag="tag">{{ text }}</paragraph-1>'
  }))
  .add('paragraph-2', () => ({
    components: { Paragraph2 },
    props: {
      tag: { default: text('Tag', 'p') },
      text: { default: text('Text', 'Hello Paragraph Text 2!') }
    },
    template: '<paragraph-2 :tag="tag">{{ text }}</paragraph-2>'
  }))
  .add('subheader-1', () => ({
    components: { Subheader1 },
    props: {
      tag: { default: text('Tag', 'h1') },
      text: { default: text('Text', 'Hello Subheader 1!') }
    },
    template: '<subheader-1 :tag="tag">{{ text }}</subheader-1>'
  }))
  .add('subheader-2', () => ({
    components: { Subheader2 },
    props: {
      tag: { default: text('Tag', 'h2') },
      text: { default: text('Text', 'Hello Subheader 2!') }
    },
    template: '<subheader-2 :tag="tag">{{ text }}</subheader-2>'
  }))
  .add('subheader-3', () => ({
    components: { Subheader3 },
    props: {
      tag: { default: text('Tag', 'h3') },
      text: { default: text('Text', 'Hello Subheader 3!') }
    },
    template: '<subheader-3 :tag="tag">{{ text }}</subheader-3>'
  }))
  .add('subheader-4', () => ({
    components: { Subheader4 },
    props: {
      tag: { default: text('Tag', 'h4') },
      text: { default: text('Text', 'Hello Subheader 4!') }
    },
    template: '<subheader-4 :tag="tag">{{ text }}</subheader-4>'
  }))
