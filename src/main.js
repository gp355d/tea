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
  const n = Number(num)
  return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
    const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
    return currency
  })}`
})
Vue.component('Loading', Loading)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
