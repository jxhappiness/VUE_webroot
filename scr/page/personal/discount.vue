<template>
	<div>
		<Tabs size="small" :animated="false" class="discount_tab">
			<TabPane label="红利/返水">
				<div class="discount_bonus">
					<header>
						<div class="search_item" style="margin-right:60px;">
							<label for="">
								游戏平台：
							</label>
							<Select v-model="searchParams.platform" style="width:130px;height:40px;">
							<Option v-for="item in platformList" :value="item.value" :key="item.value">{{ item.name }}</Option>
							</Select>
						</div>
						<div class="search_item">
							<label for="">
								起止时间：
							</label>
							<DatePicker type="date" placeholder="选择开始日期" format="yyyy-MM-dd" :value="searchParams.sTime" style="width: 150px;margin-right:15px;" @on-change="stimeChange"></DatePicker>
							<span class="line">-</span>
							<DatePicker type="date" placeholder="选择结束日期" format="yyyy-MM-dd" :value="searchParams.eTime" style="width: 150px;margin-left:5px;margin-right:15px;" @on-change="etimeChange"></DatePicker>
							<a href="javascript:void(0)" class="small_orange_btn">筛选</a>
						</div>
						<div class="search_item" style="float:right;">
							<label for="">
								最近：
							</label>
							<a href="javascript:void(0)" @click="chooseDays(7)"  :class="{small_white_btn: chooseDay != 7,small_orange_btn:chooseDay == 7}">7天</a>
							<a href="javascript:void(0)" @click="chooseDays(15)" :class="{small_white_btn: chooseDay != 15,small_orange_btn:chooseDay == 15}">15天</a>
						</div>
					</header>
					<section>
						<Table :columns="columns1" :data="data1"></Table>
					</section>
					<footer style="text-align:center;">
						<Page :total="100"></Page>
					</footer>
				</div>
			</TabPane>
			<TabPane label="自助优惠申请">
				<div class="discount_apply">
					<section>
						<ul>
							<li>
								<div class="apply_list_left">
									<i></i>
									<span>好几份哈咖啡还是发开发进度跟进的很干净</span>
								</div>
								<div class="apply_list_right">
									<a href="javascript:void(0)" class="small_orange_btn">申请参考</a>
									<a href="javascript:void(0)" class="small_gray_btn">查看详情</a>
								</div>
							</li>
							<li>
								<div class="apply_list_left">
									<i></i>
									<span>好几份哈咖啡还是发开发进度跟进的很干净</span>
								</div>
								<div class="apply_list_right">
									<a href="javascript:void(0)" class="small_orange_btn">申请参考</a>
									<a href="javascript:void(0)" class="small_gray_btn">查看详情</a>
								</div>
							</li>
							<li>
								<div class="apply_list_left">
									<i></i>
									<span>好几份哈咖啡还是发开发进度跟进的很干净</span>
								</div>
								<div class="apply_list_right">
									<a href="javascript:void(0)" class="small_orange_btn">申请参考</a>
									<a href="javascript:void(0)" class="small_gray_btn">查看详情</a>
								</div>
							</li>
						</ul>
					</section>
					<footer style="text-align:center;">
						<Page :total="100"></Page>
					</footer>
				</div>
			</TabPane>
		</Tabs>
	</div>
</template>

<script>
	export default {
		name: "discount",
		data () {
			return {
				chooseDay: 0,
				searchParams: {
					platform: null,
					sTime: new Date(),
					eTime: new Date()
				},
                platformList: [{
					value: '1',
					name: '完毕体育'
				},{
					value: '2',
					name: '哈哈体育'
				}],
				columns1: [
                    {
                        title: '序号',
                        key: 'name'
                    },
                    {
                        title: '单号',
                        key: 'age'
                    },
                    {
                        title: '平台',
                        key: 'address'
					},
					{
                        title: '金额',
                        key: 'name'
                    },
                    {
                        title: '类型',
                        key: 'age'
                    },
                    {
                        title: '时间',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
		},
		methods: {
			chooseDays (days) {
				const currTime = new Date();
				if (this.chooseDay == days) {
					this.chooseDay = 0;
				} else {
					this.chooseDay = days;
					this.searchParams.sTime = new Date(Date.parse(currTime) - ((days - 1)*24*3600*1000));
					this.searchParams.eTime = currTime;
				}
				
			},
			timeChange () {
				const sTime = Date.parse(this.searchParams.sTime);
				const eTime = Date.parse(this.searchParams.eTime);
				if (sTime > eTime) {
					let t = this.searchParams.eTime;
					this.searchParams.eTime = this.searchParams.sTime;
					this.searchParams.sTime = t;
				}
			},
			stimeChange (changeTime) {
				this.searchParams.sTime = changeTime;
				this.timeChange();
			},
			etimeChange (changeTime) {
				this.searchParams.eTime = changeTime;
				this.timeChange();
			},
		}
	}
</script>

<style lang="less" scoped>
	.small_white_btn{
		background: #fff;
		border:1px solid #dfdfe3;
		color: #333;
		border-radius: 5px;
		display: inline-block;
		height: 40px;
		padding: 0 25px;
		line-height: 40px;
		margin-right: 10px;
		box-sizing: border-box;
	}
	.small_gray_btn{
		background: #f3f2f3;
		border:1px solid #dfdfe3;
		color: #333;
		border-radius: 5px;
		display: inline-block;
		height: 40px;
		padding: 0 25px;
		line-height: 40px;
		margin-right: 10px;
	}
	.small_orange_btn{
		background: linear-gradient(to bottom, #f9d07c, #f19d5d);
		color: #fff;
		border-radius: 5px;
		display: inline-block;
		height: 40px;
		padding: 0 25px;
		line-height: 40px;
		margin-right: 10px;
		border:1px solid transparent;
	}
	.discount_tab{
		/deep/.ivu-table-wrapper{
			border:0;
		}
		/deep/.ivu-table th{
			height: 50px;
			text-align: center;
			background-color: #f2f2f2;
		}
		/deep/.ivu-table td{
			text-align: center;
			height: 60px;
			color:#999;
		}
		/deep/.ivu-table td:after{
			width: 1px;
			height: 38px;
			background: red;
		}
		/deep/.ivu-table-row{
			&:hover{
				box-shadow: -10px 10px 10px #ddd;
			}
		}
		/deep/tr.ivu-table-row-hover td{
			background:#fff;
			
		}
		/deep/.ivu-tabs-bar{
			width: 1120px;
			margin: 40px auto 0;
		}
		/deep/&.ivu-tabs{
			overflow:inherit;
		}
		/deep/.ivu-select-single .ivu-select-selection{
			height: 100%;
		}
		/deep/.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
			height: 40px;
			line-height: 40px;
		}
		/deep/.ivu-tabs-nav .ivu-tabs-tab{
			font-weight: 900;
			font-size: 18px;
			padding: 15px 30px;
			color: #424242;
		}
		/deep/.ivu-tabs-ink-bar{
			background-color: transparent;
		}
		/deep/.ivu-tabs-nav .ivu-tabs-tab-active{
			background: linear-gradient(to bottom, #f9d07c, #f19d5d);
			color: #fff;
		}
		/deep/.ivu-tabs-bar{
			margin-bottom: 30px;
		}
		/deep/.ivu-input-icon-normal + .ivu-input{
			padding-right: 0;
		}
		/deep/.ivu-input-icon{
			top: 5px;
		}
		/deep/.ivu-page-item-active{
			background: linear-gradient(to bottom, #f9d07c, #f19d5d);
			border:1px solid #f19d5d;
		}
		.discount_bonus{
			header{
				width: 1120px;
				margin: 0 auto 30px;
				.search_item{
					display: inline-block;
					.line{
						color: #dbd8d8;
					}
				}
			}
			section{
				margin-bottom: 55px;
			}
			footer{
				padding-bottom:60px;
			}
		}
		.discount_apply{
			section{
				ul{
					box-shadow: 5px 0px 5px #ddd;
					li{
						height: 80px;
						border-bottom: 1px solid #ededed;
						padding:0 40px;
						&:hover{
							box-shadow: 0px 0px 10px #ddd;
						}
						.apply_list_left{
							float: left;
							width:810px;
							line-height:80px;
							color: #999999;
							padding-left: 26px;
							box-sizing: border-box;
							background: url('~@images/personal/discount_apply.png') no-repeat 3px center;
						}
						.apply_list_right{
							float: right;
							width: 290px;
							text-align: right;
							line-height:80px;
						}
					}
				}
				
			}
			footer{
				padding: 80px 0 60px;
			}
		}
	}
</style>
