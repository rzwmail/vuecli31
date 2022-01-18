<template>
  <div class="cart-list">
	  <scroll class="content" ref="myscroll">
		  <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"/>
	  </scroll>
  </div>
</template>

<script> 
import {mapGetters} from 'vuex'
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  data() {
	return {
	
	}
  },
  components: {
    Scroll,
    CartListItem
  
  },
  methods: {
  
  },
  created() {
  
  },
  mounted() {
  
  },
  activated(){
	  this.$refs.myscroll.scroll.refresh()
  },
  computed: {
	  ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
	.content {
		height: calc( 100vh - 44px - 49px);
		overflow: hidden;
	}
</style>