<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="item mb-5" v-for="item in related" :key="item.id">
        <div class="card h-100">
            <div class="product-img" :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }" @click.prevent="getDetail(item.id)"></div>
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
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data
        })
        .catch(() => {
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
//   computed: {
//     swiper () {
//       return this.$refs.mySwiper.$swiper
//     }
//   },
//   mounted () {
//     console.log('Current Swiper instance object', this.swiper)
//     this.swiper.slideTo(3, 1000, false)
//   }
}
</script>
<style lang="scss" scoped>
.product-img {
  min-height: 200px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>
