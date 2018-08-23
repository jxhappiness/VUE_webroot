<template>
  <div class="exposure_media">
    <div class="live_box">
      <div class="title">
        <img src="../../assets/images/advertisement/live/title.png" alt="">
      </div>
      <ul class="live_list">
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
          imgUrl: require("@images/advertisement/live/1.png")
        },
        {
          id: 2,
          imgUrl: require("@images/advertisement/live/2.png")
        },
        {
          id: 3,
          imgUrl: require("@images/advertisement/live/3.png")
        },
        {
          id: 4,
          imgUrl: require("@images/advertisement/live/4.png")
        },
        {
          id: 5,
          imgUrl: require("@images/advertisement/live/5.png")
        },
        {
          id: 6,
          imgUrl: require("@images/advertisement/live/6.png")
        },
        {
          id: 7,
          imgUrl: require("@images/advertisement/live/7.png")
        },
        {
          id: 8,
          imgUrl: require("@images/advertisement/live/8.png")
        },
        {
          id: 9,
          imgUrl: require("@images/advertisement/live/9.png")
        },
        {
          id: 10,
          imgUrl: require("@images/advertisement/live/10.png")
        },
        {
          id: 11,
          imgUrl: require("@images/advertisement/live/11.png")
        },
        {
          id: 12,
          imgUrl: require("@images/advertisement/live/12.png")
        },
        {
          id: 13,
          imgUrl: require("@images/advertisement/live/13.png")
        },
        {
          id: 14,
          imgUrl: require("@images/advertisement/live/14.png")
        },
        {
          id: 15,
          imgUrl: require("@images/advertisement/live/15.png")
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
    .live_box {
      width: 1200px;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
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
      .live_list {
        li {
          //margin-bottom: 40px;
          height: 200px;
          width: 20%;
          overflow: hidden;
          float: left;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          > img {
            // max-width: 100%;
          }
        }
      }
    }
  }
</style>

