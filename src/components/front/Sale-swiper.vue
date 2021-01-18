<template>
  <swiper class="swiper-container swiper-container-autoheight sale--container" :options="swiperOption">
    <div is="swiper-slide" v-for="sale in sales" :key="'sale' + sale.id">
        <router-link :to="`/product/${sale.id}`" target="_blank">
            <div class="sale-pic">
            <img :src="`${sale.img[0]}`" alt="">
            </div>
            <div class="product-name">
            <h5>{{ sale.title }}</h5>
            <p>NT${{ sale.price | currency }}<span class="sale-icon">sale</span></p>
            <div class="orign">NT${{ sale.origin_price | currency }}</div>
            </div>
        </router-link>
    </div>
    <div class="swiper-pagination sale--pagination" slot="pagination"></div>
  </swiper>
</template>
<style lang="scss" scoped>
.sale--container{
  height: 600px;
}
.sale--pagination{
  bottom: 0rem;
  height: 50px;
  
}
</style>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          direction: 'horizontal',
          speed: 2000,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          slidesPerView: 4,
          spaceBetween: 1,
          pagination: {
            el: '.swiper-pagination',
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
        sales:[
            {
                id:'1',
                img:['https://picsum.photos/400/400?random=6'],
                title:'一種花',
                price:1200,
                origin_price:10000
            },
            {
                id:'2',
                img:['https://picsum.photos/400/400?random=7'],
                title:'一種花',
                price:1200,
                origin_price:10000
            },
            {
                id:'3',
                img:['https://picsum.photos/400/400?random=8'],
                title:'一種花',
                price:1200,
                origin_price:10000
            },
            {
                id:'4',
                img:['https://picsum.photos/400/400?random=9'],
                title:'一種花',
                price:1200,
                origin_price:10000
            },
            {
                id:'5',
                img:['https://picsum.photos/400/400?random=1'],
                title:'一種花',
                price:1200,
                origin_price:10000
            }
        ]
      }
    },
    
  }
</script>

