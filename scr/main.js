// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import '../my-theme/index.less';
import './assets/css/style.css';
// import './assets/css/animate.min.css'
import 'vue2-animate/dist/vue2-animate.min.css';
import 'swiper/dist/css/swiper.css';

// 由于中间层做了这个事所以前端不需要这两个 key 了
// import './utils/getKey';
import Footer from "./components/footer";
import Header from "./components/header";

import VueAwesomeSwiper from 'vue-awesome-swiper';
// import {vueAccordion} from '@/components/vue-accordion/index.js'


Vue.use(VueAwesomeSwiper);

Vue.use(iView);
Vue.component("vFooter",Footer);
Vue.component("vHeader",Header);
// Vue.component('vue-accordion', vueAccordion)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
