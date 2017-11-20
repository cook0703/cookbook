<template>
  <div class="wrap">
   <div class="top">
		<a class="back" onclick="window.history.go(-1)"><img src="../../assets/images/back_a.png" alt=""></a>
		<h1>我的订单</h1>
	 </div>
	 <div class="whole">
	 		<!-- <ul>
	 			<li>全部</li>
	 			<li>待付款</li>
	 			<li>待发货</li>
	 			<li>待收货</li>
	 			<li>待评价</li>
	 		</ul> -->
	 		<ul>
	 			<li v-for='(item,index) in wholeArr' @click='wholeFn(index)'>{{item.name}}</li>
	 		</ul>
	 </div>			
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    	iscur:1,
     	wholeArr:[
     		 {name:"全部"},
         {name:"待付款"},
         {name:"待发货"},
         {name:"待收货"},
         {name:"待评价"}	
     	]
    }
  },
  methods:{
  		wholeFn:function(index){
    		console.log(index)            
   }
  }
}
</script>
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
	.top
		height pxtorem(88px)
		border-bottom pxtorem(1px) solid #c8c6c6
		a
			img
				margin-top pxtorem(18px)
		h1
			position absolute
			top 0
			left pxtorem(300px)
			font-size pxtorem(36px)
			line-height pxtorem(88px)
	.whole
		width 750px
		ul
			height 84px	
			display flex
			border-bottom 1px solid gray
			li
				flex 1
				text-align center
				font-size pxtorem(28px)
				color #4e4c4c
				line-height pxtorem(80px)
</style>