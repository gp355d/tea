<template>
  <div class="wrapper container py-4">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center">
      <div class="col-md-8 bg-white shadow shopcart-layout" v-if="carts.length > 0">
        <div class="cart p-3">
          <router-link class="h5 text-dark back" to="/products"><i class="fas fa-chevron-left mr-2"></i><span class="continue">繼續購物</span>
          </router-link>
          <h2 class="font-weight-bold mb-3"><i class="fas fa-leaf mr-2 text-primary"></i>購物車清單</h2>
          <div class="cart-list d-flex mt-0 bg-light flex-sm-nowrap mb-3" v-for="item in carts" :key="item.product.id+1">
            <div class="img-fluid shopcart-img" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }" alt="product-img"/>
            <div class="w-100 p-3 shopcart-content">
              <a href="#" @click.prevent="removeCartItem(item.product.id)" class="shopcart-remove-item"><i
                  class="fas fa-times"></i></a>
              <p class="mb-0 font-weight-bold">{{ item.product.title }}</p>
              <p class="mb-1 text-muted" style="font-size: 14px;">{{ item.product.content }}</p>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="input-group flex-nowrap flex-lg-nowrap">
                  <div class="control d-flex">
                    <div class="input-group-prepend pr-1">
                      <button class="btn btn-outline-primary rounded-0 border-0" type="button"
                        @click.prevent="updateQuanity(item.product.id, item.quantity - 1)" :disabled="item.quantity === 1"> <i
                          class="fas fa-minus"></i></button>
                    </div>
                    <input min="1" :value="item.quantity" @change="updateQuanity(item.product.id, item.quantity)" disabled
                      type="number" class="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder=""
                      aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <div class="input-group-append pl-1">
                      <button class="btn btn-outline-primary rounded-0 border-0" type="button"><i class="fas fa-plus"
                          @click.prevent="updateQuanity(item.product.id, item.quantity + 1)"></i></button>
                    </div>
                  </div>
                  <p class="w-50 mb-0 ml-auto text-right h5 d-flex align-items-center justify-content-end">{{ item.product.price | money }}/{{ item.product.unit }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">總計</p>
            <p class="mb-0 h4 font-weight-bold text-danger">{{ cartTotal | money }}</p>
          </div>
          <router-link to="/order" class="btn btn-primary btn-block mt-4 rounded-0 py-3">確認訂單</router-link>
        </div>
      </div>
      <div class="col-md-8 bg-white" style="min-height: calc(100vh - 56px - 76px);" v-else>
        <router-link class="h5 text-dark back" to="/products">
        <i class="fas fa-chevron-left mr-2"></i>
        <span class="continue">繼續購物</span>
        </router-link>
        <h2 class="mt-2 font-weight-bold"><i class="fas fa-leaf mr-2 text-primary"></i>目前購物車無商品，快去逛逛</h2>
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
    getCart () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      vm.$http.get(api).then((res) => {
        vm.carts = res.data.data
        vm.updateTotal()// 取得購物車後，再更新購物車商品總價
        vm.isLoading = false
      })
        .catch((error) => {
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
          vm.isLoading = false
        })
    },
    updateTotal () {
      const vm = this
      let total = 0
      vm.carts.forEach((item) => {
        total += item.product.price * item.quantity // 購物車商品售價壘加
        vm.cartTotal = total
      })
    },
    updateQuanity (id, quantity) {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      const carts = {
        product: id,
        quantity: quantity
      }
      vm.$http.patch(api, carts).then(() => {
        vm.getCart()// 更新購物車內的數量後，再取得購物車列表
        Toast.fire({
          text: '商品已更正數量',
          icon: 'success'
        })
        vm.isLoading = false
      })
        .catch((error) => {
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
          vm.isLoading = false
        })
    },
    removeCartItem (id) { // 傳入選取的產品id
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}` // 移除購物車內單筆資料的API
      vm.$http.delete(api).then(() => {
        vm.$bus.$emit('update-total')
        vm.getCart()// 移除購物車內單筆資料，再取得取得購物車列表
        Toast.fire({
          text: '商品已刪除',
          icon: 'success'
        })
        vm.isLoading = false
      })
        .catch((error) => {
          Toast.fire({
            title: `${error.response}`,
            icon: 'error'
          })
          vm.isLoading = false
        })
    },
    removeAllCartItem () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/all/product` // 移除購物車內所有資料的API
      vm.$http.delete(api).then(() => {
        vm.$bus.$emit('update-total')
        vm.getCart()// 移除購物車內所有資料，再取得取得購物車列表
        Toast.fire({
          text: '商品已全部刪除',
          icon: 'success'
        })
        vm.isLoading = false
      })
        .catch((error) => {
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
@import '../../assets/scss/frontend/main';

@include media-breakpoint-down(xl) {
  .shopcart-layout {
    min-height: calc(100vh - 58px - 76px);

    .shopcart-remove-item {
      position: absolute;
      top: 16px;
      right: 16px;
      color: #20672d;

      &:hover {
        color: #000;
      }

      &:active {
        font-size: 20px;
      }
    }
  }
}

@include media-breakpoint-between(md, lg) {
  .shopcart-layout {
    .shopcart-img {
      width: 35%;
    }
  }
}

@include media-breakpoint-between(sm, md) {
  .shopcart-layout {
    .shopcart-img {
      width: 50%;
    }
  }
}

.shopcart-img {
  width: 120px;
  background-position: center;
  background-size: cover;
}

@media (max-width: 420px) {
  .shopcart-img {
    width: 25%;
  }

  .control {
    width: 65%;
  }
}

.shopcart-content {
  position: relative;

  a:active {
    font-size: 20px;
  }
}

</style>
