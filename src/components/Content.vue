<template>
<div class="container mb-3">
    <div class="row ">
    <div class="col-md-6 mb-sm-2 mb-2">
        <router-link to="/products" class="text-light">
            <div class="content d-flex justify-content-center align-items-center" style="background-image: url(https://images.unsplash.com/photo-1579887829663-67706e62e6ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
            <h2>茶葉種類</h2>
            </div>
        </router-link>

    </div>
    <div class="col-md-6 mb-sm-2 mb-2">
        <router-link to="/effect" class="text-dark">
            <div class="content d-flex justify-content-center align-items-center" style="background-image: url(https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
            <h2>茶葉好處</h2>
            </div>
        </router-link>
    </div>
    </div>
</div>

</template>
<style lang="scss" scoped>
// @import "../../src/assets/all.scss";
.content {
background-position: center center;
background-size: cover;
min-height: 50vh;
opacity: 1;
&:hover{
opacity: 0.8;
}
}
</style>
