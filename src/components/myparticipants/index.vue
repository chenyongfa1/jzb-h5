<template>
  <div class="myparticipants">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty />
      <div v-if="len==0">
        <Defailt/>
        <router-link :to="{name:'addinsurers'}" class="addpartic">新增参保人</router-link>
      </div>
      <div v-else>
        <Participantslist/>
      </div>
<!--      <inputPhone />-->
    </div>
  </div>
</template>

<script>
    import HeadNav from "./../common/header";
    import IsHeadEmty from "./../common/isheademty";
    import Defailt from "./../common/defailt";
    import Participantslist from './participantslist'
    import inputPhone from "@/components/common/inputphone";

    export default {
        name: "myparticipants",
        components: {
            HeadNav,
            IsHeadEmty,
            Defailt,
            Participantslist,
            inputPhone
        },
        data() {
            return {
                len: 0,
            }
        },
        methods: {
            getAccountList() {
                let data = this.common.getsign()
                let userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
                let that = this
                $.ajax({
                    url: this.HOST + '/app/user/accountList',
                    type: "POST",
                    data: {
                        time: data.time,
                        sign: data.sign,
                        user_id: userInfo.id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.len = r.data.length
                    }
                })
            },
        },
        mounted() {
            let getAcc = window.localStorage.getItem('inputPhone') || undefined
            if(getAcc === undefined){
                this.getAccountList()
            }else {
            }

        },
        created() {

        }
    }
</script>

<style scoped>
  .content {
    background: #f2f2f2;
  }

  .addpartic {
    display: block;
    width: 16rem;
    height: 2.25rem;
    background: #F97A2E;
    margin: 5rem auto 0;
    line-height: 2.25rem;
    text-align: center;
    font-size: .9rem;
    color: #fff;
    border-radius: 2rem;
  }
</style>
