<template>
  <component
    :is="tag"
    :class="$style.paragraph1"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Paragraph1',

  props: {
    tag: {
      type: String,
      default: 'p'
    }
  }
}
</script>

<style module>
  .paragraph1 {
    font-family: var(--font-family-sans);
    font-size: 1rem;
    font-smooth: auto;
    hyphens: none;
    text-rendering: optimizeLegibility;
    word-break: keep-all;
    word-wrap: normal;
  }

  @media (min-width: 600px) {
    .paragraph1 {
      font-size: 1.225rem;
    }
  }

  @media (min-width: 1280px) {
    .paragraph1 {
      font-size: 1.375rem;
    }
  }
</style>
