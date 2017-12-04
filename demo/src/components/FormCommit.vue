<template>
  <form class="form-commit">
    <textarea></textarea>
    <button>Commit</button>
  </form>  
</template>

<script>
export default {
  name: 'form-commit'
}
</script>

<style lang="scss" scoped>
.form-commit {
  width: 100%;
  padding: .5rem 0;
  margin: .5rem 0;
  
  textarea {
    display: block;
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    margin-bottom: .5rem;
    resize: none;
  }

  button {
    width: 100%;
  }
}
</style>


