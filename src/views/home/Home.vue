<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature></feature>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" />
    <goods-list :goodsList="goods[currentType].list"/>
    <br /><br /><br />
    <br /><br /><br />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import Feature from "./childComps/Feature.vue";

import { getHomeMultiData, getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList
  },
  data(){
    return {
      result: null,
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
    };
  },
  created() {
    this.getMultiData()
    this.getGoods("pop")
    this.getGoods("new")
    this.getGoods("sell")
  },
  methods: {
    getMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.banners;
        this.recommends = res.recommends;
      });
    },

    getGoods(kind) {
      const page = this.goods[kind].page + 1
      getHomeGoods(kind, page).then((res) => {
        this.goods[kind].list.push(...res)
      });
      console.log(this.goods.pop.list);
    },

    tabClick(index){
      switch(index){
        case 0: 
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2: 
          this.currentType='sell'
          break
      }
    }
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: rgb(236, 130, 148);
  color: white;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #ddd;
  z-index: 8;
}
</style>
