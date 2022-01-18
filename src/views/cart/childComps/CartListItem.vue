<template>
  <div>
	  <div class="shop-item">
		  <div class="item-selector">
			  <check-button :isCheck="product.checked" @click.native="checkClick"/>
		  </div>
		  <div class="item-img">
			  <img :src="product.image" alt="">
		  </div>
		  <div class="item-info">
			  <div class="title">{{product.title}}asfdlkjsdfsdfdsfdsfsdfsdfasdfasdfasdfasdfasfdasdfaldfjl1</div>
			  <div class="meme">{{product.meme}}1</div>
			  <div class="info-bottom">
				  <div class="price">￥{{product.price}}1</div>
				  <div class="count">×{{product.count}}1</div>
			  </div>
		  </div>
	  </div>
  </div>
  
</template>

<script>
import CheckButton from '../../../components/CheckButton.vue'

export default {
  name: 'CartListItem',
  props: ['product'],
  data() {
	return {
	
	}
  },
  components: {
    CheckButton
  
  },
  methods: {
	  checkClick(){
		  this.product.checked = !this.product.checked
	  }
  },
  created() {
  
  },
  mounted() {
  
  }

}
</script>

<style scoped>
	.shop-item{
		display: flex;
		width: 100%;
		padding: 5px;
		border-bottom: 1px solid #ccc;
	}
	.item-selector {
		width: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-img img{
		height: 80px;
		width: 100px;
		display: block;
		border-radius: 8px;
	}
	.item-info{
		font-size: 17px;
		color: #333;
		padding: 5px 15px;
		overflow: hidden;
	}

	.title, .meme{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 14px;
		color: #666;
	}
	.title {
		font-weight: 1000;
		font-size: 16px;
	}
	.info-bottom{
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
	}
	.price{
		color: red;
	}
	
</style>