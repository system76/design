<template>
  <component
    :is="tag"
    :class="$style.paragraph2"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Paragraph2',

  props: {
    /**
     * An HTML tag used for this header.
     */
    tag: {
      type: String,
      default: 'p'
    }
  }
}
</script>

<style module>
  .paragraph2 {
    font-family: var(--font-family-sans);
    font-size: 1.22rem;
    font-smooth: auto;
    hyphens: none;
    text-rendering: optimizeLegibility;
    word-break: keep-all;
    word-wrap: normal;
  }

  @media (min-width: 600px) {
    .paragraph2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    .paragraph2 {
      font-size: 1.67rem;
    }
  }
</style>
