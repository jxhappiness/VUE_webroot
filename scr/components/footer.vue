<template>
    <div id="boot">
  		<div id="bt_con1" style="width:1280px;margin:0 auto;">
  			<div class="bt_nav">
  				<ul>
  					<li class="hover">
  						<a href="#" title="万博ManBetx">万博ManBetX</a>
  					</li>
  					<li>
  						<a href="#" title="博彩责任">博彩责任</a>
  					</li>
  					<li>
  						<a href="#" title="规则与条款">规则与条款</a>
  					</li>
  					<li>
  						<a href="#" title="免责声明">免责声明</a>
  					</li>
  					<li>
  						<a href="#" title="隐私政策">隐私政策</a>
  					</li>
  					<li>
  						<a href="#" title="投注规则">投注规则</a>
  					</li>
  					<li>
  						<a href="#" title="公平与公正">公平与公正</a>
  					</li>
  					<li>
  						<router-link  to="/question" title="帮助中心">帮助中心</router-link>
  					</li>
  					<li>
							<router-link  to="/aboutUs" title="联络我们">联络我们</router-link>
  					</li>
  					<li>
							<router-link  to="/aboutUs" title="关于我们">关于我们</router-link>
  					</li>
  					<li>
  						<a href="#" title="联盟合作">联盟合作</a>
  					</li>
  				</ul>
  			</div>
  			<div class="bt_logos">
  				<dl class="dl1">
  					<dt :style="{width: '72px',height: '72px',backgroundSize: '72px',backgroundImage: 'url('+require('../assets/images/footer/zz2.png')+')'}"></dt>
  					<dd>
  						<p class="wz1">2017/2018 赛季英超联赛赞助商</p>
  						<p class="wz2"><img src="../assets/images/footer/cy_img21.png"></p>
  						<p class="wz3">
  							<a href="#" title="赞助信息">赞助信息</a>|
  							<a href="#" title="球衣发布">球衣发布</a>|
  							<a href="#" title="水晶宫百科">水晶宫百科</a>
  						</p>
  					</dd>
  				</dl>
  				<dl>
  					<dt class="dtlist1"></dt>
  					<dd>
  						<p class="wz1">2017/2018 赛季意甲官方冠名赞助商</p>
  						<p class="wz2"><img src="../assets/images/footer/cy_img22.png"></p>
  						<p class="wz3">
  							<a href="#" title="赞助信息">赞助信息</a>|
  							<a href="#" title="赔率收录">赔率收录</a>|
  							<a href="#" title="意甲直播专栏">意甲直播专栏</a>
  						</p>
  					</dd>
  				</dl>
  				<dl>
  					<dt class="dtlist2"></dt>
  					<dd>
  						<p class="wz1">2016/2018 赛季西甲联赛赞助商</p>
  						<p class="wz2"><img src="../assets/images/footer/cy_img23.png"></p>
  						<p class="wz3">
  							<a href="#" title="赞助信息">赞助信息</a>|
  							<a href="#" title="场边广告">场边广告</a>|
  							<a href="#" title="意甲直播专栏">西甲直播专栏</a>
  						</p>
  					</dd>
  				</dl>
  			</div>
  		</div>
  		<div id="bt_con2" class="w1200">
  			<dl class="bt_ct">
  				<dt class="tit">联络我们</dt>
  				<dd>
  					<a href="#" class="icon icon1"></a>
  					<a href="#" class="icon icon2"></a>
  					<a href="#" class="icon icon3"></a>
  					<a href="#" class="icon icon4"></a>

  				</dd>
  			</dl>
  			<dl class="bt_sm">
  				<dt class="tit">免责声明</dt>
  				<dd>ManBetX万博是注册于英属维京群岛的合法公司，并拥有欧洲英国GC监督委员会 (Gambling Commission) 以及亚洲菲律宾PAGCOR和GICC正规牌照授权并进行监督。在您入网站娱乐前，请确保您满18周岁并遵循当地政策条款。 </dd>
  			</dl>
  			<dl class="bt_pz">
  				<dt class="tit">正规牌照</dt>
  				<dd>

  					<a href="##" class="icon icon1"></a>
  					<a href="##" class="icon icon3"></a>
  					<a href="##" class="icon icon2"></a>

  				</dd>
  			</dl>
  			<dl class="bt_zr">
  				<dt class="tit">责任</dt>
  				<dd>

  					<a href="##" class="icon icon1"></a>
  					<a href="##" class="icon icon2"></a>

  				</dd>
  			</dl>
  		</div>
  		<div id="bt_con3" class="w1200">
  			<p class="fl">ManBetX万博版权所有 | 沉迷赌博伤身，请合理安排游戏时间</p>
  			<p class="fr copy">Copyright © 2009-2018
  				<a href="#" title="">www.1manbet.cc</a>, All Rights Reserved</p>
  		</div>
  	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
/*
 底部信息
 * */
#boot{background: url(../assets/images/footer/bt_bg.jpg) left top repeat-x;}
#bt_con1{height: 257px;}
.dtlist1{background: url(../assets/images/footer/zz3.png) no-repeat;width: 72px;height: 72px;background-size: 72px;}
.dtlist2{width: 72px;height: 72px;background: url(../assets/images/footer/zzs1.png) left top no-repeat;background-size: 72px;}
.bt_nav{height: 53px; padding: 18px 0 0; background: url(../assets/images/footer/bt_line.jpg) left bottom repeat-x;}
.bt_nav li{float: left; height: 53px; background: url(../assets/images/footer/bt_line2.jpg) right center no-repeat;}
.bt_nav li a{display: block; font: 400 13px/50px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; color: #999999; padding: 0 26px; height: 51px;}
.bt_nav li a:hover{border-bottom: #b9996c solid 2px; color: #d6d6d6;}
.bt_nav li.hover a{border-bottom: #b9996c solid 2px; color: #d6d6d6;}
.bt_logos{height: 82px; padding: 53px 0 0;}
.bt_logos dl{ width: 345px;float: left; height: 82px; padding-left: 67px; background: url(../assets/images/footer/bt_line3.jpg) left center no-repeat;}
.bt_logos dl dt{float: left;}
.bt_logos dl dt img{padding-top: 10px;}
.bt_logos dl dd{float: left; width: 265px;}
.bt_logos dl dd .wz1{height: 20px; font: 400 12px/20px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; color: #6b6b6b;}
.bt_logos dl dd .wz2{height: auto; font: 400 14px/22px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; color: #d5d5d5; padding-top: 6px;}
.bt_logos dl dd .wz3{font: 400 12px/22px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; margin-left: -10px;}
.bt_logos dl dd .wz3 a{color: #808080; margin: 0 10px;text-decoration: underline;}
.bt_logos dl dd .wz3 a:hover{color: #d5d5d5;}
.bt_logos dl.dl1{padding-left: 0; background: none;}

#bt_con2{height: 125px; padding: 37px 0 0;}
#bt_con2 .tit{height: 40px; font: 400 16px/20px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; color: #bcbdbc;}
.bt_ct{float: left; width: 262px;}
.bt_ct dd{height: 38px; margin: 8px 0 0;}
.bt_ct dd a{display: inline-block;width: 38px;height: 41px;background: url(../assets/images/footer/bt_fx1_01.png)  no-repeat center;}
.bt_ct dd .icon2{background-image: url(../assets/images/footer/bt_fx2_03.png);}
.bt_ct dd .icon3{background-image: url(../assets/images/footer/bt_fx3_05.png);}
.bt_ct dd .icon4{background-image: url(../assets/images/footer/bt_fx4_07.png);}
.bt_ct dd .icon1:hover{background-image: url(../assets/images/footer/bt_fx1hover_12.png);}
.bt_ct dd .icon2:hover{background-image: url(../assets/images/footer/bt_fx2hover_13.png);}
.bt_ct dd .icon3:hover{background-image: url(../assets/images/footer/bt_fx3hover_14.png);}
.bt_ct dd .icon4:hover{background-image: url(../assets/images/footer/bt_fx4hover_15.png);}
.bt_sm{float: left; width: 520px;}
.bt_sm dd{width: 433px; font: 400 11px/18px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; color: #666666;}
.bt_pz{float: left; width: 322px;}
.bt_pz a{display: inline-block;height: 52px;}
.bt_pz .icon1{width: 51px;background: url(../assets/images/footer/pagcor.png) no-repeat center;margin-right: 22px;}
.bt_pz .icon1:hover{background-image: url(../assets/images/footer/pagcor_a.png); }
.bt_pz .icon2{width: 150px;background: url(../assets/images/footer/GC.png) no-repeat center;}
.bt_pz .icon2:hover{background-image: url(../assets/images/footer/GC_a.png); }
.bt_pz .icon3{width: 47px;background: url(../assets/images/footer/gicc.png) no-repeat center;}
.bt_pz .icon3:hover{background-image: url(../assets/images/footer/gicc_a.png); }
.bt_zr{float: left; width: 95px;}
.bt_zr .icon{display: inline-block;width: 42px;height: 52px;background: url(../assets/images/footer/GAMCARE.png) no-repeat  center;}
.bt_zr .icon2{display: inline-block;width: 42px;height: 52px;background: url(../assets/images/footer/18.png) no-repeat  center;}
.bt_zr .icon1:hover{background-image: url(../assets/images/footer/GAMCARE_a.png);}
.bt_zr .icon2:hover{background-image: url(../assets/images/footer/18_a.png);}
.bt_pz dd,.bt_zr dd{padding: 3px 0 0;}

#bt_con3{height: 60px; font: 400 12px/60px "PingFang SC","苹方","Microsoft Yahei", "微软雅黑", Arial,"Helvetica"; color: #787878;}
#bt_con3 .copy{color: #abacac;}
#bt_con3 .copy a{color: #ABACAC;}
#bt_con3 .copy a:hover{color: #b9996c;}
  a{white-space: nowrap}
</style>
