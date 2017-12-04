<template>
  <div class="friend">
    <p class="friend-title">Friends</p>

    <ul v-if="friends.length" class="friend-list">
      <li v-for="friend in friends">
        <a href="#">
          <div class="icon">
            <div class="thumb">
              <img :src="friend.image_url" alt="">
            </div>
          </div>
          <div class="disc">
            <p class="username">{{ friend.username }}</p>
            <p class="hitokoto">ひとこと：<span>{{ friend.description }}</span></p>
          </div>
        </a>
      </li>
    </ul>

    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'friend',
  computed: {
    ...mapGetters(['getFriends'])
  },
  data () {
    return {
      friends: []
    }
  },
  created () {
    this.loadFriendList()
  },
  methods: {
    ...mapActions(['loadFriendList']),
    loadFriendList: function () {
      let vm = this
      this.$store.dispatch('loadFriendList')
        .then(function (result) {
          vm.friends = vm.getFriends
        })

      console.log(this.getFriends)
      vm.friends = this.getFriends
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@charset "utf-8";

.friend {
  text-align: left;
  .friend-title {
    display: inline-block;
    margin: 1.5rem 0 0;
    color: #333;
    font-size: 3.0rem;
    border-bottom: 1px solid #999;
  }
  .friend-list {
    margin: 1rem 0;
    width: 100%;
    display: inline-block;
    li {
      background: #fff;
      display: inline-block;
      width: 49%;
      float: left;
      padding: 0.5rem 0 0.3rem 0.5rem;
      border-bottom: 1px solid #cecece;
      box-shadow: 0 0 1px 0 #ccc;
      margin: .3rem auto;
      &:nth-child(even) {
        float: right;
      }
      .icon {
        display: inline-block;
        width: 15%;
        // overflow: hidden;
        .thumb {
          width: 100px;
          height: 100px;
          overflow: hidden;
        }
      }
      .disc {
        display: inline-block;
        vertical-align: top;
        width: 84%;
        .username {
          font-size: 1.5rem;
          color: #333;
        }
        .hitokoto {
          span {
            color: #333;
          }
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
