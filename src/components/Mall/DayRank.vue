<template>
  <div class='dayrank'>
  	<img src="http://site.meishij.net/p2/20160927/20160927113834_796.png" alt="">
  	<div :id='ran.goods_sample.id' v-if='so' @click='detailFn'>
  		<div><img :src="ran.goods_sample.goods_icon.big" alt=""></div>
  		<div>
  			<strong>{{ran.goods_sample.title}}</strong>
  			<p>{{ran.goods_sample.sub_title}}</p>
  			<span>已出售<span>{{ran.goods_sample.saleNum}}</span>件</span>
  			<div>{{ran.goods_sample.price_name}}￥<span>{{ran.goods_sample.price}}</span></div>  			
  		</div>
  	</div>
  	<div>
  		<div>
  			<div v-for='(item,index) in ran.goods_items' :id='item.id' v-if='so' @click='detailFn'>
	  			<div>{{index+2}}</div>
				<img :src="item.goods_icon.big" alt="">
				<p>{{item.title}}</p>
				<p>￥{{item.price}}</p>
	  		</div>
  		</div>
  	</div>
  	<div class="cover"></div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
  props:['ran','so'],
  name: '',
  data () {
    return {
     	
    }
  },
  methods:{
  	...mapActions([
  		'setDetailId'
  	]),
  	detailFn:function(){
  		this.setDetailId(event.currentTarget.id)
  		this.$router.push('/mall_detail')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.dayrank
	width pxtorem(710px)
	height pxtorem(620px)
	padding pxtorem(20px)
	background-color white
	position relative
	>img
		position absolute
		width pxtorem(100px)
		top pxtorem(-20px)
		left pxtorem(0)
	>div:nth-of-type(1)
		width pxtorem(710px)
		height pxtorem(288px)
		padding-bottom pxtorem(20px)
		overflow hidden		
		>div:nth-of-type(1)
			float left
			width pxtorem(288px)
			height pxtorem(288px)
			border-radius pxtorem(10px)
			overflow hidden
			>img
				display block
				width pxtorem(288px)
				height pxtorem(288px)
		>div:nth-of-type(2)
			float left
			margin-left pxtorem(20px)
			height pxtorem(288px)
			width pxtorem(402px)
			>strong
				display block
				font-size pxtorem(34px)
				width pxtorem(402px)
				height pxtorem(64px)
				line-height pxtorem(64px)
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				color #333
			>p
				color #999
				height pxtorem(68px)
				width pxtorem(402px)
				overflow hidden
				text-overflow ellipsis
				font-size pxtorem(24px)			
			>div:nth-of-type(1)
				width pxtorem(402px)
				height pxtorem(72px)
				color #ff4c39
				line-height pxtorem(72px)
				direction rtl
				font-size pxtorem(24px)
				>span
					font-size pxtorem(35px)
			>span
				display block
				height pxtorem(28px)
				line-height pxtorem(28px)
				font-size pxtorem(24px)
				color #999
				margin pxtorem(20px) 0 pxtorem(40px) 0
				>span
					color red
	>div:nth-of-type(2)
		width pxtorem(710px)
		height pxtorem(292px)
		padding-top pxtorem(20px)
		overflow-x scroll
		>div
			width pxtorem(1972px)
			height pxtorem(286px)
			overflow hidden
			>div
				width pxtorem(208px)
				height pxtorem(286px)
				margin-right pxtorem(10px)
				position relative
				float left
				>div
					position absolute
					left 0
					top 0
					width pxtorem(32px)
					height pxtorem(32px)
					background-color #eb6100
					text-align center
					line-height pxtorem(32px)
					color #f2f2f2
				>img
					display block
					width pxtorem(208px)
					height pxtorem(208px)
				>p:nth-of-type(1)
					width pxtorem(208px)
					height pxtorem(44px)
					padding-top pxtorem(6px)
					line-height pxtorem(44px)
					font-size pxtorem(24px)
					color #333
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
				>p:nth-of-type(2)
					width pxtorem(208px)
					height pxtorem(28px)
					text-align center
					line-height pxtorem(28px)
					color #ff4c39
	.cover
		width pxtorem(710px)
		height pxtorem(6px)
		position absolute
		background-color white
		bottom pxtorem(20px)
		left pxtorem(20px)
					
		
</style>
