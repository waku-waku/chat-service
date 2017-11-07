<template>
  <div class="chat">

    <img src="../assets/logo.png">
    <h2>About page.</h2>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  fetch () {
    alert('dd')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.chat {
  background: rgba(23,0,23,0.9);
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
}
</style>
