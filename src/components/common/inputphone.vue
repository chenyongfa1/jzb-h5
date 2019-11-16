<template>
  <div class="components-a">
    <!-- <button @click="abtn">A按钮</button> -->
    <div class="dialogbox" :style="{'display':controlbtn=='true'?'block':'none'}">
<!--          <div class="dialogbox">-->
      <div class="dialog">
        <div class="bdtitle">温馨提示</div>
        <div class="bdts">请登陆手机号码</div>
        <div class="login-tel">
          <input id="phone" placeholder="请输入手机号码" type="text" maxlength="11">
          <img src="../../../static/images/common/bdphone.png" alt="">
        </div>
        <div class="login-tel">
          <input id="phone1" placeholder="" type="text" maxlength="11">
          <img src="../../../static/images/my/vercode.png" alt="">
          <span class="vercode bgcol1" v-if="seconds ==Number('00')" @click="getCode">获取验证码</span>
          <span class="vercode bgcol2" v-else>{{minutes}}:{{seconds}}</span>
        </div>
        <span class="phonebtn" @click="phonefn"></span>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Atest",
        data() {
            return {
                minutes: Number('01'),
                seconds: Number('00'),
                time: '',
                controlbtn: false
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
        methods: {
            // abtn:function(){
            //   this.$emit("myFun",this.msg)   //$emit这个方法会触发一个事件
            // },
            initFn() {
                // let userInfo = window.localStorage.getItem('userInfo')
                /*if (this.$route.meta.wxtmprequireAuth) {
                    this.controlbtn = window.localStorage.getItem('controlbtn') || false
                } else {

                }*/
              if (this.$route.meta.requireAuth) {
                this.controlbtn = window.localStorage.getItem('controlbtn') || false
              } else {

              }
            },
            phonefn() {
                let that = this
                if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test($('#phone').val()))) {
                    this.$toast({
                        message: "号码有误，请重新输入！",
                    })
                    return false;
                } else if($('#phone1').val() === ""){
                  this.$toast({
                    message: "请输入验证码！",
                  })
                }else {
                  let inputPhone = JSON.parse(window.localStorage.getItem('inputPhone'))
                  let invitation = JSON.parse(window.localStorage.getItem('invitation'))
                  $.ajax({
                    url: this.HOST + '/app/wechat/updatephone',
                    type: "POST",
                    data: {
                      phone_no: $('#phone').val(),
                      tmp:inputPhone.tmp,
                      id:inputPhone.id,
                      verify: $('#phone1').val(),
                      invitation_code:invitation
                    },
                    dataType: "JSON",
                    success: function (r) {
                      if(r.status == 200){
                        window.localStorage.setItem('userInfo', JSON.stringify(r.data))
                        window.localStorage.removeItem('controlbtn')
                        window.localStorage.removeItem('inputPhone')
                        window.localStorage.removeItem('invitation')
                        that.controlbtn = false
                        that.$router.go(0)
                      }else {
                        that.$toast({
                          message: r.message,
                        })
                      }
                    }
                  })
                }

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
                            type: 3,
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if (r.status == 200) {
                                that.$toast({
                                    message: "获取验证码成功",
                                })
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
        },

        mounted() {
            // this.GetUrlParam(id||undefined)
            this.initFn()
            // this.showInput()

        },
    }
</script>

<style scoped>
  .dialogbox {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
    height: 100vh;
    overflow: hidden;
  }

  .vercode {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #B2B2B2;
    position: absolute;
    right: 1rem;
    top: 1.25rem;
  }

  .bgcol1 {
    /*color: #fff !important;*/
    /*background: #F97A2E;*/
    color: #F97A2E !important;
    text-align: center;
    width: 4.5rem;
  }

  .bgcol2 {
    /*color:#F97A2E !important;*/
    width: 4.5rem;
    /*background:#B2B2B2 ;*/
    text-align: center;
  }

  .dialog {
    width: calc(100% - 2.75rem);
    height: 14rem;
    position: absolute;
    /*border: 1px solid #F97A2E;*/
    top: 30%;
    background: #fff;
    margin: 0 1.375rem;
    padding: .35rem .75rem;
    box-sizing: border-box;
    border-radius: .6rem;
  }

  header {
    text-align: center;
    height: 1.5rem;
    line-height: 1.5rem;
    margin-top: 0.2rem;
    font-weight: bold;
  }

  input {
    width: calc(100% - 1.5rem);
    margin: 0.5rem .75rem;
    border-radius: 3px;
  }

  .phonebtn {
    display: block;
    width: 5.35rem;
    height: 2.8rem;
    background: url("../../../static/images/common/bdbtn.png");
    background-size: 100% 100%;
    margin: .5rem auto 0;
    /*font-size: 16px;
    height: 1.8rem;
    line-height: 1.8rem;
    width: 5rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2.5rem;
    margin-top: 2.4rem;
    border-radius: 10px;
    background: #F97A2E;
    color: #fff;*/
  }

  .bdtitle {
    font-size: .8rem;
    color: #333;
    text-align: center;
    line-height: 2rem;
  }

  .bdts {
    font-size: .7rem;
    color: #666;
    text-align: center;
  }

  .login-tel {
    display: block;
    /*width: 14.5rem;*/
    /*height: 2.5rem;*/
    position: relative;
    margin: 0 auto 0;
  }

  .login-tel input {
    height: 2.5rem;
    outline: none;
    border: 0;
    padding-left: 2.5rem;
    border-radius: .25rem;
    border: 1px solid rgba(223, 223, 223, 1);
  }

  .login-tel img {
    width: .85rem;
    height: 1.325rem;
    position: absolute;
    left: 1.4rem;
    top: 1rem;
  }

  #phone::-webkit-input-placeholder { /* WebKit browsers */
    color: #B2B2B2;
  }

  #phone:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #B2B2B2;
  }

  #phone::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #B2B2B2;
  }

  #phone:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #B2B2B2;
  }

  #phone1 {
    /*width: calc(100% - 5.5rem);*/
  }
</style>
