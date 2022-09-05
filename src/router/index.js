import {createRouter, createWebHistory} from 'vue-router'
import HoshizoraBackground from '../views/HoshizoraBackground.vue'
import StarBackground from "@/views/StarBackground";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HoshizoraBackground
  },
  {
    path: '/star',
    name: 'star',
    component: StarBackground
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
