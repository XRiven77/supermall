<template>
  <div class="comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images">
      </div>
      <div class="info-other">
        <span class="data">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from '@/common/utils'
  export default {
    name: "DetailComment",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>
</script>

<style scoped>
  .comment {
    margin: 10px 10px 30px;
  }

  .comment-header {
    overflow: hidden;
    line-height: 50px;
    border-bottom: 2px solid rgb(224, 224, 224);
  }

  .header-title {
    float: left;
    font-size: 18px;
  }

  .header-more {
    float: right;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 18px;
  }

  .user-info img {
    width: 50px;
    margin-right: 10px;
  }

  .info-other{
    color: rgb(185, 185, 185);
    margin: 10px 0;
  }

  .data{
    margin-right: 10px;
  }

  .info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
  
</style>