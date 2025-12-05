import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bouquets',
    name: 'bouquets',
    component: () => import('@/views/BouquetsView.vue')
  },
  {
    path: '/gifts',
    name: 'gifts',
    component: () => import('@/views/GiftsView.vue')
  },
  {
    path: '/box-flowers',
    name: 'box-flowers', 
    component: () => import('@/views/BoxFlowersView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/ProductView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  // ДОБАВЬТЕ ЭТОТ МАРШРУТ:
  {
    path: '/certificates',
    name: 'certificates',
    component: () => import('@/views/CertificatesView.vue')
  },
  // И ЭТОТ ДЛЯ ОФОРМЛЕНИЯ СЕРТИФИКАТА:
  {
    path: '/certificate-order',
    name: 'certificate-order',
    component: () => import('@/views/CertificateOrderView.vue')
  },
  // И ЭТОТ ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА:
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/CheckoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router