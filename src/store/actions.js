import axios from 'axios'
export default{
	//示例
	// setChosenSort({commit,state},data){
 //    		commit('CHOSENSORT',data)
 //  	},
 	setMallSelected({commit,state},data){
 		commit('MALLSELECTED',data)
 	},
 	setSortId({commit,state},data){
 		commit('SORTID',data)
 	},
 	setDetailId({commit,state},data){
 		commit('DETAILID',data)
 	},
}