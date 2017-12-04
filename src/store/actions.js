import axios from 'axios'
import config from '../config'

axios.defaults.headers.common = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Requested-With': 'XMLHttpRequest'
}

// ここを../apiでもっとモジュール化

export default {

  onAuthStateChanged ({ commit }, user) {
    commit('onAuthStateChanged', { user })
  },

  signIn ({ commit, state }, { username, password, grant_type }) {
    return new Promise((resolve, reject) => {
      if (!state.user.loggedIn) {
        axios.post('http://localhost:3000/api/v1/auth/token', {
          client_id: config.CLIENT_ID,
          client_secret: config.CLIENT_SECRET,
          username: username,
          password: password,
          grant_type: grant_type
        })
        .then(function (response) {
          let token = response.data.access_token
          commit('setToken', { token })
          return token
        })
        .catch(reject)
      } else {
        reject(new Error('something bad happened'))
      }
    })
  },

  signUp ({ commit, state }, { key, val }) {
    return new Promise((resolve, reject) => {
      if (state.user.loggedIn) { // is signed in. Firebase
        axios.post('http://localhost:3000/api/v1/auth/signup', {
          client_id: config.CLIENT_ID,
          client_secret: config.CLIENT_SECRET
        })
        .then(function (response) {
          commit('setUser', { key, val })
        })
        .catch(reject)
      } else { // is signed out. Localstrage
        reject(new Error('something bad happened'))
      }
    })
  },

  loadFriendList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.user.loggedIn) {
        // let params = new URLSearchParams()
        // axios.get('http://localhost:3000/api/v1/friends', {
        //   withCredentials: true,
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Credentials': 'true',
        //     'Authorization': 'Bearer {state.user.token}'
        //     // 'Access-Control-Allow-Headers': 'Content-Type'
        //   }
        // })
        axios({
          method: 'get',
          url: 'http://localhost:3000/api/v1/friends',
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Authorization': `Bearer ${state.user.token}`
          }
        })
        .then(function (response) {
          let friends = response.data
          commit('setFriends', { friends })
        })
        .catch(reject)
      } else {
        reject(new Error('something bad happened'))
      }
    })
  },

  loadFoodList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'http://localhost:3000/api/v1/foods/',
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Authorization': `Bearer ${state.user.token}`
        }
      })
      .then(function (response) {
        let foods = response.data
        commit('setFoods', { foods })
      })
      .catch(reject)
    })
  }

}
