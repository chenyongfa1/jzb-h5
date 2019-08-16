<template>
    <div class="payoff mg16">
      <router-link :to="{name:'payback'}" class="participants">
        <div class="participantsLeft">
             <span class="parLftemty">
                <img src="../../../static/images/socialsecurity/payback.png" alt="">
            </span>
          <span>社保断缴，想补缴？</span>
        </div>
        <div class="participantsRight">
          <span>立即查看</span>
          <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "payoff"
    }
</script>

<style scoped>
  .payoff{
    width: calc(100% - 1.6rem);
    height: 2.95rem;
    background: #fff;
    margin-top: .75rem;
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius:.3rem;
  }

  .participants{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.65rem;
    padding:0 .8rem;

  }
  .parLftemty{
    display: inline-block;
    width: 1.7rem;
  }
  .participants .participantsLeft img{
    width:.875rem;
    height: .875rem;
    vertical-align: middle;
  }
  .participants .participantsLeft span{
    width:1.05rem;
    height: 1rem;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    vertical-align: middle;
  }
  .participants .participantsRight img{
    width:.375rem;
    height: .65rem;
    vertical-align: middle;
  }
  .participants .participantsRight span{
    width:1.05rem;
    height: 1rem;
    font-size:.6rem;
    font-family:PingFangSC-Regular;
    color: #999999;
    vertical-align: middle;
  }

</style>
