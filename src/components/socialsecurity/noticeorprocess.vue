<template>
  <div class="noticeorprocess mg16">
    <van-tabs>
      <van-tab class="noticcon noticcon1" title="重要须知">
        <div class="notic">
          <div class="jzbb">
            <img src="../../../static/images/my/jzbb.png" alt="">
          </div>
          <p class="explain borcol">
            <img src="../../../static/images/socialsecurity/payback.png" alt="">
            <span>说明：如中途发起退款，服务费将不予退换。</span>
          </p>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">由于微信平台对于虚拟产品有<span>单笔交易不超过3000
                元的限定</span>，参保费用超过3000元的客户可自行前往支付宝平台【桔子保】自助操作或咨询客服。
            </div>
          </div>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">桔子保提供社保公积金代缴服务，服务内容<span>不包含劳动合同</span>或涉及<span>劳动关系证明 </span>的办理；
            </div>
          </div>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">请确保<span>参保人姓名和身份证一致</span>，如有误将无法申报；
            </div>
          </div>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">凡是在桔子保平台选定后的社保及公积金<span>参保基数</span>和<span>参保类型（医疗档次）</span>一经确认，将不能变
              更，选择参保基数和参保类型时请慎重；
            </div>
          </div>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">如若因参保基数或参保类型变动而产生的差额，后期申报专员核对后将通知<span>补全所欠金额
              </span>；凡是由于没有及时补全差额导致业务无法办理的，桔子保平台不承担相应责任；
            </div>
          </div>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">如曾在单位参保，请您务必在办理截止日期前<span>确认上家单位已停保</span>，若未及时停保导致业务无法办理成功的，桔子保平台概不负责；
            </div>
          </div>
          <div class="noticdes pd16">
            <van-icon class="noticicon" name="play"/>
            <div class=" noticcon2 borcol">有需要操作补缴的用户请务必提前咨询客服或拨打服务热线：400-000-8850
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab class="noticcon noticcon2 noheight" title="购买须知">
        <div class="xuzhi">
          <img src="../../../static/images/socialsecurity/xuzhi.png" alt="">
        </div>
        <!--<div class="verline"></div>
        <div class="notdes">
          <p class="notdes1">
            <span class="notnum">1</span>
            <span>登陆桔子保选择“缴纳社保”</span>
          </p>
          <p class="notdes1">
            <span class="notnum">2</span>
            <span> 填写参保人信息、设置参保方案</span>
          </p>
          <p class="notdes1 verTop">
            <span class="notnum">3</span>
            <span>支付订单 <br/>款项汇入第三方监管银行</span>
          </p>
          <p class="notdes1 verTop">
            <span class="notnum">4</span>
            <span>桔子保审核订单、收集材料、启动服务 <br>对接社保、公积金中心进行申报 <br>社保、公积金中心审核信息 <br>社保、公积金中心数据回弹出账单 <br>
                监管银行划账至地税 <br>地税划转至社保、公积金中心</span>
          </p>
          <p class="notdes1 verTop">
            <span class="notnum">5</span>
            <span>参保成功 <br>个人查询缴纳信息</span>
          </p>
        </div>-->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    export default {
        name: "noticeorprocess",
        data() {
            return {
                activeName: 'a'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .noticeorprocess {
    margin-top: .8rem;

  }

  .notic {
    /*height: 23.25rem;*/
  }

  .notic .jzbb {
    display: flex;
    justify-content: center;
  }

  .notic .jzbb img {
    width: 3rem;
    height: 3rem;
  }

  .noticcon {
    background: #fff;
    position: relative;
    padding: .75rem 0;
    /*height: 23rem;*/
    box-sizing: border-box;
  }

  .noticicon {
    top: .15rem;
  }

  .notic span {
    display: inline-block;
  }

  .explain {
    padding: 0 .75rem .2rem;
  }

  .noticdes {
    display: flex;
    padding-bottom: .4rem;
  }

  .noticcon2 {
    font-size: .6rem;
    color: #666666;
    font-family: PingFangSC-Regular;
    padding-left: .3rem;

  }

  .noheight {
    height: 23rem;
  }
  .xuzhi{
    width: 100%;
    height: 20.7rem;
    img{
      width: 100%;
    }
  }
  .noticcon1 span {
    color: #333;
    font-family: PingFangSC-Regular;
    font-weight: bold;

  }

  .borcol span {
    color: #333;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    border: 1px solid #000;
    display: inline;

  }

  .explain img {
    width: .875rem;
    height: .875rem;
    vertical-align: middle;
  }

  .explain span {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    font-weight: bold;
    color: #000;
    vertical-align: middle;
    padding-left: .3rem;
  }

  .verline {
    position: absolute;
    left: 2.75rem;
    height: 20.5rem;
    border-left: 1px dotted #666666;

  }

  .notdes {
    position: absolute;
    left: 2.4rem;
  }

  .notdes span {
    display: inline-block;
  }

  .notdes .notnum {
    width: .7rem;
    height: .7rem;
    background: rgba(249, 122, 46, 1);
    border-radius: .15rem;
    font-size: .6rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #fff;
    line-height: .7rem;
    text-align: center;
  }

  .notdes span:nth-child(2) {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #333;
    padding-left: .75rem;
  }

  .notdes1 {
    padding-bottom: 2.5rem;
  }

  .notdes1:last-child {
    padding-bottom: .5rem;
  }

  .verTop span {
    vertical-align: top;
  }

</style>
