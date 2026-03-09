import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MetaPlayground from '../components/MetaPlayground.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path: '/meta-playground',
    name: 'MetaPlayground',
    component: MetaPlayground
  },
  // Ajoutez d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router