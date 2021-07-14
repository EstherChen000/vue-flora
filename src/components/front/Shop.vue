<template>
  <div>
    <div class="container flex-body">
      <loading :active.sync="isLoading"></loading>
      <div class="flex-content">
        <!-- Navbar -->
        <Navbar></Navbar>
        <!-- 輪播 -->
        <div class="pb-3"><Carousel></Carousel></div>
        <!-- main -->
        <router-view></router-view>
      </div>
      <div class="flex-footer mt-5">
        <!-- Footer -->
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
      isLoading: false
    };
  }
};
</script>
