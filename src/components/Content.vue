<template>
  <div class="container mb-4">
    <div class="row justify-content-center mb-5">
      <div class="col-md-12 text-center">
        <h2 class="font-weight-bold "><span class="h1">您</span>是否有下列症狀?</h2>
        <p class="h5">愛喝茶的你，睡眠總是不好</p>
        <p class="h5">想要在工作片刻，品嘗一杯好茶，紓解工作壓力</p>
        <p class="h5">喜歡喝茶，又怕自己買的品質參差不齊</p>
        <p class="h5">以上症狀，我們的茶品都能滿足你</p>
      </div>
    </div>
    <hr>
    <div class="row mb-4 justify-content-center">
      <div class="col-md-12 text-center">
        <h2 class="font-weight-bold mb-3">
          <i class="fas fa-leaf mr-2 text-primary"></i>
          茶品特色
        </h2>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <p class="text-center h5">「tea」精選在地產優質茶葉，製作出高品質的茶，讓顧客品嘗出茶香韻味，一直是我們的堅持。</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-sm-2 mb-2 d-flex flex-column justify-content-center">
            <div class="photo"
                style="background-image: url('https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');">
            </div>
          </div>
          <div class="col-md-6 mb-sm-2 mb-2">
            <div class="intro d-flex flex-column justify-content-center align-items-center p-4">
              <h3>低咖啡因</h3>
              <p class="py-2 text-left">本茶品運用先進技術，讓茶業的咖啡因含量降低，讓愛喝茶的你不再輾轉難眠。</p>
            </div>
          </div>
        </div>
        <div class="row flex-row-reverse">
          <div class="col-md-6 mb-sm-2 mb-2 d-flex flex-column justify-content-center">
            <!-- <router-link to="/products" class="text-light" target="_blank"> -->
            <div class="photo"
                style="background-image: url('https://images.unsplash.com/photo-1579887829663-67706e62e6ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');">
            </div>
          </div>
          <div class="col-md-6 mb-sm-2 mb-2">
            <div class="intro d-flex flex-column justify-content-center align-items-center p-4">
              <h3>茶類多樣</h3>
              <p class="py-2 text-left">精選各項茶類，滿足您的需求，讓您能隨時隨地的享用。</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-sm-2 mb-2 d-flex flex-column justify-content-center">
            <div class="photo"
                style="background-image: url('https://images.unsplash.com/photo-1433704334812-6c45b0b8784d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80');">
            </div>
          </div>
          <div class="col-md-6 mb-sm-2 mb-2">
            <div class="intro d-flex flex-column justify-content-center align-items-center p-4">
              <h3>品質看得到</h3>
              <p class="py-2 text-left">精選100%台灣在地茶葉，原料新鮮保證，產定直送，原料層層把關。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <h2 class="font-weight-bold mb-3">
          <i class="fas fa-leaf mr-2 text-primary"></i>
          茶品系列
        </h2>
        <h3 class="coupon-title">茶品自用贈禮兩相宜！ 限時限量搶購中！超值優惠</h3>
        <h5 class="coupon-subtitle">折扣優惠碼輸入「 tea 」 全品項打 9 折，心動不如馬上行動！</h5>
        <div class="row">
          <div class="col-md-4">
            <router-link class="text-dark" :to="`/products`" target="_blank">
              <div class="category d-flex flex-column justify-content-center align-items-center h-100 py-2">
                <img class="tool img-fluid rounded-circle mb-2" src="https://images.unsplash.com/photo-1536513953700-ba24c78a5f51?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80" alt="3min">
                <h3>三角立體茶包</h3>
                <p class="mb-0 font-weight-bold">只要3分鐘，輕鬆搞定</p>
              </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link class="text-dark" :to="`/products`" target="_blank">
              <div class="category d-flex flex-column justify-content-center align-items-center h-100 py-2">
                <img class="tool img-fluid rounded-circle mb-2" src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80" alt="1min">
                <h3>即融茶粉</h3>
                <p class="mb-0 font-weight-bold">只要1分鐘，輕鬆享用</p>
              </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link class="text-dark" :to="`/products`" target="_blank">
              <div class="category d-flex flex-column justify-content-center align-items-center h-100 py-2 mb-0">
                <img class="tool img-fluid rounded-circle mb-2" src="https://images.unsplash.com/photo-1602419410675-c33a08d4fdf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="teapot">
                <h3>超值組合</h3>
                <p class="mb-0 font-weight-bold">好茶我全都要</p>
              </div>
            </router-link>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.photo {
  min-height: 25vh;
  background-position: center center;
  background-size: cover;
}

.content {
  min-height: 25vh;
  background-position: center center;
  background-size: cover;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    color: $primary;
    opacity: 0.5;
  }
}

.tool {
  width: 150px;
  height: 150px;
}

.category {
  &:hover {
    color: $white;
    background-color: $primary;
  }
}

@media (max-width: 767px) {
  .category {
    margin-bottom: 1.25rem;
  }
}

@media (min-width: 320px) and (max-width: 440px) {
  .h5 {
    font-size: 1rem;
  }
}

@include media-breakpoint-down(lg) {
  .coupon-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 375px) {
  .coupon-title {
    font-size: 1.375rem;
  }
}

@media (max-width: 374px) {
  .coupon-title {
    font-size: 1.25rem;
  }

  .coupon-subtitle {
    font-size: 1rem;
  }
}
</style>
