import { create } from '@storybook/theming'

import * as tokens from '../src/tokens/index.module.js'

export const theme = create({
  base: 'light',

  colorPrimary: tokens.colorWarmGray,
  colorSecondary: tokens.colorOrange,

  appBg: tokens.colorLightGray,
  appContentBg: tokens.colorWhite,

  brandTitle: 'System76',
  brandUrl: '/',
  brandImage: 'https://system76.com/assets/logo.png'
})
