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
        <div class="changbtn" @click="phoneBinding">
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
    name: "binding",
    components:{
      HeadNav,
      IsHeadEmty
    },
    data(){
      return{
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
              type:4,
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
      //绑定微信
      phoneBinding() {
        let that = this
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))) {
          this.$toast({
            message: "号码有误，请重新输入！",
          })
          return false;
        } else if(this.sms === ""){
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
              phone_no: this.phone,
              tmp:inputPhone.tmp,
              id:inputPhone.id,
              verify: this.sms,
              invitation_code:invitation
            },
            dataType: "JSON",
            success: function (r) {
              if(r.status == 200){
                window.localStorage.setItem('userInfo', JSON.stringify(r.data))
                window.localStorage.removeItem('inputPhone')
                window.localStorage.removeItem('invitation')
                that.controlbtn = false
                that.$router.back()
              }else {
                that.$toast({
                  message: r.message,
                })
              }
            }
          })
        }
      },
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
