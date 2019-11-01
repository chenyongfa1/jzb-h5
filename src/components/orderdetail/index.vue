<template>
  <div class="orderdetail">
    <HeadNav />
    <div class="content">
      <IsHeadEmty />
      <div class="headinfo pd16" >
        <div class="headinfoleft">
          <img src="../../../static/images/orderdetail/payicon.png" alt="">
        </div>
        <div class="headinforight" >
          <div>已支付</div>
          <div>订单号&nbsp {{payinfo.order_sn}}</div>
          <div>我们将按时为您办理相关业务</div>
        </div>
      </div>
     <div class="orderlist">
       <div class="orderdetaillist pd16">
         <div class="orderdetailitem">
           <div>参保人</div>
           <div>{{payinfo.name}}</div>
         </div>
         <div class="orderdetailitem">
           <div>参保城市</div>
           <div>{{payinfo.area_name}}</div>
         </div>
         <div class="orderdetailitem">
           <div>参保项目</div>
           <div>{{payinfo.type_name}}</div>
         </div>
         <div class="orderdetailitem" v-if="payinfo.social_normal_start !== ''">
           <div>社保参保</div>
           <div>{{payinfo.social_normal_start}}至 {{payinfo.social_normal_end}}</div>
         </div>
         <div v-if="payinfo.accumulation_normal_start !== ''" class="orderdetailitem">
           <div>公积金参保</div>
           <div>{{payinfo.accumulation_normal_start}} 至 {{payinfo.accumulation_normal_end}}</div>
         </div>
         <div class="orderdetailitem">
           <div>社保保费</div>
           <div>¥ {{payinfo.social_sum}}</div>
         </div>
         <div class="orderdetailitem">
           <div>公积金保费</div>
           <div>¥ {{payinfo.accumulation_sum}}</div>
         </div>
         <div class="orderdetailitem">
           <div>补缴费</div>
           <div>¥ {{payinfo.pay_back_sum}}</div>
         </div>
         <div class="orderdetailitem">
           <div>服务费</div>
           <div>¥ {{payinfo.service_sum}}</div>
         </div>
         <div class="orderdetailitem">
           <div>追缴费</div>
           <div>¥ {{payinfo.additional_sum}}</div>
         </div>
         <div class="orderdetailitem">
           <div>手续费(0.6%)</div>
           <div>¥ {{payinfo.service_charge}}</div>
         </div>
         <div class="orderdetailitem">
           <div>余额抵扣</div>
           <div class="colf25">¥ {{payinfo.cash_deduction}}</div>
         </div>
         <div class="orderdetailitem">
           <div>优惠券抵扣</div>
           <div class="colf25">¥ {{payinfo.coupon_deduction}}</div>
         </div>
         <div class="orderdetailitem">
           <div>实付款</div>
           <div class="colf25">¥ {{payinfo.actual_payment}}</div>
         </div>
         <div class="orderdetailitem bortop">
           <div>提交时间</div>
           <div>{{payinfo.add_time}}</div>
         </div>
         <div class="orderdetailitem">
           <div>付款时间</div>
           <div>{{payinfo.payment_time}}</div>
         </div>
         <div class="orderdetailitem borbot">
           <div>留言</div>
           <div>{{payinfo.remark !==''? payinfo.remark:'无' }}</div>
         </div>
       </div>
       <div class="again pd16">
         <div class="again1" @click="again">
           再来一单
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    export default {
        name: "orderdetail",
        components:{
            HeadNav,
            IsHeadEmty
        },
        data(){
            return{
                id:this.$route.query.id,
                payinfo:''
            }
        },
        methods:{
            again(){
                this.$router.push({
                    path:'/socialsecurity'
                })
            },
            getOrderDetail(){
                let that = this
                $.ajax({
                    url: this.HOST + '/app/order/getOrderDetail ',
                    type: "POST",
                    data: {
                        id:this.id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        // that.$router.go(0)
                        console.log(r.data)
                        that.payinfo = r.data
                    }
                })
            },
        },
        mounted() {
            this.getOrderDetail()
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .borbot{
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 1rem;
  }
  .bortop{
    margin-top: .5rem;
    border-top: 1px solid #E6E6E6;
  }

  .headinfo{
    display: flex;
    width: 100%;
    height: 4.625rem;
    background: url("../../../static/images/orderdetail/paybg.png");
    background-size: 100% 100%;
    .headinfoleft{
      display: flex;
      align-items: center;
      img{
        width: 1.8rem;
        height: 1.75rem;
      }
    }
    .headinforight{
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      padding-left: .5rem;
      div:nth-child(1){
        font-size: .8rem;
      }
      div:nth-child(2){
        font-size: .7rem;
      }
      div:nth-child(3){
        font-size: .7rem;
      }
    }
  }
  .orderlist {
    border-radius:.6rem .6rem 0px .6rem;
    background:#fff;
    margin-top: .75rem;
    padding-top: .5rem;
    .orderdetailitem{
      display: flex;
      em{
        font-style: normal;
        /*font-size: .5rem;*/
      }
      div:nth-child(1){
        width: 40%;
        color: #666666;
        font-size: .7rem;
        height: 1.5rem;
        line-height: 1.5rem;
      }
      div:nth-child(2){
        width: 60%;
        color: #333;
        font-size: .7rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.5rem;
        line-height: 1.5rem;

      }
      div:nth-child(2).colf25{
        color: #F25454;
      }
    }
    .again{
      display: flex;
      justify-content:flex-end;
      padding-bottom: 1.4rem;
      .again1{
        width:4.2rem;
        height:1.95rem;
        line-height:1.95rem;
        background:rgba(249,122,46,1);
        border-radius:1rem;
        font-size: .8rem;
        color: #fff;
        text-align: center;
      }
    }

  }

</style>
