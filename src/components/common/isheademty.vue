<template>
    <div>
      <div class="heademty" v-show="$route.meta.isTitle==undefined||$route.meta.isTitle"></div>
    </div>
</template>
<script>
    export default {
        name: "isheademty"
    }
</script>

<style scoped>
  .heademty{
    height: 2.2rem;
  }
</style>
