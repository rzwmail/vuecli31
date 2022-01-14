<template>
  <nav-bar>
    <p slot="left" class="back" @click="$router.go(-1)"></p>
    <div slot="center" class="title">
      <div class="title-item" :class="{active: index===currentIndex}" 
            @click="titleClick(index)"
            v-for="(item, index) in titles" :key="index">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  props: {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
      titleClick(index){
          this.currentIndex = index
          this.$emit('titleClick',index)
      }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
    color: red;
}
.back {
    width: 0px;
    height: 0px;
    border: 13px solid;
    border-color: transparent;
    border-right-color: red;
    left: 10px;
    top: 7px;
    position: absolute;
}
.back::after {
    content: '';
    border: 13px solid;
    border-color: transparent;
    border-right-color: white;
    left: -11px;
    top: -13px;
    position: absolute;
}
</style>