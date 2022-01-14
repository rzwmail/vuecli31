<template>
  <div class="goodsinfo">
      <div style="background-color:#eee;font-size: 20px;padding: 10px;font-weight: 900 ">
          {{goodsinfo.name}}[2021年流行冬装，限量直销]
      </div>
      <div>
        <span style="color:red;font-size: 30px;">￥{{goodsinfo.price|priceFormat}}</span>
        <span style="margin-left: 20px;"><s>￥1999</s></span>
        <span style="background-color:pink;border-radius:5px;padding:3px;margin-left:20px">活动价</span>
      </div>
      <div style="display: flex;line-height:44px;border-bottom: 1px solid #eee">
        <span style="font-size: 14px; flex:1">销量: 10000</span>
        <span style="flex:1">收藏： 30人</span>
        <span style="flex:1">72小时发货</span>
      </div>
      <div style="display: flex;line-height:44px;border-bottom: 4px solid #eee">
        <span style="font-size: 14px; flex:1">退货补运费</span>
        <span style="flex:1">全国包邮</span>
        <span style="flex:1">7天无理由退货</span>
      </div>
  </div>
</template>

<script>

export default {
  name: "GoodsInfo",
  components: {
  
  },
  props: {
      goodsinfo: {
          type: Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {
    
    }
  },
  created() {
  
  },
  mounted() {
  
  },
  methods: {
  
  },
  filters: {
    priceFormat(val){
      if(parseInt(val) >=100){
        return val/100+'百'
      }

    }
  }
}
</script>

<style scoped>

</style>