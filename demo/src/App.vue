<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #fafafa;
  font-family: 'Montserrat', sans-serif;
}
</style>


