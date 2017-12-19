import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: () => import('../components/UserLogin.vue')
    }, {
      path: '/adminhome',
      name: 'AdminHome',
      component: () => import('../components/AdminHome.vue')
    }
  ]
})
