/* 单个游戏的组件 */
<template>
  <div
    class="game"
    :style="{height: `${height}px`, width: `${width}px`, fontSize: `${size === 'large' ? 20 : 18}px`}"
    @mouseenter="active = true"
    @mouseleave="active = false">
    <img class="game-img" :src="require(`@/assets/images/game_img/game${imgName}.png`)" />
    <div
      :class="[{active: active}, 'mask']"
      :style="{height: `${height - 10}px`, width: `${width - 10}px`}">
      <div class="hot" v-if="hot">
        <img src="@/assets/images/game_img/hot.png" />
      </div>
      <p
        class="mask-title"
        :style="{marginTop: `${height/2-50}px`}">
        游戏名称{{imgName}}
      </p>
      <div class="mask-button-container">
        <div class="mask-button">进入游戏</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  props: {
    // 游戏内容的高度
    height: Number,
    // 游戏内容的宽度
    width: Number,
    // 标识尺寸
    size: String,
    // 图片名称(地址)
    imgName: [String, Number],
    // 是否为热门游戏
    hot: Boolean
  },
  data: function() {
    return {
      active: false
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>

  .game {
    position: relative;
    margin-right: 30px;
    margin-bottom: 30px;
    background: #fff;
    display: inline-block;

    .game-img {
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      border: 5px solid #fcac6e;
      display: none;

      &.active {
        display: block;
      }

      & > .hot {
        position: absolute;
        left: -1px;
        top: 0;
        width: 78px;
        height: 78px;

        & > img {
          width: 100%;
          height: 100%;
        }
      }

      & > .mask-title {
        font-weight: 900;
        color: #fff;
        text-align: center;
        margin-bottom: 30px;
      }
      & > .mask-button-container {
        text-align: center;

        .mask-button {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          width: 170px;
          border-radius: 5px;
          background: linear-gradient(to bottom, #fccc81, #fcac6e);
          font-weight: 900;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
</style>
