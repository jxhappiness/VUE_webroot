<template>
  <div class="app">
    <v-header></v-header>
    <div class="content">
       <div class="side">
         <Side />
       </div>
       <div class="main">
          <router-view></router-view>
       </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import Side from './components/Side.vue'
export default {
  name: 'about-us',
  components: { Side },
  methods: {
    toTop: function() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    this.toTop()
  }
}
</script>

<style lang="less" scoped>
  .app{
    position: relative;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 40px;
  }
  .side{
    float: left;
    width: 150px;
    box-shadow:0 0 10px #eee;
    margin-left: 2px;
    min-height: 500px;
  }
  .main {
    margin-left: 215px;
  }
  .side, .main{
    margin-bottom: -99999px; 
    padding-bottom: 99999px;
  }
</style>
