<template>
	<div class="transfer">
		<div class="amount-container">
			<div class="turn">
				<div class="turnout">
					<p>转出</p>
					<Select v-model="model1" class="selectt" size="large" style="width: 325px;">
						<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<div class="turnin">
					<p>转入</p>
					<Select v-model="model2" class="selectt" size="large" style="width: 325px;">
						<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<p class="turn-transfer" @click="transferTurn"></p>
			</div>
			<div class="amount">
				<div class="turn-amount">
					<p>金额</p>
					<Input v-model="value" placeholder="请输入金额" style="width: 300px"></Input>
				</div>
         <a class="submit-turn" href="javascript:void(0)">转&nbsp;&nbsp;&nbsp;&nbsp;账</a>
			</div>
		</div>
		<div class="acount-list-container">
			<div class="transfer-title">
        <div class="tr_quick_tips" :class="{tr_quick_show:isShow}">当你进入游戏时余额将自动转入该游戏平台</div>
				<p class="txt-button">快速转账</p>
				<p>
					<RadioGroup v-model="disabledGroup">
						<Radio label="关闭自动转账" ></Radio>
						<Radio label="开始自动转账"></Radio>
					</RadioGroup>
				</p>
        <div   @mouseleave="tipsShow(2)" @mouseenter="tipsShow(1)">
          <Icon type="ios-help-outline" size="18"></Icon>
        </div>
			</div>
			<div class="txt-transfer">可将资金快速全部转入某一账户中</div>
      <div class="tr_tab">
        <Row>
          <Col v-for="(item,index) in accountList1" :key="index" span="8" class="tr_tap_item_w">
            <div class="tr_tap_item">
              <Row align="middle">
                <Col span="8"><div class="tr_tap_m">{{item.name}}</div></Col>
                <Col span="8"><div  class="tr_tap_m">{{item.amount}}</div></Col>
                <Col span="8">
                  <a class="tr_tab_btn" @click="alltransfer" href="javascript:void(0)">全部转入</a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
		</div>
	</div>
</template>

<script>

export default {
	name: "transfer",
	data () {
		return {
      isShow:false,
      cityList: [
				{
					value: '主账户',
					label: '主账户'
				},
				{
					value: '万博',
					label: '万博'
				}
			],
			model1: '主账户',
      model2: '万博',
			disabledGroup: "开始自动转账",
			value:'',
			accountList1: [{
				name: '万博',
				amount: '111.00'
			}, {
				name: '万博',
				amount: '111.00'
			}, {
				name: '万博',
				amount: '111.00'
			}, {
				name: '万博',
				amount: '111.00'
			}, {
				name: '万博',
				amount: '111.00'
			}]
		}
	},
	methods:{
		alltransfer(){
			console.log(111)
		},
		transferTurn(){
      let _value=this.model1;
      this.model1=this.model2;
      this.model2=_value;
		},
    tipsShow:function (mouse) {
      if(mouse===1){
        this.isShow=true;
      }else{
        this.isShow=false;
      }
    }
	}
}
</script>

<style lang="less" scoped>
.transfer {
  width: 1200px;
  margin: 0 auto;
  .amount-container {
    width: 100%;
    height: 258px;
    padding: 60px 0 0 93px;
    box-sizing: border-box;
    background: #fafafa;
    display: flex;
    .turn,
    .amount {
      flex: 1;
		}
		.turn{
			background: url("~@images/personal/transfer.png") no-repeat 428px 16px;
			background-size: 61px;
			position: relative;
			.turn-transfer{
				width: 30px;
				height: 30px;
				position: absolute;
				right: 65px;
				top: 39px;
			}
		}
    .turnout,
    .turnin,
    .turn-amount {
      display: flex;
      margin-bottom: 35px;
      p {
        width: 70px;
        height: 20px;
        margin: 7px 0;
        border-left: 1px solid black;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        margin-right: 33px;
      }
      /deep/.ivu-select-large.ivu-select-single .ivu-select-selection {
				// height: 40px;
				// line-height: 40px;
			}
    }
    .submit-turn {
      margin-top: -10px;
      width: 195px;
      height: 40px;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 16px;
      margin-left: 105px;
    }
	}
	.transfer-title{
		height: 50px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dedfec;
    position: relative;
		.txt-button{
			width: 180px;
			height: 50px;
			background: linear-gradient(to bottom, #f9d07c, #f19d5d);
      text-align: center;
      line-height: 50px;
      color: #fff;
			font-size: 16px;
			margin-right:auto;
		}
		/deep/.ivu-radio-wrapper{
			margin-right: 42px;
		}
		/deep/i{
			margin-right:42px;
			margin-top: 3px;
			margin-left: -20px;
		}
		/deep/.ivu-radio-checked .ivu-radio-inner {
			border-color: #f19d5d ;
		}
		/deep/.ivu-radio-checked .ivu-radio-inner:after {
			background-color: #f19d5d;
		}
	}
  .tr_quick_tips{
    position: absolute;
    right: 40px;
    top:-40px;
    z-index:99;
    background: white;
    padding: 6px 15px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    font-size:11px;
    color: #666;
    display: none;
  }
  .tr_quick_show{
    display: block!important;
  }
	.txt-transfer{
		height: 85px;
		text-align: left;
		text-indent: 45px;
		font-size: 14px;
		line-height: 85px;
		color: #6b6b6b;
	}
  .tr_tab{
    width:100%;
    padding-bottom: 83px;
  }
  .tr_tap_item{
    height:65px;
    padding-top: 17px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .tr_tap_item_w{
    border-right:1px solid #DFDFE3;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .tr_tap_item_w:nth-child(3n+3){
    border-right:none;
  }
  .tr_tap_item_w:nth-child(6n+1){
    background: #F8F8F8;
  }
  .tr_tap_item_w:nth-child(6n+2){
    background: #F8F8F8;
  }
  .tr_tap_item_w:nth-child(6n+3){
    background: #F8F8F8;
  }
  .tr_tab_btn,.submit-turn{
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin-left: 0;
    font-size:14px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    display: block;
    background: url(~@/assets/images/use_img/cy_img15.jpg) repeat-x;
  }
  .tr_tap_m{
    text-align: center;
    line-height: 30px;
  }
  .tr_tap_item:nth-of-type(3n){
    border-right:none;
  }
}
</style>
