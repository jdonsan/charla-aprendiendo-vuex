<template>
  <div class="app-content">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-content'
}
</script>

<style lang="scss" scoped>
.app-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>


