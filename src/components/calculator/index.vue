<template>
    <div class="calculators">
      <div class="calculator mg16">
        <router-link class="calculatoritem pd16" to="/socialdetails">
          <div class="calculatorleft">
            <img src="../../../static/images/calculator/calculator1.png" alt="">
            <span>社保计算器</span>
          </div>
          <div class="calculatorright">
            <img src="../../../static/images/calculator/rightjiantou.png" alt="">
          </div>
        </router-link>
        <div class="calculatorline"></div>
        <router-link class="calculatoritem pd16" to="/funddetails">
          <div class="calculatorleft">
            <img src="../../../static/images/calculator/calculator2.png" alt="">
            <span>公积金计算器</span>
          </div>
          <div class="calculatorright">
            <img src="../../../static/images/calculator/rightjiantou.png" alt="">
          </div>
        </router-link>
        <div class="calculatorline"></div>
        <!--<router-link class="calculatoritem pd16" to="/">
          <div class="calculatorleft">
            <img src="../../../static/images/calculator/calculator3.png" alt="">
            <span>养老计算器</span>
          </div>
          <div class="calculatorright">
            <img src="../../../static/images/calculator/rightjiantou.png" alt="">
          </div>
        </router-link>-->
      </div>
<!--      <footlogo />-->
    </div>
</template>

<script>
    import footlogo from "../common/footlogo";
    export default {
        name: "calculators",
        components:{
            footlogo
        }
    }
</script>

<style lang="scss" scoped>
.calculator{
  margin-bottom: 5rem;
  .calculatoritem{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    height: 3rem;
    .calculatorleft{
      display: flex;
      align-items: center;
      img{
        width: .95rem;
        height: .95rem;
      }
      span{
        font-size: .7rem;
        color: #333;
        padding-left: .6rem;
      }
    }
    .calculatorright{
      img{
        width: .4rem;
        height: .625rem;
      }
    }
  }
}
  .calculatorline{
    border-bottom: 1px solid #e6e6e6;
  }
</style>
