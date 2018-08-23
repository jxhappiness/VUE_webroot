<template>
  <ul class="goods_setting">
    <li v-for="(i,ix) in 3" @click="on = ix" :class="['setting', {on: on===ix}]">
    </li>
    <div v-if="on === 0" class="pop">
      <div class="head">
        <p>偏好设置</p>
        <p>设定后，将以您的喜好设定为您服务</p>
      </div>
      <v-cell-select label="存款消息" :list="cityList" v-model="model1"></v-cell-select>
      <v-cell-select label="提款消息" :list="cityList" v-model="model2"></v-cell-select>
      <v-cell-select label="优惠消息" :list="cityList" v-model="model3"></v-cell-select>
      <v-cell-select label="网站公告" :list="cityList" v-model="model4"></v-cell-select>
      <v-cell-select label="修改密码" :list="cityList" v-model="model5"></v-cell-select>
      <v-cell-select label="活动通知" :list="cityList" v-model="model6"></v-cell-select>
      <v-cell-select label="网站问候" :list="cityList" v-model="model7"></v-cell-select>
      <v-cell-select label="邮件接收">
        <i-switch v-model="choose1" size="large"></i-switch>
      </v-cell-select>
      <v-cell-select label="短信接收">
        <i-switch v-model="choose2" size="large"></i-switch>
      </v-cell-select>
      <v-cell-select label="电话接收">
        <i-switch v-model="choose3" size="large"></i-switch>
      </v-cell-select>
      <v-cell-select label="站内信接受">
        <i-switch v-model="choose4" size="large"></i-switch>
      </v-cell-select>
      <v-cell-select label="修改基本资料" :list="cityList" v-model="model8"></v-cell-select>
      <v-cell-select label="修改银行资料" :list="cityList" v-model="model9"></v-cell-select>
      <div class="opt item">
        <span @click="on = -1" class="btn active">更新</span>
        <span @click="on = -1" class="btn default">取消</span>
      </div>
    </div>
    <div v-if="on === 1" class="pop pop2">
      <div class="head">
        <p>偏好设置</p>
        <p>设定后，将以您的喜好设定为您服务</p>
      </div>
      <v-cell-select label="按钮1">
        <div class="btn">转账</div>
      </v-cell-select>
      <v-cell-select label="按钮2">
        <div class="btn">万博体育</div>
      </v-cell-select>
      <v-cell-select label="按钮3">
        <div class="btn">空</div>
      </v-cell-select>
      <v-check-box label="个人中心" :list="checkbox1"></v-check-box>
      <v-check-box label="个人中心" :list="checkbox2"></v-check-box>
      <v-check-box label="彩票" :list="checkbox3"></v-check-box>
      <v-check-box label="电子游戏" :list="checkbox4"></v-check-box>
      <v-check-box label="捕鱼" :list="checkbox5"></v-check-box>
      <div class="opt item">
        <span @click="on = -1" class="btn active">更新</span>
        <span @click="on = -1" class="btn default">取消</span>
      </div>
    </div>
    <div v-if="on === 2" class="customer">
      <div>智能客服</div>
      <div>24小时在线客服</div>
      <div>电话客服</div>
    </div>
  </ul>
</template>
<script>
  import VCellSelect from "./VCell"
  import VCheckBox from "./VCheckBox"

  export default {
    name: 'v_setting',
    components: {
      VCellSelect, VCheckBox
    },
    data() {
      return {
        choose1: false,
        choose2: false,
        choose3: false,
        choose4: false,
        on: -1,
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: '',
        model2: '',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: '',
        model8: '',
        model9: '',

        checkbox1: [
          {
            value: 0,
            label:"提款"
          },
          {
            value: 1,
            label:"转账"
          },
          {
            value: 2,
            label:"消息中心"
          },
          {
            value: 3,
            label:"投注记录"
          },
          {
            value: 4,
            label:"我的优惠"
          },
          {
            value: 5,
            label:"存款"
          }
        ],
        checkbox2: [
          {
            value: 0,
            label:"AG"
          },
          {
            value: 1,
            label:"申请"
          },
          {
            value: 2,
            label:"欧博"
          },
          {
            value: 3,
            label:"MG"
          },
          {
            value: 4,
            label:"沙龙"
          },
          {
            value: 5,
            label:"GD"
          },
          {
            value: 6,
            label:"万博娱乐"
          },
          {
            value: 7,
            label:"BBIN"
          }
        ],
        checkbox3: [
          {
            value: 0,
            label:"双赢"
          },
          {
            value: 1,
            label:"BBN"
          },
          {
            value: 2,
            label:"Kg"
          }
        ],
        checkbox4: [
          {
            value: 0,
            label:"AG"
          },
          {
            value: 1,
            label:"PP"
          },
          {
            value: 2,
            label:"PT"
          },
          {
            value: 2,
            label:"MG"
          }
        ],
        checkbox5: [
          {
            value: 0,
            label:"捕鱼王(AG)"
          },
          {
            value: 1,
            label:"捕鱼大师"
          },
          {
            value: 2,
            label:"捕鱼王(BB)"
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .goods_setting {
    position: absolute;
    bottom: 50px;
    width: 40px;
    height: 140px;
    right: -60px;
    > li {
      height: 40px;
      background-color: #666;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 5px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .pop, .customer {
      background-color: #fff;
      position: absolute;
      right: 60px;
      bottom: 0;
      cursor: auto;
      box-shadow: 0 0 20px #ccc;
      border-radius: 5px;
      z-index: 1000;
    }
    .pop {
      width: 320px;
      padding: 38px 28px;
      box-sizing: border-box;
      font-size: 13px;
      .head {
        padding-bottom: 20px;
        p:first-child {
          font-size: 16px;
          padding-bottom: 6px;
        }
      }
      .item {
        display: flex;
        align-items: center;
        height: 40px;
        justify-content: space-between;
        > div {
          width: 100px !important;
        }
        > div.btn {
          width: 74px !important;
          height: 24px;
          border: 1px solid #ddd;
          text-align: center;
          line-height: 24px;
          border-radius: 5px;
        }
      }
      .opt {
        padding-top: 20px;
        span {
          width: 80px;
          height: 34px;
          text-align: center;
          line-height: 34px;
          border-radius: 5px;
          cursor: pointer;
        }
        span.active {
          background: linear-gradient(to bottom, #fed06d, #fc984f);
          color: #fff;
        }
        span.default {
          background: linear-gradient(to bottom, #f7f7f8, #e1e0e4);
          border: 1px solid #ddd;
        }
      }
    }
    .customer {
      > div {
        padding-left: 25px;
        line-height: 50px;
        cursor: pointer;
      }
      > div:hover {
        background-color: #f2f2f2;
      }
      width: 196px;
    }
    .pop:after, .customer:after {
      position: absolute;
      display: inline-block;
      right: -6px;
      bottom: 114px;
      width: 0;
      height: 0;
      content: '';
      border-style: solid;
      border-width: 6px;
      border-color: #fff #fff transparent transparent;
      transform: rotate(45deg);
      box-shadow: 3px -3px 3px rgba(113, 113, 113, 0.15);
    }
    .pop.pop2:after {
      bottom: 66px;
    }
    div.customer:after {
      bottom: 16px;
    }
    > li:nth-of-type(1) {
      background-image: url("../../../assets/images/personal/setting/setting.png");
    }
    > li:nth-of-type(1).on {
      background-image: url("../../../assets/images/personal/setting/setting-a.png");
    }
    > li:nth-of-type(2) {
      background-image: url("../../../assets/images/personal/setting/quick.png");
    }
    > li:nth-of-type(2).on {
      background-image: url("../../../assets/images/personal/setting/quick-a.png");
    }
    > li:nth-of-type(3) {
      background-image: url("../../../assets/images/personal/setting/customer.png");
      margin-bottom: 0;
    }
    > li:nth-of-type(3).on {
      background-image: url("../../../assets/images/personal/setting/customer-a.png");
    }
  }
</style>
