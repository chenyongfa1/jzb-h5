<template>
    <div class="invoice">
      <HeadNav />
      <div class="content">
        <IsHeadEmty />
        <van-tabs v-model="active" line-height="0" title-active-color="#F97A2E" title-inactive-color="#333"
                  background="#f2f2f2">
          <van-tab title="开票记录">
            <div id="invoice1">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list @load="onLoad" :finished="finished">
                  <div class="invoicelist pd16">
                    <div class="invoiceitem ">
                      <div class="invoicetitle pd16">
                        <span>已开票</span>
                        <van-icon name="arrow" />
                      </div>
                      <div class="invoicecon pd16">
                        <div class="invoiceconitem">
                          <span>发票抬头</span>
                          <span>个人</span>
                        </div>
                        <div class="invoiceconitem">
                          <span>发票类型</span>
                          <span>社保代理</span>
                        </div><div class="invoiceconitem">
                        <span>发票日期</span>
                        <span>2019-06-09  16:45:25</span>
                      </div>
                        <div class="invoiceconitem">
                          <span>发票金额</span>
                          <span class="colf25">¥ 2424.09</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </van-list>
              </van-pull-refresh>
            </div>

          </van-tab>
          <van-tab title="未开票订单">
            <div id="invoice2">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list @load="onLoad" :finished="finished">
                  <div class="invoicelist pd16">
                    <div class="invoiceitem ">
                      <div class="invoicetitle pd16">
                        <span>赵星星的参保订单</span>
                        <van-icon name="arrow" />
                      </div>
                      <div class="invoicecons pd16">
                        <div class="couponchecks">
                          <div class="couponcheck "  @click="checkFun()">

                          </div>
                        </div>
                        <div class="invoicecon ">
                          <div class="invoiceconitem">
                            <span>参保城市</span>
                            <span>深圳</span>
                          </div>
                          <div class="invoiceconitem">
                            <span>参保月份</span>
                            <span>2019-06 至 2019-08</span>
                          </div><div class="invoiceconitem">
                          <span>下单日期</span>
                          <span>2019-06-09  16:45:25</span>
                        </div>
                          <div class="invoiceconitem">
                            <span>费用总计</span>
                            <span class="colf25">¥ 2424.09</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </van-list>
              </van-pull-refresh>
              <div @click="toDeatil" class="applicationbtn">
                申请开票
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    export default {
        name: "invoice",
        components:{
            HeadNav,
            IsHeadEmty
        },
        data() {
            return {
                active: 0,
                isLoading: false,
                loading: false,//控制上拉加载的加载动画
                finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
                page1:1,
            };
        },
        methods:{
            onRefresh(){
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.getMyteam()
                    this.page1 = 1
                })
            },
            onLoad(){
                let data = this.common.getsign()
                let that = this
                let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
                let page = (this.teamCount / 10)//页数
                document.getElementById("invoice1").onscroll = function () {
                    var scrollHeight = document.getElementById("invoice1").scrollHeight;//251
                    var scrollTop = document.getElementById("invoice1").scrollTop;//0-18
                    var clientHeight = document.getElementById("invoice1").clientHeight;//233
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
            checkFun(id,index){
                let couponcheck = $('.couponcheck').eq(0)
                if(couponcheck.hasClass('couponcheckbg')){
                    $('.couponcheck').eq(0).removeClass('couponcheckbg')
                    // this.delArr.splice($.inArray(id, this.delArr), 1);
                }else {
                    $('.couponcheck').eq(0).addClass('couponcheckbg')
                    // this.delArr.push(id)
                }
            },
            toDeatil(){
                this.$router.push({
                    path:'/applicationinvoice'
                })
            }
        },


    }
</script>

<style lang="scss" scoped>
.content{
  background: #f2f2f2;
}
  #invoice1{
    width: 100%;
    height: calc(100vh - 4.5rem);
    overflow: auto;
    .invoicelist{
      .invoiceitem{
        background: #fff;
        border-radius:.6rem;
        .invoicetitle{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 2.2rem;
          border-bottom: 1px solid #e6e6e6;
          span{
            font-weight:600;
            color:rgba(51,51,51,1);
            font-size: .8rem;
          }
          i{
            color: #e6e6e6;
          }
        }
        .invoicecon{
          padding-top: .2rem;
          padding-bottom: .2rem;
          .invoiceconitem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.5rem;
            font-size: .7rem;
            color: #666;


            span:nth-child(1){
              display:inline-block;
              width: 40%;
            }
            span:nth-child(2){
              display:inline-block;
              width: 60%;
            }
          }
        }


      }
    }
  }
#invoice2{
  width: 100%;
  height: calc(100vh - 4.5rem);
  overflow: auto;
  .invoicelist{
    .invoiceitem{
      background: #fff;
      border-radius:.6rem;
      .invoicetitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.2rem;
        border-bottom: 1px solid #e6e6e6;

        span{
          font-weight:600;
          color:rgba(51,51,51,1);
          font-size: .8rem;
        }
        i{
          color: #e6e6e6;
        }
      }
      .invoicecons{
        display: flex;
        align-items: center;
        .couponchecks{
          width: 10%;

        }
        .invoicecon{
          width: 80%;
          padding-top: .2rem;
          padding-bottom: .2rem;
          .invoiceconitem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.5rem;
            font-size: .7rem;
            color: #666;


            span:nth-child(1){
              display:inline-block;
              width: 40%;
            }
            span:nth-child(2){
              display:inline-block;
              width: 60%;
            }
          }
        }
      }

    }
    .couponcheck {
      width: .65rem;
      height: .65rem;
      background: url("../../../../static/images/socialsecurity/unselect.png");
      background-size: 100% 100%;

    }
    .couponcheckbg{
      width: .65rem;
      height: .65rem;
      background: url("../../../../static/images/socialsecurity/checked.png");
      background-size: 100% 100%;
    }
  }
  .applicationbtn{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #fff;
    background: #F97A2E;
    text-align: center;
    font-size: .8rem;
  }
}
  .colf25{
    color: #F25454;
  }
</style>
