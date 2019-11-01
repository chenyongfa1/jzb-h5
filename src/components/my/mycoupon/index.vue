<template>
  <div class="mycoupon">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <van-tabs v-model="activeName">
        <van-tab title="未使用" name="a">
          <div id="notused1">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh1">
              <van-list @load="onLoad1" :finished="finished">
                <div v-if="couponCount1 !=0" class="notusedlist">
                  <div class="notuseditem notuseditem1 mg16" v-for="(item,index) in couponlist1" :key="index">
                    <div class="notusedleft">
                      <div>￥</div>
                      <div>{{item.worth}}</div>
                    </div>
                    <div class="notusedright">
                      <div class="yh">活动优惠券</div>
                      <div class="notusedtime">{{item.start}} - {{item.end}}</div>
                      <div class="notuseddes">{{item.remark}}</div>
                      <div class="touser" @click="toSocial">
                        <img src="../../../../static/images/my/mycoupon/tonotused1.png" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="emtycoupon1">
                  <div class="emtycoupon">
                    <img src="../../../../static/images/socialsecurity/nocoupon.png" alt="">
                    <span>很遗憾</span>
                    <span>您暂无可用优惠券</span>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
        <van-tab title="已使用" name="b">
          <div id="notused2">
            <van-pull-refresh v-model="isLoading1" @refresh="onRefresh2">
              <van-list @load="onLoad2" :finished="finished1">
                <div v-if="couponCount2 !=0" class="notusedlist">
                  <div class="notuseditem  notuseditem2 mg16" v-for="(item,index) in couponlist2" :key="index">
                    <div class="notusedleft">
                      <div>￥</div>
                      <div>{{item.worth}}</div>
                    </div>
                    <div class="notusedright">
                      <div class="yh">活动优惠券</div>
                      <div class="notusedtime">{{item.start}} - {{item.end}}</div>
                      <div class="notuseddes">{{item.remark}}</div>
                      <div class="touser1">
                        已使用
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="emtycoupon1">
                  <div class="emtycoupon">
                    <img src="../../../../static/images/socialsecurity/nocoupon.png" alt="">
                    <span>很遗憾</span>
                    <span>您暂无可用优惠券</span>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
        <van-tab title="已过期" name="c">
          <div id="notused3">
            <van-pull-refresh v-model="isLoading2" @refresh="onRefresh3">
              <van-list @load="onLoad3" :finished="finished2">
                <div class="notusedlist" v-if="couponCount3 !=0">
                  <div class="notuseditem notuseditem2 mg16" v-for="(item,index) in couponlist3" :key="index">
                    <div class="notusedleft">
                      <div>￥</div>
                      <div>{{item.worth}}</div>
                    </div>
                    <div class="notusedright">
                      <div class="yh">活动优惠券</div>
                      <div class="notusedtime">{{item.start}} - {{item.end}}</div>
                      <div class="notuseddes">{{item.remark}}</div>
                      <div class="touser1">
                        已过期
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="emtycoupon1">
                  <div class="emtycoupon">
                    <img src="../../../../static/images/socialsecurity/nocoupon.png" alt="">
                    <span>很遗憾</span>
                    <span>您暂无可用优惠券</span>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
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
        name: "mycoupon",
        components: {
            HeadNav,
            IsHeadEmty
        },
        data() {
            return {
                activeName: 'a',
                userId:JSON.parse(window.localStorage.getItem('userInfo')).id,
                //未使用优惠劵
                isLoading: false,
                loading: false,//控制上拉加载的加载动画
                finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
                page1:1,
                couponCount1:0,
                couponlist1:[],
                //已使用优惠劵
                isLoading1: false,
                loading1: false,//控制上拉加载的加载动画
                finished1: false,//控制在页面往下移动到底部时是否调用接口获取数据
                page2:1,
                couponCount2:0,
                couponlist2:[],
                //已过期优惠劵
                isLoading2: false,
                loading2: false,//控制上拉加载的加载动画
                finished2: false,//控制在页面往下移动到底部时是否调用接口获取数据
                page3:1,
                couponCount3:0,
                couponlist3:[],
            }
        },
        methods: {
            // 获取未使用优惠劵下拉刷新
            onRefresh1() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.getCoupon1()
                    this.page1 = 1
                }, 500);
            },
            // 获取未使用优惠劵上拉加载
            onLoad1() {
                let data = this.common.getsign()
                let that = this
                let page = (this.couponCount1 / 5)
                document.getElementById("notused1").onscroll = function () {
                    let scrollHeight = document.getElementById("notused1").scrollHeight;//251
                    let scrollTop = document.getElementById("notused1").scrollTop;//0-18
                    let clientHeight = document.getElementById("notused1").clientHeight;//233
                    if ((scrollHeight - clientHeight) == scrollTop) {
                        if (page > that.page1) {
                            setTimeout(() => {
                                $.ajax({
                                    url: that.HOST + '/app/user/userCoupon',
                                    type: "POST",
                                    data: {
                                        sign: data.sign,
                                        time: data.time,
                                        user_id: that.userId,
                                        status: 0,
                                        type: 1,
                                        p: that.page1 + 1
                                    },
                                    dataType: "JSON",
                                    success: function (r) {
                                        if (r.status == 200) {
                                            that.couponlist1 = [...that.couponlist1, ...r.data.list] || []
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
            // 获取未使用优惠劵
            getCoupon1() {
                let data = this.common.getsign();
                let that = this;
                $.ajax({
                    url: this.HOST + "/app/user/userCoupon",
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        user_id: this.userId,
                        status: 0,
                        type: 1,
                        p: 1
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.couponCount1 = r.data.count || 0
                        that.couponlist1 = r.data.list
                    }
                });
            },
            // 获取未使用优惠劵下拉刷新
            onRefresh2() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading1 = false;
                    this.getCoupon2()
                    this.page2 = 1
                }, 500);
            },
            // 获取未使用优惠劵上拉加载
            onLoad2() {
                let data = this.common.getsign()
                let that = this
                let page = (this.couponCount2 / 5)
                document.getElementById("notused2").onscroll = function () {
                    let scrollHeight = document.getElementById("notused2").scrollHeight;//251
                    let scrollTop = document.getElementById("notused2").scrollTop;//0-18
                    let clientHeight = document.getElementById("notused2").clientHeight;//233
                    if ((scrollHeight - clientHeight) == scrollTop) {
                        if (page > that.page2) {
                            setTimeout(() => {
                                $.ajax({
                                    url: that.HOST + '/app/user/userCoupon',
                                    type: "POST",
                                    data: {
                                        sign: data.sign,
                                        time: data.time,
                                        user_id: that.userId,
                                        status: 1,
                                        type: 1,
                                        p: that.page2 + 1
                                    },
                                    dataType: "JSON",
                                    success: function (r) {
                                        if (r.status == 200) {
                                            that.couponlist2 = [...that.couponlist2, ...r.data.list] || []
                                            that.page2++
                                            that.$toast({
                                                message: '加载第' + that.page2 + '页'
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
            // 获取未使用优惠劵
            getCoupon2() {
                let data = this.common.getsign();
                let that = this;
                $.ajax({
                    url: this.HOST + "/app/user/userCoupon",
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        user_id: this.userId,
                        status: 1,
                        type: 1,
                        p: 1
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.couponCount2 = r.data.count || 0
                        that.couponlist2 = r.data.list
                    }
                });
            },
            // 获取未使用优惠劵下拉刷新
            onRefresh3() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading2 = false;
                    this.getCoupon3()
                    this.page3 = 1
                }, 500);
            },
            // 获取未使用优惠劵上拉加载
            onLoad3() {
                let data = this.common.getsign()
                let that = this
                let page = (this.couponCount3 / 5)
                document.getElementById("notused3").onscroll = function () {
                    let scrollHeight = document.getElementById("notused3").scrollHeight;//251
                    let scrollTop = document.getElementById("notused3").scrollTop;//0-18
                    let clientHeight = document.getElementById("notused3").clientHeight;//233
                    if ((scrollHeight - clientHeight) == scrollTop) {
                        if (page > that.page3) {
                            setTimeout(() => {
                                $.ajax({
                                    url: that.HOST + '/app/user/userCoupon',
                                    type: "POST",
                                    data: {
                                        sign: data.sign,
                                        time: data.time,
                                        user_id: that.userId,
                                        status: 255,
                                        type: 1,
                                        p: that.page3 + 1
                                    },
                                    dataType: "JSON",
                                    success: function (r) {
                                        if (r.status == 200) {
                                            that.couponlist3 = [...that.couponlist3, ...r.data.list] || []
                                            that.page3++
                                            that.$toast({
                                                message: '加载第' + that.page3 + '页'
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
            // 获取未使用优惠劵
            getCoupon3() {
                let data = this.common.getsign();
                let that = this;
                $.ajax({
                    url: this.HOST + "/app/user/userCoupon",
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        user_id: this.userId,
                        status:255,
                        type: 1,
                        p: 1
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.couponCount3 = r.data.count || 0
                        that.couponlist3 = r.data.list
                    }
                });
            },
            toSocial(){
                this.$router.push({
                    path:'/socialsecurity'
                })
            }
        },
        mounted() {
            this.getCoupon1()
            this.getCoupon2()
            this.getCoupon3()
        }
    }
</script>

<style lang="scss" scoped>
  .content {
    background: #f2f2f2;
  }
  .notusedlist {
    .notuseditem1{
      background: url("../../../../static/images/my/mycoupon/notused.png");
    }
    .notuseditem2{
      background: url("../../../../static/images/my/mycoupon/nocoupon1.png");
    }

    .notuseditem {
      margin-top: .5rem;

      background-size: 100% 100%;
      height: 6.65rem;
      display: flex;
      .notusedleft {
        width: 40%;
        display: flex;
        flex-direction: row;
        color: #fff;
        margin-top: 1.4rem;
        margin-left: .5rem;

        > div:nth-child(1) {
          font-size: 1.2rem;
        }

        > div:nth-child(2) {
          font-size: 2.75rem;
        }
      }

      .notusedright {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        > div:nth-child(1) {
          font-size: .6rem;
          color: #666;
        }

        > div:nth-child(2) {
          font-size: .6rem;
          color: #B2B2B2;
        }

        > div:nth-child(3) {
          font-size: .6rem;
          color: #B2B2B2;
        }
        > div:nth-child(4){
          display: flex;
          justify-content: flex-end;
          img{
            width: 4.5rem;
            height: 1.75rem;
          }
        }
        .touser1{
          padding-right: .8rem;
          font-size: .7rem;
          color: #666666;
        }
      }
    }
  }
  #notused1 {
    height: calc(100vh - 5rem);
    overflow: auto;

  }
  #notused2 {
    height: calc(100vh - 5rem);
    overflow: auto;

  }
  #notused3 {
    height: calc(100vh - 5rem);
    overflow: auto;

  }
  .emtycoupon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    img{
      width: 4.125rem;
      height: 2.9rem;
    }
    span:nth-child(2){
      font-size: .7rem;
      color: #333;
      padding:.6rem 0;
    }
    span:nth-child(3){
      font-size: .6rem;
      color: #666666;
    }
  }
</style>
