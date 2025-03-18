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
    },
    {
      path: '/motoGpMarca',
      name: 'motoGpMarca',
      component: () => import('../views/MotoGpMarca.vue')
    },
    {
      path: '/clasificacionMotogp',
      name: 'clasificacionMotogp',
      component: ()=> import('../views/ClasificacionMotogp.vue')
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: ()=> import('../views/Crypto.vue')
    },
    {
      path:'/formula1Oficial',
      name: 'formula1Oficial',
      component: ()=> import('../views/Formula1Oficial.vue')
    },
    {
      path:'/clasificacionF1',
      name: 'clasificacionF1',
      component: ()=> import('../views/ClasificacionF1.vue')
    },
    {
      path: '/formula1DiarioAS',
      name: 'formula1DiarioAS',
      component: ()=> import('../views/Formula1DiarioAS.vue')
    },
    {
      path: '/motoGpDiarioAs',
      name: 'motoGpDiarioAs',
      component: ()=> import('../views/MotoGPDiarioAS.vue')
    },
    {
      path: '/calendarioMotoGP',
      name: 'calendarioMotoGP',
      component: ()=> import('../views/CalendarioMotoGp.vue')
    }
  ]
})

export default router
