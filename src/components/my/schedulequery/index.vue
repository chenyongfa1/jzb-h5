<template>
  <div class="schedulequery">
    <div class="content">
      <div class="back1">
        <van-icon name="arrow-left" @click="goupFn"/>
        <div class="contenttitle">进度查询</div>
      </div>
      <div class="schedulequeryhead">
        <img src="../../../../static/images/my/schedulequery/sq11.png" alt="">
      </div>
      <div class="stepbar">
        <div class="stepbaritem">
          <div class="stepbarleft">
            <img v-if="payinfo.status <=1" src="../../../../static/images/my/schedulequery/sq22.png" alt="">
            <img v-else src="../../../../static/images/my/schedulequery/sq1.png" alt="">
          </div>
          <div class="stepbarright">
            <div class="stepbartop">
              <span v-if="payinfo.status <1">已支付</span>
              <span class="colf06" v-else>已支付</span>
              <span v-if="payinfo.payment_time !=0">{{payinfo.payment_time}}</span>
            </div>
            <div class="stepbarbot" v-if="payinfo.status <1">桔子保已接到您的订单，工作人员将会在1-3个工作日内审核您的订单信息。</div>
            <div class="stepbarbot col666" v-else>桔子保已接到您的订单，工作人员将会在1-3个工作日内审核您的订单信息。</div>
          </div>
        </div>
        <div class="stepbarline1 stepbarline"></div>
        <div class="stepbaritem">
          <div class="stepbarleft">
            <img v-if="payinfo.status <2" src="../../../../static/images/my/schedulequery/sq5.png" alt="">
            <img v-else-if="payinfo.status== 2" src="../../../../static/images/my/schedulequery/sq4.png" alt="">
            <img v-else-if="payinfo.status> 2" src="../../../../static/images/my/schedulequery/sq3.png" alt="">
          </div>
          <div class="stepbarright">
            <div class="stepbartop">
              <span v-if="payinfo.status <2">已受理</span>
              <span class="colf06" v-else>已受理</span>
              <span v-if="payinfo.time1 !=0">{{payinfo.time1}}</span>
            </div>
            <div class="stepbarbot" v-if="payinfo.status <2">订单已成功受理登记，由于每个城市的参保操 作时间不同，工作人员给您参保成功后将会点 亮下一步流程。</div>
            <div class="stepbarbot col666" v-else>订单已成功受理登记，由于每个城市的参保操 作时间不同，工作人员给您参保成功后将会点 亮下一步流程。</div>
          </div>
        </div>
        <div class="stepbarline2 stepbarline"></div>
        <div class="stepbaritem">
          <div class="stepbarleft">
            <img v-if="payinfo.status <3" src="../../../../static/images/my/schedulequery/sq10.png" alt="">
            <img v-else-if="payinfo.status== 3" src="../../../../static/images/my/schedulequery/sq9.png" alt="">
            <img v-else-if="payinfo.status> 3" src="../../../../static/images/my/schedulequery/sq8.png" alt="">
          </div>
          <div class="stepbarright">
            <div class="stepbartop">
              <span v-if="payinfo.status <3">已申报</span>
              <span class="colf06" v-else>已申报</span>
              <span v-if="payinfo.time2 !=0">{{payinfo.time2}}</span>
            </div>
            <div class="stepbarbot" v-if="payinfo.status <3">增员成功，可前往桔子保的微信公众号、支付 宝生活号点击“查询社保”“查询公积金”查看您
              的参保状态，或前往当地社保/公积金官方网站查看，若状态为“暂停参保”异常显示等请及时 联系客服处理。</div>
            <div class="stepbarbot col666" v-else>增员成功，可前往桔子保的微信公众号、支付 宝生活号点击“查询社保”“查询公积金”查看您
              的参保状态，或前往当地社保/公积金官方网站查看，若状态为“暂停参保”异常显示等请及时 联系客服处理。</div>
          </div>
        </div>
        <div class="stepbarline3 stepbarline"></div>
        <div class="stepbaritem">
          <div class="stepbarleft">
            <img v-if="payinfo.status <4" src="../../../../static/images/my/schedulequery/sq6.png" alt="">
            <img v-else-if="payinfo.status >=4" src="../../../../static/images/my/schedulequery/sq7.png" alt="">
          </div>
          <div class="stepbarright">
            <div class="stepbartop">
              <span v-if="payinfo.status <4">申报成功</span>
              <span class="colf06" v-else>申报成功</span>
              <span v-if="payinfo.time3 !=0">{{payinfo.time3}}</span>
            </div>
            <div class="stepbarbot" v-if="payinfo.status <4">参保成功，请查看费用是否到账。费用未到账，参保状态为“正常参保”，可推迟几天查看是否到账。发现异常请及时联系客服 处理。</div>
            <div class="stepbarbot col666" v-else>参保成功，请查看费用是否到账。费用未到账，参保状态为“正常参保”，可推迟几天查看是否到账。发现异常请及时联系客服 处理。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "schedulequery",
    data() {
      return{
        id:this.$route.query.id,
        payinfo:'',
      }
    },
    methods: {
      goupFn() {
        this.$router.go(-1)
      },
      getOrderDetail() {
        let that = this
        $.ajax({
          url: this.HOST + '/app/order/getOrderDetail ',
          type: "POST",
          data: {
            id: this.id
          },
          dataType: "JSON",
          success: function (r) {
            // that.$router.go(0)
            that.payinfo = r.data
            that.getLineHeight()

          }
        })
      },
      getLineHeight() {
        let stepbarline1 = Number($('.stepbaritem').eq(1).find('.stepbarleft').eq(0).offset().top) -
          Number($('.stepbaritem').eq(0).find('.stepbarleft').eq(0).offset().top)
        $('.stepbarline1').css({
          height: `calc(${stepbarline1}px)`,
          top: '2rem'
        })

        let stepbarline2 = Number($('.stepbaritem').eq(2).find('.stepbarleft').eq(0).offset().top) -
          Number($('.stepbaritem').eq(1).find('.stepbarleft').eq(0).offset().top)
        $('.stepbarline2').css({
          height: `calc(${stepbarline2}px)`,
          top: `calc(${stepbarline1}px + 2rem)`
        })
        let stepbarline3 = Number($('.stepbaritem').eq(3).find('.stepbarleft').eq(0).offset().top) -
          Number($('.stepbaritem').eq(2).find('.stepbarleft').eq(0).offset().top)
        $('.stepbarline3').css({
          height: `calc(${stepbarline3}px)`,
          top: `calc(${stepbarline2}px + ${stepbarline1}px + 2rem)`
        })
        switch (Number(this.payinfo.status)) {
          case 1:
            $('.stepbarline1').css({
              background:'#F97A2E'
            });
            break;
          case 2:
            $('.stepbarline1').css({
              background:'#F97A2E'
            });
            $('.stepbarline2').css({
              background:'#F97A2E'
            });
            break;
          case 3:
            $('.stepbarline1').css({
              background:'#F97A2E'
            });
            $('.stepbarline2').css({
              background:'#F97A2E'
            });
            $('.stepbarline3').css({
              background:'#F97A2E'
            });
          case 4:
            $('.stepbarline1').css({
              background:'#F97A2E'
            });
            $('.stepbarline2').css({
              background:'#F97A2E'
            });
            $('.stepbarline3').css({
              background:'#F97A2E'
            });
            break;
        }
        /*if( == ){
          $('.stepbarline1').css({
            /!*height: `calc(${stepbarline1}px)`,
            top: '2rem'*!/
            background:'red'
          })
        }*/
      }
    },
    mounted() {
      this.getOrderDetail()

    }
  }

</script>

<style lang="scss" scoped>
  .content{
    background: #fff;
  }
  .back1 {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    z-index: 22;
    /*position: fixed;*/
    font-size: 1rem;
    height: 2.2rem;
  }

  .van-icon {
    position: absolute;
    left: 0.75rem;
  }

  .contenttitle {
    position: absolute;
    left: 50%;
    margin-left: -1.8rem;
    font-size: 0.9rem;
    color: #fff;
  }

  .schedulequeryhead {
    width: 100%;
    height: 7.55rem;

    img {
      width: 100%;
    }
  }

  .stepbar {
    padding: 1rem 1.25rem;
    position: relative;

    .stepbaritem {
      display: flex;
      position: relative;
      padding-top: 2rem;
      z-index: 99;

      .stepbarleft {
        width: 2.6rem;
        height: 2.6rem;

        img {
          width: 100%;
        }
      }

      .stepbarright {
        padding-left: 1rem;
        width: calc(100% - 2.6rem);

        .stepbartop {
          span:nth-child(1) {
            color: #666666;
            font-size: .7rem;
          }
          .colf06{
            color: #FF7006 !important;
          }
          span:nth-child(2) {
            font-size: .5rem;
            color: #666;
          }

        }

        .stepbarbot {
          font-size: .6rem;
          color: #B2B2B2;
        }
        .col666{
          color:#666666 !important;
        }
      }
    }

    .stepbaritem:nth-child(1) {
      padding: 0;
    }

    .stepbarline {
      width: .1rem;
      background: #D9D9D9;
      position: absolute;
      left: 2.55rem;
    }
  }
</style>
