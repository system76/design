<template>
  <component
    :is="tag"
    :class="$style.header5"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'Header5',

    props: {
      /**
       * An HTML tag used for this header.
       */
      tag: {
        type: String,
        default: 'h5'
      }
    }
  }
</script>

<style module>
  .header5 {
    font-family: var(--font-family-slab);
    font-size: 1.1rem;
    font-smooth: auto;
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .header5 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    .header5 {
      font-size: 1.7rem;
    }
  }
</style>
