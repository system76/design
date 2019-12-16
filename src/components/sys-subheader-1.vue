<template>
  <component
    :is="tag"
    :class="$style.subheader1"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Subheader1',

  props: {
    /**
     * An HTML tag used for this header.
     */
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style module>
  .subheader1 {
    font-family: var(--font-family-slab);
    font-size: 1.5rem;
    font-smooth: auto;
    font-weight: 700;
    line-height: calc(var(--line-height) * 0.8333);
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .subheader1 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    .subheader1 {
      font-size: 1.8rem;
    }
  }
</style>
