import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListarProductos from '../views/producto/ListarProductos'
import GuardarProducto from '../views/producto/GuardarProducto'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',   
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/producto',
    name:'ListarProductos',
    component:ListarProductos
  },
  { path: '/producto/create',
    name:'GuardarProducto ',
    component: GuardarProducto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
