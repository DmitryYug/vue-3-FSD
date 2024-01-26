import { createRouter, createWebHistory } from "vue-router";

import CartPage from "@/pages/cart/ui/CartPage.vue";
import HomePage from "@/pages/home/ui/HomePage.vue";
import NotFoundPage from "@/pages/notFound/ui/NotFoundPage.vue";
import ProductPage from "@/pages/product/ui/ProductPage.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductPage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundPage,
    },
  ],
});
