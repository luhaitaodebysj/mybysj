import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/Home'
import Login from '../page/login/login'
import Shop from '../page/shop/shop.vue'
import Personal from '../page/personal/personal.vue'
import List from '../page/list/list.vue'
import GoodDetail from '../page/goodDetail/goodDetail.vue'
import Register from '../page/register/register.vue'
import Order from '../page/order/order.vue'
import Address from '../page/address/address.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
    path:'*',
    redirect:'/'
  },
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
  },{
    path: '/personal',
    name: 'personal',
    component: Personal,
  },{
    path: '/list',
    name: 'list',
    component: List
  },{
    path:'/order',
    name:'order',
    component:Order
  },{
    path:'/goodDetail',
    name:'goodDetail',
    component:GoodDetail,
    meta: { navShow: false, cname: '子页面' }
  },{
    path: '/register',
    name: 'register',
    component: Register
  },{
    path:'/address',
    name:'address',
    component:Address
  }]
})
