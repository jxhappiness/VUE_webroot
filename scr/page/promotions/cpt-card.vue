<template>
  <dl class="card">
    <dt>
      <img src="../../assets/images/promotions/hot1.png" alt="">
      <div class="pd-lf20">
        <h6 v-for="(item,index) in instruction" :key='index'>{{item}}</h6>
        <div class="time">
          <span>活动开始时间：</span>
          <c-date :year="start.split('-')[0]" :month="start.split('-')[1]" :date="start.split('-')[2]"></c-date>
        </div>
        <div class="time">
          <span>活动结束时间：</span>
          <c-date :year="end.split('-')[0]" :month="end.split('-')[1]" :date="end.split('-')[2]"></c-date>
        </div>
      </div>
      <div class="line">
        <span></span>
      </div>
      <div @click="active" class="btn">查看详情</div>
    </dt>
    <dd>
      <img v-if="img" :src="img" alt="">
    </dd>
  </dl>
</template>
<script>
  import cDate from "./cpt-date"

  export default {
    name: "card",
    data() {
      return {}
    },
    props:['start', 'end', 'instruction', 'img'],
    components: {
      cDate
    },
    methods: {
      active() {
          this.$emit('active');
      }
    }
  }
</script>
<style lang="less" scoped>
  .pd-lf20 {
    padding-left: 20px;
  }
  .card {
    display: flex;
    height: 352px;
    box-shadow: 5px 5px 5px #dadada;
    margin: 60px auto;
    width: 100%;
    dt {
      border-top: 1px solid #efefef;
      border-left: 1px solid #efefef;
      width: 422px;
      padding-top: 54px;
      background: linear-gradient(rgb(253, 253, 253), rgb(223, 223, 223));
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0px;
      }
    }
    h6 {
      padding: 5px 0;
      font-size: 14px;
    }
    dd{
      flex: 1;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  .time {
    display: flex;
    align-items: center;
    height: 66px;
  }
  .line {
    //border-top: 1px solid rgb(196, 198, 200);
    width: 80%;
    height: 1px;
    
    margin: 0 auto;
    padding: 16px 0;
    span{
      height: 1px;
      width: 100%;
      display: block;
      background: rgb(196, 198, 200);
    }
  }
  .btn{
    width: 303px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: linear-gradient(rgb(248,209,124), rgb(241,160,95));
    border-radius: 5px;
    margin: 0 auto;
    color: #fff;
    cursor: pointer;
  }
</style>
