// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
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
import 'swiper/dist/css/swiper.css'

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
let loginState = JSON.parse(window.localStorage.getItem('userInfo')) || undefined
console.log(loginState)
router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth ){
    if(loginState != undefined){
      console.log(1)
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

new Vue({
  el: '#app',
  router,
  Axios,
  components: { App },
  template: '<App/>'
})
