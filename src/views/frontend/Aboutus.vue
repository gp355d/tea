<template>
  <div class="container py-4">
    <ol class="breadcrumb bg-white font-weight-bold">
      <li class="breadcrumb-item">
        <router-link class="text-dark" to="/">首頁</router-link>
      </li>
      <li class="breadcrumb-item text-primary">關於我們</li>
    </ol>
    <h2 class="font-weight-bold"><i class="fas fa-leaf mr-2 text-primary"></i>關於<span>tea</span></h2>
    <div class="row mb-md-0 mb-3">
      <div class="intro col-md-6">
        <h3>起源</h3>
        <p class="info">2019年8月創業</p>
        <p class="info">2020年3月好茶股份有限公司成立</p>
        <h3>理念</h3>
        <p class="info">一位對於茶有熱衷的年輕人，和志同道合的夥伴成立公司、專研3年茶葉，希望讓更多品茶的人，品嘗到這茶香的美好。</p>
        <p class="info">「<span class="text-danger font-weight-bold">精選在地產優質茶葉，製作出高品質的茶，讓顧客品嘗出茶香韻味，一直是我們的堅持。</span>」，這一段話簡單扼要地闡明了，創辦人的理念。</p>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img class="dream img-fluid rounded-circle" src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">
      </div>
    </div>
    <h2 class="font-weight-bold"><i class="fas fa-leaf mr-2 text-primary"></i>tea三大特色</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-4 mt-4">
            <div class="card rounded shadow h-100">
              <div class="card-img-top intro-img"
                style="background-image: url('https://images.unsplash.com/flagged/photo-1582360694694-1eb3d0947263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');"
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
                style="background-image: url('https://c.pxhere.com/images/05/a1/dcb4b1760fac6a7bbc9617060c30-1586195.jpg!d');"
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
                style="background-image: url('https://images.pexels.com/photos/1838047/pexels-photo-1838047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"
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
    <hr>
    <div class="row">
      <div class="col-md-12 countaus">
        <h2 class="font-weight-bold"><i class="fas fa-leaf mr-2 text-primary"></i>聯絡我們</h2>
        <p>如有任何疑問歡迎透過下列的方式聯絡我們，謝謝指教</p>
        <div class="row">
          <div class="d-flex col-md-5 shadow align-items-center p-3">
            <p class="mb-0">聯絡信箱:andy@gmail.com</p>
          </div>
          <div class="d-flex col-md-5 shadow align-items-center p-3">
            <p class="mb-0">聯絡電話:07-525584</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/scss/frontend/main';

.dream {
  width: 250px;
  height: 250px;
}

.intro-img {
  height: 230px;
  background-position: center;
  background-size: cover;
}

@include media-breakpoint-down(xl) {
  .intro {
    .info {
      font-size: 1.25rem;
    }
  }

  .card-text {
    font-size: 1.125rem;
  }

  .countaus {
    font-size: 1.25rem;

    p {
      font-size: 1.25rem;
    }
  }
}
</style>
