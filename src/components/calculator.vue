<template>

  <div >
    <HeadNav />
    <div class="content">
      <IsHeadEmty />
<!--      <Calculatorcon />-->
      <Calculatorcons />
      <Isfootemty/>
      <NavFoot />

    </div>
  </div>
</template>

<script>
    import HeadNav from "./common/header";
    import Isfootemty from './common/isfootemty'
    import Calculatorcon from './calculator/calculatorcon'
    import Calculatorcons from './calculator/index'
    import IsHeadEmty from "./common/isheademty";
    import NavFoot from "./common/footer";

    export default {
        name: 'calculator',
        components: {
            HeadNav,
            Calculatorcon,
            Calculatorcons,
            Isfootemty,
            IsHeadEmty,
            NavFoot,
        },
        data() {
            return {
                msg: '计算器',
            }
        }
    }
</script>

<style lang="scss" scoped>
.content{
  background: #f2f2f2;
}
</style>
