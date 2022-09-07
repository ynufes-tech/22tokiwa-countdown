import {createRouter, createWebHistory} from 'vue-router'
import HoshizoraBackground from '../views/HoshizoraBackground.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HoshizoraBackground
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
