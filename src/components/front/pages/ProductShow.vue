<template id="ProductShow">
   <div>
      <nav aria-label="breadcrumb" class="mx-0">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
              <router-link to="/shop/product_show">商店</router-link>
          </li>
          <li class="breadcrumb-item">
            {{ breadcrumbCategory }}
          </li>
        </ol>
      </nav>
       <div class="row mx-0">
        <!-- Sidebar -->
        <div class="col-md-3 col-sm-12 pl-0">
          <ul class="list-group border border-primary">
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
              @click.prevent="filterProducts('all')"
            >
              所有商品
              <span class="badge badge-primary badge-pill">{{ products.length }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
              @click.prevent="filterProducts('table')"
            >
              桌花
              <span class="badge badge-primary badge-pill">{{ productsTable.length }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-bottom p-2"
              @click.prevent="filterProducts('bouquet')"
            >
              花束
              <span class="badge badge-primary badge-pill">{{ productsBouquet.length }}</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center p-2"
              @click.prevent="filterProducts('wedding')"
            >
              捧花
              <span class="badge badge-primary badge-pill">{{ productsWedding.length }}</span>
            </li>
          </ul>
        </div>

        <!-- 產品列表 -->
        <div
          class="col-md-9 col-sm-12 border border-primary d-flex flex-row flex-wrap h-auto py-3"
        >
          <div class="d-flex flex-row flex-wrap h-auto py-3">
            <!-- 產品卡片 -->
            <div
              class="card mx-auto my-3"
              v-for="item in productsNow"
              :key="item.id"
            >
              <div
                style="height: 300px; background-size: cover; background-position: center"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">
                  {{ item.category }}
                </span>
                <h5 class="card-title">
                  <a href="#" class="text-dark">{{ item.title }}</a>
                </h5>
                <p class="card-text">
                  {{ item.content }}
                </p>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <div class="h5" v-if="!item.price">
                    {{ item.origin_price | currency }}
                  </div>
                  <del class="h6" v-if="item.price">{{
                    item.origin_price | currency
                  }}</del>
                  <div class="h5" v-if="item.price">
                    {{ item.price | currency }}
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="getProduct(item.id)"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.loadingItem === item.id"
                  ></i>
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click="addtoCart(item.id)"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.loadingItem === item.id"
                  ></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   
</template>
<script>
export default {
  
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      isLoading: false,
      productsTable: [],
      productsBouquet: [],
      productsWedding: [],
      productsNow:[],
      breadcrumbCategory:'所有商品'
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        // console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.productsTable = vm.products.filter(function(item, index, array){
            return item.category === "桌花";
        });
        vm.productsBouquet = vm.products.filter(function(item, index, array){
            return item.category === "花束";
        });
        vm.productsWedding = vm.products.filter(function(item, index, array){
            return item.category === "捧花";
        });
        vm.productsNow = vm.products;
        
      });
    },
    getProduct(id) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.get(api).then(response => {
        // console.log(response.data);
        vm.product = response.data.product;
        // $("#productModal").modal("show");
        vm.$router.push(`/shop/product_detail/${id}`);
        vm.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      const cart = {
        product_id: id,
        qty
      };
      vm.status.loadingItem = id;
      this.$http.post(api, { data: cart }).then(response => {
        // console.log(response.data);
        vm.status.loadingItem = "";
      });
    },
    filterProducts(now){
      const vm = this;
      if(now === "all"){
          vm.productsNow = vm.products;
          vm.breadcrumbCategory = "所有商品";
      }else if(now === "table"){
          vm.productsNow = vm.productsTable;
          vm.breadcrumbCategory = "桌花";
      }else if(now === "bouquet"){
          vm.productsNow = vm.productsBouquet;
          vm.breadcrumbCategory = "花束";
      }else if(now === "wedding"){
          vm.productsNow = vm.productsWedding;
          vm.breadcrumbCategory = "捧花";
      }
      
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
<style lang="scss" scoped>

$hover: #eafaf1;

li {
  cursor: pointer;
}
li:hover{
    background-color: $hover;
    transition: background-color .5s ease-in-out;
}
.breadcrumb-item:hover{
    background-color: $hover;
    transition: background-color .5s ease-in-out;
}
.breadcrumb-item:last-child{
    cursor: text;
}
.breadcrumb-item:last-child:hover{
    background-color: #fff;
}
</style>