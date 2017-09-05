import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/pages/index';
import BasicShapesPage from '@/pages/basicShapes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/basic-shapes',
      name: 'BasicShapes',
      component: BasicShapesPage
    }
  ]
})
