<template>
  <div>
    <div class="container">
      <Navbar></Navbar>
      <div class="banner">
        <div class="banner--title" >輸入您的問題{{input}}</div>
        <div class="banner--searchbar">
          <input type="text" v-model="input" @keyup.enter="searchQ">
        </div>
      </div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="pickQ('付款問題')">付款問題</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="pickQ('訂購問題')">訂購問題</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="pickQ('配送問題')">配送問題</a>
        </li>
      </ul>
      <div class="main">
        <div class="allfaq" :class="{'invisible': input !== ''}">
          <div class="accordion w-100 ml-auto">
            <div class="card" v-for="(item, index) in faqFilter" :key="index">
              <div class="card-header bg-secondary" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    @click="toggleCollapse(item, index)"
                  >
                    <li>{{ "Q" + (index + 1) + ". " + item.question }}</li>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                :class="{ 'show' : item.show }"
                :key="index"
              >
                <div class="card-body">
                  <ul class="list-unstyled">
                    <li>{{ "A" + (index + 1) + ". " + item.answer }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row bg-light text-dark align-items-stretch">
        <div class="container pt-5 pb-5">
          <div class="row pt-5 pb-5">
            <h2 class="font-weight-bolder text-center w-100">FAQ</h2>
          </div>
          <div class="row w-100 m-0">
            <div class="accordion w-100 ml-auto" id="accordionExample">
              <div class="card">
                <div class="card-header bg-secondary" id="headingOne">
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
                  class="collapse"
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
                <div class="card-header bg-secondary" id="headingTwo">
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
                <div class="card-header bg-secondary" id="headingThree">
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
  },
  data() {
    return {
      whichIs: "",
      input:"",
      itemSearch:[],
      items: [
        {
          category: "付款問題",
          question: "請問付款方式有哪些？",
          answer: "目前僅提供信用卡(VISA、Mastercard、JCB)支付。"
        },
        {
          category: "付款問題",
          question: "請問能否貨到付款？",
          answer: "目前尚未開放貨到付款功能，須事先付款才能幫您安排出貨。"
        },
        {
          category: "訂購問題",
          question: "請問是否有當日送花的服務？",
          answer: "因配送及製作皆耗時，不提供當日送花的服務。"
        },
        {
          category: "配送問題",
          question: "請問有送到離島嗎？",
          answer: "目前不開放離島配送的服務。"
        },
        {
          category: "配送問題",
          question: "你們的花都如何包裝的？",
          answer:
            "我們會盡量使用精美的箱子或盒子給您，並使用常見的緩衝包材，例如：氣泡袋、紙板、泡棉等等。"
        },
        {
          category: "配送問題",
          question: "請問送貨時間是？ 有辦法指定時間嗎？",
          answer:
            "黑貓宅急便配送時間基本上分為13:00前、後。 最晚的配送時間為晚間18:00。 只可以指定時段，無法指定確切的送貨時間。"
        }
      ]
    };
  },
  methods:{
    pickQ(Q){
      const vm = this;
      vm.whichIs = Q;
    },
    toggleCollapse(item, index){
      if(item.show){
        this.$set(item,'show',false);
        console.log('show is false');
      }else{
        this.$set(item,'show',true);
        console.log('show is true');
        console.log(item);
      }
    },
    searchQ(){
      const vm = this;
      let Q = [];
      let A = [];
      vm.whichIs = vm.input;
      Q = vm.items.filter(searchResult => searchResult.question.match(vm.whichIs));
      A = vm.items.filter(searchResult => searchResult.answer.match(vm.whichIs));
      console.log('有動嗎?1')
      if(Q.length !== 0 || A.length !== 0){
        vm.itemSearch = Q.concat(A);
      }else{
       vm.itemSearch = [];
       console.log('沒有符合的結果')
      }
      console.log('有動嗎?2')
      console.log(vm.itemSearch)
    }
  },
  computed: {
    faqFilter() {
      const vm = this;
      let pay = [];
      let order = [];
      let send = [];
      if (vm.whichIs === "付款問題") {
        pay = vm.items.filter(function(item, index, array) {
          return item.category === "付款問題";
        });
        return pay;
      } else if (vm.whichIs === "訂購問題") {
        order = vm.items.filter(function(item, index, array) {
          return item.category === "訂購問題";
        });
        return order;
      } else if (vm.whichIs === "配送問題") {
        send = vm.items.filter(function(item, index, array) {
          return item.category === "配送問題";
        });
        return send;
      } else {
        return vm.items;
      }
      // else if (vm.input){
      //   let Q = []
      //   let A = []
      //   let F = []
      //   Q = vm.items.filter(searchResult => searchResult.question.match(vm.whichIs));
      //   A = vm.items.filter(searchResult => searchResult.answer.match(vm.whichIs));
      //   if(Q != false || A != false){
      //     return F = Q+A;
      //   }else{
      //     return F = vm.items;
      //   }
      //   return F;
      // } 
    }
  }
};
</script>
