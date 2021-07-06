<template>
  <swiper
    class="swiper-container swiper-container-autoheight sale--container"
    :options="swiperOption"
  >
    <div
      is="swiper-slide"
      v-for="item in recentlyProducts"
      :key="'item' + item.id"
      class="card content m-auto"
    >
      <router-link :to="`/shop/product_detail/${item.id}`" target="_blank">
        <div class="content-overlay"></div>
        <div
          style="height: 300px; background-size: cover; background-position: center"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        ></div>
        <div class="card-body">
          <span class="badge badge-secondary float-right ml-2">
            {{ item.category }}
          </span>
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text float-right">
            NT{{ item.price | currency
            }}<span class="text-danger small">sale</span>
          </p>
          <p class="card-text font-italic text-black-50">
            <del>NT{{ item.origin_price | currency }}</del>
          </p>
        </div>
        <div class="content-details text-light">
          <button class="btn btn-outline-danger">
            查看產品細節<i class="fas fa-arrow-circle-right ml-1"></i>
          </button>
        </div>
      </router-link>
      <span class="content-del" @click="delStorage(item)"
        ><i class="fas fa-times"></i
      ></span>
    </div>
    <div class="swiper-pagination sale--pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      id: "",
      recentlyList: [],
      products: [],
      recentlyProducts: [],
      swiperOption: {
        direction: "horizontal",
        speed: 2000,
        loop: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        slidesPerView: 4,
        spaceBetween: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          // when window width is >= 896px
          897: {
            slidesPerView: 4
          },
          // when window width is >= 668px
          668: {
            slidesPerView: 3
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 1
          }
        }
      }
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.recentlyProducts = vm.products.filter(function(item, index, array) {
          // 在recentlyList找有相同id的產品
          return vm.recentlyList.includes(item.id);
        });
      });
    },
    getStorage() {
      const vm = this;
      // 首次進入此頁的情況
      if (localStorage.getItem("recentlyList") === null) {
        let rList = [];
        rList.push(vm.id);
        localStorage.setItem("recentlyList", JSON.stringify(rList));
      } else {
        let rList = JSON.parse(localStorage.getItem("recentlyList"));
        vm.recentlyList = rList;
        if(rList.includes(vm.id)){
          console.log("有重複");
        }else{
          rList.push(vm.id);
        }
        localStorage.setItem("recentlyList", JSON.stringify(rList));
        console.log("rList:", rList);
      }
    },
    delStorage(item) {
      const vm = this;
      let rList = [];
      vm.recentlyProducts.splice(vm.recentlyProducts.findIndex(function(e){
        return e.id === item.id;
      }),1)
      vm.recentlyList = [];
      vm.recentlyProducts.forEach(function(e) {
        vm.recentlyList.push(e.id)
      });;
      rList = vm.recentlyList;
      //清除ls
      localStorage.removeItem("recentlyList");
      //重新加入ls
      if(rList.includes(vm.id)){
          console.log("有重複");
        }else{
          rList.push(vm.id);
        }
      localStorage.setItem("recentlyList", JSON.stringify(rList));
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getProducts();
    this.getStorage();
  }
};
</script>

<style lang="scss" scoped>
.sale--container {
  height: 600px;
}
.sale--pagination {
  bottom: 0rem;
  height: 50px;
}
</style>