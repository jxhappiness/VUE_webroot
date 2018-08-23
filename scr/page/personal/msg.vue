<template>
  <div class="msg">
    <div class="form">
      <ul>
        <li :class="['btn',{on: on===index}]" @click="on = index" v-for="(item, index) in type">{{item}}</li>
      </ul>
      <div>
        <label for="">
          起止日期：
        </label>
        <DatePicker type="date" placeholder="选择开始日期" style="width: 150px; margin-right: 15px;"></DatePicker>
        <span class="line">-</span>
        <DatePicker type="date" placeholder="选择结束日期" style="width: 150px;margin:0 15px;"></DatePicker>
        <a href="javascript:void(0)" class="btn on">筛选</a>
      </div>
    </div>
    <section>
      <table class="tab" cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th> <span @click="checkAll" :class="['checkbox', {checked: checkedAll}]"></span> 主题</th>
            <th class="center">内容</th>
            <th class="center">日期</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data">
            <td>
               <span v-if="item.noRead" class="no-read"></span>
               <span v-if="item.isNew" class="new"></span>
                <span @click="item.isChecked = !item.isChecked" :class="['checkbox', {checked: item.isChecked}]"></span> {{item.theme}} <span class="line"></span>
            </td>
            <td>
                {{item.content}}<span class="line"></span>
            </td>
            <td>{{item.date}}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <footer style="text-align:center;">
      <Page :total="100"></Page>
    </footer>
  </div>

</template>

<script>
  import { getMessage } from "../../api/msg"
  export default {
    name: "msg",
    data() {
      return {
        on: 0,
        type: ["全部", "未读", "已读", "删除"],
        data: [
          {
            theme: '您的返水金额1.75已经发放',
            date: '2018/01/24   00:21:54',
            content: '结算期：2018/01/24，结算金额：1.75，已经发放到您的主账户，请查收，感谢您的参与！',
            isNew: false,
            noRead: true,
            isChecked: false
          },
          {
            theme: '您的返水金额1.75已经发放',
            content: '结算期：2018/01/24，结算金额：1.75，已经发放到您的主账户，请查收，感谢您的参与！',
            date: '2018/01/24   00:21:54',
            noRead: false,
            isNew: true,
            isChecked: false
          },
          {
            theme: '您的返水金额1.75已经发放',
            content: '结算期：2018/01/24，结算金额：1.75，已经发放到您的主账户，请查收，感谢您的参与！',
            date: '2018/01/24   00:21:54',
            noRead: true,
            isNew: true,
            isChecked:false
          }
        ]
      }
    },
    computed: {
      checkedAll () {
        return this.data.every(item => item.isChecked)
      }
    },
    methods: {
      checkAll() {
        const checked = this.checkedAll ;
        this.data.forEach(item => {
          item.isChecked = !checked;
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        getMessage();
      })
    }
  }
</script>

<style scoped lang="less">
  /deep/.ivu-date-picker{
    position: relative;
  }
  .msg {
    .on {
      background-image: linear-gradient(-180deg, #fece74 0%, #fc9957 100%);
      border: 0 !important;
      color: #fff;
      display: inline-block;
    }

    .btn {
      height: 40px;
      width: 84px;
      border: 1px solid #ddd;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
    }

    .form {
      height: 107px;
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ul {
        display: flex;
        li {
          .btn;
          margin-right: 30px;
        }
        li.on {
          .on;
        }
      }
    }

    /deep/ .ivu-input-icon-normal + .ivu-input {
      padding-right: 7px;
      width: 92%;
    }


    /deep/.ivu-input-icon{
      top: 5px;
    }

    .line {
      color: #dbd8d8;
    }
    footer {
      padding: 80px 0 60px;
    }
  }
  .tab{
    width: 100%;
    text-align: left;
    th, td{
      padding:0 20px;
    }
    th{
      height: 50px;
      background-color: #f2f2f2;
      color: #9b9b9b;
      font-size: 12px;
    }
    td:first-child{
      width: 300px;
    }
    td:last-child{
      width: 192px;
    }
    td{
      height: 60px;
      border-bottom: 1px solid #ededed;
      color: #a7a7a7;
      font-size: 11px;
      position: relative;
    }
    .new , .no-read{
      position: absolute;
      display: block;
    }
    .no-read{
      left: 0;
      top: 0;
      width: 36px;
      height: 36px;
      background-size: 100%;
      background: url("../../assets/images/personal/msg/noRead.png") no-repeat center;
    }
    .new{
      right: 6px;
      top: 0;
      background: url("../../assets/images/personal/msg/new.png") no-repeat center;
      width: 22px;
      height: 25px;
    }
    .checkbox {
      background-image: url("../../assets/images/personal/msg/default.png");
      width: 16px;
      height: 16px;
      display: inline-block;
      vertical-align: middle;
      margin:0 20px;
    }
    .checkbox.checked{
      background-image: url("../../assets/images/personal/msg/checked.png");
    }
    .line{
      border-right: 1px solid #ccc;
      height: 40px;
      display: block;
      position: absolute;
      right: 0;
      top: 10px;
    }
    .center{
      text-align: center;
    }
  }
</style>
