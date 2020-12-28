<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
    <router-link class="navbar-brand logo-font logo-size" to="/">tea</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav font-weight-bold">
        <router-link class="nav-item nav-link" to="/products">前台產品列表<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/aboutus">關於我們</router-link>
        <router-link class="nav-item nav-link" to="/effect">茶的知識</router-link>
        <router-link class="nav-item nav-link" to="/shopcart">
          <Cart/>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import Cart from '@/components/Cart.vue'
export default {
  data () {
    return {}
  },
  components: {
    Cart
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/frontend/main';

.logo-size {
  font-size: 2rem;

  &:hover {
    color: $black;
  }

  &:active {
    color: $black;
  }
}

</style>
