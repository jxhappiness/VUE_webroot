<template>
  <div class="head">
    <div class="head_left">
      <div class="info">
        <img src="../../../assets/images/personal/user.png" alt="">
        <div>
          <p>上午好，ManBetX <img src="../../../assets/images/personal/logo.png" alt=""></p>
          <p>已加入万博 8888 天! <strong>签到</strong></p>
        </div>
      </div>
      <div class="safe">
        <span>账户安全：</span>
        <p class="on">
          <img src="../../../assets/images/personal/safe1.png" alt="">
        </p>
        <p>
          <img src="../../../assets/images/personal/safe2.png" alt="">
        </p>
        <p>
          <img src="../../../assets/images/personal/safe3.png" alt="">
        </p>
        <p>
          <img src="../../../assets/images/personal/safe4.png" alt="">
        </p>
      </div>
    </div>
    <div class="head_right">
      <div class="account">
        <p>账户总余额 <img src="../../../assets/images/personal/show.png" alt=""></p>
        <p class="money">39203003.00</p>
        <div class="data">
          <span>个人资料</span>
          <div>
            <Progress class="progress" :stroke-width="20" :percent="25"></Progress>
          </div>
          <span>立即完善</span>
        </div>
      </div>
      <div class="data">
        <img src="../../../assets/images/personal/canvas.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personal',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .head {
    height: 300px;
    display: flex;
    align-items: center;
    .head_left, .head_right {
      height: 222px;
    }
    .head_left {
      width: 430px;
      border-right: 1px solid #cccccc;
      padding-left: 40px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .info {
        display: flex;
        align-items: center;
        > div {
          padding-left: 14px;
          p {
            width: 218px;
            letter-spacing: 2px;
            font-weight: 900;
            img, strong {
              float: right;
            }
          }
          p:first-child {
            padding-bottom: 10px;
            font-size: 15px;
          }
          p:last-child {
            font-size: 13px;
            strong {
              color: #f3af68;
            }
          }
        }
        img {
          vertical-align: middle;
        }
      }
      .safe {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 316px;
        font-size: 15px;
        padding-top: 30px;
        p{
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #484748;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(-180deg, #494949 0%, #a3a1a7 100%);
        }
        p.on{
          background-color: #fd9e5d;
          background-image: none;
        }
      }
    }
    .head_right {
      flex: 1;
      padding-left: 62px;
      display: flex;
      align-items: center;
      .account {
        width: 328px;
        font-size: 15px;
        display: flex;
        justify-content: space-around;
        height: 100%;
        flex-direction: column;
        .money {
          font-size: 32px;
          font-weight: 900;
          /*padding: 40px 0 50px;*/
        }
        img {
          vertical-align: -4px;
          margin-left: 10px;
        }
        .data {
          display: flex;
          align-items: center;
          span {
            display: block;
          }
          span:first-child {
            padding-right: 10px;
          }
          span:last-child {
            width: 92px;
            text-align: right;
            letter-spacing: 1px;
            color: #fd9e5d;
            cursor: pointer;
          }
          > div {
            flex: 1;
            line-height: 1;
          }
        }
      }
      > .data {
        padding-left: 60px;
        padding-bottom: 10px;
      }
    }
  }
</style>
<style>
  .progress .ivu-progress-text {
    position: absolute;
    right: 5px;
    top: 4px;
  }

  .progress .ivu-progress-bg {
    background-color: #fd9e5d;
  }
</style>
