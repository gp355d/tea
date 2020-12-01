<template>
<div class="position-relative mb-3">
  <div class="position-absolute banner-bg"></div>
  <div class="container d-flex flex-column justify-content-end banner-layout">
    <div class="slogan">
      <div class="slogan mb-4">
        <h2>茶香飄逸</h2>
        <p class="mb-0">悠閒時刻，品嘗茶香</p>
        <!-- <a class="btn btn-light rounded-0 mt-5">立刻去看看</a> -->
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.banner-bg{
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-image: url(https://images.unsplash.com/photo-1486240036762-6db0544d5f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
  background-position: center
  center;background-size: cover;
  opacity: 0.8
}
.banner-layout{
  min-height: 100vh;
}
.slogan{
  z-index:1
}
@include media-breakpoint-up(lg) {
  .slogan{
    h2{
        font-size: 2.5rem;
    }
    p{
      font-size: 2rem;
    }
  }
 }
@include media-breakpoint-down(md) {
  .slogan{
    h2{
        font-size: 2rem;
    }
    p{
      font-size: 1.75rem;
    }
  }
 }
 @include media-breakpoint-down(sm) {
  .slogan{
    p{
      font-size: 1.5rem;
    }
  }
 }
</style>
