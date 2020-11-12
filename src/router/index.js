import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/frontend/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontend/Home.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: 'aboutus',
        name: 'aboutus',
        component: () => import('../views/frontend/Aboutus.vue')
      },
      {
        path: 'effect',
        name: 'effect',
        component: () => import('../views/frontend/Effect.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: 'shopcart',
        name: 'shopcart',
        component: () => import('../views/frontend/Shopcart.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/frontend/Order.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/frontend/Checkout.vue')
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/backend/Signin.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
