<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" class="recommend-item" :key="index">
      <a :href="item.link">
        <img :src="item.img" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 8px 0 10px;
    border-bottom: 4px solid #eee;
  }
  .recommend img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
</style>
