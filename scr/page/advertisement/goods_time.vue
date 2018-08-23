<template>
  <div class="marvellousTime">
    <div class="marvellousImg" :style="good_times_bg"></div>
    <div class="marvellousContent">
      <div class="marvellousLeft">
        <!-- <div class="marvellousVideo" :style="{'background-image':'url('+video.url+')'}">
          <div class="play">
            <img  src="../../assets/images/replace_video/play.png" alt="">
          </div>
          <div class="time">10’21”</div>
        </div> -->
        <video class="marvellousVideo" :src="video.videoUrl" controls></video>
        <span class="marvellousText">{{video.text}}</span>
      </div>
      <ul class="marvellousRight">
        <li v-for="(item,index) in good_times" :key="index">
          <video class="liVideo" :src="item.videoUrl" controls></video>
          <!-- <div class="liVideo" :style="{'background-image':'url('+item.url+')'}">
            <img class="play" src="../../assets/images/replace_video/play.png" alt="">
            <div class="time">10’21”</div>
          </div> -->
          <span class="liText">{{item.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cpt-banner",
    data() {
      return {
        video: {
          url: require("../../assets/images/replace_video/video1.png"),
          videoUrl: "https://mv.492mbx.com/ada2541a6aff45dea1f09915bcf55be9/6321fb31a0db45ac8bd0222d8feaa2d5-d161c233884357cbc03a4720ad5ebda8-sd.mp4",
          text: "20180610 France VS United States"
        },
        good_times_bg:  {
          background: `url(${require("../../assets/images/advertisement/good_times.jpg")}) no-repeat center center`,
          "background-size": "auto 100%"
        },
        good_times: [
          {
            url: require("../../assets/images/replace_video/video2.png"),
            videoUrl: "https://mv.492mbx.com/3eaab170da764aa4889cfc75be362196/2e3f67d7b0eb474bbafc26a16ea3e40a-cbf49c40c6c355b852e2f089ed1f354b-sd.mp4",
            text: "意甲_20180429国际米兰VS尤文图斯",
          },
          {
            url: require("../../assets/images/replace_video/video3.png"),
            videoUrl: "https://mv.492mbx.com/26bacff450f44067a29572a9f8357279/09c0af8ae62c453d988f96b510bb81a2-78cd1cf3317a7ac2fd19157e14eb7fa0-sd.mp4",
            text: "西甲_20180430拉科鲁尼亚VS巴塞罗那（万博）",
          },
          {
            url: require("../../assets/images/replace_video/video3.png"),
            videoUrl: "https://mv.492mbx.com/212cad8109cb4e4aafad0f276d102561/cb5f41fb6103444ab252eb05925469de-4e4e9d8e9619a1e1a92d6acc7a96128f-sd.mp4",
            text: "西甲_20180520比利亚雷亚尔VS皇家马德里（万博）",
          },
          {
            url: require("../../assets/images/replace_video/video4.png"),
            videoUrl: "https://mv.492mbx.com/245e5fe777ad46fcae886ad6b93f88cd/c73514cd33154fcbb6f66cbdb15a49a4-b5f1505b013a4676fb6133dae815d863-sd.mp4",
            text: "20180610 Tunisia VS Spain",
          }
        ]
      }
    },
  }
</script>

<style scoped lang="less">
  @import "common";
  .marvellousTime {
    width: 100%;
    height: auto;
    .marvellousImg {
      width: 100%;
      height: 135px;
      background-size: auto 100%;
      margin-bottom: 30px;
    }
    .marvellousContent {
      width: 1200px;
      height: 500px;
      background-color: #ffffff;
      margin: 0 auto;
      .marvellousLeft {
        width: 637px;
        float: left;
        margin-right: 20px;
        .marvellousVideo {
          width: 100%;
          height: 360px;
          border-radius: 5px;
          text-align: center;
          font-size: 50px;
          position: relative;
        }
        .marvellousText {
          display: block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          color: #000000;
        }
      }
      .marvellousRight {
        width: 542px;
        float: left;
        li {
          float: left;
          width: 260px;
          height: 185px;
          position: relative;
          &:nth-of-type(1), &:nth-of-type(2) {
            margin-bottom: 20px;
          }
          &:nth-of-type(1), &:nth-of-type(3) {
            margin-right: 20px;
          }
          .liVideo {
            width: 260px;
            height: 145px;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 5px;
            position: relative;
          }
          .liText {
            width: 100%;
            height: 40px;
            display: block;
            font-size: 15px;
            line-height: 40px;
            color: #000000;
          }
        }
      }
    }
  }
</style>
