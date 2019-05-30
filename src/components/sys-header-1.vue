<template>
  <component
    :is="tag"
    :class="$style.header1"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'SysHeader1',

  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style module>
  .header1 {
    font-family: var(--font-family-sans);
    font-size: 2rem;
    font-smooth: auto;
    font-style: italic;
    font-weight: 200;
    line-height: calc(var(--line-height) * 0.8333);
    text-rendering: optimizeLegibility;
  }

  @media (min-width: 600px) {
    .header1 {
      font-size: 2.25rem;
    }
  }

  @media (min-width: 1280px) {
    .header1 {
      font-size: 2.4rem;
    }
  }
</style>
