<template>
    <div>
      <div>
      </div>
    </div>
</template>

<script>
  import componentsA from './a'
  import componentsB from './b'
  import {mapState} from "vuex"
    export default {
        components:{
          componentsA,
          componentsB
        },
        name: "index",
        data(){
            return {
                // num:this.$store.state.nodeVoteCount
            }
        },
    }
</script>

<style scoped>

</style>
