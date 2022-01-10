<template>
  <div class="goods-list-item">
      <div><img :src="goodsItem.img" alt=""/></div>
      <div class="goods-info">
          <p class="goods-title">{{goodsItem.title}}</p>
          <span class="goods-price">{{goodsItem.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        goodsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .goods-list-item{
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }
    .goods-list-item img{
        width: 100%;
        border-radius: 10px;
    }
    .goods-list-item .goods-info{
        position: relative;
    }
    .goods-list-item .goods-title::before{
        content: ":>";
        position: absolute;
        width: 14px;
        height: 14px;
        left: 15px;
        top: 0px;
    }
    .goods-list-item .goods-info{    
        font-size: 14px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-list-item .goods-price{
        color: red;
    }

</style>