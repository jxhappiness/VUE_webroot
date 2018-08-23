<template>
  <div class="app">
    <!-- <v-header></v-header> -->
    <div class="content" ref="content" id="client" v-if="allPageIndex === 0">
      <!--右侧导航-->
			<ul class="dots">
	<li :class="{active: pageIndex === 1}" @click="toPage(1)"><span>app下载</span></li>
				<li :class="{active: pageIndex === 2}" @click="toPage(2)"><span>视频</span></li>
				<li :class="{active: pageIndex === 3}" @click="toPage(3)"><span>千元游戏</span></li>
				<li :class="{active: pageIndex === 4}" @click="toPage(4)"><span>极速到帐</span></li>
				<li :class="{active: pageIndex === 5}" @click="toPage(5)"><span>全球赛事</span></li>
				<!-- <li :class="{active: pageIndex === 6}" @click="toPage(6)"><span>H5</span></li>
				<li :class="{active: pageIndex === 7}" @click="toPage(7)"><span>更多</span></li> -->
			</ul>
      <!--第一页-->
			<div class="page-1" :style="page1_bg">
        <div class="cy_canvas" ref='cy_canvas'><canvas id="waves"></canvas></div>
				<div class="boundary">
					<div class="slide-item clearfix">
						<div class="phone fl">
              <div class="phone-border">
                <div class="mark-left"></div>
                <div class="mark-right"></div>
                <div class="mark-left-left"></div>
                <div class="mark-right-right"></div>
              </div>
              <div class="page1-phone-slider">
                <carousel-3d :width=211 :height=460 :autoplay="true" :perspective=0>
                  <slide :index="0">
                    <img :src="page1_phone_item1" alt="">
                  </slide>
                  <slide :index="1">
                    <img :src="page1_phone_item2" alt="">
                  </slide>
                  <slide :index="2">
                    <img :src="page1_phone_item3" alt="">
                  </slide>
                  <slide :index="3">
                    <img :src="page1_phone_item4" alt="">
                  </slide>
                  <slide :index="4">
                    <img :src="page1_phone_item5" alt="">
                  </slide>
                </carousel-3d>
              </div>
            </div>
						<div class="introduce fr">
							<!-- <h2 class="app-title"></h2> -->
              <!-- <Carousel autoplay loop dots="outside" :autoplaySpeed="5000" radius-dot arrow="never" :height=305> -->
                <!-- <Carousel-item> -->
                  <!-- <div>
                    <h4 class="app-introduce">
                      全球最棒的真人娱乐博彩APP！十年稳定运营，实力业界第一。千万在线对决，根本停不下来！
                    </h4>
                    <div class="app-advantage clearfix">
                      <div class="app-advantage-item">
                        <div class="app-advantage-icon gousai"></div>
                        <p>级速购彩</p>
                      </div>
                      <div class="app-advantage-item">
                        <div class="app-advantage-icon jiami"></div>
                        <p>多重加密</p>
                      </div>
                      <div class="app-advantage-item">
                        <div class="app-advantage-icon zaixian"></div>
                        <p>千万人在线</p>
                      </div>
                    </div>
                  </div> -->
                  <img :src="page1_right_slide1" alt="">
                <!-- </Carousel-item> -->
                <!-- <Carousel-item> -->
                  <!-- <h4 class="app-introduce">
                    倾力巨献全球首款体育原生app，专为亚洲人设计，最全赛事，最多走地。支持千万人同时在线，全球体育潮流领军者。
                  </h4>
                  <div class="app-advantage clearfix" style="margin-top: 34px;">
                    <div class="app-advantage-item">
                      <div class="app-advantage-icon gousai"></div>
                      <p>赛事更新最快</p>
                    </div>
                    <div class="app-advantage-item">
                      <div class="app-advantage-icon jiami"></div>
                      <p>立体动画直播</p>
                    </div>
                    <div class="app-advantage-item">
                      <div class="app-advantage-icon zaixian"></div>
                      <p>精准数据支持</p>
                    </div>
                  </div> -->
                  <!-- <img :src="page1_right_slide2" alt=""> -->
                <!-- </Carousel-item> -->
              <!-- </Carousel> -->
							<a href="javascript:" class="download-btn" title="点击下载">
								<img :src="download_img"/>
							</a>
						</div>
					</div>
				</div>
        <div class="all-page-tab">
          <a href="javascript:" class="active" @click="allPageTab(0)">
            全站客户端
            <i></i>
          </a>
          <a href="javascript:" @click="allPageTab(1)">
            体育客户端
            <i></i>
          </a>
        </div>
			</div>
      <!--第二页-->
			<div class="page-2" :style="page2_bg">
				<div class="boundary">
					<div class="video-wrapper">
            <video src="https://mv.492mbx.com/793d747597d84c249b772bc8d9f93db2/aa9d3c444df940d6a71ada0d08952d0f-ace2b3c07ecfd763f01f4bc0362495cb-sd.mp4" controls="controls"></video>
            <!-- <div class="video-mask"></div> -->
					</div>
				</div>
			</div>
			<!--第三页-->
			<div class="page-3">
				<div class="page-3-bg" data-stellar-background-ratio="0.03"></div>
				<div class="page-3-wrapper">
					<div class="boundary">
						<!-- <div class="phone">
              <div class="phone-border"></div>
              <div class="keep-out"></div>
              <div class="slider-wrapper">
                <Carousel autoplay loop dots="none" :autoplaySpeed="4000" arrow="never" :height=460>
                  <Carousel-item>
                    <img :src="page3Slider1" alt="">
                  </Carousel-item>
                  <Carousel-item>
                    <img :src="page3Slider2" alt="">
                  </Carousel-item>
                </Carousel>
              </div>
            </div> -->
            <div class="slide-item-1-1">
              <div class="slide1" :class="{animationStart: pageIndex === 3}"></div>
              <div class="slide2" :class="{animationStart: pageIndex === 3}"></div>
              <div class="slide3" :class="{animationStart: pageIndex === 3}"></div>
            </div>
						<div class="page3-content">
							<h2>千种游戏1元畅玩</h2>
							<!-- <p>独家贴心的护眼设计，根据光线强弱自动调整APP的色调</p>
							<p>长时间观看也不再疲惫，对您的爱眼呵护有加</p>
							<p>一键切换，完美适配所有机型</p> -->
              <p>当下最时尚的顶尖APP，只有你想不到，没有我们做不到。1元畅玩千种游戏：体育竞猜，彩票投注，真人娱乐，电子游戏……性能领先行业平均水平300%，中奖率高达90%。轻轻一点，收益满满。</p>
						</div>
					</div>
				</div>
			</div>
      <!--第四页-->
			<div class="page-4">
				<div class="page-4-bg" data-stellar-background-ratio="0.03"></div>
				<div class="page-4-wrapper">
					<div class="boundary">
						<!-- <div class="phone">
              <div class="phone_float"></div>
            </div> -->
            <div class="slide-item-1-2">
              <div class="slide1" :class="{animationStart1: pageIndex === 4}"></div>
              <div class="slide2" :class="{animationStart1: pageIndex === 4}"></div>
              <div class="slide3" :class="{animationStart1: pageIndex === 4}"></div>
              <div class="slide4" :class="{animationStart1: pageIndex === 4}"></div>
              <div class="slide5" :class="{animationStart1: pageIndex === 4}"></div>
            </div>
						<div class="page4-content">
							<h2>存款取款极速到账</h2>
							<!-- <p>专人驻场即时情报，第一时间了解赛场战况，身临其境般感受每一场比赛。中场控球局势、定位球技术站位、射门弧线模拟，360无死角分析，让你精准把握每一处动态。</p> -->
              <p>支持微信、支付宝、京东支付等主流支付方式。与40多家银行全面合作，专线存/提款通道保证资金快速到账。全站采用军方防御技术，保障资金绝对安全。业内最强，没有之一。</p>
						</div>
					</div>
				</div>
			</div>
			<!--第五页-->
			<div class="page-5">
				<div class="page-5-bg" data-stellar-background-ratio="0.03"></div>
				<div class="page-5-wrapper">
					<div class="boundary">
						<!-- <div class="phone">
              <div class="phone-float"></div>
              <div class="float1"></div>
              <div class="float2"></div>
              <div class="float3"></div>
            </div> -->
            <div class="slide-item-1-3">
              <div class="slide1" :class="{animationStart1: pageIndex === 5}"></div>
              <div class="slide2" :class="{animationStart1: pageIndex === 5}"></div>
              <div class="slide3" :class="{animationStart1: pageIndex === 5}"></div>
            </div>
						<div class="page5-content">
							<h2>全球赛事尽在这里</h2>
							<!-- <p>选择、投注、支付，全程仅需3秒，业界最快速的奢华</p>
							<p>购彩体验，让你不错过每一个赚钱的瞬间</p> -->
              <p>包含全球所有90%赛事，任意投注，10多种玩法自由组合，为你打造最灵活的赚钱方案：中超、英超、西甲、意甲、德甲、法甲每天提供尽800多场体育赛事。足不出户，自创财路！</p>
						</div>
					</div>
				</div>
			</div>
			<!--第六页-->
			<div class="page-6">
				<div class="page-6-bg" data-stellar-background-ratio="0.03"></div>
				<!-- <div class="page-6-wrapper">
					<div class="boundary">
						<div class="phone"></div>
						<div class="page6-content">
							<div class="erweima">
								<img :src="erweimaSrc"/>
							</div>
							<p>即扫即玩，无需等待</p>
							<h2></h2>
						</div>
					</div>
				</div> -->
			</div>
      <!--第七页-->
      <!-- <div class="page-7">
				<div class="boundary">
					<div class="left fl" @mouseover="mouseover(1)" @mouseout="mouseout">
						<div class="mark" v-show="isMarkShow === 1">
							<a href="javascript:"></a>
						</div>
						<div class="img-wrapper">
							<span></span>
							<img :src="ebetSrc"/>
						</div>
						<h3>eBET</h3>
						<p>全球最豪华的真人娱乐平台。全视频娱乐、最稳定的高端设备、专业的美女荷官，玩家仿佛置身于现场的绝妙体验。支持多端登录，随时随地尽享游戏的乐趣。</p>
					</div>
					<div class="center fl" @mouseover="mouseover(2)" @mouseout="mouseout">
						<div class="mark" v-show="isMarkShow === 2">
							<a href="javascript:"></a>
						</div>
						<div class="img-wrapper">
							<span></span>
							<img :src="agSrc"/>
						</div>
						<h3>AG客户端</h3>
						<p>亚洲最具人气真人娱乐平台商，多个现代化、标准化的真人娱乐厅、贵宾会，网络与实地完美结合。力求为全球娱乐爱好者提供公平、公正、公开的顶级一站式服务， 打造崭新和多元化的玩乐体验。</p>
					</div>
					<div class="right fr" @mouseover="mouseover(3)" @mouseout="mouseout">
						<div class="mark" v-show="isMarkShow === 3">
							<a href="javascript:"></a>
						</div>
						<div class="img-wrapper">
							<span></span>
							<img :src="ptSrc"/>
						</div>
						<h3>PT游戏客户端</h3>
						<p>1999年创建至今，提供的产品十分广泛。拥有经认可的检测机构BMM international 和TST颁发的评估证书、远程电娱协会（RGA）的成员、奥尔德尼岛电娱管理委员会（AGCC）颁发的官方预核证书、英国电娱的主要贸易联合会ABB认证。</p>
					</div>
				</div>
			</div> -->
    </div>
    <div class="content" ref="content1" id="client1" v-if="allPageIndex === 1">
      <!--右侧导航-->
			<ul class="dots">
			  <li :class="{active: pageIndex === 1}" @click="toPage(1)"><span>app下载</span></li>
        <li :class="{active: pageIndex === 2}" @click="toPage(2)"><span>视频</span></li>
        <li :class="{active: pageIndex === 3}" @click="toPage(3)"><span>夜间模式</span></li>
        <li :class="{active: pageIndex === 4}" @click="toPage(4)"><span>动画直播</span></li>
        <li :class="{active: pageIndex === 5}" @click="toPage(5)"><span>极致体验</span></li>
				<!-- <li :class="{active: pageIndex === 6}" @click="toPage(6)"><span>H5</span></li>
				<li :class="{active: pageIndex === 7}" @click="toPage(7)"><span>更多</span></li> -->
			</ul>
      <!--第一页-->
			<div class="page-1" :style="page1_bg">
        <div class="cy_canvas" ref='cy_canvas'><canvas id="waves"></canvas></div>
				<div class="boundary">
					<div class="slide-item clearfix">
						<div class="phone fl">
              <div class="phone-border">
                <div class="mark-left"></div>
                <div class="mark-right"></div>
                <div class="mark-left-left"></div>
                <div class="mark-right-right"></div>
              </div>
              <div class="page1-phone-slider">
                <carousel-3d :width=211 :height=460 :autoplay="true" :perspective=0>
                  <slide :index="0">
                    <img :src="page1_phone_item1" alt="">
                  </slide>
                  <slide :index="1">
                    <img :src="page1_phone_item2" alt="">
                  </slide>
                  <slide :index="2">
                    <img :src="page1_phone_item3" alt="">
                  </slide>
                  <slide :index="3">
                    <img :src="page1_phone_item4" alt="">
                  </slide>
                  <slide :index="4">
                    <img :src="page1_phone_item5" alt="">
                  </slide>
                </carousel-3d>
              </div>
            </div>
						<div class="introduce fr">
							<!-- <h2 class="app-title"></h2> -->
              <!-- <Carousel autoplay loop dots="outside" :autoplaySpeed="5000" radius-dot arrow="never" :height=305> -->
                <!-- <Carousel-item> -->
                  <!-- <div>
                    <h4 class="app-introduce">
                      全球最棒的真人娱乐博彩APP！十年稳定运营，实力业界第一。千万在线对决，根本停不下来！
                    </h4>
                    <div class="app-advantage clearfix">
                      <div class="app-advantage-item">
                        <div class="app-advantage-icon gousai"></div>
                        <p>级速购彩</p>
                      </div>
                      <div class="app-advantage-item">
                        <div class="app-advantage-icon jiami"></div>
                        <p>多重加密</p>
                      </div>
                      <div class="app-advantage-item">
                        <div class="app-advantage-icon zaixian"></div>
                        <p>千万人在线</p>
                      </div>
                    </div>
                  </div> -->
                  <!-- <img :src="page1_right_slide1" alt=""> -->
                <!-- </Carousel-item> -->
                <!-- <Carousel-item> -->
                  <!-- <h4 class="app-introduce">
                    倾力巨献全球首款体育原生app，专为亚洲人设计，最全赛事，最多走地。支持千万人同时在线，全球体育潮流领军者。
                  </h4>
                  <div class="app-advantage clearfix" style="margin-top: 34px;">
                    <div class="app-advantage-item">
                      <div class="app-advantage-icon gousai"></div>
                      <p>赛事更新最快</p>
                    </div>
                    <div class="app-advantage-item">
                      <div class="app-advantage-icon jiami"></div>
                      <p>立体动画直播</p>
                    </div>
                    <div class="app-advantage-item">
                      <div class="app-advantage-icon zaixian"></div>
                      <p>精准数据支持</p>
                    </div>
                  </div> -->
                  <img :src="page1_right_slide2" alt="">
                <!-- </Carousel-item> -->
              <!-- </Carousel> -->
							<a href="javascript:" class="download-btn" title="点击下载">
								<img :src="download_img"/>
							</a>
						</div>
					</div>
				</div>
        <div class="all-page-tab">
          <a href="javascript:" @click="allPageTab(0)">
            全站客户端
            <i></i>
          </a>
          <a href="javascript:" class="active" @click="allPageTab(1)">
            体育客户端
            <i></i>
          </a>
        </div>
			</div>
      <!--第二页-->
			<div class="page-2" :style="page2_bg">
				<div class="boundary">
					<div class="video-wrapper">
            <video src="https://mv.492mbx.com/1111640c8a9843d3b39bbe8bc59de710/c05640832a1747b5ab33e65163573b44-588f80ca69f792a620356749e01c977e-sd.mp4
" controls="controls"></video>
            <!-- <div class="video-mask"></div> -->
					</div>
				</div>
			</div>
			<!--第三页-->
			<div class="page-3">
				<div class="page-3-bg sport_3" data-stellar-background-ratio="0.03"></div>
				<div class="page-3-wrapper">
					<div class="boundary">
						<!-- <div class="phone">
              <div class="phone-border"></div>
              <div class="keep-out"></div>
              <div class="slider-wrapper">
                <Carousel autoplay loop dots="none" :autoplaySpeed="4000" arrow="never" :height=460>
                  <Carousel-item>
                    <img :src="page3Slider1" alt="">
                  </Carousel-item>
                  <Carousel-item>
                    <img :src="page3Slider2" alt="">
                  </Carousel-item>
                </Carousel>
              </div>
            </div> -->
            <div class="slide-item-2-1">
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
						<div class="page3-content">
							<h2>夜间模式随意切换</h2>
							<p>独家贴心的护眼设计,根据光线强弱自动调整APP的色调。长时间观看也不再疲惫，对您的爱眼呵护有加。一键切换，完美适配所有机型。</p>
						</div>
					</div>
				</div>
			</div>
      <!--第四页-->
			<div class="page-4">
				<div class="page-4-bg sport_4" data-stellar-background-ratio="0.03"></div>
				<div class="page-4-wrapper">
					<div class="boundary">
						<!-- <div class="phone">
              <div class="phone_float"></div>
            </div> -->
            <div class="slide-item-2-3">
              <div class="slide1" :class="{animationStart5: pageIndex === 4}"></div>
              <div class="slide2" :class="{animationStart5: pageIndex === 4}"></div>
              <div class="slide3" :class="{animationStart5: pageIndex === 4}"></div>
            </div>
						<div class="page4-content">
							<h2>逼真立体动画直播</h2>
							<p>专人驻场即时情报，第一时间了解赛场战况，身临其境般感受每一场比赛。中场控球局势、定位球技术站位、射门弧线模拟，360无死角分析，让你精准把握每一处动态。</p>
						</div>
					</div>
				</div>
			</div>
			<!--第五页-->
			<div class="page-5">
				<div class="page-5-bg page2-page5-bg  sport_5" data-stellar-background-ratio="0.03"></div>
				<div class="page-5-wrapper">
					<div class="boundary">
						<!-- <div class="phone">
              <div class="phone-float"></div>
              <div class="float1"></div>
              <div class="float2"></div>
              <div class="float3"></div>
            </div> -->
            <div class="slide-item-2-2">
              <div class="slide1" :class="{animationStart4: pageIndex === 5}"></div>
              <div class="slide2" :class="{animationStart4: pageIndex === 5}"></div>
              <div class="slide3" :class="{animationStart4: pageIndex === 5}"></div>
              <div class="slide4" :class="{animationStart4: pageIndex === 5}"></div>
              <div class="slide5" :class="{animationStart4: pageIndex === 5}"></div>
            </div>
						<div class="page5-content">
							<h2>极致触手可得体验</h2>
							<p>选择、投注、支付，全程仅需3秒，业界最快速的奢华。购彩体验，让你不错过每一个赚钱的瞬间。</p>
							<p></p>
						</div>
					</div>
				</div>
			</div>
			<!--第六页-->
			<div class="page-6">
				<div class="page-6-bg page2-page6-bg" data-stellar-background-ratio="0.03"></div>
				<!-- <div class="page-6-wrapper">
					<div class="boundary">
						<div class="phone"></div>
						<div class="page6-content">
							<div class="erweima">
								<img :src="erweimaSrc"/>
							</div>
							<p>即扫即玩，无需等待</p>
							<h2></h2>
						</div>
					</div>
				</div> -->
			</div>
      <!--第七页-->
      <!-- <div class="page-7">
				<div class="boundary">
					<div class="left fl" @mouseover="mouseover(1)" @mouseout="mouseout">
						<div class="mark" v-show="isMarkShow === 1">
							<a href="javascript:"></a>
						</div>
						<div class="img-wrapper">
							<span></span>
							<img :src="ebetSrc"/>
						</div>
						<h3>eBET</h3>
						<p>全球最豪华的真人娱乐平台。全视频娱乐、最稳定的高端设备、专业的美女荷官，玩家仿佛置身于现场的绝妙体验。支持多端登录，随时随地尽享游戏的乐趣。</p>
					</div>
					<div class="center fl" @mouseover="mouseover(2)" @mouseout="mouseout">
						<div class="mark" v-show="isMarkShow === 2">
							<a href="javascript:"></a>
						</div>
						<div class="img-wrapper">
							<span></span>
							<img :src="agSrc"/>
						</div>
						<h3>AG客户端</h3>
						<p>亚洲最具人气真人娱乐平台商，多个现代化、标准化的真人娱乐厅、贵宾会，网络与实地完美结合。力求为全球娱乐爱好者提供公平、公正、公开的顶级一站式服务， 打造崭新和多元化的玩乐体验。</p>
					</div>
					<div class="right fr" @mouseover="mouseover(3)" @mouseout="mouseout">
						<div class="mark" v-show="isMarkShow === 3">
							<a href="javascript:"></a>
						</div>
						<div class="img-wrapper">
							<span></span>
							<img :src="ptSrc"/>
						</div>
						<h3>PT游戏客户端</h3>
						<p>1999年创建至今，提供的产品十分广泛。拥有经认可的检测机构BMM international 和TST颁发的评估证书、远程电娱协会（RGA）的成员、奥尔德尼岛电娱管理委员会（AGCC）颁发的官方预核证书、英国电娱的主要贸易联合会ABB认证。</p>
					</div>
				</div>
			</div> -->
    </div>
    <!-- <v-footer></v-footer> -->
  </div>
</template>
<script>
import SineWaves from "../../../static/cy_sine-waves.min.js";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "client",
  data() {
    return {
      scrollIndex: 0,
      allPageIndex: 0,
      msg: "Welcome to Your Vue.js App",
      isMarkShow: 0,
      download_img: require("../../assets/images/client/download_btn.png"),
      ebetSrc: require("../../assets/images/client/ebet.png"),
      agSrc: require("../../assets/images/client/ag.png"),
      ptSrc: require("../../assets/images/client/pt.png"),
      erweimaSrc: require("../../assets/images/client/erweima.png"),
      pageIndex: 1,
      // videoSrc: require("../../assets/video/top3.mp4"),
      page3Slider1: require("../../assets/images/client/left_03.png"),
      page3Slider2: require("../../assets/images/client/right_03.png"),
      page1_phone_item1: require("../../assets/images/client/phone_slider_item1.png"),
      page1_phone_item2: require("../../assets/images/client/phone_slider_item2.png"),
      page1_phone_item3: require("../../assets/images/client/phone_slider_item3.png"),
      page1_phone_item4: require("../../assets/images/client/phone_slider_item4.png"),
      page1_phone_item5: require("../../assets/images/client/phone_slider_item5.png"),
      page1_right_slide1: require("../../assets/images/client/page1_slide1.png"),
      page1_right_slide2: require("../../assets/images/client/page1_slide2.png"),
      page1_bg: {
        background: `url(${require("../../assets/images/client/page_1_bg.png")}) no-repeat left 80px`
      },
      page2_bg: {
        background: `url(${require("../../assets/images/client/page2_bg.png")}) no-repeat`
      },
      page3_bg: {
        background: `url(${require("../../assets/images/client/page5_bg.png")}) no-repeat`
      },
      separateLeft: 145,
      transitionStyle: 'all 0.3s',
      viewWidth: 0
    };
  },
  mounted() {
    this.viewWidth = document.documentElement.clientWidth;
    let that = this;
    window.addEventListener("scroll", function() {
      var rect = Math.abs(document.body.getBoundingClientRect().top);
      if (rect > 500 && 1300 > rect) {
        that.pageIndex = 2;
      } else if (rect > 1300 && 2100 > rect) {
        that.pageIndex = 3;
      } else if (rect > 2100 && 3000 > rect) {
        that.pageIndex = 4;
      } else if (rect > 3000 && 3500 > rect) {
        that.pageIndex = 5;
      } else if (rect > 3900 && 4800 > rect) {
        that.pageIndex = 5;
      } else if (4800 < rect) {
        that.pageIndex = 5;
      } else if (rect < 500) {
        that.pageIndex = 1;
      }
    });
    if (document.getElementsByClassName("cy_canvas")[0]) {
      var waves = new SineWaves({
        el: document.getElementById("waves"),
        speed: 3,
        width: function() {
          return document.getElementsByClassName("cy_canvas")[0].offsetWidth;
        },
        height: function() {
          return document.getElementsByClassName("cy_canvas")[0].offsetHeight;
        },
        ease: "SineInOut",
        wavesWidth: "80%",
        waves: [
          {
            timeModifier: 2,
            lineWidth: 4,
            amplitude: -150,
            wavelength: 65
          },
          {
            timeModifier: 2,
            lineWidth: 2,
            amplitude: -75,
            wavelength: 40
          }
        ],
        // Resize
        resizeEvent: function() {
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          gradient.addColorStop(0, "rgba(254,193,108,.7)");
          gradient.addColorStop(0.3, "rgba(255,240,228,.8)");
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
    }
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
    allPageTab(n){
      this.allPageIndex = n;
    },
    toPage(n) {
      switch (n) {
        case 1:
          window.scrollTo(0, 0);
          break;
        case 2:
          window.scrollTo(0, 800);
          break;
        case 3:
          window.scrollTo(0, 1800);
          break;
        case 4:
          window.scrollTo(0, 2600);
          break;
        case 5:
          window.scrollTo(0, 3600);
          break;
        case 6:
          window.scrollTo(0, 4500);
          break;
        case 7:
          window.scrollTo(0, 5300);
          break;
      }
    },
    mouseover(n) {
      this.isMarkShow = n;
    },
    mouseout(){
      this.isMarkShow = 0;
    }
  },
  components: {
    Carousel3d,
    Slide
  }
};
</script>
<style lang="less">
#client {
  .ivu-carousel-dots-outside {
    position: absolute;
    bottom: -16px;
  }
  .ivu-carousel-dots li.ivu-carousel-active > button {
    background: #f8b24d !important;
    width: 30px !important;
    border-radius: 5px !important;
  }
  .ivu-carousel-dots li button {
    width: 10px !important;
    height: 10px !important;
  }
  .ivu-carousel-dots li {
    margin: 0 5px !important;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 手机动画 */
@keyframes floatLeft {
  0% {
    transform: translate(136px, -20px) scale(0.77);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes float1 {
  0% {
    transform: translate(-160px, 128px) scale(0.56);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes float3 {
  0% {
    transform: scale(0.56) translate(566px, 108px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
.content {
  max-width: 1920px;
  margin:auto;
  min-height: 400px;
  overflow: auto;
}
h4 {
  font-weight: normal;
}
.dots {
  width: 8px;
  height: 150px;
  position: fixed;
  right: 50px;
  top: 50%;
  margin-top: -75px;
  z-index: 999;
}
.dots li {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #c8c8c8;
  margin-bottom: 12px;
  position: relative;
  cursor: pointer;
}
.dots li span {
  position: absolute;
  display: inline-block;
  width: 64px;
  height: 18px;
  top: -5px;
  right: 10px;
  color: #ffffff;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  z-index: 999;
  display: none;
  background: url("../../assets/images/client/dot_title.png") no-repeat;
}
.dots .active span,
.dots li:hover span {
  display: block;
}
.boundary {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.page-1 {
  height: 826px;
  background-size: contain;
  position: relative;
}
.cy_canvas {
  width: 60%;
  height: 446px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.page-1 .phone {
  width: 646px;
  height: 570px;
  margin-top: 110px;
  margin-left: -30px;
  position: relative;
  /* background: url("../../assets/images/client/phone.png") no-repeat; */
}
.page-1 .phone-border {
  position: absolute;
  width: 242px;
  height: 484px;
  background: url("../../assets/images/client/page1_phone_border.png") no-repeat;
  left: 202px;
  top: 42px;
}
.page-1 .phone-border .mark-left {
  position: absolute;
  width: 60px;
  height: 330px;
  background: #ccc;
  top: 78px;
  left: -56px;
  opacity: 0.6;
  box-shadow: #666 0 0 180px;
}
.page-1 .phone-border .mark-left-left {
  position: absolute;
  width: 82px;
  height: 310px;
  background: #ccc;
  top: 90px;
  left: -138px;
  opacity: 0.6;
  box-shadow: #666 0 0 180px;
}
.page-1 .phone-border .mark-right {
  position: absolute;
  width: 60px;
  height: 332px;
  background: #ccc;
  top: 78px;
  right: -56px;
  opacity: 0.6;
  box-shadow: #666 0 0 180px;
}
.page-1 .phone-border .mark-right-right {
  position: absolute;
  width: 82px;
  height: 310px;
  background: #ccc;
  top: 90px;
  right: -138px;
  opacity: 0.6;
  box-shadow: #666 0 0 180px;
}
.page1-phone-slider {
  padding-top: 35px;
}
.introduce {
  width: 547px;
  margin-top: 134px;
}
.app-title {
  height: 66px;
  background: url("../../assets/images/client/app_title.png") no-repeat left
    center;
}
.app-introduce {
  line-height: 26px;
  font-size: 20px;
  color: #666;
  letter-spacing: 3px;
  margin-top: 45px;
}
.app-advantage {
  margin-top: 60px;
}
.app-advantage-item {
  float: left;
  width: 104px;
  margin-right: 72px;
  text-align: center;
}
.width80 {
  width: 80px;
}
.app-advantage-icon {
  width: 74px;
  height: 74px;
  margin: 0 auto 18px;
}
.gousai {
  background: url("../../assets/images/client/goucai.png") no-repeat;
}
.jiami {
  background: url("../../assets/images/client/jiami.png") no-repeat;
}
.zaixian {
  background: url("../../assets/images/client/zaixian.png") no-repeat;
}
.app-advantage-item p {
  font-size: 16px;
}
.download-btn {
  width: 238px;
  height: 52px;
  margin-top: 96px;
  display: block;
}

.all-page-tab {
  text-align: center;
  width: 100%;
  bottom: 16px;
  position: absolute;
}
.all-page-tab a{
  display: inline-block;
  width: 80px;
  height: 60px;
  margin: 0 30px;
  position: relative;
  line-height: 60px;
}
.all-page-tab a i{
  display: inline-block;
  width: 100%;
  height: 5px;
  left: 0;
  bottom: 0;
  position: absolute;
}
.all-page-tab .active i{
  background: #f5be6f;
}
.page-2 {
  height: 900px;
  /*background: url("../../assets/images/client/page2_bg.png") no-repeat;*/
}
.page-2 .boundary {
  overflow: auto;
}
.video-wrapper {
  width: 1050px;
  height: 610px;
  margin: 144px auto 0;
  background: #cccccc;
  overflow: hidden;
}
.video-mask{
  width: 100%;
  height: 100%;
  background: #000 url("../../assets/images/client/video_img.png") no-repeat -1px -1px;
}
video {
  width: 100%;
  height: 100%;
}
.page-3 {
  height: 900px;
  position: relative;
}
.page-3-wrapper {
  height: 555px;
  width: 100%;
  background: #ffffff;
}
.page-3 .page-3-bg {
  height: 345px;
  background: url("../../assets/images/client/page5_bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-attachment: fixed;
}
.page-3 .sport_3{
  background: url("../../assets/images/client/sport/page_3.png") no-repeat;
  height: 345px;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-attachment: fixed;
}
.page-3 .phone {
  width: 354px;
  padding: 10px 20px 0;
  height: 457px;
  position: absolute;
  bottom: 0;
  left: 128px;

  background-size: cover;
background-position: center;
  /* overflow: hidden; */
}
.phone-border {
  background: url("../../assets/images/client/kuang_03.png") no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background-size: cover;
background-position: center;
}
.page-3 .phone .slider-wrapper {
  /* width: 350px; */
  height: 100%;
  border-radius: 5px;
  /* margin: 10px auto 0; */
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
.slide-item-2-1 {
  width: 600px;
  height: 500px;
  position: absolute;
  bottom: -55px;
  background: url(~@/assets/images/use_img/slider1bg.png) no-repeat;
}
.slide-item-2-1 .slider-wrapper {
    width: 290px;
    height: 403px;
    left: 166px;
    top: 42px;
    border-radius: 5px;
    position: absolute;
    overflow: hidden;
    /* margin: 10px auto 0; */
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
.page-3 .phone .slider-wrapper img {
  width: 100%;
}
.page-3 .page3-content {
  width: 528px;
  height: 382px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.page-3 .page3-content h2 {
  height: 50px;
  font-size: 50px;
  line-height: 50px;
  text-align: right;
  font-family: "SimHei";
  /* background: url("../../assets/images/client/page3_title.png") no-repeat right
    center; */
  margin-bottom: 33px;
}
.page-3 .page3-content p {
  /* text-align: right; */
  /* height: 30px; */
  text-indent: 40px;
  line-height: 30px;
  color: #666666;
  font-size: 20px;
}
.page-4 {
  height: 900px;
  position: relative;
}
.page-4-bg {
  height: 345px;
  background: url("../../assets/images/client/page4_bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.sport_4{
  height: 345px;
  background: url("../../assets/images/client/page5_bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.page-4-wrapper {
  height: 550px;
  background: #fff;
  width: 100%;
  bottom: 0;
  position: absolute;
}
.page-4 .phone {
  height: 410px;
  width: 546px;
  position: absolute;
  right: 0;
  bottom: 0;
  /* background: #f66 url("../../assets/images/client/page4_phone.png") no-repeat -26px -42px; */
  background: url("../../assets/images/client/page4_phone_bg.png") no-repeat
    34px top;
}
.page-4 .phone .phone_float {
  width: 392px;
  height: 242px;
  background: url("../../assets/images/client/page4_float.png") no-repeat;
  top: 50px;
  position: absolute;
  /* transform: translate(136px, -20px) scale(0.77); */
  animation: floatLeft 3s ease 2s infinite normal;
}
.page4-content {
  height: 380px;
  width: 600px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.page4-content h2 {
  /* height: 49px;
  background: url("../../assets/images/client/page4_title.png") no-repeat; */
  height: 50px;
  font-size: 50px;
  line-height: 50px;
  font-family: "SimHei";
  margin-bottom: 40px;
}
.page4-content p {
  line-height: 30px;
  font-size: 20px;
  color: #666666;
  letter-spacing: 1px;
}
.page-5 {
  height: 900px;
  /* position: relative; */
}
.page-5-bg {
  height: 345px;
  background: url("../../assets/images/client/sport_bg1.png") no-repeat;
  background-size: cover;
background-position: center;
  background-attachment: fixed;
}
/* tab 第二页背景 */
.page2-page5-bg{
  height: 345px;
  background: url("../../assets/images/client/sport/page_5.png") no-repeat;
  background-size: cover;
background-position: center;
  background-attachment: fixed;
}
.page-5-wrapper {
  height: 554px;
  background: #fff;
  width: 100%;
  bottom: 0;
  position: relative;
}
.page-5-wrapper .phone {
  width: 700px;
  height: 400px;
  /* background: url("../../assets/images/client/page5_phone.png") no-repeat; */
  background: url("../../assets/images/client/page5_phone_bg.png") no-repeat 0
    5px;
  bottom: 0;
  left: 0;
  position: absolute;
}
.page-5-wrapper .phone-float {
  width: 522px;
  height: 426px;
  /* background: url("../../assets/images/client/page5_phone_bg.png") no-repeat; */
  position: absolute;
  left: 14px;
  top: 2px;
}
.page-5-wrapper .float1 {
  width: 411px;
  height: 262px;
  background: url("../../assets/images/client/page5_float1.png") no-repeat;
  position: absolute;
  left: 230px;
  top: 10px;
  animation: float1 3s ease 2s infinite normal;
}
.page-5-wrapper .float2 {
  width: 350px;
  height: 163px;
  background: url("../../assets/images/client/page5_float2.png") no-repeat;
  position: absolute;
  left: 354px;
  top: 240px;
  /* transform: scale(0.56) translate(-280px, 188px); */
  animation: float1 3s ease 2s infinite normal;
}
.page-5-wrapper .float3 {
  width: 130px;
  height: 110px;
  background: url("../../assets/images/client/page5_float3.png") no-repeat;
  position: absolute;
  left: 14px;
  top: 220px;

  animation: float3 3s ease 2s infinite normal;
}
.page5-content {
  width: 490px;
  height: 370px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.page5-content h2 {
  /* height: 49px;
  background: url("../../assets/images/client/page5_title.png") no-repeat right
    center; */
  height: 50px;
  font-size: 50px;
  line-height: 50px;
  text-align: right;
  font-family: "SimHei";
  margin-bottom: 33px;
}
.page-5 .page5-content p {
  /* text-align: right; */
  /* height: 30px; */
  text-indent: 40px;
  line-height: 30px;
  color: #666666;
  font-size: 20px;
}
/* .page-6 { */
  /* height: 900px; */
  /* position: relative; */
/* } */
.page-6-bg {
  height: 345px;
  background: url("../../assets/images/client/sport_bg2.png") no-repeat;
background-size: cover;
background-position: center;
  background-attachment: fixed;
}
.page2-page6-bg{
  height: 345px;
  background: url("../../assets/images/client/sport/page_6.png") no-repeat;
background-size: cover;
background-position: center;
  background-attachment: fixed;
}
.page-6-wrapper {
  height: 550px;
  background: #fff;
  width: 100%;
  bottom: 0;
  position: relative;
}
.page-6-wrapper .phone {
  width: 523px;
  height: 693px;
  position: absolute;
  right: -40px;
  bottom: 0;
  z-index: 10;
  background: url("../../assets/images/client/page6_phone.png") no-repeat;
}
.page6-content {
  width: 308px;
  height: 314px;
  position: absolute;
  left: 215px;
  top: 94px;
}
.page6-content .erweima {
  width: 143px;
  height: 143px;
  margin: 0 auto;
}
.page6-content p {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}
.page6-content h2 {
  width: 308px;
  height: 108px;
  background: url("../../assets/images/client/page6_title.png") no-repeat;
}
.page-7 {
  height: 550px;
  background: #f9f9f9;
  padding-top: 30px;
}
.page-7 .left,
.page-7 .center,
.page-7 .right {
  width: 383px;
  height: 518px;
  border: 1px solid #e6e6e6;
  background: #ffffff;
  text-align: center;
  position: relative;
}
.page-7 .center {
  margin-left: 23px;
}
.page-7 .img-wrapper {
  height: 254px;
  text-align: center;
  line-height: 254px;
}
.page-7 .img-wrapper img {
  vertical-align: middle;
}
.page-7 h3 {
  height: 40px;
  line-height: 40px;
  font-size: 32px;
}
.page-7 p {
  width: 296px;
  line-height: 28px;
  font-size: 12px;
  color: #666666;
  margin: 0 auto;
  text-align: left;
}
.page-7 .mark {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
}
.page-7 .mark a {
  display: block;
  width: 238px;
  height: 52px;
  margin: 234px auto 0;
  background: url("../../assets/images/client/download_btn.png") no-repeat;
}
.animationStart {
  /* animation: slideItem1_1 3s ease; */
  animation-name: slideItem1_1;
  animation-duration: 1s;
  animation-timing-function: ease;
  /* animation-iteration-count:1; */
}

.animationStart1 {
  /* animation: slideItem2_1 3s ease; */
  animation-name: slideItem2_1;
  animation-duration: 1s;
  animation-timing-function: ease;
  /* animation-iteration-count:1; */
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

  .slide-item-1-1 {
    width: 600px;
    height: 500px;
    background: url(~@/assets/images/client/sport/page3_phone.png) no-repeat -22px bottom;
    position: absolute;
    bottom: 0;
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
    background: url(~@/assets/images/client/sport/page4_phone.png) no-repeat -6px bottom;
    position: absolute;
    right: 0;
    bottom: 0;
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
    left: 70px;
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
    left: 60px;
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
    left: 184px;
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
    left: 178px;
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
    left: 168px;
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
    background: url(~@/assets/images/client/sport/page5_phone.png) no-repeat left bottom;
    position: absolute;
    bottom: 0;
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
  .slide-item-2-3 {
    width: 600px;
    height: 500px;
    position: absolute;
    right: 0;
    bottom: -55px;
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
  .animationStart5 {
    /* animation: slideItem3_3 3s ease; */
    animation-name: slideItem3_3;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  .slide-item-2-2 {
    width: 600px;
    height: 500px;
    position: absolute;
    bottom: -57px;
    background: url(~@/assets/images/use_img/slider2bg.png) no-repeat;
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
  .animationStart4 {
    /* animation: slideItem3_2 3s ease; */
    animation-name: slideItem3_2;
    animation-duration: 1s;
    animation-timing-function: ease;
  }
</style>
