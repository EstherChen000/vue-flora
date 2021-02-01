<template id="ProductShow">
  <div class="d-flex flex-row flex-wrap h-auto py-3">
    <!-- 產品卡片 -->
    <div
      class="card mx-auto my-3"
      v-for="item in products"
      :key="item.id"
    >
      <div
        style="height: 300px; background-size: cover; background-position: center"
        :style="{ backgroundImage: `url(${item.imageUrl})` }"
      ></div>
      <div class="card-body">
        <span class="badge badge-secondary float-right ml-2">
          {{ item.category }}
        </span>
        <h5 class="card-title">
          <a href="#" class="text-dark">{{ item.title }}</a>
        </h5>
        <p class="card-text">
          {{ item.content }}
        </p>
        <div class="d-flex justify-content-between align-items-baseline">
          <div class="h5" v-if="!item.price">
            {{ item.origin_price | currency }}
          </div>
          <del class="h6" v-if="item.price">{{
            item.origin_price | currency
          }}</del>
          <div class="h5" v-if="item.price">
            {{ item.price | currency }}
          </div>
        </div>
      </div>
      <div class="card-footer d-flex">
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm"
          @click="getProduct(item.id)"
        >
          <i
            class="fas fa-spinner fa-spin"
            v-if="status.loadingItem === item.id"
          ></i>
          查看更多
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm ml-auto"
          @click="addtoCart(item.id)"
        >
          <i
            class="fas fa-spinner fa-spin"
            v-if="status.loadingItem === item.id"
          ></i>
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{caterory:String},
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
      caterory
    };
  },
  methods: {
    getProducts(goods) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        // console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
    //   if (goods === all) {
          
    //   }
      });
    },
    getProduct(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.get(api).then(response => {
        // console.log(response.data);
        vm.product = response.data.product;
        // $("#productModal").modal("show");
        vm.$router.push(`/shop/product_detail/${id}`);
        vm.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      const cart = {
        product_id: id,
        qty
      };
      vm.status.loadingItem = id;
      this.$http.post(api, { data: cart }).then(response => {
        // console.log(response.data);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
