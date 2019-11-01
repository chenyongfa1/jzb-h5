<template>
  <div class="socialdetails">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="calculationresults mg16">
        <div class="calculationresultstop">
          <div class="counts">共需缴纳</div>
          <div class="moneycount">¥ {{count3}}</div>
        </div>
        <div class="calculationresultsbot">
          <div class="enterprise">
            <div class="enterprisecon">企业</div>
            <div class="enterprisecount">¥{{count1}}</div>
          </div>
          <div class="line"></div>
          <div class="personal">
            <div class="personalcon">个人</div>
            <div class="personalcount">¥{{count2}}</div>
          </div>
        </div>
      </div>
      <div class="calculationcondition">
        <div class="calculationconditiontitle mg16">计算条件</div>
        <div class="calculationconditioncon">
          <div class="calculacity">
            <van-cell-group>
              <div class="calculaitem calculacity" @click="getCity">
                <div class="showcity">
                  <div class="participantsLeft">
                    <span>参保城市</span>
                  </div>
                  <div class="participantsRight">
                    <span class="addInfo">{{cityNameVal === "" ? '请选择': cityNameVal}}</span>
                    <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
                  </div>
                </div>
                <p v-if="endTime != 0">最早可办理<em>{{isTime}}月份</em>业务，截点日为
                  <em>{{isTime}}月{{endTime}}日</em></p>
              </div>
              <div class="calculaitem calculacity" @click="showLevel">
                <div class="showcity">
                  <div class="participantsLeft">
                    <span>参保类型</span>
                  </div>
                  <div class="participantsRight">
                    <span class="addInfo">{{levelVal}}</span>
                    <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
                  </div>
                </div>
              </div>
              <div class="calculaitem calculacity" @click="showBase">
                <div class="showcity">
                  <div class="participantsLeft">
                    <span>参保基数</span>
                  </div>
                  <div class="participantsRight">
                    <span class="addInfo">{{baseVal !== "" ? baseVal:'请选择'}}</span>
                    <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
                  </div>
                </div>
              </div>
            </van-cell-group>
          </div>
        </div>
      </div>
      <div class="calculacon" v-if="count3 !=0">
        <div class="calculatitle">费用明细</div>
        <div class="detailInfolist ">
          <div class="detailInfoItem pd16">
            <div class="detailTitle col333">险种</div>
            <div class="detailenterprise col333">企业缴纳(元)</div>
            <div class="detailpersonal col333">个人缴纳(元)</div>
          </div>
          <div class="detailInfoItem pd16" v-for='(item ,index) in socialdetail3' :key="index">
            <div class="detailTitle col333">{{item.service_name}}</div>
            <div class="detailenterprise col333">{{item.company}}</div>
            <div class="detailpersonal col333">{{item.personal}}</div>
          </div>
          <div class="detailInfoItem pd16">
            <div class="detailTitle col333">小计</div>
            <div class="detailenterprise col333">{{count1}}</div>
            <div class="detailpersonal col333">{{count2}}</div>
          </div>
          <div class="countsoc pd16">
            <div class="detailTitle">合计：¥ {{count3}}
            </div>
          </div>
        </div>
      </div>
      <div class="subcalc">
        <div @click="getDetail">计算</div>
        <div @click="toSoclial">立即参保</div>
      </div>
      <div class="solialdetailscoupon">
        <van-popup
          v-model="isCity"
          round
          position="bottom"
          :style="{ height: '50%' }">
          <van-picker
            show-toolbar
            title="城市"
            :columns="columns"
            @cancel="isCity = false"
            @confirm="cityConfirm"
            @change="onChange"/>
        </van-popup>
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
                <van-radio :name="index" @click="getNameandLevel(item.level,item.level_name)" v-for="(item, index) in
              insured" :key="index">
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
            <div @click="insuredType = false">取消</div>
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
                         label=""
                         :placeholder="ifBaseSizeMin+'~'+ifBaseSizeMax"
                         label-width="0%"
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
                  class="radioImg"
                >
              </van-checkbox>
            </div>
          </div>
          <p class="ps-soc11">注：参保类型一经确认不能随意变更，请慎重选择！</p>
          <div class="addBtn">
            <div @click="ginsenBase = false">取消</div>
            <div @click="minBaseConfirm">确定</div>
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
        name: "socialdetails",
        components: {
            HeadNav,
            IsHeadEmty
        },
        data() {
            return {
                cityName: '',
                cityNameVal: '',
                levelVal: '请选择',
                baseVal: '',
                isCity: false,
                currentProvince: '',
                cityIdArr: [],
                cityIdArr1: [],
                citys: {},
                isTime: '0',
                endTime: '0',//截止日期
                insuredId: 0,//类型
                insuredType: false,
                icon: {
                    active: 'static/images/socialsecurity/checked.png',
                    inactive: 'static/images/coverage/unselect.png'
                },
                insured: [],
                ginsenBase: false,//基数
                ifBaseSize: "",
                minBase: false,
                minSocial: false,
                ifBaseSizeMin: 0,
                ifBaseSizeMax: 0,
                cityInfo: '',// 城市信息
                cityId:'',
                socialdetail1:'',//计算出来全部数据
                socialdetail2:'',//计算出来外层数据
                socialdetail3:'',//计算出来内层数据
                count1:0,
                count2:0,
                count3:0

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
            }
        },
        methods: {
            getCity() {
                this.isCity = true
            },
            //城市按钮
            cityConfirm(e, index) {
                this.isCity = false
                this.currentProvince = e[0]
                let city1 = this.cityIdArr1[this.cityIdArr[index[0]]][index[1]]
                this.cityNameVal = e[0] + " " + e[1]
                this.getCityInfo(city1)
                this.getLevel(city1)
                this.cityId = city1
                this.baseVal = ""
                this.ifBaseSize = ""
                this.minSocial = false
                this.minBase = false
                this.socialdetail1 = ""
                this.socialdetail2 = ""
                this.socialdetail3 = ""
                this.count1 = 0
                this.count2 = 0
                this.count3 = 0


            },
            // 获取当前城市信息
            getCityInfo(cityId) {
                let that = this
                let data = this.common.getsign()
                let time = this.nowTime()
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
                        if (that.cityInfo.payment_type == 0) {
                            if (Number(time.day) > Number(that.cityInfo.end_time)) {
                                let time1 = new Date(time.year, time.month + 1)
                                that.isTime = time1.getMonth() == 0 ? 12 : time1.getMonth()
                                that.endTime = that.cityInfo.end_time
                            } else {
                                that.isTime = time.month == 0 ? 12 : time.month
                                that.endTime = that.cityInfo.end_time
                            }
                        } else if (that.cityInfo.payment_type == 1) {
                            if (Number(time.day) > Number(that.cityInfo.end_time)) {
                                let time1 = new Date(time.year, time.month + 2)
                                that.isTime = time1.getMonth() == 0 ? 12 : time1.getMonth()
                                that.endTime = that.cityInfo.end_time
                            } else {
                                let time1 = new Date(time.year, time.month + 1)
                                that.isTime = time1.getMonth() == 0 ? 12 : time1.getMonth()
                                that.endTime = that.cityInfo.end_time
                            }
                        }
                    }
                })
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
                        const provinceList = Object.keys(citys)
                        that.currentProvince = provinceList[0]
                    }
                })
            },
            onChange(picker, values) {
                picker.setColumnValues(1, this.citys[values[0]]);
            },
            // 弹出类型
            showLevel() {
                if (this.cityInfo === "") {
                    this.$toast({
                        message: '请先选择城市'
                    })
                } else {
                    this.insuredType = true
                }
            },
            //获取等级
            getLevel(cityId) {
                let that = this
                let data = this.common.getsign()
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
                        that.levelVal = r.data[0].level_name
                        that.insuredId = 0
                        let levelcalculator = {
                            levelId: r.data[0].level,
                            levelName: r.data[0].level_name
                        }
                        window.localStorage.setItem('levelcalculator', JSON.stringify(levelcalculator))
                    }
                })
            },
            getNameandLevel(levelId, levelName) {
                let levelcalculator = {
                    levelId: levelId,
                    levelName: levelName
                }
                window.localStorage.setItem('levelcalculator', JSON.stringify(levelcalculator))
            },
            //类型确定
            insuredConfirm() {
                let levelcalculator = JSON.parse(window.localStorage.getItem('levelcalculator'))
                this.levelVal = levelcalculator.levelName
                this.insuredType = false
                this.baseVal = ""
                this.ifBaseSize = ""
                this.minSocial = false
                this.minBase = false
                this.socialdetail1 = ""
                this.socialdetail2 = ""
                this.socialdetail3 = ""
                this.count1 = 0
                this.count2 = 0
                this.count3 = 0
            },
            // 最低基数
            showBase() {
                if (this.cityInfo === "") {
                    this.$toast({
                        message: '请先选择城市'
                    })
                } else {
                    this.ginsenBase = true
                }
                this.ifBaseSizeMax = this.cityInfo.social_max_money
                this.ifBaseSizeMin = this.cityInfo.social_min_money
            },
            minSocialClick1() {
                if (this.minBase == false) {
                    this.minSocial = true
                } else {
                    this.minSocial = false
                }
                this.ifBaseSize = this.cityInfo.social_min_money
                this.count1 = 0
                this.count2 = 0
                this.count3 = 0
            }
            ,

            minBaseConfirm() {
                if (this.ifBaseSize !== "") {
                    if (Number(this.ifBaseSize) < Number(this.cityInfo.accumulation_min_money)) {
                        this.ifBaseSize = this.cityInfo.social_min_money
                    } else if (Number(this.ifBaseSize) > Number(this.cityInfo.social_max_money)) {
                        this.ifBaseSize = this.cityInfo.social_max_money
                    }
                    this.baseVal = this.ifBaseSize
                    this.ginsenBase = false
                } else {
                    this.$toast({
                        message: '请输入基数'
                    })
                }
                this.count1 = 0
                this.count2 = 0
                this.count3 = 0
            },
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
            },
            // 再来一单
            toSoclial() {
                this.$router.push({
                    name: 'socialsecurity'
                })
            },
            getDetail(){
                let data = this.common.getsign()
                let level = JSON.parse(window.localStorage.getItem('levelcalculator')).levelId
                let that = this
                if(this.cityNameVal === ""){
                    this.$toast({
                        message:'请选择城市'
                    })
                }else if(this.baseVal === ""){
                    this.$toast({
                        message:'请输入基数'
                    })
                }else{
                    $.ajax({
                        url: this.HOST + '/app/order/sumDetail',
                        type: "POST",
                        data: {
                            sign: data.sign,
                            time: data.time,
                            city_id: this.cityId,
                            level: level,
                            social: this.baseVal,
                            start: '2019-12',
                            end: '2019-12',
                            type: 1,
                            pay_type: 0,
                            calc:'calc'
                        },
                        dataType: "JSON",
                        success: function (r) {
                            that.socialdetail1 = r.data
                            that.count3 = that.socialdetail1.total
                            let socialdetailArr = []
                            for (let i in r.data.list) {
                                socialdetailArr.push(r.data.list[i]);
                            }
                            that.count1 = that.socialdetail1.list.company_subtotal
                            that.count2 = that.socialdetail1.list.personal_subtotal
                            that.socialdetail2 = socialdetailArr
                            that.socialdetail3 = socialdetailArr.slice(0,-3)


                        }
                    })
                }

            }
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

  .calculationresults {
    width: calc(100% - 1.6rem);
    height: 6.6rem;
    background: url("../../../static/images/calculator/socialdetails/socialdetails1.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    color: #fff;

    .calculationresultstop {
      display: flex;
      flex-direction: column;
      height: 52%;
      width: 100%;
      align-items: center;
      justify-content: center;

      .counts {
        font-size: .8rem;
      }

      .moneycount {
        font-size: 1.25rem;
        font-weight: bold;
      }
    }

    .calculationresultsbot {
      display: flex;
      height: 48%;
      border-top: 1px solid rgba(230, 230, 230, 0.34);

      .enterprise {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .enterprisecon {
          font-size: .6rem;
        }

        .enterprisecount {
          font-size: .9rem;
        }
      }

      .line {
        width: 1px;
        height: 100%;
        background: rgba(230, 230, 230, 1);
        opacity: 0.65;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .personal {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .personalcon {
          font-size: .6rem;
        }

        .personalcount {
          font-size: .9rem;
        }
      }
    }

  }

  .calculationcondition {
    .calculationconditiontitle {
      height: 1.9rem;
      line-height: 1.9rem;
      font-size: .8rem;
      color: #333;
    }

    .calculacity {
      .calculaitem {
        border-bottom: 1px solid #E6E6E6;
        margin-left: .8rem;
        padding-right: .8rem;
      }

      .calculacity {
        height: 2.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .showcity {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .participantsLeft {
            color: #666666;
            font-size: .7rem;
          }

          .participantsRight {
            img {
              width: .375rem;
              height: .65rem;
              vertical-align: middle;
            }

            span {
              color: #333;
              font-size: .7rem;
              vertical-align: middle;
            }
          }
        }

        > p {
          font-size: .6rem;
          color: #B2B2B2;

          em {
            color: #F97A2E;
            font-style: normal;
          }
        }
      }

      .calculacity:last-child {
        border-bottom: 0;
      }
    }
  }

  .col333 {
    color: #333;
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

  .up-title {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    color: #666;
  }

  .radioImg {
    width: .75rem;
    height: .75rem;
  }

  .ps-soc1 {
    font-size: .6rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
    text-align: center;
    padding: .3rem 0 .6rem;
  }

  /*最低基数*/
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
    padding: .75rem .75rem 1.1rem .75rem;
  }

  .ps-soc11 {
    font-size: .6rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
    padding-left: .75rem;
  }

  /*明细*/
  .calculacon {
    .calculatitle {
      font-size: .8rem;
      color: #333;
      padding: .75rem 0 .325rem .8rem
    }

  }

  .detailInfolist {
    background: #fff;
  }

  .detailInfolist .detailInfoItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.3rem;
    background: #fff;
    border-bottom: 1px solid #E6E6E6;
  }

  .detailInfolist .detailInfoItem > div {
    width: calc(100% / 3);
  }

  .detailInfolist .detailInfoItem .detailenterprise {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #666;
    text-align: right;
  }

  .detailInfolist .detailInfoItem .detailpersonal {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #666;
    text-align: right;
  }

  .detailInfolist .detailInfoItem .col333 {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }

  .countsoc {
    height: 2.625rem;
    line-height: 2.625rem;
  }

  .countsoc .detailTitle {
    font-size: .7rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
  }

  /*提交按钮*/
  .subcalc {
    margin: 2rem 10% 1rem;
    width: 86%;
    height: 2rem;
    display: flex;

    > div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: .8rem;
    }

    > div:nth-child(1) {
      background: url("../../../static/images/calculator/socialdetails/socialdetails2.png");
      background-size: 100% 100%;
    }

    > div:nth-child(2) {
      background: url("../../../static/images/calculator/socialdetails/socialdetails3.png");
      background-size: 100% 100%;
    }
  }
</style>
