window.Vue = require('vue');
import VueRouter from 'vue-router'

import BlogList from './pages/BlogList.vue'
import UserList from './pages/UserList.vue'

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
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router