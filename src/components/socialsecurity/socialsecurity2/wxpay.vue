<template>
  <div class="wxpay">
      <div></div>
        <font color="#9ACD32"><b>该笔订单支付金额为<span style="color:#f00;font-size:50px">1分</span>钱</b></font><br /><br />
        <div align="center">
            <button  @click="callpay">立即支付</button>
        </div>
  </div>
</template>

<script>
    export default {
        name: "wxpay",
        data() {
            return {
                orderInfo:'',
                user_id:'',
                id:'',
                pagedata:{},
            }
        },
        methods: {
                //获取参数
            pagedatafn(){
                let that = this
            this.orderInfo = JSON.parse(window.localStorage.getItem('orderInfo')) || ""
            this.user_id = this.orderInfo.user_id
            this.id = this.orderInfo.id
                 $.ajax({
                    url: this.HOST+'/app/wechat/wxJspay',
                    type: "POST",
                    data: {
                        user_id: this.user_id,
                        id: this.id
                    },
                    dataType: "JSON",
                    success: function (r) {
                        let data =JSON.parse(r.data)
                        that.pagedata = {
                            'appId': data.appId,
                            'nonceStr': data.nonceStr,
                            'package': data.package,
                            'signType': "MD5",
                            'timeStamp': data.timeStamp,
                            'paySign': data.paySign,
                        }
                    }
                })


            },
            jsApiCall() {
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest',
                    this.pagedata,
                    function (res) {
                        WeixinJSBridge.log(res.err_msg);
                        alert(res.err_code + res.err_desc + res.err_msg);
                    }
                );
            },

           callpay() {
                if (typeof WeixinJSBridge == "undefined") {
                    if (document.addEventListener) {
                        document.addEventListener('WeixinJSBridgeReady', this.jsApiCall(), false);
                    } else if (document.attachEvent) {
                        document.attachEvent('WeixinJSBridgeReady', this.jsApiCall());
                        document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall());
                    }
                } else {
                    this.jsApiCall();
                }
            }
        },
        mounted(){
            this.pagedatafn()
        },
        watch: {

        },
        computed: {

        }
    }
</script>

<style scoped>
  .wxpay{

  }
</style>
