<template>
  <div class="headercon">
    <div id="top">
      <div class="top_lf">
        <h3>公告</h3>
        <div class="nr" id="demo1">
          ManBetX体育客户端震撼上架，全球首发动画直播邀您抢先体验，更有百元话费送不停！ManBetX体育客户端震撼上架，全球首发动画直播邀您抢先体验，更有百元话费送不停！
        </div>
      </div>
      <div class="top_ri">
        <a href="#" title="联系客服" class="top_kf">联系客服</a>
        <router-link  to="/question"><a href="javascript:;" title="新手帮助" class="top_bz">新手帮助</a></router-link>
        <div class="top_yy">
          <h4>中</h4>
          <div class="sub">
            <a href="#" title="中">中</a>
            <a href="#"  title="En">En</a>
          </div>
        </div>
      </div>
    </div>
    <div id="head">
      <div class="head_lf">
        <a href="index.html" title="" class="logo"><img :src="require('@/assets/images/form_img/logo.png')" width="177"
                                                        height="46" alt="" title=""/></a>
      </div>
      <div class="head_menu" style="left: 240px;">
        <ul class="navcon clear-fix" id="navul">
          <li>
            <!--<a href="index.html"  >首页</a>-->
            <router-link active-class="on" class="son"  title="首页">首页</router-link>
          </li>
          <li @mouseenter="secondNav = 'sports'" @mouseleave="secondNav = ''">
            <router-link active-class="on" class="son" to="/sports" title="体育赛事">体育赛事</router-link>
          </li>
          <li @mouseenter="secondNav = 'live'" @mouseleave="secondNav = ''">
            <router-link active-class="on" class="son"  title="真人娱乐">真人娱乐</router-link>
          </li>
          <li @mouseenter="secondNav = 'lottery'" @mouseleave="secondNav = ''">
            <router-link active-class="on" class="son"  title="彩票投注">彩票投注</router-link>
          </li>
          <li @mouseenter="secondNav = 'game'" @mouseleave="secondNav = ''">
            <router-link active-class="on" class="son"  title="电子游戏">电子游戏</router-link>
          </li>
          <li>
            <router-link active-class="on" class="son"  title="客户端">客户端</router-link>
          </li>
          <li>
            <router-link active-class="on" class="son"  title="优惠活动">优惠活动</router-link>
          </li>
          <li>
            <router-link active-class="on" class="son"  title="赛场广告">赛场广告</router-link>
          </li>
        </ul>
      </div>
      <div class="head_ri">
        <div class="login-user" @click="$router.push('/setting')" v-if="userName && cc && vc">欢迎！{{userName}}</div>
        <ul class="login-bar" v-else>
          <li>
            <a href="#/login">登录</a>
          </li>
          <li>
            <a href="#">注册</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 电子游戏的二级导航game -->
    <div class="modal game-modal" v-if="secondNav === 'game'"  @mouseenter="secondNav = 'game'"
         @mouseleave="secondNav = ''" :style="game">
      <div class="modal-container">
        <img class="yule-title" src="@/assets/images/header/tiyu_title.png" alt="">
        <div class="slider-wrapper">
          <swiper :options="gameSwiperOption">
            <swiper-slide v-for="(item, index) in gameLinkArr" :key="index">
              <a :href="item.link">
                <img :src="item.img" alt="">
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <!-- <div style="width: 100px" class="nav_bg">
          <img :src="require('@/assets/images/form_img/game_1.png')" class="default-pic"/>
          <img :src="require('@/assets/images/form_img/game_1_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 113px" class="nav_bg">
          <img :src="require('@/assets/images/form_img/game_2.png')" class="default-pic"/>
          <img :src="require('@/assets/images/form_img/game_2_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 137px" class="nav_bg">
          <img :src="require('@/assets/images/form_img/game_3.png')" class="default-pic"/>
          <img :src="require('@/assets/images/form_img/game_3_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 139px" class="nav_bg">
          <img :src="require('@/assets/images/form_img/game_4.png')" class="default-pic"/>
          <img :src="require('@/assets/images/form_img/game_4_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 137px" class="nav_bg">
          <img :src="require('@/assets/images/form_img/game_5.png')" class="default-pic"/>
          <img :src="require('@/assets/images/form_img/game_5_hover.png')" class="hover-pic"/>
        </div> -->
      </div>
    </div>
    <!-- 体育赛事的二级导航sports -->
    <div class="modal sports-modal" v-if="secondNav === 'sports'" @mouseenter="secondNav = 'sports'"
         @mouseleave="secondNav = ''" :style="sports">
      <div class="modal-container">
        <!-- <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/sports/sprots_modal_1.png')" class="default-pic"/>
          <img :src="require('@/assets/images/sports/sprots_modal_1_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 205px;" class="nav_bg">
          <img :src="require('@/assets/images/sports/sprots_modal_2.png')" class="default-pic"/>
          <img :src="require('@/assets/images/sports/sprots_modal_2_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 235px;" class="nav_bg">
          <img :src="require('@/assets/images/sports/sprots_modal_3.png')" class="default-pic"/>
          <img :src="require('@/assets/images/sports/sprots_modal_3_hover.png')" class="hover-pic"/>
        </div>
        <div style="width: 221px;margin-right:0px;" class="nav_bg">
          <img :src="require('@/assets/images/sports/sprots_modal_4.png')" class="default-pic"/>
          <img :src="require('@/assets/images/sports/sprots_modal_4_hover.png')" class="hover-pic"/>
        </div> -->
        <img class="yule-title" src="@/assets/images/header/tiyu_title.png" alt="">
        <div class="slider-wrapper">
          <a href="javascript:" class="tiyu_link_item">
            <img src="@/assets/images/header/tiyu_logo.png" alt="">
          </a>
          <a href="javascript:" class="tiyu_link_item">
            <img src="@/assets/images/header/tiyu_app.png" alt="" style="width:95%;bottom:18px;">
          </a>
          <a href="http://cn.man756.com/sports/live" class="tiyu_link_item">
            <img src="@/assets/images/header/tiyu_live.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 真人娱乐的二级导航live -->
    <div class="modal live-modal" v-if="secondNav === 'live'"  @mouseenter="secondNav = 'live'"
         @mouseleave="secondNav = ''" :style="live">
      <div class="modal-container">
        <img class="yule-title" src="@/assets/images/header/yule_title.png" alt="">
        <div class="slider-wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in yuleLinkArr" :key="index">
              <a :href="item.link">
                <img :src="item.img" alt="">
              </a>
            </swiper-slide>
            <div class="swiper-button-prev" @mouseenter="prevClick" ref="prevBtn" slot="button-prev"></div>
            <div class="swiper-button-next" @mouseenter="nextClick" ref="nextBtn" slot="button-next"></div>
          </swiper>
        </div>
        <!-- <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify1.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify1_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify2.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify2_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify3.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify3_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify4.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify4_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify5.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify5_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify6.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify6_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify7.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify7_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify8.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify8_active.png')" class="hover-pic"/>
        </div>
        <div style="width: 100px;" class="nav_bg">
          <img :src="require('@/assets/images/livecasino/classify9.png')" class="default-pic"/>
          <img :src="require('@/assets/images/livecasino/classify9_active.png')" class="hover-pic"/>
        </div> -->
      </div>
    </div>
    <!-- 彩票投注的二级导航 -->
    <div class="modal lottery-modal" v-if="secondNav === 'lottery'" @mouseenter="secondNav = 'lottery'"
         @mouseleave="secondNav = ''" :style="lottery">
      <div class="modal-container lottery_link_wrapper">
        <!-- <div class="lottery-item nav_bg">
          <img :src="require('@/assets/images/lottery_img/lottery_1.png')" class="default-pic"/>
          <img :src="require('@/assets/images/lottery_img/lottery_1_hover.png')" class="hover-pic"/>
        </div>
        <div class="lottery-item nav_bg">
          <img :src="require('@/assets/images/lottery_img/lottery_2.png')" class="default-pic"/>
          <img :src="require('@/assets/images/lottery_img/lottery_2_hover.png')" class="hover-pic"/>
        </div>
        <div class="lottery-item nav_bg">
          <img :src="require('@/assets/images/lottery_img/lottery_3.png')" class="default-pic"/>
          <img :src="require('@/assets/images/lottery_img/lottery_3_hover.png')" class="hover-pic"/>
        </div> -->
        <a href="javascript:" class="lottery_link_item">
          <img src="@/assets/images/header/caipiao1.png" alt="">
        </a>
        <a href="javascript:" class="lottery_link_item">
          <img src="@/assets/images/header/caipiao2.png" alt="">
        </a>
        <a href="http://cn.man756.com/home/lunch?gpid=520723134101&accid=520723134100&url=/lottery/kg?gameType=undefined||stakeId=undefined" class="lottery_link_item">
          <img src="@/assets/images/header/caipiao3.png" alt="">
        </a>
        <div style="clear: both;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import { getLS } from '@/utils';
  import { runTestRequest } from '@/api/login';

  export default {
    name: 'app',
    mounted(){
      runTestRequest();
    },
    data() {
      return {
        userName: getLS('userName'),
        cc: getLS('cc'),
        vc: getLS('vc'),
        // 二级导航
        secondNav: '',
        isgameSwiperAutoplay: false,
        game: {
          // background: `url(${require("../assets/images/form_img/game_bg.png")})`
          background: `url(${require("../assets/images/header/bg.png")})`
        },
        sports: {
          // background: `url(${require("../assets/images/sports/sports_modal_bg.png")})`
          background: `url(${require("../assets/images/header/bg.png")})`
        },
        lottery: {
          // background: `url(${require("../assets/images/lottery_img/lottery_modal_bg.png")})`
          background: `url(${require("../assets/images/header/caipiao_bg.png")})`
        },
        live: {
          // background: `url(${require("../assets/images/livecasino/classify_bg.png")})`
          background: `url(${require("../assets/images/header/bg.png")})`
        },
        swiperOption: {
          loop:true,
          autoplay:true,
          autoplay: {
            disableOnInteraction: false,
          },
          slidesPerView: 5,
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          }
        },
        gameSwiperOption: {
          loop:true,
          autoplay: this.isgameSwiperAutoplay,
          slidesPerView: 5
        },
        gameLinkArr: [
          {
            link: 'javascript:',
            img: require('@/assets/images/header/buyugame.png')
          },
          {
            link: 'javascript:',
            img: require('@/assets/images/header/mggame.png')
          },
          {
            link: 'javascript:',
            img: require('@/assets/images/header/aggame.png')
          },
          {
            link: 'javascript:',
            img: require('@/assets/images/header/ptgame.png')
          },
          {
            link: 'javascript:',
            img: require('@/assets/images/header/ppgame.png')
          }
        ],
        yuleLinkArr: [
          {
            link: 'http://cn.man756.com/home/lunch?gpid=905647853201&accid=905647853200&url=/liveCasino/ebet',
            img: require('@/assets/images/header/wanboyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=38712217599873024&accid=38712217599873024&url=/liveCasino/agClient',
            img: require('@/assets/images/header/agyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=773562192801&accid=773562192800&url=/liveCasino/tgp',
            img: require('@/assets/images/header/shenboyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=9283948292830&accid=9283948292833&url=/liveCasino/allbet',
            img: require('@/assets/images/header/ouboyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=208925621341&accid=208925621340&url=/liveCasino/salon',
            img: require('@/assets/images/header/shalongyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=3277767810617344&accid=3277767810617344&url=/liveCasino/gdClient',
            img: require('@/assets/images/header/gdyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=11964220589606&accid=11964220589608960&url=/liveCasino/mg',
            img: require('@/assets/images/header/mgyule.png')
          },
          {
            link: 'http://cn.man756.com/home/lunch?gpid=350808494186211&accid=350808494186201&url=/liveCasino/bbin?page_site=live',
            img: require('@/assets/images/header/bbinyule.png')
          }
        ]
      }
    },
    methods: {
      prevClick(){
        this.$refs.prevBtn.click();
      },
      nextClick(){
        this.$refs.nextBtn.click();
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    watch: {
      gameLinkArr(){
        if(this.gameLinkArr.length > 5){
          this.isgameSwiperAutoplay = true;
        }else{
          this.isgameSwiperAutoplay = false;
        }
      }
    }
  }
</script>
<style>
  .swiper-button-prev{
    background: url("../assets/images/header/left_btn.png") no-repeat !important;
    background-size: contain !important;
  }
  .swiper-button-next{
    background: url("../assets/images/header/right_btn.png") no-repeat !important;
    background-size: contain !important;
  }
</style>

<style lang="less" scoped>
  /*
	 内容样式开始
	 * */
  #top {
    height: 30px;
    background: #ffffff url("../assets/images/form_img/head_bg.jpg") left top repeat-x;
    position: relative;
    z-index: 2;
  }

  .top_lf {
    float: left;
    width: 900px;
    font: 400 12px/30px "微软雅黑";
    color: #7a7a7a;
    margin-left: 50px;
  }

  .top_lf h3 {
    float: left;
    width: 60px;
    font: 400 12px/30px "微软雅黑";
    color: #7a7a7a;
    background: url("../assets/images/form_img/gg_ico.png") left center no-repeat;
    text-indent: 20px;
  }

  .top_lf .nr {
    float: left;
    width: 700px;
    height: 30px;
    overflow: hidden;
  }

  .top_ri {
    float: right;
    margin-right: 50px;
    font: 400 12px/30px "微软雅黑";
    color: #494949;
  }

  .top_ri .top_kf {
    display: block;
    float: left;
    padding-left: 22px;
    color: #494949;
    background: url("../assets/images/form_img/lxkf_ico.png") left center no-repeat;
    margin-right: 18px;
  }

  .top_ri .top_bz {
    display: block;
    float: left;
    padding-left: 22px;
    color: #494949;
    margin-right: 18px;
    background: url("../assets/images/form_img/xsbz_ico.png") left center no-repeat;
  }

  .top_ri .top_yy {
    float: left;
    width: 55px;
    height: 30px;
    background: url("../assets/images/form_img/top_line.jpg") left center no-repeat;
    position: relative;
  }

  .top_ri .top_yy h4 {
    font: 400 12px/30px "微软雅黑";
    color: #494949;
    background: url("../assets/images/form_img/yy_ico.png") 42px center no-repeat;
    text-align: center;
    cursor: pointer;
  }

  .top_ri .top_yy .sub {
    position: absolute;
    top: 29px;
    left: 0;
    width: 100%;
    background: #fff;
    border: #dedede solid 1px;
    text-align: center;
    display: none;
  }

  .top_ri .top_yy .sub a {
    font: 400 12px/30px "微软雅黑";
    color: #494949;
    display: block;
    border-bottom: #dedede dotted 1px;
  }

  .top_ri .top_yy .sub a:hover {
    color: red;
  }

  #head {
    width: 100%;
    height: 90px;
    min-width: 1180px;
    overflow: hidden;
    background: url("../assets/images/form_img/head_bg.jpg") left bottom repeat-x;
    position: relative;
    z-index: 8;
  }

  .head_lf {
    float: left;
    margin-left: 50px;
  }

  .head_lf .logo {
    display: block;
    float: left;
    padding: 22px 0 0;
    width: 175px;
  }

  .navcon {
    background: url("../assets/images/form_img/nav_line.jpg") left center no-repeat;
    height: 90px;
  }

  .navcon li {
    float: left;
    width: 100px;
    padding-right: 2px;
    background: url("../assets/images/form_img/nav_line.jpg") right center no-repeat;
    text-align: center;
    font: 400 16px/88px "微软雅黑";
  }

  .navcon li .son {
    display: block;
    color: #adadad;
    height: 90px;
    transition: all 0s;
  }

  .navcon li .son:hover {
    color: #d9ad52;
    background: url("../assets/images/form_img/nav_hover.jpg") center bottom repeat-x;
  }

  .navcon li.hover .son {
    color: #d9ad52;
    background: url("../assets/images/form_img/nav_hover.jpg") center bottom repeat-x;
  }

  .navcon li .on.son {
    color: #d9ad52;
    background: url("../assets/images/form_img/nav_hover.jpg") center bottom repeat-x;
  }

  .navcon li .sub {
    position: absolute;
    left: 0;
    top: 89px;
    padding: 1px 0 0;
    width: 100%;
    height: 260px;
    background: url("../assets/images/form_img/erji_bg.jpg") center center no-repeat;
    display: none;
  }

  .navcon li .subnr {
    width: 1200px;
    margin: 0 auto;
    height: 260px;
  }

  .navcon li .subnr a {
    display: block;
    float: left;
    height: 260px;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  .navcon li .subnr a:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }

  .head_menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 816px;
    overflow: hidden;
  }

  .head_ri .login-user {
    color: #fff;
    line-height: 90px;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
  }

  .head_ri .login-user:hover {
    color: #d9ad52;
  }

  .head_ri .login-bar {
    float: right;
    padding-left: 2px;
    background: url("../assets/images/form_img/nav_line.jpg") left center no-repeat;
  }

  .head_ri .login-bar li {
    float: left;
    width: 100px;
    padding-right: 2px;
    background: url("../assets/images/form_img/nav_line.jpg") right center no-repeat;
    text-align: center;
    font: 400 16px/88px "微软雅黑";
  }

  .head_ri .login-bar a {
    display: block;
    color: #adadad;
    height: 90px;
    transition: all 0s;
  }

  .head_ri .login-bar a:hover {
    color: #d9ad52;
    background: url("../assets/images/form_img/nav_hover.jpg") center bottom repeat-x;
  }

  .head_ri {
    float: right;
  }

  .head_ri .note {
    height: 90px;
    background: url("../assets/images/form_img/nav_line.jpg") left center no-repeat;
    width: 84px;
    float: left;
    position: relative;
  }

  .head_ri .note .div {
    display: block;
    height: 40px;
    position: relative;
    padding: 25px 0;
    background: url("../assets/images/form_img/head_xx.png") center center no-repeat;
  }

  .head_ri .note .div i {
    display: block;
    width: 12px;
    height: 12px;
    text-align: center;
    font: 400 11px/12px "微软雅黑";
    color: #fff;
    position: absolute;
    top: 28px;
    right: 28px;
    display: block;
  }

  .head_ri .note .bg {
    background: url("../assets/images/form_img/bg10.png");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 0;
  }

  .head_ri .note .sub {
    position: absolute;
    right: 0;
    top: 90px;
    width: 290px;
    display: none;
  }

  .head_ri .note .subnr {
    background: #fafbfb;
    border: #b9b8b8 solid 1px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  }

  .head_ri .note .subnr h3 {
    height: 55px;
    font: 400 14px/55px "微软雅黑";
    color: #494949;
    padding-left: 20px;
  }

  .head_ri .note .subgd {
    height: 144px;
    border-bottom: #B9B8B8 solid 1px;
    overflow: hidden;
    background: #f2f1f0;
  }

  .head_ri .note .subgd li {
    height: 48px;
    font: 400 12px/48px "微软雅黑";
    color: #9d9c9c;
    text-indent: 20px;
  }

  .head_ri .note .subgd li a {
    color: #9d9c9c;
    display: block;
    padding-right: 15px;
    overflow: hidden;
    height: 48px;
  }

  .head_ri .note .subgd li a:hover {
    background: #d2d1d2;
    color: #494949;
  }

  .head_ri .note .more {
    display: block;
    height: 54px;
    text-align: center;
    font: 400 14px/54px "微软雅黑";
    color: #494949;
    background: #e8e7e8;
  }

  .head_ri .note.hover .bg {
    display: block;
  }

  .head_ri .mem {
    float: left;
    height: 90px;
    width: 110px;
    background: url("../assets/images/form_img/nav_line.jpg") left center no-repeat;
    position: relative;
  }

  .head_ri .mem .div {
    display: block;
    padding: 25px 0;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  .head_ri .mem .div img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 50em;
  }

  .head_ri .mem .bg {
    background: url("../assets/images/form_img/bg10.png");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 0;
  }

  .head_ri .mem .sub {
    position: absolute;
    right: 0;
    top: 90px;
    padding: 0;
    width: 192px;
    display: none;
  }

  .head_ri .mem .subnr {
    background: #f0eff0;
    border: #b9b8b8 solid 1px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  }

  .head_ri .mem .subnr a {
    display: block;
    height: 48px;
    font: 400 14px/48px "微软雅黑";
    color: #494949;
    text-indent: 27px;
  }

  .head_ri .mem .subnr a img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
  }

  .head_ri .mem .subnr a:hover {
    background: #d5d5d6;
  }

  .head_ri .mem .subnr a.bt {
    border-top: #cbcaca solid 1px;
  }

  .head_ri .mem.hover .bg {
    display: block;
  }

  .headercon {
    position: fixed;
    // left: 0;
    top: 0;
    width: 100%;
    max-width: 1920px;
    z-index: 9999;
    margin: 0 auto;
    // background: #fff;
  }

  .modal {
    height: 240px;
    width: 100%;
    position: relative;
    z-index: 8;
    overflow: hidden;
    text-align: center;
    margin-top: -8px;
  }
  .lottery-modal{
    height: 130px;
    margin-top: 0;
  }
  .modal-container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .yule-title{
    float: left;
    margin-top: 36px;
  }
  .slider-wrapper{
    float: left;
    margin: 8px 0 0 40px;
    width: 980px;
    height: 202px;
  }
  .slider-wrapper a{
    display: block;
    width: 100%;
    height: 202px;
    position: relative;
    box-sizing: border-box;
  }
  .slider-wrapper a:hover{
    border-left: 1px solid transparent;
    border-right: 1px solid #ccc;
    box-shadow: 1px 0 3px #ccc inset;
  }
  .slider-wrapper a img{
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
  }
  .slider-wrapper .tiyu_link_item{
    // width: 33.33333%;
    float: left;
    box-sizing: border-box;
    position: relative;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }
  .slider-wrapper .tiyu_link_item:first-child{
    width: 330px;
  }
  .slider-wrapper .tiyu_link_item:nth-child(2){
    width: 360px;
  }
  .slider-wrapper .tiyu_link_item:nth-child(3){
    width: 240px;
  }
  .slider-wrapper .tiyu_link_item img{
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    // width: 100%;
  }
  .slider-wrapper .tiyu_link_item:hover{
    border-left: 1px solid transparent;
    border-right: 1px solid #ccc;
    box-shadow: 1px 0 3px #ccc inset;
  }
  .lottery_link_wrapper{
    height: 100%;
  }
  .lottery_link_wrapper .lottery_link_item{
    float: left;
    box-sizing: border-box;
    height: 100%;
    box-sizing: border-box;
  }
  .lottery_link_wrapper .lottery_link_item:hover{
    border-left: 1px solid transparent;
    border-right: 1px solid #ccc;
    box-shadow: 1px 0 3px #ccc inset;
  }
  .lottery_link_wrapper .lottery_link_item:first-child{
    width: 420px;
    padding-top: 26px;
  }
  .lottery_link_wrapper .lottery_link_item:nth-child(2){
    width: 440px;
    padding-top: 26px;
  }
  .lottery_link_wrapper .lottery_link_item:nth-child(3){
    width: 340px;
    padding-top: 30px;
  }
  .yule-link-wrapper{
    height: 100%;
    // background: url("../assets/images/header/yule_bg.png") no-repeat;
  }
  .yule-link-wrapper li{
    float: left;
    width: 122px;
    height: 100%;
    position: relative;
  }
  .yule-link-wrapper li a{
    position: absolute;
    width: 100px;
    height: 100px;
    display: block;
    left: 11px;
    top: 17px;
    transition: all 0.3s;
  }
  .yule-link-wrapper li a:hover{
    transform: scale(1.2);
  }
  .yule-link-wrapper li a img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lottery-item {
    width: auto;
  }

  .nav_bg {
    margin-top: 43px;
    display: inline-block;
    margin-right: 110px;
    vertical-align: top;
    cursor: pointer;

    .default-pic {
      display: block;
    }
    .hover-pic {
      display: none;
    }
  }

  .nav_bg:hover {
    .default-pic {
      display: none;
    }
    .hover-pic {
      display: block;
    }
  }

  // .game-modal > div > img {
  //   width: 100%;
  // }

  .live-modal .nav_bg {
    margin-right: 30px;
    // img{width: 100%;}
    &:last-child {
      margin-right: 0;
    }
  }
</style>
