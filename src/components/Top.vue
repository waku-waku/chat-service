<template>
  <div class="top">

    <!-- <ul v-if="foods.length" class="food-list">
      <li v-for="food in foods">
        <a href="#">
          <div class="title-header">
            <p class="title">{{ food.title }}</p>
          </div>
          <div class="disc">
            <section class="share">
              <a href="#"><span>♡</span></a>
              <a href="#"><span>◎</span></a>
            </section>
          </div>
          <div class="icon">
            <div class="thumb">
              <img :src="food.image_url" alt="">
            </div>
          </div>
        </a>
      </li>
    </ul> -->

    <section v-if="foods.length" class="food-list">
      <article v-for="food in foods">
        <a href="#">
          <header class="title-head">
            <p class="title">{{ food.title }}</p>
            <span v-if="foods.tag" class="tag">{{ food.tag.name }}</span>
          </header>
          <div class="image">
            <div class="thumb">
              <img :src="food.image_url" alt="">
            </div>
          </div>
          <div class="discription">
            <div class="location-btn">
              <a href="#"><span>🌏</span><p v-if="foods.store">{{ foods.restaurant.name }}</p></a>
            </div>
            <!-- <div class="location">
              <p v-if="food.location"><span>Area：</span>{{ food.location.name }}<span>></span></p>
              <p v-else><span>Area：</span>場所が設定されていません</p>
            </div> -->
            <!-- <div class="tag">
              <p v-if="food.tag"><span>Tag：</span>{{ food.tag.name }}<span>></span></p>
              <p v-else><span>Tag：</span>タグが設定されていません</p>
            </div> -->
            <section class="share">
              <a href="#"><span>♡</span></a>
              <a href="#"><span>◎</span></a>
              <a href="#"><span>✆</span></a>
            </section>

            <div class="location">

            </div>
          </div>
        </a>
      </article>
    </section>

    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'top',
  computed: {
    ...mapGetters(['getFoodList'])
  },
  data () {
    return {
      foods: []
    }
  },
  created () {
    this.loadFoodList()
  },
  methods: {
    ...mapActions(['loadFoodList']),
    loadFoodList: function () {
      let vm = this
      this.$store.dispatch('loadFoodList')
        .then(function (result) {
          vm.foods = vm.getFoodList
        })

      vm.foods = this.getFoodList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@charset "utf-8";

.top {
  .food-list {
    margin: 5rem auto;
    width: 580px;
    display: block;
    // text-align: center;
    article {
      background: #fefefe;
      margin: 1rem 0;
      border: 1px solid #ccc;
      box-shadow: 0 0 1px 0 #ccc;
      border-radius: 3px;
      .title-head {
        padding: .9rem 1.0rem;
        .title {
          text-align: center;
          font-weight: 900;
          font-size: .9rem;
          color: #333;
        }
      }
      .image {
        position: relative;
        width: 100%;
        height: 35vw;
      }
      .discription {
        position: relative;
        padding: .7rem .7rem .3rem;
        .location-btn {
          display: inline-block;
          padding: 0 .1rem;
          color: #7e7e7e;
          a {
            span {
              font-weight: 900;
              font-size: 1.5rem;
              padding: 0 .2rem 0 0;
            }
          }
        }
        .share {
          display: inline-block;
          text-align: right;
          float: right;
          a {
            margin: 0 0.3rem;
            span {
              font-size: 1.5rem;
            }
          }
        }
        .location {
          display: block;

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
