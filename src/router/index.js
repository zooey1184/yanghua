import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: ()=> import ('../pages/index.vue')
    },
    {
      path: '/photo',
      name: 'photo',
      component: ()=> import ('../pages/photo.vue')
    },
    {
      path: '/sort',
      name: 'sort',
      component: ()=> import ('../pages/sort.vue')
    },
  ]
})
