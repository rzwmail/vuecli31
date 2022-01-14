<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="mynavbar"
    />
    <scroll
      class="content"
      :probeType="3"
      ref="myscroll"
      @contentScroll="contentScroll"
    >
      <detail-swiper :detailInfo="detailInfo" />
      <goods-info :goodsinfo="detailInfo" />
      <store-info :storeinfo="detailInfo" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <param-info ref="myparam" />
    </scroll>
    <bottom-bar />
    <back-top @click.native="backClick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail } from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import GoodsInfo from "./childComps/GoodsInfo.vue";
import StoreInfo from "./childComps/StoreInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import ParamInfo from "./childComps/ParamInfo.vue";
import { backTopMixin, debounce } from "../../common/utils";
import BottomBar from "./childComps/BottomBar.vue";

export default {
  name: "Detail",
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsInfo,
    StoreInfo,
    Scroll,
    DetailGoodsInfo,
    ParamInfo,
    BottomBar,
  },
  props: {},
  data() {
    return {
      iid: null,
      detailInfo: {},
      themetopYs: [],
      getTopYs: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.detailInfo = res[this.iid - 1].detail;
    });

    this.getTopYs = debounce(() => {
      this.themetopYs = [];
      this.themetopYs.push(0);
      this.themetopYs.push(this.$refs.myparam.$el.offsetTop);
      this.themetopYs.push(1500);
      this.themetopYs.push(2200);
    });
  },
  methods: {
    imgLoad() {
      this.$refs.myscroll.scroll.refresh();
      this.getTopYs();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.myscroll.scrollTo(0, -this.themetopYs[index] + 44);
    },
    contentScroll(position) {
      let len = this.themetopYs.length;
      // this.isBackTopShow = position.y < -400 ? true : false;
      this.listenBackTopShow(position)
      for (let i = len - 1; i > 0; i--) {
        if (-position.y > this.themetopYs[i]) {
          this.$refs.mynavbar.currentIndex = i;
          return;
        }
      }
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 8;
  background-color: #fff;
}
.content {
  height: calc(100vh - 44px - 49px);
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>