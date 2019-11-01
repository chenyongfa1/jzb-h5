<template>
  <div class="orderdetail">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="headinfo pd16">
        <div class="headinfoleft">
          <img src="../../../static/images/orderdetail/payicon.png" alt="">
        </div>
        <div class="headinforight">
          <div>等待付款</div>
<!--          <div>剩余20分19秒自动关闭</div>-->
        </div>
      </div>
      <div class="orderlist">
        <div class="orderdetaillist pd16">
          <div class="orderdetailitem">
            <div>参保人</div>
            <div>{{unpaidinfo.name}}</div>
          </div>
          <div class="orderdetailitem">
            <div>参保城市</div>
            <div>{{unpaidinfo.area_name}}</div>
          </div>
          <div class="orderdetailitem">
            <div>参保项目</div>
            <div>{{unpaidinfo.type_name}}</div>
          </div>
          <div class="orderdetailitem" v-if="unpaidinfo.social_normal_start !== ''">
            <div>社保参保</div>
            <div>{{unpaidinfo.social_normal_start}}至 {{unpaidinfo.social_normal_end}}</div>
          </div>
          <div v-if="unpaidinfo.accumulation_normal_start !== ''" class="orderdetailitem">
            <div>公积金参保</div>
            <div>{{unpaidinfo.accumulation_normal_start}} 至 {{unpaidinfo.accumulation_normal_end}}</div>
          </div>
          <div class="orderdetailitem">
            <div>社保保费</div>
            <div>¥ {{unpaidinfo.social_sum}}</div>
          </div>
          <div class="orderdetailitem">
            <div>公积金保费</div>
            <div>¥ {{unpaidinfo.accumulation_sum}}</div>
          </div>
          <div class="orderdetailitem">
            <div>服务费</div>
            <div>¥ {{unpaidinfo.service_sum}}</div>
          </div>
          <div class="orderdetailitem">
            <div>后补费</div>
            <div>¥ {{unpaidinfo.additional_sum}}</div>
          </div>
          <div class="orderdetailitem">
            <div>余额抵扣</div>
            <div class="colf25">¥ {{unpaidinfo.cash_deduction}}</div>
          </div>
          <div class="orderdetailitem">
            <div>优惠券抵扣</div>
            <div class="colf25">¥ {{unpaidinfo.coupon_deduction}}</div>
          </div>
          <div class="orderdetailitem">
            <div>实付款</div>
            <div class="colf25">¥ {{unpaidinfo.actual_payment}}</div>
          </div>
          <div class="orderdetailitem bortop">
            <div>提交时间</div>
            <div>{{unpaidinfo.add_time}}</div>
          </div>
          <div class="orderdetailitem borbot">
            <div>留言</div>
            <div>{{unpaidinfo.remark !==''? unpaidinfo.remark:'无' }}</div>
          </div>
        </div>
        <div class="again pd16">
          <div class="delete1" @click=" deleteOrder(unpaidinfo.id)">
            删除订单
          </div>
          <div class="again1" @click="toPay(unpaidinfo.id)">
            去支付
          </div>
        </div>
      </div>
      <van-popup v-model="socal1" round :style="{ width: '80%' }">
        <div class="deletecon">
          <div class="delettitle">
            确定要删除此订单？
          </div>
          <div class="deletbtn">
            <div @click="closeBtn">否</div>
            <div @click="determineBtn">是</div>
          </div>
        </div>
      </van-popup>
      <div class="payout">
        <van-popup v-model="payShow" round position="bottom" :style="{ height: '80%' }">
          <div class="payTitle">
            费用总计：
            <span></span>
          </div>
          <van-divider/>
          <div class="paytypes">
            <div class="pays">
              <div class="selectPay">
                <p class="payType">支付方式</p>
                <p>
                  请在30分钟内完成支付
                  <span></span>
                </p>
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
                <div v-if="browser == true">
                  <form method="post" :action="zfbPay" >
                    <div class="payflex" >
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
                    <input type="hidden" name="id" :value="unpaidinfo.id">
                    <van-divider/>
                  </form>
                </div>
                <div class="payflex">
                  <div class="paytypeleft">
                    <img class="msg" src="static/images/socialsecurity/msg.png" alt/>
                    <span class="colf25">如中途发起退款，服务费将不予退还！</span>
                  </div>
                </div>
              </div>
            </van-radio-group>
            <div class="socialBtn">
              <div @click="payConfirm">确认支付</div>
            </div>
            <div class="kefuphe">
              <a href="tel:400-000-8850">客服热线</a>
            </div>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";

    export default {
        name: "unpaidinfo",
        components: {
            HeadNav,
            IsHeadEmty
        },
        data() {
            return {
                id: this.$route.query.id,
                unpaidinfo: "",
                socal1: false,
                payShow: false,
                payRadio: 0,
                icon: {
                    active: "static/images/socialsecurity/checked.png",
                    inactive: "static/images/coverage/unselect.png"
                },
                userId:JSON.parse(window.localStorage.getItem('userInfo')).id,
                orderId:this.$route.query.id,
                pagedata:{},
                browser:false,
                zfbPay:this.HOST +'/app/index/aliWapPay'
            }
        },
        methods: {
            //微信支付
            //获取订单参数
            pagedatafn() {
                let that = this;
                $.ajax({
                    url: this.HOST + "/app/wechat/wxJspay",
                    type: "POST",
                    data: {
                        user_id: this.userId,
                        id: this.orderId
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
                        window.location.href = 'http://wx.jzbshebao.cn/payinfo?id=' + that.orderId
                    } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
                        alert('cancel');
                        // window.location.href = 'http://wx.jzbshebao.cn/payinfo?id=2'
                    } else {
                        alert('fail');
                        alert(res.err_msg);
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
                        console.log(1)
                    } else if (document.attachEvent) {
                        document.attachEvent("WeixinJSBridgeReady", this.jsApiCall());
                        document.attachEvent("onWeixinJSBridgeReady", this.jsApiCall());
                        console.log(2)
                    }
                } else {
                    this.jsApiCall();
                    console.log(3)
                }
            },
            payConfirm(){
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
            again() {
                this.$router.push({
                    path: '/socialsecurity'
                })
            },
            getOrderDetail() {
                let that = this
                $.ajax({
                    url: this.HOST + '/app/order/getOrderDetail ',
                    type: "POST",
                    data: {
                        id: this.id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        // that.$router.go(0)
                        that.unpaidinfo = r.data

                    }
                })
            },
            // 删除未支付订单
            closeBtn() {
                this.socal1 = false
            },
            determineBtn(id) {
                this.socal1 = false
                let that = this
                $.ajax({
                    url: this.HOST + '/app/order/delOrder ',
                    type: "POST",
                    data: {
                        id: JSON.parse(window.localStorage.getItem('deleteOrder'))
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.$router.go(-1)
                    }
                })
            },
            deleteOrder(id) {
                this.socal1 = true
                window.localStorage.setItem('deleteOrder', JSON.stringify(id))
            },
            toPay(id) {
                this.payShow = true
            }

        },
        mounted() {
            this.getOrderDetail()
            this.pagedatafn();
            let ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                this.browser = false
                console.log(1)
                return true;
            }else{
                this.browser = true
                console.log(2)
                return false;
            }
        }
    }
</script>

<style lang="scss" scoped>
  .content {
    background: #f2f2f2;
  }

  .borbot {
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 1rem;
  }

  .bortop {
    margin-top: .5rem;
    border-top: 1px solid #E6E6E6;
  }

  .headinfo {
    display: flex;
    width: 100%;
    height: 4.625rem;
    background: url("../../../static/images/orderdetail/paybg.png");
    background-size: 100% 100%;

    .headinfoleft {
      display: flex;
      align-items: center;

      img {
        width: 1.8rem;
        height: 1.75rem;
      }
    }

    .headinforight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      padding-left: .5rem;

      div:nth-child(1) {
        font-size: .8rem;
      }

      div:nth-child(2) {
        font-size: .7rem;
      }

      div:nth-child(3) {
        font-size: .7rem;
      }
    }
  }

  .orderlist {
    border-radius: .6rem .6rem 0px .6rem;
    background: #fff;
    margin-top: .75rem;
    padding-top: .5rem;

    .orderdetailitem {
      display: flex;

      div:nth-child(1) {
        width: 40%;
        color: #666666;
        font-size: .7rem;
        height: 1.5rem;
        line-height: 1.5rem;
      }

      div:nth-child(2) {
        width: 60%;
        color: #333;
        font-size: .7rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.5rem;
        line-height: 1.5rem;

      }

      div:nth-child(2).colf25 {
        color: #F25454;
      }
    }

    .again {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 1.4rem;

      .again1 {
        width: 4.2rem;
        height: 1.95rem;
        line-height: 1.95rem;
        background: rgba(249, 122, 46, 1);
        border-radius: 1rem;
        font-size: .8rem;
        color: #fff;
        text-align: center;
        margin-left: 1rem;
      }

      .delete1 {
        width: 4.2rem;
        height: 1.95rem;
        line-height: 1.95rem;
        background: #E6E6E6;
        border-radius: 1rem;
        font-size: .8rem;
        color: #666666;
        text-align: center;
      }
    }

  }

  .deletecon {
    height: 5.25rem;

    .delettitle {
      width: 100%;
      height: 3.25rem;
      line-height: 3.25rem;
      text-align: center;
      font-size: .9rem;
      color: #333;
    }

    .deletbtn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: calc(5.25rem - 3.25rem);
      border-top: 1px solid #E6E6E6;

      div {
        flex: 1;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        font-size: .8rem;
        color: #F97A2E;
      }

      div:nth-child(1) {
        border-right: 1px solid #E6E6E6;
        color: #666666;
      }
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
  .selectPay p:nth-child(2) {
    font-size: 0.6rem;
    font-family: PingFang SC;
    color: #666666;
    padding-left: 1rem;
  }

  .selectPay p:nth-child(2) span {
    color: #f97a2e;
  }
  .payType {
    font-size: 0.8rem;
    font-family: PingFang SC;
    color: #333333;
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
  .payflex img {
    width: 0.7rem;
  }
  .wxpay {
    width: 1.175rem !important;
    vertical-align: middle;
  }
  .payType {
    font-size: 0.8rem;
    font-family: PingFang SC;
    color: #333333;
  }

  .payout .van-divider {
    margin: 0;
  }

  .paytypes .van-divider {
    margin: 0 0 0 0.55rem;
  }
  fontInco i {
    color: #b2b2b2;
    margin-left: 0.2rem;
  }
  .socialBtn .invalid{
    background:#B2B2B2;
  }
  .kefuphe a{
    display: block;
    text-align: center;
    color: #f97a2e;
  }
  .socialBtn {
    height: 3.75rem;
    background: #fff;
    padding: 0.625rem 1.3rem 0;
  }

  .socialBtn div {
    width: 100%;
    height: 2.5rem;
    background: #f97a2e;
    color: #fff;
    border-radius: 2rem;
    text-align: center;
    line-height: 2.5rem;
    font-size: 0.9rem;
    font-family: PingFangSC-Regular;
  }
</style>
