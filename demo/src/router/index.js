import Vue from 'vue'
import Router from 'vue-router'
import ViewHome from '@/components/ViewHome'
import ViewAbout from '@/components/ViewAbout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/about',
      name: 'about',
      component: ViewAbout
    }
  ]
})
