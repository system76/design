<template>
  <component
    :is="tag"
    :class="$style.header3"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'Header3',

    props: {
      /**
       * An HTML tag used for this header.
       */
      tag: {
        type: String,
        default: 'h3'
      }
    }
  }
</script>

<style module>
  .header3 {
    font-family: var(--font-family-sans);
    font-size: 1.4rem;
    font-smooth: auto;
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .header3 {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1280px) {
    .header3 {
      font-size: 1.85rem;
    }
  }
</style>
