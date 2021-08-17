<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="my-5 row justify-content-center w-100">
      <div class="col-md-5 col-11">
        <div class="orderlist">
          <div v-show="isCart === false">
            購物車現在是空的喔！
            <router-link
              class="btn btn-primary ml-3 btn-sm"
              to="/shop/product_show"
              >前往購物
            </router-link>
          </div>
          <div class="card mt-2" v-for="item in cart" :key="item.id">
            <h5 class="card-header">
              {{ item.title }}
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
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
                class="float-left"
              ></div>
              <div class="float-right w-50">
                <div class="input-group h6">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      @click="productQty('reduce', item.id)"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                  <label for="button" class="form-control text-center" v-if="item.qty == item.qtyN">{{item.qtyN}}</label>
                  <label for="button" class="form-control text-center" v-if="item.qty !== item.qtyN">{{item.qty}}</label>
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      @click="productQty('add', item.id)"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="h6">
                  優惠價 NT.{{ item.price | currency }}
                </div>
                <div class="h5 text-danger">
                  小計 NT.{{ item.price * item.qty | currency }}
                </div>
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
              <div class="h6 ">小計 NT.{{ total | currency }}</div>
              <div
                v-if="finalTotal !== total"
                class="h6 text-info"
              >
                折扣價 NT.{{ finalTotal | currency }}
              </div>
              <div class="h6 ">運費 NT.0</div>
              <hr />
              <div class="h5 text-danger">
                總計 NT.{{ finalTotal | currency }}
              </div>
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
      cartApi: {},
      isLoading: false,
      coupon_code: "",
      isCart: false,
      cartStorage: JSON.parse(localStorage.getItem("cartList")) || [],
      cart:[],
      finalTotal: 0,
      total: 0,
      discount:1,
      // cartApi:{}
    };
  },
  methods: {
    getCartAPI() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      let cList = [];
      vm.isLoading = true;
      //為什麼api上山不掉?
      // const api2 = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/-MeEZNcP7thaSYcfZHsS`;
      // vm.$http.delete(api2).then((res) => {
      //   console.log("remove api")
      //   console.log(res)
      // });
      vm.$http.get(api).then(response => {
        vm.cartApi = response.data.data;
        console.log("getCartAPI's res:", response);
        vm.isLoading = false;
        if (vm.cartApi.carts.length !== 0) {
          vm.isCart = true;
        } else {
          vm.isCart = false;
        }
        vm.cartApi.carts.forEach(item => {
          const cartContent = {
            product_id: item.product_id,
            qty: item.qty
          };
          console.log("forEach中的cartContent", cartContent);
          cList.push(cartContent);
          console.log("forEach中的cList", cList);
        });
        console.log("cList", cList);
        vm.cartStorage = cList;
        localStorage.removeItem("cartList");
        localStorage.setItem("cartList", JSON.stringify(vm.cartStorage));
      });
    },
    removeCartItem(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      const vm = this;
      let cList = [];
      vm.isLoading = true;
      // vm.cartStorage.forEach((item, index) => {
      //   if(item.product_id = id){
      //     vm.cartStorage.splice(index, 1);
      //   }
      // });
      vm.$http.delete(api).then(res => {
        //刪除Api上資料後再次取得並寫入localStage
        vm.getCartAPI();
        console.log("removeCartItem's res:", res);
        vm.cartApi.carts.forEach(item => {
          const cartContent = {
            product_id: item.product_id,
            qty: item.qty
          };
          console.log("forEach中的cartContent", cartContent);
          cList.push(cartContent);
          console.log("forEach中的cList", cList);
        });
        console.log("cList", cList);
        vm.cartStorage = cList;
        localStorage.removeItem("cartList");
        localStorage.setItem("cartList", JSON.stringify(vm.cartStorage));
        vm.isLoading = false;
      });
      // localStorage.removeItem("cartList");
      // localStorage.setItem("cartList", JSON.stringify(vm.cartStorage));
      // vm.storageToCart();
    },
    addCouponCode() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then(response => {
        vm.getCartAPI();
        vm.isLoading = false;
      });
    },
    addtoStorage(data, qty = 1) {
      const vm = this;
      const cIdList = [];
      vm.cartStorage.forEach(item => {
        cIdList.push(item.product_id);
      });
      if (!cIdList.includes(data.id)) {
        const cartContent = {
          product_id: data.id,
          qty: qty,
          name: data.title,
          origin_price: data.origin_price,
          price: data.price
        };
        vm.cartStorage.push(cartContent);
        // 重新寫入 localStorage
        localStorage.removeItem("cartList");
        localStorage.setItem("cartList", JSON.stringify(vm.cartStorage));
        vm.$bus.$emit("message:push", "已加入購物車", "success");
      } else {
        let cache = {}; // 產品暫存處
        vm.cartStorage.forEach((item, index) => {
          // 只找相同的產品內容
          if (item.product_id === data.id) {
            cache = {
              product_id: data.id,
              qty: (item.qty += qty), // 產品當前數量+新增數量
              name: data.title,
              origin_price: data.origin_price,
              price: data.price
            };
            // 移除現有 localStorage 購物車的資料，否則 localStorage 會重複加入
            vm.cartStorage.splice(index, 1);
          }
        });
        vm.cartStorage.push(cache);
        // 重新寫入 localStorage
        localStorage.removeItem("cartList");
        localStorage.setItem("cartList", JSON.stringify(vm.cartStorage));
        vm.$bus.$emit("message:push", "已加入購物車", "success");
      }
    },
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
          vm.finalTotal = sum * vm.discount;
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
          // vm.$bus.$emit("message:push", "已加入購物車", "success");
          console.log(response);
          console.log(cart);
        });
        // console.log(cart);
      });
    },
    productQty(act, id) {
      const vm = this;
      let cList = [];
      if(act === 'add'){
        vm.cart.forEach((e, key) => {
          if(e.id === id){
            e.qty += 1;
            // console.log(e.title,e.qty,vm.cart[key].qty);
            vm.$bus.$emit("message:push", "商品數目已變更", "success");
            vm.$set(vm.cart[key], 'qtyN', e.qty)
          }
          const cartContent = {
            product_id: e.id,
            qty: e.qty
          };
          cList.push(cartContent);
        })
      }else if(act === 'reduce'){
        vm.cart.forEach((e, key) => {
          if(e.id === id){
            e.qty -= 1;
            // console.log(e.title,e.qty,vm.cart[key].qty);
            vm.$bus.$emit("message:push", "商品數目已變更", "success");
            vm.$set(vm.cart[key], 'qtyN', e.qty)
          }
          const cartContent = {
            product_id: e.id,
            qty: e.qty
          };
          cList.push(cartContent);
        })
      }
      vm.cartStorage = cList;
      localStorage.removeItem("cartList");
      localStorage.setItem("cartList", JSON.stringify(vm.cartStorage));
    },
    sumTotal() {
      const vm = this;
      let sum = 0;
      vm.cart.forEach(e => {
        sum += e.price * e.qty
      });
      console.log('SUM:' + sum , 'vm.discount:' + vm.discount)
      vm.finalTotal = sum;
      vm.total = sum;
      console.log('vm.total:' + vm.total , 'vm.discount:' + vm.discount)
    }
  },
  created() {
    const vm = this;
    vm.storageToCart();
    // this.addtoCartAPI();
    // this.getCartAPI();
  }
};
</script>
