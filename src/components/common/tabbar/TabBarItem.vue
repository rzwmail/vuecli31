<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot  name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem", 
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive? {color: this.activeColor}: {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-top: 2px;
}
.tab-bar-item .active{
  color: red;
}
</style>
