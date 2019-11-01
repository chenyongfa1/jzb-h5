<template>
    <div class="helpandfeedback">
      <HeadNav />
     <div class="content">
       <IsHeadEmty />
       <van-cell-group>
         <van-field
           v-model="message"
           type="textarea"
           placeholder="欢迎提出宝贵意见或建议。我们将根据您的需求，不断完善。非常感谢您对桔子保的信任和支持。"
           :autosize="autosize"
         />
       </van-cell-group>
       <div class="sumbitbtn" @click="sumbitmess">
         <img src="../../../../static/images/my/sumbitbtn.png" alt="">
       </div>
     </div>
    </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    export default {
        name: "helpandfeedback",
        components:{
            HeadNav,
            IsHeadEmty
        },
        data(){
            return{
                message:'',
                autosize: { maxHeight: 200, minHeight: 200 }
            }
        },
        methods:{
            sumbitmess(){
                let data = this.common.getsign()
                let that = this
                let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
                $.ajax({
                    url: this.HOST + '/app/index/userfeedback',
                    type: "POST",
                    data: {
                        sign: data.sign,
                        time: data.time,
                        user_contact: userInfo.phone_no,
                        remark:this.message
                    },
                    dataType: "JSON",
                    success: function (r) {
                        if(r.status == 200){
                            that.$toast({
                                message: '提交成功'
                            })
                        }else {
                            that.$toast({
                                message: r.message
                            })
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .sumbitbtn{
    padding:3.45rem 2.5rem 0;
    img{
      width: 100%;
      height: 2.5rem;
    }
  }
</style>
