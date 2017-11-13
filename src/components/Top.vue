<template>
  <div class="top">
    <p class="top-channel-title">友だち</p>

    <!-- <ChannelList/> -->
    <!-- ここはコンポーネント可 -->
    <div class="top-channel-list">
      <div v-for="friend in friends" class="friend">
        <p>{{friend.username}}<span></span></p>
        <p><span>ひとこと：</span>{{friend.description}}</p>
        <div class="thumb">
          <img :src="friend.iamge_url" alt="">
        </div>
      </div>
    </div>


    <!-- <a @click="getTest">click</a>
    <p>{{ ans }}</p>
    <img :src='img_url' alt="">

    <a @click="loadChannels">load</a> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      ans: 's',
      img_url: '',
      friends: []
    }
  },
  beforeUpdate () {
    this.loadFriendList()
  },
  watch: {
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    ...mapActions(['loadFriendList']),
    loadFriendList: function () {
      // console.log(this.getUser)
      this.$store.dispatch('loadFriendList')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@charset "utf-8";

.top {
  .top-channel-title {
    display: inline-block;
    color: #333;
    font-size: 1rem;
    border-bottom: 1px solid #999;
  }
  .top-channel-list {
    margin: 1rem 0;
    .channel {
      background: rgba(249,249,249,0.92);
      display: inline-block;
      border-radius: 3px;
      border: solid 1px rgba(34,34,34,0.6);
      box-shadow: 0 0 1px 0 #cecece;
      width: 24%;
      height: 15vw;
      margin: 0 0.5rem 0.5rem 0;
      .thumb {
        height: 90%;
      }
      p {
        padding: 0.5rem 0.8rem 0;
        font-size: 1rem;
        font-weight: 900;
        letter-spacing: 2px;
        span {
          font-size: 0.8rem;
          margin: 0 0 0 8px;
          letter-spacing: 0px;
        }
      }
    }
  }

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
