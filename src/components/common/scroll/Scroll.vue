<template>
  <div class="mywrapper" ref="mywrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    isPullUpload: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.mywrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.isPullUpload,
      observeDOM: true,
      observeImage: true,
    })
    if(this.probeType >=2 ){
      this.scroll.on('scroll', position =>{
        this.$emit('scroll',position)
      })
    }
    if (this.isPullUpload){
      this.scroll.on('pullingUp', () =>{
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
.mywrapper {
  /* height: 100%; */
}
</style>