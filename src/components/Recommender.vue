<template>
<div class="container mb-3">
<h2 class="font-weight-bold">精選茶品</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-4 mt-4"  v-for="item in newArray" :key="item.id">
            <div class="card rounded shadow h-100">
              <img class="card-img-top" :src="item.imageUrl[0]" alt="Card image cap">
              <div class="card-body intro">
                <h4 class="card-title font-weight-bold">{{item.title}}</h4>
                <p class="card-text" v-html="item.content">{{item.content}}</p>
              </div>
                <router-link class="btn btn-primary font-weight-bold" :to="`/product/${ item.id }`" >來去看看</router-link>
            </div>
          </div>

          <!-- <div class="col-md-4 mt-4">
            <div class="card rounded shadow h-100">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1517584640132-9379fc085be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title font-weight-bold">東方美人茶</h4>
                <p class="card-text"></p>
              </div>
                <router-link class="btn btn-primary font-weight-bold" to="/products" >來去看看</router-link>
            </div>
          </div>

          <div class="col-md-4 mt-4">
              <div class="card rounded shadow h-100">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1562534104-6b964ad63e56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="Card image cap">
                <div class="card-body">
                  <h4 class="card-title font-weight-bold">四季春</h4>
                  <p class="card-text"></p>
                </div>
                  <router-link class="btn btn-primary font-weight-bold" to="/product/I1CKrEu4GNK9AZlVMbWKACcCdIW9FHFu1SwsLBZ7ngSSnG7HZReqf3TmUFypvx1Q" >來去看看</router-link>
              </div>
          </div> -->
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
    getProducts: function () {
      this.isLoading = true
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api).then(function (res) {
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
    random: function (num, arr) {
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
@include media-breakpoint-down(xl) {
.intro{
    .card-text{
        font-size: 1.125rem;
    }
  }
}
</style>
