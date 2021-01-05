<template>
  <div>
    <i class="fas fa-shopping-cart">
      <span class="badge badge-pill badge-danger" style="position: relative;
      top: -8px;
      left: -5px;">
        {{ cartTotal }}
      </span>
    </i>
  </div>
</template>
<script>
import Toast from '@/swal'

export default {
  data () {
    return {
      cartTotal: 0
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('update-total', () => {
      this.getCart()
    })
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      vm.$http.get(api).then((res) => {
        vm.cartTotal = res.data.data.length
      })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    }
  }
}
</script>
