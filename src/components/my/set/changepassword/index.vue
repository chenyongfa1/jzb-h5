<template>
  <div class="set">
    <HeadNav />
    <div class="content">
      <IsHeadEmty />
      <div class="setlist ">
        <!--<div class="setItem pd16" @click="toast" >
          <div class="leftcon">
            <span>手机号码绑定</span>
            <span></span>
          </div>
          <div class="rightcon">
            <span>更换手机号</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="setline"></div>-->
        <div class="setItem pd16" >
          <div class="leftcon">
            <span>邮箱绑定</span>
<!--            <span id="yx" >请输入邮箱</span>-->
            <input id="yx" type="text" placeholder="请输入邮箱">
          </div>
          <div class="rightcon" >
            <span class="bgyx" @click="setUntying" v-if="untying">绑定</span>
            <span class="bgyx" @click="untying1" v-else>解绑</span>
          </div>
        </div>
        <div class="setline"></div>
        <router-link to="/changepassword1" class="setItem pd16" >
          <div class="leftcon">
            <span>修改密码</span>
          </div>
          <div class="rightcon">
            <span>修改密码</span>
            <van-icon name="arrow" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    export default {
        name: "changepassword",
        components:{
            HeadNav,
            IsHeadEmty
        },
        data(){
            return{
                untying:true,
                userId:JSON.parse(window.localStorage.getItem('userInfo')).id,
            }
        },
        methods:{
            toast(){
                this.$toast({
                    message:'即将上线，敬请期待',
                    duration:Number(1500)
                })
            },
            setUntying(){
                let yx = $('#yx').val();
                let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
                if(reg.test(yx)){
                    let that = this
                    $.ajax({
                        url: this.HOST + '/app/user/bingElement',
                        type: 'POST',
                        data: {
                            email:yx,
                            user_id:this.userId
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if(r.status == 200){
                                that.$toast({
                                    message: '邮箱绑定成功',
                                })
                                that.untying = false
                            }else {
                                that.$toast({
                                    message: r.message,
                                })
                            }
                        }
                    })
                }else{
                    this.$toast({
                        message: '邮箱格式不正确'
                    })
                }
            },
            getUserCenter(){
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
                        $('#yx').val(r.data.userInfo.email)
                        if( r.data.userInfo.email !== ""){
                            that.untying = false
                        }
                    }
                })
            },
            // 解绑
            untying1(){
                let data = this.common.getsign()
                let that = this
                let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
                $.ajax({
                    url: this.HOST + '/app/user/unbingElement',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        user_id: userInfo.id,
                        element:'email'
            },
                    dataType: "JSON",
                    success: function (r) {
                        /*$('#yx').val(r.data.userInfo.email)
                        if( r.data.userInfo.email !== ""){
                            that.untying = false
                        }*/

                        if(r.status == 200){
                            that.$toast({
                                message: '邮箱解绑成功',
                            })
                            that.untying = true
                            $('#yx').val('')
                        }else {
                            that.$toast({
                                message: r.message,
                            })
                        }
                    }
                })
            }
        },
        mounted(){
            this.getUserCenter()
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2 !important;
  }
  .setlist{
    background: #fff;
    .setItem{
      display: flex;
      justify-content: space-between;
      height: 2.75rem;
      line-height: 2.75rem;
      font-size: .7rem;
      color: #333;
      .leftcon{
        span:nth-child(1){
          color: #666;
          padding-left: .3rem;
        }
        span:nth-child(2){
          color: #666;
          padding-left: .3rem;
        }
        #yx{
          padding-left: 1.6rem !important;
          outline: none;
          border: 0;
        }

      }
      .rightcon{
        display: flex;
        align-items: center;
        span{
          font-size: .7rem;
          color: #666;
        }
        .bgyx{
          color: #F97A2E;
        }
      }
    }
    .setline{
      /*margin-left: .7rem;*/
      height: 1px;
      width: calc(100%);
      background: #E6E6E6;
    }
    .bgf2{
      width: 100%;
      height: .25rem;
      background: #f2f2f2;
    }
  }
  .outlogin{
    height: 2.75rem;
    line-height: 2.75rem;
    background: #fff;
    color: #333;
    font-size: .8rem;
    text-align: center;
  }
</style>
