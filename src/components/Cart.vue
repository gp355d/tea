<template>
<div>
  <i class="fas fa-shopping-cart">
    <span class="badge badge-pill badge-danger" style="position: relative;left: -5px;top:-8px">{{cartTotal}}</span>
  </i>
</div>
</template>
<script>
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
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api)
        .then((res) => {
          this.cartTotal = res.data.data.length
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
