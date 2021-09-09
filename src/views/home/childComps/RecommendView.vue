<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href='item.link' alt="">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    data() {
      return {
      }
    },
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    width: 100%;

    padding: 10px 0 20px;
    border-bottom: 10px solid rgb(240, 240, 233);
  }
  .recommend-item img{
    width: 85%;
    margin-bottom: 10px;
  }
  .recommend-item{
    flex:1;
  }
</style>