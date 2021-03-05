import Vue from 'vue'
import Router from 'vue-router'

//前台
import Home from '@/components/front/Home'
import Login from '@/components/front/Login'
import Shop from '@/components/front/Shop'
import ProductDetail from '@/components/front/pages/ProductDetail'
import ProductShow from '@/components/front/pages/ProductShow'
import Cart from '@/components/front/Cart'
import CartOrder from '@/components/front/pages/CartOrder'
import CartCheckout from '@/components/front/pages/CartCheckout'
import CartConfirmation from '@/components/front/pages/CartConfirmation'
import CartFinal from '@/components/front/pages/CartFinal'
import CouponNews from '@/components/front/CouponNews'
import FAQ from '@/components/front/Faq'

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
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta:{
        breadcrumb:[{
          name:'商店'
        }]
      },
      children:[
        {
          path: 'product_show',
          name: 'ProductShow',
          component: ProductShow,
          meta:{
            breadcrumb:[{
              name:'商店',
              link:'product_show'
            },
            {
              name:'商品列表'
            }]
          },
        },
        {
          path: 'product_detail/:id',
          name: 'ProductDetail',
          component: ProductDetail,
          meta:{
            breadcrumb:[{
              name:'商店',
              link:'product_show'
            },
            {
              name:'商品列表',
              link:'product_show'
            },
            {
              name:'商品詳細介紹'
            }]
          },
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      children:[
        {
          path: 'cart_order',
          name: 'CartOrder',
          component: CartOrder,
        },
        {
          path: 'cart_checkout',
          name: 'CartCheckout',
          component: CartCheckout,
        },
        {
          path: 'cart_confirmation/:orderId',
          name: 'CartConfirmation',
          component: CartConfirmation,
        },
        {
          path: 'cart_final',
          name: 'CartFinal',
          component: CartFinal,
        }
      ]
    },
    {
      path: '/couponnews',
      name:'CouponNews',
      component: CouponNews
    },
    {
      path: '/faq',
      name:'FAQ',
      component: FAQ
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
