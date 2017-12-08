import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>require(['../views/Home.vue'],resolve)
    },
    {
      path: '/List',
      name: 'menu-nav',
      component: resolve=>require(['../views/menu_list.vue'],resolve)
    },
    {
      path: '/Notes',
      name: 'notes',
      component: resolve=>require(['../views/notes.vue'],resolve)
    },
    {
      path: '*',
      name: 'index',
      component: resolve=>require(['../views/Home.vue'],resolve)
    }
  ]
})
