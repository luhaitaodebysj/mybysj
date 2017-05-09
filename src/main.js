// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Axios from 'axios' 
import common from './common/js/common.js'

Vue.use(MintUi)
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
