<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
          <div>
              <i class="icon service"></i>
              <span class="text">客服</span>
          </div>
          <div>
              <i class="icon shop"></i>
              <span class="text">店铺</span>
          </div>
          <div>
              <i class="icon select"></i>
              <span class="text">收藏</span>
          </div>
      </div>
      <div class="bar-item bar-right">
          <div class="cart" @click="addToCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>

export default {
  name: "BottomBar",
  components: {
  
  },
  props: {
  
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
      addToCart(){
          this.$emit('addCart')
      }
  }
}
</script>

<style scoped>
    .bottom-bar{
        height: 49px;
        background-color: #fff; 
        position: inherit;
        display: flex;
        text-align: center;
        border-top: 2px solid #ddd;

    }
    .bar-left, .bar-right{
        display: flex;
        flex: 1;
    }
    .bar-left>div, .bar-right>div {
        flex: 1;
    }
    .cart{
        background-color: yellow;
                line-height: 49px;
    }
    .buy{
        background-color: pink;
                line-height: 49px;
    }
    .icon {
        display: block;
        widows: 20px;
        height: 20px;
        background: url('../../../assets/img/tabbar/msg.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin: 5px 0 3px 15px
    }
</style>