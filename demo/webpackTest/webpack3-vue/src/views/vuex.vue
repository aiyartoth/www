<template>
  <div id="vuex-test">
    <h1>{{msg}}</h1>
    <h1>{{data}}</h1>
    <h1>{{projects}}</h1>
    <h1>{{bData}}</h1>
    <!--<pre>{{data}}</pre>-->
    <p class="show-data"></p>
    <button @click="log()">测试button</button>
    <button @click="addProject()">添加商品</button>
    <button @click="$store.dispatch('log_context')">打印vuex中action的context</button>
    <button @click="increment()">小明的年龄+1</button>
    <button @click="addAge()">b小明的年龄+1</button>
    <br>
    <button @click="get_data()">获取豆瓣数据</button>

    <br>
    <router-view></router-view>
  </div>
</template>
<style scoped lang="stylus">
  #vuex-test
    font-size 20px

  h1
    font-size 30px
    font-weight bold

  p
    font-size 20px
    line-height normal

</style>
<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

  export default {
    mounted() {
      this.$store.dispatch('LOAD_PROJECT_LIST');
    },
    data: function () {
      return {
        msg: "Vuex测试页面"
      }
    },
    computed: {
      /*data: function () {
          let str = "";
//                return this.$state.data.age;
          for (let i in this.$store.state.data) {
              str += i + ":" + this.$store.state.data[i] + "<br/>";
          }
          console.log(str);
          return $("<div/>").html(str).text();
      },*/
//      ...mapState(['data', 'projects'])
      ...mapState({
        data: state => state.a.data,
        projects: state => state.a.projects,
        bData: state => state.b.bData,
      })
    },
    methods: {
      ...mapActions(["log_context","get_data"]),
      ...mapMutations(["increment", "addAge"]),
      log() {
        console.dir(this.$store.state.data);
        console.log(mapState(['data', 'projects']));
        console.log(mapState({data: state => state.data, projects: state => state.projects}));
        console.log(...mapState(['data', 'projects']).data);
//                this.$options.methods.a(...mapState(['data','projects']));
//                this.$options.methods.a(mapState(['data','projects']));
      },
      a() {
        console.log(arguments)
      },
      addProject() {
        this.$store.dispatch('ADD_NEW_PROJECT', {
          id: 3,
          name: "圆珠笔",
          time: "2017年11月9日15:04:46",
          complated: false
        })
      }

    }
  };
</script>