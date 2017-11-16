import Vue from 'vue';
import App from './app.vue';
import router from './router/router'
import store from './vuex/store'
// import $ from 'jquery'
// let $=require('jquery');
// require('babel-register');
console.log(router);
new Vue({
    el: "#app-main",
    router,
    store,
    render: h => h(App)
});