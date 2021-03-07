window.Vue = require('vue');
import VueRouter from 'vue-router'

import BlogList from './pages/BlogList.vue'
import UserList from './pages/UserList.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
    {
      path: '/blog',
      component: BlogList,
      alias: '/'
    },
    {
      path: '/user',
      component: UserList,
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.getters['auth/check']) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters['auth/check']) {
          next('/')
        } else {
          next()
        }
      }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router