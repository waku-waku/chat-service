import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/Top'
import Login from '../components/Login'
import About from '../components/About'
import Chat from '../components/Chat'
import Friend from '../components/Friend'

// Sync store to router
import store from '../store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { requiresAuth: true }
  }
]

let router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.getUser.loggedIn) {
    next({path: '/login', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

export default router
