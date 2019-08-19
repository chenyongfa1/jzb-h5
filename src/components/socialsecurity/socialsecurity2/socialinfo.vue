<template>
  <div class="socialinfo">
    <div class="socialinfoTop mg15">
      <div class="socialinfoItem">
        <div class="socialname">
          赵星星
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">参保城市</div>
        <div class="socialinforight"> 深圳市</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">社保参保月份</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">社保补缴月份</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">公积金参保月份</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">公积金补缴月份</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-cell-group>
        <van-field
          v-model="remarks"
          label="备注"
          type="text"
          placeholder="备孕、怀孕、有贷款或其他需求请备注"
          label-width="16%"
          clearable
        />
      </van-cell-group>
    </div>
    <div class="socialinfoBot mg15">
      <div class="socialinfoItem">
        <div class="">
          费用明细
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">社保保费小计</div>
        <div class="socialinforight"> 深圳市</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">社保补缴费小计</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">公积金保费小计</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">公积金补缴保费小计</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">服务费</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">候补费</div>
        <div class="socialinforight">2019-05 至 2019-07</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">余额抵扣</div>
        <div class="socialinforight colF25">¥ 200.00</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">优惠券抵扣</div>
        <div class="socialinforight colF25">¥ 200.00</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft soccount">实付款：<span class="colF25">¥ 2061.90</span></div>
      </div>

    </div>
    <div class="agreement mg15">
      <van-checkbox v-model="checked">
        我已阅读同意
        <router-link to="/">《桔子保服务协议》</router-link>
        <img
          slot="icon"
          slot-scope="props"
          icon-size=".7rem"
          :src="props.checked ? icon.active : icon.inactive"
        >
      </van-checkbox>
    </div>
    <div class="socialBtn">
      <div @click="payMoney">立即支付</div>
    </div>
    <div class="payout">
      <van-popup
        v-model="payShow"
        round
        position="bottom"
        :style="{ height: '80%' }">
        <div class="payTitle">費用总计：<span>¥ 2061.90</span></div>
        <van-divider/>
        <div class="paytypes">
          <div class="pays">
            <div class="selectPay">
              <p class="payType">支付方式</p>
              <p>请在30分钟内完成支付（<span>29：58</span>)</p>
            </div>
          </div>
          <van-divider/>
          <van-radio-group v-model="payRadio">
            <div>
              <form action="">
                <div class="payflex">
                  <div class="paytypeleft">
                    <img class="wxpay" src="static/images/socialsecurity/wxpay.png" alt="">
                    <span>微信</span>
                  </div>
                  <van-radio name="1">
                    <img
                      slot="icon"
                      slot-scope="props"
                      :src="props.checked ? icon.active : icon.inactive"
                    >
                  </van-radio>
                </div>
                <van-divider/>
              </form>
              <form action="http://www.jzbshebao.cn/ali/alipay/wapPay" method="post">
                <div class="payflex">
                  <div class="paytypeleft">
                    <img class="zfbpay" src="static/images/socialsecurity/zfbpay.png" alt="">
                    <span>支付宝</span>
                  </div>
                  <van-radio name="2">
                    <img
                      slot="icon"
                      slot-scope="props"
                      :src="props.checked ? icon.active : icon.inactive"
                    >
                  </van-radio>
                  <input type="hidden"  name="id" value="6">
                  <input type="submit" style="display:none">
                </div>

              </form>
              <van-divider/>
              <div class="payflex">
                <div class="paytypeleft ">
                  <img class="msg" src="static/images/socialsecurity/msg.png" alt="">
                  <span class="colf25">如中途发起退款，服务费将不予退还！</span>
                </div>
              </div>
            </div>
          </van-radio-group>
          <div class="socialBtn">
            <div @click="payConfirm">确认支付</div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
  import header from "../../common/header";

  export default {
    name: "socialinfo",
    data() {
      return {
        remarks: "",
        checked: '',
        payShow: false,
        payRadio: 1,
        icon: {
          active: 'static/images/socialsecurity/checked.png',
          inactive: 'static/images/coverage/unselect.png'
        },
        minute:'29',
        second:'59',
      }
    },
    methods: {
      payMoney() {
        this.payShow = true


      },
      payConfirm() {
        let data = this.common.getsign()

        if (this.payRadio == 1) {
          document.forms[0].submit()
        } else if (this.payRadio == 2) {
          document.forms[1].submit()

        }
      },


    },
    mounted() {
      // this.resetTime(1800)

    }
  }
</script>

<style scoped>
  .mg15 {
    margin: 0 .75rem;
  }

  .socialinfoTop {
    background: #fff;
  }

  .colF25 {
    color: #F25454;
  }

  .socialinfoBot {
    background: #fff;
    margin-top: .8rem;
  }

  .socialinfoBot .van-divider {
    margin: 0 0 0 .55rem;
  }

  .socialinfoTop .van-divider {
    margin: 0 0 0 .55rem;
  }

  .socialinfoItem {
    height: 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: .55rem;
    padding-right: .55rem;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }

  .socialname {
    font-size: .8rem;
    font-family: PingFangSC-Regular;
    color: #F97A2E;
  }

  .soccount {
    font-size: .8rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
  }

  .agreement {
    padding-left: .55rem;
    height: 2.1rem;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    display: flex;
    align-items: center;
  }

  .payflex img {
    width: .7rem;
  }

  .agreement img {
    width: .7rem;
  }

  .socialBtn {
    height: 3.75rem;
    background: #fff;
    padding: .625rem 1.3rem 0;
  }

  .socialBtn div {
    width: 100%;
    height: 2.5rem;
    background: #F97A2E;
    color: #fff;
    border-radius: 2rem;
    text-align: center;
    line-height: 2.5rem;
    font-size: .9rem;
    font-family: PingFangSC-Regular;
  }

  .payTitle {
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
    font-size: .9rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }

  .payTitle span {
    color: #F25454;
  }

  .pays {
    padding-left: .8rem;
  }

  .pays .selectPay {
    display: flex;
    height: 2.4rem;
    line-height: 2.4rem;
  }

  .payType {
    font-size: .8rem;
    font-family: PingFang SC;
    color: #333333;
  }

  .payout .van-divider {
    margin: 0;
  }

  .paytypes .van-divider {
    margin: 0 0 0 .55rem;
  }

  .selectPay p:nth-child(2) {
    font-size: .6rem;
    font-family: PingFang SC;
    color: #666666;
    padding-left: 1rem;
  }

  .selectPay p:nth-child(2) span {
    color: #F97A2E;
  }

  .wxpay {
    width: 1.175rem !important;
  }

  .zfbpay {
    width: 1.05rem !important;
  }

  .payflex {
    display: flex;
    justify-content: space-between;
    margin-left: .55rem;
    padding-right: .55rem;
    height: 2.4rem;
    line-height: 2.4rem;
    align-items: center;
  }

  .paytypeleft img {
    vertical-align: middle;
  }

  .paytypeleft span {
    vertical-align: middle;
    padding-left: .35rem;
    font-size: .7rem;
    font-family: PingFang SC;
    color: #666;
  }

  .paytypeleft .colf25 {
    color: #F25454;
    font-size: .6rem;
    font-family: PingFang SC;
  }
</style>
