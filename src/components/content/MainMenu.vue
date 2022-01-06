<template>
      <tab-bar1>
      <tab-bar-item path="/A" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/bird.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/B">
        <img slot="item-icon" src="~assets/img/tabbar/pc.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/C" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/net.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">购物</div>
      </tab-bar-item>
      <tab-bar-item path="/D">
        <img slot="item-icon" src="~assets/img/tabbar/my.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar1>
</template>

<script>
import TabBar1 from "components/common/tabbar/TabBar1.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"

export default {
  name: "MainMenu",
  components: {
    TabBar1,TabBarItem
  }
};
</script>

<style>

</style>
