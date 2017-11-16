import axios from 'axios';
import {p} from '../common/log';

let doubanApi = axios.create({
  baseURL: "https://api.douban.com/"
});
const state = {};
const actions = {
  get_data({commit}) {
      doubanApi.get("/v2/movie/coming_soon").then(function (responseData) {
        p("get /v2/movie/coming_soon success:");
        p(responseData);
      },function (error,message,throwError) {
        p("get /v2/movie/coming_soon error:");
        p(error);
        p(message);
        p(throwError);
      });
  }
};
export default {state,actions};