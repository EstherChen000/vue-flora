<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-primary mx-n3">
          <div class="">
            <a class="navbar-brand cus-ff" href="#">Flora</a>
            <button
              class="navbar-toggler btn btn-outline-primary ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
            >
              <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
          </div>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item active  ">
                <router-link to="/" class="nav-link">首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/shop/product_show" class="nav-link">商店</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/faq" class="nav-link">常見問題</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/couponnews" class="nav-link">優惠資訊</router-link>
              </li>
              <li class="nav-item ">
                <router-link to="/login" class="nav-link"><i class="fas fa-user"></i></router-link>
              </li>
              <li class="nav-item ">
                <router-link to="/cart/cart_order" class="nav-link"><i class="fas fa-shopping-cart"></i></router-link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
.cus-ff{
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  /* font-style: italic; */
}
</style>