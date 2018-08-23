<template>
  <div class="checkbox-wrap">
    <p class="title">{{label}}</p>
    <div class="flex clearfix">
      <div :class="['checkbox', {choose: item.choose}]" v-for="(item, index) in list"  @click="choose(item,index)">
        {{item[val] || item.label}}<span></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'v_setting',
    data() {
      return {
      }
    },
    props: {
      label: String,
      list: Array,
      value: String,
      id: String,
      val: String
    },
    methods: {
      choose(item, index) {
        this.$set(this.list[index], 'choose', !this.list[index].choose);
      }
    },
  }
</script>
<style scoped lang="less">
  .checkbox-wrap {
    .title {
      padding-top: 12px;
    }
    .flex {
      width: 100%;
      .checkbox {
        padding-top: 8px;
        float: left;
        width: 33.33%;
        span {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: middle;
          margin-left: 5px;
          border-radius: 50%;
          cursor: pointer;
          /*border: 1px solid #ccc;*/
          background-image: url("../../../assets/images/personal/msg/default.png");

        }
      }
      .checkbox.choose span{
        background-image: url("../../../assets/images/personal/msg/checked.png");
      }
    }
  }
</style>
