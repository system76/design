<template>
  <component
    :is="tag"
    :class="$style.subheader3"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Subheader3',

  props: {
    tag: {
      type: String,
      default: 'h3'
    }
  }
}
</script>

<style module>
  .subheader3 {
    font-family: var(--font-family-slab);
    font-size: 1.5rem;
    font-smooth: auto;
    font-style: italic;
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .subheader3 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    .subheader3 {
      font-size: 1.8rem;
    }
  }
</style>
