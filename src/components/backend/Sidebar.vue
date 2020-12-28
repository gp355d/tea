<template>
  <nav class="col-md-2 col-lg-2 d-none d-md-block bg-footer sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column py-5">
        <li class="nav-item">
          <span data-feather="file-text"></span>
          <router-link class="nav-link" to="/admin/products">產品管理列表</router-link>
        </li>
        <li class="nav-item">
         <span data-feather="file-text"></span>
          <router-link class="nav-link" to="/admin/coupons">優惠卷管理列表</router-link>
        </li>
        <li class="nav-item">
          <span data-feather="file-text"></span>
          <router-link class="nav-link" to="/admin/orders">訂單列表</router-link>
        </li>
        <li class="nav-item">
          <span data-feather="file-text"></span>
          <router-link class="nav-link" to="/admin/storages">圖片儲存列表</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.sidebar {
  .nav-link {
    color: #fff;
  }

  .nav-link:hover {
    color: #000;
  }

  .nav-link:active {
    color: #000;
  }
}

</style>
