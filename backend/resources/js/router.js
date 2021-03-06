window.Vue = require('vue');
import VueRouter from 'vue-router'

import BlogList from './pages/BlogList.vue'
import UserList from './pages/UserList.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'

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
    },
    {
      path: '/login',
      component: Login,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router