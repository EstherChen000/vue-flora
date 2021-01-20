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
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  商店
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link to="/shop" class="dropdown-item">所有商品</router-link>
                  <a class="dropdown-item" href="#">桌花</a>
                  <a class="dropdown-item" href="#">花束</a>
                  <a class="dropdown-item" href="#">捧花</a>
                </div>
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
                <router-link to="/cart" class="nav-link"><i class="fas fa-shopping-cart"></i></router-link>
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