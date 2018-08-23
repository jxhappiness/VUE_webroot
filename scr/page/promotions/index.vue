<template>
  <div class="app">
    <v-header></v-header>
    <v-banner></v-banner>
    <div class="main ">
      <ul>
        <li @click="change(index)" :class="{on:active===index}" v-for="(list,index) in navList" :key='index'>{{list}}</li>
      </ul>
      <v-card @active="showDetail" :img="img1" :start="start" :instruction="instruction" :end="end"></v-card>
      <v-card @active="showDetail" :img="img2" start="2018-06-20" end="2018-07-20" :instruction="instruction"></v-card>
      <v-card @active="showDetail" :img="img3" start="2018-06-20" end="2018-07-20" :instruction="instruction"></v-card>
      <v-card @active="showDetail" :img="img4" start="2018-06-20" end="2018-07-20" :instruction="instruction"></v-card>
    </div>
    <v-footer></v-footer>
    <v-alert :isShow.sync="show"></v-alert>
  </div>
</template>

<script>
  import vBanner from "./cpt-banner"
  import vCard from "./cpt-card"
  import vAlert from "./cpt-alert"

  export default {
    name: 'promotions',
    data() {
      return {
        navList: ["全部优惠", "体育", "常规优惠", "最新推荐", "真人娱乐", "节假日", "VIP成长"],
        active: 0,
        show: false,
        start: "2018-05-10",
        end: "2018-03-01",
        instruction: [
          "万博原生体育万博原生体育万博原生体育万博原生体育"
        ],
        img1: require("../../assets/images/promotions/img11.png"),
        img2: require("../../assets/images/promotions/img12.png"),
        img3: require("../../assets/images/promotions/img13.png"),
        img4: require("../../assets/images/promotions/img14.png")
      }
    },
    methods: {
      change(index) {
        this.active = index;
      },
      showDetail() {
        this.show = true;
      }
    },
    components: {
      vBanner, vCard, vAlert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main {
    max-width: 1920px;
    width: 1242px;
    margin: 0 auto;
    padding-top: 48px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 68px;
      width: 1172px;
      margin: 0 auto;
      li {
        width: 145px;
        height: 46px;
        background-color: rgb(162, 161, 166);
        color: #fff;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
        line-height: 46px;
        transition: transform .3s;
        cursor: pointer;
      }
      li.on{
        // transform: scale(1.283);
        background: linear-gradient(rgb(248, 209, 124), rgb(241, 160, 95));
      }
    }
  }
</style>
