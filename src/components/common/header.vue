<template>
  <div>
    <van-nav-bar :class="[$route.meta.isColor ? 'colff' : 'colf2']" :title="title"
                 @click-left="onClickLeft">
      <img v-show="$route.meta.isLeft==undefined||$route.meta.isLeft" left-arrow class="back"
           src="../../../static/images/common/back.png" slot="left" alt="">
      <img v-show="$route.meta.isRight==undefined||$route.meta.isRight" @click="kefuImg" class="kefuImg"
           src="../../../static/images/index/kefu.png" slot="right" alt="">
    </van-nav-bar>
  </div>
</template>

<script>
    export default {
        name: "headNav",
        data() {
            return {
                title: this.$route.meta.title
            }
        },
        methods: {
            onClickLeft() {
                this.$router.back()
            },
            kefuImg() {
                window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
            },
        },

        mounted() {
        },
    }
</script>

<style scoped>
  /*.van-nav-bar__right{
    bottom: -10px;
    right: 22px;
  }*/
  .back {
    width: .5rem;
    height: .85rem;
  }

  .kefuImg {
    width: 1.15rem;
    height: 1.05rem;
  }

  .van-nav-bar {
    z-index: 22;
  }

</style>
