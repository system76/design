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

  <a href="https://travis-ci.org/system76/web-design">
    <img src="https://travis-ci.org/system76/web-design.svg" alt="travis-ci">
  </a>

  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/system76/web-design.svg" alt="greenkeeper">
  </a>

  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standard">
  </a>
</p>

---

This repository contains all colors, style variables, and documentation related
to how System76 styles it's web projects. It serves as the single source of
truth that all other web projects should use.

## Using

```
npm install --save-dev @system76/design
```

### Styles

You can use the CSS variables simply by importing the package.

```css
@import "@system76/design";

body {
  background-color: var(--black);
}
```

If you are using a pre-processor, you can import the respected file, but you
will need to use the full path. If you need another pre-processor file type,
please open a PR and we would be happy to include it.

```sass
@import "@system76/design/dist/main.sass";
```

```scss
@import "@system76/design/dist/main.scss";
```

You can also import a JavaScript object of the variables.

```js
const design = require('@system76/design')
```

```js
import * as design from '@system76/design'
```

And lastly, we have a JSON version you can use at
`@system76/design/dist/main.json`.

## Development

1) Download the repository

2) Run `npm ci`

3) Run `npm start`

4) Start hacking

## Deployment

Simply push to master and travis will do all the work for you!
