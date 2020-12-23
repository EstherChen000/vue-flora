import Vue from 'vue'
import Router from 'vue-router'

//前台
import Index from '@/components/front/Index'
import Login from '@/components/front/Login'
import Shop from '@/components/front/Shop'
import Cart from '@/components/front/Cart'

//後台
import Dashboard from '@/components/back/Dashboard'
import Products from '@/components/back/pages/Products'
import Coupons from '@/components/back/pages/Coupons'
import Orders from '@/components/back/pages/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          // meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          // meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          // meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
