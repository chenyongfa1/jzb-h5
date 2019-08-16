<template>
  <div>
    <!--    底部导航栏的空白处-->
    <div class="emty" v-show="$route.meta.isFootEmty==undefined||$route.meta.isFootEmty"></div>
  </div>
</template>
<script>
  export default {
    name: "isfootemty"
  }
</script>

<style scoped>
  .emty{
    height: 50px;
  }
</style>
