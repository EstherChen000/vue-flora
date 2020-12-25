<template>
  <div>
    <div class="container ">
      <!-- 導覽列 -->
      <Navbar></Navbar>

      <!-- 輪播 -->
      <div class=""><Carousel></Carousel></div>

      <!-- 快速產品分類 -->
      <div class="row vh-100 bg-primary ">
        <h3 class="display-3 text-light text-center w-100 pt-5">今天想來點?</h3>
        <div
        class="row align-items-center justify-content-around"
        >
          <div class="col-3">
            <div class="card bg-dark text-white">
              <img src="@/assets/img/qp_01.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h5 class="card-title">居家布置</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card bg-dark text-white">
              <img src="@/assets/img/qp_02.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h5 class="card-title">送禮慶賀</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card bg-dark text-white">
              <img src="@/assets/img/qp_03.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h5 class="card-title">結婚捧花</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <h3 class="display-3 text-light text-center w-100 pt-5">今天想來點?</h3>
      </div>

      <!-- 團隊介紹 -->
      <div class="row vh-100 bg-dark text-light align-items-stretch ">
        <div class="col-7 pl-0">
          <div class="">
            <img src="@/assets/img/info.jpg" class="vh-100" alt="..." />
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
          <div class="row">
            <div class="col-4">
              <div class="">
                <h5 class="card-title">居家布置</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>

            <div class="col-4">
              <div class="">
                <h5 class="card-title">居家布置</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>

            <div class="col-4">
              <div class="">
                <h5 class="card-title">居家布置</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
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

$("#indexCover").carousel({
  interval: 2000
});

export default {
  name: "HelloWorld",
  components:{
        Navbar,
        Carousel,
        Footer
    },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >


</style>
