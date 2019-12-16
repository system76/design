<div align="center">
  <h1>@system76/design</h1>
  <h3>System76 styles and design related web assets</h3>
  <br>
  <br>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@system76/design/">
    <img src="https://img.shields.io/npm/v/@system76/design.svg" alt="npm">
  </a>

  <a href="https://travis-ci.org/system76/design">
    <img src="https://travis-ci.org/system76/design.svg" alt="travis-ci">
  </a>

  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="renovate">
  </a>

  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standard">
  </a>

  <a href="https://design.origin76.com/">
    <img src="https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg" alt="Storybook">
  </a>
</p>

---

This repository contains all colors, style variables, typography and
documentation related to how System76 styles it's web projects. It serves as the
single source of truth that all other web projects should use.

## Using

```
npm install --save-dev @system76/design
```

### Tips

1) You will need to ensure that babel `sourceType` is set to `unambiguous`. In
nuxt, this means adding the following to your configuration:

```
build: {
  babel: {
    sourceType: 'unambiguous'
  }
}
```

## Development

1) Download the repository

2) Run `npm ci`

3) Run `npm run build`

4) Run `npm start`

5) Start hacking

## Deployment

Simply push to master and travis will do all the work for you!
