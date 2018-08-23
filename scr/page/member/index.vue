<template>
  <div class="app">
    <v-header></v-header>
    <div class="container memberCon">
        <div class="memberTit">
            <p class="f_50">看得见丰厚回报</p>
            <p class="f_20">极具竞争力的代理政策，简单注册，立即享受</p>
        </div>
        <div class="memerForm">
            <div class="memerHeader">
                <div class="memberTitle">
                    <div class="titleTop">合营申请表</div>
                    <div class="titleBottom">请详细填写以下表格，带<span class="colorfe9">*</span>项目为必填项目</div>
                </div>
            </div>
            <div class="formContent">
                <div class="customer">客户资料</div>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="135">
                    <FormItem label="代理账号" prop="accountNum">
                        <Input v-model="formValidate.accountNum" placeholder="请输入4-12个字符，仅可输入英文字母以及数字的组合"/>
                    </FormItem>
                    <FormItem label="密码" prop="passwd">
                        <Input type="password" v-model="formValidate.passwd" placeholder="密码长度为6-16个字符，以及必须含有字母和数字的组合"/>
                    </FormItem>
                    <FormItem label="确认密码" prop="passwdnew">
                        <Input type="password" v-model="formValidate.passwdnew"/>
                    </FormItem>
                    <FormItem label="真实姓名" prop="name">
                        <Input  v-model="formValidate.name" placeholder="必须与取款银行卡姓名一致"/>
                    </FormItem>
                    <FormItem label="邮箱地址" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="请务必输入真实有效的邮箱地址，以便我们联系开通合营代理事宜"/>
                    </FormItem>
                    <FormItem label="手机号" prop="phone">
                        <Input v-model="formValidate.phone" />
                    </FormItem>
                    <FormItem label="验证码" prop="code" class="specode">
                        <Row>
                            <Col class="speinput">
                                <Input v-model="formValidate.code" />
                            </Col>
                            <Col class="speimg">
                                <img src="@/assets/images/member/code.png" alt="" />
                            </Col>
                        </Row>
                       
                    </FormItem>
                    <FormItem prop="conditionTwo" class="memberCheck">
                        <CheckboxGroup v-model="formValidate.conditionTwo">
                            <Checkbox label="read">我已阅读并同意"合营条款和条件"</Checkbox>
                            <Checkbox label="age">我已年满18岁</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                </Form>
                <div class="apply">
                    <div class="subDiv" @click="handleSubmit('formValidate')">提交申请</div>
                </div>
            </div>
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
    export default {
        name: 'member',
        data () {
            return {
                formValidate: {
                    accountNum: '',
                    passwd: '',
                    passwdnew: '',
                    name: '',
                    phone: '',
                    code: '',
                    conditionTwo: []
                },
                ruleValidate: {
                    accountNum: [
                        { required: true, message: '代理账号不可为空', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '密码不可为空', trigger: 'blur' }
                    ],
                    passwdnew: [
                        { required: true, message: '确认密码不可为空', trigger: 'blur' }
                    ],
                    name:[
                        { required: true, message: '真实姓名不可为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱地址不可为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱地址输入格式不正确', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '手机号不可为空', trigger: 'blur' }
                    ],
                    code:[
                        { required: true, message: '验证码不可为空', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('提交失败!');
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 覆盖iview样式-->
<style lang="less" scoped>
    .memberCon /deep/.ivu-form-item-required .ivu-form-item-label:before,.ivu-form-item-error-tip{
        color: #fe9f42;
    }
    .memberCon /deep/.ivu-form-item-required .ivu-form-item-label:before{
        vertical-align: 5px;
        margin-right: 7px;
    }
    /* .ivu-form-item-error .ivu-input:hover{
        border-color: #fe9f42;
    } */
    .memberCon /deep/.ivu-form-item-error .ivu-input{
        border: 1px solid #fe9f42;
    }
    .memberCon /deep/.ivu-checkbox-inner{
        border: 1px solid #fe9f42;
        border-radius: 100%;
    }
    .memberCon /deep/.ivu-checkbox-checked .ivu-checkbox-inner{
        border-color: #fe9f42;
        background-color: #fe9f42;
    }
    .memberCon /deep/.ivu-btn-primary{
        background-color: #fe9f42;
        border: 1px solid #fe9f42;
    }
    .memberCon /deep/.ivu-form-item{
        margin-bottom: 37px;
    }
    .memberCon /deep/.ivu-form-item.specode{
        margin-bottom: 20px;
    }
    .memberCon /deep/.ivu-form-item.memberCheck{
        background: rgba(255,255,255,.7);
        opacity: .7;
        margin-bottom: 0;
    }
    .memberCon /deep/.ivu-form .ivu-form-item-label{
        font-size: 18px;
        color: #828282;
        height: 60px;
        line-height: 40px;
        padding: 10px 32px 10px 0;
    }
    
    .memberCon /deep/.ivu-input{
        height: 60px;
        box-sizing: border-box;
        border: 1px solid #d5d5d5;
        font-size: 18px;
        padding: 4px 7px 4px 28px;
        background-color: #f4f4f4;
        color: #ababab;
    }
    .memberCon /deep/.memberCheck .ivu-form-item-content{
        width: 414px;
        height: 100px;
    }
    .memberCon /deep/.ivu-form-item-content{
        width: 775px;
    }
    .memberCon /deep/.ivu-form-item-content .speinput{
        width: 542px;
        float: left;
    }
    .memberCon /deep/.ivu-form-item-content .speimg{
        width: 176px;
        height: 60px;
        float: left;
        margin-left: 40px;
    }
    .memberCon /deep/.ivu-form-item-content img{
        width: 176px;
        height: 60px;
    }
    .memberCon /deep/.ivu-checkbox-group-item{
        display: block;
        font-size: 18px;
        height: 50px;
        line-height: 55px;
    }
    .memberCon /deep/.ivu-checkbox-inner{
        height: 24px;
        width: 24px;
    }
    .memberCon /deep/.ivu-checkbox-checked .ivu-checkbox-inner:after{
        width: 8px;
        height: 14px;
        left: 6px;
    }
    /* .specode .ivu-form-item-content{
        width: 542px;
    } */
</style>
<!-- container样式-->
<style lang="less" scoped>
    .container {
        width: 100%;
        height: 1582px;
        background: url('~@/assets/images/member/memberbg.png') no-repeat;
        background-size: 100% 100%;
        padding-top: 163px;
        .memberTit{
            text-align: center;
            height: 200px;
            .f_50{
                font-size: 50px;
                margin-bottom: 35px;
            }
            .f_20{
                font-size: 17px;
            }
        }
        .memerForm {
            width: 1204px;
            height: auto;
            border-radius: 5px;
            background: rgba(255,255,255,.7);
            margin: 0 auto;
            padding: 0 30px;
            box-sizing: border-box;
        }
        .memerHeader{
            padding: 56px 0 42px 0;
            border-bottom: 1px dashed #c0b6b3; 
            .memberTitle{
                width: 490px;
                height: 134px;
                margin: 0 auto;
                color: #343434;
                .titleTop{
                    width: 100%;
                    height: 68px;
                    text-align: center;
                    line-height: 88px;
                    font-size: 28px;
                }
                .titleBottom{
                    width: 100%;
                    height: 66px;
                    line-height: 64px;
                    text-align: center;
                    font-size: 18px;
                    .colorfe9{
                        color: #fe9f42;
                    }
                }
            }
        }
        .formContent{
            width: 925px;
            height: auto;
            margin: 40px auto 0px;
            .customer{
                width: 130px;
                height: 45px;
                text-align: center;
                font-size: 22px;
                color: #343434;
                line-height: 35px;
            }
            form{
                box-sizing: border-box;
                padding-top: 37px;
                input,div{
                    box-sizing: border-box;
                }
            }
            .apply{
                width: 100%;
                height: 180px;
                padding-top: 60px;
                box-sizing: border-box;
                .subDiv{
                    width: 320px;
                    height: 60px;
                    background: linear-gradient(rgb(248,209,124), rgb(241,160,95));
                    margin: 0 auto;
                    border-radius: 8px;
                    font-size: 22px;
                    color: #ffffff;
                    text-align: center;
                    line-height: 60px;
                }
            }
        }
    }
</style>
