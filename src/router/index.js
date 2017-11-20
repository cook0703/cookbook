import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Recommend/HomePage'
import MyPage from '@/components/Mine/MyPage'
import MallPage from '@/components/Mall/MallPage'
import MallSearch from '@/components/Mall/MallSearch'
import MallDetail from '@/components/Mall/MallDetail'

//新增bin
import CookPage from '@/components/Recommend/CookPage.vue'
import CommentPage from '@/components/Recommend/CommentPage.vue'
import FoodListPage from '@/components/Recommend/FoodListPage.vue'



//我的关注
import MyAttention from '../components/Mine/MyAttention.vue'
import MyCookbook from '../components/Mine/MyCookbook.vue'
import MyCollection from '../components/Mine/MyCollection.vue'
import MyOrder from '../components/Mine/MyOrder.vue'
//MyDraft我的草稿
import MyDraft from '../components/Mine/MyDraft.vue'
//MyFeedback我的反馈
import MyFeedback from '../components/Mine/MyFeedback.vue'
import MySet from '../components/Mine/MySet.vue'


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
    //新增bin
    {
      path: '/cook',
      name: 'CookPage',
      component: CookPage
    },
    {
      path: '/comment',
      name: 'CommentPage',
      component: CommentPage 
    },
    {
      path: '/list',
      name: 'FoodListPage',
      component: FoodListPage 
    },
    //feifei
    {
      path: '/MyAttention',
      name: 'MyAttention',
      component: MyAttention
    },
    {
      path: '/MyCookbook',
      name: 'MyCookbook',
      component: MyCookbook
    },
    {
      path: '/MyCollection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/MyOrder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/MyDraft',
      name: 'MyDraft',
      component: MyDraft
    },
    {
      path: '/MyFeedback',
      name: 'MyFeedback',
      component: MyFeedback
    },
    {
      path: '/MySet',
      name: 'MySet',
      component: MySet
    }
  ]
})
