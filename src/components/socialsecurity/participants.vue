<template>
    <div >
      <div class="insured mg16">
        <router-link to="/myparticipants" class="participants">
          <div class="participantsLeft">
             <span class="parLftemty">
                <img src="../../../static/images/socialsecurity/insured.png" alt="">
            </span>
            <span>参保人</span>
          </div>
          <div class="participantsRight">
            <span  v-if="this.name == undefined? this.name='请选择参保人':this.name">{{name}}</span>
            <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
          </div>
        </router-link>
        <div class="insuredLine"></div>
        <div class="insuredCity" @click="getCity">
          <div class="insuredCityInfo" @click="isCity">
            <div class="participantsLeft">
              <span class="parLftemty">
                <img src="../../../static/images/socialsecurity/localtion.png" alt="">
              </span>
              <span >参保城市</span>
            </div>
            <div class="participantsRight">
              <span class="addInfo">{{addrInfo}}</span>
              <img src="../../../static/images/socialsecurity/youjiantou.png" alt="">
            </div>
          </div>
          <p>最早可办理<em>8月份</em></p>
        </div>
      </div>
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '20%' }">
        <van-popup v-model="show"  position="bottom" :overlay="true">
          <van-picker show-toolbar @cancel="cancel" value-key="text" @confirm="confirm" title="参保城市"
                      @change="onChange"
                      :columns="columns1" />
        </van-popup>
      </van-popup>
    </div>
</template>

<script>
  let citys = {}
    export default {
      name: "participants",
      data(){
          return{
            areaList:[],
            show:false,
            cityIdArr : [],
            cityIdArr1 : [],
            addrInfo:"请选择参保城市",
            columns1: [
            ],
            userinfo:'',
            name:"",
            firstSecurity:{
              particpantsuserId:'',
              particpantscityId:'',
              particpantscity:'请选择参保城市'
            }
          }
      },
      methods:{
        onChange(picker, values) {
          picker.setColumnValues(1, citys[values[0]]);
        },
        getCity(){
          this.$ajax.post(this.HOST + '/app/index/getCity')
            .then((res)=>{
              for (const item of res.data.data) {
                this.cityIdArr.push(item.id)
                citys[item.area_name] = item.item.map(item =>item.area_name)
                this.cityIdArr1[item.id] = item.item.map(item =>item.id)
              }
            })
            this.columns1= [
              {
                values: Object.keys(citys),
                className: 'column1'
              },
              {
                values: citys["浙江"],
                className: 'column2',
              },
            ]
        },
        isCity(){
          this.show = true
        },
        cancel(){
          this.show = false
        },
        confirm(e,index){
          this.show = false
          this.cityIdArr[index[0]]
          this.addrInfo = e[0] + " " +e[1]
          this.cityIdArr[index[0]]
          let city1 = this.cityIdArr1[this.cityIdArr[index[0]]][index[1]]
          window.localStorage.setItem("city",JSON.stringify(this.cityIdArr[index[0]]))
          window.localStorage.setItem("city1",JSON.stringify(city1))
        },
      },
      mounted() {
        this.getCity()
      },
      created() {
        this.name = this.$route.query.name
        console.log(this.$route.query.id)
        let priId = this.$route.query.id == undefined || this.$route.query.id
        window.localStorage.setItem('particId',JSON.stringify(priId))
      }
    }
</script>

<style scoped>
  .insured{
    width: calc(100% - 1.6rem);
    height: 6.875rem;
    background: #fff;
    box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.13);
    border-radius:.3rem;
  }
  .parLftemty{
    display: inline-block;
    width: 1.7rem;
  }
  .participants{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.975rem;
    padding:0 .8rem;

  }
  .participants .participantsLeft img{
    width:1.05rem;
    height: 1rem;
    vertical-align: middle;
  }
  .participants .participantsLeft span{
     width:1.05rem;
     height: 1rem;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    vertical-align: middle;
   }
  .participants .participantsRight img{
    width:.375rem;
    height: .65rem;
    vertical-align: middle;
  }
  .insuredLine{
    height: 1px;
    width: calc(100% - .8rem);
    margin-left: .8rem;
    background: #E6E6E6;
  }
  .participants .participantsRight span{
    width:1.05rem;
    height: 1rem;
    font-size:.6rem;
    font-family:PingFangSC-Regular;
    color: #333;
    vertical-align: middle;
  }

  .insuredCityInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.475rem;
  }
  .insuredCityInfo .participantsLeft img{
    width:.725rem;
    height: 1.075rem;
    vertical-align: middle;
  }
  .insuredCityInfo .participantsLeft span{
    width:1.05rem;
    height: 1rem;
    font-size:.7rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    vertical-align: middle;
  }

  .insuredCityInfo .participantsRight img{
    width:.375rem;
    height: .65rem;
    vertical-align: middle;
  }
  .insuredCityInfo .participantsRight span{
    width:1.05rem;
    height: 1rem;
    font-family:PingFangSC-Regular;
    color: #333333;
    font-size: .7rem;
    vertical-align: middle;
  }
  .insuredCity{
    padding:0 .8rem;
  }

  .insuredCity p{
    color: #B2B2B2;
    font-size: .6rem;
  }
  .insuredCity p em{
    font-style: normal;
    color: #F97A2E;
  }
  .cityfoot{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .addInfo{
    color: #333333;
    font-size: .7rem;
  }
</style>
