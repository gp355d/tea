<template>
<div class="container py-4">
  <h2 class="font-weight-bold">關於<span>tea</span></h2>
  <div class="row">
    <div class="intro col-md-12">
      <p class="info">精選在地產優質茶葉，製作出高品質的茶，讓顧客品嘗出茶香韻味，一直是我們的堅持。</p>
    </div>
  </div>
  <h2 class="font-weight-bold">三大特色</h2>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-4 mt-4">
          <div class="card rounded shadow h-100">
            <div class="card-img-top intro-img"
              style="background-image:url(https://images.unsplash.com/flagged/photo-1582360694694-1eb3d0947263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);"
              alt="Card image cap"></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">精選在地茶農</h4>
              <p class="card-text">近年來，市面上許多劣質中國、越南低價茶葉混充茶葉，欺騙消費者，我們堅持採用台灣產優質茶葉，絕不使用劣質茶葉混充。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card rounded shadow h-100">
            <div class="card-img-top intro-img"
              style="background-image:url(https://c.pxhere.com/images/05/a1/dcb4b1760fac6a7bbc9617060c30-1586195.jpg!d);"
              alt="Card image cap"></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">產地直送</h4>
              <p class="card-text">本茶品茶葉都透過在地茶農原產地直送，新鮮保證。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card rounded shadow h-100">
            <div class="card-img-top intro-img"
              style="background-image:url(https://images.pexels.com/photos/1838047/pexels-photo-1838047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);"
              alt="Card image cap"></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">貨真價實</h4>
              <p class="card-text">本茶品每項原料都經過層層把關，讓消費者可以安心。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.intro-img{
  height:230px;
  background-size: cover;
  background-position: center;
}
@include media-breakpoint-down(lg){
  .intro{
    .info{
      font-size: 1.25rem;
    }
  }
  .card-text{
    font-size: 1.125rem;
  }
}
</style>
