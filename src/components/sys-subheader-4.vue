<template>
  <component
    :is="tag"
    :class="$style.subheader4"
  >
    <!-- @slot The Inner HTML -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Subheader4',

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
  .subheader4 {
    font-family: var(--font-family-slab);
    font-size: 1.5rem;
    font-smooth: auto;
    font-style: normal;
    font-weight: 300;
    line-height: calc(var(--line-height) * 0.8333);
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .subheader4 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    .subheader4 {
      font-size: 1.8rem;
    }
  }
</style>
