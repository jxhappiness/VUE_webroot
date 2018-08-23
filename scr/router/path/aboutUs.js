import Layout from '@page/aboutUs'
import ContactUs from '@page/aboutUs/components/ContactUs.vue'
import PrivacyPolicy from '@page/aboutUs/components/PrivacyPolicy.vue'
import LotteryDuty from '@page/aboutUs/components/LotteryDuty.vue'
import RuleItem from '@page/aboutUs/components/RuleItem.vue'

const routes = [
  {
    path: '/aboutUs',
    name: 'aboutUs',
    meta: { title: '关于我们'},
    component: Layout,
    redirect: { name: 'contactUs' },
    children: [
      {
        path: 'contactUs',
        name: 'contactUs',
        meta: { title: '联系我们'},
        component: ContactUs
      },
      {
        path: 'privacyPolicy',
        name: 'privacyPolicy',
        meta: { title: '隐私政策'},
        component: PrivacyPolicy
      },
      {
        path: 'lotteryDuty',
        name: 'lotteryDuty',
        meta: { title: '博彩责任'},
        component: LotteryDuty
      },
      {
        path: 'ruleItem',
        name: 'ruleItem',
        meta: { title: '规则条款'},
        component: RuleItem
      }
    ]
  }
];

export default routes
