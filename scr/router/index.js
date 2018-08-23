import Vue from 'vue'
import Router from 'vue-router'
import home from '@page/home'
import empty from '@page/empty'
import advertisement from "./path/advertisement";
import client from "./path/client";
import game from "./path/game";
import lottery from "./path/lottery";
import live from "./path/live-casino";
import promotions from "./path/promotions";
import sports from "./path/sports";
import member from "./path/member";
import survey from "./path/survey";
import liveMatches from "./path/liveMatches";
import error from "./path/error";
import aboutUs from "./path/aboutUs";
import personal from "./path/personal";
import login from './path/login';
import help from "./path/help";
import cooperation from "./path/cooperation";
import registerGuide from "./path/registerGuide";
import phone from './path/phone'
let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: "首页"
    }
  }
];

routes = routes.concat(client, advertisement, game, lottery, live, promotions, sports, member, survey, liveMatches, error, aboutUs, personal, login, help, cooperation,registerGuide, phone)

Vue.use(Router);

const router = new Router({
  routes
});

router.afterEach( ( to,from,next ) => {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
 if (isIE) {
   router.push('error')
 }
  document.title = to.meta.title ;
});

export default router
