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
          <input id="phone" placeholder="请输入手机号码" type="text" maxlength="11">
          <img src="../../../static/images/my/tel.png" alt="">
        </div>
        <div class="login-tel">
          <input type="text" id="code">
          <img src="../../../static/images/my/vercode.png" alt="">
          <span class="vercode bgcol1" v-if="seconds ==Number('00') " @click="getCode">获取验证码</span>
          <span class="vercode bgcol2" v-else>{{minutes}}:{{seconds}}</span>
        </div>
      </div>
      <div class="logBtn" @click="register">登录</div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "codelogin",
        data() {
            return {
                minutes: Number('01'),
                seconds: Number('00'),
                time:''
            }
        },
        watch: {
            second: {
                handler(newVal) {
                    this.num(newVal)
                }
            },
            minute: {
                handler(newVal) {
                    this.num(newVal)
                }
            }
        },
        computed: {
            second: function () {
                return this.num(this.seconds)
            },
            minute: function () {
                return this.num(this.minutes)
            }

        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            getCode() {
                if ($('#phone').val().length < 11) {
                    this.$toast({
                        message: "请输入正确手机号码",
                    })
                } else {
                    let phone = $('#phone').val()
                    let that = this
                    window.clearInterval(this.time)
                    this.minutes = Number('01');
                    this.seconds = Number('00');
                    this.add()
                    $.ajax({
                        url: this.HOST + '/app/user/getVerify',
                        type: 'POST',
                        data: {
                            phone_no: phone,
                            type:2,
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if(r.status == 200){
                                that.$toast({
                                    message: "获取验证码成功",
                                })
                            }else {
                                that.$toast({
                                    message: r.message,
                                })
                            }
                        }
                    })
                }

            },
            register() {
                let phone = $('#phone').val()
                let code = $('#code').val()
                let data = this.common.getsign()
                let that = this
                if (phone.length < 11) {
                    this.$toast({
                        message: "请输入正常手机号码",
                    })
                } else if (code.length != 4) {
                    this.$toast({
                        message: "请填写验证码",
                    })
                } else {
                    $.ajax({
                        url: this.HOST + '/app/user/login',
                        type: "POST",
                        data: {
                            sign: data.sign,
                            time: data.time,
                            'phone_no': phone,
                            'verify': code
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if (r.status == 200) {
                                that.$toast({
                                    message: "登录成功",
                                })
                                let userInfo = JSON.stringify(r.data)
                                window.localStorage.setItem('userInfo', userInfo)
                                /*that.$router.push({
                                    path: '/my'
                                })*/
                                window.location.href = '/my'
                            } else {
                                that.$toast({
                                    message: r.message,
                                })
                            }
                        }
                    })
                }
            },
            num: function (n) {
                return n < 10 ? '0' + n : '' + n
            },
            add: function () {
                let _this = this
                this.time = window.setInterval(function () {
                    if (_this.seconds === 0 && _this.minutes !== 0) {
                        _this.seconds = 59
                        _this.minutes -= 1
                    } else if (_this.minutes === 0 && _this.seconds === 0) {
                        _this.seconds = 0
                        window.clearInterval(this.time)
                    } else {
                        _this.seconds -= 1
                    }
                }, 1000)
            }
        }
    }
</script>

<style scoped>
  .back {
    width: .5rem;
    height: .85rem;

  }
  .bgcol1{
    /*color: #fff !important;*/
    /*background: #F97A2E;*/
    color:#F97A2E !important;
    text-align: center;
    width: 4.5rem;
  }
  .bgcol2{
    /*color:#F97A2E !important;*/
    width: 4.5rem;
    /*background:#B2B2B2 ;*/
    text-align: center;
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
    height: 2.5rem;
    line-height: 2.5rem;
    padding:0 .5rem;
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
