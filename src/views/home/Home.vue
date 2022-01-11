<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    
    <scroll class="content" ref="myscroll">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature></feature>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" />
      <goods-list :goodsList="goods[currentType].list" />
    </scroll>

    <back-top @click.native="backClick"/>
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
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
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from '../../components/common/BackTop.vue';

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getMultiData();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  methods: {
    getMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.banners;
        this.recommends = res.recommends;
      });
    },

    getGoods(kind) {
      const page = this.goods[kind].page + 1;
      getHomeGoods(kind, page).then((res) => {
        this.goods[kind].list.push(...res);
      });
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
      this.$refs.myscroll.scrollTo()
    }
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative
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
.content {
  margin-top: 44px;
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
