<template>
    <div>
      <HeadNav />
      <div class="content ">
        <IsHeadEmty />
        <Pay />
        <Resultscon />
      </div>
    </div>
</template>

<script>
    import Pay from '@/components/computationalresults/pay'
    import Resultscon from '@/components/computationalresults/resultscon'
    import HeadNav from "@/components/common/header";
    import IsHeadEmty from "@/components/common/isheademty";
    export default {
        name: "computationalresults",
        components:{
            HeadNav,
            IsHeadEmty,
            Pay,
            Resultscon,
        }
    }
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    top: 2.2rem;
    left: 0;
    overflow: auto;
    width: 100%;
    height: calc(100% - 2.2rem);
    background: #fff;
    -webkit-overflow-scrolling: touch;
  }
</style>
