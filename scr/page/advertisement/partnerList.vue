<template>
  <div class="partner" :style="partner_bg">
    <div class="title">
      <!--<h3>-->
        <img src="../../assets/images/advertisement/hezuohuoban.png" alt="">
      <!--</h3>-->
      <!--<p>全球唯一四大顶级赛事赞助商</p>-->
    </div>
    <div class="sub_title">
      <div class="des">ManBetX拥有的亚洲市场，配合Borussia Dortmund的欧洲知名度，达到一个East to the West to the East的文化桥梁。一个合适的赞助商往往能与球迷、社区产生共鸣，提升参与度，构建和谐关系，与球迷群产生互动。这会让赞助商处于优势地位，让付出的投资有所收获，而不再仅仅是砸钱那么简单。这正是品牌最需要的。</div>
      <a href="javascript:void(0)">了解我们</a>
    </div>
    <ul class="partner_list">
      <li v-for="item in partnerList"
          :key="item.id">
        <img :src="item.imgUrl" alt="">
      </li>
      <div style="clear: both;"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "partnerList",
  data() {
    return {
      partner_bg:{
        background: `url(${require("../../assets/images/advertisement/docmap.png")}) no-repeat center center`
      },
      partnerList: [
        {
          id: 1,
          imgUrl: require("@images/advertisement/partner/1.png")
        },
        {
          id: 2,
          imgUrl: require("@images/advertisement/partner/2.png")
        },
        {
          id: 3,
          imgUrl: require("@images/advertisement/partner/3.png")
        },
        {
          id: 4,
          imgUrl: require("@images/advertisement/partner/4.png")
        },
        {
          id: 5,
          imgUrl: require("@images/advertisement/partner/5.png")
        },
        {
          id: 6,
          imgUrl: require("@images/advertisement/partner/6.png")
        },
        {
          id: 7,
          imgUrl: require("@images/advertisement/partner/7.png")
        },
        {
          id: 8,
          imgUrl: require("@images/advertisement/partner/8.png")
        },
        {
          id: 9,
          imgUrl: require("@images/advertisement/partner/9.png")
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.partner {
  width: 1200px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  .title {
    height: 160px;
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
      color: #333;
    }
  }
  .sub_title {
    text-align: center;
    .des{
      font-size: 16px;
      width: 750px;
      margin: 0 auto;
      background: url("../../assets/images/advertisement/yinhao.png") no-repeat left center;
      padding-left: 110px;
      text-indent: 20px;
      text-align: left;
      letter-spacing: 1px;
    }
    font-weight: 900;
    a {
      display: block;
      width: 135px;
      line-height: 35px;
      background-image: -webkit-linear-gradient(top, #fdd680 0%, #f1a160 100%);
      background-image: linear-gradient(-180deg, #fdd680 0%, #f1a160 100%);
      border-radius: 100px;
      margin: 40px auto 90px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      font-weight: 900;
    }
  }
  .partner_list {
    // padding: 0 25px;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
    li {
      // margin-right: 87.5px;
      margin-bottom: 20px;
      width: 240px;
      height: 166px;
      float: left;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      //border-radius: 50%;
      &:nth-child(1){
        margin-left: 120px;
      }
      // &:nth-of-type(5),
      // &:nth-of-type(10) {
      //   margin-right: 0;
      // }
      > img {
        // width: 100%;
        // height: 100%;
        //border-radius: 50%;
      }
    }
  }
}
</style>

