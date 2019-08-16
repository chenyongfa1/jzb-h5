<template>
    <div class="brannd pd16">
      <van-swipe :autoplay="3000" style="height:8rem ;">
        <van-swipe-item class="swipt-index"  v-for="(item, index) in banner" :key="index">
          <router-link :to="{name:'interdetail'}">
            <img :src="item.banner_url" />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
    // import host from '../../../static/js/common/common'
    export default {
        name: 'indexbrannd',
        data() {
            return {
              banner:[],

            }
        },
        methods: {
            // 轮播图
            getBannerList: function () {
                this.$ajax.post(this.HOST + '/app/index/getBannerList')
                    .then((res) => {
                      this.banner = res.data.data.head
                    })
            },
        },
        mounted() {
            this.getBannerList()
        },
        created() {

        }
    }

</script>

<style scoped>
    .brannd {
        margin-top: .25rem;
    }
  .swipt-index a{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
