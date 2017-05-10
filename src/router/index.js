import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/Home'
import Login from '../page/login/login'
import Shop from '../page/shop/shop.vue'
import Personal from '../page/personal/personal.vue'
import Register from '../page/register/register.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  {
  	path: '/',
  	name: 'Home',
  	component: Home
  },
  {
  	path: '/home',
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
    name: 'shop',
    component: Shop
  },
   {
    path: '/personal',
    name: 'personal',
    component: Personal
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  ]
})
