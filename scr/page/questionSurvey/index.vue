<template>
  <div class="app surver">
    <div class="survey-bg">
      <img src="@/assets/images/survey/survey_bg.png" class="survey-pic"/>
    </div>
    <div class="question-content">
      <div class="content-select" v-show="currSep == 1">
        <div class="title">
          <span class="title-number">01</span>
          <span class="title-text">您从哪种渠道了解到本公司的 ?<b>*</b></span>
        </div>
        <div class="question-select">
          <div class="radio-li">
            <input type="radio" value="A" v-model="selectOne" class="radio-style"/>
            <label for="A">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="B" v-model="selectOne" class="radio-style"/>
            <label for="B">B.大型社区论坛</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="C" v-model="selectOne" class="radio-style"/>
            <label for="C">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="d" v-model="selectOne" class="radio-style"/>
            <label for="D">D.大型社区论坛</label>
          </div>
        </div>
      </div>

      <div class="content-select" v-show="currSep == 2">
        <div class="title">
          <span class="title-number">02</span>
          <span class="title-text">您从哪种渠道了解到本公司的 ?<b>*</b></span>
        </div>
        <div class="question-select">
           <div class="radio-li">
            <input type="radio" value="A" v-model="selectTwo" class="radio-style"/>
            <label for="A">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="B" v-model="selectTwo" class="radio-style"/>
            <label for="B">B.大型社区论坛</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="C" v-model="selectTwo" class="radio-style"/>
            <label for="C">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="d" v-model="selectTwo" class="radio-style"/>
            <label for="D">D.大型社区论坛</label>
          </div>
        </div>
      </div>

      <div class="content-select" v-show="currSep == 3">
        <div class="title">
          <span class="title-number">03</span>
          <span class="title-text">您从哪种渠道了解到本公司的 ?<b>*</b></span>
        </div>
        <div class="question-select">
           <div class="radio-li">
            <input type="radio" value="A" v-model="selectThree" class="radio-style"/>
            <label for="A">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="B" v-model="selectThree" class="radio-style"/>
            <label for="B">B.大型社区论坛</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="C" v-model="selectThree" class="radio-style"/>
            <label for="C">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="radio-li">
            <input type="radio" value="d" v-model="selectThree" class="radio-style"/>
            <label for="D">D.大型社区论坛</label>
          </div>
        </div>
      </div>

      <div class="content-select" v-show="currSep == 4">
        <div class="title">
          <span class="title-number">04</span>
          <span class="title-text">您从哪种渠道了解到本公司的 ?<b>*</b></span>
        </div>
        <div class="question-select">
           <div class="checkbox-li">
            <input type="checkbox" value="A"  class="checkbox-style"/>
            <label for="A">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="checkbox-li">
            <input type="checkbox" value="B"  class="checkbox-style"/>
            <label for="B">B.大型社区论坛</label>
          </div>
          <div class="checkbox-li">
            <input type="checkbox" value="C"  class="checkbox-style"/>
            <label for="C">A.球衣胸前广告/赛场广告</label>
          </div>
          <div class="checkbox-li">
            <input type="checkbox" value="d"  class="checkbox-style"/>
            <label for="D">D.大型社区论坛</label>
          </div>
        </div>
      </div>

      <div class="content-select" v-show="currSep == 5">
        <div class="title">
          <span class="title-number">05</span>
          <span class="title-text">您从哪种渠道了解到本公司的 ?<b>*</b></span>
        </div>
        <div class="question-select">
          <textarea class="quest-textarea" ></textarea>
        </div>
      </div>

      <div class="content-select" v-show="currSep == 6">
        <div class="title">
          <span class="title-number">06</span>
          <span class="title-text">您的姓名是 ?<b>*</b></span>
        </div>
        <div class="question-select">
          <input type="text" class="quest-input"  />
        </div>
      </div>

      <div class="content-select" v-show="currSep == 7">
        <div class="title">
          <span class="title-number">07</span>
          <span class="title-text">您的手机号是 ?<b>*</b></span>
        </div>
        <div class="question-select">
          <input type="text" class="quest-input" />
        </div>
      </div>

      <div class="surver-footer">
        <button class="surver-button" @click="handleNext">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-survey',
  data () {
    return {
      currSep: 1,
      selectOne: '',
      selectTwo: '',
      selectThree: ''
    }
  },
  methods: {
   handleNext() {
     if(this.currSep < 7) {
       this.currSep = this.currSep + 1
     }
   } 
  }
}
</script>

<style lang="less" scoped>
.surver {
  position: relative;
  background-color: #f8f8f8;
}
.survey-bg { margin-bottom: -5px;}
.survey-pic {
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
}
.question-content {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.content-select {
  padding: 60px 100px 40px;
  border: 1px solid #fff;
  background-color: #fff;
}
.activeStep {
  border-color: #e6e6e6;
  background-color: #fffdf8;
}
.title {
  padding-bottom: 20px;
}
.title-number {
  font-size: 30px;
  width: 50px;
  font-weight: 900;
}
.title-text, .title-number {
  display: inline-block;
  height: 34px;
}
.title-text {
  font-size: 20px;
  line-height: 48px;
  b { color: red; }
}
.radio-li, .checkbox-li{
  margin: 0 35px;
  border: 1px solid #fffdf8;
  height: 60px;
  padding-left: 20px;
  line-height: 60px;
  position: relative;
}
.radio-li > label, .checkbox-li> label {
  display: inline-block;
  vertical-align: middle;
}

.radio-style + label::before {
  content: "\a0"; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #e6e6e6;
  line-height: 20;
  margin-right: 10px;
}
.radio-style:checked + label::before {
  border: 6px solid #f8b24d;
}
.radio-style {
  display: inline-block;
  position: absolute;
  top: 24px;
  left: 21px;
  opacity: 0;
}

.radio-style {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.radio-style:checked {
  background-color: #f8b24d;
  font-size:#f8b24d;
}

.checkbox-style {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 6px;
  position: relative; 
  &:before {
    content:'';  
    position: absolute;  
    top: 0;  
    left: 0;  
    width: 18px;  
    height: 18px;  
    line-height:18px;  
    text-align: center;  
    color:white;  
    font-size:16px;  
    background-color:#fff;
    border: 1px solid #e7e7e7;
  }
  &:checked::before {
    border-radius: 2px;
    line-height: 16px;
    background-color: #f8b24d;
    border-color: #f8b24d;
    color:white; 
    content: '✓';
  }
}

.active-border {
  border-color: #f8d24b;
}

.quest-textarea {
  width: 100%;
  height: 175px;
  border: 1px solid #e6e6e6;
}
.quest-input {
  display: inline-block;
  width: 290px;
  height: 60px;
  line-height: 60px;
  padding-left: 3px;
  border: 1px solid #e6e6e6;
  margin-bottom: 100px;
  margin-top: 40px;
}
.quest-textarea:focus, .quest-input:focus {
  border-color: #f8b24d;
}
.surver-footer {
  padding-bottom: 60px;
  background-color: #fff;
  text-align: center;
}
.surver-button {
  font-size: 18px;
  cursor: pointer;
  color: #fff;
  height: 52px;
  line-height: 52px;
  padding: 0 92px;
  border: 0;
  border-radius: 8px;
  background-color: #feb063;
  outline:0 none !important;
  background: -webkit-linear-gradient(#fece74, #fc9956);
  background: -o-linear-gradient(#fece74, #fc9956);
  background: -moz-linear-gradient(#fece74, #fc9956);
  background: linear-gradient(#fece74, #fc9956);
}
</style>


