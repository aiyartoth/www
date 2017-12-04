<template>
  <div id="view-lists-wrap">
    <!-- <p>{{temp_data}}</p> -->
    <ul class="lists">
      <template v-for="(item,key) in temp_data">
        <li class="item" @click="openNewPage(item.link)">{{item.name}}</li>
        <li class="item" @click="openNewPage(item.link)">{{item.name}}</li>        
      </template>
    </ul>
  </div>
</template>
<style lang="stylus" scoped>
@import '../assets/css/basic.styl'
.lists
  text-align left
.item
  display inline-block
  font-family font-family
  font-size 24px
  line-height 44px
  height 44px
  box-sizing border-box
  border-bottom 4px solid black
  font-weight bold
  cursor pointer
</style>
<script>
import {printLog,animateCss,randomAnimateStyle} from "@/assets/common/common.js";
var urlConfig = require("@/assets/config/url.js");
// var animateClassNames=["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello"];
export default {
  props: ["temp_data"],
  mounted() {
    $("#view-lists-wrap .item").hover(function() {
      // animateCss($(this),"bounce");
      randomAnimateStyle($(this));
    },function(){});
    $("#view-lists-wrap .item").on("click",function(){
      console.log(1111);
      return false;
    });
    $("#view-lists-wrap .item").on("click",function(){
      console.log(222);
      return false;
    });
  },
  data() {
    return {
      msg: "子菜单"
    };
  },
  methods: {
    openNewPage(url) {
      window.open(urlConfig.demoServer + url);
    }
  }
};
</script>

