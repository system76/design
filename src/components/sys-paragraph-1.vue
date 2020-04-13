<template>
  <component
    :is="tag"
    :class="$style.paragraph1"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'Paragraph1',

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
  .paragraph1 {
    font-family: var(--font-family-sans);
    font-size: 1.2rem;
    font-smooth: auto;
    hyphens: none;
    text-rendering: optimizeLegibility;
    word-break: keep-all;
    word-wrap: normal;
  }

  @media (min-width: 600px) {
    .paragraph1 {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1280px) {
    .paragraph1 {
      font-size: 1.3rem;
    }
  }
</style>
