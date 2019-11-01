<template>
    <div class="addedservice">
      <HeadNav />
      <div class="content">
        <IsHeadEmty />
        <div class="socialsecuritytitle">社保增值服务</div>
        <div class="socialsecuritylist mg16">
          <van-grid :column-num="3" >
            <van-grid-item
              v-for="(item,index) in socialsecurity"
              :key="index"
              :icon="item.img_url"
              :text="item.name"
              @click="toKefu(item.id)"
            />
          </van-grid>
        </div>
        <div class="providentfundtitle">公积金增值服务</div>
        <div class="providentfundlist mg16">
          <van-grid :column-num="3">
            <van-grid-item
              v-for="(item,index) in providentfund"
              :key="index"
              :icon="item.img_url"
              :text="item.name"
              @click="toKefu(item.id)"
            />
          </van-grid>
        </div>
        <div class="othervalueaddedtitle">其他增值服务</div>
        <div class="othervalueaddedlist mg16">
          <van-grid :column-num="3">
            <van-grid-item
              v-for="(item,index) in  othervalueadded"
              :key="index"
              :icon="item.img_url"
              :text="item.name"
              @click="toKefu(item.id)"
            />
          </van-grid>
        </div>
        <van-popup v-model="kefuShow" round :style="{width:'80%'}">
          <div class="kefubox">
            <div class="kefuboxtitle">如需办理增值服务，请联系客服</div>
            <div class="kefubox1">
              <div @click="getKefu"><span>在线客服</span></div>
              <div><a href="tel:400-000-8850">客服热线</a> </div>
            </div>
          </div>
        </van-popup>
        <FootLogo />
      </div>

    </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    import FootLogo from "@/components/common/footlogo";
    export default {
        name: "addedservice",
        components: {
            HeadNav,
            IsHeadEmty,
            FootLogo
        },
        data(){
            return{
                socialsecurity:[
                    {
                        name:'社保转移',
                        img_url:'static/images/my/addedservice/socialsecurity1.png',
                        id:1,
                    },
                    {
                        name:'社保制卡',
                        img_url:'static/images/my/addedservice/socialsecurity2.png',
                        id:2,
                    },
                    {
                        name:'退休业务办理',
                        img_url:'static/images/my/addedservice/socialsecurity3.png',
                        id:3,
                    },
                    {
                        name:'失业金申领',
                        img_url:'static/images/my/addedservice/socialsecurity4.png',
                        id:4,
                    }
                ],
                providentfund: [
                    {
                        name:'公积金转移',
                        img_url:'static/images/my/addedservice/providentfund1.png',
                        id:1,
                    },
                    {
                        name:'公积金制卡',
                        img_url:'static/images/my/addedservice/providentfund2.png',
                        id:2,
                    },
                    {
                        name:'公积金提取',
                        img_url:'static/images/my/addedservice/providentfund3.png',
                        id:3,
                    },
                    {
                        name:'公积金贷款',
                        img_url:'static/images/my/addedservice/providentfund4.png',
                        id:4,
                    },
                    {
                        name:'住房补贴',
                        img_url:'static/images/my/addedservice/providentfund5.png',
                        id:5,
                    }
                ],
                othervalueadded: [
                    {
                        name:'劳动合同签订',
                        img_url:'static/images/my/addedservice/othervalueadded1.png',
                        id:1,
                    },
                    {
                        name:'收入证明',
                        img_url:'static/images/my/addedservice/othervalueadded2.png',
                        id:2,
                    },
                    {
                        name:'工作证明',
                        img_url:'static/images/my/addedservice/othervalueadded3.png',
                        id:3,
                    },
                    {
                        name:'职业资格评定',
                        img_url:'static/images/my/addedservice/othervalueadded4.png',
                        id:4,
                    },
                    {
                        name:'陪同',
                        img_url:'static/images/my/addedservice/othervalueadded5.png',
                        id:5,
                    },
                    {
                        name:'落户办理',
                        img_url:'static/images/my/addedservice/othervalueadded6.png',
                        id:6,
                    }
                ],
                kefuShow:false
            }
        },
        methods:{
            getKefu(){
                window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=13796223&userId=27414030&cp=&cr=&cw=%E5%AE%98%E7%BD%91PC'
            },
            toKefu(id){
              this.kefuShow = true
            },
        }
    }
</script>

<style lang="scss" scoped>
.content{
  background: #f2f2f2;
}
.providentfundtitle{
  font-size:.8rem;
  color: #333;
  padding-left: 1.2rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
}
  .providentfundlist{
    border-radius:.6rem;
    overflow: hidden;
    background: #fff;

  }
.socialsecuritytitle{
  font-size:.8rem;
  color: #333;
  padding-left: 1.2rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.socialsecuritylist{
  border-radius:.6rem;
  overflow: hidden;
  background: #fff;
}
.othervalueaddedtitle{
  font-size:.8rem;
  color: #333;
  padding-left: 1.2rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.othervalueaddedlist{
  border-radius:.6rem;
  overflow: hidden;
  background: #fff;
}
.kefubox{
  border-radius:.6rem;
  .kefuboxtitle{
    font-size:.775rem;
    color: #333333;
    height: 4.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:PingFang SC;
  }
  .kefubox1{
    display: flex;
    justify-content: space-between;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 2.9rem;
      border-top:1px solid #E6E6E6;
      font-size: .7rem;

      a{
        font-family:PingFang SC;
        display: inline-block;
        padding:.2rem .4rem;
        border-radius: .3rem;
        background: #eee;
        color: #F97A2E;
      }
      span{
        display: inline-block;
        padding:.2rem .4rem;
        border-radius: .3rem;
        background: #F97A2E;
        color: #fff;
      }
    }
    div:nth-child(1){
      color: #333;
      /*border-right:1px solid #E6E6E6;*/

    }
    div:nth-child(2){

      font-family:PingFang SC;
    }
  }
}
</style>

