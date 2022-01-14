<template>
  <div style="width:100%; display: flex;  flex-wrap: wrap;">
      <img :src="item" alt=""  style="flex:1; margin: 20px"
      @load="imgLoad"
      v-for="(item,index) in detailInfo.topImages" :key="index"/>
  </div>
</template>

<script>

 export default {
  name: "DetailGoodsInfo",
  components: {
  
  },
  props: {
      detailInfo: {
          type: Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {
        count: 0,
        imgLenth: 0,

    }
  },
  created() {
  
  },
  mounted() {
  
  },
  methods: {
      imgLoad(){
          if(++this.count === this.imgLenth){
              this.$emit('imgLoad')
          }

      }
  },
  watch: {
      detailInfo(){
          this.imgLenth = this.detailInfo.topImages.length
      }
  }
}
</script>

<style scoped>

</style>