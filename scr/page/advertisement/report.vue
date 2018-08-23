<template>
  <div class="record">
    <div class="recordImg" :style="recordImg">
    </div>
    <div class="recordContent" :style="recordContent">
      <div class="report_detail">
        <div class="report_left">
          <ul>
            <li :class="{on:activeList===index}" @click="choose(index)" v-for="(item, index) in lists" :key="index">{{item}}</li>
          </ul>
          <div class="show" @click="all = !all">
            {{all?"收起":"展开全部"}}
            <img :class="{turn:all}" src="../../assets/images/advertisement/triangle.png" alt="">
          </div>
        </div>
        <div class="report_right">
          <div class="marvellousVideo" v-if="active===4" :style="{'background-image':'url('+video.url+')'}">
            <div class="play">
              <img src="../../assets/images/replace_video/play.png" alt="">
              <span class="btn">立即播放</span>
            </div>
            <div class="time">10’21”</div>
          </div>
          <div v-else class="marvellousVideo">
            <div class="title">
              <p>2017-08-12 星期六</p>
              <p>02:45</p>
            </div>
            <div class="move">
              <div class="opt"><img @click="slidePrev" src="../../assets/images/advertisement/btnLeft.png" height="82"
                                    width="26"/></div>
              <div class="moveCont">
                <swiper :options="swiperOption" ref="mySwiper">
                  <swiper-slide v-for="i in advertismentList" :key='i'>
                    <div class="moveCont-t">
                      <div>
                      <span>
                      <img src="../../assets/images/advertisement/report1.png" height="47" width="48"/>
                      </span>
                        <p>塞维利亚</p>
                      </div>
                      <div>
                        <span class="yuan">22</span>
                        <span class="yuan2">:</span>
                        <span class="yuan">22</span>
                      </div>
                      <div>
                      <span><img src="../../assets/images/advertisement/report2.png" height="55" width="36"/>
                      </span>
                        <p>巴塞罗那</p>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
                <div class="moveCont-b">
                  <span @click="toogle(index)" :class="{addActive:index===addActive}" v-for="(nav,index) in navs" :key="index"
                        class="">{{nav}}</span>
                </div>
              </div>
              <div class="opt"><img @click="slideNext" src="../../assets/images/advertisement/btnRig.png" height="80"
                                    width="26"/></div>
            </div>
            <div class="joinLog">
              <img src="../../assets/images/advertisement/icon-h1.png" height="18" width="75"/>
              <img src="../../assets/images/advertisement/icon-h1.png" height="18" width="75"/>
              <img src="../../assets/images/advertisement/icon-h2.png" height="20" width="59"/><img
              src="../../assets/images/advertisement/icon-h3.png" height="24" width="78"/>
            </div>
          </div>
        </div>
      </div>
      <div class="videobox">
        <div class="opt"><img @click="slidePrevVideo" src="../../assets/images/advertisement/btnLeft.png" height="80"
                              width="26"/></div>
        <div class="moveCont">
          <swiper :options="swiperOptionVideo" ref="mySwiperVideo">
            <swiper-slide v-for="(item,index) in mediaListAfter" :key='index'>
                <div class="videoItem">
                  <video class="videoChild" v-for="(itemChild,indexChild) in item" :key='indexChild' :src="itemChild.videoUrl" controls></video>
                </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="opt"><img @click="slideNextVideo" src="../../assets/images/advertisement/btnRig.png" height="80"
                              width="26"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import sport1 from './sport1.json';
import sport2 from './sport2.json';
import sport3 from './sport3.json';
export default {
  name: "report",
  data () {
    return {
      activeList: 0,
      list: ["第01场", "第02场", "第03场", "第04场", "第05场", "第06场", "第07场", "第08场", "第09场", "第10场", "第11场", "第12场", "第13场", "第14场", "第15场"],
      video: {
        url: require("../../assets/images/replace_video/video1.png"),
        text: "英超第1轮 水晶宫VS哈德斯菲尔德"
      },
      all: false,
      recordImg: {
        background: `url(${require("../../assets/images/advertisement/report.jpg")}) no-repeat center center`
      },
      recordContent: {
        backgroundImage: `url(${require("../../assets/images/advertisement/report_bg.jpg")})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      },
      mediaList: [
        {
          id: 1,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "	https://mv.492mbx.com/70e01ae2904c4e51bac9e29d6e62ad7e/650a0b3cd28547cf880f0c240f138839-892d9a77185d5d388f2acdfb753f9cca-sd.mp4"
        },
        {
          id: 2,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "	https://mv.492mbx.com/a35f9373fa634f63862e56ae63dd44af/6b316ac8af374726a7ca8421f95a5211-112d197e0cb0c565247f94d998132418-sd.mp4"
        },
        {
          id: 3,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/476f80b2e9984e718f00e1480e8aa190/051fc8f49c454db294ae391dd4976838-0674833df98c2509f472d0196e1cf29e-sd.mp4"
        },
        {
          id: 4,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/3eaab170da764aa4889cfc75be362196/2e3f67d7b0eb474bbafc26a16ea3e40a-cbf49c40c6c355b852e2f089ed1f354b-sd.mp4"
        },
        {
          id: 5,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/c1e21dd111f64563af592b12478ce4c5/64c20b6d5abb4f75aff5a60d6c2965aa-485eca3732466d604af875bdd9b891df-sd.mp4"
        },
        {
          id: 6,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/4996e211607f43149db6150402e82f3d/bfa9164533034b048e2c0b2e7a36e917-99f7d4d24ab8a9382ff4520d18c1676a-sd.mp4"
        },
        {
          id: 7,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/212cad8109cb4e4aafad0f276d102561/cb5f41fb6103444ab252eb05925469de-4e4e9d8e9619a1e1a92d6acc7a96128f-sd.mp4"
        },
        {
          id: 8,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/f014e4cdd1d6482f8748c8f5c09236c0/527b2cb030dc45848624840ced3524ba-067aa456daccb4011dd8d19f0869a138-sd.mp4"
        },
        {
          id: 9,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: " https://mv.492mbx.com/5286055883c24c8f8919884ecce0afc7/7ca4880d6e524c18a04f87a5bc08495c-72b03a0d94aca817664f0a941beb6e07-sd.mp4"
        },
        {
          id: 10,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/26bacff450f44067a29572a9f8357279/09c0af8ae62c453d988f96b510bb81a2-78cd1cf3317a7ac2fd19157e14eb7fa0-sd.mp4"
        },
        {
          id: 11,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/f014e4cdd1d6482f8748c8f5c09236c0/527b2cb030dc45848624840ced3524ba-067aa456daccb4011dd8d19f0869a138-sd.mp4"
        },
        {
          id: 12,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/a470aaaa4b724491abf2335792f875b4/54a6bac2427d4c38b37acd0c10824a53-5eb98f5521842b050c8b4bbde0acfdb5-sd.mp4"

        },
        {
          id: 13,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/c2edb2fc6bee4066ac84e25e15a9f1b7/0e9538731dcc4f73987f6e236c4cb6ab-2ab10e79d17dc939b893458f58e0d7ed-sd.mp4"
        },
        {
          id: 14,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/0edfe8b9da7044ac9a3f2a1a2abe9c8c/533dcb4a64ee4c89ba931f5ef96a90c4-f74cd935b39b74e59902ba753e4e964c-sd.mp4"
        },
        {
          id: 15,
          imgUrl: require("@images/replace_video/video2.png"),
          videoUrl: "https://mv.492mbx.com/a395fc5cd3404e30a6dfce02164317f2/2097714bf6294883abb33bf9980ae2eb-2bd52a8bcc54afd1fa8ef4aafe1c3eee-sd.mp4"
        }
      ],
      addActive: 0,
      advertismentList:[],
      navs: ["集锦", "前瞻", "战报"],
      swiperOption: {
        autoplay: true,
        loop: true
        // effect : 'flip',
      },
      swiperOptionVideo: {
        autoplay: false,
        loop: true
        // effect : 'flip',
      }
    }
  },
  props: ["active"],
  methods: {
    choose (index) {
      this.activeList = index;
    },
    toogle (index) {
      this.addActive = index;
    },
    slidePrev () {
      this.swiper.slidePrev();
    },
    slideNext () {
      this.swiper.slideNext();
    },
    slidePrevVideo () {
      this.$refs.mySwiperVideo.swiper.slidePrev();
    },
    slideNextVideo () {
      this.$refs.mySwiperVideo.swiper.slideNext();
    }
  },
  computed: {
    lists () {
      if (!this.all) {
        return this.list.slice(0, 6)
      } else {
        return this.list
      }
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    mediaListAfter () {
      let n = 3;
      let len = Math.ceil(this.mediaList.length / n);
      let res = [];
      for (let i = 0; i < len; i++) {
        let temp = this.mediaList.slice(i * n, i * n + n);
        res.push(temp);
      }
      return res;
    }
  },
  mounted(){
   this.advertismentList = this.advertismentList.concat(sport1).concat(sport2).concat(sport2);
    console.log(this.advertismentList);
  }
}
</script>

<style scoped lang="less">
@import "common";

.record {
  width: 100%;
  height: auto;
  .recordImg {
    width: 100%;
    margin: 0 auto;
    height: 162px;
    font-size: 30px;
    background: #ffffff;
    background-size: auto 100%;
  }
  .recordContent {
    width: 100%;
    height: both;
    background-size: cover;
    .report_detail {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      .report_left {
        width: 660px;
      }
      .report_right {
        display: flex;
        justify-content: flex-end;
        width: 540px;
        height: 404px;
      }
      ul {
        width: 660px;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 90px;
          box-sizing: border-box;
          text-align: center;
          line-height: 50px;
          height: 50px;
          border-radius: 20px;
          border: 2px solid #f4bc6e;
          color: #f4bc6e;
          cursor: pointer;
          display: inline-block;
          margin-right: 15px;
          margin-bottom: 30px;
        }
        li.on {
          background-image: linear-gradient(#fdd680 0%, #f1a160 100%);
          color: #fff;
        }
      }
    }
  }
}

.show {
  display: block;
  width: 100px;
  color: #fff;
  margin: 0 auto;
  padding-top: 10px;
  cursor: pointer;
}

.marvellousVideo {
  width: 543px;
  height: 306px;
  background-size: cover;
  position: relative;
  text-align: center;
}

.turn {
  transform: rotate(180deg);
}

.title {
  p {
    color: #fff;
    &:first-child {
      font-size: 20px;
    }
    &:last-child {
      font-size: 30px;
      padding-bottom: 50px;
    }
  }
}

.move,
.videobox {
  width: 490px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  .moveCont {
    width: 320px;
  }
  .moveCont-t {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    > div {
      text-align: center;
      > span {
        height: 72px;
        display: inline-block;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
      }
      p {
        color: #fff;
        font-size: 16px;
        margin-top: 20px;
      }
    }
    .yuan {
      width: 40px;
      height: 72px;
      display: block;
      line-height: 72px;
      background: #fff;
      text-align: center;
      border-radius: 8px;
      float: left;
      font-size: 24px;
    }
    .yuan2 {
      color: #fff;
      font-size: 26px;
      font-weight: 900;
      float: left;
      line-height: 72px;
      width: 24px;
      text-align: center;
      display: inline-block;
    }
  }
  .moveCont-b {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    > span {
      width: 82px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: #fff;
      border-radius: 20px;
      display: inline-block;
      cursor: pointer;
    }
    .addActive {
      background-image: linear-gradient(#fdd680 0%, #f1a160 100%);
      color: #fff;
    }
  }
}
.videobox {
  width: 1200px;
  padding: 20px 0;
  .videoItem {
    width: 1200px;
    .videoChild {
      float: left;
      width: 390px;
      height: 200px;
      margin-right: 10px;
    }
  }
  .moveCont {
    width: 100%;
  }
  .opt {
    box-sizing: border-box;
    padding-top: 40px;
    img {
      cursor: pointer;
    }
  }
}
.joinLog {
  width: 408px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin: 74px auto 0;
}

.opt {
  box-sizing: border-box;
  padding-top: 20px;
  img {
    cursor: pointer;
  }
}
</style>
