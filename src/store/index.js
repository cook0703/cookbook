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
 	detail_id:'',
 	
 	//评论
 	commentArr:[
 		{name:"小机枪",src:require("../assets/img/phto1.png"),time:3,txt:"好好吃"},
 		{name:"小通通",src:require("../assets/img/phto2.png"),time:5,txt:"做的很好吃"},
 		{name:"小机枪",src:require("../assets/img/phto1.png"),time:6,txt:"好好吃"},
 		{name:"小通通",src:require("../assets/img/phto2.png"),time:13,txt:"做的很好吃"},
 		{name:"小机枪",src:require("../assets/img/phto1.png"),time:23,txt:"好好吃"},
 		{name:"小通通",src:require("../assets/img/phto2.png"),time:30,txt:"做的很好吃"}
 	]
}

export default new Vuex.Store({
state,
getters,
actions,
mutations
})