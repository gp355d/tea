<template>
  <div class="wrapper container py-4">
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white font-weight-bold">
        <li class="breadcrumb-item">
          <router-link class="text-dark" to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item text-primary" v-if="filtercategory === ''">全茶品</li>
        <li class="breadcrumb-item text-primary" v-else>{{ filtercategory }}</li>
      </ol>
    </nav>
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
          <div class="col-lg-4 col-md-6 mb-4" v-for="item in filtercategories" :key="item.id">
            <router-link :to="`/product/${ item.id }`">
              <div class="card-deck h-100">
                <div class="card rounded shadow">
                  <div class="product-img" :style="{backgroundImage: `url(${item.imageUrl[0]})`}"></div>
                  <div class="card-body">
                    <div class="content">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title d-inline mb-0 font-weight-bold">{{ item.title }}</h5>
                        <span class="badge badge-primary">{{ item.category }}</span>
                      </div>
                      <p class="card-text" v-html="item.content">{{ item.content }}</p>
                      <div class="text-right">
                        <div class="h5" v-if="item.origin_price === item.price">原價{{ item.origin_price | money }}</div>
                        <div class="price" v-else>
                          <del class="h6">原價{{ item.origin_price | money }}</del>
                          <div class="h5 text-danger font-weight-bold mb-0">現在只要{{ item.price | money }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button :disabled="loadingItem === item.id" type="button"
                      class="btn btn-outline-primary btn-block ml-auto" @click="addToCart(item.id)">
                    <i class="fas fa-spinner fa-spin" v-if="loadingItem === item.id"></i>
                    <i v-else class="fa fa-cart-plus"></i>
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
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
      categories: ['茶葉類', '沖泡類', '組合包'],
      filtercategory: '',
      loadingItem: '',
      isLoading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      vm.$http.get(api).then((res) => {
        vm.products = res.data.data// 將回傳的資料存入預先定義好的products陣列
        const { categoryName } = vm.$route.params
        if (categoryName) {
          vm.filtercategory = categoryName
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
    addToCart (id, quantity = 1) {
      const vm = this
      vm.loadingItem = id
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      const carts = {
        product: id,
        quantity: quantity
      }
      vm.$http.post(api, carts).then(() => {
        vm.$bus.$emit('update-total')
        Toast.fire({
          title: '該商品已加入購物車',
          icon: 'success'
        })
        vm.loadingItem = ''
        vm.isLoading = false
      })
        .catch((error) => {
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
<style lang="scss" scoped>
@import '../../assets/scss/frontend/main';

.product-img {
  width: 100%;
  height: 130px;
  background-position: center;
  background-size: cover;
}

.content {
  .card-title,
  .card-text {
    color: $black;
  }
}

.price {
  .h6 {
    color: $black;
  }
}

.card:hover .product-img {
  opacity: 0.5;
}

.card:hover .content {
  opacity: 0.5;
}

@include media-breakpoint-down(lg) {
  .card-title {
    font-size: 1.375rem;
  }
}
</style>
