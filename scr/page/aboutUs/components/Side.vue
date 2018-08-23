<template>
  <div class="about-side">
    <div class="route-link" :class="{'route-active': routeName == 'question'}">
      <router-link :to="{name: 'question'}" class="route-li">新手帮助</router-link>
    </div>
    <div class="route-link" :class="{'route-active': routeName == 'contactUs'}">
      <router-link :to="{name: 'contactUs'}" class="route-li">联系我们</router-link>
    </div>
    <div class="route-link" :class="{'route-active': routeName == 'privacyPolicy'}">
      <router-link :to="{name: 'privacyPolicy'}" class="route-li">隐私政策</router-link>
    </div>
    <div class="route-link" :class="{'route-active': routeName == 'lotteryDuty'}">
      <router-link :to="{name: 'lotteryDuty'}" class="route-li">博彩责任</router-link>
    </div>
    <div class="route-link" :class="{'route-active': routeName == 'ruleItem'}">
      <router-link :to="{name: 'ruleItem'}" class="route-li">规则条款</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side',
  computed: {
    routeName: function() {
      return this.$route.name
    }
  }
}
</script>

<style lang="less" scoped>
  @color: #f5b966;
  .about-side {
    position: relative;
    padding: 25px 0;
  }
  .route-link {
    font-size: 18px;
    border-bottom: 2px solid #fff;
    text-align: center;
    margin: 0 25px 60px;
  }
  .route-li {
    line-height: 28px;
    &:hover {
      color: @color;
    }
  }
  .route-active {
    border-color: @color;
    .route-li {
      color: @color;
    }
  }
</style>
