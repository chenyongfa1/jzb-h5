<template>
  <div class="service ">
     <div class="pd16">
       <h2>服务内容</h2>
       <div class="service-list">
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
         <div class="service-item">
           <img src="static/images/index/payback.png" alt="">
           <span>补缴社保</span>
         </div>
       </div>
       <div class="indexImg">
         <img src="static/images/index/shebao1.png" alt="">
         <img src="static/images/index/gjj1.png" alt="">
       </div>
     </div>
    <div class="consultationImg">
      <img class="cz_img" src="static/images/index/consultation.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'serCon',
  data () {
    return {

    }
  },
  methods: {
    axios2: function () {

    }
  },
  mounted () {
    this.axios2()
  }
}
</script>

<style scoped>
  .service h2{
    font-size:.85rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding:.75rem 0;
  }
  .service-list{
    display: flex;
    justify-content: space-between;
  }
  .service-item{
    display: flex;
    flex-direction: column;
    font-size:.6rem;
    color: #999;
  }
  .service-item img{
    width: 2.25rem;
    height: 2.25rem;
  }
  .service-item span{
    display: inline-block;
    padding: .25rem 0;
  }
  .indexImg{
    display: flex;
    justify-content: space-between;
    padding-top: .25rem;
  }
  .indexImg img{
    width: 7.5rem;
    height: 2rem;
  }
  .consultationImg{
    width: 100%;
    height: 4.175rem;
    padding-top:.85rem
  }
</style>
