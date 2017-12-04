import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import { INCREMENT } from './mutation-types'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      name: '',
      token: '',
      image_url: ''
    },
    friends: {},
    foods: {}
  },
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
