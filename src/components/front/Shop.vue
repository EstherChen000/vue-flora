<template>
  <div>
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
        <div
          class="col-9 border border-primary d-flex flex-row flex-wrap vh-100"
        >
          <div class="card m-auto " style="width: 18rem;">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card m-auto" style="width: 18rem;">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card m-auto" style="width: 18rem;">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card m-auto" style="width: 18rem;">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
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
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

export default {
    components:{
        Navbar,
        Carousel,
        Footer
    }
}
</script>

<style lang="scss" scoped>

</style>