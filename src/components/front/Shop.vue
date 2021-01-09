<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container ">
      <!-- Navbar -->
      <Navbar></Navbar>

      <!-- 輪播 -->
      <div class="pb-3 "><Carousel></Carousel></div>

      <!-- 麵包屑導覽列 -->
      <nav aria-label="breadcrumb" class="mx-0">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <!-- main -->
      <div class="row mx-0">
        <!-- Sidebar -->
        <div class="col-3 pl-0">
          <ul class="list-group border border-primary">
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
            >
              所有商品
              <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
            >
              桌花
              <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
            >
              花束
              <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center p-2"
            >
              捧花
              <span class="badge badge-primary badge-pill">14</span>
            </li>
          </ul>
        </div>

        <!-- 產品列表 -->
        <div
          class="col-9 border border-primary d-flex flex-row flex-wrap vh-100"
          v-for="item in products"
          :key="item.id"
        >
          <!-- 產品卡片 -->
          <div class="card m-auto " style="width: 18rem;">
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
      </div>

      <!-- Footer -->
      <Footer></Footer>

      <!-- Product Modal -->
      <div
        class="modal fade"
        id="productModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {{ product.title }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img :src="product.imageUrl" class="img-fluid" alt="" />
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                小計 <strong>{{ product.num * product.price }}</strong> 元
              </div>
              <button
                type="button"
                class="btn btn-primary"
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
import $ from "jquery";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

export default {
  components: {
    Navbar,
    Carousel,
    Footer
  },
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },

      isLoading: false
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
      });
    },
    getProduct(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.product = response.data.product;
        $("#productModal").modal("show");
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

<style lang="scss" scoped></style>
