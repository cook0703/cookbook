import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
Vue.use(Vuex)

let state={
 	//存公共数据
 	mall_selected:0,
 	sort_id:'',
 	detail_id:''
}

export default new Vuex.Store({
state,
getters,
actions,
mutations
})