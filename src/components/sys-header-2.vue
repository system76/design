<template>
  <component
    :is="tag"
    :class="$style.header2"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Header2',

  props: {
    /**
     * An HTML tag used for this header.
     */
    tag: {
      type: String,
      default: 'h2'
    }
  }
}
</script>

<style module>
  .header2 {
    font-family: var(--font-family-sans);
    font-size: 1.7rem;
    font-smooth: auto;
    font-weight: 300;
    letter-spacing: 0.15em;
    line-height: calc(var(--line-height) * 0.8333);
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
  }

  @media (min-width: 600px) {
    .header2 {
      font-size: 2rem;
    }
  }

  @media (min-width: 1280px) {
    .header2 {
      font-size: 2.1rem;
    }
  }
</style>
