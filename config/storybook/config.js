/**
 * config/storybook/config.js
 * The main configuration settings for storybook
 */

import '../../src/assets/styles/main.css'

import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/vue'

import { theme } from './theme'

addDecorator(centered)
addDecorator(withKnobs)
addParameters({ options: { theme } })

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
