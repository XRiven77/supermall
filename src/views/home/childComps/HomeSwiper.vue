<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" >
        <a :herf='item.link'>
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'
  export default {
    name: 'HomeSwiper',
    data() {
      return {
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>