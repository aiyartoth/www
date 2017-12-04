import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { printLog } from '../assets/common/common.js'
Vue.use(Vuex);

let cancelToken = axios.CancelToken;
let getClassifyDataSource = cancelToken.source()

let state = {
  tempData: { a: "test" }
};
let actions = {
  getClassifyData({ commit }, apiUrl) {
    printLog(apiUrl);
    if(getClassifyDataSource&&getClassifyDataSource.cancel){
      getClassifyDataSource.cancel('Operation canceld before new request!');
    }
    axios.get(apiUrl, { cancelToken:getClassifyDataSource.source }).then(function (response) {
      if (response.data.errcode == 200) {
        commit("fillingCurrentData", response.data.datas);
      }
    }, function (xhr, message, throwError) {
      printLog(xhr, message, throwError);
    }).catch(function (thrown) {
      printLog(thrown);
      if (axios.isCancel(thrown)) {
        printLog("Request canceled", thrown.message);
      } else {

      }
    });
  }
};
let mutations = {
  fillingCurrentData(state, data) {
    state.tempData = data;
  }
}
export default new Vuex.Store({
  state, actions, mutations
});