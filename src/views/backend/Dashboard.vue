<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-2">
          <router-view :token="token" v-if="isAuth"></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/backend/Navbar.vue'
import Sidebar from '@/components/backend/Sidebar.vue'

export default {
  data () {
    return {
      token: '',
      isAuth: false
    }
  },
  created () {
    this.checkAuth()
  },
  methods: {
    checkAuth () {
      const vm = this
      vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)logintoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`
      vm.$http.post(api, { api_token: vm.token }).then((res) => {
        if (res.data.success) {
          vm.$http.defaults.headers.Authorization = `Bearer ${vm.token}`
          vm.isAuth = true
        }
      })
        .catch(() => {
          vm.$router.push('/login')
        })
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}

</script>
<style lang="scss">
@import '../../assets/scss/backend/dashboard';
</style>
