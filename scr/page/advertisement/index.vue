<template>
  <div class="app">
    <v-header></v-header>
    <div class="content">
      <v-banner :active.sync="active"></v-banner>
      <div class="">
        <v-report :active.sync="active"></v-report>
        <v-time :active.sync="active"></v-time>
        <v-partner></v-partner>
        <v-live></v-live>
        <v-media></v-media>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vPartner from "./partnerList.vue";
  import vMedia from "./mediaList.vue";
  import vLive from "./liveList.vue";
  import vBanner from "./banner"
  import vTime from "./goods_time"
  import vReport from "./report"
  export default {
    name: "client",
    components: {
      vPartner,
      vMedia,
      vLive,
      vBanner,
      vTime,
      vReport
    },
    data() {
      return {
        active: 0,
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "common";
  .content {
    overflow-x: hidden;
    min-height: 400px;
  }
</style>
