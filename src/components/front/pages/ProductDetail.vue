<template>
    <div>
      <div>
        <div class="">
          <div class="row">
            <div class="col-md-12">
              <h3 class="">
                {{ product.title }}
              </h3>
            </div>
            <div class="col-md-6 d-flex flex-column align-items-stretch">
              <img :src="product.imageUrl" class="img-fluid" alt="" />
            </div>
            <div class="col-md-6">
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{ product.content }}</p>
                <footer class="blockquote-footer text-right">
                  {{ product.description }}
                </footer>
              </blockquote>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h4" v-if="!product.price">
                  {{ product.origin_price }} 元
                </div>
                <del class="h6" v-if="product.price"
                  >原價 {{ product.origin_price }} 元</del
                >
                <div class="h4" v-if="product.price">
                  現在只要 {{ product.price }} 元
                </div>
              </div>
              <select name="" class="form-control mt-3" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{ num }} {{ product.unit }}
                </option>
              </select>
              <div class="mt-3">
                <div class="text-muted text-nowrap mr-3 mb-3 text-right" v-if="product.num">
                    小計 <strong>{{ product.num * product.price }}</strong> 元
                </div>
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    @click="addtoCart(product.id, product.num)"
                >
                    <i
                    class="fas fa-spinner fa-spin"
                    v-if="product.id === status.loadingItem"
                    ></i>
                    加到購物車
                </button>
              </div>
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
      product: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
      id:""
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.id}`;
      vm.status.loadingItem = vm.id;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.product = response.data.product;
        // $("#productModal").modal("show");
        // vm.$router.push(`/shop/product_detail/${id}`);
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
    this.id = this.$route.params.id;
    this.getProduct();
  }
};
</script>
