<template>
  <div class="slide-item-2-1">
    <!-- <div class="slide1" :class="{animationStart3: carouselIndex === 0}"></div> -->
    <div class="phone">
      <div class="phone-border"></div>
      <div class="keep-out"></div>
      <div class="slider-wrapper" @mousemove="imageWrapMove" @mouseout="imageWrapOut" ref="imageWrap">
        <div ref="imgLeft" :style="{transition: transitionStyle, width: separateLeft + 'px'}" class="imgLeft">
          <img src="@/assets/images/client/left_03.png" alt="" >
        </div>
        <div :style="{transition: transitionStyle}" ref="imgRight" class="imgRight">
          <img src="@/assets/images/client/right_03.png" alt="">
        </div>
        <div class="divider-bar" :style="{transition: transitionStyle, left: separateLeft + 'px'}" ref="divider" style=""></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      separateLeft: 145,
      transitionStyle: 'all 0.3s',
      viewWidth: 0
    }
  },
  mounted(){
    this.viewWidth = document.documentElement.clientWidth;
  },
  methods: {
    imageWrapMove(e){
      var zoom = 5/6, offsetLeft = this.$refs.imageWrap.getBoundingClientRect().left, fullWidth = this.$refs.imageWrap.offsetWidth, mouseX;
      if(this.viewWidth < 1300){
        mouseX = e.pageX/zoom - offsetLeft;
      }else{
        mouseX = e.pageX - offsetLeft;
      }
      if(mouseX < 0) {
					mouseX = 0;
      } else if(mouseX > fullWidth) {
					mouseX = fullWidth
      }
      this.separateLeft = mouseX;
      this.transitionStyle = 'none';
    },
    imageWrapOut(){
      this.separateLeft = 145;
      this.transitionStyle = 'all 0.3s';
    }
  }
}
</script>

<style scoped>
  .slide-item-2-1 {
    width: 600px;
    height: 500px;
    position: relative;
  }
  .slide-item-2-1 .phone {
    width: 289px;
    padding: 10px 20px 0;
    height: 460px;
    position: absolute;
    bottom: 23px;
    left: 80px;
    /* transform: scale(0.86, 0.86); */
    animation-delay: 1.5s;
    background-size: cover;
    overflow: hidden;
  }

  .phone-border {
    background: url(~@/assets/images/client/kuang_03.png) no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    background-size: cover;
  }

  .slide-item-2-1 .phone .slider-wrapper {
    /* width: 350px; */
    height: 100%;
    border-radius: 5px;
    /* margin: 10px auto 0; */
    position: relative;
    overflow: hidden;
  }
  .slide-item-2-1 .phone .slider-wrapper .divider-bar{
    background: url(~@/assets/images/use_img/mid_03.png) no-repeat;
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 1000;
    width: 78px;
    height: 403px;
    margin-left: -39px;
    cursor: pointer;
  }
  .keep-out {
    height: 10px;
    background: #fff;
    position: absolute;
    width: 100%;
    left: 0;
    top: 10px;
    z-index: 998;
  }
  .slide-item-2-1 .phone .slider-wrapper .imgLeft, .slide-item-2-1 .phone .slider-wrapper .imgRight{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
  }
  .slide-item-2-1 .phone .slider-wrapper .imgRight{
    z-index: 1;
  }
  /* .slide-item-2-1 .phone .slider-wrapper img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  } */
.slide-item-2-1 .phone .slider-wrapper img:last-child{
  z-index: 1;
}
  .slide-item-2-1 .slide1 {
    width: 600px;
    height: 505px;
    background: url(~@/assets/images/use_img/t1.png) no-repeat;
    right: 25px;
    bottom: 14px;
    position: absolute;
    transform: scale(1.2, 1.1);
    animation-delay: 1.5s;
  }
</style>
