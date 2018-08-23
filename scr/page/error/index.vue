<template lang="html">
  <div class="error-content">
    <div class="txt">
       您的浏览器版本太低~~~~请下载下边的浏览器访问
    </div>
    <a href="http://browser.qq.com/">qq浏览器</a>
    <a href="http://rj.baidu.com/soft/detail/25718.html?ald">谷歌浏览器</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.error-content{
  width: 1200px;
  margin:200px auto;
  .txt{
    text-align: center;
    font-size: 20px;
  }
  a{
    display: block;
    font-size: 24px;
    color: red;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
