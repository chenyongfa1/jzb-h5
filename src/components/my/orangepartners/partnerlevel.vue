<template>
  <div class="partnerlevel">

    <div class="content">
      <div class="back1">
        <van-icon name="arrow-left" @click="goupFn"/>
        <div class="contenttitle">桔子伙伴</div>
      </div>
      <div class="partnertop">
        <div class="partnerhead"></div>
        <div class="partnercard">
          <img src="../../../../static/images/my/orangepartners/partnerlevel2.png" alt="">
        </div>
        <div class="partneruserinfo">
          <div class="partnerusertop">
            <div class="partnerheadimg">
              <img :src="user.headimgurl" alt="">
            </div>
            <div class="partnerright">
              <div class="partnername">{{user.nickname}}</div>
              <div class="partners" v-if="partnerlevelId == 1">G1桔子伙伴</div>
              <div class="partners" v-else-if="partnerlevelId == 2">G2桔子伙伴</div>
              <div class="partners" v-else>G3桔子伙伴</div>
            </div>
          </div>
          <div class="partneruserbot">有效期:{{user.update_time}}-{{user.end_time}}</div>
        </div>
      </div>
      <div class="partnerbot " v-if="partnerlevelId == 1">
        <div class="partnerlevels">
          <img src="../../../../static/images/my/orangepartners/partnerlevel77.png" alt="">
        </div>
        <div class="partnerlevellist mg16">
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel4.png" alt="">
              </div>
              <div class="partnerlevelitemright">29.9元终身</div>
            </div>
            <div class="partnerlevelitembot">获得服务费29.9元/月的尊享优惠 自己或替他人缴纳(单月或多月)皆可享受。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel6.png" alt="">
              </div>
              <div class="partnerlevelitemright">现金奖励</div>
            </div>
            <div class="partnerlevelitembot">推荐年度套餐客户获得500元/次现金奖励（可持续）。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel7.png" alt="">
              </div>
              <div class="partnerlevelitemright">月度收益</div>
            </div>
            <div class="partnerlevelitembot">推荐非年费套餐客户，按月赚取差价(可持续)。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel8.png" alt="">
              </div>
              <div class="partnerlevelitemright">持续收益</div>
            </div>
            <div class="partnerlevelitembot">在此之后，只要被推荐人提交订单并支付，将同样获得相应收益。</div>
          </div>
        </div>
        <div class="partnerlevelps mg16">
          <div>
            *
          </div>
          <div>累积成功推荐3个年度套餐用户后升为G2 (G2相关权益立即生效)。 </div>
        </div>
      </div>
      <div class="partnerbot " v-if="partnerlevelId == 2">
        <div class="partnerlevels">
          <img src="../../../../static/images/my/orangepartners/partnerlevel3.png" alt="">
        </div>
        <div class="partnerlevellist mg16">
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel4.png" alt="">
              </div>
              <div class="partnerlevelitemright">19.9元终身</div>
            </div>
            <div class="partnerlevelitembot">获得服务费19.9元/月的尊享优惠 自己或替他人缴纳(单月或多月)皆可享受。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel6.png" alt="">
              </div>
              <div class="partnerlevelitemright">现金奖励</div>
            </div>
            <div class="partnerlevelitembot">推荐年度套餐客户获得600元/次现金奖励（可持续）。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel7.png" alt="">
              </div>
              <div class="partnerlevelitemright">月度收益</div>
            </div>
            <div class="partnerlevelitembot">推荐非年费套餐客户，按月赚取差价(可持续)。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel8.png" alt="">
              </div>
              <div class="partnerlevelitemright">持续收益</div>
            </div>
            <div class="partnerlevelitembot">在此之后，只要被推荐人提交订单并支付，将同样获得相应收益。</div>
          </div>
        </div>
        <div class="partnerlevelps mg16">
          <div>
            *
          </div>
          <div>累积成功推荐10个年度套餐用户后升为G3 (G3相关权益立即生效)。</div>
        </div>
      </div>
      <div class="partnerbot " v-if="partnerlevelId == 3">
        <div class="partnerlevels">
          <img src="../../../../static/images/my/orangepartners/partnerlevel88.png" alt="">
        </div>
        <div class="partnerlevellist mg16">
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel4.png" alt="">
              </div>
              <div class="partnerlevelitemright">9.9元终身</div>
            </div>
            <div class="partnerlevelitembot">获得服务费9.9元/月的尊享优惠 自己或替他人缴纳(单月或多月)皆可享受。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel6.png" alt="">
              </div>
              <div class="partnerlevelitemright">现金奖励</div>
            </div>
            <div class="partnerlevelitembot">推荐年度套餐客户获得800元/次现金奖励（可持续）。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel7.png" alt="">
              </div>
              <div class="partnerlevelitemright">月度收益</div>
            </div>
            <div class="partnerlevelitembot">推荐非年费套餐客户，按月赚取差价(可持续)。</div>
          </div>
          <div class="partnerlevelitem">
            <div class="partnerlevelitemtop">
              <div class="partnerlevelitemleft">
                <img src="../../../../static/images/my/orangepartners/partnerlevel8.png" alt="">
              </div>
              <div class="partnerlevelitemright">持续收益</div>
            </div>
            <div class="partnerlevelitembot">在此之后，只要被推荐人提交订单并支付，将同样获得相应收益。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "partnerlevel",
    data() {
      return {
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
        partnerlevelId:this.$route.query.id,
        user:'',
      }
    },
    methods: {
      goupFn() {
        this.$router.go(-1)
      },
      getUserInfo(){
        let data = this.common.getsign()
        let that = this
        $.ajax({
          url: this.HOST + '/app/user/userCenter',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: this.userInfo.id,
          },
          dataType: "JSON",
          success: function (r) {
            that.user = r.data.userInfo
          }
        })
      }
    },
    mounted() {
      this.getUserInfo()
    }
  }
</script>

<style lang="scss" scoped>
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
  }

  .content {
    background: #f2f2f2;
    .partnertop {
      position: relative;
      .partnerhead {
        width: 100vw;
        height: 12rem;
        background: url("../../../../static/images/my/orangepartners/partnerlevel1.png");
        background-size: 100% 100%;
      }

      .partnercard {
        padding: 0 .7rem;
        width: calc(100%);
        height: 9.175rem;
        position: absolute;
        top: 3rem;

        img {
          width: 100%;
        }
      }

      .partneruserinfo {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 2rem;
        bottom: 1rem;
        .partnerusertop{
          display: flex;
        }
        .partneruserbot{
          color: #160B00;
          font-size: .7rem;
          margin-top: 1rem;
        }
        .partnerheadimg {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          overflow: hidden;
          border: .2rem solid #fff;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .partnerright {
          padding-left: .6rem;
          .partnername{
            color: #664630;
            font-size: 1rem;
          }
          .partners{
            color: #160B00;
            font-size: .8rem;
          }
        }
      }
    }

    .partnerbot {
      margin-top: 1rem;
      padding-bottom: .5rem;
      .partnerlevels {
        display: flex;
        justify-content: center;

        img {
          width: 7.2rem;
          height: 1.85rem;
        }
      }

      .partnerlevellist {
        .partnerlevelitem {
          background: url("../../../../static/images/my/orangepartners/partnerlevel5.png");
          background-size: 100% 100%;
          padding: .4rem .6rem .8rem;
          .partnerlevelitemtop {
            display: flex;
            align-items: center;

            .partnerlevelitemleft {
              width: 2.4rem;
              height: 2.15rem;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .partnerlevelitemright {
              color: #393A4D;
              font-size: .9rem;
            }
          }
          .partnerlevelitembot{
            font-size: .7rem;
            color: #666;
          }
        }
      }
      .partnerlevelps{
        display: flex;
        >div:nth-child(1){
          padding:0 .3rem;
          color: #F97A2E;
          img{
            width: .4rem;
            height: .4rem;
          }
        }
        >div:nth-child(2){
          font-size:.6rem;
          color: #393A4D;
        }
      }
    }
  }
</style>
