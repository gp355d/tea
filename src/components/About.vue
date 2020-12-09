<template>
<div class="container mb-3">
  <h2 class="font-weight-bold about-title">關於tea</h2>
  <div class="row justify-content-center">
    <img class="rounded-circle about-img"
      src="https://images.unsplash.com/photo-1531877038798-51499a9eedf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="about-img">
    <div class="intro col-md-6">
      <h2 class="logo-font">tea</h2>
      <p class="about-info">精選在地產優質茶葉，製作出高品質的茶，讓顧客品嘗出茶香韻味，一直是我們的堅持。</p>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/main';

.about-img {
  height: 160px;
  width: 250px;
}

@include media-breakpoint-up(lg) {
  .intro {
    .about-info {
      font-size: 1.5rem;
    }
  }
}

@include media-breakpoint-down(lg) {
  .intro {
    .about-info {
      font-size: 1.25rem;
    }
  }
}
</style>
