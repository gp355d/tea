<template>
    <div class="container py-4">
        <!-- <button type="button" @click.prevent="removeAllCartItem">clear</button> -->
        <loading :active.sync="isLoading"></loading>
        <div class="row justify-content-center">
        <div class="col-md-6 bg-white py-5" style="min-height: calc(100vh - 56px - 76px);">
             <router-link class="h5 text-primary" to="/products"><i class="fas fa-chevron-left mr-2"></i><span>繼續購物</span></router-link>
          <div class="d-flex justify-content-between">
             <h2 class="mt-2 font-weight-bold">購物車清單</h2>
          </div>
          <div class="d-flex mt-4 bg-light" v-for="item in carts" :key="item.product.id+1">
            <img :src="item.product.imageUrl[0]" alt="" style="width: 120px; height: 120px; object-fit: cover;">
            <div class="w-100 p-3 position-relative">
              <a href="#" @click.prevent="removeCartItem(item.product.id)" class="position-absolute" style="top: 16px; right: 16px;color:#20672d"><i class="fas fa-times"></i></a>
              <p class="mb-0 font-weight-bold">{{item.product.title}}</p>
              <p class="mb-1 text-muted" style="font-size: 14px;">{{item.product.content}}</p>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="input-group w-50 align-items-center">
                  <div class="input-group-prepend pr-1">
                    <button class="btn btn-outline-primary rounded-0 border-0" type="button" @click.prevent="updateQuanity(item.product.id, item.quantity - 1)" :disabled="item.quantity === 1"> <i class="fas fa-minus"></i></button>
                  </div>
                  <input  min="1" :value="item.quantity" @change="updateQuanity(item.product.id, item.quantity)" disabled type="number" class="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                  <div class="input-group-append pl-1">
                    <button class="btn btn-outline-primary rounded-0 border-0" type="button"><i class="fas fa-plus"  @click.prevent="updateQuanity(item.product.id, item.quantity + 1)"></i></button>
                  </div>
                </div>
                <p class="mb-0 ml-auto">{{item.product.price | money}}/{{item.product.unit}}</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">總計</p>
            <p class="mb-0 h4 font-weight-bold">{{cartTotal | money}}</p>
          </div>
          <router-link to="/products" class="btn btn-primary btn-block mt-4 rounded-0 py-3">確認訂單</router-link>
        </div>
      </div>
        <!-- <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="text-left font-weight-bold">購物車清單</h2>
                <div v-for="item in carts" :key="item.product.id+1">
                    <div class="d-flex">
                       <div class="rounded-0 mr-2" style="width:130px;height:120px;background-size: cover;background-position: center"  :style="{backgroundImage: `url(${item.product.imageUrl[0]})`}"></div>
                       <div class="list text-left">
                           <p>{{item.product.title}}</p>
                           <p>{{item.product.content}}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
  data () {
    return {
      carts: [],
      cartTotal: 0,
      isLoading: false
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart: function () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then(function (res) {
        vm.carts = res.data.data
        vm.updateTotal()// 取得購物車後，再更新購物車商品總價
        vm.isLoading = false
      // console.log(res)
      })
        .catch(function (error) {
          console.log(error.response)
          vm.isLoading = false
        })
    },
    updateTotal: function () {
      const vm = this
      let total = 0
      this.carts.forEach(function (item) {
      // 購物車商品售價壘加
        total += item.product.price * item.quantity
        vm.cartTotal = total
        console.log(vm.cartTotal, item.product.price, item.quantity)
      })
    },
    updateQuanity: function (id, quantity) {
      this.isLoading = true
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      const carts = {
        product: id,
        quantity: quantity
      }
      this.$http.patch(api, carts).then(function (res) {
        vm.getCart()// 更新購物車內的數量後，再取得購物車列表
        console.log(res)
      })
        .catch(function (error) {
          console.log(error.response)// this.$http
          vm.isLoading = false
        })
    },
    removeCartItem: function (id) { // 傳入選取的產品id
      const vm = this
      this.isLoading = true
      // 移除購物車內單筆資料的API
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(api).then(function () {
        vm.isLoading = false// 讀取效果設為true，即關閉效果
        vm.getCart()// 移除購物車內單筆資料，再取得取得購物車列表
        vm.$bus.$emit('update-total')
      })
        .catch(function (error) {
          console.log(error.response)
          vm.isLoading = false
        })
    },
    removeAllCartItem: function () {
      const vm = this
      this.isLoading = true// 讀取效果設為true，即打開效果
      // 移除購物車內所有資料的API
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http.delete(api).then(function () {
        vm.isLoading = false// 讀取效果設為true，即關閉效果
        vm.getCart()// 移除購物車內所有資料，再取得取得購物車列表
        vm.$bus.$emit('update-total')
      })
        .catch(function (error) {
          console.log(error.response)
          vm.isLoading = false
        })
    }
  }
}
</script>
