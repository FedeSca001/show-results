import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/motogp',
      component: () => import('../views/MotoGP.vue'),
      children: [
        {
          path: 'motogp',
          component: () => import('../views/motogp/motogp.vue')
        },
        {
          path: 'motoGpDiarioAs',
          component: () => import('../views/motogp/motoGpDiarioAs.vue')
        },
        {
          path: 'motoGpMarca',
          component: () => import('../views/motogp/motoGpMarca.vue')
        },
        {
          path: 'motogpmotorsport',
          component: () => import('../views/motogp/motogpmotorsport.vue')
        },
        {
          path: 'clasificacionMotogp',
          component: () => import('../views/motogp/clasificacionMotogp.vue')
        },
        {
          path: 'calendarioMotoGp',
          component: () => import('../views/motogp/calendarioMotoGp.vue')
        }
      ]
    },
    {
      path:'/formula1',
      name: 'formula1',
      component: ()=> import('../views/Formula1.vue'),
      children: [
        {
          path:'formula1Oficial',
          component: () => import('../views/Formula1/Formula1Oficial.vue')
        },
        {
          path:'formula1DiarioAS',
          component: () => import('../views/Formula1/Formula1DiarioAS.vue')
        },
        {
          path:'formula1Clasificacion',
          component: () => import('../views/Formula1/ClasificacionF1.vue')
        }
      ]
    },
    {
      path: '/economy',
      name: 'economy',
      component: ()=> import('../views/Economy.vue'),
      children: [
        {
          path:'cambioDeMoneda',
          component: () => import('../views/Economy/CambioDeMonedas.vue')
        },
        {
          path:'crypto',
          component: () => import('../views/Economy/Crypto.vue')
        }
      ]
    }
  ]
})

export default router
