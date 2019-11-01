<template>
  <div class="payinfo pd16">
    <div class="back1">
<!--      <van-icon name="arrow-left" />-->
    </div>
    <div class="content">
      <div class="headImg">
        <div class="headImgcon">
          <img src="../../../static/images/payinfo/soccess1.png" alt="">
          <span>支付成功</span>
        </div>
      </div>
      <div class="orderinfo pd16">
        <div class="ordernum">
          <span>订单号：</span>
          <span>{{payInfo.order_sn}}</span>
        </div>
        <div class="ordernum">
          <span>订单金额：</span>
          <span>¥ {{payInfo.actual_payment}}</span>
        </div>
        <div class="tip">
          <div class="tipimg">
            <img src="../../../static/images/payinfo/tip.png" alt="">
          </div>
          <div class="tips">增值业务已受理，专项负责人将在24小时内与您联系，请注意接听电话。</div>
        </div>
        <div class="orderbtn">
          <div class="see" @click="toDetail">
            查看订单
          </div>
          <div class="again" @click="toIndex">
            返回首页
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "payinfo",
        data(){
            return{
                payInfo:''
            }
        },
        methods:{
            toIndex(){
                this.$router.push({
                    path:'/'
                })
                // window.location.href = '/socialsecurity'
            },
            getOrderDetail() {
                let that = this
                let nowUrl = decodeURIComponent(window.location.href)
                // let tmp = nowUrl.replace(/^.+tmp\=/, '').split("&")[0]
                let id = nowUrl.replace(/^.+?id\=/, '').split("&")[0] || ""
                $.ajax({
                    url: this.HOST + '/app/order/getOrderDetail ',
                    type: "POST",
                    data: {
                        id: id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        // that.$router.go(0)
                        that.payInfo = r.data
                    }
                })
            },
            toDetail(){
                this.$router.push({
                    name:'orderdetail',
                    query:{
                        id:this.payInfo.id
                    }
                })
            }
        },
        mounted() {
            this.getOrderDetail()
        }
    }
</script>

<style lang="scss" scoped>
  .back1{
    height: 2.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    z-index: 22;
    position: fixed;
    font-size: 1rem;
  }
  .headImg {
    background: url("../../../static/images/payinfo/soccess.png");
    background-size: 100% 100%;
    height: 10rem;

    .headImgcon {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 10rem;
      img {
        width: 3.4rem;
      }
      span{
        color: #fff;
        font-size: .85rem;
        padding-top: .4rem;
      }
    }
  }
  .orderinfo{
    padding-top: 1.5rem;
    .ordernum{
      display: flex;
      font-size: .7rem;
      line-height: 1.6rem;
      span:nth-child(1){
        color: #333;
      }
      span:nth-child(2){
        color: #666666;
      }
    }
    .tip{
      display: flex;
      align-items: center;
      .tipimg {
        vertical-align: middle;
        img{
          width: .7rem;
        }
      }
      .tips{
        padding-left: .4rem;
        vertical-align: middle;
        color: #B2B2B2;
        font-size: .6rem;
      }
    }
  }
  .orderbtn{
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
    justify-content: space-between;
    .see{
      width: 7.6rem;
      height: 2.25rem;
      text-align: center;
      line-height: 2.25rem;
      margin:.44rem 0;
      color: #B2B2B2;
      font-size: .7rem;
      background: url("../../../static/images/payinfo/seebtn.png");
      background-size: 100% 100%;
    }
    .again{
      width: 8.5rem;
      height: 3.125rem;
      background: url("../../../static/images/payinfo/argeen.png");
      background-size: 100% 100%;
      text-align: center;
      line-height: 3.125rem;
      color: #fff;
      font-size: .7rem;

    }
  }
</style>
