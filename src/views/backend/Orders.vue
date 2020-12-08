<template>
<div class="container">
  <h2 class="font-weight-bold">訂單列表</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>下單時間</th>
        <th>購買款項</th>
        <th>付款方式</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>詳細資訊</th>
      </tr>
    </thead>
    <tbody v-if="orders.length">
      <tr v-for="(item, i) in orders" :key="i" :class="{'text-primary': item.paid}">
        <td>{{ item.created.datetime }}</td>
        <td>
          <ul class="list-unstyled">
            <li v-for="(product, i) in item.products" :key="i">
              {{ product.product.title }} 數量：{{ product.quantity }}
              {{ product.product.unit }}
            </li>
          </ul>
        </td>
        <td>{{ item.payment }}</td>
        <td>{{ item.amount }}</td>
        <td>
          <div class="custom-control custom-switch">
            <input :id="item.id" v-model="item.paid" type="checkbox" class="custom-control-input"
              @change="setOrderPaid(item)">
            <label class="custom-control-label" :for="item.id">
              <strong v-if="item.paid" class="text-success">已付款</strong>
              <span v-else class="text-muted">尚未付款</span>
            </label>
          </div>
        </td>
        <td>
          <button type="button" class="btn btn-outline-primary" @click="getdetailOrders(item.id)">訂單詳細</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="orderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="orderModalLabel">客戶訂單資料</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-unstyled">
            <li class="pb-1">姓名：{{ userorderinfo.name }}</li>
            <li class="pb-1">信箱：{{ userorderinfo.email }}</li>
            <li class="pb-1">電話：{{ userorderinfo.tel }}</li>
            <li>地址：{{ userorderinfo.address }}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>
        </div>
      </div>
    </div>
  </div>
  <pg :pages="pagination" @emit-pages="getOrders"></pg>
</div>
</template>
<script>
/* global $ */
import Pagination from '@/components/Pagination.vue'
import Toast from '@/swal'
export default {
  components: {
    pg: Pagination
  },
  data () {
    return {
      orders: { // 存放AJAX回傳的訂單資料
      },
      isNew: false,
      pagination: {},
      isLoading: false,
      userorderinfo: ''
    }
  },
  methods: {
    getOrders: function () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders` // 取得訂單資料API
      this.$http.get(api).then((res) => {
        vm.orders = res.data.data
        vm.pagination = res.data.meta.pagination
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    setOrderPaid (item) {
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid` // 變更付款狀況API，已付款
      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid` // 變更付款狀況API，未付款
      }

      this.$http.patch(api, item.id).then((res) => {
        console.log(res)
        this.getOrders()
      })
    },
    getdetailOrders (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`
      this.$http.get(api).then((res) => {
        console.log(res)
        vm.userorderinfo = res.data.data.user
        $('#orderModal').modal('show')
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    }
  },
  created () {
    this.getOrders()
  }

}
</script>
