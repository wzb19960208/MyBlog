import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import list from '@/components/article/List'
import page from '@/components/article/Page'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path : '/',
      name : 'home',
      component : home
    },
    {
      path : '/:type/:id',
      name : 'list',
      component : list
    },
    {
      path : '/:type/:id/:page',
      name : 'page',
      component : page
    }
  ]
})
