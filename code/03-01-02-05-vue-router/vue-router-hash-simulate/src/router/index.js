import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../my-vueRouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Index.vue'),
    children: [
      {
        path: 'pop',
        name: 'Pop',
        component: () => import('../views/music/Pop.vue')
      },
      {
        path: 'rock',
        name: 'Rock',
        component: () => import('../views/music/Rock.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
