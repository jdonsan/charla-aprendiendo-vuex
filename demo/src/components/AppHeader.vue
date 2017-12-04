<template>
  <header class="app-header">
    <app-content>
      <h1>Vuemix</h1>
      <nav>
        <button>Push</button>
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
  background: #f25f5c;
  color: #50514f;
  padding: 1rem 0;

  h1 {
    margin: 0;
    padding: 0;
  }

  button {
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: .5rem 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    box-shadow: none;
  }
}
</style>
