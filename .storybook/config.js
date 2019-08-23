import '../src/assets/styles/main.css'

import centered from '@storybook/addon-centered/vue'
import { addDecorator, addParameters, configure } from '@storybook/vue'

import { theme } from './theme'

addDecorator(centered)
addParameters({
  options: { theme }
})

configure(require.context('../src', true, /\.stories\.(js|ts|mdx)$/), module)
