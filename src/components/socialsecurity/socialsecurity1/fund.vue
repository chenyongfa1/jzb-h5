<template>
    <div class="fund">
      <div class="fund-title">
        <div class="fundtitle left-fundtitle">
          <img src="static/images/socialsecurity/find.png" alt="">
          <span>社保</span>
        </div>
        <div class="fundtitle right-fundtitle">
          <img src="static/images/socialsecurity/checked.png" alt="">
          <span>缴纳</span>
        </div>
      </div>
      <van-divider />
      <div class="fundgroup">
        <van-cell-group>
          <van-field
            label="参保基数"
            right-icon="arrow"
            disabled
            placeholder="¥ 2200.00"
            @click-right-icon="getBase"
          />
          <van-field
            label="参保月份"
            right-icon="arrow"
            disabled
            placeholder="2019-06 至 2019-08"
            @click-right-icon="getMonth"
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
              <span>社保补缴</span>
            </div>
            <div class="soctitle right-ssoctitlebu">
              <van-checkbox v-model="isPay">
                缴纳
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                >
              </van-checkbox>
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
            <van-field
              type="text"
              label="请输入参保基数"
              placeholder="2200~27927"
              label-width="50%"
              label-class="labelBase"
            />
            <van-checkbox v-model="checkedBase">
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
          <div @click="confirm">确定</div>
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
          <div @click="confirm">确定</div>
        </div>
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
            currentDate: new Date(),
            minDate: new Date(),
            checkedBase:0,
            insuredId:0,
            payRadio:1,
            showToolbar:false,
            isPay:false,
            icon: {
              active: 'static/images/coverage/select.png',
              inactive: 'static/images/coverage/unselect.png'
            },
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
          this.insuredType = false
          this.ginsenBase = false
          this.ginsenMonth = false
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
