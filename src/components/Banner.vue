<template>
  <div class="position-relative mb-4">
    <div class="position-absolute banner-bg"></div>
    <div class="container d-flex flex-column justify-content-end banner-layout">
      <div class="slogan mb-4 d-inline-block">
        <h2>茶香飄逸</h2>
        <p class="mb-0">悠閒時刻，品嘗茶香</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

@include media-breakpoint-up(lg) {
  .slogan {
    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 2rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .slogan {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.75rem;
    }
  }
}

@include media-breakpoint-down(sm) {
  .slogan {
    p {
      font-size: 1.5rem;
    }
  }
}

.banner-bg {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1582966953402-a86e32ecdf75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
}

.banner-layout {
  min-height: 320px;
}

.slogan {
  z-index: 1;
  width: 300px;
  color: #fff;
  background-color: #000;
  opacity: 0.6;
}
</style>
