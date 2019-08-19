<template>
    <div class="social">
      <div class="social-title">
        <div class="soctitle left-ssoctitle">
          <img src="static/images/socialsecurity/she.png" alt="">
          <span>社保</span>
        </div>
        <div class="soctitle right-ssoctitle">
          <van-checkbox v-model="checkedshebao" @click="shebaoClick1">
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
            label="参保基数"
            right-icon="arrow"
            disabled
            placeholder="2200"
            @click-right-icon="getBase"
            label-width="80%"
            :value="ifBaseSize"
          />
          <van-field
            label="参保月份"
            right-icon="arrow"
            disabled
            placeholder="2019-06 至 2019-08"
            @click-right-icon="getMonth"
            label-width="50%"
          />
          <div class="payType">
            <div class="payTypeTop">
              <div>缴纳类型</div>
              <div class="payRadio">
                <van-radio-group v-model="payRadio">
                  <van-radio name="1">
                    新开户
                    <img
                      slot="icon"
                      slot-scope="props"
                      class="radioImg"
                      :src="props.checked ? icon.active : icon.inactive"
                    >
                  </van-radio>
                  <van-radio name="2">
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
            <router-link :to="{name:'socialsecuritydetailed'}" class="costSubtotalTop">
              <div class="cosMoney">费用小计</div>
              <div class="cosMoneyInfo">
                <span>¥ 2858.25</span>
                <span>明细</span>
                <img src="static/images/socialsecurity/youjiantou.png" alt="">
              </div>
            </router-link>
            <div class="ps-socF97">注：当前城市社保强制缴纳，公积金可选</div>
          </div>
          <van-divider />
          <div class="social-titleBu">
            <div class="soctitleBu left-ssoctitlebu">
              <img src="static/images/socialsecurity/bu.png" alt="">
              <span>社保补缴</span>
            </div>
            <div class="soctitle right-ssoctitlebu">
              <van-checkbox v-model="isPay" @click="isPayClick">
                缴纳
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                >
              </van-checkbox>
            </div>
          </div>
          <div class="isbujiao1" v-model="isbujiao1">
            <van-divider />
            <div class="costSubtotal ">
              <div>
                <van-field
                  label="参保月份"
                  right-icon="arrow"
                  disabled
                  placeholder="2019-06 至 2019-08"
                  @click-right-icon="getMonth1"
                  label-width="50%"
                />
              </div>
              <div class="ps-socF97 delpd5">当前城市允许补缴3个月</div>
            </div>
            <van-divider />
            <div class="costSubtotal">
              <router-link :to="{name:'socialsecuritydetailed'}" class="costSubtotalTop">
                <div class="cosMoney">费用小计</div>
                <div class="cosMoneyInfo">
                  <span>¥ 2858.25</span>
                  <span>明细</span>
                  <img src="static/images/socialsecurity/youjiantou.png" alt="">
                </div>
              </router-link>
              <div class="ps-socF97">注：当前城市社保强制缴纳，公积金可选</div>
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
              <van-radio :name="index + 1" @click="getNameandLevel(item.level_name,item.level)" v-for="(item, index) in
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
              type="text"
              label="请输入参保基数"
              placeholder="2200~27927"
              label-width="50%"
              label-class="labelBase"
              v-model="ifBaseSize"
            />
            <van-field v-else
               type="text"
               :label="ifBaseSize1"
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
        <h2 class="up-title">参保月份</h2>
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
        <h2 class="up-title">参保月份</h2>
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
          <div @click="confirm">确定</div>
        </div>
      </van-popup>
    </div>
</template>

<script>
    export default {
        name: "social",
      data(){
          return{
            insuredType:false,
            ginsenBase:false,
            ginsenMonth:false,
            ginsenMonth1:false,
            currentDate:new Date(),
            currentDate1: new Date(),
            currentDate2: new Date(),
            minDate: new Date(),
            checkedshebao:true,
            checkedBase:1,
            insuredId:0,
            ifBaseSize:"",
            ifBaseSize1:'',
            payRadio:1,
            minBaseNum:"2200",
            minSocial:false,
            showToolbar:false,
            isPay:false,
            minBase:0,
            level_name:'',
            levelNameVal:'',
            baseVal:'',
            levelName:'深户一档（综合险）',
            level:'',
            isbujiao1:false,
            insured:[
            ],
            icon: {
              active: 'static/images/socialsecurity/checked.png',
              inactive: 'static/images/coverage/unselect.png'
            },
            monthId:JSON.parse(window.localStorage.getItem('monthId'))[0],
            cityId:JSON.parse(window.localStorage.getItem('city1'))[0],
          }
      },
      methods:{
          // 取消
        cancel(){
          this.insuredType = false
          this.ginsenBase = false
          this.ginsenMonth = false
        },
        //确定
        confirm(){


        },
        //类型确定
        insuredConfirm(){
          this.insuredType = false
          let levels = JSON.parse(window.localStorage.getItem("levels"))
          this.levelNameVal = levels.name
        },
        // 最低基数
        minBaseConfirm(){
          this.ginsenBase = false
          if(this.ifBaseSize < 2200){
            this.ifBaseSize = 2200
          }else if(this.ifBaseSize >30000){
            this.ifBaseSize = 30000
          }


        },
        // 社保参保月份
        shebaoConfirm(type, value){
          this.ginsenMonth = false

        },
        getNameandLevel(name,level){
          let levels = {
            level:level,
            name:name
          }
         window.localStorage.setItem("levels",JSON.stringify(levels))
        },
        //获取参保类型
        getInsured(){
          let that = this
          this.insuredType = true;
          let data = this.common.getsign()
          $.ajax({
            url: this.HOST+'/app/common/getcityLevel',
            type : "POST",
            data : {
              sign:data.sign,
              time:data.time,
              city_id:77,
            },
            dataType : "JSON",
            success : function(r) {
              that.insured = r.data
            }
          })
        },
        //获取基数
        getBase(){
          this.ginsenBase = true
        },
        //获取月数
        getMonth(){
          this.ginsenMonth = true
        },
        formatter(type, value) {
          if (type === 'year') {
            return `${value}年`;
          } else if (type === 'month') {
            return `${value}月`
          }
          return value;
        },
        getMonth1() {
         this.ginsenMonth1 = true
        },
        isPayClick(){
          this.isbujiao1 = true
          if(this.isPay == true){
            $('.isbujiao1').css({
              display:'none'
            })
          }else {
            $('.isbujiao1').css({
              display:'block'
            })
          }
        },
        shebaoClick1(){
          if(this.checkedshebao == true){
            $('.socialgroup').css({
              display:'none'
            })
          }else {
            $('.socialgroup').css({
              display:'block'
            })
          }
        },
        minSocialClick1(){
          if(this.minBase == false){
            this.minSocial = true
          }else {
            this.minSocial = false
          }
          this.minBaseNum
          let that = this
          let data = this.common.getsign()
          $.ajax({
            url: this.HOST+'/app/index/getCity',
            type : "POST",
            data : {
              sign:data.sign,
              time:data.time,
              id:77,
            },
            dataType : "JSON",
            success : function(r) {
              that.ifBaseSize1 = r.data.social_min_money
              console.log(that.ifBaseSize)
            }
          })
        }

      },
      mounted(){
        let that = this
        let data = this.common.getsign()
        if(this.isPay == false){
          $('.isbujiao1').css({
            display:'none'
          })
        }
        if(this.checkedshebao == false){
          $('.socialgroup').css({
            display:'none'
          })
        }
        // this.minBaseNum = 2200
      },

      created() {

      }

    }
</script>

<style scoped>
  .social .van-divider--hairline{
    padding-left: 1.75rem;
  }
  .social .van-cell:not(:last-child)::after{
    left: 1.75rem;
  }
  .social .van-divider{
    margin: 0;
  }
  .delpd5{
    padding-top: 0 !important;
  }
  .col333{
    color: #333 !important;
  }

  .ps-soc11{
    font-size:.6rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color: #F25454;
    padding-left: .75rem;
  }
  .social img{
    width: .75rem;
    height: .75rem;
  }
  .ps-soc1{
    font-size:.6rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color: #F25454;
    text-align: center;
    padding:.3rem 0 .6rem
  }
  .social{
    margin:.5rem .75rem 0;
    width: calc(100% - 1.5rem);
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius:.3rem;
  }

  .social-title{
    display: flex;
    justify-content: space-between;
    height: 1.9rem;
  }
  .soctitle{
    display: flex;
    align-items: center;
    padding: 0 .5rem;

  }
  .soctitle span{
    display: block;
    vertical-align: middle;
  }
  .left-ssoctitle span:nth-child(2){
    padding-left: .5rem;
    font-size:.8rem;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
  }
  .right-ssoctitle span:nth-child(2){
    padding-left: .5rem;
    font-size:.65rem;
    font-family:PingFangSC-Regular;
    color:#666666;
  }
  .socialgroup .van-cell{
    padding: 0 .5rem 0 1.75rem;
    height: 2.1rem;
    line-height: 2.1rem;
  }

  .educationradio{
    position: relative;
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
    padding-top: .5rem;
  }
  .costSubtotalTop .cosMoney{
    color: #F25454;
    vertical-align: middle;
  }
  .costSubtotalTop .cosMoneyInfo{
    padding-right: .5rem;
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
