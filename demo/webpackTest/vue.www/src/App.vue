<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
import headerNav from '@/components/header_nav.vue'
export default {
  name: "app",
  components:{
    headerNav
  }
};
</script>

<style lang="stylus">
body
  font-family 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  font-size 62.5%
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  img
    border 2px solid green
</style>
