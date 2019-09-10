import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Socialsecurity from '@/components/socialsecurity'
import Socialsecurity1 from '@/components/socialsecurity/socialsecurity1'
import Socialsecurity2 from '@/components/socialsecurity/socialsecurity2'
import Calculator from '@/components/calculator'
import My from '@/components/my'
import Interdetail from '@/components/interpretation/interdetail'
import Coverage from '@/components/coverage/index'
import Addinsurers from '@/components/coverage/addinsurers'
import Myparticipants from '@/components/myparticipants/index'
import Login from '@/components/my/login'
import CodeLogin from '@/components/my/codelogin'
import Register from '@/components/my/register'
import Payback from '@/components/explain/payback'
import Socialsecuritydetailed from '@/components/explain/socialsecuritydetailed'
import Funddetailed from '@/components/explain/funddetailed'
import Test from '@/components/test/index'
import Auto from '@/components/test/auto'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: Index,
      meta: {
        footShow: true,
        title:"首页",
        isTitle:false,
        isFootEmty:true,
        requireAuth:true
      }
    },
    {
      path: '/socialsecurity',
      name: 'socialsecurity',
      component: Socialsecurity,
      meta: {
        footShow: true,
        title:"缴社保",
        isTitle:true,
        isFootEmty:true,
        // keepAlive: true // 需要被缓存
        requireAuth:true
      }
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
      meta: {
        footShow: true,
        title:"计算器",
        isTitle:true,
        isFootEmty:true,
        requireAuth:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta: {
        footShow: true,
        title:"我的",
        isTitle:false,
        isFootEmty:true,
        requireAuth:true
      }
    },
    {
      path: '/interdetai',
      name: 'interdetail',
      component: Interdetail,
      meta: {
        footShow: false,
        title:"文章详情页",
        isTitle:true,
        requireAuth:true
      }
    },
    {
      path: '/myparticipants',
      name: 'myparticipants',
      component: Myparticipants,
      meta: {
        footShow: false,
        title:"我的参保人",
        isTitle:true,
        isRight:false,
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        footShow: false,
        title: "我的登录",
        isTitle: false,
        isRight: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        footShow: false,
        title:"我的注册",
        isTitle:false,
        isRight:false,
      }
    },
    {
      path: '/codelogin',
      name: 'codelogin',
      component: CodeLogin,
      meta: {
        footShow: false,
        title:"验证码登录",
        isTitle:false,
        isRight:false,
      }
    },
    {
      path: '/coverage',
      name: 'coverage',
      component: Coverage,
      meta: {
        footShow: false,
        title:"参保套餐",
        isTitle:true,
        isRight:true,
        requireAuth:true
      }
    },
    {
      path: '/payback',
      name: 'payback',
      component: Payback,
      meta: {
        footShow: false,
        title:"补缴说明",
        isTitle:true,
        isRight:true,
        isColor:false,
        // keepAlive: true // 需要被缓存
        requireAuth:true
      }
    },
    {
      path: '/addinsurers',
      name: 'addinsurers',
      component: Addinsurers,
      meta: {
        footShow: false,
        title:"新增参保人",
        isTitle:true,
        isRight:true,
        isColor:false,
        requireAuth:true
      }
    },
    {
      path: '/socialsecurity1',
      name: 'socialsecurity1',
      component: Socialsecurity1,
      meta: {
        footShow: false,
        title:"缴社保",
        isTitle:true,
        isColor:true,
        isFootEmty:true,
        keepAlive: true, // 需要被缓存
        requireAuth:true
      }
    },
    {
      path: '/socialsecurity2',
      name: 'socialsecurity2',
      component: Socialsecurity2,
      meta: {
        footShow: false,
        title:"缴社保",
        isTitle:true,
        isColor:false,
        isFootEmty:true,
        requireAuth:true
      }
    },
    {
      path: '/socialsecuritydetailed',
      name: 'socialsecuritydetailed',
      component: Socialsecuritydetailed,
      meta: {
        footShow: false,
        title:"社保费用明细",
        isTitle:true,
        isColor:false,
        isFootEmty:true,
        isRight:false,
        requireAuth:true
      }
    },
    {
      path: '/funddetailed',
      name: 'funddetailed',
      component: Funddetailed,
      meta: {
        footShow: false,
        title:"公积金费用明细",
        isTitle:true,
        isColor:false,
        isFootEmty:true,
        isRight:false,
        requireAuth:true
      }
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        footShow: false,
        title:"测试",
        isTitle:true,
        isColor:true,
        isFootEmty:true,
      }
    },
    {
      path: '/auto',
      name: 'auto',
      component: Auto,
    },
  ]
})
