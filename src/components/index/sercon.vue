<template>
  <div class="service ">
     <div class="pd16">
       <h2>服务内容</h2>
       <div class="service-list">
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
       </div>
       <div class="indexImg">
         <img src="static/images/index/shebao1.png" alt="">
         <img src="static/images/index/gjj1.png" alt="">
       </div>
     </div>
    <div class="consultationImg pd16">
      <div class="swiper-container swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <router-link :to="{name:'interdetail'}"><img :src="Img + item.banner_url"/></router-link>
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
  data () {
    return {
      banner:''
    }
  },
  methods: {
    // 轮播图
    getBannerList: function () {
      let that = this
      this.$ajax.post(this.HOST + '/app/index/getBannerList')
        .then((res) => {
          this.banner = res.data.data.body
          setTimeout(function () {
            let mySwiper1 = new Swiper('.swiper-container2', {
              autoplay: false,
              loop:true,
            })
          })
        })

    },
  },
  mounted () {
    this.getBannerList()
  }
}
</script>

<style scoped>
  .service h2{
    font-size:.85rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding:.75rem 0;
  }
  .service-list{
    display: flex;
    justify-content: space-between;
  }
  .service-item{
    display: flex;
    flex-direction: column;
    font-size:.6rem;
    color: #999;
  }
  .service-item img{
    width: 2.25rem;
    height: 2.25rem;
  }
  .service-item span{
    display: inline-block;
    padding: .25rem 0;
  }
  .indexImg{
    display: flex;
    justify-content: space-between;
    padding-top: .25rem;
  }
  .indexImg img{
    width: 7.5rem;
    height: 2rem;
  }
  .consultationImg{
    width: 100%;
    height: 4.175rem;
    padding-top:.85rem
  }
  .consultationImg a{
    display: block;
    width: 100%;
  }
  .swiper-slide a img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
