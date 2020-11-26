import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/q/:query',     
    name: 'Search',
    component: Home 
  },
  { path: '/pokemon/:pokemon',     
  name: 'Pokemon',
  component: Home 
}
]

const router = new VueRouter({
  routes
})

export default router
