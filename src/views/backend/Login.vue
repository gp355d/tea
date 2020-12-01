<template>
    <div class="container">
        <div class="row py-4">
            <div class="col-md-6">
                <div class="loginbg"></div>
            </div>
            <div class="col-md-6 shadow">
              <h2 class="font-weight-bold text-center">tea 商品管理系統</h2>
                <form class="form-signin" @submit.prevent="login">
                    <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="user.email" required>
                    </div>
                    <div class="form-group mb-5">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password" required>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">登入</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Toast from '@/swal'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: ''
    }
  },
  methods: {
    login: function () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/auth/login`// 登入API
      this.$http.post(api, this.user).then((res) => {
        console.log(res)
        const token = res.data.token
        const expired = res.data.expired
        document.cookie = `logintoken=${token}; expires=${new Date(expired * 1000)}; path=/`// 將token的值及cookie期限存入cookie
        Toast.fire({
          title: '登入成功',
          icon: 'success'
        })
        vm.$router.push('/admin')
      })
        .catch((error) => {
          console.log(error)
          // alert(error.responsive)
          Toast.fire({
            title: '帳號密碼錯誤，請確認輸入帳號密碼是否正確',
            icon: 'error'
          })
          vm.$router.push('/')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
// @import '../../assets/all.scss';
.loginbg{
    background: url('https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
    background-size: cover;
    background-position: center center;
    height: 50vh;
}
</style>
