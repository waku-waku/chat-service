<template>
  <div class="about">

    <h2>About</h2>
    <p>Chat serviceはLINEを模倣したチャットサービスです。</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.about {
  padding: 3rem 0;
  background: rgba(241,241,241,1);
  h1, h2 {
    font-weight: normal;
    font-size: 2.0rem;
    padding: 0 0 1rem 0;
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
