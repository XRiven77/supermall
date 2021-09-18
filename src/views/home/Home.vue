<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <tab-control :titles="titles" class="tab-control" @getIndex="getIndex" ref="tabControl1" :class="{top:isTop}" v-show="isTop"></tab-control>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="scroll" :pullUpLoad="true" @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" class="tab-control" @getIndex="getIndex" ref="tabControl2" ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShow"></back-top>


  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from "components/common/navbar/NavBar"
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  
  import { backTopMixin } from "common/mixin"

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"
  import {debounce} from "common/utils"

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        results: {},
        currentType: 'pop',
        tabOffsetTop:0, 
        isTop:false,
        saveY:0
      }
    },
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins:[backTopMixin],
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {

      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
    },
    mounted(){
      // 1.监听item中图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh,50);
      this.$bus.$on('homeImageLoad',()=>{
        refresh()
      })

      // 2.获取tabControl的offestTop

    },
    destroyed(){
      console.log('home destroyed')
    },
    methods: {
      // 网络请求相关的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].page = res.data.page
          this.goods[type].list.push(...res.data.list)

          this.$refs.scroll.finishPullUp()
        })
      },
      // 事件监听的方法
      getIndex(data) {
        switch (data) {
          case 0: this.currentType = 'pop'; break;
          case 1: this.currentType = 'new'; break;
          case 2: this.currentType = 'sell'; break;
        }
        this.$refs.tabControl1.currentIndex = data;
        this.$refs.tabControl2.currentIndex = data;
      },
      scroll(position) {
        // 1.判断BackTop是否显示
        if(position.y>-1000){
          this.isShow=false
        }else{
          this.isShow=true
        }

        // 2.决定TabControl是否吸顶（position：fixed）
        if(position.y<-this.tabOffsetTop){
          this.isTop=true
        }else{
          this.isTop=false
        }
      },
      pullingUp(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  .home {
    padding-top: 44px;
    height: 100vh;

    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .wrapper {
    /* height:calc(100% - 49px); */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .backTop {
    position: static;
    right: 0;
  }
</style>