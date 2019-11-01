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
import Forgetpassword from '@/components/my/forgetpassword'
import Orangepartners from '@/components/my/orangepartners/index'
import Partnerlevel from '@/components/my/orangepartners/partnerlevel'
import myTeam from '@/components/my/myteam/index'
import Invoice from '@/components/my/invoice/index'
import Applicationinvoice from '@/components/my/invoice/applicationinvoice'
import Share from '@/components/my/share/index'
import Mybalance from '@/components/my/mybalance/index'
import Helpandfeedback from '@/components/my/helpandfeedback/helpandfeedback'
import FillPhone from '@/components/my/fillphone/index'
import Socialsecuritytransfer from '@/components/index/socialsecuritytransfer/index'
import Newspage from '@/components/index/newspage/index'
import Myorder from '@/components/my/myorder/index'
import Changepassword from '@/components/my/set/changepassword/index'
import Changepassword1 from '@/components/my/set/changepassword/changepassword'
import Myteamdetail from '@/components/my/myteam/myteamdetail'
import Schedulequery from '@/components/my/schedulequery/index'
import Companyprofile from '@/components/my/about/companyprofile'
import Qualification from '@/components/my/about/qualification'
import About from '@/components/my/about/index'
import Myinfo from '@/components/my/myinfo'
import Addedservice from '@/components/my/addedservice/index'
import Mycoupon from '@/components/my/mycoupon'
import Payback from '@/components/explain/payback'
import Payback1 from '@/components/explain/payback1'
import Cooperationagreement from '@/components/explain/cooperationagreement'
import Socialsecuritydetailed from '@/components/explain/socialsecuritydetailed'
import Computationalresults from '@/components/computationalresults/index'
import Funddetails from '@/components/computationalresults/Funddetails'
import Socialdetails from '@/components/computationalresults/socialdetails'
import Agreement from '@/components/explain/agreement'
import Funddetailed from '@/components/explain/funddetailed'
import Payinfo from '@/components/payinfo/payinfo'
import Orderdetail from '@/components/orderdetail/index'
import Unpaidinfo from '@/components/orderdetail/unpaidinfo'
import Set from '@/components/my/set/index'
import Newpages from '@/components/newpages/index'
import Newpagedetail from '@/components/newpages/newpagedetail'
import Test from '@/components/test/index'
import Auto from '@/components/test/auto'
import Wxpay from '@/components/socialsecurity/socialsecurity2/wxpay'
import Insuredperson from '@/components/my/insuredperson/index'
import Addpersonbox from '@/components/my/insuredperson/addpersonbox'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        footShow: true,
        title: "首页",
        isTitle: false,
        isFootEmty: true,
        requireAuth: false,
        wxrequireAuth: true,
        invitation:true,
      }
    },
    {
      path: '/socialsecurity',
      name: 'socialsecurity',
      component: Socialsecurity,
      meta: {
        footShow: true,
        title: "缴社保",
        isTitle: true,
        isLeft: false,
        isFootEmty: true,
        // keepAlive: true // 需要被缓存
        requireAuth: false
      }
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
      meta: {
        footShow: true,
        title: "计算器",
        isTitle: true,
        isFootEmty: true,
        requireAuth: false,
        isLeft: false,
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta: {
        footShow: true,
        title: "我的",
        isTitle: false,
        isFootEmty: true,
        requireAuth: true,
        wxtmprequireAuth: true
      }
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder,
      meta: {
        footShow: false,
        title: "我的订单",
        isTitle: false,
        isFootEmty: false,
        requireAuth: true,
      }
    },
    {
      path: '/interdetai',
      name: 'interdetail',
      component: Interdetail,
      meta: {
        footShow: false,
        title: "文章详情页",
        isTitle: true,
        requireAuth: true
      }
    },
    {
      path: '/myparticipants',
      name: 'myparticipants',
      component: Myparticipants,
      meta: {
        footShow: false,
        title: "我的参保人",
        isTitle: true,
        isRight: false,
        requireAuth: true,
        wxrequireAuth: true,
        wxtmprequireAuth: true,

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
        isColor: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        footShow: false,
        title: "我的注册",
        isTitle: false,
        isRight: false,
      }
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: Forgetpassword,
      meta: {
        footShow: false,
        title: "忘记密码",
        isTitle: true,
        isRight: false,
      }
    },
    {
      path: '/codelogin',
      name: 'codelogin',
      component: CodeLogin,
      meta: {
        footShow: false,
        title: "验证码登录",
        isTitle: false,
        isRight: false,
      }
    },
    {
      path: '/fillphone',
      name: 'fillphone',
      component: FillPhone,
      meta: {
        footShow: false,
        title: "验证码登录",
        isTitle: false,
        isRight: false,
      }
    },
    {
      path: '/coverage',
      name: 'coverage',
      component: Coverage,
      meta: {
        footShow: false,
        title: "参保套餐",
        isTitle: true,
        isRight: true,
        requireAuth: false
      }
    },
    {
      path: '/payback',
      name: 'payback',
      component: Payback,
      meta: {
        footShow: false,
        title: "补缴说明",
        isTitle: true,
        isRight: true,
        isColor: false,
        // keepAlive: true // 需要被缓存
        // requireAuth: true
      }
    },
    {
      path: '/payback1',
      name: 'payback1',
      component: Payback1,
      meta: {
        footShow: false,
        title: "补缴说明",
        isTitle: true,
        isRight: true,
        isColor: false,
        // keepAlive: true // 需要被缓存
        // requireAuth: true
      }
    },
    {
      path: '/cooperationagreement',
      name: 'cooperationagreement',
      component: Cooperationagreement,
      meta: {
        footShow: false,
        title: "桔子伙伴合作协议",
        isTitle: true,
        isRight: false,
        isColor: true,
        // keepAlive: true // 需要被缓存
        // requireAuth: true
      }
    },
    {
      path: '/addinsurers',
      name: 'addinsurers',
      component: Addinsurers,
      meta: {
        footShow: false,
        title: "新增参保人",
        isTitle: true,
        isRight: true,
        isColor: false,
        requireAuth: true
      }
    },
    {
      path: '/socialsecuritytransfer',
      name: 'socialsecuritytransfer',
      component: Socialsecuritytransfer,
      meta: {
        footShow: false,
        title: "社保转移",
        isTitle: true,
        isRight: true,
        isColor: false,
        requireAuth: true
      }
    },
    {
      path: '/newspage',
      name: 'newspage',
      component: Newspage,
      meta: {
        footShow: false,
        title: "新闻详情页",
        isTitle: true,
        isRight: true,
        isColor: false,
        requireAuth: true
      }
    },
    {
      path: '/newpagedetail',
      name: 'newpagedetail',
      component: Newpagedetail,
      meta: {
        footShow: false,
        title: "新闻详情页",
        isTitle: true,
        isRight: true,
        isColor: false,
        requireAuth: true
      }
    },
    {
      path: '/socialsecurity1',
      name: 'socialsecurity1',
      component: Socialsecurity1,
      meta: {
        footShow: false,
        title: "缴社保",
        isTitle: true,
        isColor: true,
        isFootEmty: true,
        keepAlive: true, // 需要被缓存
        requireAuth: true
      }
    },
    {
      path: '/socialsecurity2',
      name: 'socialsecurity2',
      component: Socialsecurity2,
      meta: {
        footShow: false,
        title: "缴社保",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        requireAuth: true
      }
    },
    {
      path: '/socialsecuritydetailed',
      name: 'socialsecuritydetailed',
      component: Socialsecuritydetailed,
      meta: {
        footShow: false,
        title: "社保费用明细",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        isRight: false,
        requireAuth: true
      }
    },
    {
      path: '/funddetailed',
      name: 'funddetailed',
      component: Funddetailed,
      meta: {
        footShow: false,
        title: "公积金费用明细",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        isRight: false,
        requireAuth: true
      }
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement,
      meta: {
        footShow: false,
        title: "桔子保服务协议",
        isTitle: true,
        isColor: true,
        isFootEmty: true,
        isRight: false,
        requireAuth: true
      }
    },
    {
      path: '/computationalresults',
      name: 'computationalresults',
      component: Computationalresults,
      meta: {
        footShow: false,
        title: "计算结果",
        isTitle: true,
        isColor: true,
        isFootEmty: true,
        isRight: false,
        requireAuth: false
      }
    },
    {
      path: '/payinfo',
      name: 'payinfo',
      component: Payinfo,
      meta: {
        footShow: false,
        title: "支付成功",
        isTitle: true,
        isColor: true,
        isFootEmty: true,
        isRight: false,
        requireAuth: true
      }
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      component: Orderdetail,
      meta: {
        footShow: false,
        title: "订单详情",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        isRight: true,
        requireAuth: true
      }
    },
    {
      path: '/unpaidinfo',
      name: 'unpaidinfo',
      component: Unpaidinfo,
      meta: {
        footShow: false,
        title: "订单详情",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        isRight: true,
        requireAuth: true
      }
    },
    {
      path: '/set',
      name: 'set',
      component: Set,
      meta: {
        footShow: false,
        title: "设置",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        isRight: false,
        keepAlive: true, // 需要被缓存
        requireAuth: true
      }
    },
    {
      path: '/newpages',
      name: 'newpages',
      component: Newpages,
      meta: {
        footShow: false,
        title: "咨询详情",
        isTitle: true,
        isColor: false,
        isFootEmty: true,
        isRight: false,
        keepAlive: false, // 需要被缓存
        requireAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        footShow: false,//标题导航栏显示
        title: "设置",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false//路由拦截
      }
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: Myinfo,
      meta: {
        footShow: false,//标题导航栏显示
        title: "我的信息",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: true//路由拦截
      }
    },
    {
      path: '/socialdetails',
      name: 'socialdetails',
      component: Socialdetails,
      meta: {
        footShow: false,//标题导航栏显示
        title: "社保计算器",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: true,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false//路由拦截
      }
    },
    {
      path: '/funddetails',
      name: 'funddetails',
      component: Funddetails,
      meta: {
        footShow: false,//标题导航栏显示
        title: "社保计算器",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: true,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false//路由拦截
      }
    },
    {
      path: '/mycoupon',
      name: 'mycoupon',
      component: Mycoupon,
      meta: {
        footShow: false,//标题导航栏显示
        title: "优惠券",
        isTitle: true,//标题显示
        isColor: true,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: true,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: true//路由拦截
      }
    },
    {
      path: '/addedservice',
      name: 'addedservice',
      component: Addedservice,
      meta: {
        footShow: false,//标题导航栏显示
        title: "增值服务",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: true,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: true//路由拦截
      }
    },
    {
      path: '/companyprofile',
      name: 'companyprofile',
      component: Companyprofile,
      meta: {
        footShow: false,//标题导航栏显示
        title: "公司简介",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/qualification',
      name: 'qualification',
      component: Qualification,
      meta: {
        footShow: false,//标题导航栏显示
        title: "公司资质",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/myteam',
      name: 'myteam',
      component: myTeam,
      meta: {
        footShow: false,//标题导航栏显示
        title: "我的团队",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice ,
      meta: {
        footShow: false,//标题导航栏显示
        title: "发票服务",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: true,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/applicationinvoice',
      name: 'applicationinvoice',
      component: Applicationinvoice ,
      meta: {
        footShow: false,//标题导航栏显示
        title: "申请开票",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: true,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/share',
      name: 'share',
      component: Share,
      meta: {
        footShow: false,//标题导航栏显示
        title: "乐桔分享",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/myteamdetail',
      name: 'myteamdetail',
      component: Myteamdetail,
      meta: {
        footShow: false,//标题导航栏显示
        title: "我的团队",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/schedulequery',
      name: 'schedulequery',
      component: Schedulequery,
      meta: {
        footShow: false,//标题导航栏显示
        title: "查询订单",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: true, // 需要被缓存
        requireAuth: true //路由拦截
      }
    },
    {
      path: '/mybalance',
      name: 'mybalance',
      component: Mybalance,
      meta: {
        footShow: false,//标题导航栏显示
        title: "我的余额",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: Changepassword,
      meta: {
        footShow: false,//标题导航栏显示
        title: "账号安全",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/changepassword1',
      name: 'changepassword1',
      component: Changepassword1,
      meta: {
        footShow: false,//标题导航栏显示
        title: "修改密码",
        isTitle: true,//标题显示
        isColor: false,//导航栏颜色
        isFootEmty: true,//填充底部导航栏
        isRight: false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth: false //路由拦截
      }
    },
    {
      path: '/insuredperson',
      name: 'insuredperson',
      component:Insuredperson,
      meta: {
        footShow: false,//标题导航栏显示
        title:"设置",
        isTitle:true,//标题显示
        isColor:false,//导航栏颜色
        isFootEmty:true,//填充底部导航栏
        isRight:false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth:true//路由拦截
      }
    },
    {
      path: '/addpersonbox',
      name: 'addpersonbox',
      component:Addpersonbox,
      meta: {
        footShow: false,//标题导航栏显示
        title:"参保人设置",
        isTitle:true,//标题显示
        isColor:false,//导航栏颜色
        isFootEmty:true,//填充底部导航栏
        isRight:false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth:true//路由拦截
      }
    },
    {
      path: '/helpandfeedback',
      name: 'helpandfeedback',
      component:Helpandfeedback,
      meta: {
        footShow: false,//标题导航栏显示
        title:"帮助与反馈",
        isTitle:true,//标题显示
        isColor:false,//导航栏颜色
        isFootEmty:true,//填充底部导航栏
        isRight:false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth:true//路由拦截
      }
    },
    {
      path: '/orangepartners',
      name: 'orangepartners',
      component:Orangepartners,
      meta: {
        footShow: false,//标题导航栏显示
        title:"桔子伙伴",
        isTitle:true,//标题显示
        isColor:false,//导航栏颜色
        isFootEmty:true,//填充底部导航栏
        isRight:false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth:true//路由拦截
      }
    },
    {
      path: '/partnerlevel',
      name: 'partnerlevel',
      component:Partnerlevel,
      meta: {
        footShow: false,//标题导航栏显示
        title:"桔子伙伴",
        isTitle:true,//标题显示
        isColor:false,//导航栏颜色
        isFootEmty:true,//填充底部导航栏
        isRight:false,//客服显示
        keepAlive: false, // 需要被缓存
        requireAuth:true//路由拦截
      }
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        footShow: false,
        title: "测试",
        isTitle: true,
        isColor: true,
        isFootEmty: true,
      }
    },

    {
      path: '/auto',
      name: 'auto',
      component: Auto,
    },
    {
      path: '/wxpay',
      name: 'wxpay',
      component: Wxpay,
    },
  ]
})
