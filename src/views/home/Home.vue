<template>
  <div id="home">
    <nav-bar class="home-nav" ref="mynavbar"
      ><div slot="center">购物街</div></nav-bar
    >
    <tab-control
      :titles="titles"
      class="tab-control1"
      @tabClick="tabClick"
      ref="mytabcontrol1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="myscroll"
      :probe-type="3"
      :isPullUpload="isPullUpload"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature />
      <tab-control
        :titles="titles"
        class="tab-control"
        @tabClick="tabClick"
        ref="mytabcontrol2"
      />

      <goods-list :goodsList="goods[currentType].list" />
    </scroll>

    <back-top @click.native="backClick" v-show="isBackTopShow" />
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import Feature from "./childComps/Feature.vue";

import { getHomeMultiData, getHomeGoods } from "@/network/home.js";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/common/BackTop.vue";
import { debounce } from "../../common/utils.js";

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
      isBackTopShow: false,
      isPullUpload: true,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  created() {
    this.getMultiData();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    let func = function (a, b) {
      console.log(112233, a);
    };
    const refresh = debounce(func, 1000);
    // this.$bus.$on('imgloaded', (msg)=>{console.log(msg); refresh(999,888)})
  },
  activated(){
    this.$refs.myscroll.scrollTo(0,this.saveY)
    this.$refs.myscroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.myscroll.scroll.y
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
      this.$refs.mytabcontrol1.currentIndex = index
      this.$refs.mytabcontrol2.currentIndex  = index
    },
    backClick() {
      this.$refs.myscroll.scrollTo();
    },
    contentScroll(position) {
      //判断回到顶部是否显示
      this.isBackTopShow = position.y < -400 ? true : false;
      //判断选项是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop ? true : false;
    },
    loadMore() {
      this.getGoods(this.currentType);
      this.finishPullUp();
    },
    finishPullUp() {
      this.$refs.myscroll.scroll.refresh();
      this.$refs.myscroll.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.mytabcontrol2.$el.offsetTop;
      console.log(this.tabOffsetTop);
    },
  },
};
</script> 

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: rgb(236, 130, 148);
  color: white;
}
.content {
  /* height: calc(100vh - 93px);
  overflow: hidden; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control1 {
  position: relative;
  z-index: 9;
}
</style>
