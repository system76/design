<template>
  <component
    :is="tag"
    :class="$style.header6"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Header6',

  props: {
    tag: {
      type: String,
      default: 'h6'
    }
  }
}
</script>

<style module>
  .header6 {
    font-family: var(--font-family-slab);
    font-size: 1rem;
    font-smooth: auto;
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .header6 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1280px) {
    .header6 {
      font-size: 1.3rem;
    }
  }
</style>
