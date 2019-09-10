import Vue from 'vue';//引用vue
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex
const store = new Vuex.Store({
  state: {
    payInfo1: 0.00,//社保明细
    isPayInfo1:true,
    payBackPrice1: 0.00,//社保补缴明细
    isPayBackPrice1:false,
    payInfo2: 0.00,//公积金明细
    isPayInfo2:false,
    payBackPrice2: 0.00,//公积金补缴明细
    isPayBackPrice2:false,
    socialdetail:{},
  },
  mutations: {
    payInfo1(state, msg) {
      state.payInfo1 = msg
    },
    payBackPrice1(state, msg) {
      state.payBackPrice1 = msg
    },
    payInfo2(state, msg) {
      state.payInfo2 = msg
    },
    payBackPrice2(state, msg) {
      state.payBackPrice2 = msg
    },
    isPayInfo1(state, msg){
      state.isPayInfo1 = msg
    },
    isPayInfo2(state, msg){
      state.isPayInfo2 = msg
    },
    isPayBackPrice1(state, msg){
      state.isPayBackPrice1 = msg
    },
    isPayBackPrice2(state, msg){
      state.isPayBackPrice2 = msg
    },
    socialdetail(state, msg){
      state.socialdetail = msg
    }
  }
})
export default store
