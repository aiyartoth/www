import Vue from 'vue'
import Vuex from 'vuex'
import doubanAPI from './store_douban';

Vue.use(Vuex);

const state = {
  data: {
    name: '小明',
    age: '18'
  },
  projects: [
    {name: "水笔", time: "2017年11月9日14:26:37"}
  ]
};
const actions = {
  log_context(context) {
    console.log(context);
  },
  LOAD_PROJECT_LIST: function ({commit}) {
    let data = [
      {id: 0, name: "铅笔", time: "2017年11月9日10:22:29", complated: true},
      {id: 1, name: "钢笔", time: "2017年11月19日10:22:36", complated: false},
      {id: 2, name: "水笔", time: "2017年12月9日10:22:43", complated: false},
    ];
    commit('SET_PROJECT_LIST', {list: data});
  },
  ADD_NEW_PROJECT({commit}, data) {
    commit("ADD_PROJECT", {
      project: data
    })
  },
  TOGGLE_COMPLETED({commit}, {item}) {
    commit('UPDATE_PROJECT', {item: item});
  }
};
const mutations = {
  increment: function (state) {
    state.data.age++
  },
  SET_PROJECT_LIST: (state, {list}) => {
    state.projects = list;
  },
  ADD_PROJECT(state, {project}) {
    state.projects.push(project);
  },
  UPDATE_PROJECT(state, {item}) {
    let idx = state.projects.map(p => p.id).indexOf(item.id);
    state.projects.splice(idx, 1, item);
  }
};
const getters = {
  /**
   * 方法说明
   * @method 方法名
   * @param {参数类型} 参数名 参数说明
   * @param {参数类型} 参数名 参数说明
   * @return {返回值类型} 返回值说明
   */
  openProjects: state => {
    return state.projects.filter(project => !project.completed);
  }
};
/*export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});*/
export default new Vuex.Store({
  modules:{
    a:{state,actions,mutations,getters},
    b:{
      state:{
        bData:{
          name:"b小明",
          age:25
        }
      },
      mutations:{
        addAge(state){
          state.bData.age++;
        }
      }
    },
    doubanAPI
  }
})
