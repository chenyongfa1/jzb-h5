<template>
  <div class="changepassword">
    <HeadNav />
    <div class="content">
      <IsHeadEmty />
      <div>
        <div class="inputchange">
          <van-cell-group>
            <van-field
              v-model="phone"
              label="手机号"
              type="number"
              placeholder="请输入手机号码"
              maxlength="11"
              clearable
            />
          </van-cell-group>
          <van-cell-group>
            <van-field
              v-model="password"
              clearable
              label="新密码"
              placeholder="请输入新密码"
            />

            <van-field
              v-model="password1"
              type="password"
              label="确认密码"
              placeholder="请再次输入新密码"
              clearable
            />
          </van-cell-group>
          <van-cell-group>
            <van-field
              v-model="sms"
              center
              clearable
              label="短信验证码"
              placeholder="请输入短信验证码"
            >
              <van-button slot="button" size="small"  type="default" @click="getCode"
                          v-if="minutes == 1 || seconds == 0">发送验证码
              </van-button>
              <van-button slot="button" size="small"  type="default" @click="getCode" v-else>{{minutes}}:{{seconds
                }}</van-button>
            </van-field>
          </van-cell-group>
        </div>
        <div class="changbtn" @click="changeBtn">
          <div class="changepasswordbtn">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    export default {
        name: "forgetpassword",
        components:{
            HeadNav,
            IsHeadEmty
        },
        data(){
            return{
                password:"",
                password1:"",
                phone:"",
                userId: "",
                sms:'',
                minutes: Number('01'),
                seconds: Number('00'),
                time:'',
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
        methods:{
            // 获取验证码
            getCode() {
                if (this.phone < 11) {
                    this.$toast({
                        message: "请输入正确手机号码",
                    })
                } else {
                    let that = this
                    window.clearInterval(this.time)
                    this.minutes = Number('01');
                    this.seconds = Number('00');
                    this.add()
                    $.ajax({
                        url: this.HOST + '/app/user/getVerify',
                        type: 'POST',
                        data: {
                            phone_no: this.phone,
                            type:3,
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
            },
            //修改密码
            changeBtn(){
                if(this.phone ==="" ){
                    this.$toast({
                        message:'请填写手机号码'
                    })
                }else if(this.password===""){
                    this.$toast({
                        message:'请填写新密码'
                    })
                }else if(this.password1===""){
                    this.$toast({
                        message:'请填写确认密码'
                    })
                }else if(this.sms ===""){
                    this.$toast({
                        message:'请填写验证码'
                    })
                }else {
                    let that = this
                    $.ajax({
                        url: this.HOST + '/app/user/changePassword',
                        type: 'POST',
                        data: {
                            user_id:this.userId,
                            phone_no: this.phone,
                            new_pwd:this.password,
                            rep_pwd:this.password1,
                            verify:this.sms,
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if(r.status == 200){
                                that.$toast({
                                    message: "密码修改成功",
                                })
                                that.$router.push({
                                    path:'/login'
                                })
                            }else {
                                that.$toast({
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

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .inputchange{
    background: #fff;
  }
  .changbtn{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .changepasswordbtn{
      width:92%;
      height: 1.9rem;
      line-height: 1.9rem;
      text-align: center;
      font-size: .8rem;
      color: #fff;
      background: #F97A2E;
      border-radius:.95rem;
    }
  }

</style>
