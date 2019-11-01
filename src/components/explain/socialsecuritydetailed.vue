<template>
  <div class="socialsecuritydetailed">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="socialcount"> 社保费用总计：¥ {{Number(buCount) + Number(socialCount)}}</div>
      <div class="mouthdetatil">
        <h2 class="pd16">每月明细</h2>
        <div class="deletalist">
          <van-collapse title-class="colF97" v-model="activeName" accordion>
            <van-collapse-item title-class="colF97" v-for="(item,index) in  socialMonth" :key="index" :title="item"
                               :value="socialBase" :name="index">
              <div class="detailInfolist">
                <div class="detailInfoItem">
                  <div class="detailTitle col333">险种</div>
                  <div class="detailenterprise col333">企业缴纳(元)</div>
                  <div class="detailpersonal col333">个人缴纳(元)</div>
                </div>
                <div class="detailInfoItem" v-for="(item , index1) in fiveSocialArr" :key="index1">
                  <div class="detailTitle">{{socialdetailArr[index][index1].service_name}}</div>
                  <div class="detailenterprise">{{socialdetailArr[index][index1].company}}</div>
                  <div class="detailpersonal">{{socialdetailArr[index][index1].personal}}</div>
                </div>
                <div class="detailInfoItem">
                  <div class="detailTitle">小计</div>
                  <div class="detailenterprise">{{socialdetailArr[index].company_subtotal}}</div>
                  <div class="detailpersonal">{{socialdetailArr[index].personal_subtotal}}</div>
                </div>
                <van-divider/>
                <div class="countsoc">
                  <div class="detailTitle">合计：¥ {{socialdetailArr[index].total}}
                  </div>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
      <div class="paybackdetail">
        <h2 class="pd16">补缴费用明细</h2>
        <div class="detaildate  pd16">{{buSocialMonth[0]}} 至{{buSocialMonth[buSocialMonth.length-1]}}</div>
        <div class="detailInfolist ">
          <div class="detailInfoItem pd16">
            <div class="detailTitle col333">险种</div>
            <div class="detailenterprise col333">企业缴纳(元)</div>
            <div class="detailpersonal col333">个人缴纳(元)</div>
          </div>
          <div class="detailInfoItem pd16">
            <div class="detailTitle">社保</div>
            <div class="detailenterprise">{{buCompanySubtotals}}</div>
            <div class="detailpersonal">{{buPersonalSubtotal}}</div>
          </div>
          <div class="detailInfoItem pd16">
            <div class="detailTitle">小计</div>
            <div class="detailenterprise">{{buCompanySubtotals}}</div>
            <div class="detailpersonal">{{buPersonalSubtotal}}</div>
          </div>
          <div class="detailInfoItem countsoc pd16">
            <div class="detailTitle">合计：¥ {{buCount}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "../common/header";
    import IsHeadEmty from "../common/isheademty";
    import {mapState} from "vuex"

    export default {
        name: "socialsecuritydetailed",
        components: {
            HeadNav,
            IsHeadEmty,

        },
        data() {
            return {
                activeName: '0',
                monthVal: '',
                infoList: true,
                detailShow: false,
                money: '',
                socialMonth: JSON.parse(window.localStorage.getItem('shebaoMonth')),
                socialdetailArr: JSON.parse(window.localStorage.getItem('socialdetailArr')),
                fiveSocialArr: [],
                socialdetail: JSON.parse(window.localStorage.getItem('socialdetail')),
                socialBase: '',
                fiveSocialArr1: [],
                id: this.$route.query.id,
                busocialdetail: JSON.parse(window.localStorage.getItem('busocialdetail')) || ' ',
                busocialdetailArr: JSON.parse(window.localStorage.getItem('busocialdetailArr')) || ' ',
                buSocialMonth: JSON.parse(window.localStorage.getItem('bushebaoMonth')) || ' ',
                buPersonalSubtotal: 0,
                buCompanySubtotals: 0,
                buCount:0,
                socialCount:0,
            }
        },
        computed: mapState({
            isPayBackPrice1: (state) => state.isPayBackPrice1,
        }),
        methods: {
            isInfoShow(e) {
            }
        },
        mounted() {
            this.fiveSocialArr = this.socialdetail.key_array
            this.socialBase = `基数 ${this.socialdetail.social}`
            this.socialCount = this.socialdetail.total
            if (this.id == 1) {
                $('.paybackdetail').css({
                    display:'none',
                })
            } else {

                this.buPersonalSubtotal = (Number(this.busocialdetailArr[0].personal_subtotal) * Number(this.busocialdetailArr.length)).toFixed(2)
                this.buCompanySubtotals = (Number(this.busocialdetailArr[0].company_subtotal) *
                    Number(this.busocialdetailArr.length)).toFixed(2)
                this.buCount = this.busocialdetail.total
            }
        },
    }
</script>

<style scoped>
  .content {
    background: #f2f2f2;
  }

  .pd16 {
    padding: 0 .8rem;
  }

  .socialsecuritydetailed .van-divider {
    margin: 0;
  }

  .countsoc {
    height: 2.625rem;
    line-height: 2.625rem;
  }
  .detaildate {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #F97A2E;
    height: 2.625rem;
    line-height: 2.625rem;
    background: #fff;
    border-bottom: 1px solid #E6E6E6;
  }
  .countsoc .detailTitle {
    font-size: .7rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #F25454;
  }

  .socialcount {
    height: 3.95rem;
    line-height: 3.95rem;
    background: #F97A2E;
    font-size: .9rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #fff;
  }

  .mouthdetatil h2 {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    height: 2.2rem;
    line-height: 2.2rem;
  }

  .paybackdetail h2 {
    height: 1.85rem;
    line-height: 1.85rem;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
  }

  .van-collapse-item {
    background-color: #fff;
    margin-top: .25rem;
  }

  .mouthdetatilitem .mouthdetatilitemright {
    display: flex;
    align-items: center;
  }

  .mouthdetatilitem .mouthdetatilitemright p {
    vertical-align: middle;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333333;
  }

  .mouthdetatilitem .mouthdetatilitemright p:nth-child(2) {
    padding: 0 .5rem;
    color: #666;
  }

  .mouthdetatilitem .mouthdetatilitemright img {
    display: inline-block;
    width: .55rem;
    height: .325rem;
    vertical-align: middle;
  }

  .detailTitle {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }

  .detailInfolist .detailInfoItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.3rem;
    background: #fff;
    border-bottom: 1px solid #E6E6E6;
  }

  .detailInfolist .detailInfoItem > div {
    width: calc(100% / 3);
  }

  .detailInfolist .detailInfoItem .detailenterprise {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #666;
    text-align: right;
  }

  .detailInfolist .detailInfoItem .detailpersonal {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #666;
    text-align: right;
  }

  .detailInfolist .detailInfoItem .col333 {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333;
  }
</style>
