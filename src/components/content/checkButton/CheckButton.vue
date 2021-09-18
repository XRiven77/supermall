<template>
 <div class="check-button" :class="{'check': isCheck}">
   <img src="~assets/img/cart/tick.svg" alt="">
 </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data () {
    return {
    }
  },
  props:{
    isCheck:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
  .check-button{
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid rgb(196, 196, 196);
  }

  .check{
    background-color: var(--color-tint);
    border: 1px solid var(--color-tint);
  }
</style>
