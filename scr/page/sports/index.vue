<template>
  <div class="app" :class="{'appNoLight':model}" :style="{'background-image': `url(${require('../../assets/images/sports/sportbg.png')})`}">
    <!-- <v-header></v-header> -->
    <div class="slide-container-wraper">
      <div class="content main-scale">
        <div class="slide-container" @click='slideclick' @mouseover="slideover" @mouseleave="slideleave">
          
          <div :style="slide3_bg" class="slide slide3" >
              <!-- 客户端1 -->
          </div>
          <div :style="slide1_bg" class="slide slide1" >
              <!-- 现场直播2 -->
          </div>
          <div :style="slide2_bg" class="slide slide2" >
              <!-- 新手注册3 -->
          </div>
        </div>
        <div class="maincontent">
          <div class="swichLight" :class="{'swichNoLight':model}" @click="changeModel"></div>
          <iframe id="main-frame" style="width: 100%; height: 820px;" name="main-frame" scrolling="no" frameborder="0" v-bind:src="modelPage"></iframe>
        </div>
      </div>
    </div>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
  export default {
    name: 'client',
    data () {
      return {
        active1: false,
        active2: false,
        active3: false,
        model:true,
        modelPage: 'http://sb-manx.prdasbbwla1.com/zh-cn/Sport/Index',
        bg: require("../../assets/images/sports/sportbg.png"),
        slide1: {
          bg: require("../../assets/images/sports/tab1.png"),
          bg_active: require("../../assets/images/sports/tab1-b.png"),
          bg_active_l: require("../../assets/images/sports/tab1-l.png"),
        },
        slide2: {
          bg: require("../../assets/images/sports/tab2.png"),
          bg_active: require("../../assets/images/sports/tab2-b.png"),
          bg_active_l: require("../../assets/images/sports/tab2-l.png"),
        },
        slide3: {
          bg: require("../../assets/images/sports/tab3.png"),
          bg_active: require("../../assets/images/sports/tab3-b.png"),
          bg_active_l: require("../../assets/images/sports/tab3-l.png"),
        }
      }
    },
    methods:{
      changeModel(){
        this.model = !this.model;

        this.modelPage = this.model 
        ? 'http://sb-manx.prdasbbwla1.com/zh-cn/Sport/Index'
        : 'https://xj-sb-asia-manx.prdasbbwla1.com/zh-cn/sports?sni=ib2lxxhost5xh4busdcv2vtx&thm=KZing2';
      },
      slideclick(e){
        if(e.target.className.indexOf('slide1') !== -1){
         this.$router.push({ path: '/live-matches' });
        }else if(e.target.className.indexOf('slide2') !== -1){
          this.$router.push({path:'/noviceTutorial'});
        }else{
          window.location.href = 'https://manx30.com/home/tutorial';
          // this.$router.push({path:''});
        }
      },
      slideover(e){
        if(e.target.className.indexOf('slide1') !== -1){
          this.active1 = true;
          this.active2 = false;
          this.active3 = false;
        }else if(e.target.className.indexOf('slide2') !== -1){
          this.active2 = true;
          this.active1 = false;
          this.active3 = false;
        }else{
          this.active3 = true;
          this.active1 = false;
          this.active2 = false;
        }
      },
      slideleave(){
        this.active2 = false;
        this.active1 = false;
        this.active3 = false;
      }
    },
    computed: {
      slide1_bg () {
        let img_bg;
        if (this.active1) {
          if(this.model){
            img_bg = this.slide1.bg_active
          } else {
            img_bg = this.slide1.bg_active_l;
          }
        } else {
          img_bg = this.slide1.bg
        }
       return { 
         "background-image": `url(${img_bg})`
       }
      },
      slide2_bg () {
        let img_bg;
        if (this.active2) {
          if(this.model){
            img_bg = this.slide2.bg_active
          } else {
            img_bg = this.slide2.bg_active_l;
          }
        } else {
          img_bg = this.slide2.bg
        }
       return {
         "background-image": `url(${img_bg})`
       }
      },
      slide3_bg () {
        let img_bg;
        if (this.active3) {
          if(this.model){
            img_bg = this.slide3.bg_active
          } else {
            img_bg = this.slide3.bg_active_l;
          }
        } else {
          img_bg = this.slide3.bg
        }
       return {
         "background-image": `url(${img_bg})`
       }
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.app{
  background-repeat: no-repeat;
  background-position: left top;

  &.appNoLight{
    background: #333;
    //  background-size: 100% 101%;
  }
  .slide-container-wraper{
    width: 100%;
    height: 949px;
    margin: auto;
    .content{
      width:1200px;
      height: 949px;
      margin: 0 auto;
      display: flex;
      .slide-container{
        margin-right: 30px;
        .slide{
          width: 100px;
          height: 100px;
          margin-top: 20px;
          text-align: center;
          margin: 30px 0;
          box-sizing: border-box;
          font-size: 18px;
          background-position: left top;
          background-size: 100px 100px;
          color: #fff;
          &:first-child{
            margin-top: 20px;
          }
        }
      }
      .maincontent{
        margin-top: 20px;
        width: 1070px;
        height: 846px;
        position: relative;
        .swichLight{
          cursor: pointer;
          width: 33px;
          height: 135px;
          background: url(~@images/sports/light.png) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          bottom: 50px;
          left: -33px;
          &.swichNoLight{
            background: url(~@images/sports/noLight.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>
