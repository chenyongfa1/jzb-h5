
<template>
<van-tabbar v-model="active" class="active_tab" v-show="$route.meta.footShow==undefined||$route.meta.footShow"
>
  <van-tabbar-item
    v-for="(item,index) in tabbars"
    :key="index"
    @click="tab(index,item.name)"
  >
    <span :class="currIndex == index ? active:''">{{item.title}}</span>
    <div slot="icon" slot-scope="props">
      <img :src="props.active ? item.active : item.normal">
    </div>
  </van-tabbar-item>
</van-tabbar>
</template>
<script>
  export default {
    name: "tabbar",
    data() {
      return {
        currIndex: 1,
        active: 0,
        tabbars: [
          {
            name: "/",
            title: "首页",
            normal: require("../../../static/images/common/indexNor.png"),
            active: require("../../../static/images/common/indexAct.png")
          },
          {
            name: "socialsecurity",
            title: "社保",
            normal: require("../../../static/images/common/socialsecurityNor.png"),
            active: require("../../../static/images/common/socialsecurityAct.png")
          },
          {
            name: "calculator",
            title: "计算器",
            normal: require("../../../static/images/common/calculatorNor.png"),
            active: require("../../../static/images/common/calculatorAct.png")
          },
          {
            name: "my",
            title: "我的",
            normal: require("../../../static/images/common/myNor.png"),
            active: require("../../../static/images/common/myAct.png")
          }

        ]
      };
    },
    methods: {
      tab(index, val) {
        this.currIndex = index;
        this.$router.push(val);
      },
    },
    mounted() {
      this.active = this.tabbars.findIndex(
        item => item.name === this.$route.name
      );
    },
    created() {

    }
  };
</script>

<style scoped>
  .mint-tab-item{
    color: #A6A6A6;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    color: #F97A2E;
  }
  .mint-tabbar > .mint-tab-item{
    background: #fff;
  }
</style>
