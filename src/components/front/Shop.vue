<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container ">
      <!-- Navbar -->
      <Navbar></Navbar>

      <!-- 輪播 -->
      <div class="pb-3 "><Carousel></Carousel></div>

      <!-- main -->
      <router-view></router-view>

      <!-- Footer -->
      <div class="mt-5">
        <Footer></Footer>
      </div>
      
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

export default {
  components: {
    Navbar,
    Carousel,
    Footer
  },
  data() {
    return {
      status: {
        loadingItem: ""
      },
      isLoading: false,
    };
  },
};
</script>


