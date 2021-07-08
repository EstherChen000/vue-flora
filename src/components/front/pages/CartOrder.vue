<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="my-5 row justify-content-center w-100">
      <div class="col-md-5 col-11">
        <div class="orderlist">
          <div v-show="isCart === false">
            購物車現在是空的喔!
            <router-link class="btn btn-primary ml-3 btn-sm" to="/shop/product_show"
              >前往購物
            </router-link>
          </div>
          <div class="card mt-2" v-for="item in cart.carts" :key="item.id">
            <h5 class="card-header">
              {{ item.product.title }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm float-right"
                @click="removeCartItem(item.id)"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </h5>
            <div class="card-body p-3">
              <div
                style="height: 100px; width: 75px; background-size: contain; background-repeat: no-repeat; background-position: left top"
                :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
                class="float-left"
              ></div>
              <div class="float-right">
                <div class="h6 ">{{ item.qty }}/{{ item.product.unit }}</div>
                <div class="h6">優惠價 NT.{{ item.product.price | currency }}</div>
                <div class="h5 text-danger">小計 NT.{{ item.total | currency }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="input-group mt-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-11">
        <div class="card mt-2">
          <h5 class="card-header">
            購物車資訊
          </h5>
          <div class="card-body">
            <div class="text-right py-3">
              <div class="h6 ">小計 NT.{{ cart.total | currency }}</div>
              <div v-if="cart.final_total !== cart.total" class="h6 text-info">
                折扣價 NT.{{ cart.final_total | currency }}
              </div>
              <div class="h6 ">運費 NT.0</div>
              <hr />
              <div class="h5 text-danger">總計 NT.{{ cart.final_total | currency }}</div>
            </div>
            <router-link
              class="btn btn-primary float-right"
              v-show="isCart === true"
              to="/cart/cart_checkout"
              >下一步
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: {
        loadingItem: ""
      },
      cart: {},
      isLoading: false,
      coupon_code: "",
      isCart: false
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.cart = response.data.data;
        vm.isLoading = false;
        if (vm.cart.carts.length !== 0) {
          vm.isCart = true;
        }else{
          vm.isCart = false;
        }
      });
    },
    removeCartItem(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.delete(api).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then(response => {
        vm.getCart();
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>
