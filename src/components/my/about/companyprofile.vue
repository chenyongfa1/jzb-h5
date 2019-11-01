<template>
  <div class="aboutus">
    <div class="back1">
      <van-icon name="arrow-left" @click="goupFn" />
      <div class="contenttitle"></div>
    </div>
    <div class="content">
      <div class="aboutbg"></div>
      <div class="imgbox">
        <img src="../../../../static/images/my/about/logoabout.png" alt="logo">
      </div>
      <div class="aboutcon">
        <p>桔子保，专为个体和中小企业从事社保公积金方面的代理服务。桔子保平台的服务内容包括社保开户，社保缴纳补缴，社保查询申领，待遇申领，费用报销，社保转移咨询等全方位服务。</p>
        <p>桔子保服务涵盖金融、生产、快消、服务、通讯、互 联网等多个领域，服务于1500+ 中小企业，10W+ 个体用户，服务人数超过20W+ 人次。是国内领先的互 联网线上自助参保平台。</p>
        <p>我们通过人社部认证许可，拥有完善的资金监管体系并获得全面的相关资质，采用了现代领先的SaaS模 式+云计算加密技术，有力地保障了用户的信息安全， 基于在线平台的便捷操作，满足个体在线自助缴纳社 保的服务需求。
        </p>
      </div>
      <div class="line"></div>
      <div class="addrenabout">
        <p>网址：www.jzbshebao.com</p>
        <p>总机：400-000-8850</p>
        <p>电话：0755-82766276</p>
        <p>邮箱：juzibao@shangqi.club</p>
        <p>地址：深圳市福田区泰然七路25号苍松大厦908C</p>
      </div>
      <Isfootemty />
    </div>

  </div>
</template>

<script>
    import Isfootemty from "@/components/common/isfootemty";
    export default {
        name: "companyprofile",
        components:{
            Isfootemty
        },
        data() {
            return {

            }
        },
        methods: {
            goupFn(){
                this.$router.go(-1)
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .aboutus{
    .back1{
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      z-index: 22;
      position: fixed;
      font-size: 1rem;
    }
    .van-icon{
      position: absolute;
      top: 1.4rem;
      left: 0.75rem;
    }
    .aboutbg{
      background: url("../../../../static/images/my/about/aboutus001.png");
      background-size: 100% 100%;
      height: 11.25rem;
    }
    .contenttitle{
      position: absolute;
      top: 1.3rem;
      left: 50%;
      margin-left: -1.8rem;
      font-size: 0.9rem;
    }
    .imgbox{
      width: 6.375rem;
      height: 6.375rem;
      position: absolute;
      top: 6.225rem;
      left: calc(50% - 3.185rem);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .aboutcon{
      margin-top: 1rem;
      padding: 0 1.325rem;
      font-size: .7rem;
      color: #333;
      p{
        padding-top: .6rem;
      }
      p:nth-child(1){
        padding-top: 0;
      }
    }
    .line{
      border-bottom: 1px dotted #333;
      margin: 0 1.325rem;
      padding:.3rem 0;
    }
    .addrenabout{
      margin: 0 1.325rem;
      padding-top: .3rem;
      font-size: .7rem;
      color: #666;
    }
  }

</style>
