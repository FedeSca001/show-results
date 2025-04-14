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
          name: 'motogpPrincipal',
          component: () => import('../views/motogp/motogp.vue')
        },
        {
          path: 'motoGpDiarioAs',
          name: 'motoGpDiarioAs',
          component: () => import('../views/motogp/motoGpDiarioAs.vue')
        },
        {
          path: 'motoGpMarca',
          name: 'motoGpMarca',
          component: () => import('../views/motogp/motoGpMarca.vue')
        },
        {
          path: 'motogpmotorsport',
          name: 'motoGpMotorsport',
          component: () => import('../views/motogp/motogpmotorsport.vue')
        },
        {
          path: 'clasificacionMotogp',
          name: 'clasificacionMotogp',
          component: () => import('../views/motogp/clasificacionMotogp.vue')
        },
        {
          path: 'calendarioMotoGp',
          name: 'calendarioMotoGp',
          component: () => import('../views/motogp/calendarioMotoGp.vue')
        }
      ]
    },
    {
      path: '/formula1',
      component: () => import('../views/Formula1.vue'),
      children: [
        {
          path: 'formula1Oficial',
          name: 'formula1Oficial',
          component: () => import('../views/Formula1/Formula1Oficial.vue')
        },
        {
          path: 'formula1DiarioAS',
          name: 'formula1DiarioAS',
          component: () => import('../views/Formula1/Formula1DiarioAS.vue')
        },
        {
          path: 'formula1Clasificacion',
          name: 'formula1Clasificacion',
          component: () => import('../views/Formula1/ClasificacionF1.vue')
        }
      ]
    }
  ]
})

export default router
