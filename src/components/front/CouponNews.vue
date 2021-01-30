<template>
  <div>
    <div class="container">
      <Navbar></Navbar>
      <div>優惠券</div>
      <div class="row">
        <div class="coupon">
          <div class="coupon--up">
            <div class="coupon--up--title">冬季特賣優惠券</div>
            <div class="coupon--up--contain">20% <span>OFF</span></div>
            <div class="coupon--up--time">2021/01/01-2020/03/01</div>
          </div>
          <div class="coupon--down">
            <div class="coupon--down--code">wwwwwww</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.coupon{
  width: auto;
  height: auto;
  
  background-color: rosybrown;
  border-radius: 2rem;
  text-align: center;
}
.coupon--up{
  border-bottom: #333 2px dashed;
  // padding-bottom: 1rem;
  padding: 2rem;
}
.coupon--up--title{
  font-size: 2rem;
  line-height: 1;
}
.coupon--up--contain{
  font-size: 4rem;
  font-weight: 800;
  span{
    font-size: 1.5rem;
  }
}
.coupon--up--time{
  font-size: 1rem;
  text-align: end;
  line-height: .8;
}
.coupon--down{
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0 0 2rem 2rem;
  position: relative;
}
.coupon--down::before{
  content: '';
  position: absolute;
  display: block;
  height: 3rem;
  width: 3rem;
  background-color: #fff;
  top: -1.5rem;
  left: -1.5rem;
  border-radius: 1.5rem;
}
.coupon--down::after{
  content: '';
  position: absolute;
  display: block;
  height: 3rem;
  width: 3rem;
  background-color: #fff;
  top: -1.5rem;
  right: -1.5rem;
  border-radius: 1.5rem;
}
.coupon--down:hover{
  background-color: rgb(97, 73, 73);
  transition: background-color 1s ease-in-out;
}
.coupon--down--code{
  font-size: 1.5rem;
}
</style>
<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data(){
    return{
      isCopy:true
    }
  },
  methods:{
    copyCode(){
      
    }
  }
};
</script>