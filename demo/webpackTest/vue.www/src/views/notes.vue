<template>
  <div class="notes-wrap">
    <p>{{msg}}</p>
  </div>
</template>
<script>
import axios from 'axios';
import {printLog} from '@/assets/common/common.js';
let urlConfig =require('@/assets/config/url.js');
export default {
  mounted(){
    let _this=this;
    axios.post("/mock/vue_www/notes.php").then(function(response){
        console.log(typeof response,response);
        if(response.data.errcode==200){
          _this.msg=response.data.datas.content;
        }
        printLog(response);
    },function(response){
        printLog(response);
    })
  },
  data(){
    return {
      msg:""
    }
  },

}
</script>
