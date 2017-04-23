import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../page/home/Home'
import Login from '../page/login/login'

Vue.use(Router)

export default new Router({
  routes: [
  {
  	path: '/',
  	name: 'Hello',
  	component: Hello
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
  }
  ]
})
