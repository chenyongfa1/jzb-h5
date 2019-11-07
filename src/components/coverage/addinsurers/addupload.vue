<template>
  <div class="addupdown">
    <div class="bgF6">
      <h3>请拍摄并上传您的身份证照片</h3>
      <div class="updownID pd16">
        <div class="upload">
          <div class="updownId1">
            <van-uploader :after-read="afterReadid1" v-model="fileList1"
                          :before-delete="afterDelete1" :max-count="1"/>
            <img class="uploadbg " src="static/images/coverage/uploadbg.png" alt="">
            <img class="uploadidbg" src="static/images/coverage/Frontid.png" alt="">
            <div class="shot">拍摄正面</div>
          </div>
          <div class="updownId2">
            <van-uploader :after-read="afterReadid2" class="updownInput" v-model="fileList2" :max-count="1"/>
            <img class="uploadbg" src="static/images/coverage/uploadbg.png" alt="">
            <img class="uploadidbg" src="static/images/coverage/backid.png" alt="">
            <div class="shot">拍摄反面</div>
          </div>
        </div>
        <p class="ps">注：本信息仅用于桔子保业务办理，绝不泄漏或他用</p>
      </div>
    </div>
    <div class="addupinfo">
      <van-cell-group>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            v-model="username"
            label="姓名"
            type="text"
            placeholder="请填写真实姓名"
          />
        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            label="性别"
          />
          <van-radio-group v-model="sex">
            <van-radio name="1">
              男
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
            <van-radio name="2">
              女
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
          </van-radio-group>

        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            v-model="phone"
            label="手机号码"
            type="number"
            maxlength="11"
            placeholder="请填写手机号码"
          />

        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            v-model="id_no"
            label="身份证号码"
            type="text"
            maxlength="18"
            placeholder="请填写身份证号码"
          />
        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            label="户口性质"
          />
          <van-radio-group v-model="agriculture">
            <van-radio name="1">
              农村户口
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
            <van-radio name="2">
              城镇户口
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
          </van-radio-group>
        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            v-model="id_info"
            label="户口信息"
            type="text"
            placeholder="请填写户口详细地址"
          />
        </div>
        <div class="pore" @click="isNationShow">
          <div class="xing">*</div>
          <van-field
            v-model="nation"
            label="民族"
            type="text"
            placeholder="请选择"
            disabled
            right-icon="arrow"
            @click-right-icon="isNationShow"
            label-class="nationShow"
          />
        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            label="婚姻状况"
          />
          <van-radio-group v-model="marriage">
            <van-radio name="1">
              未婚
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
            <van-radio name="2">
              已婚
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
          </van-radio-group>

        </div>
        <div class="pore" @click="isWork">
          <div class="xing">*</div>
          <van-field
            v-model="workType"
            label="工作类型"
            type="text"
            placeholder="请选择"
            disabled
            right-icon="arrow"
            @click-right-icon="isWork"
            label-class="workShow"
          />

        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            v-model="emergency_contact"
            label="紧急联系人"
            type="text"
            placeholder="请填写紧急联系人姓名"
          />
        </div>
        <div class="pore">
          <div class="xing">*</div>
          <van-field
            v-model="emergency_phone"
            label="手机号码"
            type="number"
            maxlength="11"
            placeholder="请填写紧急联系人号码"
          />
        </div>
        <div class="pore noneed">
          <van-field
            v-model="social_no"
            label="社保电脑号"
            type="number"
            maxlength="9"
            placeholder="请填写"
          />
        </div>
        <div class="pore noneed">
          <van-field
            v-model="accumulation_no"
            label="公积金账号"
            type="number"
            maxlength="11"
            placeholder="请填写"
          />
        </div>
        <div class="pore noneed" @click="isEducat">
          <van-field
            v-model="educat"
            label="学历"
            type="text"
            placeholder="请选择"
            disabled
            right-icon="arrow"
            @click-right-icon="isEducat"
            label-class="eduShow"
          />

        </div>
        <div class="pore noneed" @click="toast">
          <van-field
            v-model="resume"
            label="上传简历"
            type="text"
            placeholder="我们将为您免费推荐工作"
            disabled
            right-icon="arrow"
          />
        </div>
        <div class="pore noneed" @click="toast">
          <van-field
            v-model="other"
            label="其他资料上传"
            type="text"
            placeholder="支持JPG、PDF、WORD、EXCEL"
            disabled
            right-icon="arrow"
          />
        </div>
      </van-cell-group>
    </div>
    <div class="pd16 bgF6">
      <p class="psoption">注：*号为必填项</p>
      <div class="addpartic" @click="saveBtn">保存</div>
    </div>
    <van-popup v-model="isShow" position="bottom" :overlay="true">
      <van-picker show-toolbar @cancel="cancel" @confirm="emergencyConfirm" :title="title"
                  :columns="columns"/>
    </van-popup>
    <van-popup
      v-model="isWorkType"
      round
      position="bottom"
      :style="{ height: '14.1rem' }">
      <h2 class="up-title">{{title}}</h2>
      <van-divider hairline/>
      <div class="addeducation">
        <div class="educationradio">
          <van-radio-group v-model="typeRadio1">
            <van-radio :name="index" v-for="(item, index) in education" :key="index">
              {{item.name}}
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="addBtn">
        <div @click="cancel">取消</div>
        <div @click="workConfirm">确定</div>
      </div>
    </van-popup>
    <van-popup
      v-model="isShow1"
      round
      position="bottom"
      :style="{ height: '14.1rem' }">
      <h2 class="up-title">{{title}}</h2>
      <van-divider hairline/>
      <div class="addeducation">
        <div class="educationradio">
          <van-radio-group v-model="typeRadio2">
            <van-radio :name="index" v-for="(item, index) in education" :key="index">
              {{item.name}}
              <img
                slot="icon"
                slot-scope="props"
                class="radioImg"
                :src="props.checked ? icon.active : icon.inactive"
              >
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="addBtn">
        <div @click="cancel">取消</div>
        <div @click="eduConfirm">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {Uploader} from 'vant';
    import header from "../../common/header";
    import { ImagePreview } from 'vant';

    Vue.use(ImagePreview);
    Vue.use(Uploader);
    export default {
        name: "addupload",
        data() {
            return {
                fileList1: [],
                fileList2: [],
                columns: [],
                title: '我是标题',
                isShow: false,
                isShow1: false,
                username: '',
                phone: '',
                id_no: '',
                id_info: '',
                nationId: '',
                workType: '',
                resume: '',
                other: '',
                workArr: [],
                eduArr: [],
                isWorkType: false,
                emergency_contact: "",
                emergency_phone: '',
                accumulation_no: '',
                social_no: "",
                nation: '',
                educat: '',
                sex: '1',
                typeRadio2: 0,
                marriage: '1',
                agriculture: '1',
                iseducat: '1',
                typeRadio1: 0,
                icon: {
                    active: 'static/images/coverage/select.png',
                    inactive: 'static/images/coverage/unselect.png'
                },
                education: "",
                addJson: {
                    id_front: '',
                    id_back: '',
                    username: '',
                    sex: '',
                    phone: '',
                    id_no: '',
                    id_info: '',
                    agriculture: '',
                    nationId: '',
                    marriage: '',
                    workId: '',
                    emergency_contact: '',
                    emergency_phone: '',
                    social_no: '',
                    accumulation_no: '',
                    educatId: '',
                },
            }
        },
        methods: {
            afterReadid1(file) {
                let fd = new FormData()
                fd.append('file', file.file)
                $('.updownId1 .uploadbg').css("display", "none")
                $('.updownId1 .uploadidbg').css("display", "none")
                $('.updownId1 .shot').css("display", "none")
                let that = this
                this.$ajax.post(this.HOST + '/app/common/upload_file', fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((r) => {
                    if (r.data.status == 200) {
                        that.addJson.id_front = r.data.data.img_url
                        that.$toast({
                            message: "上传成功",
                        })
                        setTimeout(function () {
                            $('.updownId1 .van-icon-delete').eq(0).css({
                                fontSize:'1.4rem'
                            })
                            $('.updownId1 .van-uploader__preview-image img').eq(0).click(function () {
                                ImagePreview({
                                    images: [
                                        this.Img+that.addJson.id_front,
                                        // 'http://www.jzbshebao.cn/Uploads/Public/Uploads/2019-09-20/5d84a21745644.png'
                                    ],
                                    startPosition: 1,
                                    onClose() {
                                    }
                                });
                            })
                            $('.updownId1 .van-icon-delete').eq(0).click(function () {
                                $('.updownId1 .uploadbg').css("display", "block")
                                $('.updownId1 .uploadidbg').css("display", "block")
                                $('.updownId1 .shot').css("display", "block")
                            })
                        })
                    } else {
                        /*that.$toast({
                            message: "请重新上传",
                        })*/
                    }
                })
            },
            afterReadid2(file) {
                let fd = new FormData()
                fd.append('file', file.file)
                $('.updownId2 .uploadbg').css("display", "none")
                $('.updownId2 .uploadidbg').css("display", "none")
                $('.updownId2 .shot').css("display", "none")
                let that = this
                this.$ajax.post(this.HOST+'/app/common/upload_file', fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((r) => {
                    if (r.data.status == 200) {
                        that.addJson.id_back = r.data.data.img_url
                        that.$toast({
                            message: "上传成功",
                        })
                        setTimeout(function () {
                            $('.updownId2 .van-icon-delete').eq(0).css({
                                fontSize:'1.4rem'
                            })
                            $('.updownId2 .van-uploader__preview-image img').eq(0).click(function () {
                                ImagePreview({
                                    images: [
                                        this.Img+that.addJson.id_back,
                                    ],
                                    startPosition: 1,
                                    onClose() {
                                    }
                                });

                            })
                            $('.updownId2 .van-icon-delete').eq(0).click(function () {
                                $('.updownId2 .uploadbg').css("display", "block")
                                $('.updownId2 .uploadidbg').css("display", "block")
                                $('.updownId2 .shot').css("display", "block")
                            })
                        })
                    } else {
                        /*that.$toast({
                            message: "请重新上传",
                        })*/
                    }
                })
            },
            afterDelete1(file){
                $('.updownId1 .uploadbg').css("display", "block")
                $('.updownId1 .uploadidbg').css("display", "block")
                $('.updownId1 .shot').css("display", "block")
                return true;
            },
            aa(){

            },
            cancel() {
                this.isShow = false
                this.isShow1 = false
                this.isWorkType = false
            },
            eduConfirm() {
                this.isShow1 = false
                this.addJson.educatId = this.typeRadio2 + 1;
                let value = this.eduArr[this.typeRadio2]
                $('.eduShow').next().find('.van-field__control').attr('placeholder', value)
            },
            workConfirm() {
                this.isWorkType = false
                this.addJson.workId = this.typeRadio1 + 1
                let value = this.workArr[this.typeRadio1]
                $('.workShow').next().find('.van-field__control').attr('placeholder', value)
            },
            // 选择民族确定按钮
            emergencyConfirm(value, index) {
                this.isShow = false
                $('.nationShow').next().find('.van-field__control').attr('placeholder', value)
                let natId = Number(index) + 1
                this.addJson.nationId = natId
            },
            // 获取民族
            isNationShow() {
                this.title = "民族"
                this.isShow = true
                let that = this
                let data = this.common.getsign()
                $.ajax({
                    url: this.HOST + '/app/common/getNation',
                    type: "POST",
                    data: {
                        time: data.time,
                        sign: data.sign
                    },
                    dataType: "JSON",
                    success: function (r) {
                        if (r.status == 200) {
                            let navVal = []
                            let navId = []
                            let val = r.data.map((item, index) => {
                                navVal.push(item.name)
                                navId.push(item.id)
                            })
                            that.columns = [
                                {
                                    id: navId,
                                    values: navVal,
                                }
                            ]
                        } else {

                        }
                    }
                })
            },
            // 获取工作
            isWork() {
                // this.isWork = true
                this.isWorkType = true
                this.title = "工作"
                let that = this
                let data = this.common.getsign()
                $.ajax({
                    url: this.HOST + '/app/common/getWork',
                    type: "POST",
                    data: {
                        time: data.time,
                        sign: data.sign
                    },
                    dataType: "JSON",
                    success: function (r) {
                        if (r.status == 200) {
                            that.education = r.data
                            r.data.map(item => that.workArr.push(item.name))
                        } else {

                        }
                    }
                })
            },
            // 获取学历
            isEducat() {
                this.isShow1 = true
                this.title = "工作"
                let that = this
                let data = this.common.getsign()
                $.ajax({
                    url: this.HOST + '/app/common/getStudy',
                    type: "POST",
                    data: {
                        time: data.time,
                        sign: data.sign
                    },
                    dataType: "JSON",
                    success: function (r) {
                        if (r.status == 200) {
                            that.education = r.data
                            r.data.map(item => that.eduArr.push(item.name))
                        } else {
                            that.$toast({
                                message: r.message,
                            })
                        }
                    }
                })
            },
            saveBtn() {
                let addJsonArr = []
                let that = this
                let addParticipants = "";
                this.addJson.username = this.username;
                this.addJson.sex = this.sex
                this.addJson.phone = this.phone
                this.addJson.id_no = this.id_no
                this.addJson.agriculture = this.agriculture
                this.addJson.id_info = this.id_info
                this.addJson.marriage = this.marriage
                this.addJson.emergency_contact = this.emergency_contact
                this.addJson.emergency_phone = this.emergency_phone
                this.addJson.social_no = this.social_no
                this.addJson.accumulation_no = this.accumulation_no
                addParticipants = this.addJson
                if (!this.addJson.id_front) {
                    this.$toast({
                        message: "请上传身份证正面图片",
                    })
                } else if (!this.addJson.id_back) {
                    this.$toast({
                        message: "请上传身份证反面图片",
                    })
                } else if (!this.addJson.username) {
                    this.$toast({
                        message: "填写名字",
                    })
                } else if (!this.addJson.phone) {
                    this.$toast({
                        message: "填写手机号码",
                    })
                } else if (!this.addJson.id_no) {
                    this.$toast({
                        message: "填写手身份证号码",
                    })
                } else if (!this.addJson.id_info) {
                    this.$toast({
                        message: "填写户口信息",
                    })
                } else if (!this.addJson.nationId) {
                    this.$toast({
                        message: "请选择民族",
                    })
                } else if (!this.addJson.workId) {
                    this.$toast({
                        message: "请选择工作",
                    })
                } else if (!this.addJson.emergency_contact) {
                    this.$toast({
                        message: "请填写紧急联系人",
                    })
                } else if (!this.addJson.emergency_phone) {
                    this.$toast({
                        message: "请填写紧急联系人手机号码",
                    })
                } else {
                    let data = this.common.getsign()
                    window.localStorage.setItem("addJson", JSON.stringify(this.addJson))
                    let addJson = JSON.parse(window.localStorage.getItem("addJson"))
                    let UserId = JSON.parse(window.localStorage.getItem("userInfo")).id
                    $.ajax({
                        url: this.HOST + '/app/user/addAccount',
                        type: "POST",
                        data: {
                            user_id: UserId,
                            id_front: addJson.id_front,
                            id_back: addJson.id_back,
                            name: addJson.username,
                            sex: addJson.sex,
                            phone_no: addJson.phone,
                            id_no: addJson.id_no,
                            id_type: addJson.agriculture,
                            id_info: addJson.id_info,
                            nation: addJson.nationId,
                            marry: addJson.marriage,
                            work_type: addJson.workId,
                            emergency_contact: addJson.emergency_contact,
                            emergency_phone: addJson.emergency_phone,
                            social_no: addJson.social_no,
                            accumulation_no: addJson.accumulation_no,
                            education: addJson.educatId,
                        },
                        dataType: "JSON",
                        success: function (r) {
                            if (r.status == 200) {
                                that.$toast({
                                    message:'保存成功'
                                })
                                that.$router.push({
                                    name: 'myparticipants'
                                })

                            } else {
                                that.$toast({
                                    message:r.message
                                })
                            }
                        }
                    })
                }
            },
            toast(){
                this.$toast({
                    message:'即将上线，敬请期待',
                    duration:Number(1500)
                })
            },
        },
        mounted() {
            this.aa()
        }
    }
</script>

<style scoped>
  .bgF6 {
    background: #F6F6F6;
  }

  .addupdown h3 {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #333;
    padding: .75rem .8rem;
  }

  .upload {
    display: flex;
    justify-content: space-between;
  }

  .ps {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #666;
    text-align: center;
    padding: .75rem 0;
  }

  .updownId1 {
    position: relative;
    width: 8.15rem;
    height: 6.3rem;
  }

  .updownId1 .uploadbg {
    width: 8.15rem;
    position: absolute;
    top: 0;
  }

  .updownId2 {
    position: relative;
    width: 8.15rem;
    height: 6.3rem;
  }

  .updownId2 .uploadbg {
    width: 8.15rem;
    position: absolute;
    top: 0;
  }

  .uploadidbg {
    position: absolute;
    top: .8rem;
    left: 1.45rem;
    width: 5.25rem;

  }

  .shot {
    position: absolute;
    bottom: 0rem;
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    color: #fff;
    background: #F97A2E;
    width: 100%;
    text-align: center;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 0px 0px .5rem .5rem;
  }

  .pore {
    position: relative;
    display: flex;
    border-bottom: 1px solid #E6E6E6;
  }

  .xing {
    line-height: 2.2rem;
    padding-left: .7rem;
    z-index: 0;
    color: #F97A2E;
  }

  .xing2 {
    position: absolute;
    left: 4rem;
    top: .6rem;
    z-index: 0;
    color: #F97A2E;
  }

  .xing3 {
    position: absolute;
    left: 4.5rem;
    top: .6rem;
    z-index: 0;
    color: #F97A2E;
  }

  .radioImg {
    width: .65rem;
  }

  .psoption {
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #F42121;
    padding: .6rem 0
  }

  .addupinfo .van-radio-group {
    position: absolute;
    z-index: 0;
    display: flex;
    top: .5rem;
    left: 5.2rem;
    font-size: .6rem;
    font-family: PingFangSC-Regular;
    color: #666;
  }

  .addupinfo .van-radio:nth-child(1) {
    padding-right: 2rem;
  }

  .addpartic {
    display: block;
    width: 16rem;
    height: 2rem;
    background: #F97A2E;
    margin: 0 auto .5rem;
    line-height: 2rem;
    text-align: center;
    font-size: .8rem;
    color: #fff;
    border-radius: 2rem;
  }

  /*学历*/
  .educationradio {
    position: relative;
  }

  .up-title {
    font-size: .7rem;
    font-family: PingFangSC-Regular;
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    color: #666;
  }

  .van-divider {
    margin: 0;
  }

  .addeducation .van-radio-group {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2rem;
  }

  .addeducation .van-radio {
    width: calc(100% / 3);
    height: 3rem;
    display: flex;
  }

  .addBtn {
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
  }

  .addBtn div {
    width: 6.85rem;
    height: 1.95rem;
    line-height: 1.95rem;
    text-align: center;
    font-size: .7rem;
  }

  .addBtn div:nth-child(2) {
    background: #f97a2e;
    color: #fff;
  }
  .noneed{
    padding-left: 1rem;
  }
</style>
