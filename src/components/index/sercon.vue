<template>
  <div class="service ">
    <div class="pd16">
      <h2>服务内容</h2>
      <div class="service-list">
        <div class="service-item" @click="toSocial">
          <img src="static/images/index/payback.png" alt="">
          <span>补缴社保</span>
        </div>
        <div class="service-item" @click="toSocial">
          <img src="static/images/index/fund.png" alt="">
          <span>补缴公积金</span>
        </div>
        <div class="service-item" @click="toAddedservice">
          <img src="static/images/index/server.png" alt="">
          <span>增值服务</span>
        </div>
        <div class="service-item" @click="toAddedservice">
          <img src="static/images/index/movesocial.png" alt="">
          <span>社保转移</span>
        </div>
        <div class="service-item" @click="toAddedservice">
          <img src="static/images/index/movefund.png" alt="">
          <span>公积金转移</span>
        </div>
      </div>
      <div class="indexImg">
        <img @click="toSocial" src="static/images/index/shebao1.png" alt="">
        <img @click="toSocial" src="static/images/index/gjj1.png" alt="">
      </div>
    </div>
    <div class="consultationImg">
      <div class="swiper-container swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <div @click="getKefu"><img :src="Img + item.banner_url"/></div>
          </div>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>

  </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';

    export default {
        name: 'serCon',
        data() {
            return {
                banner: ''
            }
        },
        methods: {
            // 轮播图
            getBannerList: function () {
                let that = this
                $.ajax({
                    url: this.HOST + '/app/index/getBannerList',
                    type: "POST",
                    data: {
                        position: 2,
                        terminal: 4,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.banner = r.data
                    }
                })
            },
            toast() {
                this.$toast({
                    message: '即将上线，敬请期待',
                    duration: Number(1500)
                })
            },
            toSocial() {
                this.$router.push({
                    name: 'socialsecurity'
                })
              // window.location.href = '/socialsecurity'
            },
            toAddedservice() {
                this.$router.push({
                    name: 'addedservice'
                })
            },
            getKefu(){
                window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
            },
        },
        mounted() {
            this.getBannerList()
        }
    }
</script>

<style scoped>
  .service h2 {
    font-size: .85rem;
    font-family: PingFangSC-Regular;
    color: #333;
    padding: .75rem 0;
  }

  .service-list {
    display: flex;
    justify-content: space-between;
  }

  .service-item {
    display: flex;
    flex-direction: column;
    font-size: .6rem;
    color: #999;
  }

  .service-item img {
    width: 2.25rem;
    height: 2.25rem;
  }

  .service-item span {
    display: inline-block;
    padding: .25rem 0;
  }

  .indexImg {
    display: flex;
    justify-content: space-between;
    padding-top: .25rem;
  }

  .indexImg img {
    width: 7.5rem;
    height: 2rem;
  }

  .consultationImg {
    width: 100%;
    height: 4.175rem;
    padding-top: .85rem
  }

  .consultationImg a {
    display: block;
    width: 100%;
  }

  .swiper-slide a img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swiper-slide img {
    width: 100%;
    height: 4.15rem;
    overflow: hidden;
  }
</style>
