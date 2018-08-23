<template>
  <div class="exposure_media" :style="media_bg">
    <div class="media_box">
      <div class="title">
        <!--<h3>曝光媒体</h3>-->
        <!--<p>强势媒体支持资讯权威最新</p>-->
        <img src="../../assets/images/advertisement/baoguangmeiti.png" alt="">
      </div>
      <ul class="media_list">
        <li v-for="item in mediaList"
            :key="item.id">
          <img :src="item.imgUrl" alt="">
        </li>
        <div style="clear: both;"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mediaList',
  data () {
    return {
      media_bg: {
        background: `url(${require("../../assets/images/advertisement/media_bg.png")}) no-repeat center bottom`
  },
      mediaList: [
        {
          id: 1,
          imgUrl: require("@images/advertisement/media/1.png")
        },
        {
          id: 2,
          imgUrl: require("@images/advertisement/media/2.png")
        },
        {
          id: 3,
          imgUrl: require("@images/advertisement/media/3.png")
        },
        {
          id: 4,
          imgUrl: require("@images/advertisement/media/4.png")
        },
        {
          id: 5,
          imgUrl: require("@images/advertisement/media/5.png")
        },
        {
          id: 6,
          imgUrl: require("@images/advertisement/media/6.png")
        },
        {
          id: 7,
          imgUrl: require("@images/advertisement/media/7.png")
        },
        {
          id: 8,
          imgUrl: require("@images/advertisement/media/8.png")
        },
        {
          id: 9,
          imgUrl: require("@images/advertisement/media/9.png")
        },
        {
          id: 10,
          imgUrl: require("@images/advertisement/media/10.png")
        },
        {
          id: 11,
          imgUrl: require("@images/advertisement/media/11.png")
        },
        {
          id: 12,
          imgUrl: require("@images/advertisement/media/12.png")
        },
        {
          id: 13,
          imgUrl: require("@images/advertisement/media/13.png")
        },
        {
          id: 14,
          imgUrl: require("@images/advertisement/media/14.png")
        },
        {
          id: 15,
          imgUrl: require("@images/advertisement/media/15.png")
        },
        {
          id: 16,
          imgUrl: require("@images/advertisement/media/16.png")
        },
        {
          id: 17,
          imgUrl: require("@images/advertisement/media/17.png")
        },
        {
          id: 18,
          imgUrl: require("@images/advertisement/media/18.png")
        },
        {
          id: 19,
          imgUrl: require("@images/advertisement/media/19.png")
        },
        {
          id: 20,
          imgUrl: require("@images/advertisement/media/20.png")
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .exposure_media {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 20px;
    .media_box {
      width: 1200px;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
      padding-bottom: 80px;
      .title {
        // height: 120px;
        margin-top: 20px;
        h3 {
          font-size: 30px;
        }
        p {
          font-size: 16px;
          color: #333;
        }
      }
      .media_list {
        li {
          //margin-bottom: 40px;
          width: 20%;
          height: 200px;
          overflow: hidden;
          float: left;
          // display: flex;
          // align-content: flex-end;
          // justify-content: center;
          position: relative;
          // text-align: center;
          > img {
            //max-width: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
</style>

