//示例
// const SELECTED_CITY='SELECTED_CITY';
const MALLSELECTED='MALLSELECTED';
const SORTID='SORTID';
const DETAILID='DETAILID';
export default{
	//示例
	// [SELECTED_CITY](state,data){
	// 	state.selectedCity=data.province.value+'-'+data.city.value
	// },
	[MALLSELECTED](state,data){
		state.mall_selected=data
	},
	[SORTID](state,data){
		state.sort_id=data
	},
	[DETAILID](state,data){
		state.detail_id=data
	}
}