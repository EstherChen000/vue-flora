<template>
  <div>
    <div class="container ">
      <!-- 導覽列 -->
      <Navbar></Navbar>

      <!-- 輪播 -->
      <div class="mb-5"><Carousel></Carousel></div>

      <!-- 新上市 -->
      <div class="row bg-white py-3 mb-5">
        <div
          class="col-md-4 col-sm-12 d-flex flex-column justify-content-md-center"
        >
          <h3 class="display-3">新上市</h3>
          <p>迎接季節的轉換，改變居家的氣氛！！</p>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                :src="newArrivalImg"
              />
              <div class="content-details text-light">
                <button class="btn btn-outline-success">來看更多<i class="fas fa-arrow-circle-right ml-1"></i></button>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- 快速產品分類 -->
      <div class="row bg-white my-5">
        <h3 class="display-4 text-right col-md-12">－－想要找什麼呢?</h3>
        <div class="col-md-4 col-sm-12 p-0">
          <div class="content">
            <router-link to="/shop/product_show">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                :src="tableImg"
              />
              <div class="content-details text-light">
                <h3 class="content-title">居家布置</h3>
                <p class="content-text">輕鬆妝點家中你喜愛的空間！</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 d-flex flex-column p-0">
          <div class="content">
            <router-link to="/shop/product_show">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                :src="bouquetImg"
              />
              <div class="content-details text-light">
                <h3 class="content-title">送禮慶賀</h3>
                <p class="content-text">為親朋好友獻上真摯的祝福！</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 d-flex flex-column p-0">
          <div class="content">
            <router-link to="/shop/product_show">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                :src="weddingImg"
              />
              <div class="content-details text-light">
                <h3 class="content-title">結婚捧花</h3>
                <p class="content-text">傳承幸福的美麗！</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- 熱銷商品 -->
      <div class="row bg-white py-3">
        <div
          class="col-md-4 col-sm-12 d-flex flex-column justify-content-md-center"
        >
          <h3 class="display-3">熱賣中</h3>
          <p>人氣商品精選!</p>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                :src="onSaleImg"
              />
              <div class="content-details text-light">
                <button class="btn btn-outline-danger">來看更多<i class="fas fa-arrow-circle-right ml-1"></i></button>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="my-5"><SaleSwiper></SaleSwiper></div>

      <!-- 關於我們 -->
      <div class="row text-light py-5">
        <div class="col-md-6 col-sm-12 p-0">
          <div class="">
            <img class="img-fluid" :src="aboutMeImg" alt="..." />
          </div>
        </div>

        <div class="col-md-6 col-sm-12 p-0 overlay-text bg-primary">
          <div class="px-3">
            <h2 class="display-4 pt-5">關於 Flora</h2>
            <p class="pt-5 pb-5">
              為您提供當季的鮮花組合
              服務時間 :
              平日 8:00 - 18:00 　
              例假日 10:00 - 17:00
              客戶服務專線: 02-333-4444
              地址: 新竹市東區經國路一段555號
            </p>
          </div>
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
import SaleSwiper from "./Sale-swiper.vue";

// 圖片匯入
import aboutMeImg from "@/assets/img/info.jpg";
import tableImg from "@/assets/img/qp_01.jpg";
import bouquetImg from "@/assets/img/qp_02.jpg";
import weddingImg from "@/assets/img/qp_03.jpg";
import newArrivalImg from "@/assets/img/na_01.jpg";
import onSaleImg from "@/assets/img/os_01.jpg";

$("#indexCover").carousel({
  interval: 2000
});

export default {
  name: "Home",
  components: {
    Navbar,
    Carousel,
    Footer,
    SaleSwiper
  },
  data() {
    return {
      newArrivalImg,
      tableImg,
      bouquetImg,
      weddingImg,
      onSaleImg,
      aboutMeImg,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.seemore {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.content {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
}
.content .content-overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
}
.content:hover .content-overlay {
  opacity: 1;
}
.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
}
.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.overlay-text {
  float: right;
  top: 50px;
  right: 50px;
  height: 80%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
@media (max-width: 769px) {
  .overlay-text {
    float: right;
    top: 0px;
    right: 0px;
    box-shadow: none;
    height: auto;
  }
}
</style>
