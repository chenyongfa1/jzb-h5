<template>
    <div class="myparticipants">
      <HeadNav />
      <div class="content">
        <IsHeadEmty />
        <div style="display: none">
          <Defailt />
          <router-link :to="{name:'addinsurers'}" class="addpartic">新增参保人</router-link>
        </div>
        <div>
          <Participantslist />
        </div>
      </div>
    </div>
</template>

<script>
  import HeadNav from "./../common/header";
  import IsHeadEmty from "./../common/isheademty";
  import Defailt from "./../common/defailt";
  import Participantslist from './participantslist'
    export default {
        name: "myparticipants",
        components:{
          HeadNav,
          IsHeadEmty,
          Defailt,
          Participantslist
        }
    }
</script>

<style scoped>
  .content{
    background: #f2f2f2;
  }
  .addpartic{
    display: block;
    width: 16rem;
    height: 2.25rem;
    background: #F97A2E;
    margin: 5rem auto 0;
    line-height: 2.25rem;
    text-align: center;
    font-size:.9rem;
    color: #fff;
    border-radius: 2rem;
  }
</style>
