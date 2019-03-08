/**
 * src/components/Colors.vue
 * Displays all of the colors in a nice to see view
 */

<template>
  <div>
    <template v-for="[category, colors] in categories">
      <h3>{{ category }}</h3>

      <div class="colors">
        <Color
          v-for="color in colors"
          :key="color.name"
          :name="color.name"
          :value="color.value"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
  .colors {
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
</style>

<script>
import startCase from 'lodash/startCase'

import tokens from '../../dist/index.raw.json'
import Color from './Color'

export default {
  name: 'Colors',

  components: {
    Color
  },

  computed: {
    categories () {
      return this.colors
        .map((c) => c.category)
        .filter((c) => (c != null && c !== ''))
        .filter((c, i, a) => (a.indexOf(c) === i))
        .map((c) => [c, this.colorsInCategory(c)])
        .map(([c, colors]) => [c.replace('color_', ''), colors])
        .map(([c, colors]) => [startCase(c), colors])
    },

    colors () {
      return Object.entries(tokens.props)
        .filter(([key, value]) => key.startsWith('color_'))
        .map(([key, value]) => value)
    }
  },

  methods: {
    colorsInCategory (category) {
      return this.colors.filter((c) => (c.category === category))
    }
  }
}
</script>
