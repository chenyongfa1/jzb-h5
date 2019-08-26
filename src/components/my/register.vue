<template>
  <div class="login">
    <van-nav-bar @click-left="onClickLeft" style="opacity: 1">
      <img left-arrow class="back"
           src="../../../static/images/common/back.png" slot="left" alt="">
    </van-nav-bar>
    <div class="login-head">
      <img src="../../../static/images/my/logo.png" alt="">
    </div>
    <div class="login-info">
      <div class="login-fill">
        <div class="login-tel">
          <input id="phone" type="text" maxlength="11">
          <img src="../../../static/images/my/tel.png" alt="">
        </div>
        <div class="login-tel">
          <input type="text" id="code">
          <img src="../../../static/images/my/vercode.png" alt="">
          <span class="vercode" @click="getCode">获取验证码</span>
        </div>
        <div class="login-tel">
          <input type="password" id="password">
          <img src="../../../static/images/my/password.png" alt="">
        </div>
      </div>
      <div class="logBtn" @click="register">注册</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "register",
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      getCode(){
        if($('#phone').val().length<11){
          this.$toast({
            message: "请输入正确手机号码",
          })
        }else {
          let phone = $('#phone').val()
          $.ajax({
            url:this.HOST+'/app/user/getVerify',
            type:'POST',
            data: {
              phone_no:phone
            },
            dataType:"JSON",
            success:function (r) {

            }
          })
        }

      },
      register(){
        let phone = $('#phone').val()
        let code = $('#code').val()
        let password = $('#password').val()
        if(phone.length < 11){
          this.$toast({
            message: "请输入正常手机号码",
          })
        }else if(code.length == 0){
          this.$toast({
            message: "请填写验证码",
          })
        }else if(password.length == 0){
          this.$toast({
            message: "请填写密码",
          })
        }else {
          $.ajax({
            url:this.HOST+'/app/user/register',
            type:'POST',
            data: {
              phone_no:phone,
              verify:code,
              password:password,
            },
            dataType:"JSON",
            success:function (r) {
              if(r.status == 200){
                this.$toast({
                  message: "登录成功",
                })
                this.$router.push({
                  name: "login",
                  params: {}
                });
              }else {
                this.$toast({
                  message: r.message,
                })
              }
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .back {
    width: .5rem;
    height: .85rem;
  }

  .login-head {
    width: 7rem;
    height: 7rem;
    background: url("../../../static/images/my/headImg.png");
    background-size: 100% 100%;
    margin: 0 auto 0;
    position: relative;
  }

  .login-head img {
    width: 2.8rem;
    height: 3.9rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.95rem;
    margin-left: -1.4rem;
  }

  .login-info {
    height: calc(100vh - 7rem);
    background: url("../../../static/images/my/loginbg.png");
    background-size: 100% 100%;
  }

  .login-fill {
    position: relative;
    padding-top: 2rem;
  }

  .login-fill .login-tel {
    display: block;
    width: 14.5rem;
    height: 2.5rem;
    position: relative;
    margin: 1.375rem auto 0;
  }

  .login-fill .login-tel:nth-child(1) {

  }

  .login-fill .login-tel input {
    width: 100%;
    height: 2.5rem;
    outline: none;
    border: 0;
    padding-left: 2.5rem;
  }

  .login-fill .login-tel img {
    position: absolute;
    left: 1rem;
    top: 0.6rem;
  }

  .login-fill .login-tel:nth-child(1) img {
    width: .85rem;
    height: 1.325rem
  }

  .login-fill .login-tel:nth-child(2) img {
    width: .8rem;
    height: 1.05rem
  }

  .login-fill .login-tel:nth-child(2) span {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    height: 2.25rem;
    line-height: 2.25rem;
    padding-right: .5rem;
  }

  .login-fill .login-tel:nth-child(3) img {
    width: 1.175rem;
    height: 1.175rem
  }

  .isAccount {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
    text-align: center;
    padding-top: 2.175rem;
  }

  .isAccount span {
    color: #F97A2E;
  }

  .logBtn {
    width: 5.25rem;
    height: 2.2rem;
    background: #F97A2E;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .8rem;
    margin: 1.5rem auto 0;
    border-radius: 2rem;
    text-align: center;
    line-height: 2.2rem;
  }

  .vercode {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
  }
</style>
