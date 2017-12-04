<template>
  <div id="home">
    <p class="show-message" v-html="showMessage" :class="{'bottom-cursor':!isComplete}"></p>
  </div>
</template>
<style lang="stylus">
.show-message
  margin 20px 0 0 50px
  // width 300px
  text-align left
  font-size 24px
  line-height 1.5
  font-family '楷体'
  span
    &:nth-of-type(2)
      color #F08080
.bottom-cursor
  &:after
    content '_'
    animation flashCursor 100ms infinite
@keyframes flashCursor
  0%
    opacity 1
  50%
    opacity 0
  100%
    opacity 1
</style>

<script>
import { printLog } from "@/assets/common/common.js";
export default {
  mounted() {
    let _this = this,
      index = 0,
      progress = 0;
    let str = _this.fullMessage;
    let clock = setInterval(function() {
      let current = str.substr(progress, 1);
      //虽然直接写非闭合的span在template中报错,不过通过v-html注入倒没问题
      if (current == "<") {
        progress = str.indexOf(">", progress) + 1;
      } else {
        progress++;
      }
      _this.showMessage = str.substring(0, progress);
      printLog(_this.showMessage);
      if (progress >= str.length) {
        clearInterval(clock);
        _this.isComplete = true;
      }
    }, 150);
  },
  data() {
    return {
      fullMessage: `<span>星辰之所以一一消失，</span><br/><span>是因为黎明即将到来。</span>`,
      showMessage: "",
      isComplete: false
    };
  },
  computed: {
    newStr: function() {
      return this.showMessage;
    },
    flashingCursor: function() {
      // return this.isComplete?"":
    }
  }
};
</script>

