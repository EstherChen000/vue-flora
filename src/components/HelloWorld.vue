<template>
  <div>
    <div class="container">
      <!-- 導覽列 -->
      <div class="">
        <nav class="navbar navbar-expand-lg navbar-primary ">
          <div class="">
            <a class="navbar-brand cus-ff" href="#">Flora</a>
            <button
              class="navbar-toggler btn btn-outline-primary ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
            >
              <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
          </div>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item active  ">
                <a class="nav-link" href="#"
                  >首頁 <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  商店
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link to="/shop" class="dropdown-item">所有商品</router-link>
                  <a class="dropdown-item" href="#">桌花</a>
                  <a class="dropdown-item" href="#">花束</a>
                  <a class="dropdown-item" href="#">捧花</a>
                  
                </div>
              </li>
              <li class="nav-item ">
                <router-link to="/login" class="nav-link"><i class="fas fa-user"></i></router-link>
              </li>
              <li class="nav-item ">
                <router-link to="/cart" class="nav-link"><i class="fas fa-shopping-cart"></i></router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- 輪播 -->
      <div
        id="indexCover"
        class="carousel slide carousel-fade row"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img
              src="../assets/img/cover_01.jpg"
              class="d-block  w-100 brightness"
              alt=""
            />
            <div class="carousel-caption d-md-block cus-sty-carousel">
              <h3>這是一段富有吸引力的slogon!</h3>
              <p>這是一段富有吸引力的slogon!again!</p>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              src="../assets/img/cover_02.jpg"
              class="d-block  w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              src="../assets/img/cover_03.jpg"
              class="d-block  w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 快速產品分類 -->
      <div class="row vh-100 bg-primary ">
        <h3 class="display-3 text-light text-center w-100 pt-5">今天想來點?</h3>
        <div
        class="row align-items-center justify-content-around"
        >
          <div class="col-3">
            <div class="card bg-dark text-white">
              <img src="../assets/img/qp_01.jpg" class="card-img" alt="..." />
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
              <img src="../assets/img/qp_02.jpg" class="card-img" alt="..." />
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
              <img src="../assets/img/qp_03.jpg" class="card-img" alt="..." />
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
            <img src="../assets/img/info.jpg" class="vh-100" alt="..." />
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
      <footer class="row bg-dark text-white">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links list-unstyled">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/"
                    >UI Design</a
                  >
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/"
                    >PHP</a
                  >
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/java-programming-language/"
                    >Java</a
                  >
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/"
                    >Templates</a
                  >
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="nav-link list-unstyled">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/"
                    >Contribute</a
                  >
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/"
                    >Privacy Policy</a
                  >
                </li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a class="facebook" href="#"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                  <a class="dribbble" href="#"
                    ><i class="fa fa-dribbble"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="linkedin" href="#"
                    ><i class="fa fa-linkedin"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

$("#indexCover").carousel({
  interval: 2000
});

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.cus-bg-20b {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.cus-ff{
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  /* font-style: italic; */
}
.brightness{
  filter:brightness(.8) blur(3px);
}
.cus-sty-carousel{
  height: 300px;
  // background: linear-gradient(-15deg, #0B5345 50%,#12798b);
  // opacity: .8;
  border: double 8px #fff;
  // border-style: none;
  // box-shadow: 25px 20px 20px rgba(0, 0, 0, 0.8);
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  h3{
    
    line-height: 200px;
    // background: pink;
    margin-bottom: 0;
    margin: auto;
  }
  p{
    font-size: 1.5rem;
    line-height: 100px;
    // background: red;
    margin: auto;
    
  }  
  
  
}
</style>
