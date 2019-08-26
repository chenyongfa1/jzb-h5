<template>
  <div>
    <div class="content">
      <div class="headerbg">
        <div class="userInfo">
          <div class="user-info">
            <div class="headLeft">
              <!--            <img src="" alt="">-->

            </div>
            <div class="username">{{name}}</div>
          </div>
          <div class="headerRight">
            <div class="headerInfo">
              <img class="cz_img" src="static/images/my/info.png" alt="">

            </div>
            <div class="headerMember">
              <img src="static/images/my/member.png" alt="">
              <span>会员权益</span>
            </div>
          </div>
        </div>
      </div>
      <Userinfo />
      <div class="guarantee-footer">
        <p>缴社保就选桔子保</p>
        <p>工作随意换 社保不要断</p>
        <img src="../../static/images/my/hotline.png" alt="">
      </div>
      <Isfootemty />
    </div>
  </div>
</template>

<script>
  import NavFoot from "./common/footer";
  import Userinfo from "./my/userinfo";
  import Isfootemty from './common/isfootemty'
  export default {
    name: 'calculator',
    components: {
      NavFoot,
      Userinfo,
      Isfootemty

    },
    data () {
      return {
        name:'',
      }
    },
    methods: {

    },
    created() {
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      this.name = userInfo.name || ""
    }
  }
</script>

<style scoped>
  .content{
    background: #F2F2F2;
    height: 100vh;
    overflow: auto;
  }
  .headerbg{
    background: url("../../static/images/my/mybg.png");
    height: 9.375rem;
    padding-top: 2.3rem;
  }
  .userInfo{
    display: flex;
    padding-left: .825rem;
    justify-content: space-between;
  }
  .userInfo .headLeft{
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid red;
  }
  .userInfo .headerRight{
    height: 3.25rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
  }
  .headerInfo{
    width: .75rem;
    height: .75rem;
    position: relative;
    right: -3rem;
  }
  .headerMember{
    display: flex;
    align-items: center;
    width:4.65rem;
    height:1.675rem;
    background: #fff;
    padding-left: .6rem;
    box-sizing: border-box;
    border-radius:34px 0 0 34px
  }
  .headerMember img{
    width: .8rem;
    height: .6rem;
  }
  .headerMember span{
    font-size:.6rem;
    font-family:PingFangSC-Regular;
    color: #666;
  }
  .user-info{
    display: flex;
    align-items: center;

  }
  .username{
    padding-left: .6rem;
    color: #fff;
  }


  .guarantee-footer{
    position: absolute;
    bottom: 60px;
    width: 100%;
    height: 3.85rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .guarantee-footer p{
    text-align: center
  }
  .guarantee-footer p:nth-child(1){
    font-size:.85rem;
    font-family:TRENDS;
    color: #666666;
  }
  .guarantee-footer p:nth-child(2){
    font-size:.55rem;
    font-family:TRENDS;
    color: #666666;
    padding-bottom: .3rem;
  }
  .guarantee-footer img{
    width: 5.2rem;
    height: .475rem;
  }
</style>
