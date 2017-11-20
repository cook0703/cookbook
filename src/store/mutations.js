//示例
// const SELECTED_CITY='SELECTED_CITY';
const MALLSELECTED='MALLSELECTED';
const SORTID='SORTID';
const DETAILID='DETAILID';
const COMMENT = 'COMMENT';//评论
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
	},
	//评论
	[COMMENT](state,data){
		var arr = state.commentArr;
		for(var i=0;i<state.commentArr.length;i++){
			arr[i].time=(state.commentArr[i].time)+1;
		}
		arr.unshift(data);
		state.commentArr = arr;
	}
}