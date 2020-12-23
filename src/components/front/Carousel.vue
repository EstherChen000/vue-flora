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
        <img
          src="@/assets/img/cover_01.jpg"
          class="d-block  w-100 brightness"
          alt=""
        />
        <div class="carousel-caption d-md-block cus-sty-carousel">
          <h3>這是一段富有吸引力的slogon!</h3>
          <p>這是一段富有吸引力的slogon!again!</p>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="@/assets/img/cover_02.jpg" class="d-block  w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="@/assets/img/cover_03.jpg" class="d-block  w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
