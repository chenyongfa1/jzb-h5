<template>
  <div class="myteam">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="myteams" v-if="routerId != 0">
        <div class="myteamlist">
          <div id="myteamlist">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <van-list @load="onLoad" :finished="finished">
                <div v-for="(item,index) in teamList" :key="index">
                  <div class="myteamitem mg16"
                               @click="tomyteam(item.id,item.total_reward)">
                    <div class="myteamleft">
                      <div class="myteamhead">
                        <img :src="item.headimgurl" alt="">
                      </div>
                      <div class="myteamhead1">
                        <div class="myteamname">{{item.nickname}}</div>
                        <div class="orders" v-if="Number(item.total_reward) == 0">未下单</div>
                        <div class="orders" v-else>已下单</div>
                      </div>
                    </div>
                    <div class="myteamright">
                      <div class="myteamhead2">已获得<span>{{item.total_reward}}元</span></div>
                      <img src="../../../../static/images/common/rightjiantou.png" alt="">
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="orangelogo">
          <img src="../../../../static/images/my/orangepartners/orangepartners22.png" alt="">
          <p>您还不是桔子伙伴～</p>
        </div>
        <div class="partnersbtn" @click="partnersBtn">
          <img src="../../../../static/images/my/orangepartners/orangepartnersbtn1.png" alt="">
        </div>
        <van-popup v-model="kefuShow" round :style="{width:'80%'}">
          <div class="kefubox">
            <div class="kefuboxtitle">成为桔子伙伴，持续收益看得见</div>
            <div class="kefubox1">
              <div @click="getKefu"><span>在线客服</span></div>
              <div><a href="tel:400-000-8850">客服热线</a></div>
            </div>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from "@/components/common/header";
  import IsHeadEmty from "@/components/common/isheademty";

  export default {
    name: "myteam",
    components: {
      HeadNav,
      IsHeadEmty
    },
    data() {
      return {
        teamCount: 0,
        teamList: [],
        isLoading: false,
        loading: false,//控制上拉加载的加载动画
        finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
        page1: 1,
        routerId: this.$route.query.id,
        kefuShow:false
      }
    },
    methods: {
      tomyteam(id,totalReward) {
        if(Number(totalReward)>0){
          this.$router.push({
            name: 'myteamdetail',
            query:{
              id:id
            }
          })
        }else {

        }

      },
      getMyteam() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/user/userTeam',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
            p: 1
          },
          dataType: "JSON",
          success: function (r) {
            that.teamList = r.data.list
            that.teamCount = r.data.count
          }
        })
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getMyteam()
          this.page1 = 1
        })
      },
      onLoad() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        let page = (this.teamCount / 10)
        document.getElementById("myteamlist").onscroll = function () {
          var scrollHeight = document.getElementById("myteamlist").scrollHeight;//251
          var scrollTop = document.getElementById("myteamlist").scrollTop;//0-18
          var clientHeight = document.getElementById("myteamlist").clientHeight;//233
          if ((scrollHeight - clientHeight) == scrollTop) {
            if (page > that.page1) {
              setTimeout(() => {
                $.ajax({
                  url: that.HOST + "/app/user/userTeam",
                  type: "POST",
                  data: {
                    sign: data.sign,
                    time: data.time,
                    user_id: userInfo.id,
                    p: that.page1 + 1
                  },
                  dataType: "JSON",
                  success: function (r) {
                    if (r.status == 200) {
                      that.teamList = [...that.teamList, ...r.data.list] || []
                      that.page1++
                      that.$toast({
                        message: '加载第' + that.page1 + '页'
                      })
                    } else {
                      that.$toast({
                        message: r.message
                      })
                    }
                  }
                })
              }, 500);
            } else {
              that.$toast({
                message: '没有更多'
              })

            }

          }
        }

      },
      partnersBtn() {
        // this.kefuShow = true
        this.$router.push({
          path:'/orangepartners'
        })
      },
      getKefu() {
        window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
      },
    },
    mounted() {
      this.getMyteam()
    }

  }
</script>

<style lang="scss" scoped>
  .myteams {

    .myteamlist {
      border-radius: .6rem .6rem 0 0;
      background: #fff;
      overflow: auto;
      height: calc(100vh - 2.3rem);

      .myteamitem {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #E6E6E6;
        height: 3.5rem;

        .myteamleft {
          display: flex;
          justify-content: space-between;

          .myteamhead {
            display: flex;
            align-items: center;

            img {
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              overflow: hidden;
            }
          }

          .myteamhead1 {
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding-left: .65rem;

            .myteamname {
              font-size: .7rem;
              color: #666666;
            }

            .orders {
              font-size: .55rem;
              color: #B2B2B2;
              border: 1px solid #F97A2E;
              text-align: center;
              border-radius: .2rem;
              width: 2rem;
            }
          }
        }

        .myteamright {
          display: flex;
          align-items: center;

          .myteamhead2 {
            padding-right: .5rem;
            font-size: .7rem;
            color: #333;

            span {
              color: #F97A2E;
              padding-left: .3rem;
            }
          }

          img {
            width: .4rem;
            height: .65rem;
          }
        }
      }
    }

    #myteamlist {
      height: calc(100vh - 2.2rem);
      overflow: auto;
    }
  }


  .orangelogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 16.6rem;

    img {
      width: 3.825rem;
      height: 5.825rem;
    }

    p {
      font-size: .7rem;
      padding-left: .3rem;
      padding-top: 2rem;
    }
  }

  .partnersbtn {
    padding: 0 2.25rem;

    img {
      width: 100%;
      height: 2.3rem;
    }
  }

  .kefubox {
    border-radius: .6rem;

    .kefuboxtitle {
      font-size: .775rem;
      color: #333333;
      height: 4.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: PingFang SC;
    }

    .kefubox1 {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 2.9rem;
        border-top: 1px solid #E6E6E6;
        font-size: .7rem;

        a {
          font-family: PingFang SC;
          display: inline-block;
          padding: .2rem .4rem;
          border-radius: .3rem;
          background: #eee;
          color: #F97A2E;
        }

        span {
          display: inline-block;
          padding: .2rem .4rem;
          border-radius: .3rem;
          background: #F97A2E;
          color: #fff;
        }
      }

      div:nth-child(1) {
        color: #333;
        /*border-right:1px solid #E6E6E6;*/

      }

      div:nth-child(2) {

        font-family: PingFang SC;
      }
    }
  }

</style>
