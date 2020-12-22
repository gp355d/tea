<template>
  <div class="wrapper container py-4">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center" v-if="tmpProducts.imageUrl[0]">
      <div class="col-md-10 mb-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white font-weight-bold">
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/products">全部茶品</router-link>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">{{ tmpProducts.title }}</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-6">
            <div class="product" :style="{backgroundImage: `url(${tmpProducts.imageUrl[0]})`}"></div>
          </div>
          <div class="col-md-6">
            <h2 class="font-weight-bold">{{ tmpProducts.title }}</h2>
            <p v-html="tmpProducts.content">{{ tmpProducts.content }}</p>
            <p v-html="tmpProducts.description">{{ tmpProducts.description }}</p>
            <h3 class="font-weight-bold my-4 text-right">
              售價<span class="text-danger">{{ tmpProducts.price | money }}</span>
            </h3>
            <div class="d-flex">
              <select name="unit" class="form-control mr-3" v-model="tmpProducts.num">
                <option :value="num" v-for="num in 5" :key="num">
                  {{ num }} {{ tmpProducts.unit }}
                </option>
              </select>
              <button type="button" class="btn btn-block btn-primary"
                @click.prevent="addToCart(tmpProducts.id, tmpProducts.num)">
                <i class="fas fa-spinner fa-spin" v-if="tmpProducts.id === loadingItem"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <h3 class="font-weight-bold">相關茶品</h3>
        <Relationproduct :product="tmpProducts" @update="getPeoductDetail" />
      </div>
    </div>
  </div>
</template>
<script>
import Relationproduct from '@/components/Relationproduct.vue'
import Toast from '@/swal'
export default {
  data () {
    return {
      tmpProducts: {
        imageUrl: [],
        num: 1
      },
      isLoading: false,
      loadingItem: ''
    }
  },
  components: {
    Relationproduct
  },
  created () {
    this.getPeoductDetail()
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    getPeoductDetail () {
      const vm = this
      const { id } = this.$route.params// 使用$route屬性取得id
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`// 取得前台單一產品資料API
      vm.isLoading = true
      vm.$http.get(api).then((res) => {
        vm.tmpProducts = {
          ...res.data.data,
          num: 1
        }
        vm.isLoading = false
      })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
          vm.isLoading = false
        })
    },
    addToCart (id, quantity = 1) { // 傳入選取的產品id，quantity預設值為1
      const vm = this
      vm.isLoading = true
      vm.loadingItem = id
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`// 前台加入購物車的API
      const carts = {
        product: id,
        quantity: quantity
      }
      vm.$http.post(api, carts).then(() => {
        vm.$bus.$emit('update-total')
        vm.loadingItem = ''
        Toast.fire({
          title: '該商品已加入購物車',
          icon: 'success'
        })
        vm.isLoading = false
      })
        .catch((error) => {
          vm.loadingItem = ''
          const errorinfo = error.response.data.errors
          if (errorinfo) {
            Toast.fire({
              title: `${errorinfo}`,
              icon: 'warning'
            })
          }
          vm.isLoading = false
        })
    }

  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/frontend/main';

.product {
  height: 50vh;
  background-position: center;
  background-size: cover;
}
</style>
