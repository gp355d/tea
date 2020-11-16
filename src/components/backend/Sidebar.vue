<template>
        <nav class="col-md-2 d-none d-md-block bg-footer sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column py-5">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              <router-link to="/admin/products">產品管理列表</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              <router-link to="/admin/coupons">優惠卷管理列表</router-link>
            </a>
          </li>
                    <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              <router-link to="/admin/orders">訂單列表</router-link>
            </a>
          </li>
                    <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              <router-link to="/admin/storages">圖片儲存列表</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>
