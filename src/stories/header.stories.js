import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import Header1 from '../components/header-1.vue'

storiesOf('Header1', module)
  .add('normal', () => ({
    components: { Header1 },
    props: {
      tag: { default: text('Tag', 'h1') }
    },
    template: '<header-1 :tag="tag">Hello World!</header-1>'
  }))
