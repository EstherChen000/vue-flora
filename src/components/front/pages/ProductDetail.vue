<template>
  <div>
    <div>
      <Alert></Alert>
      <div class="">
        <nav aria-label="breadcrumb" class="mx-0">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/shop/product_show">商店</router-link>
            </li>
            <li class="breadcrumb-item" @click.prevent="goBack">
              {{ product.category }}
            </li>
            <li class="breadcrumb-item">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <div class="row border border-primary px-3 py-5">
          <div class="col-md-12">
            <h3 class="text-right float-md-right">
              {{ product.title }}
            </h3>
            <div
              class="float-md-left btn btn-outline-primary d-sm-none d-md-block d-none d-sm-block"
              @click.prevent="goBack"
            >
              <i class="fas fa-chevron-circle-left"></i
              ><span class="ml-1">返回商品列表</span>
            </div>
            <div
              class="float-md-left d-block d-sm-none"
              @click.prevent="goBack"
            >
              <i class="fas fa-chevron-circle-left"></i>
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column align-items-stretch">
            <img :src="product.imageUrl" class="img-fluid mt-3" alt="" />
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
              <div
                class="text-muted text-nowrap mr-3 mb-3 text-right"
                v-if="product.num"
              >
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
import Alert from "@/components/AlertMessage";

export default {
  components: {
    Alert
  },
  data() {
    return {
      product: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
      id: ""
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
        console.log(response.data);
        vm.status.loadingItem = "";
        vm.$bus.$emit("message:push", "已加入購物車", "success");
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
  }
};
</script>
<style lang="scss" scoped>

$hover: #eafaf1;

li {
  cursor: pointer;
}
li:hover{
    background-color: $hover;
    transition: background-color .5s ease-in-out;
}
.breadcrumb-item:hover{
    background-color: $hover;
    transition: background-color .5s ease-in-out;
}
.breadcrumb-item:last-child{
    cursor: text;
}
.breadcrumb-item:last-child:hover{
    background-color: #fff;
}
</style>