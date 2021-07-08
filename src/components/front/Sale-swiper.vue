<template>
  <swiper
    class="swiper-container swiper-container-autoheight sale--container"
    :options="swiperOption"
  >
    <div is="swiper-slide" v-for="sale in sales" :key="'sale' + sale.id" class="content">
      <router-link :to="`/shop/product_detail/${sale.id}`" target="_blank">
        <div class="content-overlay"></div>
        <div class="border border-white">
          <img :src="`${sale.img[0]}`" :alt="sale.title"/>
        </div>
        <div class="p-3">
          <span class="badge badge-secondary float-right ml-2">
            {{ sale.category }}
          </span>
          <h5>{{ sale.title }}</h5>
          <p class="mb-0 float-right">
            NT{{ sale.price | currency
            }}<span class="text-danger small">sale</span>
          </p>
          <p class="font-italic text-black-50">
            <del>NT{{ sale.origin_price | currency }}</del>
          </p>
        </div>
        <div class="content-details text-light">
          <button class="btn btn-outline-success">
            查看產品細節<i class="fas fa-arrow-circle-right ml-1"></i>
          </button>
        </div>
      </router-link>
    </div>
    <div class="swiper-pagination sale--pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import bouquet_01 from "@/assets/img/bouquet_01.jpg";
import bouquet_02 from "@/assets/img/bouquet_02.jpg";
import bouquet_03 from "@/assets/img/bouquet_03.jpg";
import tableFlower_01 from "@/assets/img/tableFlower_04.jpg";
import tableFlower_02 from "@/assets/img/tableFlower_03.jpg";

export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        speed: 2000,
        loop: true,
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
            slidesPerView: 2
          }
        }
      },

      sales: [
        {
          id: "-MRZ8GnplwtXsN1XIIYZ",
          img: [bouquet_01],
          title: "友誼長久",
          price: 499,
          origin_price: 799,
          category:"花束"
        },
        {
          id: "-MRZ8WyfXKvyKml5L1AV",
          img: [bouquet_02],
          title: "清秀佳人",
          price: 499,
          origin_price: 799,
          category:"花束"
        },
        {
          id: "-MWhnn8iDZ2RWZSd4VYp",
          img: [bouquet_03],
          title: "歷久彌新",
          price: 499,
          origin_price: 799,
          category:"花束"
        },
        {
          id: "-MRZ6Wx8YocTJs4C4B5O",
          img: [tableFlower_01],
          title: "典雅的桌花",
          price: 700,
          origin_price: 1200,
          category:"桌花"
        },
        {
          id: "-MRZ6C_DNRGHiqM9gMda",
          img: [tableFlower_02],
          title: "華麗的桌花",
          price: 700,
          origin_price: 1200,
          category:"桌花"
        }
      ]
    };
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