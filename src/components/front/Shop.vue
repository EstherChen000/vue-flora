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
          <li
            class="breadcrumb-item"
            :class="{ linked: !!breadcrumb.link }"
            v-for="(breadcrumb, index) in breadcrumbList"
            :key="index"
            @click="routeTo(index)"
          >
            {{ breadcrumb.name }}
          </li>
        </ol>
      </nav>

      <!-- main -->
      <div class="row mx-0">
        <!-- Sidebar -->
        <div class="col-md-3 col-sm-12 pl-0">
          <ul class="list-group border border-primary">
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
              @click="getCaterory('all')"
            >
              所有商品
              <span class="badge badge-primary badge-pill">{{ num[0] }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
              :caterory="'table'"
            >
              桌花
              <span class="badge badge-primary badge-pill">{{ num[1] }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
              :caterory="'bouquet'"
            >
              花束
              <span class="badge badge-primary badge-pill">{{ num[2] }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center p-2"
              :caterory="'wedding'"
            >
              捧花
              <span class="badge badge-primary badge-pill">{{ num[3] }}</span>
            </li>
          </ul>
        </div>

        <!-- 產品列表 -->
        <div
          class="col-md-9 col-sm-12 border border-primary d-flex flex-row flex-wrap h-auto py-3"
        >
          <router-view></router-view>
        </div>
      </div>

      <!-- Footer -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import ProductShowVue from './pages/ProductShow.vue';

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
      isLoading: false,
      num: [],
      breadcrumbList: [],
      caterory:'外層'
    }
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        // console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        //商品記數
        vm.num[0] = vm.products.length;
        let tableNum = vm.products.filter(function(item) {
          return item.category === "桌花";
        });
        vm.num[1] = tableNum.length;
        let bouquetNum = vm.products.filter(function(item) {
          return item.category === "花束";
        });
        vm.num[2] = bouquetNum.length;
        let weddingNum = vm.products.filter(function(item) {
          return item.category === "捧花";
        });
        vm.num[3] = weddingNum.length;
      });
    },
    routeTo(to) {
      const vm = this;
      if (vm.breadcrumbList[to].link) {
        vm.$router.back();
        vm.$router.push(vm.breadcrumbList[to].link);
      }
    },
    getBreadcrumbList() {
      const vm = this;
      vm.breadcrumbList = vm.$route.meta.breadcrumb;
    },
    getCaterory(a){
      const vm = this;
      if(a === 'all'){
        vm.caterory = 'all';
      }
    }
  },
  created() {
    this.getProducts();
    this.getBreadcrumbList();
  },
  watch: {
    $route() {
      this.getBreadcrumbList();
    }
  }
};
</script>

<style lang="scss" scoped>
li{
  cursor: pointer;
}
</style>
