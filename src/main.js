// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import moment from 'moment'

Vue.config.productionTip = false

sync(store, router)

Vue.filter('formatDate', function (value, format) {
  return moment(value).format('YYYY.MM.DD hh:mm:ss')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
})
