<template>
  <div class="immPay">
    <div class="joinPayBot">
      <div class="joinPayCon">
        <span >¥ {{((isPayInfo1?Number(payInfo1):0)　+ (isPayInfo2?Number(payInfo2):0)
          +(isPayBackPrice1?Number(payBackPrice1):0) +(isPayBackPrice2?Number(payBackPrice2):0)).toFixed(2)
          }}</span>
        <span>（不含服务费</span>
      </div>
      <div @click="insuredBtn" class="immediatelypay">立即参保</div>
    </div>
  </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "immpay",
        computed:mapState({
            payInfo1:state=>state.payInfo1,
            payInfo2:(state)=>state.payInfo2,
            payBackPrice1:(state)=>state.payBackPrice1,
            payBackPrice2:(state)=>state.payBackPrice2,
            isPayInfo2:(state)=>state.isPayInfo2,
            isPayInfo1:(state)=>state.isPayInfo1,
            isPayBackPrice1:(state)=>state.isPayBackPrice1,
            isPayBackPrice2:(state)=>state.isPayBackPrice2,
        }),
        data(){
          return{
             fund : JSON.parse(window.localStorage.getItem('fund')),
              moneyCount:""
            }
        },
        methods: {
            insuredBtn() {
                let social = JSON.parse(window.localStorage.getItem('social'))
                let fund = JSON.parse(window.localStorage.getItem('fund'))
                let isPay1 = JSON.parse(window.localStorage.getItem('isPay1'))
                let isPay2 = JSON.parse(window.localStorage.getItem('isPay2'))
                // 用户id
                let userId = JSON.parse(window.localStorage.getItem('userInfo')).id || undefined
                //参保人id
                let particId = JSON.parse(window.localStorage.getItem('particId')) || undefined
                //城市id
                let cityId = JSON.parse(window.localStorage.getItem('city1')) || undefined
                // 社保起始时间
                let payOfTime = JSON.parse(window.localStorage.getItem('payOfTime')) || undefined
                let shebao11 = payOfTime == undefined || payOfTime.getFullYear + '-' + payOfTime.getMonth
                //社保截止时间
                let payOfTime1 = JSON.parse(window.localStorage.getItem('payOfTime1')) || undefined
                let shebao22 = payOfTime1 == undefined || payOfTime1.getFullYear + '-' + payOfTime1.getMonth

                //公积金起始时间
                let payOfTime2 = JSON.parse(window.localStorage.getItem('payOfTime2')) || undefined
                let gjj11 = payOfTime2 == undefined || payOfTime2.getFullYear + '-' + payOfTime2.getMonth
                //公积金截止时间
                let payOfTime3 = JSON.parse(window.localStorage.getItem('payOfTime3')) || undefined
                let gjj22 = payOfTime3 == undefined || payOfTime3.getFullYear + '-' + payOfTime3.getMonth
                //补缴社保月份
                let bushebaoMonth = JSON.parse(window.localStorage.getItem('bushebaoMonth')) || undefined
                let bushebao1 = bushebaoMonth == undefined || bushebaoMonth[0]
                let bushebao2 = bushebaoMonth == undefined || bushebaoMonth[bushebaoMonth.length - 1]
                // 获取等级
                let levels = JSON.parse(window.localStorage.getItem('levels')).level || undefined//等级
                //补缴公积金月份
                let bugjjMonth = JSON.parse(window.localStorage.getItem('bugjjMonth')) || undefined
                let bugjj1 = bugjjMonth == undefined || bugjjMonth[0];
                let bugjj2 = bugjjMonth == undefined || bugjjMonth[bugjjMonth.length - 1];
                //社保基数
                let soclialBase = JSON.parse(window.localStorage.getItem('soclialBase')) || undefined
                //公积金基数
                let gjjBase = JSON.parse(window.localStorage.getItem('gjjBase')) || undefined
                //存储续交或开户按钮
                let fundNew1 = JSON.parse(window.localStorage.getItem('fundNew1'))
                let soclialNew1 = JSON.parse(window.localStorage.getItem('soclialNew1'))
                let con = $('.van-field__control').eq(0).val()//等级
                let con1 = $('.van-field__control').eq(1).val()//正常起始月份
                let con2 = $('.van-field__control').eq(2).val()//结束起始月份
                let con3 = $('.van-field__control').eq(3).val()//基数
                let con4 = $('.van-field__control').eq(4).val()//正常月份
                let con5 = $('.van-field__control').eq(5).val()//补缴月份起止
                let con6 = $('.van-field__control').eq(6).val()//正常起始月份
                let con7 = $('.van-field__control').eq(7).val()//结束起始月份
                let con8 = $('.van-field__control').eq(8).val()//结束起始月份
                let con9 = $('.van-field__control').eq(9).val()//基数
                let con10 = $('.van-field__control').eq(10).val()//补缴月份
                /*console.log('con'+con)
                console.log('con1'+con1)
                console.log('con2'+con2)
                console.log('con3'+con3)
                console.log('con4'+con4)
                console.log('con5'+con5)
                console.log('con6'+con6)
                console.log('con7'+con7)
                console.log('con8'+con8)
                console.log('con9'+con9)
                console.log('con10'+con10)*/
                if (social == false && fund == false) {
                    this.$toast({
                        message: '社保或公积金必选一项'
                    })
                } else if (social == true && fund == false) {
                    //正常交社保
                    if (con != "" && con1 != "" && con2 != "" && con3 != "") {
                        //正常交社保+补缴
                        if (isPay1 == true) {
                            if (con4 != "") {
                                this.placeOrder(userId, particId, cityId, soclialBase, shebao11, shebao22, bushebao1, bushebao2, levels, soclialNew1, "", "", "", "", "", "")
                            } else {
                                this.$toast({
                                    message: '社保补缴信息填写不完整，无法提交'
                                })
                            }
                        } else {
                            this.placeOrder(userId, particId, cityId, soclialBase, shebao11, shebao22, "", "", levels, soclialNew1, "", "", "", "", "", "")
                        }
                    } else {
                        this.$toast({
                            message: '社保信息填写不完整，无法提交'
                        })
                    }

                    //正常交公积金
                } else if (social == false && fund == true) {
                    if (con7 != "" && con8 != "" && con9 != "") {
                        //正常交公积金+补缴
                        console.log(this.isPay2)
                        if (isPay2 == true) {
                            if (con10 != "") {
                                this.placeOrder(userId, particId, cityId, "", "", "", "", "", "", "", fundNew1, gjj11, gjj22, bugjj1, bugjj2, gjjBase)
                            } else {
                                this.$toast({
                                    message: '公积金补缴信息填写不完整，无法提交'
                                })
                            }
                        } else {
                            this.placeOrder(userId, particId, cityId, "", "", "", "", "", "", "", fundNew1, gjj11, gjj22, "", "", gjjBase)
                        }
                    } else {
                        this.$toast({
                            message: '公积金填写不完整，无法提交'
                        })
                    }
                    //正常交公积金+社保
                } else if (social == true && fund == true) {
                    //正常交公积金+社保
                    if (isPay1 == false && isPay2 == false) {

                        if (con != "" && con1 != "" && con2 != "" && con3 != ""  && con7 != "" && con8
                            != "" && con9 != "") {
                            this.placeOrder(userId, particId, cityId, soclialBase, shebao11, shebao22, '', '', levels, soclialNew1, fundNew1, gjj11, gjj22, '', '', gjjBase)
                        } else {
                            this.$toast({
                                message: '社保或公积金填写不完整，无法提交'
                            })
                        }
                    }
                    //公积金+补缴公积金+社保+补缴社保
                    if (isPay1 == true && isPay2 == true) {
                        if (con != "" && con1 != "" && con2 != "" && con3 != "" && con4 != ""  && con7 != "" && con8
                            != "" && con9 != "" && con10 != "") {
                            this.placeOrder(userId, particId, cityId, soclialBase, shebao11, shebao22, bushebao1, bushebao2, levels, soclialNew1, fundNew1, gjj11, gjj22, bugjj1, bugjj2, gjjBase)
                        } else {
                            this.$toast({
                                message: '社保补缴或公积金填写不完整，无法提交'
                            })
                        }
                    }
                    //正常交公积金+社保+社保补缴
                    if (isPay1 == true && isPay2 == false) {
                        if (con != "" && con1 != "" && con2 != "" && con3 != "" && con4 != ""  && con7 != "" && con8 != "" && con9 != "") {
                            this.placeOrder(userId, particId, cityId, soclialBase, shebao11, shebao22, bushebao1, bushebao2, levels, soclialNew1, fundNew1, gjj11, gjj22, "", "", gjjBase)
                        } else {
                            this.$toast({
                                message: '社保补缴或公积金填写不完整，无法提交'
                            })

                        }
                    }
                    //正常交公积金+社保+公积金补缴
                    if (isPay1 == false && isPay2 == true) {
                        if (con != "" && con1 != "" && con2 != "" && con3 != ""  && con7
                            != "" && con8 != "" && con9 != "" && con10 != "") {
                            this.placeOrder(userId, particId, cityId, soclialBase, shebao11, shebao22, '', '',
                                levels, soclialNew1, fundNew1, gjj11, gjj22, bugjj1, bugjj2, gjjBase)
                        } else {
                            this.$toast({
                                message: '社保或公积金补缴填写不完整，无法提交'
                            })

                        }
                    }
                }
            },
            // 提交订单
            placeOrder(userId, accountId, cityId, socialCharge, socialNormalStart, socialNormalEnd, socialPayBackStart, socialPayBackEnd, level, socialNew, accumulationNew, accumulationNormalStart, accumulationNormalEnd, accumulationPayBackStart, accumulationPayBackEnd, accumulationCharge) {
                let that = this
                let data = this.common.getsign()
                $.ajax({
                    url: this.HOST + '/app/order/placeOrder',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        user_id: userId,//用户id
                        account_id: accountId,//参保人id
                        city_id: cityId,//城市id
                        social_charge: socialCharge,//社保基数
                        social_normal_start: socialNormalStart,//正常社保开始月份
                        social_normal_end: socialNormalEnd,//正常社保结束月份
                        social_pay_back_start: socialPayBackStart,//补缴社保开始月份
                        social_pay_back_end: socialPayBackEnd,//补缴社保结束月份
                        level: level,//等级
                        accumulation_normal_start: accumulationNormalStart,//公积金正常开始月份
                        accumulation_normal_end: accumulationNormalEnd,//公积金正常结束月份
                        accumulation_pay_back_start: accumulationPayBackStart,//公积金补缴开始月份
                        accumulation_pay_back_end: accumulationPayBackEnd,//公积金补缴结束月份
                        accumulation_charge: accumulationCharge,//公积金基数
                        terminal: 'h5',
                        social_new: socialNew,
                        accumulation_new: accumulationNew,
                    },
                    dataType: "JSON",
                    success: function (r) {
                      if(r.status == 200){
                          window.localStorage.setItem('orderInfo',JSON.stringify(r.data))
                          that.$router.push({
                              path:'/socialsecurity2'
                          })
                      }else {
                          that.$toast({
                              message: r.message
                          })
                      }
                    }
                })
            }
        },
        mounted() {
            // this.placeOrder()
        }
    }
</script>

<style scoped>
  .immPay {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;

  }

  .joinPayBot {
    display: flex;
  }

  .joinPayBot .joinPayCon {
    width: 60%;
    background: #F2F2F2;
    text-align: center;
  }

  .joinPayBot .joinPayCon span:nth-child(1) {
    font-size: .7rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
  }

  .joinPayBot .joinPayCon span:nth-child(2) {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
  }

  .joinPayBot .immediatelypay {
    width: 40%;
    background: #F97A2E;
    text-align: center;
    font-size: .9rem;
    font-family: PingFangSC-Regular;
    color: #fff;
  }
</style>
