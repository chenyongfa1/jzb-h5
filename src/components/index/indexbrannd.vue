<template>
  <div class="brannd pd16">
    <div class="swiper-container swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <router-link :to="{name:'interdetail'}"><img :src="Img + item.banner_url"/></router-link>
        </div>
      </div>
      <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: 'indexbrannd',
    data() {
      return {
        banner: [],

      }
    },
    methods: {
      // 轮播图
      getBannerList: function () {
        let that = this
        this.$ajax.post(this.HOST + '/app/index/getBannerList')
          .then((res) => {
            this.banner = res.data.data.head
            setTimeout(function () {
              let mySwiper1 = new Swiper('.swiper-container1', {
                pagination: {
                  el: '.swiper-pagination',
                },
                type: 'custom',
                autoplay: true,
                loop:true
                /*observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper*/
              })
            })
          })

      },
      test() {

      }
    },
    mounted() {
      this.getBannerList()
      this.test()

    },
    created() {


    }
  }

</script>

<style scoped>

  .brannd {
    margin-top: .25rem;
  }

  .swiper-slide a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .swiper-slide a img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
