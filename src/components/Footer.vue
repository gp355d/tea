<template>
  <footer class="footer bg-footer py-4 d-flex align-item-center">
    <div class="container">
      <ul class="list-inline text-center text-white d-flex justify-content-center align-items-center mb-0">
        <li class="list-inline-item mr-auto">Copyright&emsp;&copy;&emsp;2020&emsp;
          <span class="logo-font footer-size">tea</span>&emsp;
          Inc.
        </li>
        <li class="list-inline-item">
          <a class="social-link" href="#">
            <i aria-hidden="true" class="fab fa-instagram" style="font-size: 2em;"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link" href="#">
            <i aria-hidden="true" class="fab fa-facebook-square" style="font-size: 2em;"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import '../assets/scss/frontend/main';

.footer-size {
  font-size: 1.5rem;
}

.social-link {
  color: $white;

  &:active {
    color: $black;
  }

  &:hover {
    color: $black;
  }
}
</style>
