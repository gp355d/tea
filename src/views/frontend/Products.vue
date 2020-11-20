<template>

<div class="container py-4">
  <loading :active.sync="isLoading"></loading>
    <div class="row">
        <div class="col-md-3 mb-3">
            <ul class="list-group">
                <a href="#" class="list-group-item list-group-item-action" @click.prevent="filtercategory = ''"
                    :class="{active: filtercategory === ''}">全茶品</a>
                <a href="#" class="list-group-item list-group-item-action" @click.prevent="filtercategory = item"
                    :class="{active: item === filtercategory}" v-for="item in categories" :key="item">{{ item }}</a>
            </ul>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4" v-for="item in filtercategories" :key="item.id">
                    <div class="card rounded shadow">
                      <router-link :to="`/product/${ item.id }`">
                        <div style="height: 130px; background-size: cover; background-position:center"
                            :style="{backgroundImage: `url(${item.imageUrl[0]})`}"></div>
                      </router-link>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title d-inline mb-0 font-weight-bold">{{item.title}}</h5>
                                <span class="badge badge-primary">{{item.category}}</span>
                            </div>
                            <p class="card-text" v-html="item.content">{{item.content}}</p>
                            <div class="text-right">
                                <div class="h5" v-if="item.origin_price === item.price">原價{{item.origin_price | money}}元
                                </div>
                                <div class="" v-else>
                                    <del class="h6">原價{{item.origin_price | money}}元</del>
                                    <div class="h5 text-danger font-weight-bold">現在只要{{item.price | money}}元</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button :disabled="loadingItem === item.id" type="button" class="btn btn-outline-primary btn-block ml-auto" @click="addToCart(item.id)">
                              <i class="fas fa-spinner fa-spin" v-if="loadingItem === item.id"></i>
                              <i v-else class="fa fa-cart-plus"></i>
                            加到購物車
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Toast from '@/swal'
export default {
  data () {
    return {
      products: [],
      categories: ['茶葉類', '沖泡類'],
      filtercategory: '',
      loadingItem: '',
      isLoading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts: function () {
      this.isLoading = true
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api).then(function (res) {
        console.log(res)
        vm.products = res.data.data// 將回傳的資料存入預先定義好的products陣列
        vm.isLoading = false
        const { categoryName } = vm.$route.params
        if (categoryName) {
          vm.filtercategory = categoryName
        }
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    addToCart: function (id, quantity = 1) {
      const vm = this
      this.loadingItem = id
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      const carts = {
        product: id,
        quantity: quantity
      }
      this.$http.post(api, carts).then(function (res) {
        vm.$bus.$emit('update-total')
        Toast.fire({
          title: '該商品已加入購物車',
          icon: 'success'
        })
        vm.loadingItem = ''
        vm.isLoading = false
      })
        .catch(function (error) {
          const errorinfo = error.response.data.errors
          if (errorinfo) {
            Toast.fire({
              title: `${errorinfo}`,
              icon: 'warning'
            })
          }
          vm.loadingItem = ''
          vm.isLoading = false
        })
    }
  },
  computed: {
    filtercategories () {
      if (this.filtercategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filtercategory.toLowerCase())
          return data
        })
      }
      return this.products
    }
  }
}
</script>
