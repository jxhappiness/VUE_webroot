<template>
  <div>
    <li class="nav-item" @mousemove="handleMouseEnter(item.id)" @mouseleave="handleMouseLeave">
      <div class="nav-img">
        <img :src="require(`@images/lottery_img/${item.imgUrl}.png`)" alt="" v-if="swtichId != item.id">
        <img :src="require(`@images/lottery_img/${item.hoverImg}.png`)" alt="" v-else>
        <div class="wave-box" v-if="swtichId == item.id">
          <div class="wave-one"></div>
          <div class="wave-two"></div>
          <div class="wave-three"></div>
        </div>
      </div>
      <dl class="nav-tips">
        <dt v-text="item.name"></dt>
        <dd v-text="item.tips" :class="{active: swtichId == item.id}"></dd>
      </dl>
    </li>
  </div>
</template>

<script>
export default {
  name: 'navList',
  props: ['content', 'switchId'],
  data: function() {
    return {
      item: this.content,
      swtichId: this.switchId
    };
  },
  methods: {
    handleMouseEnter(id) {
      this.swtichId = id;
      this.$emit('itemMouseMove', id);
    },
    handleMouseLeave() {
      this.swtichId = '';
      this.$emit('itemMouseLeave', '');
    }
  }
};
</script>

<style lang="less" scoped>
.nav-item {
  height: 500px;
  width: 355px;
  .nav-img {
    position: relative;
    width: 325px;
    height: 325px;
    border-radius: 50%;
    margin: 0 auto;
    > img {
      height: 100%;
    }
  }
  .nav-tips {
    position: relative;
    > dt {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      width: 150px;
      height: auto;
      background: #fff;
      font-size: 30px;
      text-align: center;
      font-weight: 900;
      z-index: 99;
    }
    > dd {
      width: 330px;
      position: absolute;
      top: 22.5px;
      height: 133px;
      border: 1px solid #fff4e3;
      border-radius: 8px;
      padding: 30px 25px 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      font-size: 16px;
      color: #999999;
    }
    > dd.active {
      border-color: #fece74;
    }
  }
}
.wave-box{
  position: absolute;
  left: 50%;
  top: 50%;
  width:70%;
  height:70%;
  border-radius:50%;
  -webkit-transform:translate(-50%,-50%);
  transform:translate(-50%,-50%);
  -moz-transform:translate(-50%,-50%);
  -o-transform:translate(-50%,-50%);
  overflow:hidden;
}
.wave-one{
  animation: 5s linear 0s normal none infinite rotate;
  -webkit-animation:5s linear 0s normal none infinite rotate;
  -moz-animation:5s linear 0s normal none infinite rotate;
  -o-animation:5s linear 0s normal none infinite rotate;
  background-color:#fdcd7e;
  width: 100%;
  height: 100%;
  border-radius:100px;
  left: -3%;
  position:absolute;
  bottom:-48%;
  opacity:.45;
  z-index:10;
}
.wave-two{
  animation: 4s linear 0s normal none infinite rotate;
  -webkit-animation:4s linear 0s normal none infinite rotate;
  -moz-animation:4s linear 0s normal none infinite rotate;
  -o-animation:4s linear 0s normal none infinite rotate;
  background-color:#fdcd7e;
  width: 100%;
  height: 100%;
  border-radius:100px;
  position:absolute;
  left: -10%;
  bottom:-55%;
  opacity:.3;
  z-index:10;
}
.wave-three{
  animation: 6s linear 0s normal none infinite rotate;
  -webkit-animation:6s linear 0s normal none infinite rotate;
  -moz-animation:6s linear 0s normal none infinite rotate;
  -o-animation:6s linear 0s normal none infinite rotate;
  background-color:#fdcd7e;
  width: 100%;
  height: 100%;
  border-radius:100px;
  position:absolute;
  left: 10%;
  bottom:-55%;
  opacity:.4;
  z-index:10;
}

@-webkit-keyframes rotate{
  from{-webkit-transform:rotate(0deg)}
  to{-webkit-transform:rotate(360deg)}
}
@-moz-keyframes rotate{
  from{-moz-transform:rotate(0deg)}
  to{-moz-transform:rotate(360deg)}
}
@-ms-keyframes rotate{
  from{-ms-transform:rotate(0deg)}
  to{-ms-transform:rotate(360deg)}
}
@-o-keyframes rotate{
  from{-o-transform:rotate(0deg)}
  to{-o-transform:rotate(360deg)}
}
</style>
