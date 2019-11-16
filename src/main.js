// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import Router from 'vue-router'
import store from './vuex/store'//导入store.js
// import MintUI from 'mint-ui'
import md5 from 'js-md5'
import $ from 'jquery'
import common from "../static/js/common/common"
import {Tabbar, TabbarItem} from 'vant';
import {NavBar} from 'vant';
import {Button} from "vant";
import {Icon} from 'vant';
import {Swipe, SwipeItem} from 'vant';
import {Lazyload} from 'vant';
import {Area} from 'vant';
import {Popup} from 'vant';
import {Picker} from 'vant';
import {Tab, Tabs} from 'vant';
import {Toast} from 'vant'
import {Uploader} from 'vant';
import {Field} from 'vant';
import {Cell, CellGroup} from 'vant';
import {RadioGroup, Radio} from 'vant';
import {Divider} from 'vant';
import {Checkbox, CheckboxGroup} from 'vant';
import {DatetimePicker} from 'vant';
import {Collapse, CollapseItem} from 'vant';
import WechatTitle from 'vue-wechat-title'
import { Tag } from 'vant';
import { PullRefresh,List  } from 'vant';
import { ImagePreview } from 'vant';
import { CouponCell, CouponList } from 'vant';
import { Grid, GridItem } from 'vant';
import clipboard from 'clipboard';
import { Step, Steps } from 'vant';






import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = Axios
//正式服
// Vue.prototype.HOST = 'https://www.jzbshebao.cn'
// Vue.prototype.Img = 'https://www.jzbshebao.cn'
// Vue.prototype.href= 'http://wx.jzbshebao.cn'
// 测试服
Vue.prototype.HOST = 'http://test.jzbshebao.cn'
Vue.prototype.Img = 'http://test.jzbshebao.cn'
// Vue.prototype.href= 'http://wxtest.jzbshebao.cn'
// 本地
Vue.prototype.href= 'localhost:8080'
Vue.prototype.$md5 = md5
Vue.prototype.$toast = Toast
Vue.prototype.common = common.common
Vue.prototype.clipboard = clipboard;


Vue.use(VueAxios, Axios)
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload);
Vue.use(Area);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Tab).use(Tabs);
Vue.use(Uploader)
Vue.use(WechatTitle)
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Divider);
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(DatetimePicker);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Tag)
Vue.use(PullRefresh).use(List);
Vue.use(ImagePreview);
Vue.use(CouponCell).use(CouponList);
Vue.use(Grid).use(GridItem);
Vue.use(Step).use(Steps);
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// let userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || undefined
// 判断邀请码
router.beforeEach((to, from, next)=>{
  if (to.meta.invitation) {
    /*let userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || undefined
    if(userInfo === undefined){
      let invitation = window.location.search
      let invitationCode = invitation.replace(/^.+invitation\=/, '').split("?")[0]
      if(invitationCode.length == 8 ){
        window.localStorage.setItem('invitation', JSON.stringify(invitationCode))
        next()
      }else {
        next()
      }
      next()
    }else {
      next()
    }*/
    let invitation = window.location.search
    let invitationCode = invitation.replace(/^.+invitation\=/, '').split("?")[0]
    if(invitationCode.length == 8 ){
      window.localStorage.setItem('invitation', JSON.stringify(invitationCode))
      next()
    }else {
      next()
    }
  }else {
    next()
  }
})
/**/
let ua = window.navigator.userAgent.toLowerCase()
if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  router.beforeEach((to, from, next) => {
    if (to.meta.wxrequireAuth) {
      let nowUrl = decodeURIComponent(window.location.href)
      let tmp = nowUrl.replace(/^.+tmp\=/, '').split("&")[0]
      let id = nowUrl.replace(/^.+id\=/, '').split("&")[0] || ""
      let phonenum = nowUrl.replace(/^.+phone_no\=/, '').split("&")[0]
      let headimgurl = nowUrl.replace(/^.+headimgurl\=/, '').split("&")[0]
      let balance = nowUrl.replace(/^.+balance\=/, '').split("&")[0]
      let nickname = nowUrl.replace(/^.+nickname\=/, '').split("&")[0]
      let sex = nowUrl.replace(/^.+sex\=/, '').split("&")[0]
      let userInfo = {
        id: id,
        phone_no: phonenum,
        headimgurl: headimgurl,
        balance: balance,
        nickname:nickname,
        sex:sex,
      }
      if(nowUrl.split('?')[1] !== undefined && nowUrl.split('?')[1].length >30){
        if (tmp == 100) {
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
          next()
          //没用绑定手机号码
        } else if(tmp == 1 || tmp == 2){
          let inputPhone = {
            tmp:tmp,
            id:id,
          }
          window.localStorage.setItem('inputPhone', JSON.stringify(inputPhone));
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
          next()
        }else {
          next()
        }
      }else {
        let userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || undefined
        if(userInfo === undefined){
          window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx37f1f33e98ab4327&redirect_uri=http%3A%2F%2Fwww.jzbshebao.cn%2Fapp%2Fwechat%2FgetUserInfo&response_type=code&scope=snsapi_userinfo&state=0pptiizf#wechat_redirect'"
        }else {
          next()
        }
        next()
      }
    } else {
      next()
    }
    if(to.meta.wxtmprequireAuth){
      let inputPhone = JSON.parse(window.localStorage.getItem('inputPhone')) || undefined
      if (inputPhone != undefined) {
        next({
          path: '/binding'
        })
      } else {
        next()
      }
    }else{
      next()
    }
  })
} else {
  router.beforeEach((to, from, next) => {
    let loginState = JSON.parse(window.localStorage.getItem('userInfo')) || undefined
    if (to.meta.requireAuth) {
      if (loginState != undefined) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    } else {
      next()
    }

  })
}




const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location)
}
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
