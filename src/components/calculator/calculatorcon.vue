<template>
  <div class="calculatorcon">
    <div class="calculatorconlist mg18">
      <div class="calculatorconitem">
        <div class="calculatorcon-label">缴纳城市</div>
        <div class="calculatorcon-select" @click="getCity">
          <div class="calculatorconitem-left">{{cityname}}</div>
          <div class="calculatorconitem-right"></div>
        </div>
      </div>
      <div class="calculatorconitem">
        <div class="calculatorcon-label">参保类型</div>
        <div class="calculatorcon-select" @click="getInsured">
          <div class="calculatorconitem-left">{{levelsname}}</div>
          <div class="calculatorconitem-right"></div>
        </div>
      </div>
      <div class="calculatorconitem">
        <div class="calculatorcon-label">社保基数</div>
        <div class="calculatorcon-input">
          <div class="base">
            <input class="socialBase" data-numbox-min="12" type="number" placeholder="请输入基数">
          </div>
          <div class="range">范围：{{minBase}}-{{maxBase}}</div>
        </div>
      </div>
      <!--<div class="calculatorconitem">
        <div class="calculatorcon-label">是否计入公积金</div>
        <div class="calculatorcon-radio">
          <div class="calculatorconitem-left" @click="isFund1"
               :class="{'calculatorcon-radioimg':isActiveClass==1}">是</div>
          <div class="calculatorconitem-right" @click="isFund2"
               :class="{'calculatorcon-radioimg':isActiveClass==2}">否</div>
        </div>
      </div>-->
      <div class="calculatorconitem">
        <div class="calculatorcon-label">公积金基数</div>
        <div class="calculatorcon-input">
          <div class="base">
            <input class="fundbase" type="number" placeholder="请输入基数">
          </div>
          <div class="range">范围：{{minBase1}}-{{maxBase1}}</div>
        </div>
      </div>
      <div class="calculatorbtn">
        <div class="immediately" @click="calculationBtn">立即计算</div>
        <div class="calculatorchongzhi" @click="reset">重置</div>
      </div>
    </div>
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
            <van-radio :name="index" @click="getInsuredlevel(item.level,item.level_name)" v-for="(item, index) in
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
      <div class="addBtn">
        <div @click="insuredType = false">取消</div>
        <div @click="insuredConfirm">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>

    export default {
        name: "calculatorcon",
        data() {
            return {
                isActiveClass: '1',
                isCity: false,
                showToolbar: true,
                cityIdArr: [],
                cityIdArr1: [],
                currentProvince: '',
                insuredType: false,
                insuredId: 0,
                levelsname: '请选择社保类型',
                citys: {},
                insured: [],
                cityname: '请选择缴纳城市',
                icon: {
                    active: 'static/images/calculator/checked.png',
                    inactive: 'static/images/calculator/unselect.png'
                },
                minBase: 0,
                minBase1: 0,
                maxBase: 0,
                maxBase1: 0,
                baseInfo: '',
                socialBase: ''
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
            onChange(picker, values) {
                picker.setColumnValues(1, this.citys[values[0]]);
            },
            // 是的按钮
            isFund1() {
                this.isActiveClass = 1
                $('.fundbase').removeAttr('disabled')
            },
            // 否的按钮
            isFund2() {
                this.isActiveClass = 2
                $('.fundbase').attr('disabled', 'disabled')
            },
            // 计算按钮
            calculationBtn() {
                if (this.cityname == '请选择缴纳城市') {
                    this.$toast('请选择缴纳城市');
                } else if (this.levelsname == '请选择社保类型') {
                    this.$toast('请选择社保类型');
                } else {
                    if ($('.socialBase').val() != "" && $('.fundbase').val() == "") {
                        if ((Number($('.socialBase').val()) > Number(this.maxBase)) || Number($('.socialBase').val()) <
                            Number(this.minBase)) {
                            this.$toast('社保基数超出范围或公积金基数超出范围');
                        } else {
                            // let accumulationPrice = $('.fundbase').val()
                            let socialPrice = $('.socialBase').val()
                            this.getCalc(socialPrice, '')
                        }
                    } if ($('.socialBase').val() == "" && $('.fundbase').val() != "") {
                        if ((Number($('.fundbase').val()) > Number(this.maxBase1)) || Number($('.fundbase').val()) <
                            Number(this.minBase1)) {
                            this.$toast('填写的公积金基数超出范围');
                        } else {
                            let accumulationPrice = $('.fundbase').val()
                            // let socialPrice = $('.socialBase').val()
                            this.getCalc('', accumulationPrice)
                        }
                    }
                    if ($('.socialBase').val() != "" && $('.fundbase').val() != "") {
                        if ((Number($('.socialBase').val()) > Number(this.maxBase)) || Number($('.socialBase').val()) <
                            Number(this.minBase)) {
                            this.$toast('社保基数超出范围或公积金基数超出范围');
                        } else if ((Number($('.fundbase').val()) > Number(this.maxBase1)) ||
                            Number($('.fundbase').val()) <
                            Number(this.minBase1)) {
                            this.$toast('填写的公积金基数超出范围');
                        } else {
                            let accumulationPrice = $('.fundbase').val()
                            let socialPrice = $('.socialBase').val()
                            this.getCalc(socialPrice, accumulationPrice)
                        }
                    }
                }
                if($('.socialBase').val() == "" && $('.fundbase').val() == ""){
                    this.$toast('社保或公积金必选一项');
                }


            },
            /*if(this.cityname == '请选择缴纳城市'){
                this.$toast('请选择缴纳城市');
            }else if(this.levelsname == '请选择社保类型'){
                this.$toast('请选择社保类型');
            }else if($('.socialBase').val() == "" || $('.fundbase').val() == ""){
                this.$toast('请填写基数');
            }else if((Number($('.socialBase').val()) > Number(this.maxBase))  || Number($('.socialBase').val()) <
                Number(this.minBase)){
                this.$toast('填写的社保基数超出范围');
            }else {
                if(this.isActiveClass == "1"){
                    if((Number($('.fundbase').val()) > Number(this.maxBase1))  || Number($('.fundbase').val()) <
                        Number(this.minBase1)){
                        this.$toast('填写的公积金基数超出范围');
                    }else {
                        let accumulationPrice = $('.fundbase').val()
                        this.getCalc(accumulationPrice)
                    }
                }else {
                    this.getCalc()
                }
            }*/
            // 重置按钮
            reset() {
                this.$router.go(0)
            },
            // 获取城市
            getCity() {
                this.isCity = true
            },
            getCalc(socialPrice, accumulationPrice) {
                let that = this
                let data = this.common.getsign()
                let city_id = JSON.parse(window.localStorage.getItem('ydcity1'))
                console.log(city_id)
                let levels = JSON.parse(window.localStorage.getItem('ydlevels')).level
                $.ajax({
                    url: this.HOST + '/home/index/calc',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        city_id: city_id,
                        level: levels,
                        social_price: socialPrice,
                        accumulation_price: accumulationPrice,
                    },
                    dataType: "JSON",
                    success: function (r) {
                        window.localStorage.setItem('ydcalc', JSON.stringify(r.data))
                        that.$router.push({
                            name: 'computationalresults'
                        })
                    }
                })
            },
            //城市按钮
            cityConfirm(e, index) {
                this.isCity = false
                console.log(this.cityIdArr[index[0]]);
                this.currentProvince = e[0]
                let city1 = this.cityIdArr1[this.cityIdArr[index[0]]][index[1]]
                window.localStorage.setItem("ydcity", JSON.stringify(this.cityIdArr[index[0]]))
                window.localStorage.setItem("ydcity1", JSON.stringify(city1))
                this.cityname = e[0] + " " + e[1]
                this.getBase(city1)
                this.getInsuredList(city1)
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
            getInsured() {
                this.insuredType = true;
            },
            // 参保类型确定按钮
            insuredConfirm() {
                this.insuredType = false;
            },
            //获取参保类型
            getInsuredList(cityId) {
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
                        that.levelsname = r.data[0].level_name
                        let levels = {
                            level: r.data[0].level,
                        }
                        window.localStorage.setItem("ydlevels", JSON.stringify(levels))
                    }
                })
            },
            getInsuredlevel(level, name) {
                let levels = {
                    level: level,
                }
                this.levelsname = name
                window.localStorage.setItem('ydlevels', JSON.stringify(levels))
            },
            // 获取最低基数
            getBase(cityId) {
                let that = this
                let data = this.common.getsign()
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
                        that.baseInfo = r.data
                        that.maxBase = r.data.social_max_money
                        that.minBase = r.data.social_min_money
                        that.minBase1 = r.data.accumulation_min_money
                        that.maxBase1 = r.data.accumulation_max_money
                    }
                })
            }
        }
        ,
        mounted() {
            this.getCityList()
            // this.getInsuredList()
        }
    }
</script>

<style lang="scss" scoped>
  .mg18 {
    margin: 0 .9rem;
  }

  .calculatorcon {
    .calculatorconlist {
      .calculatorconitem {
        .calculatorcon-label {
          font-size: .8rem;
          height: 2.2rem;
          line-height: 2.2rem;
          font-weight: bold;
        }

        .calculatorcon-select {
          width: 100%;
          height: 1.75rem;
          line-height: 1.75rem;
          font-size: .6rem;
          color: #666666;
          font-weight: 300;
          background: url("../../../static/images/calculator/calculatorbg.png");
          background-size: 100% 100%;
          display: flex;
          justify-content: space-between;

          .calculatorconitem-left {
            padding-left: .6rem;
            width: 92%;
            line-height: 1.75rem;
          }

          .calculatorconitem-right {
            background: url("../../../static/images/calculator/popup.png");
            background-size: 100% 100%;
            z-index: 1;
            width: 8%;
          }
        }

        .calculatorcon-input {
          width: 100%;
          height: 1.75rem;
          line-height: 1.75rem;
          font-size: .6rem;
          color: #666666;
          font-weight: 300;
          display: flex;
          justify-content: space-between;
          border: 1px solid rgba(210, 210, 210, 1);
          box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.35);
          border-radius: .25rem;
          overflow: hidden;

          .base {
            width: 50%;

            input {
              width: 100%;
              height: 100%;
              display: block;
              padding-left: .6rem;
              border: 0;
            }
          }

          .range {
            width: 50%;
            text-align: center;
            background: rgba(238, 238, 238, 1);
            color: #666;
          }
        }

        .calculatorcon-radio {
          width: 100%;
          height: 1.75rem;
          line-height: 1.75rem;
          font-size: .85rem;
          color: #666666;
          font-weight: 300;
          display: flex;
          justify-content: space-between;
          border: 1px solid rgba(210, 210, 210, 1);
          box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.35);
          border-radius: .25rem;
          overflow: hidden;

          .calculatorconitem-left {
            width: 50%;
            text-align: center;
          }

          .calculatorconitem-right {
            width: 50%;
            text-align: center;
          }

          .calculatorcon-radioimg {
            background: url("../../../static/images/calculator/radioimg.png");
            background-size: 100% 100%;
            color: #fff;
          }
        }
      }

      .calculatorbtn {
        display: flex;
        justify-content: space-around;
        margin-top: 1.5rem;
        margin-bottom: 2.25rem;

        .immediately {
          width: 5.95rem;
          height: 1.875rem;
          line-height: 1.875rem;
          text-align: center;
          color: #fff;
          background: #EE9746;
          font-size: .7rem;
          border-radius: .25rem;
        }

        .calculatorchongzhi {
          width: 5.95rem;
          height: 1.875rem;
          line-height: 1.875rem;
          text-align: center;
          color: #fff;
          background: #D2D2D2;
          font-size: .7rem;
          border-radius: .25rem;
        }
      }
    }

  }

  input {
    color: #000;
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

  .van-divider {
    margin: 0;
  }

  .addBtn div:nth-child(2) {
    /*background: #f97a2e;*/
    color: #f97a2e;
    border-left: 1px solid #ccc;
  }

  .up-title {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    height: 1.4rem;
    text-align: center;
    line-height: 1.4rem;
    color: #666;
  }

  .addeducation img {
    width: .75rem;
    height: .75rem;
  }

  .educationradio {
    position: relative;
  }

</style>
