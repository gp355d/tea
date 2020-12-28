<template>
  <div class="wrapper container py-4">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center" v-if="tmpProducts.imageUrl[0]">
      <div class="col-md-10 mb-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white font-weight-bold">
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/products">全部茶品</router-link>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">{{ tmpProducts.title }}</li>
          </ol>
        </nav>
        <div class="row mb-3">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="product" :style="{backgroundImage: `url(${tmpProducts.imageUrl[0]})`}"></div>
          </div>
          <div class="col-md-6">
            <h2 class="font-weight-bold">{{ tmpProducts.title }}</h2>
            <p v-html="tmpProducts.content">{{ tmpProducts.content }}</p>
            <p>消費滿 NT $1,500，享有免運費優惠</p>
            <p>[運送] 黑貓低溫宅配</p>
            <p>[付款] 信用卡(一次付清)、貨到付款、ATM 轉帳</p>
            <h3 class="font-weight-bold my-4 text-right">
              售價<span class="text-danger">{{ tmpProducts.price | money }}</span>
            </h3>
            <div class="d-flex">
              <select name="unit" class="form-control mr-3" v-model="tmpProducts.num">
                <option :value="num" v-for="num in 5" :key="num">
                  {{ num }} {{ tmpProducts.unit }}
                </option>
              </select>
              <button type="button" class="btn btn-block btn-primary"
                @click.prevent="addToCart(tmpProducts.id, tmpProducts.num)">
                <i class="fas fa-spinner fa-spin" v-if="tmpProducts.id === loadingItem"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">商品介紹</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">常見問題</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row p-3">
                  <div class="col-md-5">
                    <h4 class="text-primary font-weight-bold">產品詳細介紹</h4>
                  </div>
                  <div class="col-md-7">
                    <p v-html="tmpProducts.description">{{ tmpProducts.description }}</p>
                  </div>
                </div>
                <hr>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="row p-3">
                  <div class="col-md-12 pl-0">
                    <h4 class="text-primary font-weight-bold">產品常見問題</h4>
                  </div>
                  <div class="row">
                    <div class="col-md-5 d-flex pb-2 mb-4">
                      <p class="text-primary mb-2">沖泡包和茶包可以存放多久？</p>
                    </div>
                    <div class="col-md-7 d-flex pb-2 mb-4">
                      <p class="fz-2 fw-300 text-text text-justify productContentSub">tea的所有產品皆無添加防腐劑，沖泡包保存期限為12個月，茶包最佳賞味期限為6個月，提醒您在最佳賞味期限內品嚐，才能確保享用到最美好的滋味喔！</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 d-flex pb-2 mb-4">
                      <p class="text-primary mb-2">茶包保存方式？</p>
                    </div>
                    <div class="col-md-7 d-flex pb-2 mb-4">
                      <p class="fz-2 fw-300 text-text text-justify productContentSub">本茶包選用茶葉無添加防腐劑。因此保存方式需格外注意，請密封放置乾涼處，避免高溫潮溼，以免茶包變質。</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 d-flex pb-2 mb-4">
                      <p class="text-primary mb-2">茶包內的茶葉有農藥嗎？</p>
                    </div>
                    <div class="col-md-7 d-flex pb-2 mb-4">
                      <p class="fz-2 fw-300 text-text text-justify productContentSub">本茶包選用茶葉絕無含農藥。我們堅持不殘留農藥的標準，更通過TTB專業認證400項農藥檢測，請您放心。</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 d-flex pb-2 mb-4">
                      <p class="text-primary mb-2">下單後多久會收到？</p>
                    </div>
                    <div class="col-md-7 d-flex pb-2 mb-4">
                      <p class="fz-2 fw-300 text-text text-justify productContentSub">為了能讓顧客品嘗到最新鮮的滋味，tea的所有茶品下單後，約1~2天內可以送達，若訂單數量超過 10 包以上，我們會另外聯繫您告知預計送達時間。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="font-weight-bold mb-3"><i class="fas fa-leaf mr-2 text-primary"></i>相關茶品</h3>
        <Relationproduct :product="tmpProducts" @update="getPeoductDetail" />
      </div>
    </div>
  </div>
</template>
<script>
import Relationproduct from '@/components/Relationproduct.vue'
import Toast from '@/swal'
export default {
  data () {
    return {
      tmpProducts: {
        imageUrl: [],
        num: 1
      },
      isLoading: false,
      loadingItem: ''
    }
  },
  components: {
    Relationproduct
  },
  created () {
    this.getPeoductDetail()
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    getPeoductDetail () {
      const vm = this
      const { id } = this.$route.params// 使用$route屬性取得id
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`// 取得前台單一產品資料API
      vm.isLoading = true
      vm.$http.get(api).then((res) => {
        vm.tmpProducts = {
          ...res.data.data,
          num: 1
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
    addToCart (id, quantity = 1) { // 傳入選取的產品id，quantity預設值為1
      const vm = this
      vm.isLoading = true
      vm.loadingItem = id
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`// 前台加入購物車的API
      const carts = {
        product: id,
        quantity: quantity
      }
      vm.$http.post(api, carts).then(() => {
        vm.$bus.$emit('update-total')
        vm.loadingItem = ''
        Toast.fire({
          title: '該商品已加入購物車',
          icon: 'success'
        })
        vm.isLoading = false
      })
        .catch((error) => {
          vm.loadingItem = ''
          const errorinfo = error.response.data.errors
          if (errorinfo) {
            Toast.fire({
              title: `${errorinfo}`,
              icon: 'warning'
            })
          }
          vm.isLoading = false
        })
    }

  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/frontend/main';

.product {
  width: 100%;
  height: 50vh;
  background-position: center;
  background-size: cover;
}
</style>
