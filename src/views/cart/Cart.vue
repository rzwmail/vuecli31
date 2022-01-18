<template>
  <div class="cart">
    <nav-bar><div slot="center">购物车({{cartLength}})</div></nav-bar>

    <cart-list></cart-list>

    <cart-bottom-bar/>
    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  
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
  
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color:pink;
    color: #fff;
    font-weight: 700;
  }
</style>