<template>
 <div class="cart">
   <!-- 导航 -->
   <nav-bar class="detail-nav">
     <div slot="center">购物车({{cartLength}})</div>
   </nav-bar>
   <!-- 商品列表 -->
   <scroll class="wrapper" ref="scroll">
     <cart-list></cart-list>
   </scroll>
   <!-- 底部汇总 -->
   <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
 </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  components:{
    Scroll,
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength
    // }
    // 两种语法
    ...mapGetters(['cartLength'])
    // ...mapGetters({
    //   length:'cartLength',
    //   list:'cartList'
    // })
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .detail-nav{
    background-color: var(--color-tint);
    color: white;
  }

  .wrapper {
    height: calc(100vh - 44px - 49px - 30px)
  }

  .bottom-bar{
    height: 30px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(241, 241, 241);
  }
</style>
