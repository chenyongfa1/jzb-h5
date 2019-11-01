<template>
  <div class="newpages">
    <div class="newpageshead">
      <img :src="this.Img + ArticleDetail.img" alt="">
    </div>
    <div class="newpagecon pd16">
      <div class="newpagetitle">{{ArticleDetail.title}}</div>
      <div class="newpagesource">
        <div class="newpagesourceleft">
          {{ArticleDetail.editor}}
        </div>
        <div class="newpagesourceright">
          {{ArticleDetail.display_time}}
        </div>
      </div>
      <div class="newpagedetail" v-html="content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newpages",
    data() {
      return {
        ArticleDetail: '',
        content:''
      }
    },
    methods: {
      getArticleDetail() {
        let data = this.common.getsign()
        let that = this
        $.ajax({
          url: this.HOST + '/app/article/returnArticleDetail',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            id: this.$route.query.id
          },
          dataType: "JSON",
          success: function (r) {
            that.ArticleDetail = r.data.articleDetail
            let AllReplace = new RegExp('/Public/kindeditor/attached/image', "g")
            that.content = r.data.articleDetail.content.replace(AllReplace, that.Img + '/Public/kindeditor/attached/image')
            setTimeout(function () {
              $('.newpagedetail img').css({
                display: 'block',
                width: '90%',
                margin: '.5rem auto',
              })
            })
          }
        })
      },
      addImg(){

      }
    },
    mounted() {

      this.addImg()
    },
    created() {
      this.getArticleDetail()
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    background: #fff;
  }
  .newpages{
    background: #fff;
    height: 100vh;
    overflow: auto;
  }
  .newpageshead {
    img{
      width: 100vw;
      height: 12rem;
    }
  }
  .newpagecon{
    .newpagetitle{
      color: #333;
      font-size: .8rem;
      font-weight: 600;
      padding:.5rem 0 .25rem
    }
    .newpagesource{
      display: flex;
      color: #B2B2B2;
      font-size: .6rem;
      .newpagesourceright{
        padding-left: .5rem;
      }
    }
  }
</style>
