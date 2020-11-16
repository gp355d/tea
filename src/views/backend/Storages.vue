<template>
    <div class="container">
        <h2 class="font-weight-bold">圖片儲存列表</h2>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>圖片縮圖</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in storages" :key="item.id">
                    <td><img :src="item.path" alt="" class="img-fluid" width="100px"></td>
                    <td><div class="btn-group btn-group-sm">
                      <button type="button" class="btn btn-outline-danger" @click.prevent="openimgdelModel(item)">刪除</button>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="deleteimgModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
        <div class="modal-dialog" role="document">
    <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
                <span>刪除資料</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            是否刪除該筆資料 (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
                取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteimgData">
                確認刪除
            </button>
        </div>
    </div>
</div>
</div>
        <pg :pages="pagination" @emit-pages="getData"></pg>
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
      storages: {}, // 存放取得回傳的圖片資料
      tempData: {}, // 存放暫存圖片資料
      pagination: {},
      isLoading: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function (pages = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage?page=${pages}` // 取得storage的檔案API
      this.$http.get(api).then(function (res) {
        vm.storages = res.data.data
        vm.pagination = res.data.meta.pagination
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    openimgdelModel: function (item) {
      $('#deleteimgModal').modal('show')
      this.tempData = Object.assign({}, item)
    },
    deleteimgData: function () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage/${this.tempData.id}` // 刪除storage的檔案API
      this.$http.delete(api).then(function (res) {
        $('#deleteimgModal').modal('hide')
        Toast.fire({
          title: '刪除圖片成功',
          icon: 'success'
        })
        vm.getData() // 刪除成功後，在重新讀取資料
      })
        .catch(function () {
          Toast.fire({
            title: '刪除圖片失敗',
            icon: 'error'
          })
        })
    }
  }
}
</script>
