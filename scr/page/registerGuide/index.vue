<template>
  <div class="wrapper">
     <!-- <v-header></v-header> -->
    <div class="cooperation">
      <!-- 第一屏 -->
      <div class="banner page-1">
        <img src="@/assets/images/cooperation/a.png" class="a" alt="">
        <div class="banner-content">
          <h2>您好,欢迎您的加入</h2>
          <h4>
           您是万博的第<span>389,688</span>位贵宾
          </h4>
          <a href="javascript:" class="join-link">
            <img src="@/assets/images/registerGuide/join_icon.png" alt="">
          </a>
          <span class="icon"></span>
        </div>
      </div>
      <!-- 第二屏 -->
      <div class="page-2">
        <div class="b"><img src="@/assets/images/cooperation/b.png" alt=""></div>
         <div class="page-2-box">
            <div class="page2-item fl page2-item1">
               <p class="title-top">赞助顶级赛事</p>
               <p class="title-top"><i>4</i>项</p>
               <p class="title-center">
                 赞助奥运,英超,西甲,意甲四大顶级体育四赛事,全球仅此一家，极致奢华的购彩体验，极速快捷的存款方式，军方改良科技造就博彩行业的领军者.
               </p>
            </div>
            <div class="page2-item fl page2-item2">
               <p class="title-top">注册免费送</p>
               <p class="title-top"><i>55</i>元</p>
               <p class="title-left title-margin">注册后所得：</p>
               <p class="title-left">30元现金红包</p>
               <p class="title-left">5元验证邮箱红包</p>
               <p class="title-left">20元完善资料红包</p>
                <a href="javascript:" class="join-link">
                   <span>立即完善</span>
                </a>
            </div>
            <div class="page2-item fl page2-item3">
               <p class="title-top">首存大返利</p>
               <p class="title-top"><i>288</i>%</p>
               <p class="title-left title-margin">首存>=100元</p>
               <p class="title-left">288元红包反馈</p>
               <a href="javascript:" class="join-link">
                  <span>立即存款</span>
               </a>
            </div>
            <div class="page2-item fl page2-item4">
              <p class="title-top">全平台移动端</p>
               <p class="title-top"><i>3</i>款</p>
               <p class="title-center">
                 赞助奥运,英超,西甲,意甲四大顶级体育四赛事,全球仅此一家，极致奢华的购彩体验，极速快捷的存款方式，军方改良科技造就博彩行业的领军者.
               </p>
            </div>
         </div>
          <div  class="line4px"></div>
      </div>
      <!-- 第三屏 -->
      <div class="page-3">
        <div class="c"><img src="@/assets/images/cooperation/c.png" alt=""></div>
        <div class="d"><img src="@/assets/images/cooperation/d.png" alt=""></div>
           <div class="page-3-box">
                <ul>
                  <li>
                    <div class="video">
                     <div class="top">
                        <img src="@/assets/images/registerGuide/logo.png"/>
                     </div>
                     <video loop="loop" @mouseover="videoPlay(1)" ref="video1" @mouseout="videoPause(1)">
                        <source src="@/assets/video/item1.mp4" type="video/mp4" />
                     </video>
                      </div>
                     <p>最全的比赛都在这里</p>
                     <span>全平台APP下载</span>
                     <span>直播LIVE</span>
                  </li>
                  <li>
                     <div class="video">
                      <div class="top">
                        <img src="@/assets/images/registerGuide/logo.png"/>
                     </div>
                     <video loop="loop" @mouseover="videoPlay(2)" ref="video2" @mouseout="videoPause(2)">
                        <source src="@/assets/video/item2.mp4" type="video/mp4" />
                     </video>
                     </div>
                     <p>奢华体验 业界领军者</p>
                     <span>BBIN雷电</span>
                     <span>香港乐透</span>
                     <span>时时彩</span>
                  </li>
                  <li>
                     <div class="video">
                      <div class="top">
                        <img src="@/assets/images/registerGuide/logo.png"/>
                     </div>
                     <video loop="loop" @mouseover="videoPlay(3)" ref="video3" @mouseout="videoPause(3)">
                        <source src="@/assets/video/item3.mp4" type="video/mp4" />
                     </video>
                     </div>
                     <p>足不出户 身临其境</p>
                     <span>龙虎斗</span>
                     <span>骰宝押大小</span>
                     <span>俄罗斯轮盘</span>
                  </li>
                  <li>
                    <div class="video">
                        <div class="top">
                        <img src="@/assets/images/registerGuide/logo.png"/>
                         </div>
                        <video loop="loop" @mouseover="videoPlay(4)" ref="video4" @mouseout="videoPause(4)">
                          <source src="@/assets/video/item4.mp4" type="video/mp4" />
                      </video>
                    </div>
                     <p>100倍超高回报 秒开奖</p>
                     <span>88火</span>
                     <span>冰球突破</span>
                     <span>超级88</span>
                  </li>
                </ul>
           </div>
           <div class="sharp"></div>
           <div class="line4px"></div>
      </div>
      <!-- 第四屏 -->
      <div class="page-4">
        <div  class="seemore"></div>
        <div  class="line4px"></div>
        <div class="page-4-cont">
          <section>
            <div class="title">
              <img src="@/assets/images/cooperation/pinpai.png" alt="">
            </div>
            <ul>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon1.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon2.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon3.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon4.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon5.png" alt="">
              </li>
               <li>
                <img src="@/assets/images/cooperation/pinpai_icon6.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon7.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/pinpai_icon8.png" alt="">
              </li>
            </ul>
          </section>
          <section>
            <div class="title">
              <img src="@/assets/images/cooperation/qudao.png" alt="">
            </div>
            <ul>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon1.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon2.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon3.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon4.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon5.png" alt="">
              </li>
               <li>
                <img src="@/assets/images/cooperation/qudao_icon6.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon7.png" alt="">
              </li>
              <li>
                <img src="@/assets/images/cooperation/qudao_icon8.png" alt="">
              </li>
            </ul>
          </section>
          <section>
            <div class="title">
              <img src="@/assets/images/cooperation/chanpin.png" alt="">
            </div>
            <ul class="text">
              <li style="margin-right: 72px;">万博全站客户端</li>
              <li style="margin-right: 36px;">万博体育客户端</li>
              <li style="float: right;margin-right: 50px;">万博真人客户端</li>
              <li style="margin-right: 56px;">动画直播</li>
              <li style="margin-right: 60px;">比分数据</li>
              <li>高清现场直播</li>
              <li style="float: right;margin-right: 50px;">比赛即时情报</li>
              <li style="margin-right: 47px;">LOL</li>
              <li style="margin-right: 42px;">DOTA2</li>
              <li style="margin-right: 38px;">CSGO</li>
              <li style="margin-right: 28px;">星际争霸2</li>
              <li>老虎机</li>
              <li style="float: right;margin-right: 50px;">捕鱼</li>
            </ul>
          </section>
          <section>
            <div class="title">
              <img src="@/assets/images/cooperation/fuwu.png" alt="">
            </div>
            <ul class="text">
              <li style="margin-left: 50px;">7*24小时优质服务</li>
              <li style="margin-right: 50px;float: right;">百元即可提现 10分钟到账</li>
              <li style="margin-right: 30px;">支持40+主流银行</li>
              <li style="margin-right: 46px;">微信支付</li>
              <li style="">支付宝支付</li>
              <li style="margin-right: 50px;float: right;">QQ支付</li>
              <li>精品美图</li>
              <li style="margin-right: 47px;">赛事心水</li>
              <li style="">新手教程</li>
              <li style="float: right;margin-right: 50px;margin-left: 40px;">完美配备中文化服务</li>
            </ul>
          </section>
          <div style="clear: both;"></div>
        </div>
      </div>
      <!-- 第五屏 -->
      <div class="page-5">
         <div  class="seemore"></div>
          <div  class="line4px"></div>
          <div class="e"><img src="@/assets/images/cooperation/e.png" alt=""></div>
          <div class="f"><img src="@/assets/images/cooperation/f.png" alt=""></div>
          <div class="trajectory section3">
            <div class="u_fr">
                      <div class="ui_base u_p3d">
                          <div class="ball_c"></div>
                          <!--第一个-->
                          <div class="base u_p3d">
                              <div class="ball_base u_p3d ball_1">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>用户下载率</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_2">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>下载存款率</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_3">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>品牌</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_4">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>安卓</p>
                                  </div>
                              </div>
                          </div>
                          <!--第二个-->
                          <div class="u_p3d base1">
                              <div class="ball_base u_p3d ball_1">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>用户忠诚度</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_2">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>服务</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_3">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>ios</p>
                                  </div>
                              </div>
                          </div>
                          <!--第一个-->
                          <div class="u_p3d base2">
                              <div class="ball_base u_p3d ball_1">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>用户存留</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_2">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>研发</p>
                                  </div>
                              </div>
                              <div class="ball_base u_p3d ball_3">
                                  <div class="ball">
                                      <img src="@/assets/images/cooperation/ball.png"/>
                                      <p>销售</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            <div class="center">
              <img class="planet-tit" src="@/assets/images/cooperation/planet_tit.png" alt="">
              <img src="@/assets/images/cooperation/planet.png" alt="" style="margin:0 auto;display:table">
              <!-- <video autoplay loop src="@/assets/images/cooperation/xingqiu.mp4"></video> -->
            </div>
          </div>
      </div>
      <!-- 第六屏 -->
      <div class="page-6" ref="lineAnimate">
        <!-- <div class="line4px"></div> -->
        <div class="chengzhanglicheng"><img src="@/assets/images/cooperation/chengzhanglicheng.png" alt=""></div>
        <div class="page-6-content">
           <div class="flag"></div>
           <div class="line-move-1" :class="{lineAnimateStart: lineAnimateStart}">
            <div class="line-move-2" v-show="isLineLastShow">
              <div class="mask" :class="{lineAnimateStart: lineAnimateStart}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <v-footer ></v-footer> -->
  </div>
</template>
<script>
import flux from '../../assets/js/flux.js'
export default {
  data(){
    return{
      viewWidth: 0,
      lineAnimateStart: false,
      isLineLastShow: false
    }
  },
  methods: {
      videoPlay(n) {
        switch (n) {
          case 1:
            this.$refs.video1.play();
            break;
          case 2:
            this.$refs.video2.play();
            break;
          case 3:
            this.$refs.video3.play();
            break;
         case 4:
            this.$refs.video4.play();
            break;
        }
      },
      videoPause(n) {
        switch (n) {
          case 1:
            this.$refs.video1.pause();
            break;
          case 2:
            this.$refs.video2.pause();
            break;
          case 3:
            this.$refs.video3.pause();
            break;
          case 4:
            this.$refs.video4.pause();
            break;
        }
      },
  },
  mounted(){
    var viewHeight = document.documentElement.clientHeight, that = this;
    window.addEventListener("scroll", function() {
      if (that.$refs.lineAnimate) {
        var rect = that.$refs.lineAnimate.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top < viewHeight) {
          that.lineAnimateStart = true;
           setTimeout(()=>{
            that.isLineLastShow = true;
          }, 6000);
        }
      }
    });
    var fluxPage = {
      productFlux:null,
      cashierFlux:null,
      adminFlux:null,
      animateName:["bars","zip","blinds","blocks","concentric","warp","slide","bars3d","tiles3d","blinds3d","explode"],
      init:function(){
        var $this = this;
        $this.productFlux = new flux.slider("#product_flux",{autoplay: false, pagination: false });
        $this.cashierFlux = new flux.slider("#cashier_flux",{autoplay: false, pagination: false });
        $this.adminFlux = new flux.slider("#admin_flux",{autoplay: false, pagination: false });
      },
      randonName:function(){
        var $this = this;
        var index = Math.floor(Math.random()*$this.animateName.length);
        index %= $this.animateName.length;
        return $this.animateName[index];
      },
      changeImg:function(obj){
        var $this = this;
        if(obj.hasClass("on")){
          return;
        }
        var parentObj = obj.parent();
        var objId = parentObj.prev().attr("id");
        parentObj.children("span").removeClass("on");
        obj.addClass("on");
        var index = obj.index();
        var funcName = $this.randonName();
        $this[objId + "Flux"].showImage(index, funcName);
      }
    }
    fluxPage.init();
    $("[data-changeImg]").children("span").click(function(){
      fluxPage.changeImg($(this));
    });
  },
  components: {

  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/css/galaxy.css";

  .wrapper {
    max-width: 1920px;
    margin: 0 auto;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px)
    }
    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }
  /******zoom方式处理分辨率********/
  @media screen and (max-width: 1920px) {
  //  .wrapper{
  //     zoom: 1.2;
  //   }
    .wrapper /deep/.headercon{
      zoom: 1;
    }
    // .page-4{
    //   zoom: 5/6;
    // }
  }
  @media screen and (max-width: 1300px) {
    .wrapper{
      overflow: hidden;
    }
    .wrapper{
      zoom: 1.2;
    }
    .wrapper /deep/.headercon{
      zoom: 5/6;
    }
    .page-2{
      zoom: 5/6;
    }
    .page-3{
      zoom: 5/6;
    }
    .page-4{
      zoom: 4/6;
    }
  }
  /*****屏幕分辨率处理*********/
   @center-width:1200px;//中间部分最外部
   //第一部分
   @page2item-width:274px;
   @page2item-height:423px;
   @page2item-padding:88px 62px 0;
  .cooperation{
    position: relative;
    overflow: hidden;
    width: 100%;
    // top: 100px;//110px(原先值)
    .line4px{
      width: 4px;
      height: 140px;
      background: #fec773;
      left: 50%;
      margin-left: -2px;
      bottom: -60px;
      position: absolute;
      z-index: 10;
    };
     .seemore{
      width: 162px;
      height: 48px;
      cursor: pointer;
      left: 50%;
      margin-left: -81px;
      bottom: 90px;
      position: absolute;
      z-index: 10;
       background: url(~@/assets/images/cooperation/more_btn.png) no-repeat;
    }
  }
  .page-1{
    position: relative;
    height: 1080px;
    background: url(~@/assets/images/registerGuide/banner1.png) no-repeat;
    .a{
      position: absolute;
      width: 439px;
      height: 550px;
      bottom:-273px;
      left: 0;
      z-index: 1;
    }
    .right-block{
      position: absolute;
      width: 76px;
      height: 76px;
      right: 0;
      top: 320px;
    }
  }
  .banner-content{
    height: 100%;
    color: #ffffff;
    margin: 0 auto;
    overflow: hidden;
    h2{
      font-size: 60px;
      text-align: center;
      margin-top: 230px;
      margin-bottom: 55px;
      line-height: 60px;
    }
    h4{
      line-height: 40px;
      margin: 0 auto;
      width: 960px;
      font-size: 28px;
      text-align: center;
      span{
        color: #feb461;
      }
    }
    .join-link{
      width: 240px;
      height: 60px;
      display: block;
      margin: 60px auto 0;
    }
    .icon{
      display: block;
      width: 21px;
      height: 90px;
      background: url(~@/assets/images/cooperation/icon1.png) no-repeat;
      margin: 50px auto 0;
    }
  }
  .page-2{
    height: 1080px;
    position: relative;
    background: #ffffff;
    .b{
      position: absolute;
      width: 441px;
      height: 550px;
      right: 0;
      bottom: -138px;
      z-index: 2;
    }
    div.page-2-box{
      width:@center-width;
      position: relative;
      box-sizing: border-box;
      margin:0 auto;
      padding-top:320px;
      // 142px
      z-index:2;
      .page2-item{
        padding:@page2item-padding;
        box-sizing: border-box;
        width:@page2item-width;
        height:@page2item-height;
        color: #666666;
        background-size:@page2item-width @page2item-height;
        -webkit-box-shadow: 0px 0px 10px 5px #dddddd;
        box-shadow: 0px 0px 10px 5px #dddddd;
        position: relative;
         &:nth-child(1){
           background: url(~@/assets/images/registerGuide/item1.png) no-repeat;
        };
        &:nth-child(2){
           margin-left:26px;
           background: url(~@/assets/images/registerGuide/item2.png) no-repeat;
           cursor: pointer;
        };
        &:nth-child(3){
           margin:0 26px;
           background: url(~@/assets/images/registerGuide/item3.png) no-repeat;
           cursor: pointer;
        };
        &:nth-child(4){
           background: url(~@/assets/images/registerGuide/item4.png) no-repeat;
        };
        p.title-top{
          font-size: 22px;
          text-align: center;
          i{
             color: #feb461;
          };
        };
        p.title-center{
          margin-top: 56px;
          font-size:14px;
        };
        p.title-left{
          text-align: left;
          font-size:14px;
        };
        p.title-margin{
          margin-top:56px;
        };
        a{
          position: absolute;
          bottom:-30px;
          z-index:-200;
          left:52px;
          display:none;
          opacity: 0;
          span{
            display: block;
            color: #fff;
            background: url(~@/assets/images/registerGuide/itembutton.png) no-repeat;
            width:176px;
            text-align: center;
            height:42px;
            line-height: 42px;
            background-size:176px 42px;
          }
        };
        &:hover{
           a{
              display: block;
              bottom:30px;
              z-index: 1;
             -webkit-animation:fadeInUp 1s .2s ease both;
             -moz-animation:fadeInUp 1s .2s ease both;
           };
        }
      }
    }
  }
  .page-3{
    height: 1080px;
    background: #f4f4f4 url(~@/assets/images/cooperation/video_bg.png) no-repeat;
    position: relative;
    .c{
      position: absolute;
      top: 130px;
      left: 0;
    }
    .d{
      position: absolute;
      bottom: 150px;
      right: 0;
    }
    .page-3-box{
      width:1200px;
      height:662px;
      position: absolute;
      top:220px;
      margin-left: -600px;
      left:50%;
      ul{
        position: relative;
        width:100%;
        li{
          width:313px;
          position: absolute;
          top:0;
          &:nth-child(1){
             left:0;
          };
          &:nth-child(2){
             top:60px;
             left:290px;
             z-index: 20;
          };
          &:nth-child(3){
              left:588px;
              z-index: 10;
          };
          &:nth-child(4){
             top:60px;
             right:0;
             z-index: 20;
          };
          &:hover{
            z-index: 50;
          }
          div.video{
            height: 510px;
             -webkit-box-shadow: 0px 0px 40px 5px #000000;
            box-shadow: 0px 0px 40px 5px #000000;
            border-radius:4px;
            div.top{
              width:100%;
              padding:25px 15px 20px;
              box-sizing: border-box;
              background: #ffffff;
              img{
                width:160px;
                height:36px;
              }
            }
            video{
              width:100%;
              height:430px;
            }
          };
          p{
            margin:25px 0;
            font-size:22px;
            width:100%;
            color:#666666;
            text-align: center;
          };
          span{
            padding:7px 0;
            display: block;
            width:100%;
            font-size:16px;
            color:#feb461;
            text-align: center;
          }
        }
      }
      // margin:0 auto 0;
      // display:table;
    }
    .sharp{
      width: 40px;
      height: 40px;
      left: 50%;
      margin-left: -20px;
      bottom: 90px;
      position: absolute;
      z-index: 10;
       background: url(~@/assets/images/cooperation/more_icon.png) no-repeat;
    }
  }
  .page-4{
    position: relative;
    height: 1080px;
    background: #ffffff;
    // overflow: auto;
     .line4px{
        bottom: -144px;
      }
    .seemore{
      width: 162px;
      height: 48px;
      cursor: pointer;
      left: 50%;
      margin-left: -81px;
      bottom:5px;
      position: absolute;
      z-index: 10;
       background: url(~@/assets/images/cooperation/more_btn.png) no-repeat;
    }
    .page-4-cont{
      width: 1123px;
      margin: 220px auto 0;
      section{
        float: left;
        position: relative;
        width: 526px;
        background: #f6f6f6;
        border-right: 6px solid #feba60;
        margin: 0 70px 80px 0;
        &:nth-child(2), &:nth-child(4){
          margin-right: 0;
        }
        &:nth-child(3), &:nth-child(4){
          margin-bottom: 0;
        }
        .title{
          position: absolute;
          width: 100px;
          height: 100px;
          padding: 7px;
          border-radius: 50%;
          left: -56px;
          top: -47px;
          background: #fff;
        }
        ul{
          overflow: hidden;
          padding: 23px 0 23px 50px;
          li{
            float: left;
            width: 140px;
            text-align: center;
            height: 70px;
            line-height: 70px;
            margin-bottom: 10px;
            img{
              vertical-align: middle;
            }
          }
        }
        .text{
          padding-left: 86px;
          li{
            height: 54px;
            line-height: 54px;
            color: #939393;
            font-size: 17px;
            margin-bottom: 0;
            width: auto;
          }
        }
      }
    }
  }
  .page-5{
    position: relative;
    height: 1080px;
    // overflow: hidden;
    background: url(~@/assets/images/cooperation/planet_bg.png) no-repeat;
    .e{
      position: absolute;
      top: 177px;
    }
    .f{
      position: absolute;
      right: 0;
      bottom: 354px;
    }
    .seemore{
      width: 162px;
      height: 48px;
      cursor: pointer;
      left: 50%;
      margin-left: -81px;
      bottom: 90px;
      position: absolute;
      z-index: 10;
       background: url(~@/assets/images/cooperation/more_btn.png) no-repeat;
    }
    .trajectory{
      width: 996px;
      height: 755px;
      // margin: 196px auto 0;
      background: url(~@/assets/images/cooperation/trajectory2.png) no-repeat;
      position: relative;
      top:196px;
      left:50%;
      margin-left:-498px;
      .center{
        width: 240px;
        height: 240px;
        position: absolute;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -116px;
        margin-left: -100px;
        .planet-tit{
          position: absolute;
          top: 65px;
          left: 0px;
        }
        video{
          width: 100%;
          height: 100%;
          z-index: 0;
        }
      }
    }
  }
  @keyframes lineMove {
    0% {
      width: 0;
    }
    100% {
     width: 796px;
    }
  }
  @keyframes maskMove {
    0% {
       width: 105px;
    }
    100% {
       width: 0;
    }
  }
.page-6{
    height: 780px;
    padding-top: 300px;
    background: url(~@/assets/images/cooperation/page6_bg.png) no-repeat;
    position: relative;
    .chengzhanglicheng{
      position: absolute;
      top: -106px;
    }
    .page-6-content{
      width: 988px;
      height: 594px;
      background: url(~@/assets/images/cooperation/line_bg1.png) no-repeat;
      position: absolute;
      left: 50%;
      margin-left: -494px;
      z-index: 10;
      .flag{
        width: 40px;
        height: 43px;
        background: url(~@/assets/images/cooperation/flag.png) no-repeat;
        background-size: cover;
        position: absolute;
        right: 203px;
        top: 83px;
      }
    }
    .line-move-1{
      width:0;
      height: 340px;
      position: absolute;
      background: url(~@/assets/images/cooperation/line_bottom_03.png) no-repeat;
      top: 167px;
      left: 70px;
      animation: lineMove 5s linear 1s;
      animation-fill-mode: forwards;
      animation-play-state: paused;
    }
    .line-move-2{
      width: 105px;
      height: 50px;
      position: absolute;
      top: -51px;
      right: 3px;
      overflow: hidden;
      background: url(~@/assets/images/cooperation/line_top_02.png) no-repeat;
      .mask{
        position: absolute;
        height: 44px;
        width: 105px;
        top: 3px;
        left: 0;
        animation: maskMove 1s linear;
        background: url(~@/assets/images/cooperation/line_top_mask_09.png);
        animation-fill-mode: forwards;
        animation-play-state: paused;

      }
    }
    .lineAnimateStart{
      animation-play-state: running !important;
    }
  }
  .wrapper /deep/#boot{
    margin-top:110px;
  }
</style>
