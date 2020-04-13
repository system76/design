<template>
  <component
    :is="tag"
    :class="$style.header4"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'Header4',

    props: {
      /**
       * An HTML tag used for this header.
       */
      tag: {
        type: String,
        default: 'h4'
      }
    }
  }
</script>

<style module>
  .header4 {
    font-family: var(--font-family-sans);
    font-size: 1.6rem;
    font-smooth: auto;
    font-style: italic;
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .header4 {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 1280px) {
    .header4 {
      font-size: 2rem;
    }
  }
</style>
