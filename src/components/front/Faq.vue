<template>
  <div>
    <div class="container">
      <Navbar></Navbar>
      <div class="banner row pt-5 pb-5">
        <h2 class="font-weight-bolder text-center w-100">FAQ</h2>
      </div>
      <div class="card my-5">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: whichIs === '所有問題' }"
                href="#"
                @click.prevent="pickQ('所有問題')"
                >所有問題</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: whichIs === '付款問題' }"
                href="#"
                @click.prevent="pickQ('付款問題')"
                >付款問題</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: whichIs === '訂購問題' }"
                href="#"
                @click.prevent="pickQ('訂購問題')"
                >訂購問題</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: whichIs === '配送問題' }"
                href="#"
                @click.prevent="pickQ('配送問題')"
                >配送問題
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body p-0">
          <div class="accordion w-100 ml-auto">
            <div class="card" v-for="(item, index) in faqFilter" :key="index">
              <div class="card-header bg-white">
                <button
                  class="btn collapsed p-0"
                  type="button"
                  @click="toggleCollapse(item, index)"
                >
                  <ul class="list-unstyled">
                    <li>{{ "Q" + (index + 1) + ". " + item.question }}</li>
                  </ul>
                </button>
              </div>
              <div class="collapse" :class="{ show: item.show }" :key="index">
                <div class="card-body bg-secondary">
                  <ul class="list-unstyled">
                    <li>{{ "A" + (index + 1) + ". " + item.answer }}</li>
                  </ul>
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
      whichIs: "所有問題",
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
  methods: {
    pickQ(Q) {
      const vm = this;
      vm.whichIs = Q;
    },
    toggleCollapse(item, index) {
      //即設定所選之目標 給予show屬性 false/true值
      if (item.show) {
        this.$set(item, "show", false);
      } else {
        this.$set(item, "show", true);
      }
    }
  },
  computed: {
    faqFilter() {
      const vm = this;
      let pay = [];
      let order = [];
      let send = [];
      if (vm.whichIs === "付款問題") {
        pay = vm.items.filter(item => {
          return item.category === "付款問題";
        });
        return pay;
      } else if (vm.whichIs === "訂購問題") {
        order = vm.items.filter(item => {
          return item.category === "訂購問題";
        });
        return order;
      } else if (vm.whichIs === "配送問題") {
        send = vm.items.filter(item => {
          return item.category === "配送問題";
        });
        return send;
      } else if (vm.whichIs === "所有問題") {
        return vm.items;
      }
    }
  }
};
</script>
