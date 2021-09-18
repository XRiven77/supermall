<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index===currentIndex}" @click="controlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        currentIndex:0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      controlClick(index){
        this.currentIndex=index;
        this.$emit('getIndex',index);

      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height:40px;
    background-color:#fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color:var(--color-high-text);
  }
  .active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>