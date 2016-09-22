import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/AboutUs',
      component: AboutUs
    }
  ]
})