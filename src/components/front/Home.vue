<template>
  <div>
    <div class="container bg-white">
      <!-- 導覽列 -->
      <Navbar></Navbar>

      <!-- 輪播 -->
      <div class="mb-5">
        <router-link to="/shop/product_show"><Carousel></Carousel></router-link>
      </div>

      <!-- 新上市 -->
      <div class="row bg-light p-0 mb-5">
        <div
          class="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center"
        >
          <div class="text-center">
            <h3 class="display-5 text-primary font-weight-bold">新品上市</h3>
            <p>夏季商品新上架</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 bg-white p-0">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" :src="newArrivalImg" />
              <div class="content-details text-light">
                <button class="btn btn-outline-success">
                  來看更多<i class="fas fa-arrow-circle-right ml-1"></i>
                </button>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- 快速產品分類 -->
      <div class="row bg-white mb-5 justify-content-around">
        <h3 class="display-4 text-center col-md-12 my-5">－想要找什麼呢?</h3>
        <div class="col-md-3 col-sm-12 p-3 bg-white m-3 shadow content">
          <router-link to="/shop/product_show">
            <div class="content-overlay"></div>
            <img class="content-image" :src="tableImg" />
            <div class="mt-3 text-dark">
              <p class="display-5 font-weight-bold">桌花</p>
              <p>挑選時下花卉，讓您自由的變換居家風格，創造舒適的氛圍。</p>
            </div>
            <div class="content-details text-light">
              <h3 class="content-title">居家布置</h3>
              <p class="content-text">輕鬆妝點家中你喜愛的空間！</p>
            </div>
          </router-link>
        </div>
        <div
          class="col-md-3 col-sm-12 d-flex flex-column p-3 bg-white m-3 shadow content"
        >
          <router-link to="/shop/product_show">
            <div class="content-overlay"></div>
            <img class="content-image" :src="bouquetImg" />
            <div class="mt-3 text-dark">
              <p class="display-5 font-weight-bold">花束</p>
              <p>配合時節，輕鬆搭配各種場合，送出最符合心意的禮物。</p>
            </div>
            <div class="content-details text-light">
              <h3 class="content-title">送禮慶賀</h3>
              <p class="content-text">為親朋好友獻上真摯的祝福！</p>
            </div>
          </router-link>
        </div>
        <div
          class="col-md-3 col-sm-12 d-flex flex-column p-3 bg-white m-3 shadow content"
        >
          <router-link to="/shop/product_show">
            <div class="content-overlay"></div>
            <img class="content-image" :src="weddingImg" />
            <div class="mt-3 text-dark">
              <p class="display-5 font-weight-bold">捧花</p>
              <p>無論在任何月份，都能挑選到一款適合您婚禮風格的捧花。</p>
            </div>
            <div class="content-details text-light">
              <h3 class="content-title">結婚捧花</h3>
              <p class="content-text">傳承幸福的美麗！</p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 熱銷商品 -->
      <div class="row bg-light p-0 mb-5">
        <div
          class="col-md-6 col-sm-12 d-flex flex-column justify-content-md-center align-items-center"
        >
          <div class="text-right">
            <h3 class="display-5 text-primary font-weight-bold">熱賣中</h3>
            <p>人氣商品精選!</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 p-0">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" :src="onSaleImg" />
              <div class="content-details text-light">
                <button class="btn btn-outline-danger">
                  來看更多<i class="fas fa-arrow-circle-right ml-1"></i>
                </button>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="my-5"><SaleSwiper></SaleSwiper></div>

      <!-- 購物流程 -->
      <div class="row bg-light p-0 mb-5 justify-content-around">
        <h3 class="display-4 text-center col-md-12 mt-5">
          ～心動不如馬上行動～
        </h3>
        <div class="bg-white flow border border-primary">
          <h5 class="display-5 py-3 font-weight-bold border-bottom">step 1</h5>
          <p>選購商品加入購物車</p>
          <p class="font-weight-light">
            產品不提供當日配送，請確認到貨日期在下訂單。
          </p>
        </div>
        <div class="bg-white flow border border-primary">
          <h5 class="display-5 py-3 font-weight-bold border-bottom">step 2</h5>
          <p>確認商品並輸入優惠碼</p>
          <p class="font-weight-light">
            當前適用優惠碼請前往<router-link to="/couponnews"
              >優惠資訊</router-link
            >確認。
          </p>
        </div>
        <div class="bg-white flow border border-primary">
          <h5 class="display-5 py-3 font-weight-bold border-bottom">step 3</h5>
          <p>選擇付款方式及輸入配送地址</p>
        </div>
        <div class="bg-white flow border border-primary">
          <h5 class="display-5 py-3 font-weight-bold border-bottom">step 4</h5>
          <p>完成購物，等待商品到貨</p>
        </div>
      </div>

      <!-- 關於我們 -->
      <div class="row text-light py-5">
        <div class="col-md-6 col-sm-12 p-0">
          <img class="img-fluid" :src="aboutMeImg" />
        </div>

        <div
          class="col-md-6 col-sm-12 p-0 bg-primary d-flex align-items-center justify-content-center"
        >
          <div class="px-5">
            <h3 class="display-4 pt-5 font-weight-bold">關於我們</h3>
            <p class="font-weight-bold">
              為您提供當季的鮮花組合<i class="float-right">－by Flora</i>
            </p>
            <p class="pb-5">
              服務時間 :<br />
              平日 8:00 - 18:00<br />
              例假日 10:00 - 17:00<br />
              服務專線 : 02-333-4444<br />
              地址 : 新竹市東區經國路一段555號
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
      aboutMeImg
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.flow {
  width: 23%;
  padding: 1.5rem;
  margin: 5rem 0;
  text-align: center;
}
@media (max-width: 769px) {
  .flow {
    width: 48%;
    margin: 1rem;
  }
}
@media (max-width: 420px) {
  .flow {
    width: 90%;
  }
}
</style>
