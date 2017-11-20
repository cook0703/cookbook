<template>
  <div class='theme'>
  	<img v-for='item in themeArr'  :src="item.src" alt="" >
  	<div class="goodlist">
  		<div v-if='a'>
  			<div v-for='item in goodlist' :id='item.id' @click='detailFn'>
  				<img :src="item.cover_img" alt="">
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
  name: '',
  data () {
    return {
     	themeArr:[{'src':'http://site.meishij.net/data/upload/shop/home_lunbo/05569046060412936.jpg'},
     	{'src':'http://site.meishij.net/data/upload/shop/home_lunbo/05588152770293788.jpg'},
     	{'src':'http://site.meishij.net/data/upload/shop/home_lunbo/05639046844671654.jpg'},
     	{'src':'http://site.meishij.net/data/upload/cms/old_special/05470607962488344.jpg'}],
     	goodlist:'',
     	a:false
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
  	axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword=&store_id=&gc_id=1085&page=&per_page=&key=&order=').then(function(res){
  		that.goodlist=res.data.data.items.slice(0,5)
  		that.a=true
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.theme
	width pxtorem(750px)
	background-color white
	position relative
	>img
		width pxtorem(750px)
		height pxtorem(410px)
		display block
		margin-bottom pxtorem(20px)
	>img:last-of-type
		margin-bottom 0
	.goodlist
		width pxtorem(710px)
		height pxtorem(292px)
		padding pxtorem(20px)
		overflow-x scroll
		>div
			width pxtorem(1100px)
			height pxtorem(286px)
			overflow hidden
			>div
				width pxtorem(208px)
				height pxtorem(286px)
				margin-right pxtorem(10px)
				position relative
				float left				
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
		width pxtorem(750px)
		height pxtorem(6px)
		position absolute
		bottom 0
		left 0
		background-color white
</style>
