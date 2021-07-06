<template>
  <swiper
    class="swiper-container swiper-container-autoheight sale--container"
    :options="swiperOption"
  >
    <div
      is="swiper-slide"
      v-for="item in mightLikeProduct"
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
    </div>
    <div class="swiper-pagination sale--pagination" slot="pagination"></div>
  </swiper>
</template>
<style lang="scss" scoped>
.sale--container {
  height: 600px;
}
.sale--pagination {
  bottom: 0rem;
  height: 50px;
}
</style>
<script>
import $ from "jquery";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide
  },
  props: ["descriptions"],
  data() {
    return {
      products: [],
      mightLikeProduct: [],
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
      let num = Math.floor(Math.random()*vm.descriptions.length);
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.mightLikeProduct = vm.products.filter(function(item, index, array) {
          return item.description.includes(
            vm.descriptions[num] 
          );
        });
        // console.log('num:',num,'vm.descriptions[num]',vm.descriptions[num],'vm.descriptions.length:',vm.descriptions.length)
      });
    },
  },
  mounted(){
    this.getProducts();
  }
};
</script>
