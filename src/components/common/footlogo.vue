<template>
    <div class="footlogo">
      <img class="img1" src="../../../static/images/common/footlogo1.png" alt="">
      <img class="img2" src="../../../static/images/common/footlogo2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "footlogo"
    }
</script>

<style lang="scss" scoped>
  .footlogo{
    display: flex;
    flex-direction: column;
    height: 2.25rem;
    justify-content:space-around ;
    align-items: center;
    .img1{
      width: 6.75rem;
      height: .75rem;
    }
    .img2{
      width: 5.75rem;
      height: .5rem;
    }
  }
</style>
