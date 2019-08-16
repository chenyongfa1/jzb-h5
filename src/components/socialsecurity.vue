<template>
  <div class="social">
    <HeadNav />
    <div class="content">
      <IsHeadEmty />
      <div class="socHeadImg">
        <img class="cz_img" src="../../static/images/socialsecurity/process1.png" alt="">
      </div>
      <Participants />
      <Setmeal />
      <PayOff />
      <Noticeorprocess />
      <van-button size="large" type="default">下一步</van-button>
      <Isfootemty />
    </div>
  </div>
</template>

<script>
  import HeadNav from "./common/header";
  import IsHeadEmty from "./common/isheademty";
  import Isfootemty from './common/isfootemty'
  import Participants from "./socialsecurity/participants"
  import Setmeal from "./socialsecurity/setmeal"
  import PayOff from "./socialsecurity/payoff"
  import Noticeorprocess from "./socialsecurity/noticeorprocess"
export default {
  name: 'socialsecurity',
  components: {
    HeadNav,
    IsHeadEmty,
    Participants,
    Setmeal,
    PayOff,
    Noticeorprocess,
    Isfootemty
  },

  data () {
    return {
    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<style scoped>
  .social{
    background: #F2F2F2;
  }
  .content{
    background: #f2f2f2;
  }
  .van-button--default{
    background: #F97A2E;
    color: #fff;
    font-size:.9rem;
    font-family:PingFangSC-Regular;
    margin-top: .8rem;
  }
  .van-hairline--bottom{
    background: #F2F2F2 !important;
  }
  .socHeadImg{
    background: #f2f2f2;
    padding: .75rem 0;
  }

</style>
