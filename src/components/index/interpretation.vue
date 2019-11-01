<template>
  <div class="interpretation ">
    <div class="pd16">
      <h2>政策解读</h2>
      <div class="interpretation-list">
        <div  class="interpretation-item"
             v-for="(item,index) in
        interpretation" :key="item.id" @click="toNewpage(item.cateId,item.name)">
        <!--<div  class="interpretation-item"
              v-for="(item,index) in
        interpretation" :key="item.id" @click="toast">-->
          <img :class=img+item.id :src="item.img_url" alt="">
          <span>{{item.name}}</span>
        </div>

      </div>
    </div>
    <div class="consultationImg pd16">
      <van-swipe :show-indicators="showIndicators">
        <van-swipe-item v-for="(item,index) in banner" :key="index">
          <div class="swiper-slide">
            <div><img class="bannerimg" :src="Img + item.banner_url"/></div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: 'interpretation',
    data() {
      return {
        interpretation: [
          {
            img_url: 'static/images/index/pocail1.png',
            name: '看病买药',
            id: 1,//决定样式
            cateId: 57
          },
          {
            img_url: 'static/images/index/pocail2.png',
            name: '买房限购',
            id: 2,
            cateId: 58
          },
          {
            img_url: 'static/images/index/pocail3.png',
            name: '买车摇号',
            id: 3,
            cateId: 59
          },
          {
            img_url: 'static/images/index/pocail4.png',
            name: '养老生活',
            id: 4,
            cateId: 60
          },
          {
            img_url: 'static/images/index/pocail5.png',
            name: '产检生育',
            id: 5,
            cateId: 61
          },
          {
            img_url: 'static/images/index/pocail6.png',
            name: '积分落户',
            id: 6,
            cateId: 62
          },
          {
            img_url: 'static/images/index/pocail7.png',
            name: '孩子上学',
            id: 7,
            cateId: 63
          },
          {
            img_url: 'static/images/index/pocail8.png',
            name: '异地高考',
            id: 8,
            cateId: 64
          },
        ],
        banner: [],
        img: 'img',
        showIndicators: false
      }
    },
    methods: {
      // 政策解读
      getPolicy() {
        /*this.$ajax.post(this.HOST + '/app/index/getPolicy')
            .then((res) => {
                this.interpretation = res.data.data.policy

            })*/
      },
      // 轮播图
      getBannerList: function () {
        let that = this
        $.ajax({
          url: this.HOST + '/app/index/getBannerList',
          type: "POST",
          data: {
            position: 3,
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
      toNewpage(cateId,name){
        this.$router.push({
          name:'newpagedetail',
          query:{
            id:cateId,
            name:name
          }
        })
      }
    },
    mounted() {
      this.getPolicy()
      this.getBannerList()
    },
    created() {

    }

  }
</script>

<style scoped>
  .interpretation {
    padding-bottom: .5rem;
  }

  .interpretation h2 {
    font-size: .85rem;
    font-family: PingFangSC-Regular;
    color: #333;
    padding: .75rem 0;
  }

  .interpretation-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .interpretation-item {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: .6rem;
    color: #999;
    width: 25%;
    border-bottom: 1px solid #E6E6E6;
  }

  .interpretation-item:after {
    content: '';
    position: absolute;
    top: 16%;
    right: 0%;
    width: 1px;
    height: 1.75rem;
    background: #E6E6E6;
  }

  .interpretation-item:nth-child(4n):after {
    width: 0;
  }

  .interpretation-item img {
    margin-top: .5rem;
  }

  .interpretation-item span {
    display: inline-block;
    padding: .25rem 0;
  }

  .indexImg img {
    width: 7.5rem;
    height: 2rem;
  }

  .consultationImg {
    width: 100%;
    height: 4.075rem;
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

  .bannerimg {
    width: 100%;
    height: 4.1rem;
  }

  /*设置政策解读图片大小*/
  .img1 {
    width: 1.3rem;
    height: 1.5rem;
  }

  .img2 {
    width: 1.55rem;
    height: 1.45rem;
  }

  .img3 {
    width: 1.45rem;
    height: 1.2rem;
  }

  .img4 {
    width: 1.25rem;
    height: 1.45rem;
  }

  .img5 {
    width: .95rem;
    height: 1.5rem;
  }

  .img6 {
    width: 1.65rem;
    height: 1.2rem;
  }

  .img7 {
    width: 1.55rem;
    height: 1.35rem;
  }

  .img8 {
    width: 1.75rem;
    height: 1.3rem;
  }
</style>
