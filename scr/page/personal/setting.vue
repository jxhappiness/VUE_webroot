<template>
  <div class="setting">
    <ul class="userContent">
      <li>
        <div class="userTitle">基本资料:</div>
        <div class="userMess">{{userInfo.realname}}  |  出生 {{userInfo.birthday}}  |  QQ号: {{userInfo.qq}}</div>
        <div class="userHandle"></div>
      </li>
      <li>
        <div class="userTitle">邮  箱:</div>
        <div class="userMess">{{userInfo.email}}</div>
        <div class="userHandle"><span class="colfea059" @click="settBtn('email1')">验证</span></div>
      </li>
      <li>
        <div class="userTitle">手 机 号:</div>
        <div class="userMess">{{userInfo.phone}}</div>
        <div class="userHandle"><span class="colfea059" @click="settBtn('email2')">验证</span></div>
      </li>
      <li>
        <div class="userTitle">万博昵称:</div>
        <div class="userMess">{{userInfo.playername}}</div>
        <div class="userHandle">
            <router-link :to="{name: 'record'}">
              <span class="colfea059">查看我的记录</span>
            </router-link>
        </div>
      </li>
      <li>
        <div class="userTitle">登录密码:</div>
        <div class="userMess">用于登录万博网站使用的密码</div>
        <div class="userHandle"><span class="colfea059" @click="settBtn('pass1')">修改</span></div>
      </li>
      <li>
        <div class="userTitle">取款密码:</div>
        <div class="userMess">在资金变动时，需要输入的密码</div>
        <div class="userHandle"><span class="colfea059" @click="settBtn('pass2')">修改</span></div>
      </li>
      <li>
        <div class="userTitle">取款银行卡:</div>
        <div class="userMess" v-if='cardList.length>0'>已绑定<span class="cardnum colfea059">{{cardList.length}}</span>张银行卡</div>
        <div class="userMess" v-else>未绑定银行卡</div>
        <div class="userHandle"><span class="spebtn colfea059" @click="settBtn('addCard')">新增</span><span v-if='cardList.length>0'>|</span><span class="spebtn colfea059" v-if='cardList.length==0' @click="settBtn('cardList')">查看</span></div>
      </li>
      <li>
        <div class="userTitle">注册时间:</div>
        <div class="userMess">{{userInfo.regdate}}</div>
        <div class="userHandle"></div>
      </li>
    </ul>
    <pass :flagName=flagName :cardList=cardList v-show="state" @catchMask="catchMask()"></pass>

  </div>
</template>

<script>
  import pass from '@page/personal/settingpass';
  import { commonApi } from '@/api/common-func';
  export default {
    name: 'setting',
    data(){
      return{
        flagName:'',
        state:false,
        userInfo:{},
        cardList:[]
      }
    },
    mounted(){
      this.getData();//获取会员资料
      this.getCard();//取款银行列表
    },
    methods:{
      getData(){
        commonApi('7c98893', {}, true).then(res => {
          console.log(res);
          if(res.status===0){
            this.userInfo=res.data.response;
            console.log(this.userInfo);
          }
        });
      },
      getCard(){
        commonApi('3794aea', {}, true).then(res => {
          console.log(res);
          if(res.status===0){
            this.cardList=res.data.wd_banks;
            console.log(this.cardList);
          }
        });
      },
      settBtn(val){
        this.flagName=val;
        this.state=true;
      },
      catchMask(){
        this.state=false;
      }
    },
    components: {
      pass
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .setting{
    width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
    height: auto;
    padding: 45px 50px 120px 50px;
    box-sizing: border-box;
    .userContent{
      li{
        display: flex;
        width: 100%;
        height: 70px;
        font-size: 15px;
        color: #999999;
        line-height: 70px;
        .colfea059{
          color: #fea059;
        }
        .userTitle{
          width: 360px;
          height: 70px;
        }
        .userMess{
          flex: 1;
          position: relative;
          .cardnum{
            position: relative;
            top: -2px;
            padding: 0 10px;
            text-align: center;
            height: 70px;
            line-height: 50px;
          }
        }
        .userHandle{
          width: 170px;
          span{
            cursor: pointer;
          }
          .spebtn{
            padding: 10px;
          }
          .spebtn:first-of-type{
            padding-left:0px;
          }
        }
      }
    }
  }
</style>
