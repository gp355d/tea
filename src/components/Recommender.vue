<template>
<div class="container mb-1">
<h2 class="text-left font-weight-bold">精選茶品</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-4 mt-4">
            <div class="card rounded shadow text-center h-100">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80" alt="Card image cap">
              <div class="card-body text-left">
                <h4 class="card-title">日月潭紅茶</h4>
                <p class="card-text"></p>
              </div>
                <router-link class="btn btn-secondary font-weight-bold" to="/products" >來去看看</router-link>
            </div>
          </div>

          <div class="col-md-4 mt-4">
            <div class="card rounded shadow text-center h-100">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1517584640132-9379fc085be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="Card image cap">
              <div class="card-body text-left">
                <h4 class="card-title">東方美人茶</h4>
                <p class="card-text"></p>
              </div>
                <router-link class="btn btn-secondary font-weight-bold" to="/products" >來去看看</router-link>
            </div>
          </div>

          <div class="col-md-4 mt-4">
              <div class="card rounded shadow text-center h-100">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1562534104-6b964ad63e56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="Card image cap">
                <div class="card-body text-left">
                  <h4 class="card-title">四季春</h4>
                  <p class="card-text"></p>
                </div>
                  <router-link class="btn btn-secondary font-weight-bold" to="/products" >來去看看</router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
