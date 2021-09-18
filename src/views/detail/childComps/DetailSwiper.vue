<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImages" :key="item.id" class="swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper"
  export default {
    name: 'DetailSwiper',
    data() {
      return {
      }
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swiper-item {
    height: 300px;
  }
  .swiper-item img {
    width: 100%;
    height: 150%;
  }
</style>