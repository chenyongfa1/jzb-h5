<template>
  <div class="login">
    <van-nav-bar @click-left="onClickLeft" style="opacity: 1">
      <img left-arrow class="back"
           src="../../../static/images/common/back.png" slot="left" alt="">
    </van-nav-bar>
    <div class="">
      <div class="login-head">
        <img src="../../../static/images/my/logo.png" alt="">
      </div>
      <div class="login-info">
        <div class="login-fill">
          <div class="login-tel">
            <input class="textName" type="text" maxlength="11">
            <img src="../../../static/images/my/tel.png" alt="">
          </div>
          <div class="login-tel">
            <input class="passWord" type="password">
            <img src="../../../static/images/my/password.png" alt="">
          </div>

        </div>
        <div class="isLogin">
          <router-link to="/forgetpassword">忘记密码？</router-link>
          <router-link to="/codelogin">验证码登录</router-link>
        </div>
        <div class="isAccount"> 还没账号？
          <router-link to="/register">立即注册</router-link>
        </div>
        <div class="logBtn" @click="getLogin">登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        components: {},
        data() {
            return {}
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            getLogin() {
                let phoNum = $('.textName').val().length;
                let phoVal = $('.textName').val()
                let passVal = $('.passWord').val()
                let that = this
                let data = this.common.getsign()
                if (phoNum != 11) {
                    this.$toast({
                        message: "请输入正确手机号码",
                    })
                } else {
                    $.ajax({
                        url: this.HOST + '/app/user/login',
                        type: "POST",
                        data: {
                            sign: data.sign,
                            time: data.time,
                            'phone_no': phoVal,
                            'password': passVal
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if (r.status != 200) {
                                that.$toast({
                                    message: r.message,
                                })
                            } else {
                                that.$toast({
                                    message: "登录成功",
                                })

                                let userInfo = JSON.stringify(r.data)
                                window.localStorage.setItem('userInfo', userInfo)
                                const redirect = that.$route.query.redirect
                                /*that.$router.push({
                                    path: '/my'
                                })*/
                                window.location.href = '/my'
                            }
                        }
                    })
                }

            },

        },
        mounted() {

        },
        created() {

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
    width: 1.175rem;
    height: 1.175rem
  }

  .isLogin {
    display: flex;
    justify-content: space-between;
    width: 14.5rem;
    margin: 0 auto;
    padding-top: .5rem;
  }

  .isLogin a {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
  }
  .isLogin div {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
  }

  .isAccount {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
    text-align: center;
    padding-top: 2.175rem;
  }

  .isAccount a {
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
</style>
