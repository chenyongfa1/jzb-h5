<template>
  <div>
    <div class="insured mg16">
      <div class="activecon" @click="activePopup">
        <div class="activeconLeft">
          <img src="../../../static/images/socialsecurity/social11.png" alt="">
          <span>服务费直减</span>
        </div>
        <div class="activeconRight">
          <span class="activecons">查看活动</span>
          <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
        </div>
      </div>
      <router-link to="/myparticipants" class="participants">
        <div class="participantsLeft">
             <span class="parLftemty">
                <img src="../../../static/images/socialsecurity/insured.png" alt="">
            </span>
          <span>参保人</span>
        </div>
        <div class="participantsRight">
          <span v-if="this.name == undefined? this.name='请选择参保人':this.name">{{name}}</span>
          <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
        </div>
      </router-link>
      <div class="insuredLine"></div>
      <div class="insuredCity">
        <div class="insuredCityInfo" @click="isCity">
          <div class="participantsLeft">
              <span class="parLftemty">
                <img src="../../../static/images/socialsecurity/localtion.png" alt="">
              </span>
            <span>参保城市</span>
          </div>
          <div class="participantsRight">
            <span class="addInfo">{{addrInfo}}</span>
            <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
          </div>
        </div>
        <p v-if="showMonth">最早可办理<em>{{isTime}}月份</em>业务，截点日为
          <em>{{isTime}}月{{endTimeMonth}}日</em></p>
      </div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }">
      <van-picker show-toolbar @cancel="cancel" value-key="text" @confirm="confirm" title="参保城市"
                  @change="onChange"
                  :columns="columns1"/>
    </van-popup>
<!--    活动弹窗-->
    <div class="popupactive">
      <div class="popupactiveimg">
        <img src="../../../static/images/socialsecurity/active1.png" alt="">
      </div>
      <img @click="activeClose" class="activeclose" src="../../../static/images/socialsecurity/activeclose.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "participants",
    data() {
      return {
        areaList: [],
        show: false,
        cityIdArr: [],
        cityIdArr1: [],
        addrInfo: "请选择参保城市",
        currentProvince: '',
        userinfo: '',
        name: "",
        citys: {},
        firstSecurity: {
          particpantsuserId: '',
          particpantscityId: '',
          particpantscity: '请选择参保城市'
        },
        endTimeMonth: '',
        nowDateMonth: '',
        nowDateDay: '',
        nowDateyear: '',
        showMonth: false,
        particId: '',
        isTime: new Date(),
      }
    },
    computed: {
      columns1() {
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
      getCity() {
        this.$ajax.post(this.HOST + '/app/index/getCity')
          .then((res) => {
            let citys = {}
            for (const item of res.data.data) {
              this.cityIdArr.push(item.id)
              citys[item.area_name] = item.item.map(item => item.area_name)
              this.cityIdArr1[item.id] = item.item.map(item => item.id)
            }
            this.citys = citys
            const provinceList = Object.keys(citys)
            this.currentProvince = provinceList[0]
          })

      },
      isCity() {
        this.show = true
      },
      cancel() {
        this.show = false
      },
      confirm(e, index) {
        this.show = false
        this.addrInfo = e[0] + " " + e[1]
        // this.cityIdArr[index[0]]
        this.currentProvince = e[0]
        let data = this.common.getsign()
        let that = this
        let city1 = this.cityIdArr1[this.cityIdArr[index[0]]][index[1]]
        window.localStorage.setItem("city", JSON.stringify(this.cityIdArr[index[0]]))
        window.localStorage.setItem("city1", JSON.stringify(city1))
        $.ajax({
          url: this.HOST + '/app/index/getCity',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            id: city1,
          },
          dataType: "JSON",
          success: function (r) {
            that.endTimeMonth = r.data.end_time
            that.showMonth = true
            if (Number(that.nowDateDay) > Number(that.endTimeMonth)) {
              if (r.data.payment_type == 0) {
                let timeStamp = new Date(that.nowDateyear, (Number(that.nowDateMonth) +
                  Number(2)))
                that.isTime = timeStamp.getMonth() == 0 ? 12 : timeStamp.getMonth()
              } else if (r.data.payment_type == 1) {
                let timeStamp = new Date(that.nowDateyear, (Number(that.nowDateMonth) +
                  Number(3)))
                that.isTime = timeStamp.getMonth() == 0 ? 12 : timeStamp.getMonth()
              }

            } else {
              if (r.data.payment_type == 0) {
                let timeStamp = new Date(that.nowDateyear, (Number(that.nowDateMonth) +
                  Number(1)))
                that.isTime = timeStamp.getMonth() == 0 ? 12 : timeStamp.getMonth()
              } else if (r.data.payment_type == 1) {
                let timeStamp = new Date(that.nowDateyear, (Number(that.nowDateMonth) +
                  Number(2)))
                that.isTime = timeStamp.getMonth() == 0 ? 12 : timeStamp.getMonth()
              }

            }
          }
        })

      },
      // 弹出活动框
      activePopup() {
        $('.popupactive').css({
          display:'flex'
        })
      },
      // 关闭活动框
      activeClose(){
        $('.popupactive').css({
          display:'none'
        })
      }
    },
    mounted() {
      this.getCity()
      this.nowDateMonth = new Date().getMonth()
      this.nowDateDay = new Date().getDate()
      this.nowDateyear = new Date().getFullYear()
    },
    created() {
      this.name = this.$route.query.name || undefined
      let priId = this.$route.query.id == undefined || this.$route.query.id
      window.localStorage.setItem('particId', JSON.stringify(priId))
      window.localStorage.setItem('particName', JSON.stringify(this.name))
    }
  }
</script>

<style lang="scss" scoped>
  .activecon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .8rem;
    height: 1.75rem;
    background: url("../../../static/images/socialsecurity/social22.png");
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
        height: 78vh;
      }
    }

    .activeclose {
      width: 1.7rem;
      height: 1.7rem;
      margin-top: 1rem;
    }
  }

  .insured {
    width: calc(100% - 1.6rem);
    background: #fff;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius: .3rem;
  }

  .parLftemty {
    display: inline-block;
    width: 1.7rem;
  }

  .participants {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.975rem;
    padding: 0 .8rem;

  }

  .participants .participantsLeft img {
    width: 1.05rem;
    height: 1rem;
    vertical-align: middle;
  }

  .participants .participantsLeft span {
    width: 1.05rem;
    height: 1rem;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333333;
    vertical-align: middle;
  }

  .participants .participantsRight img {
    width: .375rem;
    height: .65rem;
    vertical-align: middle;
  }

  .insuredLine {
    height: 1px;
    width: calc(100% - .8rem);
    margin-left: .8rem;
    background: #E6E6E6;
  }

  .participants .participantsRight span {
    width: 1.05rem;
    height: 1rem;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #333;
    vertical-align: middle;
  }

  .insuredCityInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.475rem;
  }

  .insuredCityInfo .participantsLeft img {
    width: .725rem;
    height: 1.075rem;
    vertical-align: middle;
  }

  .insuredCityInfo .participantsLeft span {
    width: 1.05rem;
    height: 1rem;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333333;
    vertical-align: middle;
  }

  .insuredCityInfo .participantsRight img {
    width: .375rem;
    height: .65rem;
    vertical-align: middle;
  }

  .insuredCityInfo .participantsRight span {
    width: 1.05rem;
    height: 1rem;
    font-family: PingFangSC-Regular;
    color: #333333;
    font-size: .7rem;
    vertical-align: middle;
  }

  .insuredCity {
    padding: 0 .8rem;
  }

  .insuredCity p {
    color: #B2B2B2;
    font-size: .6rem;
  }

  .insuredCity p em {
    font-style: normal;
    color: #F97A2E;
  }

  .cityfoot {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .addInfo {
    color: #333333;
    font-size: .7rem;
  }


</style>
