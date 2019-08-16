<template>
    <div class="immPay">
      <div class="joinPayBot">
        <div class="joinPayCon">
          <span>¥ 3518.25</span>
          <span>（不含服务费）</span>
        </div>
        <div class="immediatelypay">立即参保</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "immpay"
    }
</script>

<style scoped>
    .immPay{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;

    }
    .joinPayBot{
      display: flex;
    }
    .joinPayBot .joinPayCon{
      width: 60%;
      background: #F2F2F2;
      text-align: center;
    }
    .joinPayBot .joinPayCon span:nth-child(1){
       font-size:.7rem;
       font-family:PingFangSC-Medium;
       font-weight:500;
       color: #F25454;
     }
    .joinPayBot .joinPayCon span:nth-child(2){
      font-size:.6rem;
      font-family:PingFangSC-Regular;
      color: #B2B2B2;
    }
    .joinPayBot .immediatelypay{
      width: 40%;
      background: #F97A2E;
      text-align: center;
      font-size:.9rem;
      font-family:PingFangSC-Regular;
      color: #fff;
    }

</style>
