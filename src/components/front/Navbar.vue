<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-primary mx-n3 bg-white">
          <div>
            <h1>
              <router-link to="/" class="navbar-brand logo-font">Flora</router-link>
            </h1>
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

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item item-ani active">
                <router-link to="/" class="nav-link">首頁</router-link>
              </li>
              <li class="nav-item item-ani">
                <router-link to="/shop/product_show/all" class="nav-link">商店</router-link>
              </li>
              <li class="nav-item item-ani">
                <router-link to="/faq" class="nav-link">常見問題</router-link>
              </li>
              <li class="nav-item item-ani">
                <router-link to="/couponnews" class="nav-link">優惠資訊</router-link>
              </li>
              <li class="nav-item item-ani">
                <router-link to="/login" class="nav-link"><i class="fas fa-user"></i></router-link>
              </li>
              <li class="nav-item item-ani"> 
                <router-link to="/cart/cart_order" class="nav-link">
                  <i class="fas fa-shopping-cart position-relative"><span class="cart-num">{{ cartNum }}</span></i>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
  data(){
    return{
      cart:{},
      cartNum:''
    }
  },
  methods:{
    getCart() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.cart = response.data.data;
        vm.cartNum = vm.cart.carts.length;
        vm.isLoading = false;
      });
    },
  },
  created(){
    this.getCart();
  }
}
</script>

<style lang="scss" scoped>
.logo-font{
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
}
.cart-num{
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-size: 1rem;
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 1rem;
  background-color: #EC7063;
}
.item-ani{
  border-bottom:3px solid #FFF;
  transition: border-bottom .5s ease-in-out;
}
.item-ani:hover{
  border-bottom: 3px solid #A9CCE3;
}
</style>