<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-menu></main-menu>
  </div>
</template>

<script>
import MainMenu from "@/components/content/MainMenu.vue";

export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
