<template>
  <div class="check-button" :class="{check: isCheck}">
	  <img src="../assets/img/check.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'CheckButton',
  data() {
	return {
	
	}
  },
  props: {
	  isCheck: {
		  type: Boolean,
		  default: true
	  }
  },
  components: {
  
  },
  methods: {
  
  },
  created() {
  
  },
  mounted() {
  
  }

}
</script>

<style scoped>
	.check-button{
		border-radius: 50%;
		border: 2px solid #aaa;
	}
	.check-button img {
		width: 100%;
		height: 100%;
	}
	.check {
		background-color: red;
		border-color: red;
	}

</style>