<template>
<div class="container">
  <h2 class="font-weight-bold">後台產品管理</h2>
  <div class="text-right mt-4">
    <button class="btn btn-primary" @click="openModal('new')">
      新增產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in products" :key="i">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td>
          <span v-if="item.enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <!-- add、edit產品Modal -->
  <div id="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯 {{ tempProduct.title }} 產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div v-for="i in 5" :key="i + 'img'" class="form-group">
                <label :for="'img' + i">輸入圖片網址</label>
                <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]" type="text" class="form-control"
                  placeholder="請輸入圖片連結">
              </div>
              <div class="form-group">
                <label for="customFile">
                  或 上傳圖片
                  <i v-if="fileUploading" class="fas fa-spinner fa-spin"></i>
                </label>
                <input id="customFile" ref="file" type="file" class="form-control" @change="uploadFile">
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt />
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題"
                  required>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input id="category" v-model="tempProduct.category" type="text" class="form-control"
                    placeholder="請輸入分類" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input id="unit" v-model="tempProduct.unit" type="unit" class="form-control" placeholder="請輸入單位">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input id="origin_price" v-model="tempProduct.origin_price" type="number" class="form-control"
                    placeholder="請輸入原價">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input id="price" v-model="tempProduct.price" type="number" class="form-control" placeholder="請輸入售價">
                </div>
              </div>
              <hr>
              <div class="form-group">
                <label for="content">產品說明</label>
                <textarea id="content" v-model="tempProduct.content" type="text" class="form-control"
                  placeholder="請輸入產品說明" required>
            </textarea>
              </div>
              <div class="form-group">
                <label for="description">產品描述</label>
                <vue-editor id="description" v-model="tempProduct.description" type="text" class=""
                  placeholder="請輸入產品描述" required>
                </vue-editor>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input id="enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox">
                  <label class="form-check-label" for="enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-outline-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="delProductModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-outline-danger" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination.vue'
import Toast from '@/swal'
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    Pagination,
    VueEditor
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: []
      },
      isNew: false,
      fileUploading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      vm.$http.get(api).then(function (res) {
        vm.products = res.data.data
        vm.pagination = res.data.meta.pagination
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    getProduct (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      vm.$http.get(api).then(function (res) {
        vm.tempProduct = res.data.data
        $('#productModal').modal('show')
      })
        .catch(function () {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    },
    openModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: []
          }
          this.isNew = true
          $('#productModal').modal('show')
          break
        case 'edit':
          // 由於描述欄位是必須透過取得單一產品的方式，因此會執行 AJAX
          this.getProduct(item.id)
          this.isNew = false
          break
        case 'delete':
          this.tempProduct = { ...item }
          $('#delProductModal').modal('show')
          break
        default:
          break
      }
    },
    updateProduct () {
      const vm = this
      var api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product`// 新增商品API
      var httpMethod = 'post'
      if (!vm.isNew) { // 當不是新增產品時則切換成編輯產品API
        api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${vm.tempProduct.id}`
        httpMethod = 'patch'
      }
      vm.$http[httpMethod](api, vm.tempProduct).then(function (res) {
        $('#productModal').modal('hide') // AJAX新增成功後關閉Modal
        Toast.fire({
          title: '編輯成功',
          icon: 'success'
        })
        vm.getProducts() // 重新取得全部產品資料
      })
        .catch(function () {
          Toast.fire({
            title: '編輯失敗',
            icon: 'error'
          })
        })
    },
    uploadFile () {
      var vm = this
      const uploadedFile = vm.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', uploadedFile)
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage`
      vm.fileUploading = true
      vm.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        vm.fileUploading = false
        if (response.status === 200) {
          vm.tempProduct.imageUrl.push(response.data.data.path)
        }
      }).catch(function () {
        Toast.fire({
          title: '上傳不可超過 2 MB',
          icon: 'warning'
        })
        vm.fileUploading = false
      })
    },
    delProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${vm.tempProduct.id}`
      vm.$http.delete(api).then(function () {
        $('#delProductModal').modal('hide') // 刪除成功後關閉 Modal
        vm.getProducts() // 重新取得全部資料
        Toast.fire({
          title: '刪除成功',
          icon: 'success'
        })
      })
        .catch(function () {
          $('#delProductModal').modal('hide')
          Toast.fire({
            title: '刪除失敗',
            icon: 'error'
          })
          vm.fileUploading = false
        })
    }
  }

}
</script>
