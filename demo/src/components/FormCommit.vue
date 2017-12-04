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
  
  textarea {
    display: block;
    width: 100%;
    border-radius: 5px;
    height: 5rem;
    box-sizing: border-box;
    margin-bottom: .5rem;
    resize: none;
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
  }
}
</style>


