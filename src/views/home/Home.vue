<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'

import {getHomeMultiData} from '@/network/home.js'

export default { 
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return {
      result: null,
      banners: [],
      recommends: []

    }
  },
  created() {
    getHomeMultiData().then(res=>{
      this.banners = res.banners
      this.recommends = res.recommends
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: rgb(236, 130, 148);
    color: white;
  }
</style>
