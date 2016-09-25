import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'
import Faq from '../views/Faq'
import Local from '../views/Local'
import Contact from '../views/Contact'

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
    },
    {
      path: '/Faq',
      component: Faq
    },{
      path: '/Local',
      component: Local
    },{
      path: '/Contact',
      component: Contact
    }
  ]
})