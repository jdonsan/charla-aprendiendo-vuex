<template>
  <section class="app-section">
    <h3>{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'app-section',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-section {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: .5rem 0 2rem;

  h3 {
    width: 100%;
  }
}
</style>

