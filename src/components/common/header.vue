<template>
    <div >
      <van-nav-bar :class="[$route.meta.isColor ? 'colff' : 'colf2']" :title="title"
                   @click-left="onClickLeft" >
        <img left-arrow class="back"
             src="../../../static/images/common/back.png" slot="left" alt="">
        <img v-show="$route.meta.isRight==undefined||$route.meta.isRight"  class="kefuImg"
             src="../../../static/images/index/kefu.png" slot="right" alt="">
      </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "headNav",
        data(){
            return{
              title:this.$route.meta.title
            }
        },
        methods: {
          onClickLeft() {
            this.$router.go(-1)

          },
          onClickRight() {
          },
        },

      mounted () {
      },
    }
</script>

<style scoped>
  /*.van-nav-bar__right{
    bottom: -10px;
    right: 22px;
  }*/
  .back{
    width: .5rem;
    height: .85rem;
  }
  .kefuImg{
    width: 1.15rem;
    height: 1.05rem;
  }
  .van-nav-bar{
    z-index: 22;
  }

</style>
