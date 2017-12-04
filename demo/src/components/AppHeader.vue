<template>
  <header class="app-header">
    <app-content>
      <router-link to="home">
        <h1>Vuemix</h1>
      </router-link>
      <nav>
        <router-link to="about">Commits</router-link>
        <router-link to="about">Acerca de</router-link>
      </nav>
    </app-content>
  </header>
</template>

<script>
import AppContent from '@/components/AppContent'

export default {
  name: 'app-header',
  components: {
    AppContent
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background: #ddd;
  padding: 1rem 0;

  h1 {
    margin: 0;
    padding: 0;
  }

  a {
    color: #222;
    text-decoration-line: none;
  }
}
</style>
