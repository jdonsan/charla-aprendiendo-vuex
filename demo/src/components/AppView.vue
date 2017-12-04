<template>
  <main class="app-view">
    <app-content>
      <h2>{{ title }}</h2>
      <slot></slot>
    </app-content>
  </main>
</template>

<script>
import AppContent from '@/components/AppContent'

export default {
  name: 'app-view',

  components: {
    AppContent
  },

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-view {
    padding: 2rem 0;

    h2 {
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }
</style>


