<template>
  <div class="app">
    <v-header></v-header>
    <div class="personal-wrap">
      <div class="personal ">
        <div class="p-head">
          <v-head></v-head>
          <ul class="nav">
            <router-link class="setting" tag="li" :to="{name: 'setting'}">我的资料</router-link>
            <router-link class="deposit" tag="li" :to="{name: 'deposit'}">存款</router-link>
            <router-link class="withdraw" tag="li" :to="{name: 'withdraw'}">提款</router-link>
            <router-link class="transfer" tag="li" :to="{name: 'transfer'}">转账</router-link>
            <router-link class="record" tag="li" :to="{name: 'record'}">我的记录</router-link>
            <router-link class="discount" tag="li" :to="{name: 'discount'}">我的优惠</router-link>
            <router-link class="msg" tag="li" :to="{name: 'msg'}">消息中心</router-link>
          </ul>
          <v-setting/>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHead from "./common/VHead"
  import VSetting from "./common/VSetting";

  export default {
    name: 'personal',
    components: {
      VSetting,
      VHead
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .personal-wrap {
    background-color: #f4f4f8;
  }
  .personal {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    min-height: 1100px;
    position: relative;
  }

  .nav {
    display: flex;
    align-items: center;
    height: 104px;
    border: 1px solid #eeeeee;
    text-align: center;
    width: 1120px;
    margin: 0 auto;
    li {
      flex: 1;
      height: 100%;
      box-sizing: border-box;
      border-right: 1px solid #eee;
      background-repeat: no-repeat;
      background-position: center 20px, center;
      padding-top: 64px;
      cursor: pointer;
    }
    li.router-link-exact-active {
      color: #fff;
    }
    .setting {
      background-image: url("../../assets/images/personal/navs/setting.png");
    }
    .setting.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/setting-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    .deposit {
      background-image: url("../../assets/images/personal/navs/deposit.png");
    }
    .deposit.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/deposit-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    .withdraw {
      background-image: url("../../assets/images/personal/navs/withdraw.png");
    }
    .withdraw.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/withdraw-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    .transfer {
      background-image: url("../../assets/images/personal/navs/transfer.png");
    }
    .transfer.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/transfer-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    .record {
      background-image: url("../../assets/images/personal/navs/record.png");
    }
    .record.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/record-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    .discount {
      background-image: url("../../assets/images/personal/navs/discount.png");
    }
    .discount.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/discount-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    .msg {
      background-image: url("../../assets/images/personal/navs/msg.png");
    }
    .msg.router-link-exact-active {
      background-image: url("../../assets/images/personal/navs/msg-a.png"), linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
    }
    li:last-child {
      border: 0;
    }
  }
</style>
