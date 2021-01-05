<template>
  <div class="container">
    <h2 class="font-weight-bold text-center mb-3"><i class="fas fa-leaf mr-2 text-primary"></i>精選茶品</h2>
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-4 product" v-for="item in newArray" :key="item.id">
            <router-link :to="`/product/${ item.id }`" target="_blank">
              <div class="card rounded shadow h-100">
                <div class="product-img" :style="{backgroundImage: `url(${item.imageUrl[0]})`}" />
                <div class="card-body intro">
                  <h4 class="card-title font-weight-bold text-center">{{ item.title }}</h4>
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
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      vm.$http.get(api).then((res) => {
        vm.products = res.data.data
        vm.random(3)
      })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    random (num) {
      for (let index = 0; index < num; index++) {
        const n = Math.floor(Math.random() * this.products.length)
        this.newArray.push(this.products[n])
        this.products.splice(n, 1)
      }
      return this.newArray + ''
    }
  }
}
</script>
<style lang="scss" scoped>

.card:hover .product-img,
.card:hover .intro {
  color: $blue;
  opacity: 0.5;
}

@include media-breakpoint-down(xl) {
  .product-img {
    width: 100%;
    height: 220px;
    background-position: center;
    background-size: cover;
  }

  .intro {
    color: $black;

    &:active {
      color: $blue;
    }
  }
}

@media (max-width: 757px) {
  .row {
    .product {
      margin-bottom: 1.25rem;
    }

    .product:nth-child(3) {
      margin-bottom: 0;
    }
  }
}
</style>
