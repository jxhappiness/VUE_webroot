<template>
  <div class="date-wrap">
    <!-- <div class="year">
      <span class="tit">年</span>
      <strong class="num">{{year}}</strong>
    </div>
    <div class="month">
      <span class="tit">月</span>
      <strong class="num">{{month}}</strong>
    </div>
    <div class="date">
      <span class="tit">日</span>
      <strong class="num">{{date}}</strong>
    </div> -->
    {{year}}年{{month}}月{{date}}日
  </div>
</template>
<script>
  export default {
    name: "card",
    data() {
      return {
      }
    },
    props:["year", "month", "date"],
    methods: {
      name() {

      }
    },
  }
</script>
<style lang="less" scoped>
  .date-wrap{
    display: flex;
    height: 60px;
    width: 200px;
    justify-content: center;
    // align-items: center;
    line-height: 50px;
    font-size: 22px;
    background-image: url("../../assets/images/promotions/time_bg.png");
    margin-top: 10px;
    color: #555351;
    .tit{
      display: block;
      height: 14px;
      font-size: 10px;
      color: #fff;
      line-height: 14px;
      text-align: center;
      background-color: rgb(109,107,103);
    }
    .year{
      width: 75px;
    }
    .month,.date{
      width: 45px;
    }
    .num{
      display: block;
      font-size: 20px;
      height: 32px;
      background-size: 100% 100%;
      width: 114%;
      margin-left: -3px;
      text-align: center;
      background-image: url("../../assets/images/promotions/month.png");
      background-repeat: no-repeat;
    }
    .year .num{
      width: 115%;
      margin-left: -6px;
      background-image: url("../../assets/images/promotions/year.png");
    }
  }
</style>
