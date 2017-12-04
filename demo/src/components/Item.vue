<template>
  <li class="item">
    <slot></slot>
  </li>  
</template>

<script>
export default {
  name: 'item'
}
</script>

<style lang="scss" scoped>
.item {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

[class~='item']:last-of-type {
  border-bottom: none;
}
</style>


