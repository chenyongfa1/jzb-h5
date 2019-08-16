<template>
  <div class="guarantee">
    <div>
      <h2>服务内容</h2>
      <div class="index-line"></div>
      <div class="guarantee-list pd16">
        <div class="guarantee-item">
          <p><img src="static/images/index/compliance.png" alt=""></p>
          <p class="guarantee-title">资质合规</p>
          <p>人社部认证许可正规专业服务平台</p>
        </div>
        <div class="guarantee-item">
          <p><img src="static/images/index/compliance.png" alt=""></p>
          <p class="guarantee-title">资质合规</p>
          <p>人社部认证许可正规专业服务平台</p>
        </div>
        <div class="guarantee-item">
          <p><img src="static/images/index/compliance.png" alt=""></p>
          <p class="guarantee-title">资质合规</p>
          <p>人社部认证许可正规专业服务平台</p>
        </div>
        <div class="guarantee-item">
          <p><img src="static/images/index/compliance.png" alt=""></p>
          <p class="guarantee-title">资质合规</p>
          <p>人社部认证许可正规专业服务平台</p>
        </div>
      </div>
      <div class="index-line"></div>
    </div>
    <div class="guarantee-footer">
      <p>缴社保就选桔子保</p>
      <p>工作随意换 社保不要断</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'guarantee',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .index-line{
    width: 100%;
    height: 1px;
    background: #E6E6E6;
  }

  .guarantee h2{
    font-size:.85rem;
    font-family:PingFangSC-Regular;
    color: #333;
    padding:.75rem .8rem;
  }
  .guarantee p{
    margin: 0;
  }
  .guarantee-list{
    display: flex;
    flex-wrap: wrap;
    padding-top: .2rem;
  }
  .guarantee-list .guarantee-item{
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .2rem 1.5rem .4rem;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
  }
  .guarantee-list .guarantee-item:nth-child(2n-1):after{
    content: '';
    position: absolute;
    top: 16%;
    right: 0%;
    width: 1px;
    height: 2.3rem;
    background:#E6E6E6 ;
  }
  .guarantee-list .guarantee-item:nth-child(1),.guarantee-item:nth-child(2){
    border-bottom: 1px solid #e6e6e6;
  }
  .guarantee-list .guarantee-item img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .guarantee-list .guarantee-item p:nth-child(1){
    width: 1.5rem;
    height: 1.5rem;
  }
  .guarantee-list .guarantee-item p:nth-child(2){
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333;
  }
  .guarantee-title{
    padding: .3rem 0;
  }
  .guarantee-list .guarantee-item p:nth-child(3){
    font-size:.55rem;
    font-family:PingFangSC-Regular;
    color: #999999;
  }
  .guarantee-footer{
    height: 3.85rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .guarantee-footer p{
    text-align: center
  }
  .guarantee-footer p:nth-child(1){
    font-size:.85rem;
    font-family:TRENDS;
    color: #666666;
  }
  .guarantee-footer p:nth-child(2){
    font-size:.55rem;
    font-family:TRENDS;
    color: #666666;
  }
</style>
