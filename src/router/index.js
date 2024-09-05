import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/acercaDe',
      name: 'acercaDe',
      component: () => import('../views/AcercaDe.vue')
    },
    {
      path: '/motogpmotorsport',
      name: 'motogpmotorsport',
      component: ()=> import('../views/Motogpmotorsport.vue')
    },
    {
      path: '/cambioDeMonedas',
      name: 'cambioDeMonedas',
      component: ()=> import('../views/CambioDeMonedas.vue')
    },
    {
      path: '/motogp',
      name: 'motogp',
      component: ()=> import('../views/motoGp.vue')
    }
  ]
})

export default router
