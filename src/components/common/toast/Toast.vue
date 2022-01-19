<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>

export default {
  name: "Toast",
  components: {
  
  },
  data() {
    return {
        message: '',
        isShow: false
    }
  },
  created() {
  
  },
  mounted() {
  
  },
  methods: {
    show(message, duration=2000){
      this.isShow = true 
      this.message = message
      setTimeout(()=>{
        this.isShow=false
        this.message=''
      },duration)
    }
  }
}
</script>

<style scoped>
    .toast{
        background-color: rgba(0, 0, 0, .7);
        color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-70%);
        padding: 8px 10px;
        font-size: 16px;
        z-index: 99;
    }
</style>