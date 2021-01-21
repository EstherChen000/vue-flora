<template>
  <div>
    <nav class="bg-light sidebar">
      <div class="sidebar--user bg-dark text-light py-5 px-3 d-flex flex-column align-items-center">
        <div class="sidebar--user--img">
          <img class="rounded-circle" src="https://picsum.photos/100/100/?random=1">
        </div>
        <div class="sidebar--user--text">
          <h6>lu1016.my@gmail.com</h6>
        </div>
      </div>
      <div class="sidebar--menu px-3">
        <h6>
          管理員
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">
              <i class="fas fa-box-open"></i>
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">
              <i class="fas fa-box-open"></i>
              訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link">
              <i class="fas fa-ticket-alt"></i> 優惠券
            </router-link>
          </li>
        </ul>
        
        <h6>
          模擬功能
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/customer_order" class="nav-link">
              <i class="fas fa-shopping-cart"></i>模擬訂單
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.sidebar{
  height: 100vh;
  width: 100%;
  h6{
    border-bottom: 1px solid #333;
    padding-top: 1rem;
    padding-left: 1rem;
  }
}
@media (max-width: 1600px) {
  .sidebar{
    height: 100vh;
    // width: 20vw;
    h6{
      border-bottom: 1px solid #333;
      padding-top: 1rem;
      padding-left: 1rem;
    }
  }
}
</style>