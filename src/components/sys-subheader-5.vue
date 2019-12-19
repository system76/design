<template>
  <component
    :is="tag"
    :class="$style.subheader5"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Subheader5',

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
  .subheader5 {
    font-family: var(--font-family-sans);
    font-size: 1.2rem;
    font-smooth: auto;
    font-style: normal;
    font-weight: 500;
    line-height: calc(var(--line-height) * 0.8333);
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .subheader5 {
      font-size: 1.375rem;
    }
  }

  @media (min-width: 1280px) {
    .subheader5 {
      font-size: 1.6rem;
    }
  }
</style>
