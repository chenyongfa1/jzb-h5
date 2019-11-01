<template>
  <div class="aboutus">
    <div class="back1">
      <van-icon name="arrow-left" @click="goupFn" />
      <div class="contenttitle"></div>
    </div>
    <div class="content">
      <div class="aboutbg"></div>
      <div class="imgbox">
        <img src="../../../../static/images/my/about/logoabout.png" alt="logo">
      </div>
      <div class="quelificationimg">
        <div class="quelificationlist">
          <div class="quelificationitem">
            <div class="quelificationleft" @click="toShow1">
              <img src="../../../../static/images/my/about/quelification1.png" alt="">
              <span>全国信用试点培育单位</span>
            </div>
            <div class="quelificationright" @click="toShow2">
              <img src="../../../../static/images/my/about/quelification2.png" alt="">
              <span>全国信用试点培育单位</span>
            </div>
          </div>
        </div>
        <div class="quelificationlist">
          <div class="quelificationitem1">
            <div class="quelificationleft" @click="toShow3">
              <img src="../../../../static/images/my/about/quelification3.jpg" alt="">
              <span>人力资源许可证</span>
            </div>
            <div class="quelificationright" @click="toShow4">
              <img src="../../../../static/images/my/about/quelification4.jpg" alt="">
              <span>劳务派遣经营许可证</span>
            </div>
          </div>
        </div>
        <div class="quelificationlist">
          <div class="quelificationitem2">
            <div class="quelificationleft" @click="toShow5">
              <img src="../../../../static/images/my/about/quelification5.jpg" alt="">
              <span>中企信办信用建设工作委员会会员证书</span>
            </div>
          </div>
        </div>
      </div>
      <van-image-preview
        v-model="show1"
        :images="images1"
      />
      <van-image-preview
        v-model="show2"
        :images="images2"
      />
      <van-image-preview
        v-model="show3"
        :images="images3"
      />
      <van-image-preview
        v-model="show4"
        :images="images4"
      />

      <van-image-preview
      v-model="show5"
      :images="images5"
    />
    </div>
  </div>
</template>

<script>
    export default {
        name: "qualification",
        data() {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                images1: [
                    '../../../../static/images/my/about/quelification1.png',
                ],
                images2: [
                    '../../../../static/images/my/about/quelification2.png',
                ],
                images3: [
                    '../../../../static/images/my/about/quelification3.jpg',
                ],
                images4: [
                    '../../../../static/images/my/about/quelification4.jpg',
                ],
                images5: [
                    '../../../../static/images/my/about/quelification5.jpg',
                ],
            }
        },
        methods: {
            goupFn(){
                this.$router.go(-1)
            },
            toShow1(){
                this.show1 = true
            },
            toShow2(){
                this.show2 = true
            },
            toShow3(){
                this.show3 = true
            },
            toShow4(){
                this.show4 = true
            },
            toShow5(){
                this.show5 = true
            },
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
  .aboutus{
    .back1{
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      z-index: 22;
      position: fixed;
      font-size: 1rem;
    }
    .van-icon{
      position: absolute;
      top: 1.4rem;
      left: 0.75rem;
    }
    .aboutbg{
      background: url("../../../../static/images/my/about/aboutus001.png");
      background-size: 100% 100%;
      height: 11.25rem;
    }
    .contenttitle{
      position: absolute;
      top: 1.3rem;
      left: 50%;
      margin-left: -1.8rem;
      font-size: 0.9rem;
    }
    .imgbox{
      width: 6.375rem;
      height: 6.375rem;
      position: absolute;
      top: 6.225rem;
      left: calc(50% - 3.185rem);
      img{
        width: 100%;
        height: 100%;
      }
    }

  }
  .quelificationimg{
    margin-top: 1rem;
    .quelificationlist{
      .quelificationitem{
        display: flex;
        justify-content: space-around;
        .quelificationleft{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: #666666;
          font-size: .6rem;
          /*height: 11rem;*/
          width: 50%;
          img{
            width: 80%;
            /*height: 9.6rem;*/
          }

        }
        .quelificationright{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: #666666;
          font-size: .6rem;
          /*height: 11rem;*/
          width: 50%;
          img{
            width: 80%;
            /*height: 9.6rem;*/
          }
        }
      }
      .quelificationitem1{
        margin-top: .5rem;
        display: flex;
        justify-content: center;
        .quelificationleft{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: #666666;
          font-size: .6rem;
          /*height: 7rem;*/
          width: 50%;
          img{
            width: 90%;
            /*height: 5.8rem;*/
          }
        }
        .quelificationright{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: #666666;
          font-size: .6rem;
          /*height: 7rem;*/
          width: 50%;
          img{
            width: 90%;
            /*height: 5.8rem;*/
          }
        }
      }
      .quelificationitem2{
        margin-top: .5rem;
        display: flex;
        justify-content: center;
        .quelificationleft{
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #666666;
          font-size: .6rem;
          /*height: 7rem;*/
          width: 50%;
          img{
            width: 90%;
            /*height: 5.8rem;*/
          }
          span{
            display: block;
            text-align: center;
          }
        }
      }
    }
  }
</style>
