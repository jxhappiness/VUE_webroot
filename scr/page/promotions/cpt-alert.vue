<template>
  <transition name="fade-s">
    <div v-if="isShow" >
      <div @click="hide" class="modal-back"></div>
      <div class="ActiveDetial ">
        <div class="back-tit">
          <span class="tit-f size22">活动详情</span>
          <span class="tit-r" @click="hide"><img src="../../assets/images/promotions/clone.png" height="28"
                                                 width="28"/></span>
        </div>

        <img src="../../assets/images/promotions/detail-back.png" class="detailBac"/>
        <div class="ActiveCont size22">
          <p>活动时间：2018年3月17日00:00:00至2018中国足球超级联赛赛季结束。</p>
          <p>活动对象：全体ManBetX万博会员。 </p>
          <p>活动内容：活动期间内，单笔最低投注88元中超比赛出现以下两种特定情况其中之一即
            可获得相应礼品；串关注单不进行计算，注单赔率最低要求为：≥港赔0.70，≥欧赔0.70，
            或其他对应赔率。
          </p>
          <p>1、注单后两位数与投注比赛的最后进球时间一致（<span class="orange">例如您投注注单号为：37253955318408，本场最后进球时间为08分钟即可中将</span>）。</p>
          <p>2、注单后两位数与本轮中超总进球数一致（<span class="orange">例如您投注的注单号码为：27253955318431，本轮总进球数为31球都可中奖</span>）</p>
          <p>所有比赛数据以中国足球会超级联赛官网为准：<a href="http://csi-china.com/index.html">http://csi-china.com/index.html</a></p>
          <table>
            <tr class="tit">
              <td>奖励等级</td>
              <td>投注金额</td>
              <td class="lastCol">奖品</td>
            </tr>
            <tr class="orange2">
              <td>一等奖</td>
              <td>288元</td>
              <td class="lastCol">水晶宫秋衣+西甲水杯+108元</td>
            </tr>
            <tr class="orange2">
              <td>二等奖</td>
              <td>128元</td>
              <td class="lastCol">水晶宫秋衣+西甲水杯</td>
            </tr>
            <tr class="lastrow orange2">
              <td>三等奖</td>
              <td>88元</td>
              <td class="lastCol">水晶宫秋衣+58元</td>
            </tr>
          </table>
        </div>
        <div class="back-sty"> 立即参与</div>
      </div>
    </div>
  </transition>
</template>
<script>

  export default {
    name: "card",
    data() {
      return {
        val: ""
      }
    },
    components: {},
    props: ['isShow'],
    methods: {
      hide() {
        this.$emit("update:isShow", false);
      }
    },
    computed: {},
    watch: {
      isShow(bool) {
        if (bool) {
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
          // document.body.srcollTop = document.documentElement.scrollTop = 0;
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .fade-s-enter-active, .fade-s-leave-active {
    transition: opacity .5s;
  }
  .fade-s-enter, .fade-s-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<style lang="less" scoped>
  .size22 {
    font-size: 22px;
  }

  .orange {
    color: #f2aa65;
  }

  .orange2 {
    color: #b9926f;
    background: #fefaf7;
  }

  .modal-back {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 99999;
    padding: 316px 0;
  }

  .ActiveDetial {
    background: #fff;
    width: 1200px;
    /*height:1358px;*/
    text-align: center;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -600px;
    z-index: 999999;
  }

  .back-tit {
    width: 100%;
    height: 66px;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(rgb(253, 253, 253), rgb(223, 223, 223));

    .tit-f {
      float: left;
      margin-left: 50px;
      line-height: 66px;
    }
    .tit-r {
      float: right;
      margin: 20px 28px 0 0;
    }
  }

  .detailBac {
    display: block;
  }

  .ActiveCont {
    text-align: left;
    padding: 30px 50px 65px 50px;
    p {
      padding-bottom: 30px;
    }
  }

  table {
    width: 1102px;
    border-collapse: collapse;
    border: 0px solid #999;
    text-align: center;
  }

  .tit {
    background: linear-gradient(#f8cf7b, #f2a461);
    color: #fff !important;
  }

  table td {
    border-top: 0;
    border-right: 1px solid #f2a461;
    border-bottom: 1px solid #f2a461;
    border-left: 0;
    line-height: 54px;

  }

  table .tit td {
    border: 1px solid #fff;
  }

  table tr.lastrow td {
    width: 500px;
    border-bottom: 0;
  }

  table tr td.lastCol {
    border-right: 0;
  }

  .back-sty {
    width: 208px;
    height: 64px;
    text-align: center;
    line-height: 64px;
    background: linear-gradient(#f8cf7b, #f2a461);
    border-radius: 10px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
    margin-bottom: 66px;
    cursor: pointer;
  }
</style>
