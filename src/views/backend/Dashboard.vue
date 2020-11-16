<template>
    <div>
        <Navbar/>
        <div class="container-fluid">
          <div class="row">
          <Sidebar/>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-2">
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
    checkAuth: function () {
      const vm = this
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)logintoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`
      this.$http.post(api, { api_token: this.token }).then(function (res) {
        if (res.data.success) {
          vm.isAuth = true
        }
      })
        .catch(function () {
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
@import '../../assets/all.scss';
@import '../../assets/dashboard.scss';
</style>
