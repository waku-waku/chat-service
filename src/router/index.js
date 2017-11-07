import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/Top'
import Channel from '../components/Channel'
import Login from '../components/Login'
import About from '../components/About'
import Chat from '../components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/channel/:id',
      name: 'Channel',
      component: Channel
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
      component: Chat
    }
  ]
})
