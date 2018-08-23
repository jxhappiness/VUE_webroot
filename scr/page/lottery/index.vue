<template>
  <div class="app">
    <v-header></v-header>
    <div class="container" id="lottery">
      <div class="banner">
        <!-- <img src="@images/lottery_img/banner.png" /> -->
        <Carousel loop autoplay :autoplay-speed=3000>
          <CarouselItem>
             <div class="img-contenter"><img src="@images/lottery_img/lottery_banner.png" width="100%" /></div>           
          </CarouselItem>
          <CarouselItem>
            <div class="img-contenter"><img src="@images/lottery_img/lottery_banner.png" width="100%" /></div>
          </CarouselItem>
          <CarouselItem>
            <div class="img-contenter"><img src="@images/lottery_img/lottery_banner.png" width="100%" /></div>
          </CarouselItem>
          <CarouselItem>
            <div class="img-contenter"><img src="@images/lottery_img/lottery_banner.png" width="100%" /></div>
          </CarouselItem>
        </Carousel>
      </div>
      <ul class="nav main-scale" :style="nav_bg">
        <components v-for="item in lotteryData"
                  :key="item.id"
                  :content="item"
                  is="navList"
                  :switchId="swtichId"
                  @itemMouseMove="updateSwitchId"
                  @itemMouseLeave="updateSwitchId">
        </components>
      </ul>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import navList from './navList.vue'
  export default {
    name: 'client',
    components: {
      navList
    },
    data () {
      return {
        swtichId: 0,
        nav_bg: {
          background: `url(${require('@images/lottery_img/nav_bg.png')}) no-repeat`,
          'background-size': '100%'
        },
        lotteryData: [{
          id: 1,
          name: '双赢彩票',
          imgUrl: 'nav1',
          hoverImg: 'nav1_hover',
          tips: '私彩领导者。赔率最高，最快5分钟开奖，赢钱最快。六合彩、北京赛车、国内外时时彩、快乐农场、11选5等13个彩种自由选择。'
        }, {
          id: 2,
          name: 'BBIN彩票',
          imgUrl: 'nav2',
          hoverImg: 'nav2_hover',
          tips: '创新玩法领军平台。雷电PK、快乐彩、射龙门、幸运熊猫、竞速3D火爆开启中。轻点鼠标，掌控所有！'
        }, {
          id: 3,
          name: 'KG彩票',
          imgUrl: 'nav3',
          hoverImg: 'nav3_hover',
          tips: '经典百家乐、时时彩、快乐彩、PK10、香港乐透游戏，任意选择。独创比赛模式，奖金丰厚，刺激好玩！'
        }]
      }
    },
    methods: {
      updateSwitchId (id) {
        this.switchId = id;
      }
    }
  }
</script>
<style lang="less">
  #lottery {
    /* 修改iview的样式(仅首页生效) */

    .ivu-carousel- li.ivu-carousel-active>button {
      background: linear-gradient(to bottom, #ffce6d, #ff9a4e) !important;
    }

    .ivu-carousel- li button {
      background: #cccccc;
      opacity: 1
    }

    .ivu-carousel- li button:hover {
      background: #f8b24d;
    }

    .ivu-carousel- {
      height: 30px;
      z-index: 1
    }

    .ivu-carousel- li button {
      height: 5px
    }

    .slide-item .ivu-carousel--inside {
      display: block;
      position: absolute;
      bottom: 18px;
    }

    .slide-item .ivu-carousel- li button {
      height: 8px;
      width: 8px;
      margin: 0 4px;
    }

    .slide-item .ivu-carousel- li.ivu-carousel-active>button {
      width: 24px;
      border-radius: 4px;
    }
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .container{
    max-width: 1920px;
    margin:auto;
    .banner {
      // height: 512px;
      // margin-top: -5px;
      // position: relative;
      img {
      //   width:100%;
      margin-top: -5px;
      //   margin:0;
      //   vertical-align:bottom;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 650px;
    }
  }
</style>
