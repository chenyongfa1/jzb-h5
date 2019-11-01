<template>
  <div class="applicationinvoice">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="applicationinvoicelist">
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            抬头类型
          </div>
          <div class="applicationinvoiceright applicationradio">
            <van-radio-group v-model="riseRadio">
              <van-radio name="1" @click="bankShow">
                <span>企业单位</span>
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                />
              </van-radio>
              <van-radio name="2" @click="bankShow">
                <span>个人</span>
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                />
              </van-radio>
            </van-radio-group>
          </div>
        </div>
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            发票抬头
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="invoicePayable" placeholder="请填写发票抬头" />
          </div>
        </div>
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            发票类型
          </div>
          <div class="applicationinvoiceright applicationradio">
            <van-radio-group v-model="riseRadio1">
              <van-radio name="1">
                <span>社保代理</span>
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                />
              </van-radio>
              <van-radio name="2">
                <span>公积金代理</span>
                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? icon.active : icon.inactive"
                />
              </van-radio>
            </van-radio-group>
          </div>
        </div>
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            手机号码
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="invoicePhone" placeholder="请填写手机号码" />
          </div>
        </div>
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            电子邮箱
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="invoiceYx" placeholder="请填写邮箱地址" />
          </div>
        </div>

        <div v-if="bankInfoShow" class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            纳税人识别号
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="identificationNumbe" placeholder="请填写纳税人识别号" />
          </div>
        </div>
        <div v-if="bankInfoShow" class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            开户银行
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="bankOfDeposit" placeholder="请填写开户银行" />
          </div>
        </div>
        <div v-if="bankInfoShow" class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            银行账号
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="bankAccount" placeholder="请填写银行账号" />
          </div>
        </div>

        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            地址
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="invoiceadd" placeholder="请填写地址" />
          </div>
        </div>
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            备注
          </div>
          <div class="applicationinvoiceright">
            <van-field v-model="remarks" placeholder="" />
          </div>
        </div>
        <div class="applicationinvoiceitem pd16">
          <div class="applicationinvoiceleft">
            总金额
          </div>
          <div class="applicationinvoiceright">
           <span class="colf25">¥ 2345.00</span>
          </div>
        </div>
      </div>
      <div class="sumbitbtn" @click="sumBit">
        提交
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";

    export default {
        name: "applicationinvoice",
        components: {
            HeadNav,
            IsHeadEmty
        },
        data() {
            return {
                riseRadio: "1",//抬头类型
                riseRadio1: "1",//发票类型
                icon: {
                    active: "static/images/socialsecurity/checked.png",
                    inactive: "static/images/coverage/unselect.png"
                },
                remarks:'',//备注
                invoicePayable:'',//发票抬头
                invoicePhone:'',//手机号码
                invoiceYx:'',//电子邮箱
                invoiceadd:'',//地址
                bankOfDeposit:'',//开户银行
                identificationNumbe:'',//纳税人识别号
                bankAccount:'',//银行账号
                bankInfoShow:true,
            }
        },
        methods:{
            bankShow(){
                if(this.riseRadio1 == 1){
                    this.bankInfoShow = true
                }else {
                    this.bankInfoShow = false
                }
            },
          sumBit(){
          }
        }
    }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .sumbitbtn{
    width: 100%;
    height:2.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F97A2E;
    font-size: .9rem;
    color: #fff;
    position: fixed;
    bottom: 0;
  }
  .applicationinvoiceright {
    img {
      width: .65rem;
      height: .65rem;
    }
  }
  .applicationinvoicelist{
    height: calc(100vh - 2.3rem);
    overflow: auto;
    border-radius: .6rem .6rem 0 0;
    background: #fff;

    .applicationinvoiceitem{
      display: flex;
      align-items: center;
      height: 2.2rem;
      color: #666;
      font-size: .7rem;
      border-bottom: 1px solid #e6e6e6;
      .applicationinvoiceleft{
        width: 30%;
      }
      .applicationradio{
        .van-radio-group{
          display: flex;
        }
      }
      .applicationinvoiceright{
        width: 70%;
        .van-cell{
          padding-left: 0;
        }
        .van-radio-group{
          display: flex;
          /*justify-content: space-around;*/
          .van-radio:last-child{
            padding-left: 1rem;
          }
        }
      }

    }
    .applicationinvoiceitem:first-child{
      color: #333;
    }
  }
  .colf25{
    color: #F25454;
  }
</style>
