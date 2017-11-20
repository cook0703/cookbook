<template>
  <div class="wrap">
   <div class="top">
		<a class="back" onclick="window.history.go(-1)"><img src="../../assets/images/back_a.png" alt=""></a>
		<h1>我的收藏</h1>
	 </div>			
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
     
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
</style>
