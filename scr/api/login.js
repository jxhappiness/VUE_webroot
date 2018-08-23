import axios from 'axios';
// 登录注册 api
import { commonApi } from './common-func';

/**
 * 登录
 */
export const loginApi = userInfo => commonApi('988217c', userInfo);

// 获取注册验证码
export const verifyCodeApi = () => commonApi('833656a');

// 用户注册
export const registerApi = (code, sessionid) => commonApi('56fa759', {
  joiname: 'test',
  joinpwd: 'qwe123456',
  fullname: 'zhangsan',
  agc: '',
  verifycode: code,
  email: '18832643723@163.com',
  uphone: '18832643723',
  qq: '1140260977',
  birthday: '15',
  birthmonth: '08',
  birthyear: '1994',
  wdpassword: 'qwe123456',
  jsessionid: sessionid
});

/* 以下代码为调试接口代码 */

// 取得客户资料
// 取得客戶資料主要用作手機版的優惠活動banner資料
export const getUserInfo = () => commonApi('5f7cd5b');

// 取得会员资料
export const getMemberInfo = () => commonApi('7c98893', {}, true);

// 取款银行列表
export const withdrawBanksList = () => commonApi('3794aea', {}, true);

export const runTestRequest = () => {
  // getUserInfo().then(res => console.log(res));
};
