<template>
    <div class="resultscon">
      <div class=" mg18">
        <div class="resultsconitem">
          <div class="lefttitle">缴纳项目</div>
          <div class="rightcon">
            <p v-for="(item,index) in calc.service" :key="index">{{item}}</p>
          </div>
        </div>
        <div class="resultsconitem">
          <div class="lefttitle">缴纳城市</div>
          <div class="rightcon">
            <div>{{calc.city_name}}</div>
          </div>
        </div>
      </div>
      <div class="countmoney mg18">
        <div class="countmoney-title">您共需缴纳金额</div>
        <div class="moneynum">{{calc.sum}}元</div>
        <div class="paytype">
          <div class="individual">
            <p>个人缴纳</p>
            <p>{{calc.personal}}元</p>
          </div>
          <div class="company">
            <p>公司缴纳</p>
            <p>{{calc.company}}元</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "resultscon",
        data(){
          return{
              calc:''
          }
        },
        components:{
        },
        methods:{
            getCalc(){
                this.calc = JSON.parse(window.localStorage.getItem('ydcalc'))
            }
        },
        mounted() {
            this.getCalc()
        }

    }
</script>

<style lang="scss" scoped>
  .mg18{
    margin: 0 .9rem;
  }
  .resultsconitem:nth-child(1){
    border-bottom: 1px solid #E5E5E5;
  }
  .resultsconitem{
    display: flex;
    justify-content: space-between;
    width: 100%;
   /* height: 2rem;
    line-height: 2rem;*/
    padding: .5rem 0;
    .lefttitle{
      font-size:.8rem;
      font-weight:bold;
      color:rgba(64,64,64,1);
    }
    .rightcon{
      display: flex;
      font-size:.75rem;
      color:rgba(102,102,102,1);
      p{
        padding:0 .25rem;
      }
      p:last-child{
        padding-right: 0;
      }
      p:nth-child(2){
        border-left: 1px solid #E5E5E5;
      }
    }
  }
  .countmoney{
    .countmoney-title{
      font-size:.8rem;
      font-weight:bold;
      color:rgba(64,64,64,1);
      padding-top: 1.3rem;
    }
    .moneynum{
      font-size:1.6rem;
      font-weight:bold;
      color:rgba(231,132,70,1);
      height: 4.8rem;
      line-height: 4.8rem;
      text-align: center;
    }
    .paytype{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .individual{
        text-align: center;
        p:nth-child(1){
          color: #404040;
          font-size: .75rem;
        }
        p:nth-child(2){
          color: #E78346;
        }
      }
      .company{
        text-align: center;
        p:nth-child(1){
          color: #404040;
          font-size: .75rem;
        }
        p:nth-child(2){
          color: #E78346;
        }
      }
    }
    padding-bottom: 1.75rem;
  }
</style>
