<template>
  <form class="form-commit" @submit.prevent="doCommit">
    <textarea v-model='message'></textarea>
    <button :disabled="!allowCommit">Commit</button>
  </form>  
</template>

<script>
export default {
  name: 'form-commit',

  data() {
    return {
      message: ''
    }
  },

  computed: {
    allowCommit: function () {
      return this.$store.getters.stagedFilesCount > 0 && this.message !== ''
    }
  },

  methods: {
    doCommit() {
      this.$store.commit('doCommit', this.message)
      this.message = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.form-commit {
  width: 100%;
  
  textarea {
    display: block;
    width: 100%;
    border-radius: 5px;
    height: 6rem;
    box-sizing: border-box;
    margin-bottom: .5rem;
    resize: none;
    padding: 1rem;
    font-size: 1.5rem;
  }

  button {
    width: 100%;
    padding: 1rem 0;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #50514f;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    background: #247BA0;
    color: #fff;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed; 
    }
  }
}
</style>


