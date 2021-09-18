<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="navBar"></detail-nav-bar>
    <scroll class="wrapper" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageload="imageload"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment :commentInfo="commentInfo" ref="comment"></detail-comment>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShow"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar"
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DetailParamInfo from "./childComps/DetailParamInfo"
  import DetailComment from "./childComps/DetailComment"
  import DetailBottomBar from "./childComps/DetailBottomBar"

  import Scroll from "components/common/scroll/Scroll"
  import GoodsList from "components/content/goods/GoodsList"

  import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail"
  import { debounce } from "common/utils"
  import { backTopMixin } from "common/mixin"

  import { mapActions } from 'vuex'


  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        refresh: null,
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        listisShow: false,
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailComment,
      GoodsList,
      DetailBottomBar,
    },
    mixins: [backTopMixin],
    created() {
      // 1.保存传入的id
      this.iid = this.$route.params.id

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        // 1.获取顶部的图片轮播数据
        this.topImages = res.result.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo)

        // 3.创建店铺信息
        this.shop = new Shop(res.result.shopInfo)

        // 4.获取商品详情信息
        this.detailInfo = res.result.detailInfo

        // 5.获取参数信息
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        // 6.获取评论信息
        if (res.result.rate.list) {
          this.commentInfo = res.result.rate.list[0]
        }
      })

      // 3.获取推荐信息
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      // 4.给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // console.log(this.themeTopYs)
      }, 500)
    },
    mounted() {
      this.refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('detailImageLoad', () => {
        this.refresh()
      })
    },
    methods: {
      ...mapActions(['addCart']),
      imageload() {
        this.refresh()
        this.getThemeTopY()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
      },
      scroll(position) {
        const positionY = -position.y
        let length = this.themeTopYs.length
        for (let i = 0; i < this.themeTopYs.length; i++) {
          if (i != this.currentIndex && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
            this.currentIndex = i;
            this.$refs.navBar.currentIndex = this.currentIndex;
          }
        }

        if (position.y > -1000) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        console.log(product)

        // 2.将商品添加到购物车
        this.addCart(product).then(res => {
          // console.log(this.$toast)
          this.$toast.show(res)
        })
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res)
        // })
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .wrapper {
    height: calc(100vh - 44px - 52px)
  }
</style>