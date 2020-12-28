<template>
  <div class="container mb-4">
    <h2 class="font-weight-bold about-title text-center mb-3">
      <i class="fas fa-leaf mr-2 text-primary"></i>
      關於tea
    </h2>
    <div class="row justify-content-center align-items-center">
      <img class="rounded-circle about-img"
        src="https://images.unsplash.com/photo-1531877038798-51499a9eedf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="about-img">
      <div class="intro d-flex flex-column col-md-6">
        <h3 class="logo-font">100%台灣茶葉</h3>
        <p class="about-info">近年來，市面上許多劣質中國、越南低價茶葉混充茶葉，欺騙消費者，我們堅持採用台灣產優質茶葉，絕不使用劣質茶葉混充。</p>
        <h3 class="logo-font">產地直送</h3>
        <p class="about-info">本茶品和台灣在地茶農合作，精選在地茶農的茶葉，採收完直送到工廠，來源都非常清楚，請消費者放心。</p>
        <h3 class="logo-font">層層把關</h3>
        <p class="about-info">從採收到製作，每項流程都經過嚴格SGS檢驗，每項來源皆可有詳細履歷，消費者可以放心。</p>
        <router-link class="btn btn-outline-primary w-50" to="/aboutus" target="_blank">進一步認識我們</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

@include media-breakpoint-down(sm) {
  .intro {
    .logo-font {
      text-align: center;
    }
  }
}

.about-img {
  width: 250px;
  height: 250px;
}

@import '../assets/scss/frontend/main';
</style>
