<template>
    <div class="auto">
      我是auto页面
    </div>
</template>

<script>
    export default {
        name: "auto",
      created() {
          alert(1)
        if (this.$route.query.code) {//如果连接中能拿到code说明此时access_token没有或者已过期，需要重新获取token
          let obj = {};
          var url =
            `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx37f1f33e98ab4327&secret=Smiling:
140fe5eb5073c032b4a421775d6310f2
&code=${this.$route.query.code}&grant_type=authorization_code`;
          this.$ajax.get(url).then(res => {
            if (res.data.retCode == 200) {
              //因为浏览器刷新vuex的值就初始化了，所以需要存到浏览器中
              sessionStorage.setItem('wechataccess_token', res.data.data.access_token);
              sessionStorage.setItem('wechatuser_userName', res.data.data.userName);
              sessionStorage.setItem('wechatuser_id', res.data.data.user_id);
              let url = sessionStorage.getItem("beforeUrl");
              alert(res)
              alert(url)
              alert(res.data.data.access_token)
              alert(res.data.data.userName)
              //跳转
              this.$router.push(url);
            } else {
              this.Toast(res.data.message);
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
