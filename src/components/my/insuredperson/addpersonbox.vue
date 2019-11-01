<template>
  <div class="addpersonbox">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <Addperson />
    </div>
  </div>
</template>

<script>
  import HeadNav from "../../common/header";
  import IsHeadEmty from "../../common/isheademty";
  import Addperson from './addperson'
    export default {
        name: "addpersonbox",
        components: {
          HeadNav,
          IsHeadEmty,
          Addperson
        },
        data(){
            return{

            }
        },
        methods:{
            getAddUser(){

            }
        },
        mounted() {
          this.getAddUser()
        }
    }
</script>

<style scoped>

</style>
