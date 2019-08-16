<template>
    <div>
      <HeadNav />
      <div class="content">
        <IsHeadEmty />
        <div class="socHeadImg">
          <img class="cz_img" src="../../../../static/images/socialsecurity/process2.png" alt="">
        </div>
        <p class="ps-soc1">注：社保和公积金业务同时办理只收一项服务费</p>
        <Social />
        <Fund />
        <Isfootemty />
        <Immpay />
      </div>
    </div>
</template>

<script>
  import HeadNav from "../../common/header";
  import IsHeadEmty from "../../common/isheademty";
  import Isfootemty from '../../common/isfootemty'
  import Social from "./social"
  import Fund from "./fund"
  import Immpay from "./immpay"
    export default {
        name: "index",
        components:{
          HeadNav,
          IsHeadEmty,
          Social,
          Fund,
          Immpay,
          Isfootemty

        }
    }
</script>

<style scoped>
  .socHeadImg{
    margin:.8rem 0;
  }
  .ps-soc1{
    font-size:.6rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color: #F25454;
    padding:0 .75rem;
  }
</style>
