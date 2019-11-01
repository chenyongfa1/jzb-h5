<template>
  <div class="insuredperson">
    <div class="back1">
      <van-icon name="arrow-left" @click="goupFn"/>
      <div class="contenttit">我的参保人</div>
      <div class="control" @click="controllistFn">管理</div>
    </div>
    <div class="humenbox">
      <div class="content">
        <div v-if="len==0">
          <Defailt/>
          <router-link :to="{name:'addinsurers'}" class="addpartic">新增参保人</router-link>
        </div>
        <div v-else>
          <div class="participantslist">
            <div
              v-for="(item,index) in partic"
              :key="index"
              class="paritem"
            >
              <div class="cheackbox" @click="checkboxFn(index)"></div>
              <div  class="participantsItem" @click="editName(item.name,item.id)">
                <div class="parname">{{item.name}}</div>
                <div class="paraddress">
                  <p v-if="item.id_type == 2">城镇户口</p>
                  <p v-else>农村户口</p>
                  <p>{{item.id_info}}</p>
                </div>
                <div class="parjzb">
                  <img class="cz_img" src="static/images/myparticipants/jzbImg.png" alt/>
                </div>
              </div>
            </div>
            <router-link :to="{name:'addinsurers'}" class="addpar" v-if="control==1">
              <img src="static/images/myparticipants/paradd.png" alt/>
              <p>添加参保人</p>
            </router-link>
            <div v-else class="del" @click="delconFn">删除</div>
            <van-popup v-model="socal1" round :style="{ width: '80%' }">
              <div class="deletecon">
                <div class="delettitle">
                  确定要删除参保人？
                </div>
                <div class="deletbtn">
                  <div @click="closeBtn">取消</div>
                  <div @click="delFn">确定</div>
                </div>
              </div>
            </van-popup>
          </div>
        </div>
        <inputPhone/>
      </div>
    </div>
  </div>
</template>

<script>
    import Defailt from "../../common/defailt";
    import inputPhone from "@/components/common/inputphone";

    export default {
        name: "insuredperson",
        components: {
            Defailt,
            inputPhone,
        },
        data() {
            return {
                len: "",
                partic: [],
                control: 1,
                delArr: [],
                socal1: false,
            };
        },
        mounted() {
            this.getAccountList();
        },
        methods: {
            delconFn() {
                this.socal1 = true
            },
            closeBtn() {
                this.socal1 = false
            },
            //删除
            delFn() {
                this.socal1 = false
                let delStr = this.delArr.join(',')
                let that = this
                $.ajax({
                    url: this.HOST + "/app/user/delAccount",
                    type: "POST",
                    data: {
                        id: delStr
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.getAccountList();
                    }
                });
            },
            //选择
            checkboxFn(index) {
                let conlist = $('.cheackbox').eq(index)
                if (conlist.hasClass('checkbg')) {
                    conlist.removeClass('checkbg')
                    this.delArr.splice($.inArray(this.partic[index].id, this.delArr), 1);
                } else {
                    conlist.addClass('checkbg')
                    this.delArr.push(this.partic[index].id)
                }
            },
            //点击管理改变样式
            controllistFn() {
                if (this.control == 1) {
                    $(".participantsItem").css('margin-left', '2.4rem');
                    $(".cheackbox").css('display', 'block');
                    this.control = 2
                } else {
                    $(".participantsItem").css('margin-left', '0.65rem')
                    $(".cheackbox").css('display', 'none');
                    this.control = 1
                }
            },
            //返回
            goupFn() {
                this.$router.go(-1);
            },
            //初始化数据
            getAccountList() {
                let data = this.common.getsign();
                let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
                let that = this;
                $.ajax({
                    url: this.HOST + "/app/user/accountList",
                    type: "POST",
                    data: {
                        time: data.time,
                        sign: data.sign,
                        user_id: userInfo.id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        that.len = r.data.length;
                        that.partic = r.data
                    }
                });
            },
            editName(name, id) {
                window.localStorage.setItem("particName", JSON.stringify(name));
                window.localStorage.setItem("particId", JSON.stringify(id));
                this.$router.push({
                    name: 'addpersonbox'
                })
                // window.location.href = "/socialsecurity";
            }
        }
    };
</script>

<style lang="scss" scoped>
  .insuredperson {
    .deletecon {
      height: 5.25rem;

      .delettitle {
        width: 100%;
        height: 3.25rem;
        line-height: 3.25rem;
        text-align: center;
        font-size: .9rem;
        color: #333;
      }

      .deletbtn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: calc(5.25rem - 3.25rem);
        border-top: 1px solid #E6E6E6;

        div {
          flex: 1;
          text-align: center;
          height: 2rem;
          line-height: 2rem;
          font-size: .8rem;
          color: #F97A2E;
        }

        div:nth-child(1) {
          border-right: 1px solid #E6E6E6;
          color: #666666;
        }
      }
    }

    .del {
      width: 12.8rem;
      height: 1.9rem;
      line-height: 1.9rem;
      text-align: center;
      margin: 1rem auto;
      border-radius: 30px;
      border: 0.025rem solid #E6E6E6;
    }
    .paritem{
      position: relative;
    }
    .paritem .checkbg {
      background: url('../../../../static/images/my/check.png') no-repeat;
      background-size: 100%;
    }

    .back1 {
      position: relative;
      height: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      color: #333;
      z-index: 22;
      position: fixed;
      font-size: 1rem;
    }

    .van-icon {
      position: absolute;
      top: 0.775rem;
      left: 0.725rem;
      color: #f97a2e;
    }

    .contenttit {
      font-size: 0.9rem;
      position: absolute;
      top: 0.675rem;
      left: 7.1rem;
    }

    .control {
      font-size: 0.7rem;
      position: absolute;
      top: 0.9rem;
      right: 1.5rem;
    }

    .humenbox {
      position: absolute;
      top: 2.2rem;
      width: 100%;
    }

    .van-cell__title {
      position: absolute;
      left: 3rem;
      top: 0.3rem;
    }

    .content {
      background: #fff;
      height: 100vh;
    }

    .addpartic {
      display: block;
      width: 16rem;
      height: 2.25rem;
      background: #f97a2e;
      margin: 5rem auto 0;
      line-height: 2.25rem;
      text-align: center;
      font-size: 0.9rem;
      color: #fff;
      border-radius: 2rem;
    }

    .participantslist {
      width: 100%;
      overflow: hidden;
    }

    .participantsItem {
      margin: .85rem .65rem;
      height: 4.575rem;
      background: url("../../../../static/images/myparticipants/parbg.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #fff;
      width: 92%;
    }

    .participantsItem .parname {
      font-size: 1.2rem;
      font-family: PingFangSC-Regular;
      width: 4rem;
      overflow: hidden;
    }

    .participantsItem .paraddress {
      font-size: .7rem;
      font-family: PingFangSC-Regular;
      display: flex;
      flex-direction: column;
    }

    .participantsItem .parjzb {
      margin-top: 1.5rem;
      width: 1.75rem;
      height: 2.35rem;
    }

    .cheackbox {
      width: 0.8rem;
      height: 0.8rem;
      position: absolute;
      left: 0.8rem;
      top:1.9rem;
      background: url('../../../../static/images/my/nocheck.png') no-repeat;
      background-size: 100%;
      z-index: 22;
      display: none;
    }

    .addpar {
      width: 4rem;
      height: 6rem;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    .addpar img {
      width: 2.875rem;
      height: 2.875rem;
    }

    .addpar p {
      font-size: .7rem;
      font-family: PingFangSC-Regular;
      color: #666;
    }
  }
</style>
