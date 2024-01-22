import { createRouter, createWebHistory } from 'vue-router'
import App from '@/app/App.vue'
import HomePage from '@/pages/home/ui/HomePage.vue'
import ProductPage from '@/pages/product/ui/ProductPage.vue'
import CartPage from '@/pages/cart/ui/CartPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    }
  ]
})

