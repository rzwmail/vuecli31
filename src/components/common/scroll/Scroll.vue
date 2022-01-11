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
      default: 2,
    },
    isPullUpload: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.mywrapper, {
      probeType: 2,
      click: true,
      pullUpLoad: true,
      observeDOM: true,
      tap: true,
    });
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
.mywrapper {
  /* height: 100%; */
}
</style>