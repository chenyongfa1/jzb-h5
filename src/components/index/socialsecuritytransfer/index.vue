<template>
  <div class="socialsecuritytransfer">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="sransferlist">
        <div class="sransferitem pd16">
          <div class="sransferleft">姓名</div>
          <div class="sransferright">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="sransferitem pd16" @click="turnOut">
          <div class="sransferleft">社保转出城市</div>
          <div class="sransferright">
            <span > {{turnoutName}}</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="sransferitem  pd16" @click="changeinto">
          <div class="sransferleft">社保转入城市</div>
          <div class="sransferright">
            <span>{{changeintoName}}</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="sransferitem pd16">
          <div class="sransferleft">服务费用</div>
          <div class="sransferright">{{moneyCount}}元/人</div>
        </div>
        <div class="agreement pd16" >
          <van-checkbox v-model="checked">
            我已阅读同意
            <router-link to="/agreement">《桔子保服务协议》</router-link>
            <img
              slot="icon"
              slot-scope="props"
              icon-size=".7rem"
              :src="props.checked ? icon.active : icon.inactive"
            />
          </van-checkbox>
        </div>
        <div class="tobuy" @click="payMoney">
          立即支付
        </div>
        <div >
          <van-popup
            v-model="turnoutShow"
            position="bottom"
            :style="{ height: '50%' }">
            <van-picker show-toolbar @cancel="turnoutShow = false" value-key="text" @confirm="confirm" title="参保城市"
                        @change="onChange"
                        :columns="columns"/>
          </van-popup>
          <van-popup
            v-model="turnoutShow1"
            position="bottom"
            :style="{ height: '50%' }">
            <van-picker show-toolbar @cancel="turnoutShow1 = false" value-key="text" @confirm="confirm1" title="参保城市"
                        @change="onChange1"
                        :columns="columns1"/>
          </van-popup>
          <div class="payout">
            <van-popup v-model="payShow" round position="bottom" :style="{ height: '60%' }">
              <div class="payTitle">
                费用总计：
                <span>¥{{moneyCount}}</span>
              </div>
              <van-divider/>
              <div class="paytypes">
                <div class="pays">
                  <div class="selectPay">
                    <p class="payType">支付方式</p>
                  </div>
                </div>
                <van-divider/>
                <van-radio-group v-model="payRadio">
                  <div>
                    <div v-if="browser == false">
                      <div class="payflex">
                        <div class="paytypeleft">
                          <img class="wxpay" src="static/images/socialsecurity/wxpay.png" alt/>
                          <span>微信</span>
                        </div>
                        <van-radio name="1">
                          <img
                            slot="icon"
                            slot-scope="props"
                            :src="props.checked ? icon.active : icon.inactive"
                          />
                        </van-radio>
                      </div>
                      <van-divider/>
                    </div>
                    <van-divider/>
                    <div>
                      <form method="post" :action="zfbPay">
                        <div class="payflex">
                          <div class="paytypeleft">
                            <img class="wxpay" src="static/images/socialsecurity/zfbpay.png" alt/>
                            <span>支付宝</span>
                          </div>
                          <van-radio name="2">
                            <img
                              slot="icon"
                              slot-scope="props"
                              :src="props.checked ? icon.active : icon.inactive"
                            />
                          </van-radio>
                        </div>
                        <input type="hidden" name="id" >
                        <van-divider/>
                      </form>
                    </div>
                    <div class="payflex">
                      <div class="paytypeleft">
                        <img class="msg" src="static/images/socialsecurity/msg.png" alt/>
                        <span class="colf25">如中途发起退款，服务费将不予退还！</span>
                      </div>
                    </div>
                    <div class="paybtn">
                      <div class="kefuphe">
                        <img src="../../../../static/images/common/phone1.png" alt="">
                        <span>客服热线</span>
                      </div>
                      <div class="paybtns">
                        确认支付
                      </div>
                    </div>
                  </div>
                </van-radio-group>
              </div>
            </van-popup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";

    export default {
        name: "socialsecuritytransfer",
        data(){
            return{
                moneyCount:2000,
                checked:false,
                turnoutShow:false,
                icon: {
                    active: "static/images/socialsecurity/checked.png",
                    inactive: "static/images/coverage/unselect.png"
                },
                currentProvince: '',
                citys:"",
                cityIdArr: [],//转出市id
                cityIdArr1: [],//转出省id
                cityId1:'',//转出选择id
                turnoutShow1:false,
                citys1:"",
                currentProvince1: '',
                turnoutName:'',//转出城市
                cityIdArr1: [],//转入市id
                cityIdArr2: [],//转入省id
                cityId2:'',//转入选择id
                changeintoName:'',//转入城市
                payShow:false,
                browser:false,
                zfbPay: this.HOST + '/app/index/aliWapPay',
                payRadio:1
            }
        },
        computed: {
            columns() {
                return [
                    {
                        values: Object.keys(this.citys),
                        className: 'column1'
                    },
                    {
                        values: this.citys[this.currentProvince],
                        className: 'column2',
                    },
                ]
            },
            columns1() {
                return [
                    {
                        values: Object.keys(this.citys1),
                        className: 'column3'
                    },
                    {
                        values: this.citys1[this.currentProvince1],
                        className: 'column4',
                    },
                ]
            }
        },
        components: {
            HeadNav,
            IsHeadEmty
        },
        methods:{
            // 转出确定按钮
            confirm(e, index){
                this.turnoutShow = false
                this.currentProvince = e[0]
               this.cityId1 = this.cityIdArr1[this.cityIdArr[index[0]]][index[1]]
                this.turnoutName = e[0] + " " + e[1]
            },
            // 转入确定按钮
            confirm1(e, index){
                this.turnoutShow1 = false
                this.currentProvince1 = e[0]
                this.cityId2 = this.cityIdArr1[this.cityIdArr[index[0]]][index[1]]
                this.changeintoName = e[0] + " " + e[1]
            },
            // 获取城市列表
            getCityList() {
                let that = this
                let citys = {}
                let data = this.common.getsign()
                $.ajax({
                    url: this.HOST + '/app/index/getCity',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        for (const item of r.data) {
                            that.cityIdArr.push(item.id)
                            citys[item.area_name] = item.item.map(item => item.area_name)
                            that.cityIdArr1[item.id] = item.item.map(item => item.id)
                        }

                        that.citys = citys
                        that.citys1 = citys
                        const provinceList = Object.keys(citys)
                        that.currentProvince = provinceList[0]
                        that.currentProvince1 = provinceList[0]
                    }
                })
            },
            onChange(picker, values) {
                picker.setColumnValues(1, this.citys[values[0]]);
            },
            onChange1(picker, values) {
                picker.setColumnValues(1, this.citys1[values[0]]);
            },
            // 转出
            turnOut(){
                this.turnoutShow = true
            },
            // 转入
            changeinto(){
                this.turnoutShow1 = true
            },
            // 弹出支付方式
            payMoney() {
                if (this.checked) {

                    this.payShow = true;
                    // window.clearInterval(this.time);

                } else {
                    this.$toast({
                        message: "请勾选桔子保服务协议"
                    });
                }

            },
            //微信支付h
            //获取订单参数
            pagedatafn() {
                let that = this;
                $.ajax({
                    url: this.HOST + "/app/wechat/wxJspay",
                    type: "POST",
                    data: {
                        user_id: this.orderInfo.user_id,
                        id: this.orderInfo.id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        let data = JSON.parse(r.data);
                        that.pagedata = {
                            appId: data.appId,
                            nonceStr: data.nonceStr,
                            package: data.package,
                            signType: "MD5",
                            timeStamp: data.timeStamp,
                            paySign: data.paySign
                        };
                    }
                });
            },
            jsApiCall() {
                let that = this
                WeixinJSBridge.invoke("getBrandWCPayRequest", this.pagedata, function (res) {
                    WeixinJSBridge.log(res.err_msg);
                    if (res.err_msg == 'get_brand_wcpay_request:ok') {
                        window.location.href = 'http://wx.jzbshebao.cn/payinfo?id=' + that.orderInfo.id
                    } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
                        // window.location.href = 'http://wx.jzbshebao.cn/payinfo?id=2'
                    } else {
                        // window.location.href = 'http://wx.jzbshebao.cn/payinfo?id=3'
                    }

                });
            },

            callpay() {
                if (typeof WeixinJSBridge == "undefined") {
                    if (document.addEventListener) {
                        document.addEventListener(
                            "WeixinJSBridgeReady",
                            this.jsApiCall(),
                            false
                        );
                    } else if (document.attachEvent) {
                        document.attachEvent("WeixinJSBridgeReady", this.jsApiCall());
                        document.attachEvent("onWeixinJSBridgeReady", this.jsApiCall());
                    }
                } else {
                    this.jsApiCall();

                }
            },

            // 确定支付
            payConfirm() {
                let data = this.common.getsign();
                if (this.payRadio == 1) {
                    // document.forms[0].submit()
                    this.callpay();
                } else if (this.payRadio == 2) {
                    document.forms[0].submit()
                } else {
                    this.$toast({
                        message: "请选择支付方式"
                    });
                }
            },
        },
        mounted() {
            this.getCityList()
        }
    }
</script>

<style lang="scss" scoped>
  .content {
    background: #f2f2f2;
  }
  .sransferlist{
    background: #fff;
    height: calc(100vh - 2.3rem);
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    border-radius:.6rem;
    .sransferitem{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.15rem;
      border-bottom: 1px solid #e6e6e6;
      color: #333;
      font-size: .7rem;
      .sransferright{
        display: flex;
        align-items: center;
        i{
          color: #666;
        }
      }
    }
    .agreement{
      color: #333;
      font-size: .6rem;
      width: 100%;
      height: 2rem;
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 2.5rem;
      img{
        width: 0.7rem;
      }
    }
    .tobuy{
      position: fixed;
      bottom: 0;
      width: 100%;
      height:2.5rem;
      line-height: 2.5rem;
      text-align: center;
      background:rgba(249,122,46,1);
      color: #fff;
      font-size: .7rem;
    }
  }


  .payTitle {
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
    font-size: 0.9rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }

  .payTitle span {
    color: #f25454;
  }

  .pays {
    padding-left: 0.8rem;
  }

  .pays .selectPay {
    display: flex;
    height: 2.4rem;
    line-height: 2.4rem;
  }

  .payType {
    font-size: 0.8rem;
    font-family: PingFang SC;
    color: #333333;
  }
  .payout{
    position: relative;
  }
  .payout .van-divider {
    margin: 0;
  }

  .paytypes .van-divider {
    margin: 0 0 0 0.55rem;
  }

  .selectPay p:nth-child(2) {
    font-size: 0.6rem;
    font-family: PingFang SC;
    color: #666666;
    padding-left: 1rem;
  }

  .selectPay p:nth-child(2) span {
    color: #f97a2e;
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
    margin-left: 0.55rem;
    padding-right: 0.55rem;
    height: 2.4rem;
    line-height: 2.4rem;
    align-items: center;
  }

  .paytypeleft img {
    vertical-align: middle;
  }

  .paytypeleft span {
    vertical-align: middle;
    padding-left: 0.35rem;
    font-size: 0.7rem;
    font-family: PingFang SC;
    color: #666;
  }

  .paytypeleft .colf25 {
    color: #f25454;
    font-size: 0.6rem;
    font-family: PingFang SC;
  }

  .fontInco {
    display: flex;
    align-items: center;
  }

  .fontInco i {
    color: #b2b2b2;
    margin-left: 0.2rem;
  }

  .socialBtn .invalid {
    background: #B2B2B2;
  }

  .kefuphe a {
    display: block;
    text-align: center;
    color: #f97a2e;
    font-size: .8rem;
  }
  .payflex img{
    width: 0.7rem;
  }
  .paybtn {
    display: flex;
    height: 2.4rem;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    .kefuphe{
      color: #F97A2E;
      font-size:.6rem;
      width: 36%;
      background: #f2f2f2;
      height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: .9rem;
        height: .9rem;
      }
    }
    .paybtns{
      color: #FEFEFE;
      font-size: .9rem;
      width: 64%;
      height: 2.4rem;
      background: #f97a2e;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
