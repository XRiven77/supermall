<template>
 <div class="shopInfo">
   <div class="shopBar">
     <img class="shopLogo":src="shop.logo"> 
     <div class="shopName">{{shop.name}}</div>
   </div>
   <div class="shopOther">
     <div class="info">
       <div class="sales">
         <div class="info-number">{{(shop.sells/10000).toFixed(1)}}万</div>
         <div class="info-name">总销量</div>
       </div>
       <div class="allGoods">
        <div class="info-number">{{shop.goodsCount}}</div>
        <div class="info-name">全部宝贝</div>
       </div>
     </div>
     <div class="eval">
       <div class="desc" v-for="item in shop.score">
        <div class="desc-name">{{item.name}}</div>
        <div class="desc-number" :style="{'color':item.isBetter ? 'rgb(255, 37, 37)' : 'green' }" >{{item.score}}</div>
        <div class="desc-height" :class="{'red':item.isBetter,'green':!item.isBetter}">{{item.isBetter?"高":"低"}}</div>
       </div>
     </div>
   </div>
   <div class="intoShop">
     <button>进店逛逛</button>
   </div>
 </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data () {
    return {
    }
  },
  props:{
    shop:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shopInfo{
    padding-bottom: 20px;
    border-bottom: 5px solid rgb(238, 238, 238);
  }

  .shopBar{
    display:flex;
    margin:10px;
    align-items: center;
    margin-top: 30px;
  }

  .shopBar img{
    width:60px;
    margin-right: 10px;
  }

  .shopName{
    font-size:18px;
  }

  .shopOther{
    display:flex;
    margin-top: 15px;
    align-items: center;
    text-align:center;
  }
  
  .info{
    display:flex;
    border-right: 1px solid rgb(216, 216, 216);
    flex:1;
  }

  .eval, .sales, .allGoods{
    flex:1;
  }

  .sales{
    margin-right:-50px;
  }

  .desc{
    margin-bottom: 10px;
  }

  .desc-name{
    width: 80px;
    margin-left:25px;
    margin-right:-10px;
  }

  .desc-number{
    width: 35px;
    margin-left: 10px;
    text-align: left;
  }

  .desc-height{
    margin-left: 10px;
  }

  .info-name{
    font-size: 14px;
  }
  
  .info-number{
    font-size:21px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .desc{
    display: flex;
  }

  .red{
    color: white;
    background-color:rgb(255, 37, 37);
  }
  
  .green{
    color: white;
    background-color:green;
  }
  
  .intoShop{
    text-align: center;
    margin: 10px 0;
  }

  .intoShop button{
    width: 150px;
    height: 32px;
    background-color:rgb(223, 234, 236);
    border: none;
    border-radius:10px;
  }
</style>
