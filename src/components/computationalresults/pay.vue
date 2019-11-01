<template>
    <div class="pay">
      <div class="pay-title">计算结果</div>
      <div class="pay-des">Computational results</div>
      <div class="pay-colfff"></div>
    </div>
</template>

<script>
    export default {
        name: "pay"
    }
</script>

<style lang="scss" scoped>
  .pay{
    background: url("../../../static/images/calculator/headimg.png");
    background-size: 100% 100%;
    text-align: center;
    color: #fff;
    width: 100vw;
    height: 9rem;
    .pay-title{
      padding-top: 1.3rem;
      font-size:1.7rem;
      font-family:STHeiti;
    }
    .pay-des{
      padding-top: .4rem;
      font-size:.8rem;
    }
    .pay-colfff {
      width:2.65rem;
      height:.3rem;
      background:rgba(255,255,255,1);
      border-radius:.15rem;
      margin: 0 auto;
      margin-top: .6rem;
    }

  }
</style>
