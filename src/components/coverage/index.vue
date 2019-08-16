<template>
  <div class="coverage ">
    <HeadNav/>
    <div class="content">
      <IsHeadEmty/>
      <div class="pd16 covera">
        <h2>常规基础服务</h2>
        <div class="interpretation-list">
          <router-link :to="{ name:'interdetail',params: {id:item.id}}" class="interpretation-item"
                       v-for="(item,index) in interpretation" :key="item.id">
            <img :src="item.img_url" alt="">
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </div>
      <div class="footImg">
        <img src="../../../static/images/coverage/foot1.png" alt="">
        <img src="../../../static/images/coverage/foot2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from "./../common/header";
  import IsHeadEmty from "./../common/isheademty";

  export default {
    name: "coverage",
    components: {
      HeadNav,
      IsHeadEmty
    },
    data() {
      return {
        interpretation: ''
      }
    },
    methods: {
      getPolicy() {
        this.$ajax.post(this.HOST + '/app/index/getPolicy')
          .then((res) => {
            console.log(res)
            this.interpretation = res.data.data.policy
          })
      }
    },
    mounted() {
      this.getPolicy()
    }
  }
</script>

<style scoped>
  .content{
    background: #f2f2f2;
  }
  .coverage h2 {
    font-size: .85rem;
    font-family: PingFangSC-Regular;
    color: #333;
    padding: .75rem 0;
  }
  .covera{
    border-radius:.6rem .6rem .6rem 0px;
    background: #fff;
    margin-top: .75rem;
    height: calc(100vh - 2.2rem - .75rem);
  }
  .interpretation-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .interpretation-item {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: .6rem;
    color: #999;
    width: calc(100% / 3);
    border-bottom: 1px solid #E6E6E6;
  }

  .interpretation-item:after {
    content: '';
    position: absolute;
    top: 16%;
    right: 0%;
    width: 1px;
    height: 1.75rem;
    background: #E6E6E6;
  }
  .interpretation-item:nth-child(1),.interpretation-item:nth-child(2),.interpretation-item:nth-child(3){
    border-top: 1px solid #e6e6e6;
  }
  .interpretation-item:nth-child(3n):after {
    width: 0;
  }

  .interpretation-item img {
    width: 2.25rem;
    height: 2.25rem;
  }

  .interpretation-item span {
    display: inline-block;
    padding: .25rem 0;
  }

  .indexImg img {
    width: 7.5rem;
    height: 2rem;
  }
  .footImg{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 3.85rem;
  }
  .footImg img:nth-child(1){
    width: 6.75rem;
    height: .75rem;
    margin-bottom: .5rem;
  }
  .footImg img:nth-child(2){
    width: 5.75rem;
    height: .5rem;
  }
</style>
