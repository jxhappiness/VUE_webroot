<template>
  <div class="banner">
    <transition-group name="fade">
      <div class="demo-carousel"
           :key="index" v-if="active===index" v-for="(item, index) in banners"
           :style="{'background-image':'url('+item+')'}"
      >
      </div>
    </transition-group>
    <ul class="tab">
      <li @click="choose(index)" :class="{on:active===index}" v-for="(item,index) in tabList" :key='index' :style="{'background-image':'url('+item+')'}"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "banner",
    data() {
      return {
        active: 0,
        timer:0,
        banners:[
          require('../../assets/images/promotions/banner-l1.png'),
          require('../../assets/images/promotions/banner-l2.png'),
          require('../../assets/images/promotions/banner-l3.png'),
          require('../../assets/images/promotions/banner-l4.png'),
        ],
        tabList: [
          require('../../assets/images/promotions/banner-s1.png'),
          require('../../assets/images/promotions/banner-s2.png'),
          require('../../assets/images/promotions/banner-s3.png'),
          require('../../assets/images/promotions/banner-s4.png'),
        ]
      }
    },
    methods: {
      choose(index) {
        clearInterval(this.timer);
        this.active = index;
        this.init();
      },
      init() {
          this.timer = setInterval(()=>{
              if(this.active === this.banners.length-1){
                this.active = 0;
              }else{
                this.active++;
              }
          },3000)
      }
    },
    destroyed() {
      clearInterval(this.timer);
    },
    mounted() {
      this.$nextTick(()=>{
        this.init();
      })
    }
  }
</script>
<style scoped lang="less">
  .banner{
    position: relative;
    height: 512px;
  }
  .demo-carousel{
    height: 512px;
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .tab{
    height: 474px;
    top:50%;
    transform: translateY(-50%);
    position: absolute;
    right: 120px;
    width: 236px;//236
    background-color: rgba(255,255,255,0.8);
    li{
      width:226px;//226
      height: 103px;//103
      box-sizing: border-box;
      box-shadow:5px 5px 5px #dadada;
      margin: 15px auto;
      cursor: pointer;
      background-size: cover;
      img{
        width: 100%;
      }
      &:first-child{
        margin-top: 8px;
      }
    }
    li.on{
      border: 5px solid;
      border-image: linear-gradient(rgb(248,209,124), rgb(241,160,95)) 30 30;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s cubic-bezier();
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
