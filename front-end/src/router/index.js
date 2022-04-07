import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignView from '../views/SignView.vue'
import RosterView from '../views/RosterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/sign',
    name: 'sign',
    component: SignView
  },
  {
    path:'/roster',
    name: 'roster',
    component: RosterView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
