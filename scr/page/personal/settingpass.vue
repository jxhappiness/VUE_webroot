<template>
  <div class="settingpass">
    <!-- 更改密码弹框 -->
    <div class="passform" v-if="flagName=='pass1'||flagName=='pass2'">
      <Form :model="formTop" label-position="top">
        <FormItem required :label="flagName=='pass1'?'修改账户密码':'旧密码'">
          <Input v-model="formTop.password" style="width: 300px;"></Input>
        </FormItem>
        <FormItem required label="新密码">
          <Input v-model="formTop.newPassword" style="width: 300px;"></Input>
          <p>密码长度为6-16字符，以及必须含有字母和数字的组合</p>
        </FormItem>
        <FormItem required label="确认新密码">
          <Input v-model="formTop.confirmPassword" style="width: 300px;"></Input>
        </FormItem>
        <FormItem class="button_settingpass">
          <div class="button_settingpass-submit" @click="formbtn()">提交</div>
          <div class="button_settingpass-reset">重置</div>
        </FormItem>
      </Form>
    </div>
    <!-- 取款银行卡查看弹窗 -->
    <div class="model_look-bank-card"  v-if="flagName=='cardList'" >
      <Table :height="cardList1.length>10?'500':''" :columns="cardForm" :data="cardList1" ></Table>
      <div class="button_confirm" @click="formbtn()">确认</div>
    </div>
    <!-- 验证邮箱/手机号 -->
    <div class="model_verify" v-if="flagName=='email1'||flagName=='email2'">
      <Form :model="verifyForm" label-position="top">
        <FormItem required :label="flagName=='email1'?'邮箱':'手机号'">
          <Input v-model="verifyForm.phone" style="width: 300px;"></Input>
          <div class="verify_message verify_send-code">发送验证码</div>
          <div class="verify_message verify_send-status">已发</div>
        </FormItem>
        <FormItem required label="验证码">
          <Input v-model="verifyForm.code" style="width: 300px;"></Input>
          <div class="verify_message verify_code-error">验证码错误</div>
        </FormItem>
        <FormItem class="button_settingpass">
          <div class="button_confirm" @click="formbtn()">确认</div>
        </FormItem>
      </Form>
    </div>
    <!-- 添加银行卡 -->
    <div class="model_verify model_add-bank-card"  v-if="flagName=='addCard'">
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
          <div class="button_confirm" @click="formbtn()">确认</div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formTop: {
          password: '',
          newPassword: '',
          confirmPassword: ''
        },
        verifyForm: {
          phone: '',
          code: ''
        },
        addBankCardForm: {
          bankName: '',
          name: '',
          account: '',
          openingBank: ''
        },
        cardForm: [
          {
            title: '银行名称',
            key: 'bankname',
            align: 'center',
            width: 140
          },
          {
            title: '开户姓名',
            key: 'name',
            align: 'center',
            width: 110
          },
          {
            title: '银行卡号',
            key: 'cardnum',
            align: 'center',
            width: 225
          },
          {
            title: '银行分行',
            key: 'bankContent',
            align: 'center',
            width: 125
          }
        ],
        cardList1: [
          {
            bankname: '中国农业银行',
            name: '苗迎1',
            cardnum: '********12345678901111',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎2',
            cardnum: '************1234',
            bankContent: '北京分行'
          },{
            bankname:'中国农业银行',
            name:'苗迎3',
            cardnum: '************1234',
            bankContent: '北京分行'
          },{
            bankname:'中国农业银行',
            name:'苗迎4',
            cardnum: '************1234',
            bankContent: '北京分行'
          },{
            bankname:'中国农业银行',
            name:'苗迎5',
            cardnum: '************1234',
            bankContent: '北京分行'
          },{
            bankname:'中国农业银行',
            name:'苗迎6',
            cardnum: '************1234',
            bankContent: '北京分行'
          },{
            bankname:'中国农业银行',
            name:'苗迎7',
            cardnum: '************1234',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎8',
            cardnum: '************1234',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎9',
            cardnum: '************1234',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎10',
            cardnum: '************1234',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎11',
            cardnum: '************1234',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎12',
            cardnum: '************1234',
            bankContent: '北京分行'
          },
          {
            bankname:'中国农业银行',
            name:'苗迎13',
            cardnum: '************1234',
            bankContent: '北京分行'
          }
        ]
      }
    },
    props:['flagName','cardList'],
    mounted(){
      if (this.flagName=='cardList') {//查看取款银行卡

      }
    },
    methods:{
      formbtn(){
        console.log(1);
        this.$emit('catchMask');
      }
    }

  }

</script>
<style lang="less" scoped>
  .settingpass {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(34, 34, 34, 0.4);
    z-index: 10000;

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

    /deep/.passform {
      width: 400px;
      height: 400px;
      background-color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top: -200px;
      z-index: 10000;
      border-radius: 10px;
      padding: 25px 35px;
      box-sizing: border-box;

      .ivu-form-item {
        margin-bottom: 17px;
      }

      .ivu-form .ivu-form-item-label {
        font-size: 14px;
      }

      .button_settingpass {
        padding: 22px 10px 0 13px;

        .button_settingpass-submit, .button_settingpass-reset {
          height: 35px;
          line-height: 35px;
          width: 109px;
          text-align: center;
          font-size: 14px;
          border-radius: 5px;
          cursor: pointer;
        }

        .button_settingpass-submit {
          float: left;
          color: #ffffff;
          background: linear-gradient(to bottom, #fecd73, #fc9956);
        }

        .button_settingpass-reset {
          float: right;
          color: #2f2f32;
          border: 1px solid #dad8da;
          background: linear-gradient(to bottom, #f7f7f8, #dcdbdc);
        }
      }
    }

    /deep/.model_look-bank-card {
      width: 600px;
      background-color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
      border-radius: 10px;
      box-sizing: border-box;
        .ivu-table {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          th {
            height: 50px;
            color: #ffffff;
            font-size: 16px;
            background: linear-gradient(to bottom, #f7ce77, #fc9a56);
          }
          td {
            height: 45px;
            font-size: 14px;
            border-bottom: 0px;
          }
        }
        .ivu-table th:first-child {
          border-top-left-radius: 10px;
        }
        .ivu-table th:last-child {
          border-top-right-radius: 10px;
        }
        .ivu-table:before,/deep/.ivu-table:after{
          width: 0px;
          height: 0px;
        }
        .ivu-table-wrapper{
          border:0px;
        }
        .ivu-table-cell{
          padding-left: 8px;
          padding-right: 8px;
        }
        div.ivu-table-header{
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
    }

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

      .verify_message {
        padding-right: 25px;
        text-align: right;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
      }

      .verify_send-code {
        color: #ffa034;
        cursor: pointer;
      }

      .verify_send-status {
        color: #cccccc;
      }

      .verify_code-error {
        color: #fa2627;
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
    }
  }

</style>
