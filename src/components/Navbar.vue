<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
  <router-link class="navbar-brand" to="/">tea</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav font-weight-bold">
      <router-link class="nav-item nav-link" to="/products">前台產品列表<span class="sr-only">(current)</span></router-link>
      <router-link class="nav-item nav-link" to="/about">關於我們</router-link>
    </div>
  </div>
</nav>
</template>
