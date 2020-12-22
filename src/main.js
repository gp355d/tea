import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'bootstrap'
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
import moneyFilter from './filter/moneyfilter'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
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
Vue.filter('money', moneyFilter)
swiper.use([Navigation, Pagination, Autoplay])
localize('tw', zhTW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
