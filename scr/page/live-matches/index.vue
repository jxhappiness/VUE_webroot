<template>
<div class="app">
  <v-header></v-header>
  <div class="container-wrap">
    <div class="container">
      <div class="logo"></div>
      <div class="live-container">
        <div class="video-container">
          <video src="" v-if='vedioSrc'></video>
          <img class="vedio-bg" :src='videoBg' v-if='!vedioSrc'>
        </div>
        <div class="slide-container">
          <ul class="slide">
            <li v-for="(item,index) in slideTitle" :key="index" @click='selectActive(index)' :class="{active:index === selectIndex}">
              <img :src="item.img" alt="" class="icon" v-if='item.img'>
              <span class="txt">{{item.txt}}</span>
            </li>
          </ul>
          <div class="content">
            <div v-for='(item,index) in slideContent' :key="index" class="block-item">
              <img :src='item.img' alt="">
              <p>
                <span>{{item.txt1}}</span>
                <span>{{item.txt2}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
export default {
  name: 'liveMatches',
  data() {
    return {
      selectIndex:0,
      videoBg: require("../../assets/images/live_matches/video_bg.png"),
      vedioSrc: '',
      slideTitle: [{
          img: '',
          txt: '正在直播'
        },
        {
          img: require("../../assets/images/live_matches/football.png"),
          txt: '足球'
        },
        {
          img: require("../../assets/images/live_matches/basketball.png"),
          txt: '篮球'
        },
        {
          img: require("../../assets/images/live_matches/video.png"),
          txt: '综合'
        }
      ],
      slideContent: [{
          img: require("../../assets/images/live_matches/pic2.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic3.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic4.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic5.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic4.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic5.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic4.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        },
        {
          img: require("../../assets/images/live_matches/pic5.png"),
          txt1: '申花憾平鲁能七轮不胜',
          txt2: '王大雷超神曹赟定中柱',
        }
      ]
    }
  },
  methods: {
    selectActive(index){
      this.selectIndex = index;
    }
  }
}
</script>

<style lang="less" scoped>
.container-wrap {
    min-height: 500px;
    background: #f9f9f9 url("~@/assets/images/live_matches/live_matches_bg.png") no-repeat;
    background-size: 100% 100%;
    .container {
        width: 1200px;
        height: 552px;
        margin: 88px auto 95px;
        position: relative;
        .logo {
            width: 306px;
            height: 46px;
            background: url("~@images/live_matches/ManBetX.png") no-repeat;
            position: absolute;
            left: 0;
            top: -40px;
        }

        .live-container {
          display: flex;
          border-top:26px solid #f4f4f4;
          border-bottom:26px solid #f4f4f4;
          border-left:23px solid #f4f4f4;
          border-right:23px solid #f4f4f4 ;
          width: 1154px;
          height: 500px;
          .video-container {
            width: 780px;
            height: 500px;
            margin-right: 26px;
            img{
              width: 100%;
              height: 100%;
            }
            video{
              width: 100%;
              height: 100%;
            }
          }
          .slide-container {
            width: 348px;
            background: #fff;
            .slide{
              height: 43px;
              padding-top: 10px;
              box-sizing: border-box;
              display: flex;
              text-align: center;
              align-items: center;
              background: #fcfcfc;
              li{
                flex:1;
                height: 27px;
                line-height: 27px;
                border-right: 1px solid #dedede;
                padding: 0 10px;
                font-size: 16px;
                color: #000;
                border-bottom: 6px solid transparent;
                position: relative;
                &:last-child{
                  border-right:0;
                  img{
                    height: 19px;
                    vertical-align: middle;
                  }
                }
                &.active{
                  color: #f29f5d;
                  &::after{
                    content: '';
                    width: 100%;
                    height: 6px;
                    position: absolute;
                    left: 0;
                    bottom: -12px;
                    z-index: 999;
                    border-radius: 3px;
                    background: linear-gradient(to right, #ffce6d, #ff9a4e);
                  }
                }
                img{
                  width: 24px;
                  height: 24px;
                  vertical-align: text-bottom;
                }
                span{
                  flex:1;
                  text-align: center;
                }
              }
            }
            .content{
              padding-top:20px;
              padding-left: 13px;
              padding-right: 13px;
              padding-bottom: 13px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              height: 448px;
              box-sizing: border-box;
              overflow-y:auto;
              .block-item{
                width: 155px;
                background: #eee;
                margin-bottom: 13px;
                img{
                  display: block;
                  width: 100%;
                  height: 86px;
                }
                p{
                  box-sizing: border-box;
                  padding: 11px;
                  font-size: 12px;
                  span:first-child{
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  span:nth-child(2){
                    color: #9f9f9f;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
        }
    }
}
</style>
