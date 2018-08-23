<template>
  <div>
    <Row class="drawings">
      <Col span="10">
        <Form class="drawings-form" :model="formItem" :label-width="107">
          <FormItem label="取款金额" style="margin-bottom: 30px;">
              <Input class="drawings-input-style" v-model="formItem.input" placeholder="输入取款金额"></Input>
          </FormItem>
          <FormItem label="选择银行" style="margin-bottom: 12px;">
            <RadioGroup v-model="backCardSelected" vertical>
              <Radio label="jianshe">
                <span class="drawings-select-option drawings-select-option-logo"><img :src="require('@/assets/images/personal/bank_logo_small_js.png')"/></span>
                <span class="drawings-select-option drawings-select-option-name">建设银行</span>
                <span class="drawings-select-option drawings-select-option-code">尾号1234</span>
                <span class="drawings-select-option drawings-select-option-showall" v-if="!showAllBankCard" @click="() => showAllBankCard=true">全部银行卡</span>
              </Radio>
              <template v-if="showAllBankCard">
                <Radio label="guangda">
                  <span class="drawings-select-option drawings-select-option-logo"><img :src="require('@/assets/images/personal/bank_logo_small_gd.png')"/></span>
                  <span class="drawings-select-option drawings-select-option-name">光大银行</span>
                  <span class="drawings-select-option drawings-select-option-code">尾号1234</span>
                </Radio>
                <Radio label="guangfa">
                  <span class="drawings-select-option drawings-select-option-logo"><img :src="require('@/assets/images/personal/bank_logo_small_gf.png')"/></span>
                  <span class="drawings-select-option drawings-select-option-name">广发银行</span>
                  <span class="drawings-select-option drawings-select-option-code">尾号1234</span>
                </Radio>
                <Radio label="pingan">
                  <span class="drawings-select-option drawings-select-option-logo"><img :src="require('@/assets/images/personal/bank_logo_small_pa.png')"/></span>
                  <span class="drawings-select-option drawings-select-option-name">平安银行</span>
                  <span class="drawings-select-option drawings-select-option-code">尾号1234</span>
                </Radio>
              </template>
            </RadioGroup>
          </FormItem>
          <div class="drawings-button_add-bank-card" @click="() => addCardModalShow=true">
            <div class="drawings-button_add-bank-card-icon"><img :src="require('@/assets/images/personal/add.png')" /></div>
            <div class="">添加银行卡</div>
          </div>
          <FormItem>
            <div class="drawings-button_drawings-submit">取款</div>
          </FormItem>
        </Form>
      </Col>
      <Col span="14">
        <div class="drawings-detail">
          <div class="drawings-detail-title">提款详情</div>
          <div class="drawings-detail-table">
            <Row>
              <Col span="8" class="ivu-col_title">今日</Col>
              <Col span="8" class="ivu-col_title">次数</Col>
              <Col span="8" class="ivu-col_title">额度</Col>
            </Row>
            <Row>
              <Col span="8">处理中</Col>
              <Col span="8" class="ivu-col_value">0</Col>
              <Col span="8" class="ivu-col_value">0</Col>
            </Row>
            <Row>
              <Col span="8">成功</Col>
              <Col span="8" class="ivu-col_value">0</Col>
              <Col span="8" class="ivu-col_value">0</Col>
            </Row>
            <Row>
              <Col span="8">上限</Col>
              <Col span="8" class="ivu-col_value">5</Col>
              <Col span="8" class="ivu-col_value">250,000,000</Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
    <div class="drawings-reminder">
      <p>温馨提示：</p>
      <p>请您在相关注单结算完成后稍微耐心等待10-15分钟后系统会自动校正有效流水。详细有效流水规则请查看各游戏平台【天天返水】详情，感谢您的支持与信任！</p>
      <p>未参加任何优惠活动存款需投注1倍有效流水(全额投注额)即可提款，如参加活动请参考活动红利流水详细规则。【如提款未成功，请留意站内信历史消息详细说明】感谢您的支持与信任.</p>
    </div>
    <!-- 添加银行卡的弹框 -->
    <div class="modal-wrap" v-if="addCardModalShow">
      <div class="model_verify model_add-bank-card">
        <Form :model="addBankCardForm" label-position="top">
          <FormItem required label="银行名称">
            <Select v-model="verifyForm.bankName" style="width: 318px;" placeholder="请选择银行">
              <Option value="jt">交通银行</Option>
            </Select>
          </FormItem>
          <FormItem required label="开户姓名">
            <Input v-model="verifyForm.name" style="width: 300px;" placeholder="输入开户姓名"></Input>
          </FormItem>
          <FormItem required label="开户账号">
            <Input v-model="verifyForm.account" style="width: 300px;" placeholder="输入开户账号"></Input>
          </FormItem>
          <FormItem required label="开户行">
            <Input v-model="verifyForm.openingBank" style="width: 300px;" placeholder="输入开户行"></Input>
            <div style="color: #ffa034;">如工行需填写此项，示例：河南商丘工商银行五一路支行</div>
          </FormItem>
          <FormItem class="button_settingpass">
            <div class="button_confirm" @click="() => addCardModalShow=false">确认</div>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "withdraw",
    data() {
      return {
        formItem: {
          input: '',
          select: ''
        },
        // 添加银行卡表单数据
        verifyForm: {
          bankName: '',
          name: '',
          account: '',
          openingBank: ''
        },
        // 控制添加银行卡弹框的显隐状态
        addCardModalShow: false,
        // 选择的银行卡
        backCardSelected: 'jianshe',
        // 是否展示所有银行卡
        showAllBankCard: false
      };
    }
	}
</script>

<style lang="less" scoped>
  .drawings {
    height: 393px;
    padding-top: 102px;

    /deep/.drawings-form {
      padding-top: 26px;
      padding-left: 48px;

      div.ivu-select-selection {
        height: 42px;

        span.ivu-select-placeholder, span.ivu-select-selected-value {
          height: 42px;
          line-height: 42px;
        }
      }

      li.ivu-select-item {
        height: 40px;
        line-height: 40px;
      }

      label.ivu-form-item-label {
        line-height: 1.9;
        font-size: 14px;
        position: relative;
        text-align: center;
        font-weight: bold;
      }

      label.ivu-form-item-label:after {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #fc984f;
        top: 14px;
        left: 0;
        height: 18px;
      }

      .drawings-input-style {
        width: 291px;
      }

      .ivu-radio-group-vertical .ivu-radio-wrapper {
        height: 40px;
        line-height: 40px;
      }

      .drawings-select-option {
        display: inline-block;
        font-size: 16px;
      }

      .drawings-select-option-logo {
        position: relative;
        margin-left: 5px;

        img {
          width: 22px;
          height: 22px;
          position: relative;
          top: 5px;
        }
      }

      .drawings-select-option-name {
        color: #333;
        margin-right: 10px;
        margin-left: 3px;
      }

      .drawings-select-option-code {
        color: #999;
      }

      .drawings-select-option-showall {
        margin-left: 18px;
        cursor: pointer;
        color: #ffb154;
      }

      .drawings-button_add-bank-card {
        padding-left: 107px;
        color: #ffb154;
        font-size: 16px;
        height: 28px;
        line-height: 28px;
        margin-bottom: 24px;
        cursor: pointer;

        div {
          float: left;
        }
        div.drawings-button_add-bank-card-icon {
          height: 24px;
          padding-top: 4px;
          margin-right: 16px;
        }
      }

      .drawings-button_drawings-submit {
        width: 307px;
        text-align: center;
        border-radius: 5px;
        height: 46px;
        line-height: 46px;
        font-size: 18px;
        cursor: pointer;
        color: #fff;
        background: linear-gradient(to bottom, #fed06d, #fc984f);
      }
    }

    /deep/.drawings-detail {
      width: 562px;
      font-size: 14px;
      margin-left: 55px;

      .drawings-detail-title {
        font-weight: bold;
        text-align: center;
        height: 45px;
        line-height: 45px;
      }
      .drawings-detail-table {
        border-right: 1px solid #dfdfe3;
        border-bottom: 1px solid #dfdfe3;
        box-sizing: border-box;

        .ivu-row {
          height: 55px;
          line-height: 55px;

          .ivu-col_title {
            font-weight: bold;
          }

          .ivu-col_value {
            color: #fd9e5d;
          }

          .ivu-col {
            border-top: 1px solid #dfdfe3;
            border-left: 1px solid #dfdfe3;
            box-sizing: border-box;
            text-align: center;
          }
        }
      }
    }
  }

  .drawings-reminder {
    background: #f5f5f5;
    margin: 0px 60px 0 52px;
    padding: 20px 35px;

    p {
      font-size: 14px;
      color: #666;
      line-height: 30px;

      /* title */
      &:first-child {
        font-size: 16px;

        &:before{
          content: "*";
          display: inline-block;
          font-size: 12px;
          color: #fc9f5f;
        }
      }

      &:not(:first-child) {
        text-indent: 24px;
      }
    }
  }

  .modal-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(34, 34, 34, 0.4);
    z-index: 10000;

    /deep/.model_verify {
      width: 400px;
      background-color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 40px 30px 0px;

      .ivu-form-item {
        margin-bottom: 3px;
      }

      .ivu-form .ivu-form-item-label {
        font-size: 14px;
      }
    }

    /deep/.model_add-bank-card {

      .ivu-form-item {
        margin-bottom: 17px;
      }

      div.ivu-select-selection {
        height: 42px;

        span.ivu-select-placeholder, span.ivu-select-selected-value {
          height: 42px;
          line-height: 42px;
        }
      }

      li.ivu-select-item {
        height: 40px;
        line-height: 40px;
      }

      .button_confirm {
        height: 35px;
        line-height: 35px;
        width: 109px;
        text-align: center;
        font-size: 14px;
        border-radius: 5px;
        color: #ffffff;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 17px;
        cursor: pointer;
        background: linear-gradient(to bottom, #fecd73, #fc9956);
      }
    }
  }
</style>
