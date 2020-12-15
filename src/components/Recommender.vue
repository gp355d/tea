<template>
<div class="container mb-3">
  <h2 class="font-weight-bold"><i class="fas fa-leaf mr-2 text-primary"></i>精選茶品</h2>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-4 mt-4" v-for="item in newArray" :key="item.id">
          <router-link :to="`/product/${ item.id }`" target="_blank">
          <div class="card rounded shadow h-100">
            <div class="product-img" :style="{backgroundImage: `url(${item.imageUrl[0]})`}" />
            <div class="card-body intro">
              <h4 class="card-title font-weight-bold">{{ item.title }}</h4>
              <p class="card-text" v-html="item.content">{{ item.content }}</p>
            </div>
            <a class="btn btn-primary font-weight-bold">來去看看</a>
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
      newArray: []
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
      vm.$http.get(api).then(function (res) {
        vm.products = res.data.data
        vm.random(3, vm.products)
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    random (num, arr) {
      for (var index = 0; index < num; index++) {
        var n = Math.floor(Math.random() * this.products.length)
        this.newArray.push(this.products[n])
        this.products.splice(n, 1)
      }
      return this.newArray + ''
    }
  }
}
</script>
<style lang="scss" scoped>
.product-img {
  width: 100%;
  height: 220px;
  background-position: center;
  background-size: cover;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.5;
  }
}

@include media-breakpoint-down(xl) {
  .intro {
    color: $black;

    &:hover {
      color: $blue;
    }

    &:active {
      color: $blue;
    }

    .card-text {
      font-size: 1.125rem;
    }
  }
}
</style>
