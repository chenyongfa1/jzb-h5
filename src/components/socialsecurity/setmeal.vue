<template>
  <div >
    <div class="setmeal mg16">
      <router-link :to="{name:'coverage'}" class="participants">
        <div class="participantsLeft">
          <span class="parLftemty">
             <img src="../../../static/images/socialsecurity/setmeal.png" alt="">
          </span>
          <span>参保套餐</span>
        </div>
        <div class="participantsRight">
          <span>年付低至￥29.9元/月</span>
          <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
        </div>
      </router-link>
      <div class="insuredLine"></div>
      <div class="insuredCity">
        <div class="set-meal" @click="setMeal(index)" v-for="(item,index) in setmeal" :key="index">
          <p class="mealS">{{item.name}}</p>
          <p class="set-money">¥{{Number(item.price).toFixed(1)}}/月</p>
          <p class="set-discount"><s>¥{{Number(item.original_price).toFixed(1)}}</s></p>
         <!-- <p class="set-downImg">
            <img src="../../../static/images/socialsecurity/upjiantou.png" alt="">
          </p>-->
          <p class="mealAct"><img src="../../../static/images/socialsecurity/mealact.png" alt=""></p>
        </div>
      </div>
      <div>
        <p class="ps-sm pd16">年度套餐：参保12个月  服务费为￥29.9/月 ，费用计算以实际选择参保月数（含补缴）为准。</p>
        <p class="ps-con pd16">注：社保与公积金同时缴纳只收取一项服务费</p>
      </div>
    </div>
    <van-popup v-model="setmealShow"  position="bottom" :overlay="true">
      <van-picker show-toolbar title="参保月数" :columns="columns" @cancel="cancel" @confirm="setmealConfirm"  />
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "setmeal",
    data(){
      return{
        setmealShow:false,
        addrInfo:"",
        monthId:'0',
        setIndex:'0',
        columns: ['一月', '二月', '三月'],
        isMeal:false,
        setmeal:[],
        isShow:"1",
        month1:[
          [
            {
              index:1,
              months:"1个月",
            },
            {
              index:2,
              months:"2个月",
            },
          ],
          [
            {
              index:3,
              months:"3个月",
            },
            {
              index:4,
              months:"4个月",
            },
            {
              index:5,
              months:"5个月",
            },
          ],
          [
            {
              index:6,
              months:"6个月",
            },
            {
              index:7,
              months:"7个月",
            },
            {
              index:8,
              months:"8个月",
            },
            {
              index:9,
              months:"9个月",
            },
            {
              index:10,
              months:"10个月",
            },
            {
              index:11,
              months:"11个月",
            },
          ],
          [
            {
              index:12,
              months:"12个月",
            }
          ]
        ],
        icon: {
          active: 'static/images/socialsecurity/checked.png',
          inactive: 'static/images/socialsecurity/unselect.png'
        },
        styleChange:""
      }
    },
    methods:{
      getServiceCharge(){
        let data = this.common.getsign()
        let that = this
        $.ajax({
          url: this.HOST+'/app/common/getServiceCharge',
          type : "POST",
          data : {
              sign:data,
              time:data.time,
          },
          dataType : "JSON",
          success : function(r) {
            that.setmeal = r.data.reverse()
            setTimeout(function () {
              $('.set-meal').eq(0).addClass('borF97').siblings().removeClass('borF97')
              $('.set-meal').eq(0).find(".mealAct").removeClass('isnone').parents().siblings().find(".mealAct").addClass('isnone')
            })
          }
        })
      },
      isCity(){
        this.setmealShow = true
      },
      cancel(){
        this.setmealShow = false
      },
      setmealConfirm(){
        this.setmealShow = false
      },
      setCancel(){
        this.isMeal = false
      },
      setMeal(index){
        if(index == "3" ){
          $('.set-meal').eq(3).addClass('borF97').siblings().removeClass('borF97')
          $('.set-meal').eq(3).find(".mealAct").removeClass('isnone').parents().siblings().find(".mealAct").addClass('isnone')
          $('.ps-sm').html("月份套餐：参保1-2个月 服务费为￥69.9/月 ，费用计算以实际选择参保月数（含补缴）为准。")
        }else if(index == "2" ){
          $('.set-meal').eq(2).addClass('borF97').siblings().removeClass('borF97')
          $('.set-meal').eq(2).find(".mealAct").removeClass('isnone').parents().siblings().find(".mealAct").addClass('isnone')
          $('.ps-sm').html("季度套餐：参保3-5个月  服务费为￥59.9/月 ，费用计算以实际选择参保月份（含补缴）为准。")
        }else if(index == "1" ){
          $('.set-meal').eq(1).addClass('borF97').siblings().removeClass('borF97')
          $('.set-meal').eq(1).find(".mealAct").removeClass('isnone').parents().siblings().find(".mealAct").addClass('isnone')
          $('.ps-sm').html("半年套餐：参保6-11个月  服务费为￥49.9/月 ，费用计算以实际选择参保月数（含补缴）为准。 ")
        }else if(index == "0" ){
          $('.set-meal').eq(0).addClass('borF97').siblings().removeClass('borF97')
          $('.set-meal').eq(0).find(".mealAct").removeClass('isnone').parents().siblings().find(".mealAct").addClass('isnone')
          $('.ps-sm').html("年度套餐：参保12个月  服务费为￥29.9/月 ，费用计算以实际选择参保月数（含补缴）为准。")
        }

      },
    },
    mounted() {
      this.getServiceCharge()
    },
    created() {

    }
  }
</script>

<style scoped>
  .ps-con{
    font-size:.6rem;
    font-family:PingFang SC;
    color:rgba(242,84,84,1);
    padding:.5rem 0 .95rem .8rem
  }
  .ps-sm{
    font-size:.6rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .setmeal{
    width: calc(100% - 1.6rem);
    background: #fff;
    margin-top: .75rem;
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius:.3rem;
  }
  .participants{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.65rem;
    padding:0 .8rem;

  }
  .parLftemty{
    display: inline-block;
    width: 1.7rem;
  }
  .participants .participantsLeft img{
    width:1.05rem;
    height: 1rem;
    vertical-align: middle;
  }
  .participants .participantsLeft span{
    width:1.05rem;
    height: 1rem;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    vertical-align: middle;
  }
  .participants .participantsRight img{
    width:.375rem;
    height: .65rem;
    vertical-align: middle;
  }
  .insuredLine{
    height: 1px;
    width: calc(100% - .8rem);
    background: #E6E6E6;
  }
  .participants .participantsRight span{
    width:1.05rem;
    height: 1rem;
    font-size:.6rem;
    font-family:PingFangSC-Regular;
    color: #999999;
    vertical-align: middle;
  }

  .insuredCityInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.65rem;
  }
  .insuredCityInfo .participantsLeft img{
    width:.725rem;
    height: 1.075rem;
    vertical-align: middle;
  }
  .insuredCityInfo .participantsLeft span{
    width:1.05rem;
    height: 1rem;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #666;
    vertical-align: middle;
  }

  .insuredCityInfo .participantsRight img{
    width:.375rem;
    height: .65rem;
    vertical-align: middle;
  }
  .insuredCityInfo .participantsRight span{
    width:1.05rem;
    height: 1rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    font-size: .7rem;
    vertical-align: middle;
  }
  .insuredCity{
    height: calc(8.5rem - 2.65rem );
    padding:0 .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .insuredCity p{
    color: #B2B2B2;
    font-size: .6rem;
  }
  .insuredCity p em{
    font-style: normal;
    color: #F97A2E;
  }
  .set-meal{
    width: 3.4rem;
    border:1px solid rgba(230,230,230,1);
    border-radius:.25rem;
    position: relative;
    text-align: center;
  }
  .set-meal .mealS{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding-top: .3rem;
  }
  .set-meal .set-money{
    font-size:.75rem;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(249,122,46,1);
    padding: .1rem 0;
  }
  .set-meal .set-discount{
    font-size:.6rem;
    font-family:PingFangSC-Light;
    font-weight:300;
    color: #B2B2B2;
    padding-bottom: .5rem;
  }
  .set-downImg img{
    width: .55rem;
    height: .325rem;
    margin:0 auto;
  }
  .mealAct img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.1rem;
    height: .9rem;
  }
  .borF97{
    border: 1px solid #F97A2E;
  }
  .isnone{
    display: none;
  }
  .set-con .van-popup--center{
    width: 17.5rem;
    border-radius:.3rem;
  }
  .set-con .van-popup--center .setbtn{
    height: 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .75rem;
    font-size: .8rem;
    color: #666666;
  }
  .set-con .van-popup--center .setbtn p:nth-child(2){
    color: #F97A2E;
  }
  .set-con .van-divider{
    margin:0;
  }
  .set-con .setradio .van-radio-group{
    display: flex;
    flex-wrap: wrap;
    /*padding: .75rem 2.15rem  0;*/
  }
  .set-con .setradio .van-radio-group .van-radio{
    width: calc(100% / 3);
    padding:.75rem;
  }
  .set-con .setradio .radioImg{
    width: .65rem;
    height: .65rem;
  }
</style>
