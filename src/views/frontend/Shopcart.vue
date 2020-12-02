<template>
    <div class="container py-4">
        <!-- <button type="button" @click.prevent="removeAllCartItem">clear</button> -->
        <loading :active.sync="isLoading"></loading>
        <div class="row justify-content-center">
          <div class="col-md-8 bg-white py-5 shadow shopcart-layout" v-if="carts.length > 0">
              <router-link class="h5 text-primary" to="/products"><i class="fas fa-chevron-left mr-2"></i><span>繼續購物</span></router-link>
              <h2 class="font-weight-bold">購物車清單</h2>
            <div class="d-flex mt-4 bg-light" v-for="item in carts" :key="item.product.id+1">
              <img class="img-fluid shopcart-img" :src="item.product.imageUrl[0]" alt="product-img">
              <div class="w-100 p-3 shopcart-content">
                <a href="#" @click.prevent="removeCartItem(item.product.id)" class="shopcart-remove-item"><i class="fas fa-times"></i></a>
                <p class="mb-0 font-weight-bold">{{item.product.title}}</p>
                <p class="mb-1 text-muted" style="font-size: 14px;">{{item.product.content}}</p>
                <div class="d-flex justify-content-between align-items-center w-100">
                  <div class="input-group w-100 align-items-center">
                    <div class="input-group-prepend pr-1">
                      <button class="btn btn-outline-primary rounded-0 border-0" type="button" @click.prevent="updateQuanity(item.product.id, item.quantity - 1)" :disabled="item.quantity === 1"> <i class="fas fa-minus"></i></button>
                    </div>
                    <input  min="1" :value="item.quantity" @change="updateQuanity(item.product.id, item.quantity)" disabled type="number" class="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <div class="input-group-append pl-1">
                      <button class="btn btn-outline-primary rounded-0 border-0" type="button"><i class="fas fa-plus"  @click.prevent="updateQuanity(item.product.id, item.quantity + 1)"></i></button>
                    </div>
                  </div>
                </div>
                  <p class="mb-0 ml-auto text-right h3">{{item.product.price | money}}/{{item.product.unit}}</p>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">總計</p>
              <p class="mb-0 h4 font-weight-bold text-danger">{{cartTotal | money}}</p>
            </div>
            <router-link to="/order" class="btn btn-primary btn-block mt-4 rounded-0 py-3">確認訂單</router-link>
          </div>
          <div class="col-md-8 bg-white py-5" style="min-height: calc(100vh - 56px - 76px);" v-else>
             <router-link class="h5 text-primary" to="/products"><i class="fas fa-chevron-left mr-2"></i><span>繼續購物</span></router-link>
             <h2 class="mt-2 font-weight-bold">目前購物車無商品，快去逛逛</h2>
        </div>
      </div>
    </div>
</template>
<script>
import Toast from '@/swal'
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
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then(function (res) {
        vm.carts = res.data.data
        vm.updateTotal()// 取得購物車後，再更新購物車商品總價
        vm.isLoading = false
      })
        .catch(function (error) {
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
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
      })
        .catch(function (error) {
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
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
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
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
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
          vm.isLoading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.shopcart-layout{
  min-height: calc(100vh - 58px - 76px);
  .shopcart-img{
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
  .shopcart-remove-item{
    position:absolute;
    top: 16px;
    right: 16px;
    color:#20672d;
  }
}
.shopcart-content{
  position:relative;
}
</style>