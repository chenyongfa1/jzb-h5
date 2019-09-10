<template>
  <div class="socialsecuritydetailed">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="socialcount"> 社保費用总计：¥ 8274.6</div>
      <div class="mouthdetatil">
        <h2 class="pd16">每月明细</h2>
        <div class="deletalist">
          <van-collapse title-class="colF97" v-model="activeName" accordion>
            <van-collapse-item title-class="colF97" v-for="(item,index) in gjjMonth" :key="index"
                               value-class="col333"
                               :title=item
                               :value="fundBase"
                               :name="index">
              <div class="detailInfolist">
                <div class="detailInfoItem">
                  <div class="detailTitle col333">险种</div>
                  <div class="detailenterprise col333">企业缴纳(元)</div>
                  <div class="detailpersonal col333">个人缴纳(元)</div>
                </div>
                <div class="detailInfoItem">
                  <div class="detailTitle">{{funddetailArr[0][0].service_name}}</div>
                  <div class="detailenterprise">{{funddetailArr[0][0].company_price}}</div>
                  <div class="detailpersonal">{{funddetailArr[0][0].personal_price}}</div>
                </div>
                <div class="detailInfoItem">
                  <div class="detailTitle">小计</div>
                  <div class="detailenterprise">{{funddetailArr[0].company_subtotal}}</div>
                  <div class="detailpersonal">{{funddetailArr[0].personal_subtotal}}</div>
                </div>
                <div class="detailInfoItem countsoc">
                  <div class="detailTitle">合计：¥ {{funddetailArr[0].total}}</div>
                </div>
              </div>
            </van-collapse-item>
           <!-- <van-collapse-item title-class="colF97" value-class="col333" title="2019-07" value="价钱" name="2">
              <div class="detailInfolist">
                <div class="detailInfoItem">
                  <div class="detailTitle col333">险种</div>
                  <div class="detailenterprise col333">企业缴纳(元)</div>
                  <div class="detailpersonal col333">个人缴纳(元)</div>
                </div>
                <van-divider/>
                <div class="detailInfoItem">
                  <div class="detailTitle">公积金</div>
                  <div class="detailenterprise">224.40</div>
                  <div class="detailpersonal">427.69</div>
                </div>
                <van-divider/>
                <div class="detailInfoItem">
                  <div class="detailTitle">小计</div>
                  <div class="detailenterprise">224.40</div>
                  <div class="detailpersonal">427.69</div>
                </div>
                <van-divider/>
                <div class="detailInfoItem countsoc">
                  <div class="detailTitle">合计：¥ 2061.90</div>
                </div>
              </div>
            </van-collapse-item>
            <van-collapse-item title-class="colF97" value-class="col333" title="2019-07" value="价钱" name="3">
              <div class="detailInfolist">
                <div class="detailInfoItem">
                  <div class="detailTitle col333">险种</div>
                  <div class="detailenterprise col333">企业缴纳(元)</div>
                  <div class="detailpersonal col333">个人缴纳(元)</div>
                </div>
                <van-divider/>
                <div class="detailInfoItem">
                  <div class="detailTitle">公积金</div>
                  <div class="detailenterprise">224.40</div>
                  <div class="detailpersonal">427.69</div>
                </div>
                <van-divider/>
                <div class="detailInfoItem">
                  <div class="detailTitle">小计</div>
                  <div class="detailenterprise">224.40</div>
                  <div class="detailpersonal">427.69</div>
                </div>
                <van-divider/>
                <div class="detailInfoItem countsoc">
                  <div class="detailTitle">合计：¥ 2061.90</div>
                </div>
              </div>
            </van-collapse-item>-->
          </van-collapse>
        </div>
      </div>
      <div class="paybackdetail">
        <h2 class="pd16">补缴费用明细</h2>
        <div class="detaildate  pd16">2019-08 至 2019-09</div>
        <van-divider/>
        <div class="detailInfolist ">
          <div class="detailInfoItem pd16">
            <div class="detailTitle col333">险种</div>
            <div class="detailenterprise col333">企业缴纳(元)</div>
            <div class="detailpersonal col333">个人缴纳(元)</div>
          </div>
          <div class="detailInfoItem pd16">
            <div class="detailTitle">公积金</div>
            <div class="detailenterprise">224.40</div>
            <div class="detailpersonal">427.69</div>
          </div>
          <div class="detailInfoItem pd16">
            <div class="detailTitle">小计</div>
            <div class="detailenterprise">224.40</div>
            <div class="detailpersonal">427.69</div>
          </div>
          <div class="detailInfoItem countsoc pd16">
            <div class="detailTitle">合计：¥ 2061.90</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import HeadNav from "../common/header";
    import IsHeadEmty from "../common/isheademty";

    export default {
        name: "funddetailed",
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
                socialList:{},
                gjjMonth:JSON.parse(window.localStorage.getItem('gjjMonth')),
                funddetailArr:JSON.parse(window.localStorage.getItem('funddetailArr')),
                funddetail:JSON.parse(window.localStorage.getItem('funddetail')),
                fundBase:'',
            }
        },
        methods: {
            isInfoShow(e) {
                console.log(e.target)
            }
        },
        mounted() {
          this.fundBase = `基数 ${ this.funddetail.social}`
        },
        created() {

        }
    }
</script>

<style scoped>
  .content {
    background: #f2f2f2;
  }

  .pd16 {
    padding: 0 .8rem;
  }

  .detaildate {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #F97A2E;
    height: 2.625rem;
    line-height: 2.625rem;
    background: #fff;
  }

  .socialsecuritydetailed .van-divider {
    margin: 0;
  }

  .countsoc {
    height: 2.625rem;
    line-height: 2.625rem;
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
