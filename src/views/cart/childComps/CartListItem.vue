<template>
  <div class="shop-item">
    <div class="check">
      <check-button @click.native="checkClick" :isCheck="product.check"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="item-bottom">
        <span class="item-price">￥{{product.price}}</span>
        <span class="item-count">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import {
    Change_Check
  } from '@/store/mutations-types'

  export default {
    name: 'CartListItem',
    data() {
      return {
        isActive: true
      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        this.$store.commit(Change_Check, this.product)
      }
    }
  }
</script>

<style scoped>
  .shop-item {
    display: flex;
    border-bottom: 1px solid rgb(184, 182, 182);
  }

  .check {
    width: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
  }

  .item-img {
    width: 100px;
    margin: 7px 2px;
  }

  .item-img img {
    width: 100px;
    height: 120px;
    border-radius: 5%;
    overflow: hidden;
  }

  .item-info {
    flex: 1;
    margin: 7px;
    overflow: hidden;
  }

  .item-title,
  .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-title {
    font-size: 20px;
    color: black;
    margin-bottom: 18px;
  }

  .item-bottom {
    margin-top: 30px;
  }

  .item-price {
    font-size: 20px;
    color: orangered;
  }

  .item-count {
    float: right;
    font-size: 20px;
    color: black;
  }
</style>