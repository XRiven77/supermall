<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <i class="icon service"></i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="icon select"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data() {
      return {
      }
    },
    methods:{
      addCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 52px;
    background-color: white;
    position: relative;
    bottom: 0px;
    right: 0;
    left: 0;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position: 0 -54px;
  }

  .bar-left .shop {
    background-position: 0 -98px;
  }

  .bar-item div {
    flex: 1
  }

  .bar-left {
    font-size: 14px;
  }

  .cart {
    background-color: #ffe817
  }

  .buy {
    background-color: rgb(253, 99, 150);
    color: white;
  }

  .bar-right {
    line-height: 52px;
  }
</style>