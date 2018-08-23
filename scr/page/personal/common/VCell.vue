<template>
  <div class="item">
    {{label}}
    <slot>
      <Select size="small" v-model="model" style="width:200px">
        <Option v-for="item in list" :value="item[id] || item.value" :key="item[id] || item.value">{{ item[label] || item.label}}</Option>
      </Select>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'v_setting',
    data() {
      return {
        model: ''
      }
    },
    props: {
      label: String,
      list: Array,
      value: String,
      id: String,
      val: String
    },
    watch: {
      value(val) {
        this.model = val;
      },
      model(val) {
        this.$emit("input", val);
      }
    }
  }
</script>
<style scoped lang="less">
  .item {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: space-between;
    > div {
      width: 100px !important;
    }
    > div.btn {
      width: 74px !important;
      height: 24px;
      border: 1px solid #ddd;
      text-align: center;
      line-height: 24px;
      border-radius: 5px;
    }
  }
</style>
