<template>
    <div class="fund">
      <div class="fund-title">
        <div class="fundtitle left-fundtitle">
          <img src="static/images/socialsecurity/find.png" alt="">
          <span>公积金</span>
        </div>
        <div class="fundtitle right-fundtitle">
          <van-checkbox v-model="isPay2"   @click="shebaoClick2">
            缴纳
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.inactive"
            >
          </van-checkbox>
        </div>
      </div>
      <van-divider />
      <div class="fundgroup">
        <van-cell-group>
          <van-field
            label="起缴月份"
            right-icon="arrow"
            disabled
            :placeholder="time1"
            @click-right-icon="payOffMonth"
            label-width="50%"
            input-align="right"
            :value="payOffVal"
            label-class="col333"
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
            label-class="col333"
          />
          <van-field
            label="参保基数"
            right-icon="arrow"
            disabled
            placeholder="2200"
            @click-right-icon="getBase"
            label-width="50%"
            :value="ifBaseSize"
            input-align="right"
            label-class="col333"
          />
          <div class="payType">
            <div class="payTypeTop">
              <div>缴纳类型</div>
              <div class="payRadio">
                <van-radio-group v-model="payRadio">
                  <van-radio @click="payRadioClick1" name="1">
                    新开户
                    <img
                      slot="icon"
                      slot-scope="props"
                      class="radioImg"
                      :src="props.checked ? icon.active : icon.inactive"
                    >
                  </van-radio>
                  <van-radio name="2"  @click="payRadioClick1">
                    续缴
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
          <van-divider />
          <div class="costSubtotal">
            <router-link :to="{name:'funddetailed'}" class="costSubtotalTop">
              <div class="cosMoney">费用小计</div>
              <div class="cosMoneyInfo">
                <span>¥ 2858.25</span>
                <span>明细</span>
                <img src="static/images/socialsecurity/youjiantou.png" alt="">
              </div>
            </router-link>
          </div>
          <van-divider />
          <div class="social-titleBu">
            <div class="soctitleBu left-ssoctitlebu">
              <img src="static/images/socialsecurity/bu.png" alt="">
              <span>公积金补缴</span>
            </div>
            <div class="soctitle right-ssoctitlebu">
              <van-checkbox v-model="isPay3" @click="isPayClick1">
                缴纳
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                >
              </van-checkbox>
            </div>
          </div>
          <div class="isbujiao2">
            <van-divider />
            <div class="costSubtotal ">
              <div>
                <van-field
                  label="参保月份"
                  right-icon="arrow"
                  disabled
                  :placeholder="time1"
                  @click-right-icon="getMonth"
                  label-width="50%"
                  input-align="right"
                  label-class="col333"
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
              <div class="ps-socF97 delpd5">当前城市允许补缴{{cityInfo.payback_mount}}个月</div>
            </div>
            <van-divider />
            <div class="costSubtotal">
              <router-link :to="{name:'funddetailed'}" class="costSubtotalTop">
                <div class="cosMoney">费用小计</div>
                <div class="cosMoneyInfo">
                  <span>¥ 2858.25</span>
                  <span>明细</span>
                  <img src="static/images/socialsecurity/youjiantou.png" alt="">
                </div>
              </router-link>
              <div class="ps-socF97">注：补缴应购买当月社保，补缴费{{cityInfo.pay_back_price}}元/次</div>
            </div>
          </div>
        </van-cell-group>
      </div>
      <van-popup
        v-model="ginsenBase"
        round
        position="bottom"
        :style="{ height: '13.5rem' }">
        <h2 class="up-title">请输入参保基数</h2>
        <div class="addeducation">
          <div class="ginsenBase">
            <van-field v-if="minBase==false"
              type="number"
              label="请输入参保基数"
              placeholder="2200~27927"
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
            <van-checkbox v-model="checkedBase" @click="baseClick1">
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
        v-model="ginsenMonth1"
        round
        position="bottom"
        :style="{ height: '18.575rem' }">
        <h2 class="up-title">截止月份</h2>
        <van-divider hairline/>
        <div class="addeducation">
          <div class="ginsenBase">
            <van-datetime-picker
              v-model="currentDate1"
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
        name: "fund",
      data(){
          return{
            ginsenBase:false,
            ginsenMonth:false,
            ginsenMonth1:false,
            currentDate: new Date(),
            currentDate1: new Date(),
            minDate: new Date(),
            checkedBase:false,
            minBase:false,
            insuredId:0,
            payRadio:1,
            showToolbar:false,
            isPay3:false,
            isPay2:false,
            isPay1:true,
            endVal:'',
            payOffVal:'',
            paybackVal:'',
            ifBaseSize:"",
            setMonth:false,
            cityInfo:'',
            time1:'请选择时间',
            columns: ['1个月', '2个月', '3个月', '4个月', '5个月','6个月', '7个月', '8个月','9个月', '10个月','11个月', '12个月'],
            showPayBackNum:'',
            icon: {
              active: 'static/images/socialsecurity/checked.png',
              inactive: 'static/images/coverage/unselect.png'
            },
          }
      },
      methods:{
        payRadioClick1(){
        },
        // 取消
        cancel(){
          this.insuredType = false
          this.ginsenBase = false
          this.ginsenMonth = false
        },
        //确定
        confirm(){
          this.insuredType = false
          this.ginsenBase = false
          this.ginsenMonth = false
        },
        //获取基数
        getBase(){
          this.ginsenBase = true
          let that = this
          let data = this.common.getsign()
          let cityId = JSON.parse(window.localStorage.getItem('city1'))
          $.ajax({
            url: this.HOST+'/app/index/getCity',
            type : "POST",
            data : {
              sign:data.sign,
              time:data.time,
              id:cityId,
            },
            dataType : "JSON",
            success : function(r) {
              that.cityInfo = r.data
            }
          })
        },
        // 最低基数
        minBaseConfirm(){
          let payOfTime = JSON.parse(window.localStorage.getItem('payOfTime2'))
          let payOfTime1 = JSON.parse(window.localStorage.getItem('payOfTime3'))
          if(this.ifBaseSize != ""){
            if(this.ifBaseSize < 2200){
              this.ifBaseSize = 2200
            }else if(this.ifBaseSize >30000){
              this.ifBaseSize = 30000
            }
            if(this.payOffVal != "" && this.endVal != ""){
              if(payOfTime1.getFullYear >= payOfTime.getFullYear){
                if(payOfTime1.getFullYear == payOfTime.getFullYear ){
                  if(payOfTime1.getMonth < payOfTime.getMonth){
                    this.$toast({
                      message:'开始日期不能大于其实日期'
                    })
                  }else {
                    this.ginsenBase = false
                    /*let data = this.common.getsign()
                    let cityId = JSON.parse(window.localStorage.getItem('city1'))
                    $.ajax({
                      url: this.HOST+'/app/common/getcityLevel',
                      type : "POST",
                      data : {
                        sign:data.sign,
                        time:data.time,
                        city_id:cityId,
                      },
                      dataType : "JSON",
                      success : function(r) {
                        that.insured = r.data
                      }
                    })*/
                  }
                }
              }
            }else {
              this.$toast({
                message:'请输入参保月数'
              })
            }
          }else {
            this.$toast({
              message:'请输入基数'
            })
          }
        },
        // 补缴月数确认
        setMonthConfirm(value){
          let time = this.nowTime()
          if(parseInt(value)>this.cityInfo.payback_mount){
            this.$toast({
              message:'补缴月数超出当前城市可补缴范围，请重新选择'
            })
          }else {
            this.setMonth = false
            this.paybackVal = value
            if((time.month-this.cityInfo.payback_mount)<1){
              let payBackMonth = (Number(time.month)-1)+12-(this.cityInfo.payback_mount);
              let payBackYear = Number(time.year)-1
              this.showPayBackNum = payBackYear + '-' + this.zero(payBackMonth)+ ' 至 ' + time.year + '-'
                +this.zero((time.month-1))
            }else {

              let payBackMonth = (Number(time.month)-1)-(this.cityInfo.payback_mount);
              console.log(Number(time.month)-1,this.cityInfo.payback_mount)
              this.showPayBackNum = time.year + '-' + this.zero(payBackMonth) + ' 至 ' + time.year + '-'
                +this.zero((time.month-1))
            }
          }
        },
        //获取月数
        getMonth(){
          this.setMonth = true
        },
        formatter(type, value) {
          if (type === 'year') {
            return `${value}年`;
          } else if (type === 'month') {
            return `${value}月`
          }
          return value;
        },
        isPayClick1(){
          if(this.isPay3 == true){
            $('.isbujiao2').css({
              display:'none'
            })
          }else {
            $('.isbujiao2').css({
              display:'block'
            })
          }
        },
        shebaoClick2(){
          if(this.isPay2 == true){
            $('.fundgroup').css({
              display:'none'
            })
          }else {
            $('.fundgroup').css({
              display:'block'
            })
          }
        },
        baseClick1(){
          if(this.checkedBase == false){
            this.minBase = true
          }else {
            this.minBase = false
          }
          this.ifBaseSize  =this.cityInfo.accumulation_min_money
        },
        payOffMonth(){
          this.ginsenMonth = true
        },
        endMonth(){
          this.ginsenMonth1 = true
        },
        // 社保参保月份
        shebaoConfirm(){
          this.ginsenMonth = false
          let nowTime = this.currentDate.getFullYear() + '-'+ this.zero((this.currentDate.getMonth()+1))
          this.payOffVal = nowTime
          let payOfTime ={
            getFullYear:this.currentDate.getFullYear(),
            getMonth:this.currentDate.getMonth()+1,
          };
          window.localStorage.setItem('payOfTime2',JSON.stringify(payOfTime))
        },
        shebaoConfirm1(){
          this.ginsenMonth1 = false
          let nowTime = this.currentDate1.getFullYear() + '-'+ this.zero((this.currentDate1.getMonth()+1))
          this.endVal = nowTime
          let payOfTime1 ={
            getFullYear:this.currentDate1.getFullYear(),
            getMonth:this.currentDate1.getMonth()+1,
          };
          window.localStorage.setItem('payOfTime3',JSON.stringify(payOfTime1))
        },
        getCityInfo(){
          let that = this
          let data = this.common.getsign()
          let cityId = JSON.parse(window.localStorage.getItem('city1'))
          $.ajax({
            url: this.HOST+'/app/index/getCity',
            type : "POST",
            data : {
              sign:data.sign,
              time:data.time,
              id:cityId,
            },
            dataType : "JSON",
            success : function(r) {
              that.cityInfo = r.data
            }
          })
        },
        zero(n){
          if(n>9){
            return n
          }else {
            return "0"+n;
          }
        },
        nowTime(){
          let date = new Date()
          let time = {}
          time.year = date.getFullYear()
          time.month = this.zero(date.getMonth()+1)
          return time
        },
        showCon(){
          if(this.isPay3 == false){
            $('.isbujiao2').css({
              display:'none'
            })
          }
          if(this.isPay2 == false){
            $('.fundgroup').css({
              display:'none'
            })
          }
        }
      },
      mounted() {
        this.showCon()
        this.getCityInfo()
      },
      created() {
      }
    }
</script>

<style scoped>
  .fund img{
    width: .75rem;
    height: .75rem;
  }
  .fund .van-divider{
    margin: 0;
  }
  .bujiaops{
    padding-top: 1rem;
    text-align: center;
  }
  .delpd5{
    padding-top: 0 !important;
  }
  .labelBaseCol{
    color: #333;
  }
  .ps-soc11{
    font-size:.6rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color: #F25454;
    padding-left: .75rem;
  }
  .fundgroup .van-cell {
    padding: 0 .5rem 0 1.75rem;
    height: 2.1rem;
    line-height: 2.1rem;
  }
  .fund{
    margin:.75rem .75rem ;
    width: calc(100% - 1.5rem);
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius:.3rem;
  }

  .fund-title{
    display: flex;
    justify-content: space-between;
    height: 2.25rem;
  }
  .fundtitle{
    display: flex;
    align-items: center;
    padding: 0 .5rem;

  }
  .fundtitle span{
    display: block;
    vertical-align: middle;
  }
  .left-fundtitle span:nth-child(2){
    padding-left: .5rem;
    font-size:.8rem;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
  }
  .right-fundtitle span:nth-child(2){
    padding-left: .5rem;
    font-size:.65rem;
    font-family:PingFangSC-Regular;
    color:#666666;
  }
  .up-title{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    color: #666;
  }
  .van-divider{
    margin: 0;
  }
  .addeducation .van-radio-group{
    display: flex;
    flex-wrap: wrap;
    height: 6.5rem;
    /*justify-content: center;*/
  }
  .addeducation .van-radio{
    padding-left: 5.25rem;
    display: flex;
    justify-content: center;
    color: #333333;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
  }

  .soctitle{
    display: flex;
    align-items: center;
    padding: 0 .5rem;

  }
  .addBtn{
    display: flex;
    justify-content: space-around;
    margin: 1rem 1.6rem 0;
    border-radius: 1rem;
    border: 1px solid #ccc;
  }
  .addBtn div{
    width: 6.85rem;
    height: 1.95rem;
    line-height: 1.95rem;
    text-align: center;
    font-size: .7rem;
  }
  .addBtn div:nth-child(2){
    /*background: #f97a2e;*/
    color: #f97a2e;
    border-left: 1px solid #ccc;
  }
  .ginsenBase{
    margin: 0 .75rem
  }
  .ginsenBase .van-cell{
    border: 1px solid #E6E6E6;
  }
  .ginsenBase .van-checkbox{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    padding: .75rem .75rem 1.1rem .75rem
  }

  .addBtn1{
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
  }
  .addBtn1 div{
    width: 6.85rem;
    height: 1.95rem;
    line-height: 1.95rem;
    text-align: center;
    font-size: .7rem;
  }
  .addBtn1 div:nth-child(2){
    background: #f97a2e;
    color: #fff;
  }
  .payType{
    padding-top: .5rem;
  }
  .payTypeTop{
    display: flex;
    justify-content: space-between;
    padding-left: 1.75rem;
    color: #333;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
  }
  .payTypeTop .van-radio-group{
    display: flex;
  }
  .payTypeTop .van-radio-group .van-radio{
    padding-left: 1.55rem;
    padding-right: .5rem;
  }
  .ps-socF97{
    font-size:.6rem;
    font-family:PingFangSC-Regular;
    color:rgba(249,122,46,1);
    text-align: right;
    padding: .5rem;
  }
  .payType .van-divider{
    padding-left: 1.75rem;
  }
  .costSubtotalTop{
    display: flex;
    justify-content: space-between;
    padding-left: 1.75rem;
    color: #333;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    line-height: 2.1rem;
  }
  .costSubtotalTop .cosMoney{
    color: #F25454;
    vertical-align: middle;
  }
  .costSubtotalTop .cosMoneyInfo{
    padding-right: .5rem;
    height: 2.1rem;
  }
  .costSubtotalTop .cosMoneyInfo span:nth-child(1){
    color: #F25454;
    vertical-align: middle;
  }
  .costSubtotalTop .cosMoneyInfo span:nth-child(2){
    color: #333333;
    vertical-align: middle;
    padding:0 .5rem
  }
  .costSubtotalTop .cosMoneyInfo img{
    width: .375rem;
    height: .625rem;
    vertical-align: middle;
  }

  .social-titleBu{
    display: flex;
    justify-content: space-between;
    height: 1.9rem;
  }
  .soctitleBu{
    display: flex;
    align-items: center;
    padding: 0 .5rem;

  }
  .soctitleBu span{
    display: block;
    vertical-align: middle;
  }
  .left-ssoctitlebu span:nth-child(2){
    padding-left: .5rem;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
  }
  .right-ssoctitlebu span:nth-child(2){
    padding-left: .5rem;
    font-size:.65rem;
    font-family:PingFangSC-Regular;
    color:#666666;
  }
</style>
