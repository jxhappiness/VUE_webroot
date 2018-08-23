<template>
  <div class="advBanner">
    <template  v-for="(item, index) in banners" v-if="active === index">
      <img :src="item.bg" class="bannerImg">
      <div class="des">
        <div class="b-left">
          <img :src="item.des" alt="">
        </div>
        <!-- <div class="suspension" :style="{'background-image':'url('+item.videoUrl+')'}"> -->
          <video class="suspension" :src="item.videoUrl" controls></video>
          <!-- <div class="play">
            <video class="liVideo" :src="item.videoUrl" controls></video>
            <img  src="../../assets/images/replace_video/play_yellow.png" alt="">
            <span class="btn btn-banner">立即播放</span>
          </div>
          <div class="text">{{item.videoText}}</div>
          <div class="time">{{item.time}}</div> -->
        <!-- </div> -->
        <ul class="navs">
          <li @click="choose(index)" v-for="(nav, index) in navs" :class="{on: active ===index}">
            <span>{{nav}}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "cpt-banner",
  data () {
    return {
      banners: [
        {
          bg: require("../../assets/images/advertisement/banner1.png"),
          des: require("../../assets/images/advertisement/b_des1.png"),
          videoUrl: "https://mv.492mbx.com/c43dacf18d784a70b102895ac4798518/751c6d7178224f94807518b7f5cd4782-4353edbe9a6efbccf801f5df956f353b-sd.mp4",
          videoText: "水晶宫足球俱乐部宣布万博成为新球衣胸前赞助商",
          time: "10’21”"
        },
        {
          bg: require("../../assets/images/advertisement/banner3.png"),
          des: require("../../assets/images/advertisement/b_des2.png"),
          videoUrl: "https://mv.492mbx.com/f49e34177c7845179fd508914c304a1e/2a69b100e74b41e0ad2775ca36faa870-f3d3f33467741ea911c4c460d14deb89-sd.mp4",
          videoText: "水晶宫足万博成为新球衣胸前赞助商",
          time: "11’21”"
        },
        {
          bg: require("../../assets/images/advertisement/banner3.png"),
          des: require("../../assets/images/advertisement/b_des3.png"),
          videoUrl: "https://mv.492mbx.com/04f87d4111464997ab7db7957a6852ce/0be72e736cfa4ed8a1aba3b7a0160bea-cada1356f40ee0c64388e19a78f40f83-sd.mp4",
          videoText: "水晶宫足为新球衣胸前赞助商",
          time: "10’00”"
        },
        {
          bg: require("../../assets/images/advertisement/banner3.png"),
          des: require("../../assets/images/advertisement/b_des3.png"),
          videoUrl: "https://mv.492mbx.com/04f87d4111464997ab7db7957a6852ce/0be72e736cfa4ed8a1aba3b7a0160bea-cada1356f40ee0c64388e19a78f40f83-sd.mp4",
          videoText: "水晶宫足球俱乐部宣布万博赞助商",
          time: "9’21”"
        },
        {
          bg: require("../../assets/images/advertisement/banner5.png"),
          des: require("../../assets/images/advertisement/b_des5.png"),
          videoUrl: "https://mv.492mbx.com/61f43643dc7f46eeb5df810150fed0d8/5837b47cf2c4491e8cf5051e3fcc9dac-cb240578accbfabbd000c27f65c03e1a-sd.mp4",
          videoText: "英超第哈德斯菲尔德",
          time: "01’21”"
        }
      ],
      navs: ["英超水晶宫", "意甲联赛", "西甲皇马客场广告", "西甲巴萨客场广告", "斯诺克2018威尔士公开赛"]
    }
  },
  props: ["active"],
  methods: {
    choose (index) {
      this.$emit("update:active", index)
    }
  }
}
</script>

<style scoped lang="less">
@import "common";

.advBanner {
  width: 100%;
  position: relative;
  img.bannerImg {
    height: 536px;
  }
  .des {
    position: absolute;
    width: 1200px;
    height: 536px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    .b-left {
      position: absolute;
      top: 138px;
      left: 29px;
      .sponsor_des {
        color: #d1d1d3;
        font-weight: bold;
        font-size: 30px;
        line-height: 1;
        padding-left: 10px;
      }
    }
    .suspension {
      width: 550px;
      height: 350px;
      border-radius: 5px;
      position: absolute;
      right: 0;
      top: 57px;
      font-size: 30px;
      text-align: center;
    }
  }
}
.navs {
  position: absolute;
  text-align: center;
  bottom: 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  width: 100%;
  li {
    cursor: pointer;
    span {
      padding: 0 40px;
      font-size: 20px;
    }
  }
  li.on span {
    display: inline-block;
    color: #f5c681;
    border-bottom: 3px solid #f5c681;
  }
}
.btn-banner {
  position: absolute;
  bottom: -13px;
}

.text {
  font-size: 14px;
  color: #fff;
  position: absolute;
  left: 20px;
  bottom: 10px;
}
</style>
