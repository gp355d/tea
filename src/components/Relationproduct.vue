<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="item mb-5" v-for="item in related" :key="item.id">
      <div class="card h-100">
        <div class="relateproduct-img" :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
          @click.prevent="getDetail(item.id)"></div>
        <div class="card-body">
          <h6 class="card-title">
            {{ item.title }}
          </h6>
          <div class="text-right pr-2">
            售價<span class="text-danger font-weight-bold">{{ item.price | money }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import Toast from '@/swal'

export default {
  name: 'carrousel',
  data () {
    return {
      products: [],
      swiperOptions: {
        speed: 900,
        allowTouchMove: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      }
    }
  },
  props: {
    product: {
      type: Object
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
      })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    getDetail (id) {
      this.$router.push(`/product/${id}`)
      this.$emit('update')
    }
  },
  computed: {
    related () {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category
      )
    }
  }

}
</script>
<style lang="scss" scoped>
.card:hover .relateproduct-img,
.card:hover .card-body {
  opacity: 0.5;
}

@include media-breakpoint-down(xl) {
  .relateproduct-img {
    width: 100%;
    min-height: 200px;
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
}
</style>
