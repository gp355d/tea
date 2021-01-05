<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
    <router-link class="navbar-brand" style="font-size: 2rem;
      font-family: 'Lobster', cursive;" to="/">
        tea 商品管理
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav font-weight-bold">
        <router-link class="nav-item nav-link router-link-exact-active router-link-active" to="/products">回前台<span
            class="sr-only">(current)</span></router-link>
        <a class="nav-item nav-link router-link-exact-active router-link-active btn font-weight-bold"
          @click.prevent="logout">登出</a>
      </div>
    </div>
  </nav>
</template>
<script>
import Toast from '@/swal'

export default {
  data () {
    return {

    }
  },
  methods: {
    logout: function () {
      document.cookie = 'logintoken=; expires=; path=/'
      Toast.fire({
        title: '登出成功',
        icon: 'success'
      })
      this.$router.push('/login')
    }
  }
}
</script>
