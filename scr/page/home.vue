<template>
<div class="app">
  <v-header></v-header>
  <div class="content" id="home">
    <Carousel v-model="value1" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/images/form_img/banner1.jpg" width="100%" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/images/form_img/banner1.jpg" width="100%" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/images/form_img/banner1.jpg" width="100%" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="@/assets/images/form_img/banner1.jpg" width="100%" />
        </div>
      </CarouselItem>
    </Carousel>
    <div class="w1242 cy-first">
      <div class="cy_back1"><img src="@/assets/images/use_img/cy_img1.jpg"></div>
      <div class="cy-first_one">
        <div class="cy_a fl" :class="{index2:!cy_a['a1'],index3:cy_a['a1']}" @mouseenter="goEffect('a1')" @mouseleave="leaveEffect('a1')">
          <div class="cy_a1" :class="{cyanimate:cy_a['a1']}">
            <img src="@/assets/images/use_img/cy_img2.jpg">
          </div>
          <div class="cy_a2" :class="{padding44:!cy_a['a1'],padding24:cy_a['a1']}">
            <div class="cy-first_fl fl"><img src="@/assets/images/use_img/logo1.png"></div>
            <div class="cy-first_fr fr">
              <div class="cy_1">2017/2018 赛季英超联赛赞助商</div>
              <div class="cy_2">水晶宫俱乐部球衣赞助商</div>
            </div>
            <div class="gotoclick">
              <div class="cy_3" v-if="cy_a['a1']" :class="{animation3:cy_a['a1']}">
                <a href="#" target="_blank">了解详情</a>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="cy_a fl" :class="{index2:!cy_a['a2'],index3:cy_a['a2']}" @mouseenter="goEffect('a2')" @mouseleave="leaveEffect('a2')">
          <div class="cy_a1" :class="{cyanimate:cy_a['a2']}">
            <img src="@/assets/images/use_img/cy_img2.jpg">
          </div>
          <div class="cy_a2" :class="{padding44:!cy_a['a2'],padding24:cy_a['a2']}">
            <div class="cy-first_fl fl"><img src="@/assets/images/use_img/logo2.png"></div>
            <div class="cy-first_fr fr">
              <div class="cy_1">2017/2018 意甲官方冠名赞助商</div>
              <div class="cy_2">意甲官方冠名赞助商</div>

            </div>
            <div class="gotoclick">
              <div class="cy_3" v-if="cy_a['a2']" :class="{animation3:cy_a['a2']}">
                <a href="#" target="_blank">了解详情</a>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="cy_a fl" :class="{index2:!cy_a['a3'],index3:cy_a['a3']}" @mouseenter="goEffect('a3')" @mouseleave="leaveEffect('a3')">
          <div class="cy_a1" :class="{cyanimate:cy_a['a3']}"><img src="@/assets/images/use_img/cy_img2.jpg"></div>
          <div class="cy_a2" :class="{padding44:!cy_a['a3'],padding24:cy_a['a3']}">
            <div class="cy-first_fl fl"><img src="@/assets/images/use_img/logo3.png"></div>
            <div class="cy-first_fr fr">
              <div class="cy_1">2017/2018 赛季西甲联赛赞助商</div>
              <div class="cy_2">皇家社会官方合作伙伴</div>

            </div>
            <div class="gotoclick">
              <div class="cy_3" v-if="cy_a['a3']" :class="{animation3:cy_a['a3']}">
                <a href="#" target="_blank">了解详情</a>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="cy_b fl" :class="{index2:!cy_a['b1'],index3:cy_a['b1']}" @mouseenter="goEffect('b1')" @mouseleave="leaveEffect('b1')">
          <a href="#" target="_blank">
            <div class="hover-zoom" :class="{cyanimate:cy_a['b1'],index2:!cy_a['b1'],index3:cy_a['b1']}"></div>
          </a>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="cy-second">
      <div class="cy_canvas" ref='cy_canvas'><canvas id="waves"></canvas></div>
      <div class="cy-second_cont">
        <div class="w1200">
          <div class="cy-second_fl fl">
            <!-- 首页轮播 -->
            <div class="home-page-slider" :class="{slideLeft: slideIndex === 2}">
              <div class="slide-item">
                <swiper :options="swiperOption" ref="mySwiper">
                  <swiper-slide>
                    <div class="slide-item-1-1">
                      <div class="slide1" :class="{animationStart: carouselIndex === 0}"></div>
                      <div class="slide2" :class="{animationStart: carouselIndex === 0}"></div>
                      <div class="slide3" :class="{animationStart: carouselIndex === 0}"></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slide-item-1-2">
                      <div class="slide1" :class="{animationStart1: carouselIndex === 1}"></div>
                      <div class="slide2" :class="{animationStart1: carouselIndex === 1}"></div>
                      <div class="slide3" :class="{animationStart1: carouselIndex === 1}"></div>
                      <div class="slide4" :class="{animationStart1: carouselIndex === 1}"></div>
                      <div class="slide5" :class="{animationStart1: carouselIndex === 1}"></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slide-item-1-3">
                      <div class="slide1" :class="{animationStart1: carouselIndex === 2}"></div>
                      <div class="slide2" :class="{animationStart1: carouselIndex === 2}"></div>
                      <div class="slide3" :class="{animationStart1: carouselIndex === 2}"></div>
                    </div>
                  </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div> 
                </swiper>
              </div>
              <div class="slide-item">
                <swiper :options="swiperOption1" ref="mySwiper1">
                  <swiper-slide>
                    <div class="slide-item-2-1" :class="{animationStart3: carouselIndex === 0}">
                      <!-- <div class="phone" :class="{animationStart3: carouselIndex === 0}"> -->
                        <!-- <div class="phone-border"></div>
                        <div class="keep-out"></div> -->
                        <div class="slider-wrapper" @mousemove="imageWrapMove" @mouseout="imageWrapOut" ref="imageWrap">
                          <div ref="imgLeft" :style="{transition: transitionStyle, width: separateLeft + 'px'}" class="imgLeft">
                            <img src="@/assets/images/use_img/daytime.png" alt="" >
                          </div>
                          <div :style="{transition: transitionStyle}" ref="imgRight" class="imgRight">
                            <img src="@/assets/images/use_img/night.png" alt="">
                          </div>
                          <div class="divider-bar" :style="{transition: transitionStyle, left: separateLeft + 'px'}" ref="divider" style=""></div>
                        </div>
                      <!-- </div> -->
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slide-item-2-2">
                      <div class="slide1" :class="{animationStart4: carouselIndex === 1}"></div>
                      <div class="slide2" :class="{animationStart4: carouselIndex === 1}"></div>
                      <div class="slide3" :class="{animationStart4: carouselIndex === 1}"></div>
                      <div class="slide4" :class="{animationStart4: carouselIndex === 1}"></div>
                      <div class="slide5" :class="{animationStart4: carouselIndex === 1}"></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="slide-item-2-3">
                      <div class="slide1" :class="{animationStart5: carouselIndex === 2}"></div>
                      <div class="slide2" :class="{animationStart5: carouselIndex === 2}"></div>
                      <div class="slide3" :class="{animationStart5: carouselIndex === 2}"></div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </div>
            </div>
          </div>

          <div class="cy-second_fr fr">
            <div class="cy-sec_head"><img src="@/assets/images/use_img/wbicon1.png" alt="" style="width: 50px;"> <img src="@/assets/images/use_img/cy_img_2.png" style="position: relative;top: 5px; width:89%;"></div>
            <div class="cy-sec_cont">
              <div class="cy-sec_cont1">
                <ul>
                  <li :class="{current: slideIndex === 0}">
                    <a href="javascript:;" class="sec_current1 open" ref="sec_current1" @click="setSlideIndex(0)">万博全站客户端</a>
                  </li>
                  <li :class="{current: slideIndex === 2}">
                    <a href="javascript:;" class="sec_current2" ref="sec_current2" @click="setSlideIndex(2)">万博体育客户端</a>
                  </li>
                  <div class="clear"></div>
                </ul>
              </div>
              <div :class="['cy-sec_cont2','cy-sec_concept1',{animate:slideIndex == 0}] " :style="{display:slideIndex == 0?'block':'none'}">
                <p class="cy-sec_cont2_1 animation1">全球首家一体化移动娱乐客户端<br>海量<span>体育竞赛、真人娱乐厅、彩票、电子游艺</span>等最新娱乐项目掌中体验，即刻拥有！</p>
                <p class="cy-sec_cont2_1 animation2">无需越狱，无需使用app store等繁杂的应用市场<br>仅需使用手机浏览器中输入网址或qq/微信对二维码扫一扫即可纯净下载，轻松简单，方便快捷！</p>
                <div class="cy-sec_one animation2">
                  <div class="cy-sec_one-left fl cy-sec_one-left-img1"></div>
                  <div class="cy-sec_one-cent fl">
                    <p>&nbsp;扫一扫，立即游戏</p>
                    <ul>
                      <li class="scanImg1"></li>
                      <li class="scanImg2"></li>
                      <li class="scanImg3"></li>
                      <div class="clear"></div>
                    </ul>
                  </div>
                  <div class="cy-sec_one-right fl">
                    <p class="cy-sec_download">
                      <a href="#">点击下载</a>
                    </p>
                    <p class="cy-sec_yanshi">
                      <a href="#">演示安装</a>
                    </p>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div :class="['cy-sec_cont2','cy-sec_concept2',{animate:slideIndex == 2}]" :style="{display:slideIndex == 0?'none':'block'}">
                <p class="cy-sec_cont2_1 animation1">全球一流的原生体育客户端<br> 最尖端的移动投注享受，最佳赔率，最便捷的完美体验，高清免费视频/动画直播。
                </p>
                <p class="cy-sec_cont2_1 animation2">独一无二的超高品质体育投注环境<br> 英超，西甲、意甲、德甲等200多个国家的足球赛事，更有篮球、网球、斯诺克等，应有尽有。
                </p>
                <div class="cy-sec_one animation2">
                  <div class="cy-sec_one-left fl cy-sec_one-left-img2 "></div>
                  <div class="cy-sec_one-cent fl">
                    <p>&nbsp;扫一扫，立即游戏</p>
                    <ul>
                      <li class="scanImg4"></li>
                      <li class="scanImg5"></li>
                      <li class="scanImg6"></li>
                      <div class="clear"></div>
                    </ul>
                  </div>
                  <div class="cy-sec_one-right fl">
                    <p class="cy-sec_download">
                      <a href="#">点击下载</a>
                    </p>
                    <p class="cy-sec_yanshi">
                      <a href="#">演示安装</a>
                    </p>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <div class="cy-third">
      <div class="w1200">
        <div class="cy-third_left fl">
          <div class="cy-third_one">
            <p><img src="@/assets/images/use_img/cy_img24.png"><span>Excellent Purchasing Service</span></p>
            <p>最豪华赞助商/最符合亚洲人使用/最精准的数据支持</p>
          </div>
          <div class="cy-third_two">
            <ul>
              <li>
                <div class="videobg">
                  <video loop="loop" @mouseover="videoPlay(1)" ref="video1" @mouseout="videoPause(1)" class="videow">
                        <source src="@/assets/video/top1.mp4" type="video/mp4" />
                        <p class="cy-third_a cy-third_a_img1"></p>
                      </video>

                </div>

                <p class="cy-third_b cy-third_img1">最顶级全球赞助商</p>
                <p class="cy-third_c">CCTV5、国际斯诺克、英超、西甲、意甲，鼎力巨献</p>
              </li>
              <li>
                <div class="videobg">
                  <video loop="loop" @mouseover="videoPlay(2)" ref="video2" @mouseout="videoPause(2)" class="videow">
                        <source src="@/assets/video/top3.mp4" type="video/mp4" />
                        <p class="cy-third_a cy-third_a_img2" ></p>
                      </video>
                </div>
                <p class="cy-third_b cy-third_img2">最奢华的购彩服务</p>
                <p class="cy-third_c">极致的本土化体验，完美贴合亚洲人操作习惯</p>
              </li>
              <li>
                <div class="videobg">
                  <video loop="loop" @mouseover="videoPlay(3)" ref="video3" @mouseout="videoPause(3)"class="videow">
                        <source src="@/assets/video/top2.mp4" type="video/mp4" />
                        <p class="cy-third_a cy-third_a_img3" ></p>
                      </video>
                </div>
                <p class="cy-third_b cy-third_img3">最精准的数据支持</p>
                <p class="cy-third_c">立体动画直播，丝丝入扣，海量数据闪电更新</p>
              </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="cy-third_right fr">
          <div class="cy-third_three">
            <p><img src="@/assets/images/use_img/cy_img25.png"><span>Consummate</span></p>
            <p>10年零故障／信息独立存储／坚固不摧</p>
          </div>
          <div class="cy-third_four">
            <ul style="padding-top: 10px;">
              <li>
                <div class="cy-third_four-fl fl cy-third_img4 iconImg1"></div>
                <div class="cy-third_four-fr fr">
                  <h3>通讯安全</h3>
                  <p>极致奢华的购彩体验，专属数据库独立存储，账户信息密不透风！</p>
                </div>

                <div class="clear"></div>
              </li>
              <li>
                <div class="cy-third_four-fl fl cy-third_img5 iconImg2"></div>
                <div class="cy-third_four-fr fr">
                  <h3>支付安全</h3>
                  <p>支付渠道已通过<span class="zficon"></span>等权威认证，100％保障资金安全</p>
                </div>
                <div class="clear"></div>
              </li>
              <li>
                <div class="cy-third_four-fl fl cy-third_img5 iconImg3"></div>
                <div class="cy-third_four-fr fr">
                  <h3>技术安全</h3>
                  <p>尖端技术，多重加密。专业运维保障10年零事故运营，业界最稳定。</p>
                </div>
                <div class="clear"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="w1200 cy-third_time" ref="timeAnimate">
        <div class="cy-third_five">
          <p><img src="@/assets/images/use_img/cy_img26.png"><span>Safe and Efficient Trading</span></p>
        </div>
        <div class="cy-third_six">
          <div class="cy-third_six1 fl">
            <div class="cy-third_time1">
              <div class="cy-time1_fl fl">充值平均时间</div>
              <div class="cy-time1_fr fr">
                <span class="number1" style="width: 56px;display: inline-block;">
                    <div class="mt-number-animate">
                      <div class="mt-number-animate-dom number-animate-1" :class="{numberAnimateStart1: numberAnimateStart}">
                        <span class="mt-number-animate-span">0</span>
                        <span class="mt-number-animate-span">1</span>
                        <span class="mt-number-animate-span">2</span>
                        <span class="mt-number-animate-span">3</span>
                        <span class="mt-number-animate-span">4</span>
                        <span class="mt-number-animate-span">5</span>
                        <span class="mt-number-animate-span">6</span>
                        <span class="mt-number-animate-span">7</span>
                        <span class="mt-number-animate-span">8</span>
                        <span class="mt-number-animate-span">9</span>
                        <span class="mt-number-animate-span">0</span>
                        <span class="mt-number-animate-span">.</span>
                  </div>
                    <div class="mt-number-animate-dom number-animate-2" :class="{numberAnimateStart2: numberAnimateStart}">
                        <span class="mt-number-animate-span">0</span>
                        <span class="mt-number-animate-span">1</span>
                        <span class="mt-number-animate-span">2</span>
                        <span class="mt-number-animate-span">3</span>
                        <span class="mt-number-animate-span">4</span>
                        <span class="mt-number-animate-span">5</span>
                        <span class="mt-number-animate-span">6</span>
                        <span class="mt-number-animate-span">7</span>
                        <span class="mt-number-animate-span">8</span>
                        <span class="mt-number-animate-span">9</span>
                        <span class="mt-number-animate-span">0</span>
                        <span class="mt-number-animate-span">.</span>
                    </div>
                </div>
              </span>
            <i style="float:right">秒</i></div>
          <div class="clear"></div>
        </div>
        <div class="cy-third_jindu">
          <!-- <div class="cy-third_yjindu" style="width:60%;">&nbsp;</div> -->
          <div id="progressbar1" class="proggress" :class="{numberAnimateStart: numberAnimateStart}"></div>
        </div>
      </div>
      <div class="cy-third_sx fl"><img src="@/assets/images/use_img/cy_img11.jpg"></div>
      <div class="cy-third_six1 fl">
        <div class="cy-third_time1">
          <div class="cy-time1_fl fl">平均取款时间</div>
          <div class="cy-time1_fr fr">
            <span class="number2" style="float:left;">
              <div class="mt-number-animate">
                <div class="mt-number-animate-dom number-animate-3" :class="{numberAnimateStart3: numberAnimateStart}">
                  <span class="mt-number-animate-span">0</span>
                  <span class="mt-number-animate-span">1</span>
                  <span class="mt-number-animate-span">2</span>
                  <span class="mt-number-animate-span">3</span>
                  <span class="mt-number-animate-span">4</span>
                  <span class="mt-number-animate-span">5</span>
                  <span class="mt-number-animate-span">6</span>
                  <span class="mt-number-animate-span">7</span>
                  <span class="mt-number-animate-span">8</span>
                  <span class="mt-number-animate-span">9</span>
                  <span class="mt-number-animate-span">0</span>
                  <span class="mt-number-animate-span">.</span>
                </div>
            </div>
          </span>
          <i style="float:left">分</i>
          <span class="number3" style="float:left;">
            <div class="mt-number-animate">
              <div class="mt-number-animate-dom number-animate-4" :class="{numberAnimateStart4: numberAnimateStart}">
                <span class="mt-number-animate-span">0</span>
                <span class="mt-number-animate-span">1</span>
                <span class="mt-number-animate-span">2</span>
                <span class="mt-number-animate-span">3</span>
                <span class="mt-number-animate-span">4</span>
                <span class="mt-number-animate-span">5</span>
                <span class="mt-number-animate-span">6</span>
                <span class="mt-number-animate-span">7</span>
                <span class="mt-number-animate-span">8</span>
                <span class="mt-number-animate-span">9</span>
                <span class="mt-number-animate-span">0</span>
                <span class="mt-number-animate-span">.</span>
              </div>
              <div class="mt-number-animate-dom number-animate-5" :class="{numberAnimateStart5: numberAnimateStart}">
                <span class="mt-number-animate-span">0</span>
                <span class="mt-number-animate-span">1</span>
                <span class="mt-number-animate-span">2</span>
                <span class="mt-number-animate-span">3</span>
                <span class="mt-number-animate-span">4</span>
                <span class="mt-number-animate-span">5</span>
                <span class="mt-number-animate-span">6</span>
                <span class="mt-number-animate-span">7</span>
                <span class="mt-number-animate-span">8</span>
                <span class="mt-number-animate-span">9</span>
                <span class="mt-number-animate-span">0</span>
                <span class="mt-number-animate-span">.</span>
              </div>
          </div>
        </span>
        <i style="float:right">秒</i>
    </div>
  <div class="clear"></div>
</div>
<div class="cy-third_jindu" style="margin-top:17px;">
  <!-- <div class="cy-third_yjindu" style="width:80%;">&nbsp;</div> -->
  <div id="progressbar2" class="proggress" :class="{numberAnimateStart: numberAnimateStart}"></div>
</div>
</div>
<div class="cy-third_sx fl"><img src="@/assets/images/use_img/cy_img11.jpg"></div>
<div class="cy-third_six2 fr">
  <div class="cy-third_six2_fl fl number4-wrap">
    <span class="number4">
      <div class="mt-number-animate">
          <div class="mt-number-animate-dom number-animate-6" :class="{numberAnimateStart6: numberAnimateStart}">
            <span class="mt-number-animate-span">0</span>
            <span class="mt-number-animate-span">1</span>
            <span class="mt-number-animate-span">2</span>
            <span class="mt-number-animate-span">3</span>
            <span class="mt-number-animate-span">4</span>
            <span class="mt-number-animate-span">5</span>
            <span class="mt-number-animate-span">6</span>
            <span class="mt-number-animate-span">7</span>
            <span class="mt-number-animate-span">8</span>
            <span class="mt-number-animate-span">9</span>
            <span class="mt-number-animate-span">0</span>
            <span class="mt-number-animate-span">.</span>
          </div>
          <div class="mt-number-animate-dom number-animate-7" :class="{numberAnimateStart7: numberAnimateStart}">
            <span class="mt-number-animate-span">0</span>
            <span class="mt-number-animate-span">1</span>
            <span class="mt-number-animate-span">2</span>
            <span class="mt-number-animate-span">3</span>
            <span class="mt-number-animate-span">4</span>
            <span class="mt-number-animate-span">5</span>
            <span class="mt-number-animate-span">6</span>
            <span class="mt-number-animate-span">7</span>
            <span class="mt-number-animate-span">8</span>
            <span class="mt-number-animate-span">9</span>
            <span class="mt-number-animate-span span-0">0</span>
            <span class="mt-number-animate-span">.</span>
          </div>
      </div>
    </span>
  </div>
<div class="cy-third_six2_fr fr">
  <div class="cy-third_six2_fr_1">
    <div class="cy-third_six2_fr_a1 fl"><img src="@/assets/images/use_img/cy_img17.png"></div>
    <div class="cy-third_six2_fr_b1 fr"><img src="@/assets/images/use_img/cy_img18.png"></div>
    <div class="clear"></div>
  </div>
  <div class="cy-third_six2_fr_2">多家主流银行最全付款方式</div>
</div>
<div class="clear"></div>
</div>
<div class="clear"></div>
</div>
</div>
</div>
<!-- 手风琴 -->
<div class="cy-fourth">
  <div class="w1200">
    <div class="cy-fourth_cent">
      <div class="dh">
        <ul>
          <li
            v-for="item in list"
            :key="item.id"
            :style="[{ left: `${item.left}px`, zIndex: `${item.id + 10}` }]"
            @mouseover="accordionMouseover(item.id)"
          >
            <a href="javascript:;">
              <img v-if="item.id !== curr_list" :src="item.img" alt="" class='up'>
              <img v-else :src="item.active_img" alt="" class='down'>
            </a>
            <div class="layer">
              <p class="p0">{{copywriting[item.id].title}}</p>
              <p class="p1" :style="{left: item.id !== curr_list ? '-30px': '-100%'}">{{copywriting[item.id].date}}</p>
              <div class="p2" v-show="item.id === curr_list">
                <p class="p2_cy1">{{copywriting[item.id].content.title}}</p>
                <p class="p2_cy2" v-html="copywriting[item.id].content.content"></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
  <v-footer></v-footer>
</div>
</template>

<script>
  import { client } from '@/utils';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'; 
  // 手风琴组件的文案
  import copywriting from './accordion';
  let SineWaves = require('../../static/cy_sine-waves.min.js');

  export default {
    name: 'hoverpp',
    data() {
      var that = this;
      // 每个 li -> left 的基准值
      let base_li_left = 0;
      // left 的比例系数
      let rate = 0;
      let win_width = client('width');
      // 根据 window 的宽度计算不同的 base_li_left 和 rate
      if (win_width < 1300) {
        base_li_left = 260;
        rate = 679 / 11;
      } else {
        base_li_left = 274;
        rate = 869 / 11;
      }
      // 数据总数
      let listSize = 12;
      // 数据列表
      let list = [];
      for (let i = 0; i < listSize; i ++) {
        let _i = i + 1;
        list.push({
          // 唯一标识
          id: i,
          // 偏移量
          left: i === 0 ? 0 : ((i * rate - rate) + base_li_left),
          // 小图
          img: require(`@/assets/images/use_img/${_i}.jpg`),
          // 大图
          active_img: require(`@/assets/images/use_img/${_i>9?_i:`0${_i}`}${_i>9?_i:`0${_i}`}.jpg`)
        });
      }

      return {
        numberAnimateStart: false,
        slideIndex: 0,
        carouselIndex: 0,
        autoClickTime: null,
        value1: 0,
        value2:0,
        value3:0,
        cy_a: {
          a1: false,
          a2: false,
          a3: false,
          b1: false
        },
        // window 宽度
        win_width,
        // 数据列表
        list,
        // 当前展示的是 li
        curr_list: 0,
        // 文案
        copywriting,
        swiperOption: {
          autoplay:true,
          autoplay: {
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            slideChangeTransitionEnd: function(){
              that.carouselIndex = this.activeIndex;
            }
          }
        },
        swiperOption1: {
          autoplay:true,
          autoplay: {
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            slideChangeTransitionEnd: function(){
              that.carouselIndex = this.activeIndex;
            }
          }
        },
        separateLeft: 145,
        transitionStyle: 'all 0.3s',
        viewWidth: 0
      }
    },
    mounted() {
      this.viewWidth = document.documentElement.clientWidth;
      var that = this;
      var waves = new SineWaves({
        el: document.getElementById('waves'),

        speed: 3,

        width: function() {
          return document.getElementsByClassName('cy_canvas')[0] ? document.getElementsByClassName('cy_canvas')[0].offsetWidth : '';
        },

        height: function() {
          return document.getElementsByClassName('cy_canvas')[0] ? document.getElementsByClassName('cy_canvas')[0].offsetHeight : '';
        },

        ease: 'SineInOut',

        wavesWidth: '80%',

        waves: [{
            timeModifier: 2,
            lineWidth: 4,
            amplitude: -150,
            wavelength: 65
          },
          {
            timeModifier: 2,
            lineWidth: 2,
            amplitude: -75,
            wavelength: 40,
          }
        ],

        // Resize
        resizeEvent: function() {
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          gradient.addColorStop(0, "rgba(254,193,108,.7)");
          gradient.addColorStop(.3, "rgba(255,240,228,.8)");
          gradient.addColorStop(1, "rgba(255,240,228,.5)");


          var index = -1;
          var length = this.waves.length;
          while (++index < length) {
            this.waves[index].strokeStyle = gradient;
          }

          // Clean Up
          index = void 0;
          length = void 0;
          gradient = void 0;
        }
      });
      var viewHeight = document.documentElement.clientHeight;
      window.addEventListener("scroll", function() {
        if (that.$refs.timeAnimate) {
          var rect = that.$refs.timeAnimate.getBoundingClientRect();
          if (rect.bottom >= 0 && rect.top < viewHeight) {
            that.numberAnimateStart = true;
          }
        }
      });
      // 全站体育客户端tab自动切换
      this.autoClick();
    },
    methods: {
      imageWrapMove(e){
        var zoom = 5/6, offsetLeft = this.$refs.imageWrap.getBoundingClientRect().left, fullWidth = this.$refs.imageWrap.offsetWidth, mouseX;
        if(this.viewWidth < 1300){
          mouseX = e.pageX/zoom - offsetLeft;
        }else{
          mouseX = e.pageX - offsetLeft;
        }
        if(mouseX < 0) {
            mouseX = 0;
        } else if(mouseX > fullWidth) {
            mouseX = fullWidth
        }
        this.separateLeft = mouseX;
        this.transitionStyle = 'none';
      },
      imageWrapOut(){
        this.separateLeft = 145;
        this.transitionStyle = 'all 0.3s';
      },
      goEffect: function(num) {
        this['cy_a'][num] = true;
      },
      leaveEffect: function(num) {
        this['cy_a'][num] = false;
      },
      setSlideIndex(n) {
        this.slideIndex = n;
        this.carouselIndex = 0;
        this.swiper.slideTo(0, 0, false);
        this.swiper1.slideTo(0, 0, false);
        this.autoClick();
      },
      autoClick(){
        clearTimeout(this.autoClickTime);
        this.autoClickTime = setTimeout(()=>{
          if(this.slideIndex === 0){
            this.$refs.sec_current2.click();
          }else{
            this.$refs.sec_current1.click();
          }
          this.autoClick();
        }, 9300);
      },
      onChange(oldValue, value) {
        this.carouselIndex = value;
      },
      onChange1(oldValue, value) {
        this.carouselIndex = value;
      },
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
        }
      },
      // 手风琴组件 -> 鼠标滑过每一个 li 的执行事件
      accordionMouseover(id) {
        // console.log(this.list[id].left);
        let last_li = this.curr_list;
        // 当前滑过的 li 在上一次的 li 之后
        if (id > last_li) {
          // 改变当前滑过的 li 到 上一次的 li 之前所有 li 的 left 值
          for (let i = last_li + 1; i < id + 1; i++) {
            let left = this.list[i].left;
            this.list[i].left = left - 196;
          }
        } else { // 当前滑过的 li 在上一次的 li 之前
          for (let i = id + 1; i < last_li + 1; i++) {
            let left = this.list[i].left;
            this.list[i].left = left + 196;
          }
        }
        // 改变当前 list 标识
        this.curr_list = id;
      },
    },
    components: {
      swiper,  
      swiperSlide  
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      },
      swiper1 () {
        return this.$refs.mySwiper1.swiper
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #home {
    /* 修改iview的样式(仅首页生效) */

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
      bottom: 60px;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
      height: 10px;
      width: 10px;
      margin: 0 5px;
      border-radius: 5px;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active{
      background: linear-gradient(to bottom, #ffce6d, #ff9a4e) !important;
      width: 24px;
    }
    .ivu-carousel-dots li.ivu-carousel-active>button {
      background: linear-gradient(to bottom, #ffce6d, #ff9a4e) !important;
    }

    .ivu-carousel-dots li button {
      background: #cccccc;
      opacity: 1
    }

    .ivu-carousel-dots li button:hover {
      background: #f8b24d;
    }

    .ivu-carousel-dots {
      height: 60px;
      z-index: 1
    }

    .ivu-carousel-dots li button {
      height: 5px
    }

    .slide-item .ivu-carousel-dots-inside {
      display: block;
      position: absolute;
      bottom: 18px;
    }

    .slide-item .ivu-carousel-dots li button {
      height: 8px;
      width: 8px;
      margin: 0 4px;
    }

    .slide-item .ivu-carousel-dots li.ivu-carousel-active>button {
      width: 24px;
      border-radius: 4px;
    }
  }
</style>
<style scoped>
  /* content内容样式 */
  .content {
    max-width: 1920px;
    margin:auto;
    /* width: 100%; */
    background-color: #fff;
    box-sizing: content-box;
  }

  .w1242 {
    width: 1242px;
    margin: 0 auto
  }

  .w1200 {
    width: 1200px;
    margin: 0 auto
  }

  .cy-first {
    padding-top: 30px;
    position: relative
  }

  .cy_back1 {
    width: 100%;
    height: 120px;
    overflow: hidden;
    padding-top: 10px;
    box-sizing: content-box;
  }

  .cy_back1 img {
    width: 100%;
  }

  .cy-first_one {
    width: 1200px;
    left: 21px;
    position: absolute;
    bottom: 50px
  }

  .cy_a {
    width: 300px;
    height: 148px;
    position: relative;
    z-index: 2
  }

  .cy_a1 {
    width: 300px;
    height: 148px;
    top: 0;
    left: 0;
    transition: all .5s;
  }

  .cy_a1 img {
    width: 100%;
  }

  .cyanimate {
    transform: scale(1.1);
  }

  .cy_a2 {
    width: 260px;
    height: auto;
    padding: 44px 20px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: content-box;
    transition: all .5s;
  }

  .cy_a .cy-first_fl {
    width: 45px;
    height: auto
  }

  .cy_a .cy-first_fl img {
    margin-top: 7px
  }

  .cy_a .cy-first_fr {
    width: 210px;
    height: auto;
  }

  .cy_a .cy-first_fr .cy_1 {
    width: 100%;
    font-size: 14px;
    color: #666;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cy_a .cy-first_fr .cy_2 {
    width: 100%;
    font-size: 18px;
    color: #000;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .gotoclick .cy_3 {
    padding-top: 10px;
    width: 135px;
    margin: 0 auto
  }

  .gotoclick .cy_3 a {
    width: 135px;
    height: 32px;
    line-height: 32px;
    display: block;
    border-radius: 16px;
    background: -webkit-linear-gradient(top, #ffce6d, #ff9a4e) !important;
    background: -o-linear-gradient(bottom, #ffce6d, #ff9a4e) !important;
    background: -moz-linear-gradient(bottom, #ffce6d, #ff9a4e) !important;
    background: linear-gradient(to bottom, #ffce6d, #ff9a4e) !important;
    text-align: center;
    font-size: 16px;
    color: #fff
  }

  .cy_b {
    width: 300px;
    height: 160px;
    margin-top: -12px
  }

  .gotoclick {
    width: 100%;
    text-align: center;
    float: left
  }

  .hover-zoom {
    float: left;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-image: url('~@/assets/images/use_img/cy_img1.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    transition: all .5s;
  }

  .index3 {
    z-index: 3;
  }

  .index2 {
    z-index: 2;
  }

  .padding24 {
    padding-top: 24px;
    padding-bottom: 24px
  }

  .padding44 {
    padding-top: 44px;
    padding-bottom: 44px
  }

  .animation3 {
    animation: fadeInUp .5s .2s ease both;
  }

  .cy-second {
    width: 100%;
    height: 446px;
    padding-top: 40px;
    background: url('~@/assets/images/use_img/cy_img12.jpg') no-repeat center bottom;
    position: relative;
    box-sizing: content-box;
  }

  .cy_canvas {
    width: 60%;
    height: 446px;
    position: absolute;
    bottom: 0;
    left: 0
  }

  .cy-second .cy-second_cont {
    position: absolute;
    width: 100%;
    height: 446px;
    bottom: 0;
    left: 0
  }

  .cy-second_fr {
    width: 600px;
    height: auto
  }

  .cy-second_fl {
    width: 600px;
    height: 500px;
    text-align: center;
    padding-top: 1px;
    position: relative;
    overflow: hidden;
  }

  /* 首页轮播 */

  .home-page-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    height: 500px;
    ;
    transition: all .5s;
    z-index: 9;
  }

  .slideLeft {
    transform: translateX(-50%);
  }

  .slide-item {
    width: 600px;
    height: 100%;
    float: left;
  }

  @keyframes slideItem1_1 {
    0% {
      transform: translate(-20px, 20px);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .home-page-slider .slide-item .animationStart {
    /* animation: slideItem1_1 3s ease; */
    animation-name: slideItem1_1;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count:1;
  }

  .home-page-slider .slide-item .animationStart1 {
    /* animation: slideItem2_1 3s ease; */
    animation-name: slideItem2_1;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count:1;
  }

  .slide-item-1-1 {
    width: 600px;
    height: 500px;
    background: url(~@/assets/images/use_img/slider4.png) no-repeat -40px top;
    position: relative;
  }

  .slide-item-1-1 .slide3 {
    position: absolute;
    width: 397px;
    height: 221px;
    background: url(~@/assets/images/use_img/slider4-3.png) no-repeat;
    right: 90px;
    bottom: 26px;
    z-index: 1;
    opacity: 0;
    transform: translate(-20px, 20px);
    animation-delay: .5s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-1 .slide2 {
    position: absolute;
    width: 401px;
    height: 222px;
    background: url(~@/assets/images/use_img/slider4-2.png) no-repeat;
    right: 78px;
    bottom: 40px;
    z-index: 2;
    transform: translate(-30px, 30px);
    opacity: 0;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-1 .slide1 {
    position: absolute;
    width: 383px;
    height: 235px;
    background: url(~@/assets/images/use_img/slider4-1.png) no-repeat;
    right: 58px;
    bottom: 60px;
    z-index: 3;
    opacity: 0;
    transform: translate(-40px, 40px);
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
  }

  .slide-item-1-2 {
    width: 600px;
    height: 500px;
    background: url(~@/assets/images/use_img/slider5.png) no-repeat -70px 0px;
    position: relative;
  }

  @keyframes slideItem2_1 {
    0% {
      transform: translate(-6px, 40px);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .slide-item-1-2 .slide1 {
    position: absolute;
    width: 270px;
    height: 114px;
    background: url(~@/assets/images/use_img/slider5_18.png) no-repeat;
    left: 6px;
    bottom: 50px;
    z-index: 3;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: .5s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-2 .slide2 {
    position: absolute;
    width: 281px;
    height: 116px;
    background: url(~@/assets/images/use_img/slider5_15.png) no-repeat;
    left: -4px;
    bottom: 66px;
    z-index: 4;
    opacity: 0;
    transform: translate(-6px, 40px);
    /* animation: slideItem2_1 1s ease; */
    animation-delay: 1s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-2 .slide3 {
    position: absolute;
    width: 273px;
    height: 81px;
    background: url(~@/assets/images/use_img/slider5_10.png) no-repeat;
    left: 120px;
    top: 146px;
    z-index: 1;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: .5s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-2 .slide4 {
    position: absolute;
    width: 270px;
    height: 82px;
    background: url(~@/assets/images/use_img/slider5_06.png) no-repeat;
    left: 114px;
    top: 134px;
    z-index: 2;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: 1s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-2 .slide5 {
    position: absolute;
    width: 272px;
    height: 82px;
    background: url(~@/assets/images/use_img/slider5_03.png) no-repeat;
    left: 104px;
    top: 114px;
    z-index: 3;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-3 {
    width: 600px;
    height: 500px;
    background: url(~@/assets/images/use_img/slider6.png) no-repeat left top;
    position: relative;
  }

  .slide-item-1-3 .slide1 {
    position: absolute;
    width: 600px;
    height: 505px;
    background: url(~@/assets/images/use_img/slider6-3.png) no-repeat;
    left: -20px;
    bottom: -10px;
    z-index: 1;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: .5s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-3 .slide2 {
    position: absolute;
    width: 600px;
    height: 505px;
    background: url(~@/assets/images/use_img/slider6-2.png) no-repeat;
    left: -15px;
    bottom: -10px;
    z-index: 2;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: 1s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  .slide-item-1-3 .slide3 {
    position: absolute;
    width: 600px;
    height: 505px;
    background: url(~@/assets/images/use_img/slider6-1.png) no-repeat;
    left: -10px;
    bottom: -10px;
    z-index: 3;
    opacity: 0;
    transform: translate(-6px, 40px);
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  /* 外轮播第二页 */

  .slide-item-2-1 {
    width: 600px;
    height: 500px;
    position: relative;
    background: url(~@/assets/images/use_img/slider1bg.png) no-repeat;
  }
  .slide-item-2-1 .slider-wrapper .divider-bar{
    background: url(~@/assets/images/use_img/mid_03.png) no-repeat;
    position: absolute;
    left: 50%;
    top: 8px;
    z-index: 1000;
    width: 78px;
    height: 403px;
    margin-left: -39px;
    background-size: cover;
    cursor: pointer;
  }
  .home-page-slider .slide-item .animationStart3 {
    /* animation: slideItem3_1 2s ease; */
    animation-name: slideItem3_1;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  .home-page-slider .slide-item .animationStart4 {
    /* animation: slideItem3_2 3s ease; */
    animation-name: slideItem3_2;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  .home-page-slider .slide-item .animationStart5 {
    /* animation: slideItem3_3 3s ease; */
    animation-name: slideItem3_3;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  @keyframes slideItem3_1 {
    0% {
      transform: translateY(120px);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .slide-item-2-1 .phone {
    width: 304px;
    padding: 10px 20px 0;
    height: 396px;
    position: absolute;
    bottom: 23px;
    left: 80px;
    animation-delay: 1.5s;
    background-size: cover;
  }

  .phone-border {
    background: url(~@/assets/images/client/kuang_03.png) no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    background-size: cover;
  }

  .slide-item-2-1 .slider-wrapper {
    width: 290px;
    height: 403px;
    left: 166px;
    top: 42px;
    border-radius: 5px;
    position: absolute;
    overflow: hidden;
  }

  .keep-out {
    height: 10px;
    background: #fff;
    position: absolute;
    width: 100%;
    left: 0;
    top: 10px;
    z-index: 998;
  }

  .slide-item-2-1 .phone .slider-wrapper img {
    width: 356px;
  }

  .slide-item-2-1 .slide1 {
    width: 600px;
    height: 505px;
    background: url(~@/assets/images/use_img/t1.png) no-repeat;
    right: 25px;
    bottom: 14px;
    position: absolute;
    transform: scale(1.2, 1.1);
    animation-delay: 1.5s;
  }

  .slide-item-2-2 {
    width: 600px;
    height: 500px;
    position: relative;
    background: url(~@/assets/images/use_img/slider2bg.png) no-repeat;
  }
  .slide-item-2-1 .slider-wrapper .imgLeft, .slide-item-2-1 .slider-wrapper .imgRight{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
  }
  .slide-item-2-1 .slider-wrapper .imgRight{
    z-index: 1;
  }
  .slide-item-2-1 .phone .slider-wrapper img:last-child{
    z-index: 1;
  }
  @keyframes slideItem3_2 {
    0% {
      transform: translate(-20px, 20px);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .slide-item-2-2 .slide1 {
    width: 166px;
    height: 107px;
    background: url(~@/assets/images/use_img/slider2-3.png) no-repeat;
    position: absolute;
    z-index: 1;
    top: 172px;
    left: 176px;
  }

  .slide-item-2-2 .slide2 {
    width: 183px;
    height: 124px;
    background: url(~@/assets/images/use_img/slider2-2.png) no-repeat;
    position: absolute;
    z-index: 2;
    top: 142px;
    left: 188px;
    opacity: 0;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
  }

  .slide-item-2-2 .slide3 {
    width: 226px;
    height: 150px;
    background: url(~@/assets/images/use_img/slider2-1.png) no-repeat;
    position: absolute;
    z-index: 3;
    top: 102px;
    left: 200px;
    opacity: 0;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
  }

  .slide-item-2-2 .slide4 {
    width: 201px;
    height: 109px;
    background: url(~@/assets/images/use_img/slider2-4.png) no-repeat;
    position: absolute;
    z-index: 3;
    bottom: 66px;
    left: 226px;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .slide-item-2-2 .slide5 {
    width: 212px;
    height: 115px;
    background: url(~@/assets/images/use_img/slider2-5.png) no-repeat;
    position: absolute;
    z-index: 4;
    bottom: 88px;
    left: 236px;
    opacity: 0;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
  }

  .slide-item-2-3 {
    width: 600px;
    height: 500px;
    position: relative;
    background: url(~@/assets/images/use_img/slider3bg.png) no-repeat -70px top;
  }

  @keyframes slideItem3_3 {
    0% {
      transform: translate(20px, 20px);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .slide-item-2-3 .slide1 {
    width: 308px;
    height: 183px;
    background: url(~@/assets/images/use_img/slider3-3.png) no-repeat;
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    opacity: 0;
    animation-delay: .5s;
    animation-fill-mode: forwards;
  }

  .slide-item-2-3 .slide2 {
    width: 335px;
    height: 204px;
    background: url(~@/assets/images/use_img/slider3-2.png) no-repeat;
    position: absolute;
    z-index: 2;
    top: 80px;
    left: 60px;
    opacity: 0;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  .slide-item-2-3 .slide3 {
    width: 335px;
    height: 221px;
    background: url(~@/assets/images/use_img/slider3-1.png) no-repeat;
    position: absolute;
    z-index: 3;
    top: 50px;
    left: 10px;
    opacity: 0;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }

  .cy-second_fr .cy-sec_head {
    margin-top: 10px
  }

  .cy-second_fr .cy-sec_cont {
    width: 100%;
    margin-top: 15px
  }

  .cy-sec_cont1 {
    width: 100%;
    border-bottom: 1px solid #eee
  }

  .cy-sec_cont1 ul li {
    float: left;
    padding: 10px
  }

  .cy-sec_cont1 ul li a {
    padding: 0 10px;
    font-size: 16px;
    color: #666;
    display: block
  }

  .cy-sec_cont1 ul li.current {
    background: url(~@/assets/images/use_img/cy_img6.jpg) repeat-x center bottom
  }

  .cy-sec_cont2 {
    width: 100%;
    height: auto;
    padding-top: 10px
  }

  .cy-sec_cont2 .cy-sec_cont2_1 {
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    line-height: 30px
  }

  .cy-sec_cont2 .cy-sec_cont2_1 span {
    color: #f8b24d;
    line-height: 24px
  }

  .cy-sec_cont2 .cy-sec_one {
    width: 100%;
    margin-top: 27px
  }

  .cy-sec_cont2 .cy-sec_one .cy-sec_one-left img {
    width: 133px;
    height: 133px;
    padding: 5px;
    background-color: #fff;
    border-radius: 2px
  }

  .cy-sec_cont2 .cy-sec_one .cy-sec_one-cent {
    width: 165px;
    margin: 60px 0 0 20px
  }

  .cy-sec_cont2 .cy-sec_one .cy-sec_one-cent ul li {
    float: left;
    margin-top: 10px;
    overflow: hidden;
    margin-right: 10px
  }

  .cy-sec_cont2 .cy-sec_one .cy-sec_one-cent ul li img {
    width: 100%;
    height: 100%
  }

  .cy-sec_cont2 .cy-sec_one .cy-sec_one-right {
    margin-top: 10px
  }

  .cy-sec_download a {
    width: 238px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    display: block;
    background: url(~@/assets/images/use_img/cy_img15.jpg) repeat-x
  }

  .cy-sec_download a:hover {
    box-shadow: 3px 5px 20px #d2d1d1
  }

  .cy-sec_yanshi {
    margin-top: 30px
  }

  .cy-sec_yanshi a {
    display: block;
    width: 234px;
    height: 46px;
    box-sizing: content-box;
    line-height: 46px;
    border: 2px solid #febe6a;
    color: #febe6a;
    text-align: center;
    border-radius: 5px;
    background: url(~@/assets/images/use_img/cy_img6.png) no-repeat 40px center;
    background-size: 30px auto
  }

  .cy-sec_yanshi a:hover {
    box-shadow: 3px 5px 20px #d2d1d1
  }

  .scanImg1 {
    background: url('~@/assets/images/use_img/cy_img3.png') no-repeat;
    width: 35px;
    height: 35px
  }

  .scanImg2 {
    background: url('~@/assets/images/use_img/cy_img4.png') no-repeat;
    width: 35px;
    height: 35px
  }

  .scanImg3 {
    background: url('~@/assets/images/use_img/cy_img5.png') no-repeat;
    width: 35px;
    height: 35px
  }

  .scanImg4 {
    background: url('~@/assets/images/use_img/cy_img3.png') no-repeat;
    width: 35px;
    height: 35px
  }

  .scanImg5 {
    background: url('~@/assets/images/use_img/cy_img4.png') no-repeat;
    width: 35px;
    height: 35px
  }

  .scanImg6 {
    background: url('~@/assets/images/use_img/cy_img5.png') no-repeat;
    width: 35px;
    height: 35px
  }

  .cy-sec_one-left-img1 {
    background: url('~@/assets/images/use_img/cy_img7.jpg') no-repeat;
    width: 145px;
    height: 145px
  }

  .cy-sec_one-left-img2 {
    background: url('~@/assets/images/use_img/cy_img7.jpg') no-repeat;
    width: 145px;
    height: 145px
  }

  .cy-third {
    padding: 60px 0;
    background-color: rgba(235, 235, 235, .2);
    position: relative;
    z-index: 10
  }

  .cy-third_left {
    width: 852px;
    height: auto
  }

  .cy-third_one img {
    width: 175px;
    height: 24px
  }

  .cy-third_one span {
    font-size: 16px;
    margin-left: 10px;
    color: #999;
    text-transform: uppercase
  }

  .cy-third_two {
    width: 100%;
    height: auto;
    margin-top: 20px
  }

  .cy-third_two ul li {
    float: left;
    width: 284px;
    height: 338px;
    position: relative;
    overflow: hidden;
    color: #fff
  }

  .cy-third_two ul li .cy-third_a {
    background: url() no-repeat center 100% 100%;
    transition: all 1s
  }

  .cy-third_two ul li:hover .cy-third_a {
    transform: scale(1.2)
  }

  .cy-third_a {
    width: 284px;
    height: 338px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0
  }

  .cy-third_a img {
    width: 100%;
    min-height: 338px
  }

  .cy-third_a_img1 {
    background-image: url('~@/assets/images/use_img/cy_img8.jpg')
  }

  .cy-third_a_img2 {
    background-image: url('~@/assets/images/use_img/cy_img9.jpg')
  }

  .cy-third_a_img3 {
    background-image: url('~@/assets/images/use_img/cy_img10.jpg')
  }

  .cy-third_b {
    position: absolute;
    top: 110px;
    left: 20px;
    font-size: 20px;
    padding-left: 60px
  }

  .cy-third_img1 {
    height: 44px;
    line-height: 44px;
    background: url('~@/assets/images/use_img/cy_img9.png') no-repeat left center;
    background-size: 44px 44px
  }

  .cy-third_img2 {
    height: 44px;
    line-height: 44px;
    background: url('~@/assets/images/use_img/cy_img10.png') no-repeat left center;
    background-size: 44px 44px
  }

  .cy-third_img3 {
    height: 44px;
    line-height: 44px;
    background: url('~@/assets/images/use_img/cy_img11.png') no-repeat left center;
    background-size: 44px 44px
  }

  .cy-third_c {
    position: absolute;
    top: 170px;
    left: 20px;
    width: 244px;
    font-size: 16px;
    line-height: 28px
  }

  .cy-third_right {
    width: 348px;
    height: auto
  }

  .cy-third_three img {
    width: 175px;
    height: 24px
  }

  .cy-third_three span {
    font-size: 16px;
    margin-left: 10px;
    color: #999;
    text-transform: uppercase
  }

  .cy-third_four {
    width: 318px;
    height: 338px;
    margin-top: 21px;
    padding-left: 30px;
    background-color: #fff;
    overflow: hidden;
    box-sizing: content-box;
  }

  .cy-third_four ul li {
    width: 100%;
    margin: 20px 0
  }

  .cy-third_four-fl {
    width: 40px
  }

  .cy-third_four-fl img {
    width: 55px
  }

  .cy-third_four-fr {
    width: 224px;
    padding-right: 20px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    -webkit-line-clamp: 2;
    overflow: hidden;
    box-sizing: content-box;
  }

  .cy-third_four-fr h3 {
    font-size: 16px;
    color: #333
  }

  .cy-third_four-fr p {
    font-size: 14px;
    color: #999;
    line-height: 22px;
    margin-top: 10px
  }

  .cy-third_one p {
    font-size: 16px;
    color: #999
  }

  .cy-third_one img {
    height: auto
  }

  .cy-third_three img {
    height: auto;
  }

  .cy-third_three p {
    font-size: 16px;
    color: #999
  }

  .iconImg1 {
    background: url('~@/assets/images/use_img/aqtx.png') no-repeat;
    width: 55px;
    height: 56px;
    background-size: 55px
  }

  .iconImg2 {
    background: url('~@/assets/images/use_img/zfan.png') no-repeat;
    width: 55px;
    height: 56px;
    background-size: 55px
  }

  .iconImg3 {
    background: url('~@/assets/images/use_img/aq.png') no-repeat;
    width: 55px;
    height: 56px;
    background-size: 55px
  }

  .zficon {
    display: inline-block;
    background: url("~@/assets/images/use_img/cy_img15.png");
    width: 126px;
    height: 22px;
    vertical-align: -6px;
  }

  .cy-third_time {
    padding-top: 50px
  }

  .cy-third_five img {
    width: 175px;
    height: 24px
  }

  .cy-third_five span {
    font-size: 16px;
    margin-left: 10px;
    color: #999;
    text-transform: uppercase
  }

  .cy-third_six {
    width: 100%;
    margin-top: 25px
  }

  .cy-third_six1 {
    width: 295px
  }

  .cy-third_time1 {
    width: 100%;
    line-height: 55px
  }

  .cy-third_time1 .cy-time1_fl {
    font-size: 20px;
    color: #333
  }

  .cy-third_time1 .cy-time1_fr {
    font-size: 26px;
    color: #ccc;
    font-weight: 400
  }

  .cy-third_time1 .cy-time1_fr span {
    font-size: 46px;
    margin-right: 5px
  }

  .cy-third_jindu {
    position: relative;
    width: 100%;
    height: 10px;
    overflow: hidden;
    margin-top: 10px;
    background-color: #d5d5d4;
    border-radius: 5px
  }

  .cy-third_yjindu {
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    border-radius: 5px;
    background: #feb063
  }

  .cy-third_sx {
    padding: 0 75px;
    width: 1px;
    height: 44px;
    margin-top: 40px
  }

  .cy-third_six2 {
    width: 304px;
    height: auto;
    padding-top: 10px;
  }

  .cy-third_six2_fl {
    width: 80px;
    font-size: 60px;
    color: #fea45b;
  }

  .cy-third_six2_fr {
    width: 223px
  }

  .cy-third_six2_fr_1 {
    width: 215px;
    margin-top: 15px
  }

  .cy-third_six2_fr_a1 {
    width: 66px;
    height: 23px
  }

  .cy-third_six2_fr_a1 img {
    width: 100%;
    height: 23px
  }

  .cy-third_six2_fr_b1 {
    width: 90px;
    height: 19px
  }

  .cy-third_six2_fr_b1 img {
    width: 100%;
    height: 19px
  }

  .cy-third_six2_fr_2 {
    font-size: 18px;
    color: #999;
    margin-top: 10px
  }

  .cy-time1_fr i {
    font-size: 18px;
    position: relative;
    top: 4px
  }

  .mt-number-animate .mt-number-animate-dom {
    width: 28px;
    text-align: center;
    float: left;
    position: relative;
    top: 0;
  }


  .numberAnimateStart {
    animation-play-state: running !important;
  }
  .number1 .mt-number-animate .numberAnimateStart1{
    transform: translateY(-46px);
  }
  .number1 .mt-number-animate .numberAnimateStart2{
    transform: translateY(-414px);
  }
  .number2 .mt-number-animate .numberAnimateStart3{
    transform: translateY(-92px);
  }
  .number3 .mt-number-animate .numberAnimateStart4{
    transform: translateY(-138px);
  }
  .number3 .mt-number-animate .numberAnimateStart5{
    transform: translateY(-322px);
  }
  .number4 .mt-number-animate .numberAnimateStart6{
    transform: translateY(-184px);
  }
  .number4 .mt-number-animate .numberAnimateStart7{
    transform: translateY(-460px);
  }
  .number1 .mt-number-animate .number-animate-1 {
    transition: all 2.5s 1s;
  }

  .number1 .mt-number-animate .number-animate-2 {
    transition: all 2.5s 1s;
  }

  .number2 .mt-number-animate .number-animate-3 {
    transition: all 2.5s 1s;
  }

  .number3 .mt-number-animate .mt-number-animate-dom:nth-child(1) {
    transition: all 2.5s 1s;
  }

  .number3 .mt-number-animate .mt-number-animate-dom:nth-child(2) {
    transition: all 2.5s 1s;
  }

  .number4 .mt-number-animate .mt-number-animate-dom:nth-child(1) {
    transition: all 2.5s 1s;
  }

  .number4 .mt-number-animate .mt-number-animate-dom:nth-child(2) {
    transition: all 2.5s 1s;
  }

  .mt-number-animate .mt-number-animate-dom .mt-number-animate-span {
    width: 100%;
    float: left;
    color: #cccccc;
  }

  .cy-third_time1 .cy-time1_fr span {
    font-size: 46px;
    margin-right: 5px;
  }

  .mt-number-animate {
    line-height: 46px;
    height: 46px;
    font-size: 46px;
    overflow: hidden;
    display: inline-block;
    position: relative;
    width: 100%;
  }

  .number4-wrap .mt-number-animate .mt-number-animate-dom {
    width: 36px;
  }

  .number4-wrap .mt-number-animate .mt-number-animate-dom .mt-number-animate-span {
    font-size: 60px;
    background: linear-gradient(to right, #ffcc6c, #ff9b4f);
    -webkit-background-clip: text;
    color: transparent;
    background: transparent\9;
    color: #ff9b4f;
  }

  .animate .animation1{
  -webkit-animation:fadeInUp 1s .2s ease both;
  -moz-animation:fadeInUp 1s .2s ease both;}
  @-webkit-keyframes fadeInUp{
  0%{opacity:0;
  -webkit-transform:translateY(20px)}
  100%{opacity:1;
  -webkit-transform:translateY(0)}
  }
  @-moz-keyframes fadeInUp{
  0%{opacity:0;
  -moz-transform:translateY(20px)}
  100%{opacity:1;
  -moz-transform:translateY(0)}
  }
  .animate .animation2{
  -webkit-animation:fadeInUp 1s .4s ease both;
  -moz-animation:fadeInUp 1s .4s ease both;}
  @-webkit-keyframes fadeInUp{
  0%{opacity:0;
  -webkit-transform:translateY(20px)}
  100%{opacity:1;
  -webkit-transform:translateY(0)}
  }
  @-moz-keyframes fadeInUp{
  0%{opacity:0;
  -moz-transform:translateY(20px)}
  100%{opacity:1;
  -moz-transform:translateY(0)}
  }

  .animation3{
  -webkit-animation:fadeInUp .5s .2s ease both;
  -moz-animation:fadeInUp .5s .2s ease both;}
  @-webkit-keyframes fadeInUp{
  0%{opacity:0;
  -webkit-transform:translateY(20px)}
  100%{opacity:1;
  -webkit-transform:translateY(0)}
  }
  @-moz-keyframes fadeInUp{
  0%{opacity:0;
  -moz-transform:translateY(20px)}
  100%{opacity:1;
  -moz-transform:translateY(0)}
  }


  /* 进度条 */

  .proggress {
    background: -webkit-linear-gradient(left, #ffce6d, #ff9a4e) !important;
    background: -o-linear-gradient(right, #ffce6d, #ff9a4e) !important;
    background: -moz-linear-gradient(right, #ffce6d, #ff9a4e) !important;
    background: linear-gradient(to right, #ffce6d, #ff9a4e) !important;
    height: 100%;
    border-radius: 5px;
    width: 20%;
  }

  @keyframes progressbar1 {
    0% {
      width: 20%;
    }
    100% {
      width: 60%;
    }
  }

  @keyframes progressbar2 {
    0% {
      width: 20%;
    }
    100% {
      width: 85%;
    }
  }

  #progressbar1 {
    width: 20%;
    animation: progressbar1 1.5s ease;
    animation-fill-mode: forwards;
    animation-play-state: paused;
    animation-delay: 1s;
  }

  #progressbar2 {
    width: 20%;
    animation: progressbar2 1.5s ease;
    animation-fill-mode: forwards;
    animation-play-state: paused;
    animation-delay: 1s;
  }

  .cy-fourth {
    padding-top: 20px;
  }

  .cy-fourth_cent {
    width: 1143px;
    height: 476px;
    overflow: hidden;
    padding-left: 57px;
    background: url(../assets/images/use_img/cy_img19.png) no-repeat left center
  }

  .hover-zoom {
    float: left;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s
  }

  .hover-zoom:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1)
  }

  /*手风琴样式开始*/

  .dh ul {
    position: relative;
    overflow: hidden;
    width: 1160px;
    height: 480px;
  }

  .dh ul li {
    float: left;
    width: 274px;
    overflow: hidden;
    height: 100%;
    position: absolute;
    cursor: pointer;
    box-shadow: -4px 13px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
    border-radius: 15px;
    transition: all 150ms ease;
  }

  .dh ul li a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .dh ul li .layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
    z-index: 30
  }

  .dh ul li .layer .p0 {
    position: absolute;
    top: 20px;
    left: 10px;
    font-size: 70px;
    background: linear-gradient(to right, #ffcc6c, #ff9b4f);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    background: transparent\9;
    color: #ff9b4f;
  }

  .dh ul li .layer .p1 {
    position: absolute;
    top: 50%;
    left: -30px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 42px;
    font-weight: bold;
    transform: rotate(90deg);
  }

  .dh ul li .layer .p2 {
    position: absolute;
    top: 40%;
    text-align: center;
    width: 100%;
  }

  .dh ul li .layer .p2 b,
  .dh ul li .layer .p2 span {
    display: block;
    font-weight: bold;
    font-size: 20px;
  }

  .dh ul li .layer .p1 b,
  .dh ul li .layer .p1 span {
    display: block;
    font-weight: bold;
    font-size: 14px;
  }

  .p2_cy1 {
    font-size: 42px;
    font-weight: bold;
    background: linear-gradient(to right, #ffcc6c, #ff9b4f);
    -webkit-background-clip: text;
    color: transparent;
    background: transparent\9;
    color: #ff9b4f;
    text-align: center;
    width: 274px;
  }

  .p2_cy2 {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    color: #434343;
    width: 220px;
  }

  .dh ul li.curr .layer {
    background: rgba(255, 255, 255, 0.3)
  }

  .dh .up {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
  }

  .dh .down {
    height:100%;
    position:
    absolute;
    top:0;
    left:-60px;
    z-index:10;
  }


  .dh ul a img {
    display: block;
  }

  .simg {
    position: absolute;
    display: block;
    opacity: 0;
  }

  .s1-3 {
    left: 187px;
    top: 251px;
    z-index: 1;
  }

  .s1-2 {
    left: 194px;
    top: 226px;
    z-index: 2;
  }

  .s1-1 {
    left: 226px;
    top: 190px;
    z-index: 3;
  }

  .s2-1 {
    left: 169px;
    top: 101px;
    z-index: 3;
  }

  .s2-2 {
    left: 185px;
    top: 121px;
    z-index: 2;
  }

  .s2-3 {
    left: 191px;
    top: 138px;
    z-index: 1;
  }

  .s2-4 {
    left: 46px;
    top: 349px;
    z-index: 2;
  }

  .s2-5 {
    left: 55px;
    top: 372px;
    z-index: 1;
  }

  .s3-1 {
    left: 0;
    top: 0;
    z-index: 3;
  }

  .s3-2 {
    left: 0;
    top: 0;
    z-index: 2;
  }

  .s3-3 {
    left: 0;
    top: 0;
    z-index: 1;
  }

  .s5-1 {
    left: 183px;
    top: 98px;
    z-index: 3;
  }

  .s5-2 {
    left: 178px;
    top: 140px;
    z-index: 2;
  }

  .s5-3 {
    left: 175px;
    top: 174px;
    z-index: 1;
  }

  .s5-4 {
    left: 232px;
    top: 332px;
    z-index: 2;
  }

  .s5-5 {
    left: 244px;
    top: 309px;
    z-index: 3;
  }

  .s6-1 {
    left: 81px;
    top: 51px;
    z-index: 3;
  }

  .s6-2 {
    left: 122px;
    top: 79px;
    z-index: 2;
  }

  .s6-3 {
    left: 166px;
    top: 101px;
    z-index: 1;
  }

  .vfx-image-wrap {
    position: absolute;
    width: 289px;
    height: 403px;
    left: 166px;
    top: 42px;
  }

  .vfx-image-wrap .before-image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    overflow: hidden;
  }

  .vfx-image-wrap .after-image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .vfx-image-wrap .divider-bar {
    position: absolute;
    left: 50%;
    top: 8px;
    z-index: 999;
    width: 88px;
    background: url(~@/assets/images/use_img/mid_03.png) no-repeat center;
    height: 454px;
    margin-left: -39px;
    cursor: pointer;
  }

  .on .s1-1 {
    animation: fadeInUp;
  }

  .twochange,
  .twochangetwo {
    height: 505px;
  }
  .videow{
    width: 102%;
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px)
    }
    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }
   @media screen and (max-width:1300px) {
     .cy-sec_cont2 .cy-sec_cont2_1 {
        line-height: 28px;
        margin: 0px;
      }
      .number3 .mt-number-animate .numberAnimateStart5 {
        -webkit-transform: translateY(-320px);
        -ms-transform: translateY(-320px);
        transform: translateY(-320px);
      }
      .number1 .mt-number-animate .numberAnimateStart2 {
        -webkit-transform: translateY(-410px);
        -ms-transform: translateY(-410px);
        transform: translateY(-410px);
      }
      .number4 .mt-number-animate .numberAnimateStart7 {
        -webkit-transform: translateY(-458px);
        -ms-transform: translateY(-458px);
        transform: translateY(-458px);
      }
      .number4-wrap .mt-number-animate .mt-number-animate-dom .span-0{
        font-size: 57px;
      }
   }
</style>
