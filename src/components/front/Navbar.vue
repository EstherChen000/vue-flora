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
              <li class="nav-item item-ani nav-link" @click="addtoCartAPI()"> 
                <i class="fas fa-shopping-cart position-relative"><span class="cart-num">{{ cartStorage.length }}</span></i>
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
      // cart:{},
      // cartNum:'',
      cartStorage: JSON.parse(localStorage.getItem('cartList')) || [],
    }
  },
  methods:{
    // getCart() {
    //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
    //   const vm = this;
    //   vm.isLoading = true;
    //   vm.$http.get(api).then(response => {
    //     vm.cart = response.data.data;
    //     vm.cartNum = vm.cart.carts.length;
    //     vm.isLoading = false;
    //   });
    // },
    storageToCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      let cache = [];
      vm.$http.get(api).then(response => {
        cache = response.data.products;
        if (localStorage.getItem("cartList") === null) {
          vm.isCart = false;
        } else {
          // 先取出localStorage中的ID在做篩選
          const id = [];
          let sum = 0;
          vm.cartStorage.forEach(item => {
            id.push(item.product_id);
          });
          //頭痛中
          let test = [];
          cache.forEach(item => {
            id.forEach(e => {
              if (item.id === e) {
                test.push(item);
              }
            });
          });
          vm.cart = test;
          // console.log(test)
          vm.cart.forEach(item => {
            vm.cartStorage.forEach(e => {
              if (item.id === e.product_id) {
                item.qty = e.qty;
              }
            });
            sum += item.price * item.qty;
          });
          vm.isCart = true;
          vm.total = sum;
          // console.log(cache);
        }
      });
    },
    addtoCartAPI() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      let cart = {};
      vm.cartStorage.forEach(item => {
        cart = {
          product_id: item.product_id,
          qty: item.qty
        };
        vm.$http.post(api, { data: cart }).then(response => {
          vm.$bus.$emit("message:push", "已放入購物車", "success");
        });
      });
      vm.$router.push(`/cart/cart_order`);
    }
  },
  // watch:{
  //   cartStorage: function(val, oldVal){
  //     console.log(這是val`${val}`);
  //     console.log(這是val`${oldVal}`);
  //   }
  // },
  created(){
    // this.getCart();
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