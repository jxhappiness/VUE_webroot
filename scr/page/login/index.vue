<template>
  <div class="app">
    <v-header></v-header>
    <div class="container">
      <div class="content">
        <!-- 注册/登录的容器 -->
        <div class="register">
          <div class="register-video">
            <video loop="loop" autoplay="autoplay" width="440" height="550">
              <source src="@/assets/video/register.mp4" type="video/mp4" />
              <p class="cy-third_a cy-third_a_img3"></p>
            </video>
          </div>
          <!-- 注册表单 -->
          <div :class="['register-form', {hide: !registerShow}]">
            <div class="form-title">
              <div :class="['form-user-register', {'c-show': register.type === 'name'}]" @click="() => this.register.type ='name'">用户名注册</div>
              <div :class="['form-phone-register', {'c-show': register.type === 'phone'}]" @click="() => this.register.type ='phone'">手机注册</div>
            </div>
            <!-- 用户名注册 -->
            <template v-if="register.type === 'name'">
              <div class="input-contaier_large">
                <Input key="register-name" v-model="register.name" placeholder="请输入5-10位英文字母或数字组合字符"></Input>
              </div>
              <div class="input-contaier_large">
                <Input v-model="register.pwd" placeholder="长度为6-11位英文数字组合字符"></Input>
              </div>
              <div class="input-container_code">
                <div class="input-contaier_small">
                  <Input v-model="register.nameCode" placeholder="验证码"></Input>
                </div>
                <div class="get-code">
                  <img v-if="verifyCodeImgURL !== ''" :src="verifyCodeImgURL" />
                  <div v-else>加载中...</div>
                </div>
                <div class="change-code" @click="changeVerifyCode">换一个</div>
              </div>
            </template>
            <!-- 手机注册 -->
            <template v-if="register.type === 'phone'">
              <div class="input-contaier_large">
                <Input key="register-phone" v-model="register.phone" placeholder="手机号码">
                  <span slot="prepend">+86</span>
                </Input>
              </div>
              <div class="input-container_code" style="margin-bottom: -10px;">
                <div class="input-contaier_small" style="width: 195px;">
                  <Input v-model="register.Phonecode" placeholder="手机验证码"></Input>
                </div>
                <div class="button-get-code">获取验证码</div>
              </div>
              <div class="register-reminder" style="margin-bottom:10px;">请注意010开头的短信</div>
            </template>
            <div class="agree">
              <Checkbox></Checkbox><p class="text">我已阅读并同意相关规则和隐私条款<span>《用户协议》</span></p>
            </div>
            <div class="register-operation">
              <div class="register-button" @click="handleRegister">注册</div>
              <div class="register-go-login">已有账号？ 请<span @click="changeModuleShow('loginShow')">登录</span></div>
            </div>
          </div>
          <!-- 登录表单 -->
          <div :class="['register-form', {hide: !loginShow}]">
            <div class="form-title">
              <div class="form-user-register">登录</div>
            </div>
            <div class="input-contaier_large" style="margin-bottom: 36px;">
              <Input v-model="login.name" placeholder="用户名或手机登录"></Input>
            </div>
            <div class="input-contaier_large" style="margin-bottom: 36px;">
              <Input type="password" v-model="login.pwd" placeholder="密码"></Input>
            </div>
            <div class="register-operation">
              <div class="register-button" @click="handleLogin">登录</div>
              <div class="register-find-pwd">
                <span @click="changeModuleShow('FindPwdShow')">忘记密码</span>
                <span> | </span>
                <span style="color: #fe9f42;" @click="changeModuleShow('registerShow')">注册账号</span>
              </div>
            </div>
          </div>
          <!-- 找回密码第一步 -->
          <div :class="['register-form', {hide: !FindPwdShow}]">
            <div class="form-title">
              <div :class="['form-user-register', {'c-show': findPwd.type === 'mail'}]" @click="() => this.findPwd.type ='mail'">邮箱找回密码</div>
              <div :class="['form-phone-register', {'c-show': findPwd.type === 'phone'}]" @click="() => this.findPwd.type ='phone'">手机号找回密码</div>
            </div>
            <!-- 邮箱找回密码 -->
            <template v-if="findPwd.type === 'mail'">
              <div key="find-pwd-mail" class="input-contaier_large" style="margin-bottom: 36px;">
                <Input v-model="findPwd.mail" placeholder="请输入有效的邮箱"></Input>
              </div>
              <div class="input-container_code" style="margin-bottom: -10px;">
                <div class="input-contaier_small" style="width: 195px;">
                  <Input v-model="findPwd.mailCode" placeholder="邮箱验证码"></Input>
                </div>
                <div class="button-get-code">获取验证码</div>
              </div>
              <div class="register-reminder">请注意查收邮箱</div>
            </template>
            <!-- 手机号找回密码 -->
            <template v-if="findPwd.type === 'phone'">
              <div key="find-pwd-phone" class="input-contaier_large" style="margin-bottom: 36px;">
                <Input v-model="findPwd.phone" placeholder="手机号码">
                  <span slot="prepend">+86</span>
                </Input>
              </div>
              <div class="input-container_code" style="margin-bottom: -10px;">
                <div class="input-contaier_small" style="width: 195px;">
                  <Input v-model="findPwd.phoneCode" placeholder="手机验证码"></Input>
                </div>
                <div class="button-get-code">获取验证码</div>
              </div>
              <div class="register-reminder">请注意010开头的短信</div>
            </template>
            <div class="register-operation">
              <div class="register-button" style="width: 345px;" @click="() => this.changeModuleShow('FindPwdStepTwoShow')">下一步</div>
            </div>
          </div>
          <!-- 找回密码第二步 -->
          <div :class="['register-form', {hide: !FindPwdStepTwoShow}]">
            <div class="form-title">
              <div class="form-user-register">找回密码</div>
            </div>
            <div class="input-contaier_large" style="margin-bottom: 36px;">
              <Input v-model="findPwd.oldPwd" placeholder="设置新密码"></Input>
            </div>
            <div class="input-contaier_large" style="margin-bottom: 55px;">
              <Input v-model="findPwd.newPwd" placeholder="确认密码"></Input>
            </div>
            <div class="register-operation">
              <div class="register-button" style="width: 345px;" @click="() => this.changeModuleShow('loginShow')">修改密码</div>
            </div>
          </div>
        </div>
        <div class="w1242 cy-first">
          <div class="cy_back1"><img src="@/assets/images/use_img/cy_img1.jpg"></div>
          <div class="cy-first_one">
            <div class="cy_a fl" :class="{index2:!cy_a['a1'],index3:cy_a['a1']}" @mouseenter="goEffect('a1')" @mouseleave="leaveEffect('a1')">
              <div class="cy_a1" :class="{cyanimate:cy_a['a1']}">
                <img src="@/assets/images/use_img/cy_img2.jpg">
              </div>
              <div class="cy_a2" :class="{padding44:!cy_a['a1'],padding24:cy_a['a1']}">
                <div class="cy-first_fl fl"><img src="@/assets/images/use_img/logo1.png"></div>
                <div class="cy-first_fr fr">
                  <div class="cy_1">2017/2018 赛季英超联赛赞助商</div>
                  <div class="cy_2">水晶宫俱乐部球衣赞助商</div>
                </div>
                <div class="gotoclick">
                  <div class="cy_3" v-if="cy_a['a1']" :class="{animation3:cy_a['a1']}">
                    <a href="#" target="_blank">了解详情</a>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="cy_a fl" :class="{index2:!cy_a['a2'],index3:cy_a['a2']}" @mouseenter="goEffect('a2')" @mouseleave="leaveEffect('a2')">
              <div class="cy_a1" :class="{cyanimate:cy_a['a2']}">
                <img src="@/assets/images/use_img/cy_img2.jpg">
              </div>
              <div class="cy_a2" :class="{padding44:!cy_a['a2'],padding24:cy_a['a2']}">
                <div class="cy-first_fl fl"><img src="@/assets/images/use_img/logo2.png"></div>
                <div class="cy-first_fr fr">
                  <div class="cy_1">2017/2018 意甲官方冠名赞助商</div>
                  <div class="cy_2">意甲官方冠名赞助商</div>

                </div>
                <div class="gotoclick">
                  <div class="cy_3" v-if="cy_a['a2']" :class="{animation3:cy_a['a2']}">
                    <a href="#" target="_blank">了解详情</a>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="cy_a fl" :class="{index2:!cy_a['a3'],index3:cy_a['a3']}" @mouseenter="goEffect('a3')" @mouseleave="leaveEffect('a3')">
              <div class="cy_a1" :class="{cyanimate:cy_a['a3']}"><img src="@/assets/images/use_img/cy_img2.jpg"></div>
              <div class="cy_a2" :class="{padding44:!cy_a['a3'],padding24:cy_a['a3']}">
                <div class="cy-first_fl fl"><img src="@/assets/images/use_img/logo3.png"></div>
                <div class="cy-first_fr fr">
                  <div class="cy_1">2017/2018 赛季西甲联赛赞助商</div>
                  <div class="cy_2">皇家社会官方合作伙伴</div>

                </div>
                <div class="gotoclick">
                  <div class="cy_3" v-if="cy_a['a3']" :class="{animation3:cy_a['a3']}">
                    <a href="#" target="_blank">了解详情</a>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="cy_b fl" :class="{index2:!cy_a['b1'],index3:cy_a['b1']}" @mouseenter="goEffect('b1')" @mouseleave="leaveEffect('b1')">
              <a href="#" target="_blank">
                <div class="hover-zoom" :class="{cyanimate:cy_a['b1'],index2:!cy_a['b1'],index3:cy_a['b1']}"></div>
              </a>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { loginApi, registerApi, verifyCodeApi } from '@/api/login';
import { saveLS } from '@/utils';

export default {
  name: 'login',
  data() {
    return {
      registerShow: true,
      loginShow: false,
      FindPwdStepTwoShow: false, // 显示找回密码第二步
      FindPwdShow: false,
      // 注册表单信息
      register: {
        type: 'name', // 注册类型(phone手机注册|name用户名注册)
        name: '',
        pwd: '',
        nameCode: '', // 用户名注册的验证码
        phoneCode: '',
        phone: ''
      },
      // 登录表单信息
      login: {
        name: 'test',
        pwd: 'qwe123456'
      },
      // 找回密码表单信息
      findPwd: {
        type: 'mail', // 找回密码的类型(mail邮箱|phone手机)
        phone: '',
        mail: '',
        phoneCode: '',
        mailCode: '',
        oldPwd: '',
        newPwd: ''
      },
      cy_a: {
        a1: false,
        a2: false,
        a3: false,
        b1: false
      },
      // 验证码图片路径
      verifyCodeImgURL: '',
      // 验证码会话 id
      verifyCodeSessionId: ''
    }
  },
  mounted() {
    this.getVerifyCode();
  },
  methods: {
    goEffect: function(num) {
      this['cy_a'][num] = true;
    },
    leaveEffect: function(num) {
      this['cy_a'][num] = false;
    },
    // 控制各个模块的显示和隐藏
    changeModuleShow: function(module) {
      this.registerShow = false;
      this.loginShow = false;
      this.FindPwdShow = false;
      this.FindPwdStepTwoShow = false;
      this[module] = true;
    },
    // 登录操作
    handleLogin() {
      const { name: playername, pwd: password } = this.login;

      // 用户信息
      const userInfo = {
        playername,
        password
      };
      // 通过注册接口注册的用户
      // const userInfo = {
      //   playername: "china",
      //   password: "q1w2e3r4t5"
      // };
      loginApi(userInfo)
        .then((res) => {
          const { data } = res;
          if (data && data.cc && data.vc) {
            saveLS('cc', data.cc);
            saveLS('vc', data.vc);
            saveLS('userName', playername);
            // 登录成功
            this.$router.push('/home');
          }
        });
    },
    // “换一个” 验证码
    changeVerifyCode() {
      this.verifyCodeImgURL = '';
      this.verifyCodeSessionId = '';
      this.getVerifyCode();
    },
    // 获取注册验证码
    getVerifyCode() {
      verifyCodeApi()
        .then(({ data }) => {
          this.verifyCodeImgURL = `data:image/png;base64,${data.regImage}`;
          this.verifyCodeSessionId = data.regSession.sessionid;
        });
    },
    // 注册操作
    handleRegister() {
      const code = this.register.nameCode;
      const sessionid = this.verifyCodeSessionId;

      registerApi(code, sessionid)
        .then(({ data }) => {
          console.log(data);
        });
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    padding-top: 40px;
    background: url("~@/assets/images/login/bg.png");
    background-size: cover;

    .content {
      width: 100%;
      min-height: 890px;
      margin: 0 auto;

      .register {
        width: 1000px;
        margin: 0 auto;
        // margin-left: 100px;
        overflow: hidden;
        box-shadow: 0px 0px 57px #f3e3d3;
        background: url("~@/assets/images/login/content-bg.png") no-repeat;

        .hide {
          display: none;
        }

        .show {
          display: block;
        }

        .c-show {
          color: #fe9f42;
        }

        .register-video {
          width: 440px;
          height: 550px;
          float: left;
        }

        .register-form {
          float: left;
          padding-left: 96px;

          .form-title {
            margin: 70px 0 30px 9px;

            div {
              display: inline-block;
              cursor: pointer;
              font-size: 20px;
            }

            .form-user-register {
              margin-right: 15px;
            }

            .form-phone-register {
              margin-left: 15px;
              position: relative;
            }

            .form-phone-register:before {
              content: '';
              width: 2px;
              height: 22px;
              background: #727272;
              position: absolute;
              top: 4px;
              left: -17px;
            }
          }

          .agree {
            height: 30px;
            line-height: 30px;
            margin-bottom: 15px;

            p {
              color: #abacaf;
              display: inline-block;

              span {
                color: #fb9f5f;
                cursor: pointer;
              }
            }
          }

          .register-reminder {
            margin-bottom: 27px;
            font-size: 14px;
            color: #cc3333;
          }

          .register-operation {
            overflow: hidden;


            .register-button {
              float: left;
              border-radius: 5px;
              width: 187px;
              height: 48px;
              line-height: 48px;
              color: #fff;
              font-size: 18px;
              text-align: center;
              background: linear-gradient(to bottom, #fcd184, #fca66b);
            }

            .register-go-login {
              float: left;
              font-size: 14px;
              height: 48px;
              line-height: 48px;
              margin-left: 50px;

              span {
                color: #eb7b2f;
                cursor: pointer;
              }
            }

            .register-find-pwd {
              float: left;
              font-size: 14px;
              height: 48px;
              line-height: 48px;
              margin-left: 50px;

              span {
                cursor: pointer;
              }
            }
          }
        }

        .input-contaier {
          height: 56px;
          margin-bottom: 16px;

          /deep/.ivu-input {
            height: 45px;
            font-size: 14px;
            border: 1px solid #ddd;
          }
          /deep/.ivu-input:focus {
            border-color: #dddee1 !important;
            box-shadow: none;
          }
          /deep/.ivu-input-group-prepend {
            background: #fff;
            padding: 4px 20px;
            font-size: 14px;
          }
        }

        .input-contaier_large {
          .input-contaier;
          width: 327px;
        }

        .input-contaier_small {
          .input-contaier;
          width: 168px;
        }

        .input-container_code {
          overflow: hidden;

          div {
            float: left;
          }

          .get-code {
            margin-left: 38px;
            margin-top: 15px;
            width: 80px;
            height: 28px;

            img {
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }

          .change-code {
            margin-top: 20px;
            margin-left: 20px;
            cursor: pointer;
            text-decoration: underline;
          }

          .button-get-code {
            margin-left: 38px;
            cursor: pointer;
            height: 55px;
            line-height: 55px;
            width: 110px;
            text-align: center;
            background: linear-gradient(to bottom, #fcd184, #fca66b);
            font-size: 16px;
            border-radius: 5px;
            color: #fff;
          }
        }
      }

      /* 底部的广告 -> start */
      .w1242 {
        width: 1242px;
        margin: 0 auto
      }

      .cy-first {
        padding-top: 30px;
        position: relative;

        .cy_back1 {
          width: 100%;
          height: 120px;
          overflow: hidden;
          padding-top: 100px;
          box-sizing: content-box;
        }

        .cy_back1 img {
          width: 100%;
        }

        .cy-first_one {
          width: 1200px;
          left: 21px;
          position: absolute;
          bottom: 50px
        }

        .cy_a {
          width: 300px;
          height: 148px;
          position: relative;
          z-index: 2
        }

        .cy_a1 {
          width: 300px;
          height: 148px;
          top: 0;
          left: 0;
          transition: all .5s;
        }

        .cy_a1 img {
          width: 100%;
        }

        .cyanimate {
          transform: scale(1.1);
        }

        .cy_a2 {
          width: 260px;
          height: auto;
          padding: 44px 20px;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: content-box;
          transition: all .5s;
        }

        .cy_a .cy-first_fl {
          width: 45px;
          height: auto
        }

        .cy_a .cy-first_fl img {
          margin-top: 7px
        }

        .cy_a .cy-first_fr {
          width: 210px;
          height: auto;
        }

        .cy_a .cy-first_fr .cy_1 {
          width: 100%;
          font-size: 14px;
          color: #666;
          padding: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .cy_a .cy-first_fr .cy_2 {
          width: 100%;
          font-size: 18px;
          color: #000;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .gotoclick .cy_3 {
          padding-top: 10px;
          width: 135px;
          margin: 0 auto
        }

        .gotoclick .cy_3 a {
          width: 135px;
          height: 32px;
          line-height: 32px;
          display: block;
          border-radius: 16px;
          background: -webkit-linear-gradient(top, #ffce6d, #ff9a4e) !important;
          background: -o-linear-gradient(bottom, #ffce6d, #ff9a4e) !important;
          background: -moz-linear-gradient(bottom, #ffce6d, #ff9a4e) !important;
          background: linear-gradient(to bottom, #ffce6d, #ff9a4e) !important;
          text-align: center;
          font-size: 16px;
          color: #fff
        }

        .cy_b {
          width: 300px;
          height: 160px;
          margin-top: -12px
        }

        .gotoclick {
          width: 100%;
          text-align: center;
          float: left
        }

        .hover-zoom {
          float: left;
          margin: 0;
          width: 100%;
          height: 100%;
          display: block;
          background-image: url('~@/assets/images/use_img/cy_img1.png');
          background-size: 100%;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          transition: all .5s;
        }

        .index3 {
          z-index: 3;
        }

        .index2 {
          z-index: 2;
        }

        .padding24 {
          padding-top: 24px;
          padding-bottom: 24px
        }

        .padding44 {
          padding-top: 44px;
          padding-bottom: 44px
        }

        .animation3 {
          animation: fadeInUp .5s .2s ease both;
        }

        /* 媒体查询 -> start */
        @media screen and (max-width:1300px) {
          &.w1242 {
            width: 1040px;
          }
          body {
            min-width: 1000px;
          }
          .cy-first_one {
            width: 1000px;
          }
          .cy_a {
            width: 250px;
          }
          .cy_a1 {
            width: 250px;
            height: 123px;
          }
          .cy_a2 {
            width: 210px;
            padding: 33px 20px;
          }
          .cy_a .cy-first_fr {
            width: 165px;
          }
          .cy_b {
            width: 250px;
            height: 136px;
          }
          .padding24 {
            padding-top: 13px;
            padding-bottom: 13px
          }
          .padding44 {
            padding-top: 33px;
            padding-bottom: 33px
          }
          .cy-second {
            padding-top: 20px;
          }
          .cy-second_fl .bx-wrapper .bx-pager,
          .bx-wrapper .bx-controls-auto {
            bottom: 65px;
          }
          .cy-second_fl {
            width: 500px;
          }
          .fortwoslider {
            width: 1000px;
          }
          .cy-second_fr {
            width: 500px;
          }
          .cy-sec_yanshi a {
            width: 185px;
            background-position: 25px center;
          }
          .cy-sec_cont2 .cy-sec_cont2_1 {
            line-height: 23px;
            margin: 0px;
          }
          .cy-sec_cont2 .cy-sec_one .cy-sec_one-cent {
            width: 135px;
          }
          .cy-sec_download a {
            width: 190px;
          }
          .cy-third_left {
            width: 705px;
          }
          .cy-third_two ul li {
            width: 235px;
            height: 300px;
          }
          .cy-third_a {
            width: 235px;
            height: 300px;
          }
          .cy-third_b {
            padding-left: 50px;
            font-size: 18px;
          }
          .cy-third_c {
            width: 200px;
            font-size: 14px;
          }
          .cy-third_right {
            width: 295px;
          }
          .cy-third_three img {
            width: 170px;
          }
          .cy-third_four {
            width: 275px;
            height: 300px;
            padding-left: 20px;
          }
          .cy-third_four-fr {
            width: 200px;
            padding-right: 10px;
          }
          .cy-third_four-fr p {
            margin-top: 5px;
          }

          .twochange .li1 {
            background-position: -20px !important;
          }

          .twochange .li2 {
            background-position: -36px;
          }

          .twochange .s1-3 {
            left: 123px;
            top: 251px;
            z-index: 1;
          }
          .s1-2 {
            left: 124px;
            top: 226px;
            z-index: 2;
          }
          .s1-1 {
            left: 150px;
            top: 190px;
            z-index: 3;
          }
          .s2-1 {
            left: 128px;
            top: 101px;
            z-index: 3;
          }
          .s2-2 {
            left: 139px;
            top: 121px;
            z-index: 2;
          }
          .s2-3 {
            left: 144px;
            top: 138px;
            z-index: 1;
          }
          .s2-4 {
            left: 0px;
            top: 349px;
            z-index: 2;
          }
          .s2-5 {
            left: 10px;
            top: 372px;
            z-index: 1;
          }

          .twochange .li3 {
            background-position: 18px !important;
          }

          .twochange .li3,
          .twochange .li2,
          .twochange .li1 {
            left: -24px;
          }
          .vfx-image-wrap {
            left: 116px;
          }
          .twochangetwo .li2 {
            background-position: -1px center !important;
          }
          .s6-1 {
            left: 33px;
            top: 51px;
            z-index: 3;
          }
          .s6-2 {
            left: 79px;
            top: 79px;
            z-index: 2;
          }
          .s6-3 {
            left: 121px;
            top: 101px;
            z-index: 1;
          }
        }
        /* 媒体查询 -> end */
      }
      /* 底部的广告 -> end */
    }
  }
</style>
