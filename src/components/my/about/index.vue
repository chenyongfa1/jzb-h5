<template>
  <div class="aboutus">
    <div class="back1">
      <van-icon name="arrow-left" @click="goupFn"/>
      <div class="contenttitle">关于我们</div>
    </div>
    <div class="content">
      <div class="aboutbg"></div>
      <div class="imgbox">
        <img src="../../../../static/images/my/logo.png" alt="logo">
      </div>
      <div class="contbox">
        <div v-for="(item,index) in textarr" @click="toaboutDetail(item.routers)" :key="index"><span>{{item
          .name}}</span>
          <div><img :src="item.img"
                    alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                textarr: [
                    {
                        'name': '公司介绍',
                        "img": '../../../../static/images/my/about/aboutusnext.png',
                        'routers': '/companyprofile'
                    },
                    {
                        'name': '资质展示',
                        "img": '../../../../static/images/my/about/aboutusnext.png',
                        'routers': '/qualification'
                    }
                ]
            }
        },
        methods: {
            goupFn() {
                this.$router.go(-1)
            },
            toaboutDetail(routers) {
              this.$router.push({
                  path :routers
              })
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
  .aboutus {
    .back1 {
      position: relative;

      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      z-index: 22;
      position: fixed;
      font-size: 1rem;


    }

    .van-icon {
      position: absolute;
      top: 1.4rem;
      left: 0.75rem;
    }

    .aboutbg {
      background: url("../../../../static/images/my/about/aboutus001.png");
      background-size: 100% 100%;
      height: 11.25rem;
    }

    .contenttitle {
      position: absolute;
      top: 1.3rem;
      left: 50%;
      margin-left: -1.8rem;
      font-size: 0.9rem;
    }

    .imgbox {
      width: 4.15rem;
      height: 5.775rem;
      position: absolute;
      top: 10.225rem;
      left: 7.3rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .contbox {
      width: 100%;
      height: 4rem;
      position: absolute;
      top: 18.75rem;

      > div {
        height: 2.8rem;
        line-height: 2.8rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.025rem solid #E6E6E6;
        width: 90%;
        margin: 0 auto;
        font-size: 0.8rem;

        > div {
          width: 0.375rem;
          height: 0.65rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

  }
</style>
