import personal from '@page/personal'
import setting from '@page/personal/setting'   //我的资料
import deposit from '@page/personal/deposit'   //存款
import withdraw from '@page/personal/withdraw' //提款
import transfer from '@page/personal/transfer' //转账
import record from '@page/personal/record'     //我的记录
import discount from '@page/personal/discount' //我的优惠
import msg from '@page/personal/msg'           //消息中心

const routes = [
  {
    path: '/personal',
    name: 'personal',
    redirect: "/setting",
    meta: {
      title: '个人中心'
    },
    component: personal,
    children: [
      {
        path: '/setting',
        name: 'setting',
        meta: {
          title: '个人中心'
        },
        component: setting
      },
      {
        path: '/deposit',
        name: 'deposit',
        meta: {
          title: '个人中心'
        },
        component: deposit
      },
      {
        path: '/withdraw',
        name: 'withdraw',
        meta: {
          title: '个人中心'
        },
        component: withdraw
      },

      {
        path: '/transfer',
        name: 'transfer',
        meta: {
          title: '个人中心'
        },
        component: transfer
      },
      {
        path: '/record',
        name: 'record',
        meta: {
          title: '个人中心'
        },
        component: record
      },

      {
        path: '/discount',
        name: 'discount',
        meta: {
          title: '个人中心'
        },
        component: discount
      },

      {
        path: '/msg',
        name: 'msg',
        meta: {
          title: '个人中心'
        },
        component: msg
      }
    ]
  }
];

export default routes
