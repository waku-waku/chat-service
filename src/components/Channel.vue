<template>
  <div class="channel">
    <p>{{ channel.title }}</p>

    <div class="thumb">
      <img :src="channel.url" alt="">
    </div>

  </div>
</template>

<script>
// let _ = require( 'underscore' );
// import _ from 'underscore'
import axios from 'axios'

export default {
  name: 'channel',
  data () {
    return {
      channel: {}
    }
  },
  created () {
    this.loadChannel()
  },
  methods: {

    getTest: function () {
      let vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (res) {
          console.log(res.data)
          vm.ans = res.data.answer
          vm.img_url = res.data.image
        })
    },

    loadChannel: function () {
      let vm = this
      console.log(this.$route.params)
      axios.get('http://localhost:3000/channel/' + this.$route.params.id)
        .then(function (res) {
          console.log(res.data)
          vm.channel = res.data
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

.channel {

}
</style>
