import '../src/assets/styles/main.css'

import centered from '@storybook/addon-centered/vue'
import { withA11y } from '@storybook/addon-a11y'
import { addDecorator, addParameters } from '@storybook/vue'

import { theme } from './theme'

addDecorator(centered)
addDecorator(withA11y)
addParameters({
  options: { theme }
})
