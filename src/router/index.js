import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/swipe',
    name: 'swipe',
    component: () => import('../testing/Swipe.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../testing/Navbar.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('../testing/Field.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'index',
        component: () => import('../views/Index.vue'),
        meta:{
          keepAlive: true,
        }
      },
      {
        path: 'me',
        component: () => import('../views/Me.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
