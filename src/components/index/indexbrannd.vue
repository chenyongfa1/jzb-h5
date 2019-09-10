<template>
  <div class="brannd pd16">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <div class="swiper-slide" >
          <router-link :to="{name:'interdetail'}"><img :src="Img + item.banner_url"/></router-link>
        </div>
      </van-swipe-item>
    </van-swipe>
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
          $.ajax({
              url: this.HOST+'/app/index/getBannerList',
              type : "POST",
              data : {
                  position:1,
                  terminal:4,
              },
              dataType : "JSON",
              success : function(r) {
                  that.banner = r.data
              }
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
