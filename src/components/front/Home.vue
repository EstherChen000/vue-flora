<template>
  <div>
    <div class="container ">
      <!-- 導覽列 -->
      <Navbar></Navbar>

      <!-- 輪播 -->
      <div class=""><Carousel></Carousel></div>

      <!-- 新上市 -->
      <div class="row bg-white py-3">
        <div class="col-md-4 col-sm-12 d-flex flex-column justify-content-md-center">
          <h3 class="display-3">新上市</h3>
          <p>迎接新年的商品新到貨</p>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" src="https://picsum.photos/600/400?random=1">
              <div class="content-details text-light">
                <button class="btn btn-outline-success">來看更多→</button>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- 快速產品分類 -->
      <div class="row bg-white">
        <div class="col-md-8 col-sm-12 p-0">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" src="https://picsum.photos/800/400?random=5">
              <div class="content-details text-light">
                <h3 class="content-title">居家布置</h3>
                <p class="content-text">輕鬆妝點家中你喜愛的空間！</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 d-flex flex-column p-0">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" src="https://picsum.photos/800/400?random=2">
              <div class="content-details text-light">
                <h3 class="content-title">送禮慶賀</h3>
                <p class="content-text">為親朋好友獻上真摯的祝福！</p>
              </div>
            </router-link>
          </div>
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" src="https://picsum.photos/800/400?random=3">
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
        <div class="col-md-4 col-sm-12 d-flex flex-column justify-content-md-center">
          <h3 class="display-3">熱賣中</h3>
          <p>人氣商品精選!</p>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="content">
            <router-link to="">
              <div class="content-overlay"></div>
              <img class="content-image" src="https://picsum.photos/600/400?random=5">
              <div class="content-details text-light">
                <button class="btn btn-outline-danger">來看更多→</button>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <SaleSwiper></SaleSwiper>
      
      
      

      <!-- 團隊介紹 -->
      <div class="row vh-100 bg-dark text-light align-items-stretch ">
        <div class="col-7 pl-0">
          <div class="">
            <img class="img-fluid" src="@/assets/img/info.jpg" alt="..." />
          </div>
        </div>

        <div class="col-5 bg-dark">
          <div class="">
            <h2 class="display-3 pt-5">關於我們</h2>
            <p class="pt-5 pb-5">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>

      <!-- FQA -->
      <div class="row vh-100 bg-info text-dark align-items-stretch vh-100">
        <div class="container pt-5 pb-5">
          <div class="row pt-5 pb-5">
            <h2 class="font-weight-bolder text-center w-100">FQA</h2>
          </div>
          <div class="row w-100 m-0">
            <div class="accordion w-100 ml-auto" id="accordionExample">
              <div class="card">
                <div class="card-header bg-info" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      付款問題
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li>Q1. 請問付款方式有哪些？</li>
                      <li>A1. 目前僅提供信用卡(VISA、Mastercard、JCB)支付。</li>
                      <br>
                      <li>Q2. 請問能否貨到付款？</li>
                      <li>A2. 目前尚未開放貨到付款功能，須事先付款才能幫您安排出貨。</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-info" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      訂購問題
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li>Q1. 請問是否有當日送花的服務？</li>
                      <li>A1. 因配送及製作皆耗時，不提供當日送花的服務。</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-info" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      配送問題
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li>Q1. 請問有送到離島嗎？</li>
                      <li>A1. 目前不開放離島配送的服務。</li>
                      <br>
                      <li>Q2. 你們的花都如何包裝的？</li>
                      <li>A2. 我們會盡量使用精美的箱子或盒子給您，並使用常見的緩衝包材，例如：氣泡袋、紙板、泡棉等等。</li>
                      <br>
                      <li>Q3. 請問送貨時間是？ 有辦法指定時間嗎？</li>
                      <li>A3. 黑貓宅急便配送時間基本上分為13:00前、後。 最晚的配送時間為晚間18:00。 只可以指定時段，無法指定確切的送貨時間。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- sub-email -->
      <div class="row bg-secondary">
        <div class="container">
          <div class="row">
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="歡迎訂閱最新的電子報"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                >
                  <i class="far fa-envelope"></i>
                </button>
              </div>
            </div>
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
import SaleSwiper from './Sale-swiper.vue';

$("#indexCover").carousel({
  interval: 2000
});

export default {
  name: "HelloWorld",
  components: {
    Navbar,
    Carousel,
    Footer,
    SaleSwiper
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.seemore{
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.content{
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
}
.content .content-overlay{
  background-color: rgba(0, 0, 0, .7);
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
.content:hover .content-overlay{
  opacity: 1;
}
.content-image {
    width: 100%
}

.content-details{
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
.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}




</style>
