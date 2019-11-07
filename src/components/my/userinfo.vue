<template>
  <div class="myinfo pd16">
    <div class="user1 ">
      <router-link to="/mybalance" class="userImg1">
        <!--        <div class="userImg1" @click="toast" >-->
        <img src="static/images/my/balance.png" alt="">
        <span>我的余额</span>
      </router-link>
      <div class="myline"></div>
      <div class="userImg2" @click="toast">
        <img src="static/images/my/currency1.png" alt="">
        <span>积分</span>
      </div>
      <div class="myline"></div>
      <router-link to="/mycoupon" class="userImg3">
        <!--        <div class="userImg3" @click="toast">-->
        <img src="static/images/my/discount.png" alt="">
        <span>优惠劵</span>
        <!--        </div>-->
      </router-link>
    </div>
    <div class="user2 userlist ">
      <router-link to="/myinfo" class="userImg1">
        <img src="static/images/my/myinfo.png" alt="">
        <span>我的信息</span>
      </router-link>
      <div class="myline"></div>
      <router-link to="/insuredperson" class="userImg2">
        <img src="static/images/my/Insured.png" alt="">
        <span>我的参保人</span>
      </router-link>
      <div class="myline"></div>
      <router-link to="/myorder" class="userImg3">
        <img v-if="len == 0" src="static/images/my/order.png" alt="">
        <img v-else src="static/images/my/myorderinfo.png" alt="">
        <span>我的订单</span>
      </router-link>
      <div class="myline"></div>
      <div class="userImg1" @click="kefuImg">
        <img src="static/images/my/kefu.png" alt="">
        <span>我的客服</span>
      </div>
    </div>
    <div class="user3 userlist ">
      <router-link to="/share" class="userImg1">
        <img src="static/images/my/share.png" alt="">
        <span>乐桔分享</span>
      </router-link>
      <div class="myline"></div>
      <router-link :to="{name:'myteam',query:{id:partner}}" class="userImg2">
        <img src="static/images/my/team.png" alt="">
        <span>我的团队</span>
      </router-link>
      <div class="myline"></div>
      <div @click="toPartnerLevel" class="userImg3" >
        <img src="static/images/my/member1.png" alt="">
        <span>桔子伙伴</span>
      </div>
      <div class="myline"></div>
      <div class="userImg4" @click="toast">
        <img src="static/images/my/prize.png" alt="">
        <span>我的奖品</span>
      </div>
    </div>
    <div class="user4 userlist ">
      <!--<div class="userImg1" @click="toast">
        <img src="static/images/my/kefu.png" alt="">
        <span>我的客服</span>
      </div>
      <div class="myline"></div>-->
      <div class="userImg2" @click="toast">
        <img src="static/images/my/invoice.png" alt="">
        <span>发票服务</span>
      </div>
      <div class="myline"></div>
      <router-link to="/about" class="userImg3">
        <img src="static/images/my/about.png" alt="">
        <span>关于我们</span>
      </router-link>
      <div class="myline"></div>
      <router-link class="userImg4" to="/set">
        <img src="static/images/my/set.png" alt="">
        <span>设置</span>
      </router-link>
      <div class="myline1"></div>
      <!--        <div class="myline"></div>-->
      <div class="userImg1">
        <!--<img src="static/images/my/kefu.png" alt="">
        <span>我的客服</span>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userinfo",
    data() {
      return {
        len: 0,
        partner:'',
        franchisee:''
      }
    },
    methods: {
      toast() {
        this.$toast({
          message: '即将上线，敬请期待',
          duration: Number(1500)
        })
      },
      getOrderList1() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/user/userCenter',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
          },
          dataType: "JSON",
          success: function (r) {
            that.partner = r.data.userInfo.partner
            that.len = r.data.orderStatusZero || 0
            that.franchisee = r.data.userInfo.franchisee=== '' ? '0-0':r.data.userInfo.franchisee
            that.$store.commit('getVip',2)
          }
        })
      },
      kefuImg() {
        window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
      },
      toToast() {
        // this.showCon = true
        this.$toast({
          message: '您还不是桔子伙伴'
        })
      },
      toPartnerLevel(){
        if(Number(this.franchisee[0]) == 0){
          this.$router.push({
            name:'orangepartners'
          })
        }else {
          this.$router.push({
            name:'partnerlevel',
            query:{
              id:this.franchisee[0]
            }
          })
        }
      }

    },
    mounted() {
      this.getOrderList1()
    }
  }
</script>

<style scoped>

  .myinfo {
    position: absolute;
    top: 4.2rem;
  }

  /*我的页面第一个列表*/
  .user1 {
    width: calc(100vw - 1.6rem);
    background: #fff;
    display: flex;
    padding: 3rem 0 1.5rem;
    box-sizing: border-box;
    justify-content: space-around;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius: .4rem;
  }

  .user1 a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
  }

  .user1 div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
  }

  /*我的页面第二三四个列表*/
  .userlist {
    width: calc(100vw - 1.6rem);
    height: 3.9rem;
    background: #fff;
    display: flex;
    padding: .85rem 0 .75rem;
    box-sizing: border-box;
    justify-content: space-around;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius: .4rem;
    margin-top: .75rem;
  }

  .userlist a {
    width: calc(25%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
  }

  .userlist > div {
    width: calc(25%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
  }

  /*图片大小*/
  .user1 .userImg1 img {
    width: 1.475rem;
    height: 1.35rem;
  }

  .user1 .userImg2 img {
    width: 1.3rem;
    height: 1.2rem;
  }

  .user1 .userImg3 img {
    width: 1.5rem;
    height: 1rem;
  }

  .user2 .userImg1 img {
    width: 1.2rem;
    height: 1.275rem;
  }

  .user2 .userImg2 img {
    width: 1rem;
    height: 1.375rem;
  }

  .user2 .userImg3 img {
    width: 1.1rem;
    height: 1.375rem;
  }

  .user2 .userImg4 img {
    width: 1.1rem;
    height: 1.375rem;
  }

  .user3 .userImg1 img {
    width: 1.175rem;
    height: 1.1rem;
  }

  .user3 .userImg2 img {
    width: 1.25rem;
    height: 1.05rem;
  }

  .user3 .userImg3 img {
    /*width: 1.225rem;
    height: .85rem;*/
    width: 1.05rem;
    height: 1.25rem  ;
  }

  .user3 .userImg4 img {
    width: 1.225rem;
    height: 1.125rem;
  }

  .user4 .userImg1 {
    /*width: 2rem;
    height: 1.275rem;*/
  }

  .user4 .userImg2 img {
    width: 1.4rem;
    height: .95rem;
  }

  .user4 .userImg3 img {
    width: 1.275rem;
    height: 1.275rem;
  }

  .user4 .userImg4 img {
    width: 1.325rem;
    height: 1.175rem;
  }

  .userlist .myline {
    width: 1px;
    height: 1.75rem;
    background: #e6e6e6;
  }

  .userlist .myline1 {
    width: 1px;
    height: 1.75rem;
    background: #fff;
  }
</style>
