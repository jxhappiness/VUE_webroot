<template>
  <div class="deposit">
    <ul class="payWays">
      <li v-for="(item,index) in payWayArr" :key="index" :class="{'isSelected':selectedPayWay === item.name}" @click="selectPayWay(item)">
        <img :src="item.url" />
        <img class="selected" :src="selectdImg" v-if="selectedPayWay === item.name" />
      </li>
    </ul>
    <div class="payWayBox">
        <!-- 以下的各个分块理应拆分成小组件，由于页面结构他人构建，不好随意改动，只能如此 -->
      <i-form ref="form" :model="formValidate" :rules="ruleValidate">
        <!-- 微信、网银、急速共用 -->
        <div v-if="selectedPayWay !== 'rg'">
          <Form-item prop="depositAmount">
              <i-input :value.sync="formValidate.depositAmount" placeholder="请输入存款金额"></i-input>
              <span class="limitAmount">单笔限额：5万</span>
              <span class="limitAmount">单日累计限额：5万</span>
              <p class="minAmount">最小充值金额XX元</p>
          </Form-item>
          <ul class="specificAmount">
            <li :class="{'selectedAmount':formValidate.depositAmount === item}" :key="index" v-for="(item,index) in amountArr" @click="selectAmound(item)">{{item}}元</li>
          </ul>
        </div>
        <!-- 微信支付 -->
        <div class="qrcodeBox" v-if="selectedPayWay === 'wx'">
          <img :src="qrcode" />
          <p>
            <img :src="wxImg" />
            <span>请使用微信扫码支付</span>
          </p>
        </div>
        <!-- 支付宝支付 -->
        <div class="qrcodeBox" v-if="selectedPayWay === 'zf'">
          <img :src="qrcode" />
          <p>
            <img :src="zfImg" />
            <span>请使用支付宝扫码支付</span>
          </p>
        </div>
        <!-- 京东支付 -->
        <div class="qrcodeBox" v-if="selectedPayWay === 'jd'">
          <img :src="qrcode" />
          <p>
            <img :src="jdImg" />
            <span>请使用京东扫码支付</span>
          </p>
        </div>
        <!-- qq支付 -->
        <div class="qrcodeBox" v-if="selectedPayWay === 'qq'">
          <img :src="qrcode" />
          <p>
            <img :src="qqImg" />
            <span>请使用QQ扫码支付</span>
          </p>
        </div>
        <!-- 网银支付 -->
        <div class="wyPayBox" v-if="selectedPayWay === 'wy'">
          <ul class="banks">
            <li v-for="(item,index) in banksArr" :key="index" :class="{'isSelectedBank':selectedBank === item.name}" @click="selectBank(item)">
              <img :src="item.url" />
              <img class="selected" :src="selectdImg" v-if="selectedBank === item.name" />
            </li>
          </ul>
        </div>
        <!-- 急速网银 -->
        <div class="jsPayBox" v-if="selectedPayWay === 'js'">
          <div v-if="cardArr && cardArr.length > 0">
            <p class="arrow" @click="addCard"><img class="leftArrow" :src="leftArrow" /></p>
            <ul class="carousel">
              <li v-for="(item,index) in cardArr" :key="index" v-if="(index <= cardIndex + 1) && (index >= cardIndex - 1)" :class="{'isSelectedCard':selectedCard === item.name}" @click="selectCard(item)">
                <p class="info">
                  <span>{{item.cardName}}</span>
                  <span>{{item.cardBy}}</span>
                  <span>{{item.cardNum}}</span>
                </p>
                <img :src="item.url" />
                <img class="selected" :src="selectedCardImg" v-show="selectedCard === item.name" />
              </li>
            </ul>
            <p class="arrow" @click="lessCard"><img class="rightArrow" :src="rightArrow" /></p>
          </div>

          <p class="addCard" @click="showJsAddCard"><img :src="addCardImg" />添加银行卡</p>

          <div v-if="isShowJsAddCard && !selectedCard">
            <Form-item prop="jsCardId">
                <p class="bankCard">填写银行卡</p>
                <i-input :value.sync="formValidate.jsCardId" placeholder="请输入卡号/支付宝账号"></i-input>
                <p>卡号仅需输入1次，下次可直接使用该银行卡/支付宝</p>
            </Form-item>
            <Form-item prop="jsName">
                <i-input :value.sync="formValidate.jsName" placeholder="请输入付款人姓名"></i-input>
            </Form-item>
          </div>
        </div>

        <!-- 人工智能 -->
        <div class="rgPayBox" v-if="selectedPayWay === 'rg'">
          <p>收款银行</p>
          <div class="receiptBankCard">
            <p class="receiptBankCardInfo">
              <span>建设银行</span>
              <span>姓名：<b>{{defaultBank.name}}</b><i-button @click="copyContent(defaultBank.name)">复制</i-button></span>
              <span>卡号：<b>{{defaultBank.cardId}}</b><i-button @click="copyContent(defaultBank.cardId)">复制</i-button></span>
            </p>
            <img class="receiptBankCardImg" :src="defaultBank.url" />
          </div>
          <p class="rgNotify">注：请检查正确信息</p>

          <div v-if="cardArr && cardArr.length > 0">
            <p class="rgSeparate">以下信息在您存款后填写</p>
            <p class="arrow" @click="addCard"><img class="leftArrow" :src="leftArrow" /></p>
            <ul class="carousel">
              <li v-for="(item,index) in cardArr" :key="index" v-if="(index <= cardIndex + 1) && (index >= cardIndex - 1) && cardArr[index]" :class="{'isSelectedCard':selectedCard === item.name}" @click="selectCard(item)">
                <p class="info">
                  <span>{{item.cardName}}</span>
                  <span>{{item.cardBy}}</span>
                  <span>{{item.cardNum}}</span>
                </p>
                <img :src="item.url" />
                <img class="selected" :src="selectedCardImg" v-show="selectedCard === item.name" />
              </li>
            </ul>
            <p class="arrow" @click="lessCard"><img class="rightArrow" :src="rightArrow" /></p>
          </div>

          <p class="addCard" @click="showRgAddCard"><img :src="addCardImg" />添加银行卡</p>

          <div v-if="isShowRgAddCard">
            <div v-if="isShowRgAddCard && !selectedCard">
              <Form-item prop="name" label="姓名：">
                  <i-input :value.sync="formValidate.name" placeholder="请输入姓名"></i-input>
              </Form-item>
              <Form-item prop="cardId" label="卡号：">
                  <i-input :value.sync="formValidate.cardId" placeholder="请输入正确有效卡号"></i-input>
              </Form-item>
            </div>
            <Form-item prop="rgAmount" label="存款金额：">
                <i-input :value.sync="formValidate.rgAmount" placeholder="请输入存款金额"></i-input>
            </Form-item>
            <Form-item prop="rgDate" label="付款时间：">
                <Date-picker type="date" placeholder="请输入存款时间" :value.sync="formValidate.rgDate"></Date-picker>
            </Form-item>
            <Form-item prop="rgNote" label="交易备注：">
                <i-input :value.sync="formValidate.rgNote" placeholder="请输入备注"></i-input>
            </Form-item>
          </div>
        </div>

        <!-- 提交按钮，除二维码外，所有部分共用 -->
        <Form-item v-if="selectedPayWay === 'wy' || selectedPayWay === 'rg' || selectedPayWay === 'js'">
            <i-button type="primary" @click="handleSubmit()">提交</i-button>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>

<script>
import qq from '@images/personal/deposit/qqWay.png'
import jd from '@images/personal/deposit/jdWay.png'
import rg from '@images/personal/deposit/rgWay.png'
import wx from '@images/personal/deposit/wxWay.png'
import zf from '@images/personal/deposit/zfWay.png'
import js from '@images/personal/deposit/jsWay.png'
import wy from '@images/personal/deposit/wyWay.png'

import selectdImg from '@images/personal/deposit/selected.png'
import selectedCardImg from '@images/personal/deposit/selectedCard.png'

import qrcode from '@images/personal/deposit/qrcode.png'
import wxImg from '@images/personal/deposit/wxImg.png'
import zfImg from '@images/personal/deposit/zfImg.png'
import qqImg from '@images/personal/deposit/qqImg.png'
import jdImg from '@images/personal/deposit/jdImg.png'
import gsBank from '@images/personal/deposit/gsBank.png'
import msBank from '@images/personal/deposit/msBank.png'
import zgBank from '@images/personal/deposit/zgBank.png'
import jsBank from '@images/personal/deposit/jsBank.png'
import gfBank from '@images/personal/deposit/gfBank.png'
import hxBank from '@images/personal/deposit/hxBank.png'
import jtBank from '@images/personal/deposit/jtBank.png'
import nyBank from '@images/personal/deposit/nyBank.png'
import zsBank from '@images/personal/deposit/zsBank.png'
import yzBank from '@images/personal/deposit/yzBank.png'
import pdBank from '@images/personal/deposit/pdBank.png'
import gdBank from '@images/personal/deposit/gdBank.png'
import xyBank from '@images/personal/deposit/xyBank.png'
import paBank from '@images/personal/deposit/paBank.png'
import zxBank from '@images/personal/deposit/zxBank.png'

import pdCard from '@images/personal/deposit/pdCard.png'
import zxCard from '@images/personal/deposit/zxCard.png'
import yzCard from '@images/personal/deposit/yzCard.png'
import gsCard from '@images/personal/deposit/gsCard.png'
import msCard from '@images/personal/deposit/msCard.png'
import zgCard from '@images/personal/deposit/zgCard.png'
import jsCard from '@images/personal/deposit/jsCard.png'
import gfCard from '@images/personal/deposit/gfCard.png'
import gdCard from '@images/personal/deposit/gdCard.png'
import hxCard from '@images/personal/deposit/hxCard.png'
import xyCard from '@images/personal/deposit/xyCard.png'
import nyCard from '@images/personal/deposit/nyCard.png'
import zsCard from '@images/personal/deposit/zsCard.png'
import paCard from '@images/personal/deposit/paCard.png'
import zfCard from '@images/personal/deposit/zfCard.png'

import leftArrow from '@images/personal/deposit/leftArrow.png'
import rightArrow from '@images/personal/deposit/rightArrow.png'

import addCardImg from '@images/personal/deposit/addCard.png'

import bankRecognition from '@/utils/bankRecognition'

	export default {
    name: "deposit",
    data(){
      return {
        addCardImg,
        leftArrow,
        rightArrow,
        selectdImg,
        selectedCardImg,
        qrcode,
        wxImg,
        jdImg,
        qqImg,
        zfImg,
        payWayArr:[
          {name:'wx',url:wx},
          {name:'zf',url:zf},
          {name:'jd',url:jd},
          {name:'wy',url:wy},
          {name:'qq',url:qq},
          {name:'js',url:js},
          {name:'rg',url:rg}
        ],
        selectedPayWay:'wx',
        formValidate:{
          depositAmount:'',
          name:'',
          cardId:'',
          rgAmount:'',
          rgDate:'',
          rgNote:''
        },
        ruleValidate:{
          depositAmount: [
              { required: true, message: '存款金额不能为空', trigger: 'blur' }
          ],
          name: [
              { required: true, message: '付款人姓名不能为空', trigger: 'blur' }
          ],
          cardId: [
              { required: true, message: '卡号不能为空', trigger: 'blur' }
          ],
          rgAmount: [
              { required: true, message: '存款金额不能为空', trigger: 'blur' }
          ],
          rgDate: [
              { required: true, message: '存款日期不能为空', trigger: 'blur' }
          ],
          rgNote: [
              { required: true, message: '备注不能为空', trigger: 'blur' }
          ]
        },
        amountArr:['100','200','1000','3000','5000'],
        banksArr:[
          {name:'gsBank',url:gsBank},
          {name:'msBank',url:msBank},
          {name:'zgBank',url:zgBank},
          {name:'jsBank',url:jsBank},
          {name:'gfBank',url:gfBank},
          {name:'hxBank',url:hxBank},
          {name:'jtBank',url:jtBank},
          {name:'nyBank',url:nyBank},
          {name:'zsBank',url:zsBank},
          {name:'yzBank',url:yzBank},
          {name:'pdBank',url:pdBank},
          {name:'gdBank',url:gdBank},
          {name:'xyBank',url:xyBank},
          {name:'paBank',url:paBank},
          {name:'zxBank',url:zxBank},
        ],
        selectedBank:'gsBank',
        isShowJsAddCard:false,
        isShowRgAddCard:false,
        cardArr:[],
        cardIndex:1,
        selectedCard:'',
        defaultBank:{
          name:'**华',
          cardId:'000000*********0000',
          url:zfCard
        }
      }
    },
    methods:{
      showJsAddCard(){
        this.isShowJsAddCard = !this.isShowJsAddCard
      },
      showRgAddCard(){
        this.isShowRgAddCard = !this.isShowRgAddCard
      },
      copyContent(content){ //传入要复制的内容
        var aux = document.createElement("input");

        // 设置元素内容
        aux.setAttribute("value", content);

        // 将元素插入页面进行调用
        document.body.appendChild(aux);

        // 复制内容
        aux.select();

        // 将内容复制到剪贴板
        document.execCommand("copy");

        // 删除创建元素
        document.body.removeChild(aux);

        alert('复制成功');
      },
      selectPayWay(item){
        this.selectedPayWay = item.name
        this.selectedCard = ''
        this.formValidate.cardId = ''
        this.formValidate.name = ''
      },
      selectAmound(item){
        this.formValidate.depositAmount = item
      },
      selectBank(item){
        this.selectedBank = item.name
      },
      selectCard(item){
        if(this.selectedCard === item.name){
          this.selectedCard = ''
          return
        }
        this.selectedCard = item.name

        this.formValidate.cardId = item.cardNum
        this.formValidate.name = item.cardName
      },
      addCard(){
        if(this.cardArr.length < 4){ return }
        this.cardIndex ++
        if(this.cardIndex > this.cardArr.length - 2){
          this.cardIndex = 1
        }
      },
      lessCard(){
        if(this.cardArr.length < 4){ return }
        this.cardIndex --
        if(this.cardIndex < 1){
          this.cardIndex = this.cardArr.length - 2
        }
      },
      handleSubmit () {
          // this.bankRecognit('6217001210024455220','**华')
          this.$refs.form.validate((valid) => {
              if (valid) {
                  this.$Message.success('提交成功!');
              } else {
                  this.$Message.error('表单验证失败!');
              }
          })
      },
      findCard(val){
        let cardBank = {
          '浦东发展银行':{//
            name:'pdCard',
            url:pdCard
          },
          '中信银行':{
            name:'zxCard',
            url:zxCard
          },
          '中国邮政储蓄银行':{
            name:'yzCard',
            url:yzCard
          },
          '中国工商银行':{
            name:'gsCard',
            url:gsCard
          },
          '中国民生银行':{
            name:'msCard',
            url:msCard
          },
          '中国银行':{
            name:'zgCard',
            url:zgCard
          },
          '中国建设银行':{
            name:'jsCard',
            url:jsCard
          },
          '广发银行':{
            name:'gfCard',
            url:gfCard
          },
          '中国光大银行':{
            name:'gdCard',
            url:gdCard
          },
          '华夏银行':{
            name:'hxCard',
            url:hxCard
          },
          '兴业银行':{
            name:'xyCard',
            url:xyCard
          },
          '中国农业银行':{
            name:'nyCard',
            url:nyCard
          },
          '招商银行':{
            name:'zsCard',
            url:zsCard
          },
          '深发/平安银行':{
            name:'paCard',
            url:paCard
          },
          '支付宝':{
            name:'zfCard',
            url:zfCard
          }
        }
        return cardBank[val] || { name:'zfCard', url:zfCard }
      },
      bankRecognit(cardId,cardName){
        let bankObj = bankRecognition(cardId)
        let cardObj = this.findCard(bankObj.bankName)
        let pushObj = {
          name:cardObj.name,
          url:cardObj.url,
          cardBy:bankObj.bankName,
          cardNum:cardId,
          cardName:cardName
        }
        let isSame = this.cardArr.some(val=>{
            return val.cardNum === cardId
        })
        if(isSame){ return }
        this.cardArr.push(pushObj)
      }
    },
    created(){

    }
	}
</script>

<style scoped lang="less">
  .deposit{
    width: 1122px;
    margin: 45px auto 0;
  }
  .payWays{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 0;
  }
  .payWays > li{
    display: inline-block;
    margin-right: 28px;
    cursor: pointer;
    height: 52px;
    overflow: hidden;
    box-shadow: 0 3px 5px #ddd;
  }
  .payWays > li:nth-child(7){
    margin-right: 0;
  }
  .payWays > li > img{
    width: 136px;
    vertical-align: top;
  }
  .isSelected{
    position: relative;
    box-shadow: 0 3px 12px #ffc365!important;
  }
  .isSelected .selected{
    width: 20px;
    position: absolute;
    right: 0;
    bottom: 0px;
  }

  .payWayBox{
    width: 100%;
    margin-top: 58px;
    min-height: 380px;
  }
  .limitAmount{
    color: #afafaf;
    display: inline-block;
    margin-right: 30px;
  }
  .minAmount{
    color: #ffc365;
  }
  .specificAmount{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .specificAmount > li{
    width: 108px;
    text-align: center;
    border: 1px solid #ffc365;
    border-radius: 3px;
    display: inline-block;
    margin-right: 13px;
    cursor: pointer;
  }
  .selectedAmount{
    color: white;
    background: linear-gradient(#ffd48c,#fea760);
  }

  .qrcodeBox{
    width: 100%;
    margin-top: 40px;
    height: 244px;
    text-align: center;
  }
  .qrcodeBox > img{
    width: 161px;
  }
  .qrcodeBox > p > img{
    width:20px;
  }
  .qrcodeBox > p{
    width: 100%;
    height: 16px;
    line-height: 16px;
    margin-top: 10px;
  }
  .qrcodeBox > p > *{
    vertical-align: middle;
    display: inline-block;
  }

  .wyPayBox{
    width: 100%;
  }
  .banks{
    width: 100%;
    border-top: 1px #eee solid;
    border-left: 1px #eee solid;
    margin-top: 36px;
    margin-bottom: 78px;
  }
  .banks > li{
    cursor: pointer;
    border-bottom: 1px #eee solid;
    border-right: 1px #eee solid;
    display: inline-block;
    width: 223px;
    height: 223px;
    text-align: center;
    line-height: 223px;
  }
  .banks > li > img{
    width: 122px;
    height: 122px;
    vertical-align: middle;
  }
  .isSelectedBank{
    position: relative;
    box-shadow: 0 0px 50px #ddd!important;
  }
  .isSelectedBank .selected{
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    bottom: 0px;
  }

  .jsPayBox{
    width: 100%;
    margin-top: 25px;
  }

  .bankCard{
    font-size: 16px;
  }
  .arrow{
    width: 45px;
    height: 107px;
    display: inline-block;
    margin: 0;
    cursor:pointer;
    line-height: 107px;
  }
  .leftArrow{
    width: 20px;
    vertical-align: middle;
  }
  .rightArrow{
    width: 20px;
    vertical-align: middle;
    margin-left: 25px;
  }

  .carousel{
    display: inline-block;
    width: 900px;
    height: 107px;
    margin: 0;
    overflow: hidden;
    vertical-align: top;
  }
  .carousel > li{
    display: inline-block;
    margin-right: 7px;
    margin-left: 7px;
    cursor: pointer;
  }

  .isSelectedCard{
    position: relative;
    box-shadow: 0 0px 50px #ddd!important;
  }
  .isSelectedCard .selected{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 5px;
    z-index: 9;
  }
 .info{
   position: absolute;
   display: inline-block;
   z-index: 5;
   width: 284px;
   height: 107px;
   padding-left: 70px;
   padding-top: 17px;
   box-sizing: border-box;
 }
 .info span{
   display: block;
   color: white;
 }

  .addCard{
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 25px;
    color: #ffc365;
  }
  .addCard > img{
    width: 18px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .rgPayBox{
    width: 100%;
    margin-top: 44px;
  }
  .receiptBankCard{
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
  }
  .receiptBankCardImg{
    width: 284px;
    height: 107px;
  }
  .receiptBankCardInfo{
    position: absolute;
    z-index: 5;
    width: 284px;
    height: 107px;
    padding-left: 63px;
    padding-top: 17px;
    box-sizing: border-box;
  }
 .receiptBankCardInfo > span{
   display: block;
   color: white;
   font-size: 14px;
   margin-bottom: 5px;
 }
 .receiptBankCardInfo > span > b{
   font-weight: 100;
 }
 .rgSeparate{
   margin-top: 17px;
   margin-bottom: 12px;
 }
  .rgNotify{
    color: #ffc365;
    border-bottom: 1px solid #ddd;
    padding-bottom: 24px;
  }

 .deposit /deep/.ivu-input{
   width:340px;
   background:#f3f3f3;
 }
 .deposit /deep/.ivu-input-wrapper{
   width:390px;
 }
 .deposit /deep/.ivu-btn-primary{
   width:82px;
   height: 28px;
   background: linear-gradient(#ffd48c,#fea760);
   margin-left:480px;
   margin-bottom:64px;
 }
 .deposit .rgPayBox .receiptBankCardInfo > span /deep/.ivu-btn{
   color:white;
   padding: 0 2px;
    background: transparent;
    margin-right:3px;
    float:right;
    font-size:12px;
 }
 .deposit .rgPayBox /deep/.ivu-form-item-label{
   display: block;
   width:100%;
   text-align:left;
 }
 .deposit .rgPayBox /deep/.ivu-date-picker .ivu-input-icon-normal + .ivu-input{
   padding-right:7px;
 }
 .deposit .rgPayBox /deep/.ivu-input-icon{
   font-size:30px;
   line-height:40px;
 }
</style>

