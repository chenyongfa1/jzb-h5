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
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Button} from "vant";
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Area } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Tab, Tabs } from 'vant';
import { Toast } from 'vant'
import { Uploader } from 'vant';
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Divider } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { DatetimePicker } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import WechatTitle from 'vue-wechat-title'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = Axios
Vue.prototype.HOST = 'http://www.jzbshebao.cn'
Vue.prototype.Img = 'http://www.jzbshebao.cn'
Vue.prototype.$md5 = md5
Vue.prototype.$toast = Toast
Vue.prototype.common = common.common


Vue.use(VueAxios,Axios)
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

/* eslint-disable no-new */
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
   document.title = to.meta.title
  }
  next()
})
let loginState = JSON.parse(window.localStorage.getItem('userInfo')) || undefined
router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth ){
    if(loginState != undefined){
      next()
    }else{
      next({
        path:'/login',
      })
    }
  }else {
    next()
  }

})
/*router.beforeEach(( to, from, next ) => {
  if (to.name != 'auth') {//判断当前是否是新建的auth路由空白页面
    let _token = sessionStorage.getItem('wechataccess_token');
    if (!_token) {//如果没有token,则让它授权
      //保存当前路由地址，授权后还会跳到此地址
      sessionStorage.setItem('beforeUrl', to.fullPath);
      console.log(1)
      //授权请求,并跳转http://m.water.ui-tech.cn/auth路由页面
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx37f1f33e98ab4327&redirect_uri=http%3A%2F%2Fwww.jzbshebao.cn%2Fapp%2Fwechat%2FgetUserInfo&response_type=code&scope=snsapi_userinfo&state=5www4ynq#wechat_redirect';
    } else {
      next();
    }
  } else {
    next();
  }
})*/



/*let wxLogin = JSON.parse(window.localStorage.getItem('wxLogin')) || undefined
//判断是否微信浏览器
console.log(wxLogin)
function isWeixinBrowser() {
  var ua = navigator.userAgent.toLowerCase();
  var result = (/micromessenger/.test(ua)) ? true : false;
  if (result) {
    let data = common.common.getsign()
    $.ajax({
      url: 'http://www.jzbshebao.cn/app/wechat/authLink',
      type: "POST",
      data: {
        sign: data.sign,
        time: data.time,
      },
      dataType: "JSON",
      success: function (r) {
        window.location.href = r.data.uri

      }
    })
  }
  return result;
};
if(wxLogin == undefined){
  isWeixinBrowser();
}*/

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  el: '#app',
  router,
  Axios,
  store,
  components: { App },
  template: '<App/>'
})
