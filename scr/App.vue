<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  .app{
    max-width: 1920px;
    margin:auto;
    padding-top: 120px;
  }
  @media screen and (max-width: 1300px) {
    body{
      zoom: 5/6;
    }
  }
</style>
