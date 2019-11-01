<template>
  <div class="orangepartners">

    <div class="content">
      <div class="back1">
        <van-icon name="arrow-left" @click="goupFn"/>
        <div class="contenttitle">桔子伙伴</div>
      </div>
      <div class="orangepartnersheadbg">
        <img src="../../../../static/images/my/orangepartners/orangepartners1.png" alt="">
      </div>
      <div class="sixequity">
        <div class="equitylist">
          <div class="equityitem" @click="equityInfo(index)" v-for="(item,index) in equityList" :key="index">
            <div class="equityitemcon">
              <img :src="item.img" alt="">
              <span>{{item.name}}</span>
            </div>
            <div class="selectimg "></div>
          </div>
        </div>
      </div>
      <div class="orange1">
        <div class="orangehead1" v-if="showIndex == 0">
          <img src="../../../../static/images/my/orangepartners/or27.png" alt="">
        </div>
        <div class="orangehead2" v-else-if="showIndex == 1">
          <img src="../../../../static/images/my/orangepartners/or22.png" alt="">
        </div>
        <div class="orangehead3" v-else-if="showIndex == 2">
          <img src="../../../../static/images/my/orangepartners/or23.png" alt="">
        </div>
        <div class="orangehead4" v-else-if="showIndex == 3">
          <img src="../../../../static/images/my/orangepartners/or24.png" alt="">
        </div>
        <div class="orangehead5" v-else-if="showIndex == 4">
          <img src="../../../../static/images/my/orangepartners/or25.png" alt="">
        </div>
        <div class="orangehead6" v-else-if="showIndex == 5">
          <img src="../../../../static/images/my/orangepartners/or26.png" alt="">
        </div>
        <div class="bgcol"></div>
        <div class="certificate">
          <div class="certificatehead">
            <img src="../../../../static/images/my/orangepartners/or12.png" alt="">
          </div>
          <div class="certificatecen" >
            <div class="certificateitem"  v-for="(item,index) in honerList" :key="index"
                 @click="certificateShow(index)">
              <img v-if="honerIndex != index" :src="item.img[0]" alt="">
              <img v-else :src="item.img[1]" alt="">
            </div>
          </div>
          <div v-if="honerIndex == 0" class="certificateimg">
            <img src="../../../../static/images/my/orangepartners/or13.png" alt="">
          </div>
          <div v-else-if="honerIndex == 1" class="certificateimg1">
            <img src="../../../../static/images/my/orangepartners/or20.png" alt="">
          </div>
          <div v-else-if="honerIndex == 2" class="certificateimg2">
            <img src="../../../../static/images/my/orangepartners/or21.png" alt="">
          </div>
          <div class="certificatebecome">
            <img src="../../../../static/images/my/orangepartners/or16.png" alt="">
          </div>
        </div>
      </div>
      <div class="becomepartners">
        <div class="becomebtn" @click="becomeBtn">
          <img src="../../../../static/images/my/orangepartners/or17.png" alt="">
        </div>
        <div class="isagree">
          <span>购买即同意</span>
          <router-link to="/cooperationagreement">《桔子伙伴合作协议》</router-link>
        </div>
        <div class="becomebot">
          <img src="../../../../static/images/my/orangepartners/or18.png" alt="">
        </div>
      </div>
      <div class="insured" @click.stop="becomeClose">
        <div class="insuredcon" @click.stop="becomeStopClose">
          <div class="insuredhead">
            <img src="../../../../static/images/my/orangepartners/or28.png" alt="">
          </div>
          <div class="insuredinfo">
            <p>根据条件要求下单后</p>
            <p>请联系客服开通桔子伙伴权益</p>
          </div>
          <div class="tosoclial" @click="toSoclial">
            <img src="../../../../static/images/my/orangepartners/or29.png" alt="">
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
    name: "orangepartners",
    components: {
      HeadNav,
      IsHeadEmty
    },
    data() {
      return {
        kefuShow: false,
        equityList: [
          {
            id: 1,
            img: 'static/images/my/orangepartners/or1.png',
            name: '29.9元/月',
          },
          {
            id: 2,
            img: 'static/images/my/orangepartners/or2.png',
            name: '现金奖励',
          },
          {
            id: 3,
            img: 'static/images/my/orangepartners/or3.png',
            name: '月度收益',
          },
          {
            id: 4,
            img: 'static/images/my/orangepartners/or4.png',
            name: '尊享级退款',
          },
          {
            id: 5,
            img: 'static/images/my/orangepartners/or5.png',
            name: '收益可视化',
          },
          {
            id: 6,
            img: 'static/images/my/orangepartners/or6.png',
            name: '权益升级',
          }
        ],
        honerList:[
          {
            id: 1,
            img: [
              '../../../../static/images/my/orangepartners/or19.png',
              '../../../../static/images/my/orangepartners/or9.png',
            ],
          },
          {
            id: 2,
            img: [
              '../../../../static/images/my/orangepartners/or10.png',
              '../../../../static/images/my/orangepartners/or14.png',
            ],
          },
          {
            id: 3,
            img: [
              '../../../../static/images/my/orangepartners/or11.png',
              '../../../../static/images/my/orangepartners/or15.png',
            ],
          },
        ],
        showIndex: 0,//显示下面内容下标
        honerIndex:0,
      }
    },
    methods: {
      goupFn() {
        this.$router.go(-1)
      },
      partnersBtn() {
        this.kefuShow = true
      },
      getKefu() {
        window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
      },
      equityInfo(index) {
        this.showIndex = index;
        $('.selectimg').removeClass('showselect')
        $('.selectimg').eq(index).addClass('showselect')
      },
      certificateShow(index){
        this.honerIndex = index
      },
      becomeBtn(){
        $('.insured').css({
          display:'block'
        })
      },
      becomeClose(){
        $('.insured').css({
          display:'none'
        })
      },
      becomeStopClose(){
        $('.insured').css({
          display:'block'
        })
      },
      toSoclial(){
        this.$router.push({
          name:'socialsecurity'
        })
      },
    },
    mounted() {
      $('.selectimg').eq(0).addClass('showselect')
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .content {
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
    color: #333;
  }
  .orangepartnersheadbg {
    img {
      width: 100%;
    }
  }

  .sixequity {
    padding: .5rem .6rem;

    .equitylist {
      display: flex;
      justify-content: space-between;

      .equityitem {
        .equityitemcon {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          img {
            width: 2.1rem;
            height: 1.9rem;
          }

          span {
            display: inline-block;
            padding-top: .3rem;
            font-size: .5rem;
            color: #333;
            font-weight: bold;
          }
        }

        .selectimg {
          display: none;
        }

        .showselect {
          display: flex;
          justify-content: center;
          width: 2rem;
          height: .5rem;
          background: url("../../../../static/images/my/orangepartners/select.png");
          background-size: 100% 100%;
        }
      }
    }
  }

  .orange1 {
    .orangehead1 {
      width: 85.3%;
      height: 6.9rem;
      margin: 0 auto .3rem;
      img{
        width: 100%;
      }
    }
    .orangehead2 {
      width: 85.3%;
      height: 7.85rem;
      margin: 0 auto .3rem;
      img{
        width: 100%;
      }
    }
    .orangehead3 {
      width: 85.3%;
      height: 6.875rem;
      margin: 0 auto .3rem;
      img{
        width: 100%;
      }
    }
    .orangehead4 {
      width: 85.3%;
      height: 6.55rem;
      margin: 0 auto .3rem;
      img{
        width: 100%;
      }
    }
    .orangehead5 {
      width: 85.3%;
      height: 5.85rem;
      margin: 0 auto .3rem;
      img{
        width: 100%;
      }
    }
    .orangehead6 {
      width: 85.3%;
      height: 8.4rem;
      margin: 0 auto .3rem;
      img{
        width: 100%;
      }
    }
    .bgcol {
      height: .25rem;
      background: #F5F5F5;
    }
    .certificate{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .certificatehead{
        width: 7.4rem;
        height: .75rem;
        margin: .5rem 0;
        img{
          width: 100%;
        }
      }
      .certificatecen{
        width:68.8%;
        display: flex;
        justify-content: space-between;
        >div{
          width: 2.2rem;
          height: 2.6rem;
          >img{
            width: 100% ;
          }

        }
      }
      .certificateimg{
        width:68.8%;
        height: 8.75rem;
        display: flex;
        margin: .5rem 0 0;
        img{
          width: 100%;
        }
      }
      .certificateimg1{
        width:49.2%;
        height: 11.125rem;
        display: flex;
        margin: .5rem 0 0;
        img{
          width: 100%;
        }
      }
      .certificateimg2{
        width:66.2%;
        height: 9.05rem;
        display: flex;
        margin: .5rem 0 0;
        img{
          width: 100%;
        }
      }
      .certificatebecome{
        width:78.1%;
        height: 8.85rem;
        display: flex;
        margin: .5rem 0 .75rem;
        img{
          width: 100%;
        }
      }
    }
  }
  .becomepartners{
    display: flex;
    flex-direction: column;
    align-items: center;
    .becomebtn{
      width: 67.5%;
      height: 2.1rem;
      img{
        width: 100%;
      }
    }
    .isagree{
      font-size: .6rem;
    }
    .becomebot{
      width: 30%;
      height: 1.5rem;
      margin: 1rem 0;
      img{
        width: 100%;
      }
    }
  }
  .insured{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background: rgba(0,0,0,.53);
    display: none;

    .insuredcon{
      background: rgb(255,255,255);
      width: 74.7%;
      height: 8.2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: - 37.35%;
      margin-top: - 4.1rem;
      border-radius:.6rem;
      .insuredhead{
        width: 3.2rem;
        height: 3.45rem;
        position: absolute;
        left: 50%;
        top: 0;
        margin-left: -1.6rem;
        margin-top: -1.725rem;
        img{
          width: 100%;
        }
      }
      .insuredinfo{
        margin-top: 2.25rem;
        text-align: center;
        color: #333333;
        font-size: .8rem;
        p{
          letter-spacing:2px;
        }
      }
      .tosoclial{
        width: 51.6%;
        height: 3.375rem;
        margin: 1rem auto 0;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
