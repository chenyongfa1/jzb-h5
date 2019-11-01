<template>
  <div class="mybalance">
    <div class="back1">
      <van-icon name="arrow-left" @click="goupFn"/>
      <div class="contenttitle">我的余额</div>
    </div>
    <div class="content">
      <div class="bgblance"></div>
      <div class="balacetop">
        <div class="monetcount">
          <div>总余额(元)</div>
          <div>{{balance}}</div>
        </div>
        <div class="iwant">
          <div class="iwantcash" @click="toast">
            <img src="../../../../static/images/my/mybalance/tx.png" alt="">
            <span>我要提现</span>
          </div>
          <div class="iwantrecharge" @click="toast">
            <img src="../../../../static/images/my/mybalance/cz.png" alt="">
            <span>我要充值</span>
          </div>
        </div>
      </div>
      <div class="balacebot">
        <div class="balaceitem" @click="toast">
          <div class="balaceleft">
            <img src="../../../../static/images/my/mybalance/mx.png" alt="">
            <span>资金明细</span>
          </div>
          <div class="balaceright">
            <img src="../../../../static/images/common/rightjiantou.png" alt="">
          </div>
        </div>
        <div class="balaceitem" @click="toast">
          <div class="balaceleft yhk">
            <img src="../../../../static/images/my/mybalance/yhk.png" alt="">
            <span>我的银行卡</span>
          </div>
          <div class="balaceright">
            <img src="../../../../static/images/common/rightjiantou.png" alt="">
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
        name: "mybalance",
        components: {
            HeadNav,
            IsHeadEmty
        },
        data(){
            return{
                balance:JSON.parse(window.localStorage.getItem('userInfo')).balance
            }
        },
        methods: {
            goupFn() {
                this.$router.go(-1)
            },
            toast(){
                this.$toast({
                    message:'即将上线，敬请期待',
                    duration:Number(1500)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .back1 {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    z-index: 22;
    position: fixed;
    font-size: 1rem;


  }

  .van-icon {
    position: absolute;
    top: .9rem;
    left: 0.75rem;
  }

  .contenttitle {
    position: absolute;
    top: .8rem;
    left: 50%;
    margin-left: -1.8rem;
    font-size: 0.9rem;
  }

  .bgblance {
    background: url("../../../../static/images/my/mybalance/balancebg.png");
    width: 100%;
    height: 8.175rem;
  }
  .balacetop{
    width: calc(100% - 2.4rem);
    background: #fff;
    height: 8.25rem;
    position: absolute;
    top: 3rem;
    left: 50%;
    margin-left: (calc(-50% + 1.2rem));
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius: .6rem;
    .monetcount{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 50%;
      >div:nth-child(1){
        font-size: .9rem;
        color: #333;
      }
      >div:nth-child(2){
        font-size:1.45rem;
        color: #F97A2E;
      }
    }
    .iwant{
      display: flex;
      justify-content: space-between;
      height: 50%;
      border-top: 1px solid #E6E6E6;
      padding:.5rem 0;
      .iwantcash{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 50%;
        border-right: 1px solid #E6E6E6;
        font-size: .7rem;
        color: #666;
        img{
          width: 1.5rem;
          height: 1.1rem;
        }
      }
      .iwantrecharge{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 50%;
        font-size: .7rem;
        color: #666;
        img{
          width: 1.45rem;
          height: 1.35rem;
        }
      }
    }
  }
  .balacebot{
    width: calc(100% - 2.4rem);
    background: #fff;
    height: calc(100vh - 12rem);
    position: absolute;
    top: 12rem;
    left: 50%;
    margin-left: (calc(-50% + 1.2rem));
    .balaceitem{
      display: flex;
      justify-content: space-between;
      padding: 0 .6rem;
      align-items: center;
      height: 2.5rem;
      border-bottom: 1px solid #E6E6E6;
      .balaceleft{
        img{
          width: 1rem;
          height: 1.1rem;
          vertical-align: middle;
        }
        span{
          vertical-align: middle;
          font-size: .7rem;
          padding-left: .3rem;
        }
      }
      .yhk{
        img{
          width: 1.35rem;
          height: 1rem;
        }
      }
      .balaceright{
        img{
          width:0.375rem;
          height: .65rem;
        }
      }
    }
  }
</style>
