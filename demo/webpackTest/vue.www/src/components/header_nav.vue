<template>
  <div id="nav-header">
      <ul>
        <li> <router-link :to="{path:'/'}">Index</router-link> </li>
        <li> <router-link :to="{path:'/List'}">List</router-link> </li>
        <li> <router-link :to="{path:'/Notes'}">Notes</router-link> </li>
      </ul>
  </div>
</template>
<style lang="stylus" scoped>
@import '../assets/css/basic.styl'
#nav-header 
  font-family font-family
  ul
    overflow hidden
    margin-bottom 0
    li
      margin-bottom 0
      float left 
      padding 0 40px
      font-size 24px
      line-height 2
</style>
<script>
export default {};
</script>
