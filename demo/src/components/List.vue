<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>


