<template>
  <component
    :is="tag"
    :class="$style.subheader2"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Subheader2',

  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  }
}
</script>

<style module>
  .subheader2 {
    font-family: var(--font-family-slab);
    font-size: 1.4rem;
    font-smooth: auto;
    font-weight: 500;
    line-height: calc(var(--line-height) * 0.8333);
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .subheader2 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    .subheader2 {
      font-size: 1.8rem;
    }
  }
</style>
