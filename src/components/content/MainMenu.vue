<template>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/tabbar/bird.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/pc.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/net.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">购物</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/my.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/msg.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script scoped>
import {TabBar, TabBarItem} from '@/components/common/tabbar'

export default {
  name: "MainMenu",
  components: {
    TabBar,TabBarItem
  }
};
</script>

<style>

</style>
