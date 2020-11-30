import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
import 'bootstrap'
import '../src/assets/all.scss'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import './bus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import { ValidationObserver, ValidationProvider, configure, localize, extend } from 'vee-validate' // 驗證套件
import * as rules from 'vee-validate/dist/rules' // 驗證規則檔案
import zhTW from 'vee-validate/dist/locale/zh_TW.json' // 語系檔案
import './swal'
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
Vue.use(VueAwesomeSwiper)
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
}) // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
swiper.use([Navigation, Pagination, Autoplay])
localize('tw', zhTW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
