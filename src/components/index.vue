<template>
  <div class="index">
    <navTitle/>
    <div class="content">
      <!--轮播图-->
      <indexbrannd/>
      <!--最新新闻-->
      <div class="news pd16">
        <div>
          <img src="static/images/index/horn.png" alt/>
        </div>
        <div>
          <img src="static/images/index/newest.png" alt/>
        </div>
        <div class="upbranner">
          <van-swipe style="height: 30px;width: 80vw;overflow: hidden;white-space: nowrap;padding-left: 2vw;"
                     :autoplay="3000"
                     :show-indicators="indicators"
                     vertical>
            <van-swipe-item v-for="(item,index) in list" :key="index">{{item}}</van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <serCon/>
      <interpretation/>
      <guarantee/>
<!--      <inputPhone />-->
      <Isfootemty/>
      <NavFoot />
    </div>
  </div>
</template>

<script>
    import navTitle from "./common/nav-title";
    import Isfootemty from "./common/isfootemty";
    import serCon from "./index/sercon";
    import inputPhone from "@/components/common/inputphone";
    import indexbrannd from "./index/indexbrannd";
    import NavFoot from "./common/footer";
    import interpretation from "./index/interpretation";
    import guarantee from "./index/guarantee";
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';


    export default {
        name: "index",
        components: {
            navTitle,
            serCon,
            indexbrannd,
            interpretation,
            inputPhone,
            guarantee,
            NavFoot,
            Isfootemty
        },
        data() {
            return {
                list: [],
                indicators: false,
            };
        },
        methods: {
            // 获取走马灯的数据
            getZmd() {
                let data = this.common.getsign()
                let that = this
                $.ajax({
                    url: this.HOST + '/app/index/rollOrders',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.list = r.data
                    }
                })
                let mySwiper1 = new Swiper('.swiper-container3', {
                    pagination: '.swiper-pagination',
                    direction: 'vertical',
                    autoplay: 500,
                    mousewheel: true,//是否支持滚轮
                    loop: true, //复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
                    slidesPerView: 10,
                    direction: 'vertical',
                    loop: true,
                    // 如果需要滚动条
                    scrollbar: '.swiper-scrollbar',
                })
            },
        },
        mounted() {
            this.getZmd()
        },
        created() {

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }

  .content {
    background: #fff;
  }

  .emty {
    height: 50px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-carousel__indicator button.el-carousel__button {
    width: 20px !important;
    background: red !important;
  }

  .index-banner {
    margin: 0.5rem 0 0;
  }

  /*最新资讯*/
  .news {
    display: flex;
    height: 1.45rem;
    line-height: 1.45rem;
    background-image: url("../../static/images/index/bgmsg.png");
    align-items: center;
    overflow: hidden;

  }

  .news > div:nth-child(1) {
    vertical-align: middle;
  }

  .news > div:nth-child(1) img {
    width: 0.5rem;
    height: 0.55rem;
  }
  .news > div:nth-child(2){
    padding-left: .5rem;
    display: flex;;
    align-items: center;
  }
  .news > div:nth-child(2) img {
    width: 1.25rem;
    height: 0.8rem;
  }

  .news > div:nth-child(3) {
    font-size: 0.6rem;
    color: #666666;
    vertical-align: middle;
  }

  .upbranner a {
    display: block;
    width: 100%;
    color: #666;
  }
</style>
