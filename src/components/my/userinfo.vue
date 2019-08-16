<template>
    <div class="myinfo pd16">
      <div class="user1 ">
        <router-link class="userImg1" to="/">
          <img src="static/images/my/balance.png" alt="">
          <span>我的余额</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg2" to="/">
          <img src="static/images/my/currency.png" alt="">
          <span>桔子币</span>
        </router-link >
        <div class="myline"></div>
        <router-link class="userImg3" to="/">
          <img src="static/images/my/discount.png" alt="">
          <span>优惠劵</span>
        </router-link>
      </div>
      <div class="user2 userlist ">
        <router-link class="userImg1" to="/">
          <img src="static/images/my/myinfo.png" alt="">
          <span>我的信息</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg2" to="/">
          <img src="static/images/my/Insured.png" alt="">
          <span>我的参保人</span>
        </router-link >
        <div class="myline"></div>
        <router-link class="userImg3" to="/">
          <img src="static/images/my/order.png" alt="">
          <span>我的订单</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg4" to="/">
          <img src="static/images/my/query.png" alt="">
          <span>进度查询</span>
        </router-link>
      </div>
      <div class="user3 userlist ">
        <router-link class="userImg1" to="/">
          <img src="static/images/my/share.png" alt="">
          <span>乐桔分享</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg2" to="/">
          <img src="static/images/my/team.png" alt="">
          <span>我的团队</span>
        </router-link >
        <div class="myline"></div>
        <router-link class="userImg3" to="/">
          <img src="static/images/my/member.png" alt="">
          <span>VIP专区</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg4" to="/">
          <img src="static/images/my/prize.png" alt="">
          <span>我的奖品</span>
        </router-link>
      </div>
      <div class="user4 userlist ">
        <router-link class="userImg1" to="/">
          <img src="static/images/my/kefu.png" alt="">
          <span>我的客服</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg2" to="/">
          <img src="static/images/my/invoice.png" alt="">
          <span>发票服务</span>
        </router-link >
        <div class="myline"></div>
        <router-link class="userImg3" to="/">
          <img src="static/images/my/about.png" alt="">
          <span>关于我们</span>
        </router-link>
        <div class="myline"></div>
        <router-link class="userImg4" to="/">
          <img src="static/images/my/set.png" alt="">
          <span>设置</span>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "userinfo"
    }
</script>

<style scoped>
  .myline{
    width:1px;
    height:1.75rem;
    background: #e6e6e6;
  }
  .myinfo{
    position: absolute;
    top: 6.375rem;


  }
  /*我的页面第一个列表*/
  .user1{
    width: calc(100vw - 1.6rem);
    height: 5.12rem;
    background: #fff;
    display: flex;
    padding:1.2rem 0 1.5rem;
    box-sizing: border-box;
    justify-content: space-around;
    box-shadow:0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius:.4rem;
  }
  .user1 a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size:.6rem;
    font-family:PingFangSC-Regular;
  }
  /*我的页面第二三四个列表*/
  .userlist{
    width: calc(100vw - 1.6rem);
    height: 3.9rem;
    background: #fff;
    display: flex;
    padding:.85rem 0 .75rem;
    box-sizing: border-box;
    justify-content: space-around;
    box-shadow:0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius:.4rem;
    margin-top: .75rem;
  }
  .userlist a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #666666;
    font-size:.6rem;
    font-family:PingFangSC-Regular;
  }

  /*图片大小*/
  .user1 .userImg1 img{
    width: 1.475rem;
    height: 1.35rem;
  }
  .user1 .userImg2 img{
    width: 1.25rem;
    height: 1.475rem;
  }
  .user1 .userImg3 img{
    width: 1.5rem;
    height: 1rem;
  }
  .user2 .userImg1 img{
    width: 1.2rem;
    height: 1.275rem;
  }
  .user2 .userImg2 img{
    width: 1rem;
    height: 1.375rem;
  }
  .user2 .userImg3 img{
    width: 1.1rem;
    height: 1.375rem;
  }
  .user2 .userImg4 img{
    width: 1.1rem;
    height: 1.375rem;
  }
  .user3 .userImg1 img{
    width: 1.175rem;
    height: 1.1rem;
  }
  .user3 .userImg2 img{
    width: 1.25rem;
    height: 1.05rem;
  }
  .user3 .userImg3 img{
    width: 1.225rem;
    height: .85rem;
  }
  .user3 .userImg4 img{
    width: 1.225rem;
    height: 1.125rem;
  }
  .user4 .userImg1 img{
    width: 1.2rem;
    height: 1.275rem;
  }
  .user4 .userImg2 img{
    width: 1.4rem;
    height: .95rem;
  }
  .user4 .userImg3 img{
    width: 1.275rem;
    height: 1.275rem;
  }
  .user4 .userImg4 img{
    width: 1.325rem;
    height: 1.175rem;
  }
</style>
