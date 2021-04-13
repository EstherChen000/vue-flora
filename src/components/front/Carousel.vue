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
        <img src="@/assets/img/cover_010.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <div class="box" style="background-color: #f36e4c;">
            <p>
              開幕周年
              <br />
              優惠酬賓
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="@/assets/img/cover_020.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <div class="box" style="background-color: #70a0ac;">
            <p>
              周年特賣
              <br />
              領券88折
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="@/assets/img/cover_030.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <div class="box" style="background-color: #bd8e88;">
            <p>
              賀新會員
              <br />
              優惠七折
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 250px;
  height: 250px;
  display: inline-block;
  position: relative;
  top: 40px;
  z-index: 11;

  p {
    color: #000;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.5;
    height: auto;
    width: auto;
    position: absolute;
    top: 60px;
    left: 60px;
    z-index: 12;
  }
}

.box::after {
  content: "";
  display: block;
  border: #fff 5px solid;
  width: 230px;
  height: 230px;
  position: relative;
  top: 10px;
  left: 10px;
  z-index: 13;
}


@media (max-width: 992px) {
  .box {
    width: 180px;
    height: 180px;
    top: 40px;
    p {
      top: 30px;
      left: 30px;
    }
  }
  .box::after {
    width: 160px;
    height: 160px;
  }
}


</style>
