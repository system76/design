/**
 * src/components/Color.vue
 * Displays a single color value
 */

<template>
  <div
    class="color"
    :style="style"
  >
    <div class="color__spacer" />
    <div class="color__description">
      <span class="color__name">{{ friendlyName }}</span>

      <ul class="color__values">
        <li class="color__value">
          {{ hexValue }}
        </li>
        <li class="color__value">
          {{ rgbValue }}
        </li>
        <li class="color__value">
          {{ cmykValue }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .color {
    border-radius: 3px;
    border: 1px solid transparent;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
  }

  .color__description {
    padding: 1rem;
  }

  .color__name {
    font-weight: 600;
  }

  .color__values {
    margin: 0;
    padding: 0;
  }

  .color__value {
    list-style: none;
    margin: 0.4rem 0;
  }
</style>

<script>
import startCase from 'lodash/startCase'
import tinycolor from 'tinycolor2'

export default {
  name: 'Color',

  props: {
    name: {
      type: String,
      required: true
    },

    value: {
      type: String,
      required: true
    }
  },

  computed: {
    cmykValue () {
      // Tinycolor does not have support for this by default, but it's pretty
      // simple math
      const { r, g, b } = tinycolor(this.value).toRgb()

      let c = 1 - (r / 255)
      let m = 1 - (g / 255)
      let y = 1 - (b / 255)
      let k = Math.min(c, Math.min(m, y))

      c = (c - k) / (1 - k)
      m = (m - k) / (1 - k)
      y = (y - k) / (1 - k)

      c = isNaN(c) ? 0 : Math.round(c * 100)
      m = isNaN(m) ? 0 : Math.round(m * 100)
      y = isNaN(y) ? 0 : Math.round(y * 100)
      k = isNaN(k) ? 0 : Math.round(k * 100)

      return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`
    },

    friendlyName () {
      return startCase(this.name.replace('color_', ''))
    },

    hexValue () {
      return tinycolor(this.value).toHexString()
    },

    rgbValue () {
      return tinycolor(this.value).toRgbString()
    },

    similarValues () {
      return [
        tinycolor(this.value).spin(180),
        ...tinycolor(this.value).analogous()
      ]
    },

    style () {
      return {
        'background-color': this.value,
        'border-color': this.textColor,
        color: this.textColor
      }
    },

    textColor () {
      return tinycolor.mostReadable(this.value, this.similarValues, {
        includeFallbackColors: true,
        level: 'AAA',
        size: 'small'
      }).toRgbString()
    }
  }
}
</script>
