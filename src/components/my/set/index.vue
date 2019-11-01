<template>
  <div class="set">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="setlist ">
        <router-link to="/changepassword" class="setItem pd16" @click="toast">
          <div class="leftcon">
            账号安全
          </div>
          <div class="rightcon">
            <van-icon name="arrow"/>
          </div>
        </router-link>
        <div class="setline"></div>
        <div class="setItem pd16" @click="toast">
          <div class="leftcon">
            新消息通知
          </div>
          <div class="rightcon">
            <van-icon name="arrow"/>
          </div>
        </div>
        <div class="bgf2"></div>
        <!--<div class="setItem pd16" @click="toast">
          <div class="leftcon">
            关于桔子保
          </div>
          <div class="rightcon">
            <van-icon name="arrow"/>
          </div>
        </div>-->
        <div class="setline"></div>
        <router-link to="/helpandfeedback" class="setItem pd16" @click="toast">
          <div class="leftcon">
            帮助与反馈
          </div>
          <div class="rightcon">
            <van-icon name="arrow"/>
          </div>
        </router-link>
        <div class="bgf2"></div>
      </div>
      <div class="outlogin" @click="outLong">退出登陆</div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";

    export default {
        name: "index",
        components: {
            HeadNav,
            IsHeadEmty
        },
        methods: {
            outLong() {
                // window.localStorage.removeItem('userInfo')
                window.localStorage.clear()
                this.$router.push({
                    name: 'index'
                })
            },
            toast() {
                this.$toast({
                    message: '即将上线，敬请期待',
                    duration: Number(1500)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .content {
    background: #f2f2f2 !important;
  }

  .setlist {
    background: #fff;

    .setItem {
      display: flex;
      justify-content: space-between;
      height: 2.75rem;
      line-height: 2.75rem;
      font-size: .8rem;
      color: #333;
    }

    .setline {
      margin-left: .7rem;
      height: 1px;
      width: calc(100% - .7rem);
      background: #E6E6E6;
    }

    .bgf2 {
      width: 100%;
      height: .25rem;
      background: #f2f2f2;
    }
  }

  .outlogin {
    height: 2.75rem;
    line-height: 2.75rem;
    background: #fff;
    color: #333;
    font-size: .8rem;
    text-align: center;
  }
</style>
