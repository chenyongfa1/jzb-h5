<template>
  <div class="payBack content">
    <HeadNav />
    <div>
      <div class="paybackdes pd16">
        <h3>补缴须知</h3>
        <p>补缴费用：<span>200.00/次</span> </p>
        <p>补缴不支持隔月补，须与正常申报月份一同参保；</p>
        <p><span>即：补缴月数 ＋ 1个正常申报 = 最少购买月数</span></p>
        <p><span>例：广州市 补缴1个月 最少应参保月数 = 2个月</span></p>
      </div>
      <div class="paybackdes pd16">
        <h3>桔子保支持补缴的城市</h3>
        <p>广州、北京、上海、天津、常州、青岛、聊城、苏州园 区、武汉、厦门、南京</p>
        <p><span>因各城市补缴规则不同</span></p>
        <p><span>苏州园区、天津、武汉、上海、南京、杭州、北京最多可补缴3个月；</span></p>
        <p><span>青岛、常州、广州最多可补缴1个月；</span></p>
        <p><span>聊城、厦门最多可补缴6个月。</span></p>
      </div>
      <div class="submission pd16">
        <div class="paybacktitle">怎么提交补缴订单</div>
        <div class="paybacktype">
          <div class="paybackline"></div>
          <div class="threepayback">
            <div class="aybackcon1">
              <div class="paybacknum">1</div>
              <div class="paybackcon">参保套餐</div>
            </div>
            <div class="aybackcon2">
              <div class="paybacknum">2</div>
              <div class="paybackcon">参保方案</div>
              <div class="paybackcon">勾选补缴</div>
            </div>
            <div class="aybackcon3">
              <div class="paybacknum">3</div>
              <div class="paybackcon">确认订单</div>
            </div>
          </div>
        </div>
      </div>
      <div class="retention pd16">
        <div class="paybacktitle">滞留金</div>
        <p class="retentionfee">因当地政策原因，导致部分城市补缴会产生周滞留金，社保管家与您联系后，需要您及时支付补差单，同时滞留金费用和补缴政策如有变动，已社保局政策为准。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from "../common/header";
  export default {
    name: "payback",
    components:{
      HeadNav
    },
    methods:{
      goto(){
        this.$router.push({
          name:"socialsecurity1",
          params:{}
        });
      },

    },
    mounted() {
    }
  }
</script>

<style scoped>
  .payBack{
    background: #F2F2F2;
    height: 100vh;
    width: 100%;
    overflow: paged-y;
  }
  .paybackdes{
    background: #fff;
    border-radius:.6rem;
    margin-top: .75rem;
    padding:.5rem ;
  }
  .paybackdes h3{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color: #333;
  }
  .paybackdes p{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #666;
    margin: .5rem 0;
  }
  .paybackdes p:last-child{
    margin-bottom: 0;
  }
  .paybackdes span{
    font-size:.6rem;
    font-family:PingFangSC-Regular;
    color: #F25454;
  }

  .submission{
    background: #fff;
    border-radius:.6rem;
    margin-top: .75rem;
    position: relative;
    height: 5.25rem;
    width: calc(100%);
  }
  .submission .paybacktitle{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding: .5rem 0;
  }
  .paybackline{
    width: 16.625rem;
    border-top: 1px dotted #F97A2E;
    position: absolute;
    top: 2.5rem;
  }
  .threepayback{
    display: flex;
    justify-content:space-around;
    position: absolute;
    top: 2.15rem;
    width: calc(100% - 1.6rem);
  }
  .threepayback .paybacknum{
    width:.7rem;
    height:.7rem;
    background: #f97a2e;
    color: #fff;
    border-radius: 50%;
    font-size: .6rem;
    line-height: .7rem;
    text-align: center;
  }
  .threepayback>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    font-size:.6rem;
    font-family:PingFangSC-Regular;
  }
  .threepayback .paybackcon{
    color: #666;
  }
  .retention{
    background: #fff;
    border-radius:.6rem;
    margin-top: .75rem;
    position: relative;
    height: 6.6rem;
    width: calc(100%);
  }
  .retention .paybacktitle{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding: .5rem 0;
  }
  .retentionfee{
    color: #B2B2B2;
    font-size:.7rem;
    font-family:PingFangSC-Regular;

  }
  .goBut{
    background: #f97a2e !important;
    color: #fff;
    font-size: .8rem;
    margin-top: 1.25rem;
  }
</style>
