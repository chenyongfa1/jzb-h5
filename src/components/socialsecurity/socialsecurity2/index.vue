<template>
    <div>
      <HeadNav />
      <div class="content">
        <IsHeadEmty />
        <div class="socHeadImg">
          <img class="cz_img" src="../../../../static/images/socialsecurity/process2.png" alt="">
        </div>
        <Socialinfo />
      </div>

    </div>
</template>

<script>
  import HeadNav from "../../common/header";
  import IsHeadEmty from "../../common/isheademty";
  import Socialinfo from "./socialinfo";
    export default {
        name: "socialsecurity2",
      components:{
          HeadNav,
          IsHeadEmty,
          Socialinfo
      },
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  .content{
    background: #f2f2f2;
  }
  .socHeadImg{
    padding: .75rem 0;
  }
</style>
