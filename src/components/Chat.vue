<template>
  <div class="chat">

    <!-- <img src="../assets/logo.png"> -->
    <!-- <h2>About page.</h2> -->
    <div id="message-contents">
      <div v-for="message in messageList" class="message-wrapper is-clearfix">
          <div class="box" v-bind:class="{'message' : isMyMessage(message) }">
              <div class="content">
                  <p>
                  <strong>{{message.userName}}</strong> <small>{{displayTime(message)}}</small>
                  <br />
                  {{message.text}}
                  </p>
              </div>
          </div>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control is-expanded">
        <input v-model="message" v-on:keydown.enter="send" class="input is-medium" type="text" placeholder="Message" />
      </div>
      <div class="control control-submit">
        <button v-bind:disabled="message.length==0" v-on:click="send" class="button is-primary button-submit">送信</button>
      </div>
    </div>
  </div>
</template>

<script>
// with ES6 import
// import io from 'socket.io-client'

// const socket = io('ws://localhost:3000')

export default {
  name: 'chat',
  data () {
    return {
      messageList: [],
      message: ''
    }
  },
  beforeUpdate () {
    // this.init()
  },
  methods: {
    init: function (room, name) {
      // socket.on('connected', function () {
      //   // socket.json.emit('init', { 'room': room, 'name': name })
      //   // var id = socket.io.engine.id
      //   // console.log('connected')
      //   // var rooms = ['room1', 'room2']
      //   // socket.emit('add:member', {room: rooms[0], message: 'join room: ' + rooms[0]})

      //   socket.on('sendMsgFromServer', function (message) {
      //     console.log(message)
      //   })
      // })
    },
    send: function () {
      // console.log(this.message.text)
      // socket.json.send(this.msg)
      this.message.text = ''
      // socket.emit('sendMsgFromClient', 'hey')
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
