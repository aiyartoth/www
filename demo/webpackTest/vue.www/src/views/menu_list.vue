<template>
  <div id="wrap"> 
    <!-- <header-nav></header-nav> -->
    <div class="nax-box cl">  
      <ul class="fl">  
        <template v-for="(item,key) in menuList">  
              <li @click="getTempData(key)" :class="item.classNames.join(' ')" class="item">{{item.name}}</li>
        </template>
        </ul>        
        <view-lists class="view-box" :temp_data="tempData"></view-lists>
      </div>     
  </div>
</template>
<style lang="stylus" scoped>
@import '../assets/css/basic.styl'
#wrap
  margin 0 auto
  min-width 1100px
  font-family font-family
  // font-family 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  font-size 20px
  line-height 1.2
  ul
    // padding-right 10px
    width 200px
    border-right 3px solid #000
    box-sizing border-box
    li
      padding 10px 10px 10px 0
      text-align right
      cursor pointer
      &:hover
        padding 10px 10px 10px 0
        color #fff
        background linear-gradient(to right, #fff 0%, #00BFFF 100%)
        border-right 10px solid #000
    .current-li
      padding 10px 10px 10px 0
      color #fff
      text-align center
      background linear-gradient(to right, #fff 0%, #00BFFF 100%)
      border-right 10px solid #000
  .view-box
    min-width 900px
    box-sizing border-box
    padding-left 250px
.fl
  float left
</style>
<script>
import { mapState, mapActions } from "vuex";
import viewLists from "@/components/view_lists.vue";
// import headerNav from "@/components/header_nav.vue";

export default {
  mounted() {
    $(".item:eq(0)").trigger("click");
  },
  data: function() {
    return {
      menuList: [
        {
          name: "HTML",
          url: "/mock/vue_www/html.json",
          classNames: []
        },
        {
          name: "CSS",
          url: "/mock/vue_www/css.json",
          classNames: []
        },
        {
          name: "JavaScript",
          url: "/mock/vue_www/javascript.json",
          classNames: []
        },
        {
          name: "stylus",
          url: "/mock/vue_www/stylus.json",
          classNames: []
        }
      ],
      liCurrentClassName: "current-li"
    };
  },
  components: {
    viewLists,
    // headerNav
  },
  computed: {
    ...mapState(["tempData"])
  },
  methods: {
    ...mapActions(["getClassifyData"]),
    getTempData(key) {
      var _this = this;
      this.$store.dispatch("getClassifyData", this.menuList[key].url);
      this.menuList.forEach(function(v, k) {
        var index = v.classNames.indexOf(_this.liCurrentClassName);
        if (key === k) {
          index < 0 ? v.classNames.push(_this.liCurrentClassName) : "";
        } else {
          index < 0 ? "" : v.classNames.splice(index, 1);
        }
      });
    }
  }
};
</script>
