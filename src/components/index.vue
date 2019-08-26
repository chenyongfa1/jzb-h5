<template>
  <div class="index">
    <navTitle />
    <div class="content">
      <!--轮播图-->
      <indexbrannd />
      <!--最新新闻-->
      <div class="news pd16">
        <div>
          <img src="static/images/index/horn.png" alt />
        </div>
        <div>
          <img src="static/images/index/newest.png" alt />
        </div>
        <div>专业代缴社保公积金</div>
      </div>
      <serCon />
      <interpretation />
      <guarantee />
      <Isfootemty />
    </div>
  </div>
</template>

<script>
import navTitle from "./common/nav-title";
import Isfootemty from "./common/isfootemty";
import serCon from "./index/sercon";
import indexbrannd from "./index/indexbrannd";
import NavFoot from "./common/footer";
import interpretation from "./index/interpretation";
import guarantee from "./index/guarantee";
export default {
  name: "index",
  components: {
    navTitle,
    serCon,
    indexbrannd,
    interpretation,
    guarantee,
    NavFoot,
    Isfootemty
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
.emty {
  height: 50px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__indicator button.el-carousel__button {
  width: 20px !important;
  background: red !important;
}
.index-banner {
  margin: 0.5rem 0 0;
}
/*最新资讯*/
.news {
  display: flex;
  height: 1.45rem;
  line-height: 1.45rem;
  background-image: url("../../static/images/index/bgmsg.png");
  align-items: center;
}
.news div:nth-child(1) {
}
.news div:nth-child(1) img {
  width: 0.5rem;
  height: 0.55rem;
}
.news div:nth-child(2) {
  margin: 0 0.6rem;
  box-sizing: border-box;
  padding-top: 0.2rem;
}
.news div:nth-child(2) img {
  width: 1.4rem;
  height: 0.8rem;
}
.news div:nth-child(3) {
  font-size: 0.6rem;
  color: #666666;
}
</style>
