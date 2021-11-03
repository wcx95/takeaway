import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // 路由懒加载，按需加载模块，提高首屏加载速率，提高用户体验
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/login/Login.vue'),
    // 定义独享路由守卫
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home" */ '../views/register/Register.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "home" */ '../views/shop/Shop.vue')
  },
  {
    path: '/user/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "home" */ '../views/order/Order.vue')
  },
  {
    path: '/user/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "home" */ '../views/my/My.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// beforeEach前置守卫
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
