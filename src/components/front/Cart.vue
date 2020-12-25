<template>
  <div>
    <div class="my-5 row flex-column justify-content-center align-items-center">
      <div class="col-md-6">
        <h2>購物車內容</h2>
        <div class="slw-checkout-breadcrumb">
          <div class="scb-item scb-current">Registration</div>
          <div class="scb-item ">Payment</div>
          <div class="scb-item">Confirmation</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.slw-checkout-breadcrumb {
  display: flex;
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
  counter-reset: slw-checkout-breadcrumb;
  font-size: 0; /* to remove space between inline-block elements */
  
  font-family: 'Roboto', 'Helvetica', sans-serif;
}

.slw-checkout-breadcrumb .scb-item {
  display: inline-block;
  flex-grow: 1;
  flex-basis: 33%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  padding: 46px 40px 20px;
  position: relative;
  
  opacity: 0.3;
}

.slw-checkout-breadcrumb .scb-item.scb-current {
  opacity: 1;
  font-weight: bold;
}

.slw-checkout-breadcrumb .scb-item:before {
  content: ' ';
  background-color: #d3d3d3;

  display: block;
  width: 100%;
  height: 2px;

  position: absolute;
  top: 21px;
  left: 0;
}

.slw-checkout-breadcrumb .scb-item:after {
  counter-increment: slw-checkout-breadcrumb;
  content: counter(slw-checkout-breadcrumb);
  
  display: block;
  position: absolute;
  top: 10px;
  left: 50%;
  left: calc(50% - 0.5em);
  
  background: #333333;
  box-shadow: 0 0 0 5px white;
  color: white;
  height: 1em;
  width: 1em;
  border-radius: 50%;
  padding: 4px;
  line-height: 1em;
}

.slw-checkout-breadcrumb .scb-item.scb-current:before {
    background-color: #333;
}
</style>