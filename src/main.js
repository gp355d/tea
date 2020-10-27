import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
import 'bootstrap'
Vue.config.productionTip = false
window.$ = jquery
Vue.use(VueAxios, axios)
Vue.filter('money', function (num) {
  const parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return '$' + parts.join('.')
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
