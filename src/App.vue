<template>
  <div id="app">
    <div>
     <keep-alive>
       <router-view v-if="$route.meta.keepAlive"/>
     </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
      <NavFoot />

    </div>

  </div>
</template>

<script>
  import NavFoot from "./components/common/footer";
  import HeadNav from "./components/common/header";
  export default {
    name: 'App',
    components:{
      NavFoot,
      HeadNav,
    },
    data(){
      return{
        title:this.$route.meta.title
      }
    },
    mounted() {
    }
  }

</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    margin:0;
    padding:0;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .cz_img{
    width: 100%;
    height: 100%;
  }
  body{
    background: #fff;
  }
  .pd16{
    padding:0 .8rem
  }
  p{
    margin: 0;
  }


  .mg16{
    margin: 0 .8rem;
  }
  .van-tabbar-item--active{
    color: #F97A2E ;
  }
  .van-picker__cancel{
    color: #999;
  }
  .van-tabs__line {
     height: 1px;
     background-color: #F97A2E;
   }
  .van-ellipsis{
    font-size: .8rem;
  }
  .van-tab--active {
    color: #F97A2E;
    font-size: .8rem;
  }
  .van-icon-play:before {
    color: #F97A2E;
  }
  .headerblank{
    height: 2.2rem;
  }
  .colff{
    background: #fff;
  }
  .colf2{
    background: #f2f2f2;
  }
  .van-uploader__upload{
    /*border:0 !important;*/
  }
  .van-uploader__upload{
    width: 8.15rem;
    height: 6.3rem ;
  }
  .van-uploader__input{
    z-index: 1;
  }
  /*身份证件上传*/
  .van-uploader__preview-image{
    width: 8.15rem;
    height: 6.3rem;

  }
  /*添加基数的label的class*/
  .labelBase{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #B2B2B2;
  }
  /*缴纳类型的radio的字体颜色*/
  .payTypeTop .van-radio__label{
     color: #666;
   }
  /*社保补缴的radio的字体颜色*/
  .right-ssoctitlebu .van-checkbox__label{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #666;
  }
  .fundtitle .van-checkbox__label{
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #666;
  }
  .soctitle .van-checkbox__label{
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #666;
  }
  /*底部弹窗单选择按钮字体*/
  .educationradio .van-radio__label{
    font-size: .8rem;
  }
  /*明细的字体颜色*/
  .colF97 span{
    color: #f97a2e;
  }
  .col333 span{
    color: #333;
  }
  /*明细的手风琴效果改变padding*/
  .deletalist .van-collapse-item__content{
    padding:0 .8rem;
  }
  /*交社保第二步骤的字体颜色val*/
  .social .van-field__body .van-field__control:disabled{
    color: #333 !important;
  }

</style>
