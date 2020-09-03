import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import './plugins/element'
import './plugins/avue.js'

import router from './router'

Vue.config.productionTip = false

//axios方法获取数据
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
