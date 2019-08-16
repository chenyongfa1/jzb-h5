<template>
  <div class="interpretation ">
    <div class="pd16">
      <h2>政策解读</h2>
      <div class="interpretation-list">
        <router-link :to="{ name:'interdetail',params: { id: item.id }}" class="interpretation-item"
                     v-for="(item,index) in
        interpretation" :key="item.id">
          <img :src="item.img_url" alt="">
          <span>{{item.name}}</span>
        </router-link>
      </div>
    </div>
    <div class="consultationImg pd16">
      <img class="cz_img" src="static/images/index/daijiao.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'interpretation',
  data () {
    return {
      interpretation:[],
    }
  },
  methods: {
    // 政策解读
    getPolicy() {
      this.$ajax.post(this.HOST + '/app/index/getPolicy')
        .then((res)=>{
          this.interpretation = res.data.data.policy
          console.log(res.data.message)
        })

    },
  },
  mounted() {
    this.getPolicy()
  },
  created() {

  }

}
</script>

<style scoped>
  .interpretation h2{
    font-size:.85rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding:.75rem 0;
  }
  .interpretation-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .interpretation-item{
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size:.6rem;
    color: #999;
    width: 25%;
    border-bottom: 1px solid #E6E6E6;
  }
  .interpretation-item:after{
    content: '';
    position: absolute;
    top: 16%;
    right: 0%;
    width: 1px;
    height: 1.75rem;
    background:#E6E6E6 ;
  }
  .interpretation-item:nth-child(4n):after{
    width: 0;
  }
  .interpretation-item img{
    width: 2.25rem;
    height: 2.25rem;
  }
  .interpretation-item span{
    display: inline-block;
    padding: .25rem 0;
  }
  .indexImg img{
    width: 7.5rem;
    height: 2rem;
  }
  .consultationImg{
    width: 100%;
    height: 4.075rem;
    padding-top:.85rem
  }
</style>
