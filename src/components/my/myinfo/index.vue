<template>
  <div class="mybalance">
    <HeadNav />
    <div class="content">
      <IsHeadEmty />
      <div class="userinfolist">
        <div class="userinfoitem ">
          <div class="userinfohead">头像</div>
          <div class="userinfohead1">
            <img :src="myInfo.headimgurl" alt="">
<!--            <img v-else src="../../../../static/images/my/headimg1.png" alt="">-->
          </div>
        </div>
        <div class="userinfoitem">
          <div class="userinfohead">昵称</div>
          <div class="userinfohead1">
            {{myInfo.nickname}}
          </div>
        </div>
        <div class="userinfoitem">
          <div class="userinfohead">性别</div>
          <div class="userinfohead1" v-if="myInfo.sex == 2">女</div>
          <div class="userinfohead1" v-else-if="myInfo.sex == 1">男</div>
        </div>
        <div class="userinfoitem">
          <div class="userinfohead">手机号码</div>
          <div>{{myInfo.phone_no}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";

    export default {
        name: "mybalance",
        components: {
            HeadNav,
            IsHeadEmty
        },
        data(){
            return{
              myInfo:''
            }
        },
        methods: {
            getUserInfo() {
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
                        that.myInfo = r.data.userInfo
                    }
                })
            },
        },
        mounted() {
            this.getUserInfo()
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .userinfolist{
    background: #fff;
    border-radius:.6rem .6rem 0px 0px;
    height: calc(100vh - 2.3rem);
    color: #333;
    font-size: .7rem;
    .userinfoitem{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.75rem;
      margin-left: .7rem;
      padding-right: .7rem;
      box-sizing: border-box;
      border-bottom: 1px solid #E6E6E6;
      .userinfohead{

      }
      .userinfohead1{
        img{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
</style>
