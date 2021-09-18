<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="sizes" v-for="(table,index) in paramInfo.sizes">
      <tr v-for="(tr,indey) in table">
        <td v-for="(td,indez) in tr" :class="{'first-td':indez==0,'info-td':indez!=0}">{{td}}</td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="first-td">{{info.key}}</td>
        <td class="value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamInfo',
    data() {
      return {
      }
    },
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    margin: 20px 10px 0;
  }

  .sizes tr {
    display: flex;
    width: 100vw;
  }

  .info-td {
    flex: 1;
    float: left;
  }

  .first-td {
    width: 100px;
  }

  td {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid rgb(224, 224, 224);
  }

  .value {
    color: var(--color-high-text);
  }

  .infos {
    margin-top: 10px;
  }

  .info-img img {
    width: 100%;
  }
</style>