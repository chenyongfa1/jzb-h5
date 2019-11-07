<template>
  <div class="newpagedetail">
    <div class="content">
      <div class="consultationheadimg">
        <img :src="this.Img + ArticleDetail.img" alt="">
      </div>
      <div class="newpagedetailcon mg16 pd16">
        <div class="newpagedetailcontop">
          <img src="../../../static/images/newpages/leftbtn.png" v-if="articleListIndex != 0" @click="prevArtice"
               alt="">
          <img src="../../../static/images/newpages/leftbtn1.png" v-else  alt="">
          <div>{{ArticleDetail.city}}</div>
          <img src="../../../static/images/newpages/rightbtn.png" v-if="articleListIndex != (articleListAllId.length-1)"
               @click="nextArtice" alt="">
          <img src="../../../static/images/newpages/rightbtn1.png" v-else alt="">
        </div>
        <div class="newpagedetailconbot" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNav from "@/components/common/header";
  import IsHeadEmty from "@/components/common/isheademty";

  export default {
    name: "newpagedetail1",
    components: {
      HeadNav,
      IsHeadEmty
    },
    data() {
      return {
        ArticleDetail: '',
        content: '',
        articleListfrist:'',//默认第一条文章id
        articleListIndex:0,//默认第一条文章id
        articleListAllId:[],//全部id
      }
    },
    methods: {
      getArticleDetail(Id) {
        let data = this.common.getsign()
        let that = this
        $.ajax({
          url: this.HOST + '/app/article/returnArticleDetail',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            id: Id
          },
          dataType: "JSON",
          success: function (r) {
            that.ArticleDetail = r.data.articleDetail
            let AllReplace = new RegExp('/Public/kindeditor/attached/image', "g")
            that.content = r.data.articleDetail.content.replace(AllReplace, that.Img + '/Public/kindeditor/attached/image')
            that.$route.meta.title = that.ArticleDetail.name
            setTimeout(function () {
              $('.newpagedetailconbot img').css({
                display: 'block',
                width: '90%',
                margin: '.5rem auto',
              })
            })
          }
        })
      },
      getArticleList(){
        let data = this.common.getsign()
        let that = this
        $.ajax({
          url: this.HOST + '/app/article/returnArticleList',
          type: "POST",
          data: {
            sign: data.sign,
            time: data.time,
            id: this.$route.query.id,
            page:10000
          },
          dataType: "JSON",
          success: function (r) {
            that.articleListfrist = r.data.list[that.articleListIndex].id
            that.getArticleDetail(that.articleListfrist)
            r.data.list.map((item)=>{
              that.articleListAllId.push(item.id)
            })
          }
        })
      },
      // 上一篇文章
      prevArtice(){
        this.articleListIndex--
        let Id = this.articleListAllId[this.articleListIndex]
        this.getArticleDetail(Id)
      },
      // 下一篇文章
      nextArtice(){
        this.articleListIndex++
        let Id = this.articleListAllId[this.articleListIndex]
        this.getArticleDetail(Id)
      }
    },

    mounted() {
      // this.getArticleDetail()
      this.getArticleList()
    },
    created() {
      this.$route.meta.title = this.$route.query.name
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    background: #f2f2f2;
  }
  .consultationheadimg{
    img{
      width: 100%;
      height: 13.25rem;
    }
  }
  .newpagedetailcon{
    background: #fff;
    margin-bottom: 1rem;
    border-radius: .6rem;
    .newpagedetailcontop{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 2.75rem;
      img{
        width: .9rem;
        height: .9rem;
      }
      div{
        font-size: .8rem;
        color: #b2b2b2;
      }
    }
  }
  .newpagedetailconbot{
    font-size: .7rem;
  }
</style>
