<template>
  <div class="social">
    <div class="social-title">
      <div class="soctitle left-ssoctitle">
        <img src="static/images/socialsecurity/she.png" alt="">
        <span>社保</span>
      </div>
      <div class="soctitle right-ssoctitle">
        <img @click="isSocial()" v-if="issocial" :src="icon.active" alt="">
        <img @click="isSocial()" v-else :src="icon.inactive" alt="">
        缴纳
      </div>
    </div>
    <van-divider/>
    <div class="socialgroup">
      <van-cell-group>
        <van-field
          label="参保类型"
          right-icon="arrow"
          disabled
          :placeholder="levelName"
          @click-right-icon="getInsured"
          label-width="50%"
          input-align="right"
          :value="levelNameVal"
          label-class="col333"
        />
        <van-field
          label="起缴月份"
          right-icon="arrow"
          disabled
          :placeholder="time1"
          @click-right-icon="payOffMonth"
          label-width="50%"
          input-align="right"
          :value="payOffVal"
        />
        <van-field
          label="截止月份"
          right-icon="arrow"
          disabled
          :placeholder="time1"
          @click-right-icon="endMonth"
          label-width="50%"
          input-align="right"
          :value="endVal"
        />
        <van-field
          label="参保基数"
          right-icon="arrow"
          disabled
          placeholder="请输入参保基数"
          @click-right-icon="getBase"
          label-width="50%"
          :value="ifBaseSize"
          input-align="right"
        />
        <div class="payType">
          <div class="payTypeTop">
            <div>缴纳类型</div>
            <div class="payRadio">
              <van-radio-group v-model="payRadio" >
                <van-radio name="1" @click="payRadioClick1">
                  续缴
                  <img
                    slot="icon"
                    slot-scope="props"
                    class="radioImg"
                    :src="props.checked ? icon.active : icon.inactive"
                  >
                </van-radio>
                <van-radio name="2" @click="payRadioClick1">
                  新开户
                  <img
                    slot="icon"
                    slot-scope="props"
                    class="radioImg"
                    :src="props.checked ? icon.active : icon.inactive"
                  >
                </van-radio>
              </van-radio-group>
            </div>
          </div>
          <div class="ps-socF97">如果您在当前城市缴纳过社保，请选择续缴</div>
        </div>
        <van-divider/>
        <div class="costSubtotal">
          <div class="costSubtotalTop" @click="toSocialDetail">
            <div class="cosMoney">费用小计</div>
            <div class="cosMoneyInfo">
              <span>￥{{payInfo1}}</span>
              <span>明细</span>
              <img src="static/images/socialsecurity/youjiantou.png" alt="">
            </div>
          </div>
          <div class="ps-socF97">注：当前城市社保强制缴纳，公积金可选</div>
        </div>
        <van-divider/>
        <div class="social-titleBu">
          <div class="soctitleBu left-ssoctitlebu">
            <img src="static/images/socialsecurity/bu.png" alt="">
            <span>社保补缴</span>
          </div>
          <div class="soctitle right-ssoctitlebu">
            <img @click="isPayClick()" v-if="isPay" :src="icon.active" alt="">
            <img @click="isPayClick()" v-else :src="icon.inactive" alt="">
            缴纳
          </div>
        </div>
        <div class="isbujiao1" v-model="isbujiao1">
          <van-divider/>
          <div class="costSubtotal ">
            <div>
              <van-field
                label="补缴月数"
                right-icon="arrow"
                disabled
                @click-right-icon="getMonth1"
                placeholder="请选择补缴月数"
                label-width="50%"
                input-align="right"
                label-class="col333"
                :value="paybackVal"
              />
            </div>
            <div>
              <van-field
                label=""
                disabled
                :placeholder="time1"
                input-align="right"
                label-class="col333"
                right-icon="emty"
                :value="showPayBackNum"
              />
            </div>
            <div class="ps-socF97 delpd5">当前城市允许补缴{{cityInfo.pay_back_amount}}个月</div>
          </div>
          <van-divider/>
          <div class="costSubtotal">
            <div class="costSubtotalTop" @click="toSocialDetail">
              <div class="cosMoney">费用小计</div>
              <div class="cosMoneyInfo">
                <span>¥ {{payBackPrice}}</span>
                <span>明细</span>
                <img src="static/images/socialsecurity/youjiantou.png" alt="">
              </div>
            </div>
            <div class="ps-socF97">注：补缴应购买当月社保，补缴费{{cityInfo.pay_back_price}}元/次</div>
          </div>
        </div>
      </van-cell-group>
    </div>
    <van-popup
      v-model="insuredType"
      round
      position="bottom"
      :style="{ height: '15.275rem' }">
      <h2 class="up-title">请选择参保类型</h2>
      <van-divider hairline/>
      <div class="addeducation">
        <div class="educationradio">
          <van-radio-group v-model="insuredId">
            <van-radio :name="index" @click="getNameandLevel(item.level_name,item.level)" v-for="(item, index) in
              insured">
              {{item.level_name}}
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <p class="ps-soc1">注：参保类型一经确认不能随意变更，请慎重选择！</p>
      <div class="addBtn">
        <div @click="cancel">取消</div>
        <div @click="insuredConfirm">确定</div>
      </div>
    </van-popup>
    <van-popup
      v-model="ginsenBase"
      round
      position="bottom"
      :style="{ height: '13.5rem' }">
      <h2 class="up-title">请输入参保基数</h2>
      <div class="addeducation">
        <div class="ginsenBase">
          <van-field v-if="minSocial == false"
                     type="number"
                     label="请输入参保基数"
                     :placeholder="ifBaseSizeMin+'~'+ifBaseSizeMax"
                     label-width="50%"
                     label-class="labelBase"
                     v-model="ifBaseSize"
          />
          <van-field v-else
                     type="text"
                     :label="ifBaseSize"
                     placeholder=""
                     label-width="50%"
                     label-class="labelBaseCol"
                     disabled
          />
          <van-checkbox v-model="minBase" @click="minSocialClick1">
            选择最低基数
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.inactive"
            >
          </van-checkbox>
        </div>
      </div>
      <p class="ps-soc11">注：参保类型一经确认不能随意变更，请慎重选择！</p>
      <div class="addBtn">
        <div @click="cancel">取消</div>
        <div @click="minBaseConfirm">确定</div>
      </div>
    </van-popup>
    <van-popup
      v-model="ginsenMonth"
      round
      position="bottom"
      :style="{ height: '18.575rem' }">
      <h2 class="up-title">起始月份</h2>
      <van-divider hairline/>
      <div class="addeducation">
        <div class="ginsenBase">
          <van-datetime-picker
            v-model="currentDate"
            type="year-month"
            :min-date="minDate"
            :formatter="formatter"
            :show-toolbar="showToolbar"
          />
        </div>
      </div>
      <div class="addBtn1">
        <div @click="cancel">取消</div>
        <div @click="shebaoConfirm">确定</div>
      </div>
    </van-popup>
    <van-popup
      v-model="ginsenMonth2"
      round
      position="bottom"
      :style="{ height: '18.575rem' }">
      <h2 class="up-title">截止月份</h2>
      <van-divider hairline/>
      <div class="addeducation">
        <div class="ginsenBase">
          <van-datetime-picker
            v-model="currentDate3"
            type="year-month"
            :min-date="minDate"
            :formatter="formatter"
            :show-toolbar="showToolbar"
          />
        </div>
      </div>
      <div class="addBtn1">
        <div @click="cancel">取消</div>
        <div @click="shebaoConfirm1">确定</div>
      </div>
    </van-popup>
    <van-popup
      v-model="setMonth"
      round
      position="bottom"
      :style="{ height: '50%' }">
      <div class="addeducation">
        <div class="ginsenBase">
          <van-picker
            show-toolbar
            title="补缴月数"
            :columns="columns"
            @cancel="cancel"
            @confirm="setMonthConfirm"
          />
        </div>
      </div>
      <div class="ps-soc11 bujiaops">补缴不支持隔月补，须与正常申报月份一同参保</div>
    </van-popup>
  </div>
</template>

<script>
    export default {
        name: "social",
        data() {
            return {
                aa: '',
                insuredType: false,
                ginsenBase: false,
                ginsenMonth: false,
                ginsenMonth1: false,
                ginsenMonth2: false,
                scopeOfCoverage: "",
                currentDate: new Date(),
                currentDate1: new Date(),
                currentDate2: new Date(),
                currentDate3: new Date(),
                minDate: new Date(),
                checkedshebao: true,
                paybackVal: '',
                checkedBase: 1,
                time1: '请选择时间',
                insuredId: 0,
                payBackPrice: '0',
                ifBaseSize: "",
                ifBaseSize1: '',
                bujiaoMonth: '',
                bujiaoRange: '',
                setMonth: false,
                payRadio: "1",
                minBaseNum: "2200",
                minSocial: false,
                showToolbar: false,
                isPay: false,
                minBase: 0,
                level_name: '',
                levelNameVal: '',
                baseVal: '',
                levelName: '请选择社保',
                level: '',
                isbujiao1: false,
                endVal: '',
                payOffVal: '',
                cityInfo: {},
                insured: [],
                toShow: false,
                toShow1: false,
                showPayBackNum: '',
                payInfo1: "0",
                columns: ['1个月', '2个月', '3个月', '4个月', '5个月', '6个月', '7个月', '8个月', '9个月', '10个月', '11个月', '12个月'],
                icon: {
                    active: 'static/images/socialsecurity/checked.png',
                    inactive: 'static/images/coverage/unselect.png'
                },
                cityId: JSON.parse(window.localStorage.getItem('city1'))[0],
                disabled: false,
                numPay:false,
                issocial:true,
                ifBaseSizeMax:'',
                newBase:'',
                ifBaseSizeMin:''
            }
        },
        methods: {
            // 取消
            cancel() {
                this.insuredType = false
                this.ginsenBase = false
                this.ginsenMonth = false
                this.ginsenMonth2 = false
                this.setMonth = false
            },
            //类型确定
            insuredConfirm() {
                this.insuredType = false
                let levels = JSON.parse(window.localStorage.getItem("levels"))
                this.levelNameVal = levels.name
            },
            // 最低基数
            minBaseConfirm() {
                let payOfTime = JSON.parse(window.localStorage.getItem('payOfTime'))
                let payOfTime1 = JSON.parse(window.localStorage.getItem('payOfTime1'))
                let nowTime = this.nowTime()
                if (this.ifBaseSize != "") {
                    if (this.payOffVal != "" && this.endVal != "") {
                        // 判断起始年份大于截止年份
                        if (payOfTime1.getFullYear > payOfTime.getFullYear) {
                            this.getDetail(this.insuredId, this.ifBaseSize, this.payOffVal, this.endVal)
                            //起始年份等于截止年份
                        } else if (payOfTime1.getFullYear == payOfTime.getFullYear) {
                            // 是否选择当前月
                            if (payOfTime.getFullYear == nowTime.year && payOfTime.getMonth == nowTime.month) {
                                if (this.cityInfo.start_time > nowTime.day) {
                                    this.getDetail(this.insuredId, this.ifBaseSize, this.payOffVal, this.endVal)
                                } else {
                                    this.$toast({
                                        message: '当月起缴月份已过，请选择下个月'
                                    })
                                }

                            } else {
                                //起始月份等于截止月份
                                if (payOfTime1.getMonth >= payOfTime.getMonth) {
                                    this.getDetail(this.insuredId, this.ifBaseSize, this.payOffVal, this.endVal)
                                    //起始月份等于截止月份
                                } else {
                                    this.$toast({
                                        message: '起缴日期不能大于截止日期'
                                    })
                                }
                            }
                        } else {
                            this.$toast({
                                message: '起缴日期不能大于截止日期'
                            })
                        }
                    } else {
                        this.$toast({
                            message: '请输入参保月数'
                        })
                    }
                } else {
                    this.$toast({
                        message: '请输入基数'
                    })
                }
            }
            ,
            // 明细接口
            getDetail(level, social, start, end, payType) {
                let type = ""
                if (Number(this.ifBaseSize) < Number(this.cityInfo.accumulation_min_money)) {
                    this.ifBaseSize = this.cityInfo.social_min_money
                } else if (Number(this.ifBaseSize) > Number(this.cityInfo.social_max_money)) {
                    this.ifBaseSize = this.cityInfo.social_max_money
                }
                if (type = 1) {
                    this.toShow = true
                } else {
                    this.toShow1 = true
                }
                this.ginsenBase = false
                let that = this
                let data = this.common.getsign()
                let cityId = JSON.parse(window.localStorage.getItem('city1'))
                $.ajax({
                    url: this.HOST + '/app/order/sumDetail',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        city_id: cityId,
                        level: level,
                        social: social,
                        start: start,
                        end: end,
                        type: 1,
                        pay_type: payType,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        if (payType == undefined) {
                            that.payInfo1 = r.data.total
                        }
                        that.payBackPrice = r.data.pay_back_price
                        if (payType == 2) {
                            //此处存值给社保和公积补缴金明细页面
                            window.localStorage.setItem('bushebaoMonth', JSON.stringify(Object.keys(r.data).slice(0,
                                -4)))
                        } else {
                            //此处存值给社保和公积金明细页面
                            window.localStorage.setItem('shebaoMonth', JSON.stringify(Object.keys(r.data).slice(0, -3)))
                        }
                        window.localStorage.setItem('soclialBase',JSON.stringify(that.ifBaseSize))
                    }
                })

            }
            ,
            // 补缴月数确认
            setMonthConfirm(value) {
                let time = this.nowTime()
                let payType = "2";
                if (parseInt(value) > this.cityInfo.pay_back_amount) {
                    this.$toast({
                        message: '补缴月数超出当前城市可补缴范围，请重新选择'
                    })
                } else {
                    this.setMonth = false
                    if (this.ifBaseSize != "") {
                        this.paybackVal = value
                        if ((time.month - parseInt(this.paybackVal)) < 1) {
                            let payBackMonth = (Number(time.month)) + 12 - (parseInt(this.paybackVal));
                            let payBackYear = Number(time.year) - 1
                            let startTime = payBackYear + '-' + this.zero(payBackMonth)
                            let startTime1 = time.year + '-' + this.zero((time.month))
                            this.showPayBackNum = startTime + ' 至 ' + startTime1
                            this.getDetail(this.insuredId, this.ifBaseSize, startTime, startTime1, payType)
                        } else {
                            let payBackMonth = (Number(time.month)) - (parseInt(this.paybackVal));
                            let startTime = time.year + '-' + this.zero(payBackMonth)
                            let startTime1 = time.year + '-' + this.zero((time.month) - 1)
                            this.showPayBackNum = startTime + ' 至 ' + startTime1
                            console.log( this.showPayBackNum)
                            this.getDetail(this.insuredId, this.ifBaseSize, startTime, startTime1, payType)
                        }
                    } else {
                        this.$toast({
                            message: "社保信息补全"
                        })
                    }
                }
            }
            ,
            // 社保参保月份
            shebaoConfirm() {
                this.ginsenMonth = false
                this.isPay = false
                $('.isbujiao1').css({
                    display: 'none'
                })
                let nowTime = this.currentDate.getFullYear() + '-' + this.zero((this.currentDate.getMonth() + 1))
                this.payOffVal = nowTime
                let payOfTime = {
                    getFullYear: this.currentDate.getFullYear(),
                    getMonth: this.currentDate.getMonth() + 1,
                };

                window.localStorage.setItem('payOfTime', JSON.stringify(payOfTime))
                window.localStorage.setItem('isPay1',JSON.stringify(this.isPay))
            }
            ,
            shebaoConfirm1() {
                this.ginsenMonth2 = false
                let nowTime = this.currentDate3.getFullYear() + '-' + this.zero((this.currentDate3.getMonth() + 1))
                this.endVal = nowTime
                let payOfTime1 = {
                    getFullYear: this.currentDate3.getFullYear(),
                    getMonth: this.currentDate3.getMonth() + 1,
                };
                window.localStorage.setItem('payOfTime1', JSON.stringify(payOfTime1))
            }
            ,
            getNameandLevel(name, level) {
                let levels = {
                    level: level,
                    name: name
                }
                window.localStorage.setItem("levels", JSON.stringify(levels))
            }
            ,
            //获取参保类型
            getInsured() {
                this.insuredType = true;
            }
            ,
            getLevel(){
                let that = this
                let data = this.common.getsign()
                let cityId = JSON.parse(window.localStorage.getItem('city1'))
                $.ajax({
                    url: this.HOST + '/app/common/getcityLevel',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        city_id: cityId,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.insured = r.data
                        that.levelNameVal = r.data[0].level_name
                        let levels = {
                            level: r.data[0].level,
                            name: r.data[0].level_name
                        }
                        window.localStorage.setItem("levels", JSON.stringify(levels))
                    }
                })
            },
            // 跳转明细页面
            toSocialDetail() {
                if (this.toShow) {
                    this.$router.push({
                        name: "funddetailed",
                        params: {}
                    });
                }
                if (this.toShow1) {
                    this.$router.push({
                        name: "funddetailed",
                        params: {}
                    });
                }

            }
            ,
            //获取基数
            getBase() {
                this.ginsenBase = true
                // this.getCityInfo()
            }
            ,
            getCityInfo() {
                let that = this
                let data = this.common.getsign()
                let cityId = JSON.parse(window.localStorage.getItem('city1'))
                $.ajax({
                    url: this.HOST + '/app/index/getCity',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        id: cityId,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.cityInfo = r.data
                        that.ifBaseSizeMin = r.data.social_min_money
                        that.ifBaseSizeMax = r.data.social_max_money
                    }
                })
            }
            ,
            isSocial(){
                this.issocial = !this.issocial
                window.localStorage.setItem('social', JSON.stringify(this.issocial))
                if (this.issocial) {
                    $('.socialgroup').css({
                        display: 'block'
                    })

                } else {
                    $('.socialgroup').css({
                        display: 'none'
                    })
                }
            },
            //获取月数
            getMonth() {

            }
            ,
            payRadioClick1(){
                window.localStorage.setItem('soclialNew1',JSON.stringify(this.payRadio))
            },
            payOffMonth() {
                this.ginsenMonth = true
            }
            ,
            endMonth() {
                this.ginsenMonth2 = true
            }
            ,
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value;
            }
            ,
            getMonth1() {
                this.setMonth = true
            }
            ,
            isPayClick() {
                // this.isPay = !this.isPay
                this.isbujiao1 = true
                let payOfTime = JSON.parse(window.localStorage.getItem('payOfTime'))
                let nowTime = this.nowTime()
                if (this.payOffVal != "" && this.endVal != "") {
                    if(payOfTime.getFullYear = nowTime.year){
                        if(payOfTime.getMonth > nowTime.month){
                            this.disabled = true
                            this.$toast('补缴不支持隔月补，须与正常申报月份一同参保')
                        }else {
                            this.disabled = false
                            this.isPay = !this.isPay
                        }
                    }else {
                        this.disabled = true
                        this.$toast('补缴不支持隔月补，须与正常申报月份一同参保')
                    }
                }else {
                    this.disabled = true
                    this.$toast('选择参保月份')
                }
                if(this.numPay == false){
                    if (this.isPay) {
                        $('.isbujiao1').css({
                            display: 'block'
                        })
                    } else {
                        $('.isbujiao1').css({
                            display: 'none'
                        })

                    }
                }
                window.localStorage.setItem('isPay1',JSON.stringify(this.isPay))
            }
            ,
            shebaoClick1() {
                window.localStorage.setItem('social', JSON.stringify(this.checkedshebao))
                if (this.checkedshebao == true) {
                    $('.socialgroup').css({
                        display: 'none'
                    })
                } else {
                    $('.socialgroup').css({
                        display: 'block'
                    })
                }
            }
            ,

            minSocialClick1() {
                if (this.minBase == false) {
                    this.minSocial = true
                } else {
                    this.minSocial = false
                }
                this.ifBaseSize = this.cityInfo.social_min_money
            }
            ,
            zero(n) {
                if (n > 9) {
                    return n
                } else {
                    return "0" + n;
                }
            }
            ,
            nowTime() {
                let date = new Date()
                let time = {}
                time.year = date.getFullYear()
                time.month = this.zero(date.getMonth() + 1)
                time.day = this.zero(date.getDate())
                return time
            }
            ,
            showCon() {
                if (this.isPay == false) {
                    $('.isbujiao1').css({
                        display: 'none'
                    })
                }
                if (this.checkedshebao == false) {
                    $('.socialgroup').css({
                        display: 'none'
                    })
                }
            }
            ,

        }
        ,
        mounted() {
            this.getCityInfo()
            this.showCon()
            this.getLevel()

        }
        ,

        created() {
            window.localStorage.setItem('social', JSON.stringify(this.issocial))
            window.localStorage.setItem("isPay1", JSON.stringify(this.isPay))
            //存储续交或开户按钮
            window.localStorage.setItem('soclialNew1',JSON.stringify(this.payRadio))
        }

    }
</script>

<style scoped>
  .social .van-divider--hairline {
    padding-left: 1.75rem;
  }

  .social .van-cell:not(:last-child)::after {
    left: 1.75rem;
  }

  .social .van-divider {
    margin: 0;
  }

  .delpd5 {
    padding-top: 0 !important;
  }

  .col333 {
    color: #333 !important;
  }

  .bujiaops {
    padding-top: 1rem;
    text-align: center;
  }

  .ps-soc11 {
    font-size: .6rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
    padding-left: .75rem;
  }

  .social img {
    width: .75rem;
    height: .75rem;
  }

  .ps-soc1 {
    font-size: .6rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
    text-align: center;
    padding: .3rem 0 .6rem
  }

  .social {
    margin: .5rem .75rem 0;
    width: calc(100% - 1.5rem);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius: .3rem;
  }

  .social-title {
    display: flex;
    justify-content: space-between;
    height: 1.9rem;
  }

  .soctitle {
    display: flex;
    align-items: center;
    padding: 0 .5rem;

  }

  .soctitle span {
    display: block;
    vertical-align: middle;
  }

  .left-ssoctitle span:nth-child(2) {
    padding-left: .5rem;
    font-size: .8rem;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }

  .right-ssoctitle span:nth-child(2) {
    padding-left: .5rem;
    font-size: .65rem;
    font-family: PingFangSC-Regular;
    color: #666666;
  }

  .socialgroup .van-cell {
    padding: 0 .5rem 0 1.75rem;
    height: 2.1rem;
    line-height: 2.1rem;
  }

  .educationradio {
    position: relative;
  }

  .up-title {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    color: #666;
  }

  .van-divider {
    margin: 0;
  }

  .addeducation .van-radio-group {
    display: flex;
    flex-wrap: wrap;
    height: 6.5rem;
    /*justify-content: center;*/
  }

  .addeducation .van-radio {
    padding-left: 5.25rem;
    display: flex;
    justify-content: center;
    color: #333333;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
  }

  .addBtn {
    display: flex;
    justify-content: space-around;
    margin: 1rem 1.6rem 0;
    border-radius: 1rem;
    border: 1px solid #ccc;
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

  .ginsenBase {
    margin: 0 .75rem
  }

  .ginsenBase .van-cell {
    border: 1px solid #E6E6E6;
  }

  .ginsenBase .van-checkbox {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333333;
    padding: .75rem .75rem 1.1rem .75rem
  }

  .addBtn1 {
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
  }

  .addBtn1 div {
    width: 6.85rem;
    height: 1.95rem;
    line-height: 1.95rem;
    text-align: center;
    font-size: .7rem;
  }

  .addBtn1 div:nth-child(2) {
    background: #f97a2e;
    color: #fff;
  }

  .payType {
    padding-top: .5rem;
  }

  .payTypeTop {
    display: flex;
    justify-content: space-between;
    padding-left: 1.75rem;
    color: #333;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
  }

  .payTypeTop .van-radio-group {
    display: flex;
  }

  .payTypeTop .van-radio-group .van-radio {
    padding-left: 1.55rem;
    padding-right: .5rem;
  }

  .ps-socF97 {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: rgba(249, 122, 46, 1);
    text-align: right;
    padding: .5rem;
  }

  .payType .van-divider {
    padding-left: 1.75rem;
  }

  .costSubtotalTop {
    display: flex;
    justify-content: space-between;
    padding-left: 1.75rem;
    color: #333;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    padding-top: .5rem;
  }

  .costSubtotalTop .cosMoney {
    color: #F25454;
    vertical-align: middle;
  }

  .costSubtotalTop .cosMoneyInfo {
    padding-right: .5rem;
  }

  .costSubtotalTop .cosMoneyInfo span:nth-child(1) {
    color: #F25454;
    vertical-align: middle;
  }

  .costSubtotalTop .cosMoneyInfo span:nth-child(2) {
    color: #333333;
    vertical-align: middle;
    padding: 0 .5rem
  }

  .costSubtotalTop .cosMoneyInfo img {
    width: .375rem;
    height: .625rem;
    vertical-align: middle;
  }

  .social-titleBu {
    display: flex;
    justify-content: space-between;
    height: 1.9rem;
  }

  .soctitleBu {
    display: flex;
    align-items: center;
    padding: 0 .5rem;

  }

  .soctitleBu span {
    display: block;
    vertical-align: middle;
  }

  .left-ssoctitlebu span:nth-child(2) {
    padding-left: .5rem;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
  }
  .right-ssoctitle{
    font-size: .7rem;
    color: #666;
  }
  .right-ssoctitle img{
    margin-right: .35rem;
  }

  .right-ssoctitlebu{
    font-size: .7rem;
    color: #666;
  }
  .right-ssoctitlebu img{
    margin-right: .35rem;
  }
  .right-ssoctitlebu span:nth-child(2) {
    padding-left: .5rem;
    font-size: .65rem;
    font-family: PingFangSC-Regular;
    color: #666666;
  }

</style>
