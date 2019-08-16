<template>
  <div class="addinsurers">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <AddupLoad />
    </div>
  </div>
</template>

<script>
  import HeadNav from "./../common/header";
  import IsHeadEmty from "./../common/isheademty";
  import AddupLoad from './addinsurers/addupload'
    export default {
        name: "addinsurers",
        components: {
          HeadNav,
          IsHeadEmty,
          AddupLoad
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
