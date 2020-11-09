<template>
    <div class="container">
<div class="mt-5 mb-7">
        <div class="row">
          <div class="col-md-6">
            <h2 class="font-weight-bold">訂單成立</h2>
            <p>感謝您，訂購本公司茶品，收到訂單後，預計1~2天出貨，請您耐心等候</p>
            <div class="checkout-img"></div>
            <a class="h5 btn text-primary" @click.prevent="backtoHome" ><i class="fas fa-chevron-left mr-2"></i><span>回到首頁</span></a>
          </div>
          <div class="col-md-6">
            <div class="card rounded-0 py-4">
              <div class="card-header border-bottom-0 bg-white px-4 py-0">
                <h2 class="font-weight-bold">訂單資訊</h2>
              </div>
              <div class="card-body px-4 py-0">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0" v-for="(product, i) in order.products" :key="i">
                    <div class="d-flex mt-2">
                      <img :src="product.product.imageUrl[0]"  alt="" class="mr-2" style="width: 60px; height: 60px; object-fit: cover">
                      <div class="w-100 d-flex flex-column">
                        <div class="d-flex justify-content-between font-weight-bold">
                          <h5>{{ product.product.title }}</h5>
                          <p class="mb-0">X{{ product.quantity }}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-auto">
                          <p class="text-muted mb-0"><small>{{ product.product.price | money}}/{{ product.product.unit }}</small></p>
                          <p class="mb-0">{{ product.product.price | money}}</p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item px-0 pb-0">
                    <table class="table text-muted">
                      <tbody>
                        <tr>
                          <th scope="row" class="border-0 px-0 font-weight-normal">小計</th>
                          <td class="text-right border-0 px-0">{{ order.amount | money }}</td>
                        </tr>
                        <tr>
                          <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                          <td class="text-right border-0 px-0 pt-0">{{order.payment}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="d-flex justify-content-between mt-2 mb-2">
                      <p class="mb-0 h4 font-weight-bold">總計</p>
                      <p class="mb-0 h4 font-weight-bold">{{ order.amount | money }}</p>
                    </div>
                    <div class="d-flex justify-content-between font-weight-bold mb-2">
                      <span>訂單狀態</span>
                      <span class="text-success" v-if="order.paid">付款完成</span>
                      <span class="text-danger" v-else>尚未付款</span>
                    </div>
                    <div class="d-flex justify-content-end font-weight-bold">
                      <button class="btn btn-outline-primary" @click.prevent="payMoney"  :disabled="order.paid === true">
                        <i class="fas fa-spinner fa-spin"
                         v-if="loadingItem">
                      </i>進行付款</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// "zzlFDkOVw8zrpNox0kCFvkGxBF380x380xDvDMoSQLBHfetB3ZnvVRMtJSPI14Yz"
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false,
      loadingItem: ''

    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    // this.orderId = 'mpza9GJfuzSRPW7cl0YWWfZtXLY2WXYBxzceNZrU1TjEoaMykhKuPXv01LjtLZNt'
    this.getOrder()
  },
  methods: {
    getOrder: function () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        vm.order = res.data.data
        vm.isLoading = false
      })
        .catch(() => {
          vm.isLoading = false
        })
    },
    payMoney: function () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.loadingItem = true
      this.$http.post(api).then((res) => {
        if (res.data.data.paid) {
          vm.getOrder()
          alert('完成付款')
        }
        vm.loadingItem = false
      })
        .catch(() => {
          vm.loadingItem = false
          alert('付款失敗，稍後再試')
        })
    },
    backtoHome: function () {
      console.log(!this.order.paid)
      if (!this.order.paid) {
        alert('您尚未付款喔!')
      }
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout-img{
height: 50vh;
background-size: cover;
background-position: center;
background-image: url('https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
}
</style>
