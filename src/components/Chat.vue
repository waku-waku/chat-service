<template>
  <div class="chat">

    <!-- <img src="../assets/logo.png"> -->
    <!-- <h2>About page.</h2> -->
    <ul id="messages">
      <div v-for="msg in messages" class="friend">
        <p>{{msg.username}}<span>{{ msg.room }}</span></p>
        <p><span>：</span>{{msg.text}}</p>
        <div class="thumb">
          <img :src="msg.iamge_url" alt="">
        </div>
      </div>
    </ul>
    <form>
      <input id="m" autocomplete="off" v-model="message" />
      <button type="button" @click="emit()">Send</button>
    </form>
  </div>
</template>

<script>
// with ES6 import
import io from 'socket.io-client'
const socket = io('http://localhost:3000')

export default {
  name: 'chat',
  data () {
    return {
      messages: []
    }
  },
  methods: {
    init: function (room, name) {
      socket.on('connected', function () {
            // ※3 入室する部屋番号を送信
        socket.json.emit('init', { 'room': room, 'name': name })
      })

      // ※7 受け取ったメッセージを表示
      socket.on('msg', function (data) {
        if (data) {
          this.messages.push(data)
        }
      })
    },
    emit: function () {
      console.log(this.message)
      socket.json.send(this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.chat {
  background: rgba(23,0,23,0.9);
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; left: 0;}
  form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
  form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
  #messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      padding: 5px 10px;
      &:nth-child(odd) {
        background: #eee;
      }
    }
  }
}
</style>
