<template>
  <div class="app">
    <v-header></v-header>
    <div class="container">
      <div class="banner">
        <img src="~@/assets/images/game_img/banner1.png" width="100%" />
      </div>
      <div class="nav main-scale">
        <div
          :key="index"
          :class="[{active: item.active}]"
          @click="selectGameStation(index)"
          v-for="(item, index) in gameStationData">
          <!-- <img v-if="item.active" :src="require(`@/assets/images/game_img/${item.active_name}.png`)" />
          <img v-else :src="require(`@/assets/images/game_img/${item.name}.png`)" /> -->
          {{item.name}}游戏厅
        </div>
      </div>
      <!-- 只有 AG 游戏厅的样式不一样 -->
      <div class="content-container main-scale" v-if="gameStationData[3].active === true">
        <div class="content clearfix" style="marginLeft: 140px;">
          <!-- 游戏列表 -->
          <div
            class="content-content-large">
            <Game
              v-for="item in [1, 2, 3]"
              size="large"
              :hot="item === 1"
              :imgName="`${item}_ag`"
              :key="item"
              :width="571"
              :height="388"></Game>
          </div>
        </div>
      </div>
      <div class="content-container main-scale" v-else>
        <!-- 其他游戏厅的都复用一个 -->
        <div class="content clearfix">
          <!-- 左边的游戏分类导航 -->
          <div class="content-nav">
            <div class="nav-item" v-for="item in [0,1,2,3,4,5,6]" :key="item" @click="classifyActive = item">
              <img v-if="classifyActive === item" :src="require(`@/assets/images/game_img/classify${item}_active.png`)" />
              <img v-else :src="require(`@/assets/images/game_img/classify${item}.png`)" />
            </div>
          </div>
          <!-- 游戏列表 -->
          <div
            class="content-content">
            <Game
              v-for="item in [1,2,3,4,5,6,7,8,9,10]"
              :hot="item === 1"
              :imgName="item"
              :key="item"
              :width="330"
              :height="220"></Game>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Game from './game';

  export default {
    name: 'client',
    components: {
      Game,
    },
    data () {
      return {
        // 游戏厅数据
        gameStationData: [
          {
            name: 'pt',
            active_name: 'pt_active',
            active: true,
          }, {
            name: 'mg',
            active_name: 'mg_active',
            active: false,
          }, {
            name: 'bb',
            active_name: 'bb_active',
            active: false,
          }, {
            name: 'ag',
            active_name: 'ag_active',
            active: false,
          }, {
            name: 'nt',
            active_name: 'nt_active',
            active: false,
          }
        ],
        // 游戏分类
        classifyActive: 0,
      }
    },
    methods: {
      selectGameStation(index) {
        let data = this.gameStationData;
        data.map((value, i) => {
          if (index === i) {
            data[i].active = true;
          } else {
            data[i].active = false;
          }
        })
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .tx-center {
    text-align: center;
  }
  .container{
    max-width: 1920px;
    margin:auto;
    // min-height: 400px;

    // .banner {
      // height: 448px;
      // overflow: hidden;
      // width: 100%;
      // background: url(~@/assets/images/game_img/banner1.png) no-repeat center top;
      // background-size: 1920px 448px;
    // }

    .nav {
      height: 122px;
      padding-top: 50px;
      text-align: center;
      font-size: 0;

      > div {
        display: inline-block;
        height: 45px;
        line-height: 45px;
        width: 146px;
        border-radius: 6px;
        margin: 0 11px;
        text-align: center;
        // background: linear-gradient(to right, #eeeeee, #ffffff);
        background: #a2a1a5;
        font-weight: 900;
        box-shadow: 0 10px 20px #dadada;
        transition: transform .3s;
        cursor: pointer;
        color: #fff;
        font-size: 16px;
      }
      > div.active {
        // transform: scale(1.17, 1.17);
        // border-radius: 3px;
        background: linear-gradient(to bottom, #fcd184, #fca66b);
      }
    }

    .content-container {
      width: 1200px;
      margin: 0 auto;

      .content {
        margin-bottom: 70px;

        .content-nav {
          width: 100px;
          float: left;
          margin-right: 40px;

          .nav-item {
            width: 100px;
            height: 100px;
            background: #eee;
            border-radius: 5px;
            text-align: center;
            cursor: pointer;

            > img {
              width: 100%;
              height: 100%;
            }
          }
          .nav-item:not(:first-child) {
            margin-top: 25px;
          }
        }
        .content-content-large {
          float: left;
          font-size: 0;
        }
        .content-content {
          float: left;
          font-size: 0;
          width: calc(100% - 150px);
          .game{
            &:nth-child(3n){
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
