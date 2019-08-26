<template>
  <div class="content">
    <div>
      <i class="el-icon-delete"></i>
      <Isfootemty />
    </div>
  </div>
</template>

<script>
  import HeadNav from "./common/header";
  import Isfootemty from './common/isfootemty'
export default {
  name: 'calculator',
  components: {
    HeadNav,
    Isfootemty
  },
  data () {
    return {
      msg: '计算器'
    }
  }
}
</script>

<style scoped>

</style>
