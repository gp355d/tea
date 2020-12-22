<template>
  <div class="wrapper container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center flex-md-row flex-column-reverse mt-3" v-if="carts.length > 0">
      <div class="col-md-7">
        <div class="bg-white p-4">
          <router-link to="/shopcart" class="h5 text-primary back"><i class="fas fa-chevron-left mr-2"></i><span>返回購物車清單</span>
          </router-link>
          <h2 class="font-weight-bold"><i class="fas fa-leaf mr-2 text-primary"></i>顧客資訊</h2>
          <validation-observer v-slot="{ invalid }">
            <div class="col-md-12">
              <form @submit.prevent="submitOrder">
                <div class="form-group">
                  <validation-provider rules="required|email" v-slot="{ errors, classes, passed }">
                    <label for="ContactMail"><span class="text-danger">*</span> Email</label>
                    <input type="email" :class="classes" class="form-control rounded-0" name="Email" id="ContactMail"
                      aria-describedby="emailHelp" placeholder="輸入Email" v-model="temporders.email">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed" class="valid-feedback">Email 正確</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                    <label for="ContactName"><span class="text-danger">*</span> 姓名</label>
                    <input type="text" :class="classes" class="form-control rounded-0" name="姓名" id="ContactName"
                      placeholder="輸入姓名" v-model="temporders.name">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed" class="valid-feedback">姓名正確</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider rules="required|min:8" v-slot="{ errors, classes, passed }">
                    <label for="ContactPhone"><span class="text-danger">*</span> 電話</label>
                    <input type="text" :class="classes" class="form-control rounded-0" name="電話" id="ContactPhone"
                      placeholder="輸入電話" v-model="temporders.tel">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed" class="valid-feedback">電話號碼正確</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                    <label for="Address"><span class="text-danger">*</span> 運送地址</label>
                    <input name="地址" type="text" :class="classes" class="form-control" id="Address" placeholder="輸入地址"
                      v-model="temporders.address">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed" class="valid-feedback">地址正確</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <label for="Pay"><span class="text-danger">*</span> 付款方式</label>
                  <select class="form-control" id="Pay" name="付款方式" v-model="temporders.payment" required>
                    <option value="" selected disabled>請選擇付款方式</option>
                    <option v-for="(item,i) in payMoneyway" :key="i+1" :value="item">{{ item }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="Message">留言</label>
                  <textarea class="form-control" id="Message" rows="7" v-model="temporders.message"></textarea>
                </div>
                <div
                  class=" w-100 d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end">
                  <button type="submit" class="btn btn-primary btn-block py-3 px-7 rounded-0" :disabled="invalid"><i
                      class="fas fa-spinner fa-spin" v-if="btnsubmitstatus">
                    </i>送出訂單</button>
                </div>
              </form>
            </div>
          </validation-observer>
        </div>
      </div>
      <div class="col-md-5">
        <div class="border p-4 mb-4">
          <h3 class="font-weight-bold mb-4"><i class="fas fa-leaf mr-2 text-primary"></i>訂單明細</h3>
          <div class="d-flex mb-3" v-for="item in carts" :key="item.product.id+1">
            <img :src="item.product.imageUrl[0]" alt="product-img" class="product-img mr-2">
            <div class="w-100">
              <div class="d-flex justify-content-between font-weight-bold">
                <p class="product-text mb-0">{{ item.product.title }}</p>
                <p class="product-quantity mb-0">X{{ item.quantity }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="text-muted mb-0"><small class="product-small-text">{{ item.product.price | money }} /
                    {{ item.product.unit }}</small></p>
                <p class="product-price mb-0">{{ item.product.price | money }}</p>
              </div>
            </div>
          </div>
          <table class="pay-info table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                <td class="text-right border-0 px-0 pt-4">{{ cartTotal | money }}</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                <td class="text-right border-0 px-0 pt-0 pb-4">{{ temporders.payment }}</td>
              </tr>
              <tr>
                <td colspan="2" class="text-right border-0 px-0 pt-0 pb-4">
                  <div class="input-group mt-3 input-group-sm">
                    <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
                    <div class="input-group-append">
                      <button class="btn btn-outline-primary" type="button" @click.prevent="addCouponCode"
                        :disabled="loadingItem">
                        <i class="fas fa-spinner fa-spin" v-if="loadingItem"></i>套用優惠碼
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">總計</p>
            <p v-if="coupon.enabled" class="mb-0 h4 font-weight-bold text-danger">
              {{ cartTotal * (coupon.percent / 100) | money }}</p>
            <p v-else class="mb-0 h4 font-weight-bold text-danger">{{ cartTotal | money }}</p>
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
      tmpProducts: {
        imageUrl: []
      },
      isLoading: false,
      loadingItem: false,
      btnsubmitstatus: false,
      carts: [],
      cartTotal: 0,
      coupon_code: '',
      coupon: {},
      temporders: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      },
      payMoneyway: ['WebATM', 'ATM', 'Barcode', 'Credit', 'ApplePay', 'GooglePay']
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      const vm = this
      vm.isLoading = true// 讀取效果設為true，即打開效果
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`// 取得購物車的API
      vm.$http.get(api).then((res) => {
        vm.carts = res.data.data
        vm.updateTotall()// 取得購物車後，再更新購物車商品總價
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
    updateTotall () {
      const vm = this
      let total = 0
      vm.carts.forEach((item) => { // 將carts的陣列依序跑迴圈
        total += item.product.price * item.quantity // 購物車商品售價壘加
        vm.cartTotal = total
      })
    },
    addCouponCode () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/coupon/search`
      vm.isLoading = true
      vm.loadingItem = true
      vm.$http.post(api, { code: vm.coupon_code }).then((res) => {
        vm.getCart()
        vm.coupon = res.data.data
        const nowTimestamp = new Date().getTime()
        const deadlineTimestamp = res.data.data.deadline.timestamp * 1000 // ，檢查此優惠券是否已過期
        if (nowTimestamp > deadlineTimestamp) {
          Toast.fire({
            text: '優惠券已過期',
            icon: 'error'
          })
        } else {
          Toast.fire({
            title: '優惠卷已套用',
            icon: 'success'
          })
        }
        vm.isLoading = false
        vm.loadingItem = false
      })
        .catch((error) => {
          const errorinfo = error.response.data.errors
          if (errorinfo) {
            errorinfo.code.forEach((errmsg) => {
              Toast.fire({
                title: `${errmsg}`,
                icon: 'error'
              })
            })
          } else {
            const { message } = error.response.data
            Toast.fire({
              title: `${message}`,
              icon: 'error'
            })
          }
          vm.isLoading = false
          vm.loadingItem = false
        })
    },
    submitOrder () {
      const vm = this
      vm.btnsubmitstatus = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`
      const order = { ...vm.temporders }
      if (vm.coupon.enabled) {
        order.coupon = vm.coupon.code
      }
      vm.$http.post(api, order).then((res) => {
        vm.$bus.$emit('update-total')
        Toast.fire({
          text: '訂單已送出',
          icon: 'success'
        })
        vm.getCart()
        vm.loadingItem = false
        vm.btnsubmitstatus = false
        vm.$router.push(`/checkout/${res.data.data.id}`)
      })
        .catch(() => {
          Toast.fire({
            text: '訂單已送出失敗，稍後在試',
            icon: 'error'
          })
          vm.loadingItem = false
          vm.btnsubmitstatus = false
        })
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/scss/frontend/main';
</style>
