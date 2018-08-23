<template>
  <div class="item-box clearfix">
      <div class="item-search-area clearfix">
		<label for="">日期 :</label>
        <DatePicker type="date" placeholder="请选择时间" value="start" v-model="start" format="yyyy-MM-dd HH:mm:ss" style="width:200px" class="fl"></DatePicker>
		<Icon type="minus-round" class="fl time-icon"></Icon>
        <DatePicker type="date" placeholder="请选择时间" style="width:200px" v-model="end" value="end" format="yyyy-MM-dd HH:mm:ss" class="fl"></DatePicker>
         <div class="fl item-search-day item-search-a"><i  @click="changeTime(1)">今天</i>|<i>最近:</i></div>
	     <div class="fl item-search-day item-search-day1" v-bind:class="{active:changeTimeFlag==7}"  @click="changeTime(7)">七天</div>
		 <div class="fl item-search-day item-search-day1" v-bind:class="{active:changeTimeFlag==15}" @click="changeTime(15)">15天</div>
	 </div>
	 <div class="item-slabel-area">
		 <label for="" class="clearfix">分类 :</label>
		 <ul class="clearfix">
			 <li v-bind:class="{active:classiTabFlag==1}" @click="changeClass(1)">存款</li>
			 <li v-bind:class="{active:classiTabFlag==2}" @click="changeClass(2)">提款</li>
			 <li v-bind:class="{active:classiTabFlag==3}" @click="changeClass(3)">转账</li>
			 <li v-bind:class="{active:classiTabFlag==4}" @click="changeClass(4)">注单</li>
		</ul>
	 </div>
	 <div class="item-slabel-area last-slabel">
		 <label for="" class="clearfix">场馆 :</label>
		 <ul class="clearfix">
			 <li  v-bind:class="{active:offsetFlag==1}" @click="changeOffset(1)">万博体育</li>
			 <li v-bind:class="{active:offsetFlag==2}" @click="changeOffset(2)">真人娱乐</li>
			 <li v-bind:class="{active:offsetFlag==3}" @click="changeOffset(3)">BBIN</li>
		</ul>
	 </div>
	 <div class="item-table-area">
		<ul class="table-area-theader clearfix">
			<li>单号</li>
			<li>存款方式</li>
			<li>状态</li>
			<li>申请金额</li>
			<li>实际金额</li>
			<li>优惠金额</li>
			<li>红利金额</li>
		</ul>
       	<!-- <ul class="table-area-theader clearfix" v-show="classiTabFlag==2">
			<li>申请日期</li>
			<li>单号</li>
			<li>申请金额</li>
			<li>实际金额</li>
			<li>优惠金额</li>
			<li>手续费</li>
			<li>状态</li>
		</ul>
		<ul class="table-area-theader clearfix" v-show="classiTabFlag==3">
			<li>转账日期</li>
			<li>单号</li>
			<li>转账详情</li>
			<li>状态</li>
			<li>转账额</li>
		</ul>
		<ul class="table-area-theader clearfix" v-show="classiTabFlag==4">
			<li>日期</li>
			<li>平台</li>
			<li>单号</li>
			<li>投注内容</li>
			<li>注单状态</li>
			<li>投注</li>
			<li>派彩</li>
			<li>输赢</li>
			<li>有效投注</li>
		</ul> -->
		<ul class="table-area-tbody clearfix">
			<li><p><Icon type="record" class="pending"></Icon>26352782182</p><p>2018-5-15 12:00</p></li>
			<li>微信支付</li>
			<li class="pending">待处理</li>
			<li>202.0</li>
			<li>00.00</li>
			<li>00.00</li>
			<li>00.00</li>
		</ul>
		<ul class="table-area-tbody clearfix">
			<li><p><Icon type="record" class="pending"></Icon>26352782182</p><p>2018-5-15 12:00</p></li>
			<li>微信支付</li>
			<li class="pending">待处理</li>
			<li>202.0</li>
			<li>00.00</li>
			<li>00.00</li>
			<li>00.00</li>
		</ul>
		<ul class="table-area-tbody clearfix">
			<li><p><Icon type="record"></Icon>26352782182</p><p>2018-5-15 12:00</p></li>
			<li>支付宝支付</li>
			<li>成功</li>
			<li>202.0</li>
			<li>00.00</li>
			<li>00.00</li>
			<li>00.00</li>
		</ul>
		<ul class="table-area-tbody clearfix">
			<li><p><Icon type="record" class="fail"></Icon>26352782182</p><p>2018-5-15 12:00</p></li>
			<li>微信支付</li>
			<li class="fail">超过30分钟(未收到线上支付回应</li>
			<li>202.0</li>
			<li>00.00</li>
			<li>00.00</li>
			<li>00.00</li>
		</ul>
	 </div>
	 <div class="item-page-area">
           <Page :total="100" @on-change="goPage"></Page>
	 </div>
  </div>
</template>

<script>
	import {getHistoryList} from '@/api/record';
	import { loginApi} from '@/api/login';
	export default {
	    name: '',
		data () {
			return {
		    classiTabFlag:1,
			offsetFlag:1,
			changeTimeFlag:0,
			tableData: [
				],
			start:"",
			end:""
			}
		},
		mounted(){
			this.getList();
		},
		methods:{
			//切换分类
			changeClass(num){
                this.classiTabFlag = num;
			},
			//切换场馆
			changeOffset(num){
                this.offsetFlag = num;
			},
			//切换时间
			changeTime(num){
               if(num==1){
					let date = new Date();
					date.setHours(0, 0, 0, 0);
					this.start = date;
			        this.end = new Date();
			   }else if(num==7){
				   let date = new Date();
				   date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
				   this.start = date;
			       this.end = new Date();
			   }else if(num==15){
                    let date = new Date();
				   date.setTime(date.getTime() - 3600 * 1000 * 24 * 15);
				   this.start = date;
			       this.end = new Date();
			   };
			   
			   this.changeTimeFlag = num;
			},
			goPage(page){
               console.log(page);
			},
			getList(){
				let _this = this;
				let time = this.time;
				//   switch(val)
				// 	{
				// 	case ("1"||1):
				// 		str = "身份证";
				// 		break;
				// 	case ("2"||2):
				// 		str = "军官证";
				// 		break;
				// 	case ("3"||3):
				// 		str = "港澳台居民通行证";
				// 		break;
				// 	case ("4"||4):
				// 		str = "护照";
				// 		break;
				// 	};
				// let userInfo = {
				// 	playername: "china",
				//   password: "q1w2e3r4t5"
				// };
				// loginApi(userInfo)
				// 	.then(({ data }) => {
				// 	console.log(data);
			    //  });
				let params = {
					'offset':_this.offsetFlag,
					'pageCount':1,
					'type':'D',
					'start':_this.start,
					'end':_this.end
				};
				console.log(params);
				getHistoryList(params).then((res) => {
					console.log(res);
				if(res.code=="200000"){
					 
				};
				   //NProgress.done();
				})
			}
		}
	}
</script>
<style scoped lang="less">
/* 清除浮动 */
.clearfix:before,.clearfix:after {
    content:"";
    display:table;
}
.clearfix:after {
   display:block; content:''; clear:both;
}
.clearfix {
    zoom:1; /* for ie6 & ie7 */
}
/* 设置浮动，减少浮动带来的 bug */
.fl,.fr {
    display:inline;
}
.fl {
    float:left;
}
.fr {
    float:right;
}
.buttonStyle{
    box-sizing: border-box;
	text-align: center;
	width:86px; 
	cursor: pointer;
	border:1px solid #dfdfe3;
	border-radius: 3px;	
    margin-right: 18px;
};
.button-active{
	color:#ffffff; 
	background: -moz-linear-gradient(top, #fece74 0%, #fc9957 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fece74), color-stop(100%,#fc9957));
	background: -webkit-linear-gradient(top, #fece74 0%,#fc9957 100%);
	background: -o-linear-gradient(top, #fece74 0%,#fc9957 100%);
	background: -ms-linear-gradient(top, #fece74 0%,#fc9957 100%);
	background: linear-gradient(to bottom, #fece74 0%,#fc9957 100%);
}					
.item-box{
	width:100%;
	.item-search-area{
		clear:both;
		padding:40px 40px 36px;
		label{
			padding-right: 22px;
			line-height: 40px;
			 font-size: 15px;
			.fl;
		};
        i.time-icon{
		   line-height: 40px;
		   margin:0 5px;
		};
        .item-search-day{
			line-height: 40px;
			&.item-search-a{
				padding:0 18px 0 30px;
               i:first-child{
				 padding-right:15px;
				 cursor: pointer; 
			   };
			   i:last-child{
				  padding-left:15px;  
			   }
			};
			&.item-search-day1{
				height: 40px;
				.buttonStyle;
				&.active{
				  .button-active;
				  border: 0;	
				};
				&:hover{
				.button-active;
				  border: 0;
				}
			};
			&.item-search-day2{
				height: 40px;
				.buttonStyle;
				&.active{
				   .button-active;
				    border: 0;	
				};
			}
		};
		/deep/div.ivu-date-picker{
			.ivu-input-icon{
			line-height: 40px;
			};
			input.ivu-input{
				box-sizing:border-box;
				height: 40px;
			};
		};

	};
	.item-slabel-area{
		margin-bottom:22px;
        padding:0 40px;
		&.last-slabel{
          margin-bottom: 34px;
		}
		label{
			font-size: 15px;
			padding-right: 22px;
			display: inline-block;
			line-height: 40px;
		};
		ul{
			display: inline-block;
			li{
			  .fl;
			  font-size: 15px;
			  margin-right:10px;
			  cursor: pointer;
			  width:88px;
			  height:40px;
			  border-radius: 2px;
			  text-align: center;
			  line-height: 40px;
			  &.active{
				  .button-active;
			  };
			  &:hover{
				 .button-active; 
			  }
			}
		}
	};
	.item-table-area{
        ul{
			width:100%;
			box-sizing: border-box;
			&.table-area-theader{
				background-color: #f4f4f8;
				display:flex;
				li{
					color: #666666;
					line-height: 50px;
					box-sizing: border-box;
					flex: 1;
					text-align: center;
					// &:not(:first-child){
                    //   text-align: center;
					// };

				}
			};
			&.table-area-tbody{
				display:flex;
				.pending{
                   color: #fda55b;
				};
				.fail{
                   color: #ff2b1b;
				};
				&:hover{
					//  cursor: pointer;
					box-shadow: 0px 0px 20px 10px #dddddd;
				};
				li{
					height:110px;
					flex: 1;
					// white-space:normal;
					// word-break:break-all;
					// overflow : hidden;
					&:not(:first-child){
					  text-align: center;
					  line-height: 110px;
					};
					&:nth-child(3){
					  overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					};
					&:first-child{
                       p{
						   width:100%;
						   padding-left:60px;
						   box-sizing: border-box;
						   &:first-child{
							   height: 65px;
							   line-height: 81px;
							   position: relative;
							   i{
								   position: absolute;
								   top:34px;
								   left:24px;
							   }
						   };
						   &:last-child{
							   height: 45px;
							   font-size: 10px;
							   color: #666666;
							   line-height: 20px;
						   }
					   }
					};
				}
			}
		}
	};
	//分页样式
	.item-page-area{
		padding:25px 0 72px 0;
		.ivu-page{
			display: table;
			margin: 0 auto;
		}
	}
} 
</style>
