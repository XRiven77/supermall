<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="backClick">
        <img src='~assets/img/common/back.svg' alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item" :class="{active: index === currentIndex}"
          @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: 'DetailNavBar',
    data() {
      return {
        titles: ['商品', '参数', '评价', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .back{
    line-height:44px;
    text-align: center;
  }
  .back img {
    vertical-align: middle;
  }
</style>