<template>
  <div class="socialinfo">
    <div class="socialinfoTop mg15">
      <div class="socialinfoItem">
        <div class="socialname">{{particName}}</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft">参保城市</div>
        <div class="socialinforight">{{city}}</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.social_normal_start">
        <div class="socialinfoleft">社保参保月份</div>
        <div class="socialinforight">
          {{orderInfo.social_normal_start}} 至
          {{orderInfo.social_normal_end}}
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.social_pay_back_start">
        <div class="socialinfoleft">社保补缴月份</div>
        <div class="socialinforight">
          {{orderInfo.social_pay_back_start}} 至
          {{orderInfo.social_pay_back_end}}
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.accumulation_normal_start">
        <div class="socialinfoleft">公积金参保月份</div>
        <div class="socialinforight">
          {{orderInfo.accumulation_normal_start}}
          至 {{orderInfo.accumulation_normal_end}}
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.accumulation_pay_back_start">
        <div class="socialinfoleft">公积金补缴月份</div>
        <div class="socialinforight">
          {{orderInfo.accumulation_pay_back_start}}
          至 {{orderInfo.accumulation_pay_back_end}}
        </div>
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
        <div class>费用明细</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.social_sum">
        <div class="socialinfoleft">社保保费小计</div>
        <div class="socialinforight">{{orderInfo.social_sum}}</div>
      </div>
      <van-divider hairline/>

      <div class="socialinfoItem" v-if="orderInfo.accumulation_sum">
        <div class="socialinfoleft">公积金保费小计</div>
        <div class="socialinforight">{{orderInfo.accumulation_sum}}
        </div>
      </div>
      <div class="socialinfoItem" v-if="orderInfo.social_pay_back_start || orderInfo.accumulation_pay_back_start">
        <div class="socialinfoleft">补缴费</div>
        <div class="socialinforight">{{orderInfo.pay_back_sum}}</div>
      </div>
      <van-divider hairline/>
      <!-- <div v-if="orderInfo.accumulation_pay_back_start" class="socialinfoItem">
         <div class="socialinfoleft">公积金补缴保费小计</div>
         <div class="socialinforight">{{orderInfo.pay_back_sum}}
         </div>

       </div>-->
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.service_charge">
        <div class="socialinfoleft">手续费(0.6%)</div>
        <div class="socialinforight">{{orderInfo.service_charge}}</div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" v-if="orderInfo.service_sum">
        <div class="socialinfoleft">服务费</div>
        <div class="socialinforight">{{orderInfo.service_sum}}</div>
      </div>
      <van-divider hairline/>
      <!-- <div class="socialinfoItem">
         <div class="socialinfoleft">候补费</div>
         <div class="socialinforight">2019-05 至 2019-07</div>
       </div>
      <van-divider hairline/>-->
      <div class="socialinfoItem" @click="balance">
        <div class="socialinfoleft">余额抵扣</div>
        <div class="socialinforight fontInco colF25"><span>¥ {{alanceDeduction}}</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem" @click="coupons">
        <div class="socialinfoleft">优惠券抵扣</div>
        <div class="socialinforight fontInco colF25"><span>¥ {{worthsCount}}</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <van-divider hairline/>
      <!--<div class="socialinfoItem" @click="integral">
        <div class="socialinfoleft">积分抵扣</div>
        <div class="socialinforight fontInco colF25"><span>¥ {{integralCount}}</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <van-divider hairline/>-->
      <div class="socialinfoItem" v-if="orderInfo.discount != 0">
        <div class="socialinfoleft">活动优惠</div>
        <div class="socialinforight fontInco colF25">
          <span v-if="Number(orderInfo.discount) == 59.9">买3免1减：59.9元</span>
          <span v-if="Number(orderInfo.discount) == 99.8">买6免2减：99.8元</span>
          <span v-if="Number(orderInfo.discount) == 149.7">买9免3减：149.7元</span>
          <span v-if="Number(orderInfo.discount) == 119.6">买12免4减：119.6元</span>
        </div>
      </div>
      <van-divider hairline/>
      <div class="socialinfoItem">
        <div class="socialinfoleft soccount">
          实付款：
          <span class="colF25">¥ {{Number(orderInfo.total)-Number(alanceDeduction) - Number(worthsCount)}}</span>
        </div>
      </div>
      <div class="activecon" @click="activePopup">
        <div class="activeconLeft">
          <img src="../../../../static/images/socialsecurity/social11.png" alt="">
          <span>服务费直减</span>
        </div>
        <div class="activeconRight">
          <span class="activecons">查看活动</span>
          <img src="../../../../static/images/socialsecurity/youjiantou.png" alt="">
        </div>
      </div>
    </div>
    <div class="agreement mg15">
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
    <div class="socialBtn">
      <div @click="payMoney">立即支付</div>
    </div>
    <div class="payout">
      <van-popup v-model="payShow" round position="bottom" :style="{ height: '80%' }">
        <div class="payTitle">
          费用总计：
          <span>¥{{Number(orderInfo.total)-Number(alanceDeduction) - Number(worthsCount)}}</span>
        </div>
        <van-divider/>
        <div class="paytypes">
          <div class="pays">
            <div class="selectPay">
              <p class="payType">支付方式</p>
              <p>
                请在30分钟内完成支付（
                <span>{{minutes}}：{{seconds}}</span>)
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
                  <input type="hidden" name="id" :value="orderInfo.id">
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
            <div v-if="minutes !=0 || seconds !=0" @click="payConfirm">确认支付</div>
            <div v-else class="invalid">订单已失效</div>
          </div>
          <div class="kefuphe">
            <a href="tel:400-000-8850">联系客服</a>
          </div>
          <div class="socialBtn" v-if="minutes ==0 && seconds ==0">
            <div @click="toSocial">重新下单</div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="coupon">
      <van-popup
        v-model="coupon"
        round
        position="bottom"
        :style="{ height: '85%' }">
        <div class="coupontitle">
          <div class="coupontitles">优惠券</div>
          <div class="couponclose" @click="couponClose">
            <img src="../../../../static/images/socialsecurity/close.png" alt="">
          </div>
          <div class="couponlist">
            <div class="couponitem">
              <van-tabs v-model="couponName">
                <van-tab :title="couponCount1" name="a">
                  <div v-if="couponCount !=0">
                    <div id="couponto">
                      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                        <van-list @load="onLoad" :finished="finished">
                          <div class="couponitems " v-for="(item,index) in couponList" :key="index">
                            <div class="couponitem1">
                              <div class="couponmoney">
                                <div>￥</div>
                                <div>{{item.worth}}</div>
                              </div>
                              <div class="couponcon">
                                <div class="couponname">活动优惠券</div>
                                <div class="coupontime">{{item.start}} - {{item.end}}</div>
                                <div class="coupondes">{{item.remark}}</div>
                              </div>
                            </div>
                            <div class="couponcheck "
                                 @click="checkFun(item.id,index,item.multiple,item.worth,item.min)"></div>
                          </div>
                        </van-list>
                      </van-pull-refresh>
                    </div>
                    <div class="couponbtn" @click="couponBtn">
                      <img src="../../../../static/images/socialsecurity/couponbtn.png" alt="">
                    </div>
                  </div>
                  <div v-else>
                    <div class="emtycoupon">
                      <img src="../../../../static/images/socialsecurity/nocoupon.png" alt="">
                      <span>很遗憾</span>
                      <span>您暂无可用优惠券</span>
                    </div>
                  </div>
                </van-tab>
                <van-tab :title="couponCount3" name="b">
                  <div v-if="couponCount2 !=0" id="couponto1">
                    <van-pull-refresh v-model="isLoading1" @refresh="onRefresh1">
                      <van-list @load="onLoad1" :finished="finished">
                        <div class="couponitems1" v-for="(item,index) in couponList1" :key="index">
                          <div class="couponitem1">
                            <div class="couponmoney">
                              <div>￥</div>
                              <div>{{item.worth}}</div>
                            </div>
                            <div class="couponcon">
                              <div class="couponname">活动优惠券</div>
                              <div class="coupontime">{{item.start}} - {{item.end}}</div>
                              <div class="coupondes">{{item.remark}}</div>
                            </div>
                          </div>
                        </div>
                      </van-list>
                    </van-pull-refresh>
                  </div>
                  <div v-else>
                    <div class="emtycoupon">
                      <img src="../../../../static/images/socialsecurity/nocoupon.png" alt="">
                      <span>很遗憾</span>
                      <span>您暂无可用优惠券</span>
                    </div>
                  </div>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="balances">
      <van-popup
        v-model="balanceshow"
        round
        position="bottom"
        :style="{ height: '50%' }">
        <div class="balances1">
          <div class="balancetitle">
            <div class="balancetitles">
              <div>当前余额</div>
              <div>¥ {{myBalance}}</div>
            </div>
            <div class="couponclose" @click="couponClose">
              <img src="../../../../static/images/socialsecurity/close.png" alt="">
            </div>
            <div v-if="myBalance != 0">
              <div class="moneyVal">
                <!--              <input type="number" v-model="moneyVal" value="123" placeholder="请输入抵扣金额">-->
                <van-field v-model="moneyVal" placeholder="请输入抵扣金额"/>
              </div>
              <div class="couponbtn" @click="getBalance">
                <img src="../../../../static/images/socialsecurity/couponbtn.png" alt="">
              </div>
            </div>
            <div class="balanemty" v-else>
              <div class="balanemtyimg">
                <img src="../../../../static/images/socialsecurity/emtymoney.png" alt="">
                <span>您的余额为零</span>
              </div>
              <div class="balanemtyimg1">
                <img src="../../../../static/images/socialsecurity/pullthehead.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="integral">
      <van-popup
        v-model="integralShow"
        round
        position="bottom"
        :style="{ height: '46%' }">
        <div class="integral1">
          <div class="integraltitle">
            <div class="integraltitles">
              <div>我的积分</div>
              <div>{{myBalance}}</div>
            </div>
            <div v-if="myintegral == 0">
              <div class="moneyVal">
                <!--              <input type="number" v-model="moneyVal" value="123" placeholder="请输入抵扣金额">-->
                <van-field v-model="myintegralVal" placeholder="请输入积分"/>
              </div>
              <div class="isintegral">
                <van-checkbox v-model="integralChecked">
                  全部积分
                  <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.checked ? icon.active : icon.inactive"
                  >
                </van-checkbox>
              </div>
              <div class="isintegralrule">
                <p> 积分使用规则：</p>
                <p>1、1000积分抵扣10元</p>
                <p>2、积分支付不得超过每笔订单服务费金额的50%</p>
              </div>
              <div class="couponbtn" @click="getIntegral">
                <div class="addBtn">
                  <div @click="integralShow = false">取消</div>
                  <div>确定</div>
                </div>
              </div>
            </div>
            <div class="balanemty" v-else>
              <div class="balanemtyimg">
                <img src="../../../../static/images/socialsecurity/emtymoney.png" alt="">
                <span>您的余额为零</span>
              </div>
              <div class="balanemtyimg1">
                <img src="../../../../static/images/socialsecurity/pullthehead.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <!--    活动弹窗-->
    <div class="popupactive">
      <div class="popupactiveimg">
        <img src="../../../../static/images/socialsecurity/active1.png" alt="">
      </div>
      <img @click="activeClose" class="activeclose" src="../../../../static/images/socialsecurity/activeclose.png"
           alt="">
    </div>
  </div>
</template>

<script>
  import header from "../../common/header";
  import QRCode from "qrcodejs2"

  export default {
    name: "socialinfo",
    components: {QRCode},
    data() {
      return {
        link: 'https://baidu.com',
        remarks: "",
        checked: false,
        payShow: false,
        payRadio: 0,
        icon: {
          active: "static/images/socialsecurity/checked.png",
          inactive: "static/images/coverage/unselect.png"
        },
        minutes: 30,
        seconds: 0,
        particName: JSON.parse(window.localStorage.getItem("particName")) || "",
        orderInfo: {},
        balances: false,
        time: "",
        city: "",
        pagedata: {},
        dTime: '',
        browser: false,
        zfbPay: this.HOST + '/app/index/aliWapPay',
        coupon: false,//优惠劵弹出窗
        couponName: 'a',
        couponcheck: false,//优惠劵选择
        balanceshow: false,//余额弹出窗
        couponCount: '',//未使用优惠劵总数
        couponCount1: '',//未使用优惠劵总数
        couponList: [],//未使用优惠劵内容
        // 未使用优惠劵刷新
        isLoading: false,
        loading: false,//控制上拉加载的加载动画
        finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
        page1: 1,
        userId: JSON.parse(window.localStorage.getItem('userInfo')).id,//用户id
        myBalance: 0,//用户余额
        //已过期优惠劵
        couponCount2: '',//已使用优惠劵总数
        couponCount3: '',//已使用优惠劵总数
        couponList1: [],//已使用优惠劵内容
        isLoading1: false,
        loading1: false,//控制上拉加载的加载动画
        finished1: false,//控制在页面往下移动到底部时是否调用接口获取数据
        page2: 1,
        moneyVal: '',//输入的金额
        alanceDeduction: 0,//余额抵扣
        delArr: [],
        multiplesId: [],//是否单选多选条件
        multiplesIndex: [],//优惠劵id
        worths: [],//选择优惠劵数组
        worthsCount: 0,//优惠劵总数
        integralCount: 0,//积分总数
        integralShow: false,//积分弹窗
        myintegral: 0,//我的积分总数
        myintegralVal: "",//我的输入的积分总数
        integralChecked: 0,
      };
    },
    methods: {
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

      payMoney() {
        if (this.checked) {

          this.payShow = true;
          // window.clearInterval(this.time);

        } else {
          this.$toast({
            message: "请勾选桔子保服务协议"
          });
        }
        if (this.remarks != "" || this.multiplesIndex != 0 || this.alanceDeduction != 0) {
          this.userRemark()
        }

      },
      //请求备注或优惠
      getDiscount() {
        let data = this.common.getsign();
        let that = this;
        $.ajax({
          url: this.HOST + "/app/index/getCity",
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            id: this.orderInfo.city_id
          },
          dataType: "JSON",
          success: function (r) {
            that.city = r.data.area_name;
          }
        });
      },
      //获取城市
      getCity() {
        let data = this.common.getsign();
        let that = this;
        $.ajax({
          url: this.HOST + "/app/index/getCity",
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            id: this.orderInfo.city_id
          },
          dataType: "JSON",
          success: function (r) {
            that.city = r.data.area_name;
          }
        });
      },
      getOrderInfo() {
        this.orderInfo =
          JSON.parse(window.localStorage.getItem("orderInfo")) || "";
        // new Date(this.orderInfo.add_time)
      },
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
      toSocial() {
        this.$router.push({
          path: '/socialsecurity'
        })
      },
      userRemark() {
        let data = this.common.getsign();
        let that = this;
        // let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let userRemark = this.remarks
        $.ajax({
          url: this.HOST + "/app/order/userRemark",
          type: "POST",
          data: {
            /*sign: data.sign,
            time: data.time,*/
            user_id: this.orderInfo.user_id,
            id: this.orderInfo.id,
            coupon_id: this.multiplesIndex.join(','),
            user_remark: userRemark,
            cash_deduction: this.alanceDeduction,
          },
          dataType: "JSON",
          success: function (r) {
            that.city = r.data.area_name;
            if (r.status != 200) {
              that.page1 = 1;
              $('.couponcheck').removeClass('couponcheckbg')
              that.multiplesIndex = []
              that.worths = []
              that.worths = []
              that.couponBtn()
            }else{
              $('.couponcheck').removeClass('couponcheckbg')
            }
          }
        });
      },
      balance() {
        this.balanceshow = true
        this.getmyBalance()
      },
      //优惠劵
      coupons() {
        this.coupon = true
        this.getCoupon();
        this.getCoupon1();

      },
      //积分
      integral() {
        this.integralShow = true
      },
      getIntegral() {

      },
      couponClose() {
        this.coupon = false
        this.balanceshow = false
      },
      num: function (n) {
        return n < 10 ? "0" + n : "" + n;
      },
      add: function () {
        let _this = this;
        this.time = window.setInterval(function () {
          if (_this.seconds === 0 && _this.minutes !== 0) {
            _this.seconds = 59;
            _this.minutes -= 1;
          } else if (_this.minutes === 0 && _this.seconds === 0) {
            _this.seconds = 0;
            window.clearInterval(this.time);
          } else {
            _this.seconds -= 1;
          }
        }, 1000);
      },
      // 获取未使用优惠劵
      getCoupon() {
        let data = this.common.getsign();
        let that = this;
        $.ajax({
          url: this.HOST + "/app/user/userCoupon",
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: this.userId,
            status: 0,
            type: 1,
            p: 1
          },
          dataType: "JSON",
          success: function (r) {
            that.couponCount = r.data.count || 0;
            that.couponCount1 = `可用优惠券(${that.couponCount})`;
            that.couponList = r.data.list || []
          }
        });
      },
      onRefresh() {
        // 未使用优惠劵刷新
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getCoupon()
          this.page1 = 1
          $('.couponcheck').removeClass('couponcheckbg')
          this.delArr = []
          //初始化选择优惠券id和金额
          this.worths = []
          this.multiplesIndex = []
        }, 500);
      },
      // 获取未使用优惠劵上拉加载
      onLoad() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let page = (this.couponCount / 5)
        document.getElementById("couponto").onscroll = function () {
          var scrollHeight = document.getElementById("couponto").scrollHeight;//251
          var scrollTop = document.getElementById("couponto").scrollTop;//0-18
          var clientHeight = document.getElementById("couponto").clientHeight;//233
          if ((scrollHeight - clientHeight) == scrollTop) {
            if (page > that.page1) {
              setTimeout(() => {
                $.ajax({
                  url: that.HOST + "/app/user/userCoupon",
                  type: "POST",
                  data: {
                    sign: data.sign,
                    time: data.time,
                    user_id: that.userId,
                    status: 0,
                    type: 1,
                    p: that.page1 + 1
                  },
                  dataType: "JSON",
                  success: function (r) {
                    that.multiplesId = []
                    if (r.status == 200) {
                      that.couponList = [...that.couponList, ...r.data.list] || []
                      that.page1++
                      that.$toast({
                        message: '加载第' + that.page1 + '页'
                      })
                      that.couponList.map((item) => {
                        that.multiplesId.push(item.multiple)
                      })
                    } else {
                      that.$toast({
                        message: r.message
                      })
                    }
                  }
                })
              }, 500);
            } else {
              that.$toast({
                message: '没有更多'
              })

            }

          }
        }

      },
      // 获取未使用优惠劵
      getCoupon1() {
        let data = this.common.getsign();
        let that = this;
        $.ajax({
          url: this.HOST + "/app/user/userCoupon",
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: this.userId,
            status: 100,
            type: 1,
            p: 1
          },
          dataType: "JSON",
          success: function (r) {
            that.couponCount2 = r.data.count || 0;
            that.couponCount3 = `不可用优惠券(${that.couponCount2})`;
            that.couponList1 = r.data.list || []


          }
        });
      },
      onRefresh1() {
        // 未使用优惠劵刷新
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading1 = false;
          this.getCoupon1()
          this.page2 = 1
        }, 500);
      },
      // 获取未使用优惠劵上拉加载
      onLoad1() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let page = (this.couponCount2 / 5)
        document.getElementById("couponto1").onscroll = function () {
          var scrollHeight = document.getElementById("couponto1").scrollHeight;//251
          var scrollTop = document.getElementById("couponto1").scrollTop;//0-18
          var clientHeight = document.getElementById("couponto1").clientHeight;//233
          if ((scrollHeight - clientHeight) == scrollTop) {
            if (page > that.page2) {
              setTimeout(() => {
                $.ajax({
                  url: that.HOST + "/app/user/userCoupon",
                  type: "POST",
                  data: {
                    sign: data.sign,
                    time: data.time,
                    user_id: that.userId,
                    status: 100,
                    type: 1,
                    p: that.page2 + 1
                  },
                  dataType: "JSON",
                  success: function (r) {
                    if (r.status == 200) {
                      that.couponList1 = [...that.couponList1, ...r.data.list] || []
                      that.page2++
                      that.$toast({
                        message: '加载第' + that.page2 + '页'
                      })
                    } else {
                      that.$toast({
                        message: r.message
                      })
                    }
                  }
                })
              }, 500);
            } else {
              that.$toast({
                message: '没有更多'
              })

            }

          }
        }

      },

      // 确认输入余额是否大于本身的余额
      getBalance() {
        if (Number(this.moneyVal) > Number(this.myBalance)) {
          this.moneyVal = ""
          this.$toast({
            message: '余额不足'
          })
        } else {
          this.moneyVal = Number(this.moneyVal).toFixed(2)
          this.alanceDeduction = this.moneyVal
          this.balanceshow = false
        }

      },
      //获取用户信息
      getmyBalance() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/user/userCenter',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
          },
          dataType: "JSON",
          success: function (r) {
            that.myBalance = r.data.userInfo.balance
          }
        })
      },
      //优惠券id，下标index,是否可叠加使用优惠劵，面额
      checkFun(id, index, multiple, worth, min) {
        // let multiples = this.multiplesId[index];
        // let multipleIds = [];//是否可叠加优惠劵id
        this.multiplesId.push(multiple);
        // console.log( this.multiplesIndex)
        // 单选
        let couponcheck = $('.couponcheck').eq(index)
        if (min <= this.orderInfo.service_sum) {
          if (this.multiplesId[0] == 0) {
            if (multiple == 0) {
              if (couponcheck.hasClass('couponcheckbg')) {
                $('.couponcheck').removeClass('couponcheckbg')
                this.multiplesIndex = []
                this.worths = []
              } else {
                this.multiplesIndex = []
                this.worths = []
                $('.couponcheck').removeClass('couponcheckbg')
                $('.couponcheck').eq(index).addClass('couponcheckbg')
                this.multiplesIndex.push(id)
                this.worths.push(worth)
              }
            } else {
              this.$toast({
                message: '该优惠券不支持叠加使用'
              })
            }
          } else {
            if (multiple == 1) {
              if (couponcheck.hasClass('couponcheckbg')) {
                $('.couponcheck').eq(index).removeClass('couponcheckbg')
                this.multiplesIndex.splice($.inArray(id, this.multiplesIndex), 1);
                this.worths.splice($.inArray(id, this.worths), 1);
              } else {
                $('.couponcheck').eq(index).addClass('couponcheckbg')
                this.multiplesIndex.push(id)
                this.worths.push(worth)
              }
            } else {
              this.$toast({
                message: '该优惠券不支持叠加使用'
              })
            }
          }
        } else {
          this.$toast({
            message: '该优惠不合格'
          })
        }
        if (this.multiplesIndex.length == 0) {
          this.multiplesId = []
        }
      },
      couponBtn() {
        console.log(1)
        let data = this.common.getsign()
        let that = this
        this.coupon = false
        if (this.worths.length != 0) {
          this.worthsCount = this.worths.reduce(function (x, y) {
            return Number(x) + Number(y);
          });
        } else {
          this.worthsCount = 0
        }
        $.ajax({
          url: this.HOST + '/app/order/userCoupon',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: this.orderInfo.user_id,
            id: this.orderInfo.id,
            coupon_id: this.multiplesIndex.join(','),
          },
          dataType: "JSON",
          success: function (r) {
            if(r.status != 200){
              that.$toast({
                message:r.message
              })
              //初始化选择优惠券id和金额
              $('.couponcheck').removeClass('couponcheckbg')
              that.multiplesIndex = []
              that.worths = []
            }
          }
        })
      },
      // 弹出活动框
      activePopup() {
        $('.popupactive').css({
          display: 'flex'
        })
        console.log(1)
      },
      // 关闭活动框
      activeClose() {
        $('.popupactive').css({
          display: 'none'
        })
      }

    },
    mounted() {
      this.getOrderInfo();
      this.getCity();
      this.pagedatafn();
      let time = Math.round(((new Date()).getTime()) / 1000);
      this.minutes = (29 - (time - Number(this.orderInfo.add_time)) / 60).toFixed(0) >= 0 ? (29 - (time -
        Number(this.orderInfo.add_time)) / 60).toFixed(0) : 0
      if (this.minutes == 0) {
        this.seconds = 0
      } else {
        this.seconds = (60 - (time - Number(this.orderInfo.add_time)) % 60).toFixed(0) >= 0 ? (60 - (time -
          Number(this.orderInfo.add_time)) % 60).toFixed(0) : 0;
      }

      this.add();
      let ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        this.browser = false
        return true;
      } else {
        this.browser = true
        return false;
      }
    },
    created() {

    },
    watch: {
      second: {
        handler(newVal) {
          this.num(newVal);
        }
      },
      minute: {
        handler(newVal) {
          this.num(newVal);
        }
      }
    },
    computed: {
      second: function () {
        return this.num(this.seconds);
      },
      minute: function () {
        return this.num(this.minutes);
      }
    }
  };
</script>

<style lang="scss" scoped>
  /*活动弹出框*/
  .activecon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .55rem;
    height: 1.75rem;
    background: url("../../../../static/images/socialsecurity/social22.png");
    background-size: 100% 100%;

    .activeconLeft {
      color: #333;
      font-size: .6rem;
      display: flex;

      .activeconLefts {
        width: 1.15rem;
        vertical-align: middle;
        font-family: PingFangSC-Regular;
      }

      span {
        vertical-align: middle;
      }

      img {
        width: .8rem;
        height: .8rem;
        vertical-align: middle;
        margin-right: .4rem;
      }
    }

    .activeconRight {
      color: #F97A2E;
      font-size: .6rem;

      span {
        vertical-align: middle;
      }

      .activecons {
        padding-right: .1rem;
      }

      img {
        width: .375rem;
        height: .65rem;
        vertical-align: middle;
      }
    }
  }

  .popupactive {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2020;
    display: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, .61);

    .popupactiveimg {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 90%;
        height: 75vh;
      }
    }

    .activeclose {
      width: 1.7rem;
      height: 1.7rem;
      margin-top: 1rem;
    }
  }

  .mg15 {
    margin: 0 0.75rem;
  }

  .socialinfoTop {
    background: #fff;
  }

  .colF25 {
    color: #f25454;
  }

  .socialinfoBot {
    background: #fff;
    margin-top: 0.8rem;
  }

  .socialinfoBot .van-divider {
    margin: 0 0 0 0.55rem;
  }

  .socialinfoTop .van-divider {
    margin: 0 0 0 0.55rem;
  }

  .socialinfoItem {
    height: 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.55rem;
    padding-right: 0.55rem;
    font-size: 0.7rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }

  .socialname {
    font-size: 0.8rem;
    font-family: PingFangSC-Regular;
    color: #f97a2e;
  }

  .soccount {
    font-size: 0.8rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
  }

  .agreement {
    padding-left: 0.55rem;
    height: 2.1rem;
    font-size: 0.6rem;
    font-family: PingFangSC-Regular;
    display: flex;
    align-items: center;
  }

  .payflex img {
    width: 0.7rem;
  }

  .agreement img {
    width: 0.7rem;
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

  .coupon {
    .coupontitle {
      .coupontitles {
        display: flex;
        justify-content: center;
        padding-top: .75rem;
        padding-bottom: .75rem;
        color: #333;
        font-size: .9rem;
      }

      .couponclose {
        position: absolute;
        right: 1rem;
        top: 1rem;

        img {
          width: .7rem;
          height: .7rem;
        }
      }
    }

    .couponlist {
      padding: 0 .6rem;

      #couponto {
        height: 60vh;
        overflow: auto;
      }

      #couponto1 {
        height: 65vh;
        overflow: auto;
      }

      #couponto::-webkit-scrollbar {
        display: none;
      }

      #couponto1::-webkit-scrollbar {
        display: none;
      }

      .emtycoupon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;

        img {
          width: 4.125rem;
          height: 2.9rem;
        }

        span:nth-child(2) {
          font-size: .7rem;
          color: #333;
          padding: .6rem 0;
        }

        span:nth-child(3) {
          font-size: .6rem;
          color: #666666;
        }
      }

      .couponitems {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .couponitem1 {
          margin-top: .5rem;
          display: flex;
          background: url("../../../../static/images/socialsecurity/conpusbg.png");
          background-size: 100% 100%;
          width: 92%;
          height: 5.4rem;

          .couponmoney {
            width: 39%;
            display: flex;
            flex-direction: row;
            padding-top: 1rem;

            > div:nth-child(1) {
              font-size: 1.2rem;
              color: #fff;
              padding-left: .4rem;
            }

            > div:nth-child(2) {
              padding-top: 1rem;
              font-size: 2rem;
              color: #fff;
              line-height: 2rem;
            }
          }

          .couponcon {
            width: 61%;
            padding: .6rem .6rem .6rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .couponname {
              color: #666666;
              font-size: .7rem;
            }

            .coupontime {
              color: #666666;
              font-size: .6rem;
            }

            .coupondes {
              color: #666666;
              font-size: .6rem;
            }
          }
        }

        .couponcheck {
          width: .65rem;
          height: .65rem;
          background: url("../../../../static/images/socialsecurity/unselect.png");
          background-size: 100% 100%;

        }

        .couponcheckbg {
          width: .65rem;
          height: .65rem;
          background: url("../../../../static/images/socialsecurity/checked.png");
          background-size: 100% 100%;
        }
      }

      .couponitems1 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .couponitem1 {
          margin-top: .5rem;
          display: flex;
          background: url("../../../../static/images/socialsecurity/conpusbg1.png");
          background-size: 100% 100%;
          width: 100%;
          height: 5.4rem;

          .couponmoney {
            width: 39%;
            display: flex;
            flex-direction: row;
            padding-top: 1rem;

            > div:nth-child(1) {
              font-size: 1.2rem;
              color: #fff;
              padding-left: .4rem;
            }

            > div:nth-child(2) {
              padding-top: 1rem;
              font-size: 2rem;
              color: #fff;
              line-height: 2rem;
            }
          }

          .couponcon {
            width: 61%;
            padding: .6rem .6rem .6rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .couponname {
              color: #666666;
              font-size: .7rem;
            }

            .coupontime {
              color: #666666;
              font-size: .6rem;
            }

            .coupondes {
              color: #666666;
              font-size: .6rem;
            }
          }
        }

        .couponcheck {
          img {
            width: .65rem;
            height: .65rem;
          }
        }
      }

      .couponbtn {
        position: fixed;
        bottom: 0;
        background: #fff;

        img {
          padding: 0 2.5rem;
          width: 100%;
        }
      }

    }
  }

  .balances {
    .balancetitle {
      .balancetitles {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: .6rem 0;
        height: 4rem;

        > div:nth-child(1) {
          font-size: .8rem;
          color: #333333;
        }

        > div:nth-child(2) {
          font-size: 1.2rem;
          color: #F25454;
        }
      }

      .couponclose {
        position: absolute;
        right: 1rem;
        top: .7rem;

        img {
          width: .7rem;
          height: .7rem;
        }
      }

      .moneyVal {
        margin: 0 1.5rem;
        height: 2.15rem;
        padding-top: 1rem;
        /*border:1px solid #D5D5D5;
        border-radius:.3rem;*/
        .van-cell {
          width: 100%;
          height: 2.15rem;
          border: 1px solid #D5D5D5;
          border-radius: .3rem;
          outline: none;
          padding-left: 1rem;
          color: #333;
          font-size: .8rem;
        }

      }

      .couponbtn {
        position: fixed;
        bottom: 0;
        background: #fff;

        img {
          padding: 0 2.5rem;
          width: 100%;
        }
      }
    }
  }

  .integral {
    .integraltitle {
      .integraltitles {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: .6rem 0;
        height: 4rem;

        > div:nth-child(1) {
          font-size: .8rem;
          color: #333333;
        }

        > div:nth-child(2) {
          font-size: 1rem;
          color: #F97A2E;
        }
      }

      .isintegral {
        font-size: .7rem;
        margin: 0 1.5rem;
        height: 2rem;
        display: flex;
        align-items: center;
        color: #333;

        img {
          width: .65rem;
          height: .65rem;
        }

      }
      .isintegralrule{
        margin: 0 1.5rem;
        color: #666;
        font-size: .6rem;
      }
      .couponclose {
        position: absolute;
        right: 1rem;
        top: .7rem;

        img {
          width: .7rem;
          height: .7rem;
        }
      }

      .moneyVal {
        margin: 0 1.5rem;
        height: 2.15rem;

        .van-cell {
          width: 100%;
          height: 2.15rem;
          border: 1px solid #D5D5D5;
          border-radius: .3rem;
          outline: none;
          padding-left: 1rem;
          color: #333;
          font-size: .8rem;
        }

      }

      .couponbtn {
        bottom: 0;
        background: #fff;
        width: 100%;

      }
    }

    .addBtn {
      display: flex;
      justify-content: space-around;
      margin: 1rem 1.6rem;
      border-radius: 1rem;
      border: 1px solid #ccc;
      width: calc(100% - 3.2rem);
    }

    .addBtn div {
      width: 6.85rem;
      height: 1.95rem;
      line-height: 1.95rem;
      text-align: center;
      font-size: .7rem;
    }

    .addBtn div:nth-child(2) {
      /*background: #f97a2e;*/
      color: #f97a2e;
      border-left: 1px solid #ccc;
    }

  }

  .balanemty {
    .balanemtyimg {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      img {
        width: 4.125rem;
        height: 2.9rem;
      }

      span {
        color: #666666;
        font-size: .6rem;
        padding-top: .5rem;
      }
    }

    .balanemtyimg1 {
      padding: 1.375rem 3.5rem 0;

      img {
        width: 100%;
      }
    }
  }
</style>
