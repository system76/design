import '../src/assets/styles/main.css'

import centered from '@storybook/addon-centered/vue'
import { DocsPage } from '@storybook/addon-docs/blocks'
import { addDecorator, addParameters, configure, load } from '@storybook/vue'

import { theme } from './theme'

addDecorator(centered)
addParameters({
  docs: DocsPage,
  options: { theme }
})

load(require.context('../src', true, /\.stories\.(js|ts|mdx)$/), module)
