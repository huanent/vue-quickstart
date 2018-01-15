import Vue from 'vue'
import Router from 'vue-router'
import IsLoading from '@/components/IsLoading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: () => import('@/components//UserLogin')
    }, {
      path: '/adminhome',
      name: 'AdminHome',
      component: () => import('@/components//AdminHome')
    }
  ]
})
