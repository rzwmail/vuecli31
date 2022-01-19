<template>
  <div class="check-content">
    <check-button class="check-button" :isCheck="isSelectAll" 
      @click.native="checkClick"/><span>全选</span>
    <div class="total">合计：Y {{ totalPrice }}</div>
    <div @click="calcClick" class="calc">去计算 ({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/CheckButton.vue";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.reduce((total, item) => {
        if (item.checked){
          return total + item.price * item.count;
        } else{
          return total
        }
      }, 0);
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if(this.$store.state.cartList.length == 0) return false
      return !this.$store.state.cartList.some(item => !item.checked)
    }
  },
  watch: {
    
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      console.log(123)
      if(!this.isSelectAll){
        this.$toast.show('请选择采购的商品')
      }else{
        this.$toast.show('转到结算')
      }
    }
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.check-content {
  height: 44px;
  background-color: #ddd;
  display: flex;
  font-size: 17px;
  display: flex;
  line-height: 44px;
  text-align: center;
}
.check-button {
  margin: 10px;
  width: 20px;
  height: 20px;
}
.total {
  flex: 1;
}
.calc {
  width: 100px;
  background-color: red;
}
</style>