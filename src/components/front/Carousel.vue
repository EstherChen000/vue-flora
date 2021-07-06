<template>
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
        <img :src="cover01" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item ">
        <img :src="cover02" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item ">
        <img :src="cover03" class="d-block w-100" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// 圖片匯入
import coverL01 from "@/assets/img/b_01.jpg";
import coverL02 from "@/assets/img/b_02.jpg";
import coverL03 from "@/assets/img/b_03.jpg";
import coverS01 from "@/assets/img/b_01_s.jpg";
import coverS02 from "@/assets/img/b_02_s.jpg";
import coverS03 from "@/assets/img/b_03_s.jpg";

export default {
  data() {
    return {
      coverL01,
      coverL02,
      coverL03,
      coverS01,
      coverS02,
      coverS03,
      cover01: coverL01,
      cover02: coverL02,
      cover03: coverL03
    };
  },
  methods: {
    imgSize() {
      const vm = this;
      if (window.screen.width <= 400) {
        vm.cover01 = vm.coverS01;
        vm.cover02 = vm.coverS02;
        vm.cover03 = vm.coverS03;
      } else if (window.screen.width > 400) {
        vm.cover01 = vm.coverL01;
        vm.cover02 = vm.coverL02;
        vm.cover03 = vm.coverL03;
      }
    }
  },
  created() {
    this.imgSize();
  },
  updated() {
    this.imgSize();
  },
  mounted() {
    $("#indexCover").carousel({
      interval: 4000
    });
  }
};
</script>
