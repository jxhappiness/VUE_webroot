<template>
  <div class="app">
    <v-header></v-header>
    <div class="content" id="liveCasino">
      <div class="banner">
        <Carousel v-model="value1" loop autoplay :autoplay-speed='3000'>
          <CarouselItem>
            <div class="img-contenter"><img src="@/assets/images/livecasino/live_casino_banner.png" width="100%" /></div>
          </CarouselItem>
          <CarouselItem>
            <div class="img-contenter"><img src="@/assets/images/livecasino/live_casino_banner.png" width="100%" /></div>
          </CarouselItem>
          <CarouselItem>
            <div class="img-contenter"><img src="@/assets/images/livecasino/live_casino_banner.png" width="100%" /></div>
          </CarouselItem>
          <CarouselItem>
            <div class="img-contenter"><img src="@/assets/images/livecasino/live_casino_banner.png" width="100%" /></div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="swiper-container">
         <carousel-3d :autoplay="true" @after-slide-change="onAfterSlideChange" :inverse-scaling="400" :space="433" :perspective="0" :width='450' :height='650' :border='5' ref="Carousel3d">
            <slide v-for="(item, index) in slideData3D" :key="index" :index="index" >
              <img :src="item.img">
              <div class="nav-item-model"></div>
              <figcaption>
                <div class="txt">萬贯厅万博平台</div>
                <div class="mask-button-container">
                  <div class="mask-button" @click='goPaly'>进入游戏</div>
                </div>
              </figcaption>
            </slide>
          </carousel-3d>
          <div class="dots">
            <ul>
              <li v-for="(item, index) in slideData3D" :key="index" :class="{active: slideData3DIndex === index}" @click="toSlide(index)"></li>
            </ul>
          </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { Carousel3d, Slide } from '../../components/vue-3d-carousel/index.js';

  export default {
    name: 'app',
    data () {
      return {
        value1:0,
        slideData3DIndex: 0,
        slideData3D: [
          {
            img: require('@/assets/images/livecasino/slide1.png')
          },
          {
            img: require('@/assets/images/livecasino/slide2.png')
          },
          {
            img: require('@/assets/images/livecasino/slide3.png')
          },
          {
            img: require('@/assets/images/livecasino/slide4.png')
          },
          {
            img: require('@/assets/images/livecasino/slide5.png')
          }
        ]
      }
    },
    methods: {
      toSlide (index) {
        this.$refs.Carousel3d.goSlide(index);
      },
      onAfterSlideChange(index){
        this.slideData3DIndex = index;
      },
      goPaly(){
        location.href = 'http://cn.man756.com/home/lunch?gpid=905647853201&accid=905647853200&url=/liveCasino/ebet'
      }
    },
    components: {
     Carousel3d,Slide
   }
  }
</script>
<style lang="less">
  #liveCasino {
    /* 修改iview的样式(仅首页生效) */
    .ivu-carousel-dots li.ivu-carousel-active>button {
      background: linear-gradient(to bottom, #ffce6d, #ff9a4e) !important;
    }

    .ivu-carousel-dots li button {
      background: #cccccc;
      opacity: 1
    }

    .ivu-carousel-dots li button:hover {
      background: #f8b24d;
    }

    .ivu-carousel-dots {
      height: 30px;
      z-index: 1
    }

    .ivu-carousel-dots li button {
      height: 5px
    }

    .slide-item .ivu-carousel-dots-inside {
      display: block;
      position: absolute;
      bottom: 18px;
    }

    .slide-item .ivu-carousel-dots li button {
      height: 8px;
      width: 8px;
      margin: 0 4px;
    }

    .slide-item .ivu-carousel-dots li.ivu-carousel-active>button {
      width: 24px;
      border-radius: 4px;
    }
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .content{
    max-width: 1920px;
    margin:auto;
    // min-height: 400px;
    .banner {
      background: url(~@/assets/images/livecasino/live_banner_bg.png) no-repeat left top;
      img{
        margin-top:-5px;
      }
    //   height: 515px;
    //   overflow: hidden;
    //   margin-top: -3px;
    //     .img-contenter{
    //       width:100%;
    //       height: 518px;
    //       overflow: hidden;
    //       background:red url(~@/assets/images/livecasino/live_casino_banner.png) no-repeat center top;
    //       background-size:1920px 518px;
        }
    // }

    .swiper-container{
      width: 100%;
      background: url(~@/assets/images/livecasino/live_banner_bg.png) no-repeat left top;
      background-size: cover;
      overflow: hidden;
    }
    .carousel-3d-container{
      height: 459px;
      width: 100%;
      margin: 80px auto 64px;
    }
    // @media screen and (max-width: 1300px) {
    //    .swiper-container{
    //       width: 100%;
    //       height: 720px;
    //    }
    //    .carousel-3d-container{
    //       transform: scale(5/6);
    //       transform-origin:50% 50%;
    //       margin:0;
    //     }
    //   }
    .carousel-3d-slide{
      border: 5px solid #fcac6e;
      box-shadow: 0 2px 10px #000;
      img{width: 100%;height: 100%;display:blcok;}
      .nav-item-model{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        margin: 0;
        display: none;
      }
      figcaption {
        text-align: center;
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        padding-top: 260px;
        display: none;
        .txt{
          height: 46px;
          line-height: 46px;
          font-size: 46px;
          text-align: center;
          margin-bottom: 20px;
          color: #fff;
        }
        .mask-button {
          margin-top: 50px;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          width: 180px;
          border-radius: 5px;
          background: linear-gradient(to bottom, #fccc81, #fcac6e);
          font-weight: 900;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }
      }
      &:hover{
        .nav-item-model{
          display: block;
        }
        figcaption{
          display: block
        }
      }
    }
    .carousel-3d-container figure {
      margin:0;
    }
    .dots{
      position: relative;
      top:-20px;
      ul{
        text-align: center;
        li{
          display: inline-block;
          width: 11px;
          height: 11px;
          border: 1px solid #cccccc;
          border-radius: 6px;
          margin: 0 9px;
          &.active{
            width: 12px;
            height: 12px;
            border: 0;
            background: #f8b24d;
          }
        }
      }
    }
  }
</style>
