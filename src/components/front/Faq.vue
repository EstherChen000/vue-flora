<template>
  <div>
    <div class="container">
      <Navbar></Navbar>
      <div class="row bg-info text-dark align-items-stretch">
        <div class="container pt-5 pb-5">
          <div class="row pt-5 pb-5">
            <h2 class="font-weight-bolder text-center w-100">FQA</h2>
          </div>
          <div class="row w-100 m-0">
            <div class="accordion w-100 ml-auto" id="accordionExample">
              <div class="card">
                <div class="card-header bg-info" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      付款問題
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li>Q1. 請問付款方式有哪些？</li>
                      <li>A1. 目前僅提供信用卡(VISA、Mastercard、JCB)支付。</li>
                      <br />
                      <li>Q2. 請問能否貨到付款？</li>
                      <li>
                        A2.
                        目前尚未開放貨到付款功能，須事先付款才能幫您安排出貨。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-info" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      訂購問題
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li>Q1. 請問是否有當日送花的服務？</li>
                      <li>A1. 因配送及製作皆耗時，不提供當日送花的服務。</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header bg-info" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      配送問題
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li>Q1. 請問有送到離島嗎？</li>
                      <li>A1. 目前不開放離島配送的服務。</li>
                      <br />
                      <li>Q2. 你們的花都如何包裝的？</li>
                      <li>
                        A2.
                        我們會盡量使用精美的箱子或盒子給您，並使用常見的緩衝包材，例如：氣泡袋、紙板、泡棉等等。
                      </li>
                      <br />
                      <li>Q3. 請問送貨時間是？ 有辦法指定時間嗎？</li>
                      <li>
                        A3. 黑貓宅急便配送時間基本上分為13:00前、後。
                        最晚的配送時間為晚間18:00。
                        只可以指定時段，無法指定確切的送貨時間。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
