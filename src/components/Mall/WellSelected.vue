<template>
  <div class='well'>
  	<div v-for='item in arr' :id='item.id' class="items" @click='detailFn'>
  		<div><img :src="item.cover_img" alt=""></div>
  		<div>
  			<strong>{{item.title}}</strong>
  			<p>{{item.sub_title}}</p>
  			<div>
  				<span v-for='x in item.tags' :style="{background:x.color}">{{x.title}}</span>
  			</div>
  			<div>优选价￥<span>{{item.price}}</span></div>
  			<span>原价￥{{item.orign_price}}</span>
  		</div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
  name: '',
  data () {
    return {
     	arr:''
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
  },
  mounted:function(){
  	var that=this
  	axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword=&store_id=&gc_id=1076&page=4&per_page=&key=&order=').then(function(res){
  		that.arr=res.data.data.items.slice(0,4)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.well
	width pxtorem(750px)
	background-color white
	.items
		width pxtorem(710px)
		height pxtorem(288px)
		padding pxtorem(20px)
		overflow hidden
		border-bottom pxtorem(1px) solid #ccc
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
				height pxtorem(64px)
				line-height pxtorem(64px)
				overflow hidden
				width pxtorem(402px)
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
				height pxtorem(28px)
				margin-top pxtorem(14px)
				overflow hidden
				>span
					float right
					font-size pxtorem(23px)
					height pxtorem(28px)
					color white
					line-height pxtorem(28px)
					width pxtorem(74px)
					margin-left pxtorem(10px)
					text-align center
			>div:nth-of-type(2)
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
				width pxtorem(402px)
				height pxtorem(32px)
				line-height pxtorem(32px)
				direction rtl
				color #999
				text-decoration line-through
	.items:last-of-type
		border-bottom none
			
				
</style>
