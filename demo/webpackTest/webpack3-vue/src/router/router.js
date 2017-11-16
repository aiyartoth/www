import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
let errcallback=function () {

};
export default new Router({
  mode: "history",
  routes: [
    /*{
      path: "/",
      component: resolve => require(['../views/home.vue'], resolve,errcallback,"HOME")
    },
    {
      path: "/vuex",
      component: resolve => require(['../views/vuex.vue'], resolve,errcallback,"vuex")
    },
    {
      path: "/bd_map",
      component: resolve => require(['../views/bd_map.vue'], resolve,errcallback,"bd_map")
    },
    {
      path: "*",
      component: resolve => require(['../views/home.vue'], resolve,errcallback,"*")
    }*/
    {
      path: "/",
      component: resolve => require(['../views/home.vue'], resolve)
    },
    {
      path: "/vuex",
      name:'vuex',
      component: resolve => require(['../views/vuex.vue'], resolve),
      children:[{
        path:":id",
        name:"vuex-child",
        component:resolve=>require(['../views/vuex.vue'],resolve)
      }]
    },
    {
      path: "/bd_map",
      component: resolve => require(['../views/bd_map.vue'], resolve)
    },
    {
      path: "*",
      component: resolve => require(['../views/home.vue'], resolve)
    }
    /*{
      path: "/",
      component: () => import('../views/home.vue')
    },
    {
      path: "/vuex",
      component: () => import('../views/vuex.vue')
    },
    {
      path: "/bd_map",
      component: () => import('../views/bd_map.vue')
    },
    {
      path: "*",
      component: () => import('../views/home.vue')
    }*/
  ]
});