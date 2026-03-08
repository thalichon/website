import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Bio from '../components/Bio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path: '/bio',
    name: 'Bio',
    component: Bio
  },
  // Ajoutez d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router