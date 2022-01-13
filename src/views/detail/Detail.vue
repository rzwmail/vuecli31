<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"/>
    <scroll class="content" ref="myscroll">
      <detail-swiper :detailInfo="detailInfo"/>
      <goods-info :goodsinfo="detailInfo"/>
      <store-info :storeinfo="detailInfo"/>
      <detail-goods-info :detailInfo="detailInfo"  @imgLoad="imgLoad"/>
      <param-info/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import {getDetail} from '../../network/detail.js'
import DetailSwiper from './childComps/DetailSwiper.vue'
import GoodsInfo from './childComps/GoodsInfo.vue'
import StoreInfo from './childComps/StoreInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import ParamInfo from './childComps/ParamInfo.vue'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsInfo,
    StoreInfo,
    Scroll,
    DetailGoodsInfo,
    ParamInfo
  },
  props: {
  
  },
  data() {
    return {
      iid: null,
      detailInfo: {},
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then((res)=>{
      this.detailInfo = res[this.iid-1].detail
    })
  },
  mounted() {
  },
  methods: {
    imgLoad(){
      this.$refs.myscroll.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100vh - 44px);
  }
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>