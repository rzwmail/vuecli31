<template>
  <div class="detail-swiper">
      <swiper>
          <swiper-item v-for="(item,index) in detailInfo.topImages" :key="index">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>   
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  
  },
  props: {
      detailInfo: {
          type: Object,
          default(){
              return {}
          }
      }
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
  
  }
}
</script>

<style scoped>

</style>