<template>
  <div class="goodsinfo">
      <div style="background-color:#eee;font-size: 20px;padding: 10px;font-weight: 900 ">
          {{storeinfo.price}}[店铺信息]
      </div>
      <div>
        <span style="color:red;font-size: 30px;">￥{{storeinfo.price}}</span>
        <span style="margin-left: 20px;"><s>￥1999</s></span>
        <span style="background-color:pink;border-radius:5px;padding:3px;margin-left:20px">活动价</span>
      </div>
      <div style="display: flex;line-height:44px;border-bottom: 1px solid #eee">
        <span style="font-size: 14px; flex:1">销量: 10000</span>
        <span style="flex:1">收藏： 30人</span>
        <span style="flex:1">72小时发货</span>
      </div>
      <div style="display: flex;line-height:44px;border-bottom: 4px solid #eee;vertical-align:middle ">
        <div style="font-size: 14px; flex:1; vertical-align:middle">退货补运费</div>
        <div style="flex:1">全国包邮</div>
        <div style="flex:1">7天无理由退货</div>
        <div style="flex:1">
            <div>111</div>
            <div>111</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "storeinfo",
  components: {
  
  },
  props: {
      storeinfo: {
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
  
  }
}
</script>

<style scoped>

</style>