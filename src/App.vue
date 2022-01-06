<template>
  <div id="app">
    <p>abc123</p>
    <main-menu></main-menu>
  </div>
</template>

<script>
import MainMenu from 'components/content/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>
