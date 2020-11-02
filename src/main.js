import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import './bus'
Vue.config.productionTip = false
window.$ = jquery
Vue.use(VueAxios, axios)
Vue.filter('money', function (num) {
  const parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return '$' + parts.join('.')
})
Vue.component('Loading', Loading)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
