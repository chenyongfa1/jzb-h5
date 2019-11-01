<template>
  <div class="myorder">
    <HeadNav/>
    <div class="content">
      <div class="myorderlist">
        <!--<van-tabs v-model="active" swipeable :background="bgcol">
          <van-tab v-for="index in 4" info="5" :title="'选项 ' + index">
            内容 {{ index }}
          </van-tab>
        </van-tabs>-->
        <van-tabs v-model="active" title-active-color="#F97A2E" title-inactive-color="#333" :line-height="lineheight"
                  :background="bgcol">
          <van-tab>
            <div slot="title">
              待支付
              <van-icon class="info" :info="tobepaidcount"/>
            </div>
            <div v-if="tobepaidcount !== undefined" id="socal1">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list @load="onLoad" :finished="finished">
                  <div class="tobepaidlist">
                    <div class="tobepaiditem" v-for="(item,index) in tobepaid" :key="index">
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
                      <div v-if="timeArr[index] != 0" class="tobepaidname pd16" @click="toOrderDetail(item.id)">
                        <div>{{item.name}}的参保订单</div>
                        <div>
                          <van-icon name="arrow"/>
                        </div>
                      </div>
                      <div v-else class="tobepaidname pd16">
                        <div>{{item.name}}的参保订单<em>订单已失效</em></div>
                      </div>
                      <div class="myorderline"></div>
                      <div class="tobepaidcon padtop pd25">
                        <div class="tobepaidleft">
                          参保城市
                        </div>
                        <div class="tobepaidright">
                          {{item.area_name}}
                        </div>
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          参保月份
                        </div>
                        <div class="tobepaidright">
                          {{item.start_time}} 至 {{item.end_time}}
                        </div>
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          下单时间
                        </div>
                        <div class="tobepaidright">
                          {{item.add_time}}
                        </div>
                      </div>
                      <div class="tobepaidcon padbot pd25">
                        <div class="tobepaidleft">
                          费用总计
                        </div>
                        <div class="tobepaidright colf25">
                          ¥ {{item.total}}
                        </div>
                      </div>
                      <div class="myorderline"></div>
                      <div class="tobepaidbtn pd16">
                        <div class="tobepaidInvalid" v-if="timeArr[index] != 0">
                          订单还有{{timeArr[index]}}分钟失效
                        </div>
                        <div @click="deleteOrder(item.id)" v-if="timeArr[index] != 0" class="tobepaiddelete">
                          删除订单
                        </div>
                        <div @click="toPay(item.id,item.total)" v-if="timeArr[index] != 0" class="tobepaidpay">
                          去支付
                        </div>
                        <div v-else class="tobepaidpay tobepaidpay1">
                          去支付
                        </div>
                      </div>
                    </div>
                  </div>
                </van-list>
              </van-pull-refresh>
            </div>
            <div v-else class="defaultbg">
              <div class="myorderempty">
                <img src="../../../../static/images/default/myorderempty.png" alt="">
                <p>您还没有相关订单</p>
              </div>
              <div @click="again" class="myorderbtn">
                <p>去缴社保</p>
              </div>
            </div>
          </van-tab>
          <van-tab>
            <div slot="title">
              已支付
              <!--              <van-icon class="info" :info="tobepaidcount1"/>-->
            </div>
            <div v-if="tobepaidcount1 !== undefined" id="socal2">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh1">
                <van-list @load="onLoad1" :finished="finished">
                  <div class="tobepaidlist" id="tobepaidlist1">
                    <div class="tobepaiditem" v-for="(item,index) in tobepaid1" :key="index">
                      <div class="tobepaidname pd16">
                        <div class="tobe1">{{item.name}}的参保订单</div>
                        <div class="tobe2" @click="toSchedulequery(item.id)">
                          <span>进度查询</span>
                          <van-icon name="arrow"/>
                          <!--<img v-if="item.status == 1" src="../../../../static/images/my/myorder/inaudit1.png" alt="">
                          <img v-else-if="item.status == 2" src="../../../../static/images/my/myorder/inaudit2.png"
                               alt="">
                          <img  v-else-if="item.status == 3" src="../../../../static/images/my/myorder/inaudit3.png"
                                alt="">-->
                        </div>

                      </div>
                      <div class="myorderline"></div>
                      <div class="tobepaidcon padtop pd25">
                        <div class="tobepaidleft">
                          参保城市
                        </div>
                        <div class="tobepaidright">
                          {{item.area_name}}
                        </div>
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          参保月份
                        </div>
                        <div class="tobepaidright">
                          {{item.start_time}} 至 {{item.end_time}}
                        </div>
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          下单时间
                        </div>
                        <div class="tobepaidright">
                          {{item.add_time}}
                        </div>
                      </div>
                      <div class="tobepaidcon padbot pd25">
                        <div class="tobepaidleft">
                          费用总计
                        </div>
                        <div class="tobepaidright colf25">
                          ¥ {{item.total}}
                        </div>
                      </div>
                      <div class="myorderline"></div>
                      <div class="tobepaidbtn tobepaidbtn1 pd16">
                        <router-link :to="{name:'orderdetail',query: {id:item.id}}" class="tobepaiddelete">
                          查看订单
                        </router-link>
                        <div @click="again" class="tobepaidpay">
                          再来一单
                        </div>
                      </div>
                    </div>
                  </div>
                </van-list>
              </van-pull-refresh>
            </div>
            <div v-else class="defaultbg">
              <div class="myorderempty">
                <img src="../../../../static/images/default/myorderempty.png" alt="">
                <p>您还没有相关订单</p>
              </div>
              <div @click="again" class="myorderbtn">
                <p>去缴社保</p>
              </div>
            </div>
          </van-tab>
          <van-tab>
            <div slot="title">
              补差额
              <van-icon class="info" :info="tobepaidcount2"/>
            </div>
            <div v-if="tobepaidcount2 !== undefined" id="socal3">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh2">
                <van-list @load="onLoad2" :finished="finished">
                  <div class="tobepaidlist" id="tobepaidlist2">
                    <div class="tobepaiditem" v-for="(item,index) in tobepaid2" :key="index">
                      <div class="tobepaidname pd16">
                        <div class="tobe1">{{item.name}}的参保订单</div>
                      </div>
                      <div class="myorderline"></div>
                      <div class="tobepaidcon padtop pd25">
                        <div class="tobepaidleft">
                          订单号
                        </div>
                        <div class="tobepaidright">
                          {{item.order_sn}}
                        </div>
                        <!--<div class="arrowmyorder">
                          <van-icon name="arrow"/>
                        </div>-->
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          参保城市
                        </div>
                        <div class="tobepaidright">
                          {{item.area_name}}
                        </div>
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          补差月份
                        </div>
                        <div class="tobepaidright">
                          {{item.start_time}} 至 {{item.end_time}}
                        </div>
                      </div>
                      <div class="tobepaidcon pd25">
                        <div class="tobepaidleft">
                          待补差价
                        </div>
                        <div class="tobepaidright colf25">
                          ¥ {{item.total}}
                        </div>
                      </div>
                      <div class="tobepaidcon padbot pd25">
                        <div class="tobepaidleft">
                          补差原因
                        </div>
                        <div class="tobepaidright colf97">
                          {{item.remark}}
                        </div>
                      </div>
                      <div class="myorderline"></div>
                      <div class="tobepaidbtn tobepaidbtn1 pd16">
                        <div @click="toPay(item.id,item.total)" class="tobepaidpay">
                          去支付
                        </div>
                      </div>
                    </div>
                  </div>
                </van-list>
              </van-pull-refresh>
            </div>
            <div v-else class="defaultbg">
              <div class="myorderempty">
                <img src="../../../../static/images/default/myorderempty.png" alt="">
                <p>您还没有相关订单</p>
              </div>
              <div @click="again" class="myorderbtn">
                <p>去缴社保</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <div class="payout">
          <van-popup v-model="payShow" round position="bottom" :style="{ height: '80%' }">
            <div class="payTitle">
              费用总计：
              <span>{{payCount}}</span>
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
                      <input type="hidden" name="id" :value="orderId">
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
              <van-divider/>
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
  </div>
</template>

<script>
  import HeadNav from "@/components/common/header";
  import IsHeadEmty from "@/components/common/isheademty";

  export default {
    name: "myorder",
    components: {
      HeadNav,
      IsHeadEmty
    },
    data() {
      return {
        active: 1,
        fixed: false,
        bgcol: '#f2f2f2',
        lineheight: 0,
        socal1: false,
        socal11: false,
        orderlist: [
          {
            title: '待支付',
            info: 0
          },
          {
            title: '已支付',
            info: 0
          },
          {
            title: '补差额',
            info: 1
          },

        ],
        tobepaid: [],
        tobepaidcount: 0,
        tobepaid1: [],
        tobepaid2: [],
        tobepaidcount1: 0,
        tobepaidcount2: 0,
        page2: 1,
        count: 0,
        isLoading: false,
        loading: false,//控制上拉加载的加载动画
        finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
        deviceList: [],//用于存放加载的数据
        totalPage: 0,
        pageNumber: 0,
        page1: 1,
        page3: 1,
        time: "",
        city: "",
        dTime: '',
        minutes: 30,
        seconds: 0,
        timeArr: [],
        id: this.$route.query.id,
        payShow: false,
        payRadio: 0,
        icon: {
          active: "static/images/socialsecurity/checked.png",
          inactive: "static/images/coverage/unselect.png"
        },
        userId: JSON.parse(window.localStorage.getItem('userInfo')).id,
        orderId: '',
        pagedata: {},
        payCount: 0,
        browser: '',
        zfbPay: this.HOST + '/app/index/aliWapPay'

      }
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
      },

    },
    computed: {
      second: function () {
        return this.num(this.seconds);
      },
      minute: function () {
        return this.num(this.minutes);
      },

    },
    methods: {
      onRefresh() {
        // 未知付下拉刷新
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getOrderList()
          this.page1 = 1
        }, 500);
      },
      // 已知付下拉刷新
      onRefresh1() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getOrderList1()
          this.page2 = 1
        }, 500);
      },
      // 首次获取未支付
      getOrderList() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/order/getOrderList',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
            status: 0,
            p: 1
          },
          dataType: "JSON",
          success: function (r) {
            that.tobepaid = r.data.list || []
            that.tobepaidcount = r.data.count || undefined
            that.tobepaid.map((item, index) => {
              let time = Math.round(((new Date()).getTime()) / 1000);
              let time1 = Math.round(((new Date(item.add_time)).getTime()) / 1000);
              that.minutes = (30 - (time - time1) / 60).toFixed(0) >= 0 ? (30 - (time -
                time1) / 60).toFixed(0) : 0
              if (that.minutes == 0) {
                that.seconds = 0
              } else {
                that.seconds = (60 - (time - time1) % 60).toFixed(0) >= 0 ? (60 - (time -
                  time1) % 60).toFixed(0) : 0;
              }
              that.timeArr.push(that.minutes)

            })
            // console.log(that.timeArr)

          }
        })
      },
      // 首次获取已支付
      getOrderList1() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/order/getOrderList',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
            status: 1,
            p: 1
          },
          dataType: "JSON",
          success: function (r) {
            that.tobepaid1 = r.data.list || []
            that.tobepaidcount1 = r.data.count
          }
        })
      },
      // 未知付上拉加载
      onLoad() {

        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let page = (this.tobepaidcount / 10)
        document.getElementById("socal1").onscroll = function () {
          var scrollHeight = document.getElementById("socal1").scrollHeight;//251
          var scrollTop = document.getElementById("socal1").scrollTop;//0-18
          var clientHeight = document.getElementById("socal1").clientHeight;//233
          if ((scrollHeight - clientHeight) == scrollTop) {
            if (page > that.page1) {
              setTimeout(() => {
                $.ajax({
                  url: that.HOST + '/app/order/getOrderList',
                  type: "POST",
                  data: {
                    sign: data.sign,
                    time: data.time,
                    user_id: userInfo.id,
                    status: 0,
                    p: that.page1 + 1
                  },
                  dataType: "JSON",
                  success: function (r) {
                    if (r.status == 200) {
                      that.tobepaid = [...that.tobepaid, ...r.data.list] || []
                      that.page1++
                      that.timeArr = []
                      that.tobepaid.map((item, index) => {
                        let time = Math.round(((new Date()).getTime()) / 1000);
                        let time1 = Math.round(((new Date(item.add_time)).getTime()) / 1000);
                        that.minutes = (30 - (time - time1) / 60).toFixed(0) >= 0 ? (30 -
                          (time -
                            time1) / 60).toFixed(0) : 0
                        if (that.minutes == 0) {
                          that.seconds = 0
                        } else {
                          that.seconds = (60 - (time - time1) % 60).toFixed(0) >= 0 ? (60 - (time -
                            time1) % 60).toFixed(0) : 0;
                        }
                        that.timeArr.push(that.minutes)
                      })
                      that.$toast({
                        message: '加载第' + that.page1 + '页'
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
      // 已知付上拉加载
      onLoad1() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let page = (this.tobepaidcount1 / 10)
        document.getElementById("socal2").onscroll = function () {
          var scrollHeight = document.getElementById("socal2").scrollHeight;//251
          var scrollTop = document.getElementById("socal2").scrollTop;//0-18
          var clientHeight = document.getElementById("socal2").clientHeight;//233
          if ((scrollHeight - clientHeight) == scrollTop) {
            if (page > that.page2) {
              setTimeout(() => {
                $.ajax({
                  url: that.HOST + '/app/order/getOrderList',
                  type: "POST",
                  data: {
                    sign: data.sign,
                    time: data.time,
                    user_id: userInfo.id,
                    status: 0,
                    p: that.page2 + 1
                  },
                  dataType: "JSON",
                  success: function (r) {
                    if (r.status == 200) {
                      that.tobepaid1 = [...that.tobepaid1, ...r.data.list] || []
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
      // 首次获取补差额
      getOrderList2() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/order/getOrderList',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
            // status: 1,
            type: 1,
            p: 1
          },
          dataType: "JSON",
          success: function (r) {
            that.tobepaid2 = r.data.list || []
            that.tobepaidcount2 = r.data.count
          }
        })
      },
      // 补差额上拉加载
      onLoad2() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let page = (this.tobepaidcount2 / 10)
        document.getElementById("socal3").onscroll = function () {
          var scrollHeight = document.getElementById("socal3").scrollHeight;//251
          var scrollTop = document.getElementById("socal3").scrollTop;//0-18
          var clientHeight = document.getElementById("socal3").clientHeight;//233
          if ((scrollHeight - clientHeight) == scrollTop) {
            if (page > that.page3) {
              setTimeout(() => {
                $.ajax({
                  url: that.HOST + '/app/order/getOrderList',
                  type: "POST",
                  data: {
                    sign: data.sign,
                    time: data.time,
                    user_id: userInfo.id,
                    type: 1,
                    p: that.page2 + 1
                  },
                  dataType: "JSON",
                  success: function (r) {
                    if (r.status == 200) {
                      that.tobepaid2 = [...that.tobepaid2, ...r.data.list] || []
                      that.page3++
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
      // 补差额下拉刷新
      onRefresh2() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getOrderList2()
          this.page3 = 1
        }, 500);
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
      // 未支付跳转详情页
      toOrderDetail(id) {
        this.$router.push({
          // query:'/orderdetail'+ id
          name: 'unpaidinfo',
          query: {
            id: id
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
            that.$router.go(0)
          }
        })
      },
      deleteOrder(id) {
        this.socal1 = true
        window.localStorage.setItem('deleteOrder', JSON.stringify(id))
      },
      //微信支付
      //获取订单参数
      pagedatafn(orderId) {
        let that = this;
        $.ajax({
          url: this.HOST + "/app/wechat/wxJspay",
          type: "POST",
          data: {
            user_id: this.userId,
            id: orderId
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
      payConfirm() {
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
      toPay(id, total) {
        this.orderId = id
        this.payCount = total
        this.pagedatafn(id);
        this.payShow = true
      },
      again() {
        this.$router.push({
          name: 'socialsecurity'
        })
        // window.location.href = '/socialsecurity'
      },
      toSchedulequery(id){
        this.$router.push({
          path:'/schedulequery',
          query:{
            id:id,
          }
        })
      }
    },
    mounted() {
      this.getOrderList()
      this.getOrderList1()
      this.getOrderList2()
      this.add();
      let ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        this.browser = false
        return true;
      } else {
        this.browser = true
        return false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    background: #f2f2f2;
    top: 2.1rem;
  }

  .pd25 {
    padding: 0 1.25rem;
  }

  .info {
    top: -.5rem !important;
    right: -.5rem !important;
  }

  .myorderline {
    margin-left: .7rem;
    width: calc(100% - .7rem);
    height: 1px;
    background: #E6E6E6;
  }

  #socal1 {
    width: 100%;
    height: calc(100vh - 2.1rem);
    overflow: auto;
  }

  #socal2 {
    width: 100%;
    height: calc(100vh - 2.1rem);
    overflow: auto;
  }

  #socal3 {
    width: 100%;
    height: calc(100vh - 2.1rem);
    overflow: auto;
  }

  .tobepaidlist {
    .tobepaiditem {
      background: #fff;
      border-radius: .6rem;
      margin-bottom: .5rem;

      .tobepaidname {
        height: 2.2rem;
        line-height: 2.2rem;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;

        em {
          font-size: .7rem;
          color: #F97A2E;
          font-style: normal;
        }
      }

      .tobe1 {
        width: 40%;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tobe2 {
        width: 60%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #F97A2E;
        font-size: .6rem;
      }

      .tobepaidcon {
        display: flex;
        padding-top: .1rem;
        padding-bottom: .1rem;
        font-size: .7rem;
        color: #666;

        .tobepaidleft {
          width: 35%;
        }

        .tobepaidright {
          width: 50%;
        }

        .arrowmyorder {
          width: 15%;
          display: flex;
          justify-content: flex-end;
        }
      }

      .padtop {
        padding-top: .3rem;
      }

      .padbot {
        padding-bottom: .3rem;
      }

      .colf25 {
        color: #F25454;
      }

      .colf97 {
        color: #F97A2E;
      }

      .tobepaidbtn {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 3rem;

        .tobepaidInvalid {
          color: #F97A2E;
          font-size: .6rem;
          width: calc(100% - 4.2rem - 5.2rem);
        }

        .tobepaiddelete {
          width: 4.2rem;
          height: 1.95rem;
          background: url("../../../../static/images/myorder/detelebtn.png");
          background-size: 100% 100%;
          text-align: center;
          line-height: 1.95rem;
          color: #666;
          font-size: .8rem;
        }

        .tobepaidpay {
          width: 4.2rem;
          height: 1.95rem;
          background: url("../../../../static/images/myorder/paybtn.png");
          background-size: 100% 100%;
          text-align: center;
          line-height: 1.95rem;
          font-size: .8rem;
          color: #fff;
          /*margin-left: 1rem;*/

        }

        .tobepaidpay1 {
          background: url("../../../../static/images/myorder/paybtn1.png");
          background-size: 100% 100%;
        }
      }

      .tobepaidbtn1 {
        justify-content: flex-end;

        .tobepaiddelete {
          margin-right: 1.6rem;
        }
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

  .socialBtn .invalid {
    background: #B2B2B2;
  }

  .kefuphe a {
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

  .defaultbg {
    width: 100%;
    height: calc(100vh - 2.1rem - 2.2rem);

    .myorderempty {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 4.125rem;
        height: 2.9rem;
      }

      p {
        padding-top: .5rem;
      }

      color: #666;
      font-size: .7rem;
      margin-left: -2.6rem;
      margin-top: -5.45rem;
    }

    .myorderbtn {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -4rem;
      margin-top: 1rem;
      width: 9.25rem;
      height: 2.75rem;
      line-height: 2.75rem;
      text-align: center;
      font-size: .8rem;
      color: #fff;
      background: url("../../../../static/images/default/myorderbtn.png");
      background-size: 100% 100%;
    }
  }
</style>
