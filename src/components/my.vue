<template>
  <div>
    <div class="content">
      <div class="headerbg">
       <div class="myuserinfo">
         <div class="myuserhead">
           <img :src="userInfo.headimgurl" alt="">
         </div>
         <div class="username">
           <img v-if="franchisee[0] == 0" src="../../static/images/my/vip0.png" alt="">
           <img v-else src="../../static/images/my/vip1.png" alt="">
          <span> {{userInfo.nickname}}</span>
         </div>
       </div>
      </div>
      <Userinfo/>
      <!--      <van-popup v-model="showCon" :style="{ width:'80%',height:'10%' }">内容</van-popup>-->
      <div class="emty" style="height: 17rem"></div>
      <div class="guarantee-footer">
        <p>缴社保就选桔子保</p>
        <p>工作随意换 社保不要断</p>
        <img src="../../static/images/my/hotline.png" alt="">
      </div>
      <inputPhone/>
      <Isfootemty/>
      <NavFoot/>
    </div>

  </div>
</template>

<script>
  import NavFoot from "./common/footer";
  import Userinfo from "./my/userinfo";
  import Isfootemty from './common/isfootemty'
  import inputPhone from "@/components/common/inputphone";
  import {mapState} from "vuex"
  export default {
    name: 'calculator',
    components: {
      NavFoot,
      Userinfo,
      Isfootemty,
      inputPhone

    },
    computed:mapState({
      vip:state=>state.vip,
    }),
    data() {
      return {
        name: '',
        userInfo: '',
        showCon: false,
        franchisee:''
      }
    },
    methods: {
      toToast() {
        // this.showCon = true
        this.$toast({
          message: '您还不是桔子伙伴'
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
            that.franchisee = r.data.userInfo.franchisee=== '' ? '0-0':r.data.userInfo.franchisee
          }
        })
      },
    },
    mounted(){
      this.getOrderList1()
    },
    created() {

      this.userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || ""
      this.name = this.userInfo.name || "";
    }
  }
</script>

<style lang="scss" scoped>

  .myuserinfo{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 100;
    transform: translatez(200px);
    .myuserhead{
      width: 3.3rem;
      height: 3.3rem;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;

      }
    }
    .username{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: .9rem;
        height: .9rem;
        vertical-align: middle;
      }
      span{
        color: #503E25;
        font-size: .7rem;
        vertical-align: middle;
        display: inline-block;
        padding-left: .3rem;
      }
    }
  }

  .content {
    /*background: #fff;*/
    height: 100vh;
    overflow: auto;
  }

  .headerbg {
    background: url("../../static/images/my/mybg.png");
    height: 9.375rem;
    padding-top: 2.3rem;
  }

  /*.userInfo {
    display: flex;
    padding-left: .825rem;
    justify-content: space-between;
  }

  .userInfo .headLeft {
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    overflow: hidden;
    !*border: 1px solid red;*!
  }

  .userInfo .headLeft img {
    width: 3.25rem;
    height: 3.25rem;
  }

  .userInfo .headerRight {
    height: 3.25rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
  }

  .headerInfo {
    width: .75rem;
    height: .75rem;
    position: relative;
    right: -3rem;
  }

  .headerMember {
    display: flex;
    align-items: center;
    width: 4.65rem;
    height: 1.675rem;
    background: #fff;
    padding-left: .6rem;
    box-sizing: border-box;
    border-radius: 34px 0 0 34px
  }

  .headerMember img {
    width: .8rem;
    height: .6rem;
  }

  .headerMember span {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #666;
  }

  .user-info {
    display: flex;
    align-items: center;

  }*/

  /*.username {
    padding-left: .6rem;
    color: #fff;
  }*/


  .guarantee-footer {

    width: 100%;
    height: 3.85rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .guarantee-footer p {
    text-align: center
  }

  .guarantee-footer p:nth-child(1) {
    font-size: .85rem;
    font-family: TRENDS;
    color: #666666;
  }

  .guarantee-footer p:nth-child(2) {
    font-size: .55rem;
    font-family: TRENDS;
    color: #666666;
    padding-bottom: .3rem;
  }

  .guarantee-footer img {
    width: 5.2rem;
    height: .475rem;
  }
</style>
