<template>
    <div class="participantslist">
      <router-link :to="{name:'socialsecurity',query:{name:item.name,id:item.id}}"
                   class="participantsItem"
                   v-for="(item,index) in
      partic" :key="index">
        <div class="parname">{{item.name}}</div>
        <div class="paraddress">
          <p v-if="item.id_type == 2">城镇户口</p>
          <p v-else>农村户口</p>
          <p>{{item.id_info}}</p>
        </div>
        <div class="parjzb">
          <img class="cz_img" src="static/images/myparticipants/jzbImg.png" alt="">
        </div>
      </router-link>
      <div  class="addpar">
        <img @click="toAdd" src="static/images/myparticipants/paradd.png" alt="">
        <p>添加参保人</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "participantslist",
        data(){
          return{
            partic:[],
          }
        },
        methods:{
          getAccountList(){
            let data = this.common.getsign()
            let userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
            let that = this
            $.ajax({
              url: this.HOST + '/app/user/accountList',
              type: "POST",
              data: {
                time: data.time,
                sign: data.sign,
                user_id:userInfo.id
              },
              dataType: "JSON",
              success: function (r) {
                that.partic = r.data
              }
            })
          },
            addName(name,id){
              console.log(name,id)
                window.localStorage.setItem('particName',JSON.stringify(name))
                window.localStorage.setItem('particId',JSON.stringify(id))
              this.$router.push({
                  name:'socialsecurity'
              })
                // window.location.href = '/socialsecurity'
            },
            toAdd(){
              this.$router.push({
                  path:'addinsurers'
              })
            }
        },
        mounted() {
            let getAcc = window.localStorage.getItem('inputPhone') || undefined
            if(getAcc === undefined){
                this.getAccountList()
            }else {
            }
        }
    }
</script>

<style scoped>
  .participantsItem{
    margin: .85rem .65rem;
    height: 4.575rem;
    background: url("../../../static/images/myparticipants/parbg.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
  }
  .participantsItem .parname{
    font-size:1.2rem;
    font-family:PingFangSC-Regular;
    width: 4rem;
    overflow: hidden;
  }
  .participantsItem .paraddress{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    display: flex;
    flex-direction: column;
  }
  .participantsItem .parjzb{
    margin-top:1.5rem;
    width: 1.75rem;
    height: 2.35rem;
  }
  .addpar{
    width: 100%;
    height: 6rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .addpar img{
    width: 2.875rem;
    height: 2.875rem;
  }
  .addpar p{
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #666;
  }

</style>
