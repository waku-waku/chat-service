<template>
  <div class="login">
    <h1>Login</h1>
    <div class="content">
      <p>状態：{{ message }}</p>
      <dl>
        <dt>ID</dt>
        <dd>
          <input type="text" size="20" v-model="username">
        </dd>
        <dt>パスワード</dt>
        <dd>
          <input type="password" size="20" v-model="password">
        </dd>
      </dl>
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import router from 'vue-router'

export default {
  name: 'login',
  computed: {
    ...mapGetters(['getUser']),
    message () {
      console.log(this.getUser)
      if (this.getUser.loggedIn) {
        return 'ログイン中'
      } else {
        return 'ログインしてません'
      }
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['signIn']),
    login: function () {
      // console.log(this.getUser)
      this.$store.dispatch('signIn', {
        username: this.username,
        password: this.password,
        grant_type: 'password'
      })
      .then(function (result) {
        router.push('Top')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.login {
  padding: 3rem 0;
  text-align: center;
  background: transparent;
  .content {
    padding: 3rem 0;
  }
  h1, h2 {
    font-weight: normal;
    font-size: 2.0rem;
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
