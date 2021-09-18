<template>
 <div class="base-info" v-if="Object.keys(goods).length!==0">
   <div class="info-title">{{goods.title}}</div>
   <div class="info-price">
     <span class="newPrice">{{goods.newPrice}}</span>
     <span class="oldPrice">{{goods.oldPrice}}</span>
     <span v-if="goods.discount" :style="{'background-color':goods.discountBgColor}" class="discount">{{goods.discount}}</span>
   </div>
   <div class="info-other">
     <span class="info-item">{{goods.columns[0]}}</span>
     <span class="info-item">{{goods.columns[1]}}</span>
     <span class="info-item">{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-service">
     <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
       <img :src="goods.services[index-1].icon">
       <span>{{goods.services[index-1].name}}</span>
     </span>
   </div>
 </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  data () {
    return {
    }
  },
  props:{
    goods:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .base-info{
    margin: 10px;
  }

  .info-title{
    font-weight: bold;
    font-size: 18px;
    color:rgb(49, 48, 48);
  }

  .info-price{
    margin-top:10px;
  }

  .newPrice{
    color: var(--color-high-text);
    font-size:22px;
    font-weight: bold;
    margin-right: 7px;
  }

  .oldPrice{
    font-size: 14px;
    color: rgb(173, 171, 171);
    margin-right: 7px;
    text-decoration:line-through;
  }

  .discount{
    font-size:17px;
    color:white;
    border-radius: 20%;
    padding: 1px;
  }

  .info-other{
    margin-top:12px;
    padding-bottom: 8px;
    display: flex;
    justify-content:space-between;
    font-size: 14px;
    color: rgb(173, 171, 171);
    border-bottom: 1px solid rgb(231, 231, 231);
  }

  .info-service{
    margin-top:20px;
    display: flex;
    justify-content:space-between;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 5px solid rgb(231, 231, 231);
  }

  .info-service img{
    width: 11px;
  }
</style>
