import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Recommend/HomePage'
import MyPage from '@/components/Mine/MyPage'
import MallPage from '@/components/Mall/MallPage'
import MallSearch from '@/components/Mall/MallSearch'
import MallDetail from '@/components/Mall/MallDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/mall',
      name: 'MallPage',
      component: MallPage
    },
    {
      path: '/mine',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/mall_search',
      name: 'MallSearch',
      component: MallSearch
    },
    {
      path: '/mall_detail',
      name: 'MallDetail',
      component: MallDetail
    },
  ]
})
