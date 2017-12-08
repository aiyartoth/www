<template>
  <div id="nav-header">    
      <ul>
        <li> <router-link :to="{path:'/'}">Index</router-link> </li>
        <li> <router-link :to="{path:'/List'}">List</router-link> </li>
        <li> <router-link :to="{path:'/Notes'}">Notes</router-link> </li>
      </ul>
      <table class="logo-box">
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
      </table>
      
        
          
  </div>
</template>
<style lang="stylus" scoped>
@import '../assets/css/basic.styl'
#nav-header
  padding 15px
  font-family font-family
  overflow hidden
  ul
    float right
    overflow hidden
    margin-bottom 0
    li
      margin-bottom 0
      float left
      padding 0 40px
      font-size 24px
      line-height 2
.logo-box
  float right
  // margin 20px 0 0 20px
  width 48px
  height 48px
  // border-radius 50%
  overflow hidden
  transform rotate(45deg)
  transition opacity 2s
  tr:first-child
    td:first-child
      background #000
    td:last-child
      background #000088
  tr:last-child
    td:first-child
      background #008800
    td:last-child
      background #770077
  td
    &:hover
      opacity 0.5
</style>
<script>
export default {};
</script>


"T5
专业中级
（中级别）"


