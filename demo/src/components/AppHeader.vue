<template>
  <header class="app-header">
    <app-content>
      <h1>Vuemix</h1>
      <nav>
        <div v-if="someCommit" class="app-header-push">
          <button @click="saveAllCommits">Push</button>
          <span>{{ unsynchronizedCommitsCount }}</span>
        </div>
      </nav>
    </app-content>
  </header>
</template>

<script>
import AppContent from '@/components/AppContent'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app-header',

  components: {
    AppContent
  },

  computed: {
    ...mapGetters(['unsynchronizedCommitsCount']),

    someCommit: function () {
      return this.unsynchronizedCommitsCount > 0
    }
  },

  methods: mapActions(['saveAllCommits'])
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

  .app-header-push {
    position: relative;

    button {
      background: transparent;
      color: #fff;
      border: none;
      outline: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      box-shadow: none;
      z-index: 1;
      position: relative;

      &:hover {
        cursor: pointer;
      }
    }

    span {
      display: inline-block;
      background: #50514F;
      color: #fff;
      padding: 0.2rem 0.6rem;
      border-radius: 100%;
    }
  }
}
</style>
