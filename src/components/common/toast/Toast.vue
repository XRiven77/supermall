<template>
 <div class="toast" v-show="isShow">
   {{ message}}
 </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message='默认文字', duration=1500) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    font-size: 18px;
    position:fixed;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    color:white;
    padding: 8px 10px;
    background-color: rgba(20, 20, 20, 0.733);
    z-index: 10;
  }
</style>
