<template>
  <div class="myteamdetail">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="myteamdetails">
        <div class="myteamdetailhead mg16">
          <div class="myteamdetailheader ">
            <img :src="teamAll.headimgurl" alt="">
          </div>
          <div class="myteamdetailname">{{teamAll.nickname}}</div>
        </div>
        <div class="myteamdetailnamelist mg16">
          <div class="myteamdetailnameitem">
            <div class="ordertime">下单日期</div>
            <div class="mealsel">套餐</div>
            <div class="mymoney">奖金(元)</div>
          </div>
          <div class="myteamdetailnameitem" v-for="(item,index) in teamList" :key="index">
            <div class="ordertime">{{item.add_time}}</div>
            <div class="mealsel">{{item.month_amount}}个月</div>
            <div class="mymoney colf25">{{item.reward}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from "@/components/common/header";
  import IsHeadEmty from "@/components/common/isheademty";

  export default {
    name: "myteamdetail",
    components: {
      HeadNav,
      IsHeadEmty
    },
    data() {
      return {
        userImg: JSON.parse(window.localStorage.getItem('userInfo')),
        teamList: '',
        teamAll: ''
      }
    },
    methods: {
      getTeamorDerslist() {
        let data = this.common.getsign()
        let that = this
        $.ajax({
          url: this.HOST + '/app/user/teamorderslist',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: this.$route.query.id,
          },
          dataType: "JSON",
          success: function (r) {
            that.teamList = r.data.list
            that.teamAll = r.data
          }
        })
      }
    },
    mounted() {
      this.getTeamorDerslist()
    }

  }
</script>

<style lang="scss" scoped>
  .myteamdetails {
    background: #fff;
    border-radius: .6rem .6rem 0 0;

    .myteamdetailhead {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #E6E6E6;
      height: 3.5rem;

      .myteamdetailheader {
        img {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }

      .myteamdetailname {
        padding-left: .7rem;
      }
    }

    .myteamdetailnamelist {
      .myteamdetailnameitem {
        height: 2.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
        font-size: .7rem;
        border-bottom: 1px solid #E6E6E6;

        > div {
          width: calc(100% / 3);
          text-align: center;
        }

        > div:nth-child(1) {
          text-align: left;
        }

        > div:nth-child(3) {
          text-align: right;
        }
      }

    }

    .myteamdetailnamelist {
      .myteamdetailnameitem:nth-child(1) {
        height: 2.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
        font-size: .8rem;
        border-bottom: 1px solid #E6E6E6;
      }
    }
  }

  .colf25 {
    color: #F25454;
  }
</style>
