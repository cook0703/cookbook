<template>
  <div class="wrap">
   <div class="top">
		<a class="back" onclick="window.history.go(-1)"><img src="../../assets/images/back_a.png" alt=""></a>
		<h1>设置</h1>
	 </div>	
	 <div class="content">
			<ul>
				<li>足迹</li>
				<li>绑定账号
					<img src="../../assets/images/qq.png" alt="">
					<img src="../../assets/images/wechat.png" alt="">
					<img src="../../assets/images/microblog.png" alt="">
					<img src="../../assets/images/phone.png" alt="">					
				</li>
				<li>2G/3G/4G网络下显示图片
					<!-- <mt-switch v-model="value" @change='changeFn'>开关</mt-switch> -->
				</li>
				<li>消息设置</li>
				<li>意见反馈</li>
				<li>把美食杰推荐给朋友</li>
				<li>给美食杰评分</li>
				<li>检查更新<span>V7.5.2</span></li>
				<li>清除缓存<span>0B</span></li>
				<li>关于我们</li>
				<li>服务热线<span>6006-921-622</span></li>
			</ul>
		<div class="footer">
			<strong >退出当前账号</strong>
		</div>
	 </div>		
  </div>
</template>

<script>
// import Vue from 'vue'
// import { Switch } from 'mint-ui';
// Vue.component(Switch.name, Switch);
export default {
  name: '',
  data () {
    return {
    	value:false
    }
  },
  methods:{
  	changeFn:function(){
  			console.log(this.value)
  }
  }
}
</script>
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
	.top
			height pxtorem(100px)
			border-bottom pxtorem(1px) solid #c8c6c6
			a
				img
					margin-top pxtorem(20px)
			h1
				position absolute
				top 0
				left pxtorem(350px)
				text-align center
				font-size pxtorem(37px)
				line-height pxtorem(94px)
	.content
		ul
			li
				overflow hidden
				height pxtorem(90px)
				font-size pxtorem(34px)
				padding-left pxtorem(30px)
				line-height pxtorem(86px)
				span
					float right
					margin-right pxtorem(30px)
					color gray
			li:nth-child(1)
				border-top pxtorem(15px) solid #f2f2f2
				border-bottom pxtorem(15px) solid #f2f2f2
			li:nth-child(2)
				overflow hidden
				img
					padding-top 18px
					float right
					margin-right 20px
			li:nth-child(4)
				border-bottom pxtorem(15px) solid #f2f2f2		
	.footer
		width pxtorem(750px)
		height pxtorem(110px)
		text-align center
		position fixed
		bottom 0
		border-top pxtorem(60px) solid #f2f2f2
		strong
			font-size pxtorem(42px)
			line-height pxtorem(110px)
			color #fa5353
</style>