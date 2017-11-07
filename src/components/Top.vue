<template>
  <div class="top">
    <p class="top-channel-title">ライブ中のチャンネル</p>

    <!-- <ChannelList/> -->
    <!-- ここはコンポーネント可 -->
    <div class="top-channel-list">
      <div v-for="channel in channels" class="channel">
        <router-link :to="{ name: 'Channel', params: { id: channel.id }}">
          <p>{{channel.title}}<span>DJ Tuton</span></p>
          <div class="thumb">
            <img :src="channel.url" alt="">
          </div>
        </router-link>
      </div>
    </div>


    <!-- <a @click="getTest">click</a>
    <p>{{ ans }}</p>
    <img :src='img_url' alt="">

    <a @click="loadChannels">load</a> -->
  </div>
</template>

<script>
// let _ = require( 'underscore' );
import _ from 'underscore'
import axios from 'axios'

export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      ans: 's',
      img_url: '',
      channels: []
    }
  },
  created () {
    this.loadChannels()
  },
  watch: {
    // この関数は question が変わるごとに実行されます。
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce は特にコストの高い処理の実行を制御するための
    // lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
    // へのアクセスすべきかを制限するために、ユーザーの入力が完全に
    // 終わるのを待ってから ajax リクエストを実行しています。
    // _.debounce (とその親戚である _.throttle )  についての詳細は
    // https://lodash.com/docs#debounce を見てください。
    // alert: this.$log(),

    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            console.log(response)
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // ユーザーの入力が終わるのを待つ時間をミリ秒で指定します。
      500
    ),

    getTest: function () {
      let vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (res) {
          console.log(res.data)
          vm.ans = res.data.answer
          vm.img_url = res.data.image
        })
    },

    loadChannels: function () {
      let vm = this
      axios.get('http://localhost:3000/channels')
        .then(function (res) {
          console.log(res.data.channels)
          vm.channels = res.data.channels
        })
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
