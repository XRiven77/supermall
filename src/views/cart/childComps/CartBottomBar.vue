<template>
  <div class="bottom-bar">
    <div class="info">
      <check-button :isCheck="getAllCheck" @click.native="allCheck"></check-button>
      <span class="all-in">全选</span>
      <span>合计:￥{{getTotal}}</span>
    </div>
    <div class="calu" @click="caluClick">去计算({{getCount}})</div>

  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import { mapGetters, getCount, getAllCheck } from 'vuex'

  import { AllCheck } from "@/store/mutations-types"

  export default {
    name: 'CartBottomBar',
    data() {
      return {
      }
    },
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['getTotal', 'getCount','getAllCheck']),
      // getTotal(){
      //   return this.$store.state.cartList.filter(item=>{
      //     return item.check
      //   }).reduce((preValue,item)=>{
      //     return preValue + item.price*item.count;
      //   },0)
      // }
      // getCount(){
      //   return this.$store.state.cartList.filter(item=> item.check).length;
      // }
      // getAllCheck() {
      //   if (this.$store.state.cartList.length == 0) return false
      //   return !(this.$store.state.cartList.filter(item => !item.check).length)
      //   return !(this.$store.state.cartList.find(item => !item.check))
      // }
    },
    methods: {
      allCheck() {
        // if (this.getAllCheck) {
        //   this.$store.state.cartList.forEach(item => item.check = false)
        // } else {
        //   this.$store.state.cartList.forEach(item => item.check = true)
        // }
        this.$store.commit(AllCheck);
      },
      caluClick(){
        if(this.getCount==0){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 100%
  }

  .info {
    width: 250px;
    display: flex;
    margin: 0 10px;
  }

  .all-in {
    color: rgb(146, 146, 146);
    margin-right: 20px;
  }

  .calu {
    flex: 1;
    height: 100%;
    line-height: 100%;
    background-color: rgb(255, 44, 29);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>