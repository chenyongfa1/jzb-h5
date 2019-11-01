<template>
  <!--头部标题-->
  <header class="bar bar-nav">
    <h1 class="title">桔子保</h1>
    <div class="title-icon">
      <span><img @click="kefuImg" class="cz_img" src="../../../static/images/index/kefu.png" alt="客服"></span>
      <span><img class="cz_img" src="../../../static/images/index/news.png" alt="消息"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navTitle',
  data () {
    return {

    }
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
      console.log(1)
    },
      kefuImg() {
          window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
      },
  }
}
</script>

<style scoped>
  .title{
    font-family:PingFangSC-Regular;
    font-size: .9rem;
    color: #333333;
    position:fixed;
    background: #fff;
  }
  .title-icon{
    position: absolute;
    right: 1.05rem;
    top: .65rem;
  }
  .title-icon span:nth-child(1){
    display: inline-block;
    width: 1.15rem;
    height: 1.05rem;
  }
  .title-icon span:nth-child(2){
    display: inline-block;
    width: 1.05rem;
    height: 1.05rem;
    margin-left: .625rem;
  }
  .bar{
    position: fixed;
    top: 0;
  }
  .back{
    width: .5rem;
    height: .85rem;
  }
  .kefuImg{
    width: 1.15rem;
    height: 1.05rem;
  }
</style>
