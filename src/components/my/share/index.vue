<template>
  <div class="share">
    <div class="back1">
      <van-icon name="arrow-left" @click="goupFn"/>
      <div class="contenttitle">乐桔分享</div>
    </div>
    <div class="content">
      <div class="sharebg">
        <div class="sharebtn">
          <div class="shareurl" @click="urlBtn">
            <img src="../../../../static/images/my/share/share2.png" alt="">
            <span> 分享链接</span>
          </div>
          <!--          <div class="shareimg" @click="qrCodeBtn" >-->
          <div class="shareimg" @click="productionImage">
            <img src="../../../../static/images/my/share/share3.png" alt="">
            <span> 分享图片</span>
          </div>
        </div>
      </div>
      <van-popup v-model="copyCodeShow" round style="width: 80%;height: 7.6rem">
        <div class="copycon">
          <div class="copyurl pd16" @click="copyUrl" data-clipboard-action="copy" :data-clipboard-text="urlVal">
            <div>链接：</div>
            <van-field v-model="urlVal" :readonly="readonly" :value="urlVal" placeholder="请输入用户名"/>
          </div>
          <div class="personalurl pd16">个人账户专属链接</div>
          <div @click="copyUrl" data-clipboard-action="copy" :data-clipboard-text="urlVal" class="copy pd16">复制链接</div>
        </div>
      </van-popup>
      <!--        生成海报-->
      <div class="qrcode" @click.stop="qrCodeClose">
        <div class="copyimg" ref="imageWrapper" id="copyimg">
          <img class="imagetofiles" src="../../../../static/images/my/share/poster1.png" alt="">
          <div id="qrcode" @click.stop="qrCodeClose1"></div>
        </div>
      </div>

      <div class="posters" @click.stop="postClose($event)" v-if="htmlUrl !='' ">
        <!--      <div class="posters" @click.stop="postClose($event)">-->
        <div class="poster">
          <!--<img
            id="images"
            src="../../../../static/images/my/share/poster.png"
            alt=""
            width="300"
            style="-webkit-touch-callout: default"
          />-->
          <div class="hbImg" id="hbImg">
            <img @click.stop="postStop()" style="-webkit-touch-callout: default " :src="htmlUrl" alt="downloadCodeImg">
          </div>
          <div class="preservation" @click.stop=" downloadCodeImg">长按图片保存</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from "@/components/common/header";
  import IsHeadEmty from "@/components/common/isheademty";
  import QRCode from "qrcodejs2"
  import html2canvas from 'html2canvas'

  export default {
    name: "share",
    components: {
      HeadNav,
      IsHeadEmty,
      html2canvas
    },
    data() {
      return {
        qrCodeShow: false,
        copyCodeShow: false,
        copyCodeShow1: false,
        link: 'http://wx.jzbshebao1.cn',
        urlVal: 'http://wx.jzbshebao.cn',
        readonly: true,
        htmlUrl: '',
        blobs: ''
      }
    },
    methods: {
      goupFn() {
        this.$router.go(-1)
      },
      // 复制链接
      copyUrl() {
        let _this = this;
        let clipboard = new this.clipboard(".copy");
        clipboard.on('success', function () {
          _this.$toast("复制成功")
        });
        clipboard.on('error', function () {
          _this.$toast("复制失败")
        });
      },
      copyImg() {

      },
      // 生成二维码
      qrCode() {
        this.qrCodeShow = true
        let that = this;
        let qrcode = new QRCode('qrcode', {
          width: 60,
          height: 60,        // 高度
          text: that.urlVal,   // 二维码内容
          render: 'canvas',   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          background: '#f0f',   // 背景色
          foreground: '#ff0'    // 前景色
        })

        $('#qrcode img').css({
         /* width: '2.8rem',
          height: '2.8rem',*/
          backgroundColor: '#fff', //设置白色背景色
          // padding: '.5rem' // 利用padding的特性，挤出白边
        })
        // that.toImage()
      },
      htmlUrlqrCodeClose(e) {
        $('.qrcode').css({
          display: 'none'
        })
      },
      qrCodeClose1() {
        $('.qrcode').css({
          display: 'flex'
        })
      },
      qrCodeClose() {
        $('.qrcode').css({
          display: 'none'
        })
      },
      // 复制链接
      urlBtn() {
        this.copyCodeShow = true
      },
      // 获取用户信息
      getUserInfo() {
        let data = this.common.getsign()
        let that = this
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        $.ajax({
          url: this.HOST + '/app/user/userCenter',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            user_id: userInfo.id,
          },
          dataType: "JSON",
          success: function (r) {
            that.urlVal = that.urlVal + '/?invitation=' + r.data.userInfo.invitation_code
            that.qrCode()
          }
        })
      },
      qrCodeBtn() {
        $('.qrcode').css({
          display: 'flex'
        })
      },
      // 生成海报
      toImage() {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        /*var width = $('#copyimg').width() * 2
        var height = $('#copyimg').height() * 2
        var canvasBox = document.createElement("canvas");
        var scale = window.devicePixelRatio;
        canvasBox.width = width * scale;
        canvasBox.height = height * scale;
        canvasBox.style.width = width + "px";
        canvasBox.style.height = height + "px";
        canvasBox.getContext("2d").scale(scale, scale);*/
        let scale = 2; //放大倍数
        html2canvas(this.$refs.imageWrapper, {
          backgroundColor: 'rgba(0,0,0,0)',
          dpi: window.devicePixelRatio * 1,
          scale: scale,
          useCORS: true,
          /*width:width,
          height:height,
          canvas:canvasBox*/
        }).then((canvas) => {
          let url = canvas.toDataURL('image/png', 1.0);
          this.htmlUrl = url;
        })
      },
      productionImage() {
        $('.qrcode').css({
          display: 'flex'
        })
        this.toImage()
      },
      // 下载图片
      downloadCodeImg() {
        /*let a = document.createElement('a')
        a.download = name || 'jzbshebao.png'
        // 设置图片地址
        let that = this
        let blob = this.dataURLtoBlob(this.htmlUrl)
        this.blobToDataURL(blob, function (dataurl) {
          a.href = dataurl;
          a.target="_blank"
          console.log(a)
        });
        let fd = new FormData()
        let file2 = new File([blob], a.download, {type: 'image/png'})
        fd.append('file',file2)
        let data = this.common.getsign()
        $.ajax({
          url: this.HOST + '/app/common/recommend_upload',
          type: "POST",
          processData: false,    // processData和contentType必须指定为false
          contentType: false,
          cache: false,
          data: fd,
          dataType: "JSON",
          success:function (r) {
            a.href =that.Img + r.data.img_url;
            // a.href =blob.size;
            a.click();
          }
        });*/

      },
      // 关闭海报
      postClose() {
        this.htmlUrl = ""
      },
      //阻止冒泡事件
      postStop() {
      },
      dataURLtoBlob(dataurl) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
      },
      blobToDataURL(blob, callback) {
        let a = new FileReader();
        a.onload = function (e) {
          callback(e.target.result);
        }
        a.readAsDataURL(blob);
        this.blobs = blob
      },
    },
    mounted() {
      this.getUserInfo()


    }
  }
</script>

<style lang="scss" scoped>
  .back1 {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 22;
    position: fixed;
    font-size: 1rem;
  }

  .van-icon {
    position: absolute;
    top: .9rem;
    left: 0.75rem;
    color: #F98433;
  }

  .contenttitle {
    position: absolute;
    top: .8rem;
    left: 50%;
    margin-left: -1.8rem;
    font-size: 0.9rem;
    color: #333333;
  }

  .sharebg {
    height: 100vh;
    background: url("../../../../static/images/my/share/share1.png");
    background-size: 100% 100%;

    .sharebtn {
      z-index: 2;
      display: flex;
      justify-content: space-around;
      position: absolute;
      width: 100%;
      bottom: 4rem;

      .shareurl {
        z-index: 3;
        width: 33%;
        height: 1.95rem;
        background: url("../../../../static/images/my/share/share4.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: .9rem;
          height: .9rem;
        }

        span {
          color: #FEFEFE;
          font-size: .8rem;
          padding-left: .2rem
        }
      }

      .shareimg {
        z-index: 3;
        width: 33%;
        height: 1.95rem;
        background: url("../../../../static/images/my/share/share5.png");
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: .9rem;
          height: .9rem;
        }

        span {
          color: #FEFEFE;
          font-size: .8rem;
          padding-left: .2rem
        }
      }
    }
  }

  //复制链接
  .copycon {
    .copyurl {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      > div:nth-child(1) {
        width: 20%;
        color: #333;
        font-size: .8rem;
      }

      .van-cell {
        width: 70%;
        padding: .1rem .4rem;
        border: 1px solid #e6e6e6;
      }
    }

    .personalurl {
      font-size: .6rem;
      color: #666;
      text-align: center;
      padding: .2rem 0;
    }

    .copy {
      width: 50%;
      height: 1.9rem;
      border-radius: .95rem;
      background: #F97A2E;
      color: #fff;
      text-align: center;
      line-height: 1.9rem;
      font-size: .8rem;
      margin: .6rem auto 0;
    }
  }

  /*  .conver{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index:100;
      #qrcode {
        display: inline-block;
        img {
          width: 132px;
          height: 132px;
          background-color: #fff; //设置白色背景色
          padding: 6px; // 利用padding的特性，挤出白边
        }
      }
    }*/
  .qrcode {
    background: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: none;
    justify-content: center;
    z-index: -1;

    .copyimg {
      position: relative;
      width: 13.9rem;
      height: 18.15rem;
      display: block;
      /*background: url(../../../../static/images/my/share/poster.png);*/
      background-size: 100% 100%;

      img {
        width: 100%;
        height: 100%;
      }

      // img{
      //   width: 13.9rem;
      //   height: 18.15rem;
      //   display:block;
      // }
      .imagetofiles {

      }
    }

  }

  #qrcode {
    /*display: inline-block;*/
    position: absolute;
    bottom: 2.8%;
    /*margin-top: -30%;*/
    z-index: 100;
    width: 50%;
    left: 5%;
    /*background: url('../../../../static/images/my/share/share6.png');
    background-size: 100% 100%;*/

    img {
      width: 4.2rem;
      height: 4.2rem;
      background-color: #fff; //设置白色背景色
      padding: 6px; // 利用padding的特性，挤出白边
    }
  }

  .imagetofile {
    width: 100%;
    display: inline-block;
    z-index: 1;
  }

  .posters {
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, .7);
    width: 100vw;
    height: 100vh;
    z-index: 100;
  }

  .poster {
    position: absolute;
    width: 100vw;
    height: 64vh;
    top: 0;
    z-index: 100;
    /*background: rgba(0, 0, 0, .7);*/
    /*display: none;*/
    .hbImg {
      width: 80%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 15%;
      margin-left: -40%;
    }

    img {
      /*width: 80%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 15%;
      margin-left: -40%;*/
      width: 100%;
      height: 100%;
    }

    .preservation {
      position: absolute;
      left: 50%;
      top: calc(15% + 66vh);
      margin-left: -3.5rem;
      width: 7.05rem;
      height: 1.9rem;
      background: #fff;
      color: #F97A2E;
      font-size: .8rem;
      border-radius: .95rem;
      line-height: 1.9rem;
      text-align: center;
    }
  }
</style>
