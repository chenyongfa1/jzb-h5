<template>
    <div>
      <components-a></components-a>
      <components-b></components-b>
    </div>
</template>

<script>
  import componentsA from './a'
  import componentsB from './b'
    export default {
        components:{
          componentsA,
          componentsB
        },
        name: "index",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
