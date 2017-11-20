<template>
  <div class='mallsearch'>
  	<div class="top" @click='backTop'><img src="../../assets/img/backtop.png" alt=""></div>
  	<div class="search">
  		<img src="http://site.meishij.net/p2/20161009/20161009100242_329.png" alt="" @click=backFn>
  		<input type="text" placeholder='请输入商品名' v-model='keyword' @blur='goFn'>
  	</div>
  	<div class="filter">
  		<div @click='zongheFn' class='zong'>{{kind==0?'综合':'新品'}}<span ref='all'></span></div>
  		<div @click='saleFn' class='sale'>销量</div>
  		<div @click='priceFn' class='price'>价格<span ref='price'></span></div>
  	</div>
	<goodlist :mes='listArr' :show='bol'></goodlist>
	<infinite-loading @infinite="infiniteHandler" >
        <span slot="no-more" ref='no_more'>亲~已经到底啦...</span>
    </infinite-loading>
  </div>
</template>

<script>
import goodlist from './GoodList'
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'
import { Indicator } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
     	kind:0,
     	listArr:[],
     	bol:false,
     	order:'',
     	key:'',
     	page:1,
     	keyword:''
    }
  },
  computed:mapGetters({
  	sort_id:'getSortId'
  }),
  methods:{
  	...mapActions([
  		'setSortId'
  	]),
  	backFn:function(){
  		this.$router.go(-1)
  		window.removeEventListener('scroll',this.wat,true)
  	},
  	backTop:function(){
  		window.scrollTo(0,0)
  	},
  	goFn:function(){
  		Indicator.open();
  		var that=this
  		this.key=this.order='';this.page=1;console.log(this.keyword);this.setSortId('')
		axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword='+this.keyword+'&store_id=&gc_id='+this.sort_id+'&page='+this.page+'&per_page=&key='+this.key+'&order='+this.order).then(function(res){
  				that.listArr=res.data.data.items
  				Indicator.close();
  		})
  	},
  	//销售量排列
  	saleFn:function(){
  		var that=this
  		if(event.currentTarget.style.color!='rgb(255, 76, 57)'){
  			Indicator.open();
  			$('.sale').css('color','rgb(255, 76, 57)').siblings().css('color','#666')
	  		this.$refs.all.style.backgroundImage="url("+require('../../assets/img/up0.png')+")"
	  		this.$refs.price.style.backgroundImage="url("+require('../../assets/img/nosc.png')+")"
	  		this.key='sale_num';this.order='desc';this.page=1;
	  		axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword='+this.keyword+'&store_id=&gc_id='+this.sort_id+'&page='+this.page+'&per_page=&key='+this.key+'&order='+this.order).then(function(res){
	  				that.listArr=res.data.data.items
	  				Indicator.close();
	  		})
  	  }
  	},
  	//按价格排列
  	priceFn:function(){
  		var that=this
  		Indicator.open();
  		this.key='price';this.page=1;
  		if(this.order!='asc'){
  			$('.price').css('color','rgb(255, 76, 57)').siblings().css('color','#666')
  			this.$refs.all.style.backgroundImage="url("+require('../../assets/img/up0.png')+")"
  			this.$refs.price.style.backgroundImage="url("+require('../../assets/img/desc.png')+")"
  			this.order='asc';
  		}else{
  			this.$refs.price.style.backgroundImage="url("+require('../../assets/img/asc.png')+")"
  			this.order='desc';
  		}
  		axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword='+this.keyword+'&store_id=&gc_id='+this.sort_id+'&page='+this.page+'&per_page=&key='+this.key+'&order='+this.order).then(function(res){
	  				that.listArr=res.data.data.items
	  				Indicator.close();
	  		})
  	},
  	//按照综合
  	zongheFn:function(){
  		var that=this
  		if(event.currentTarget.style.color!='rgb(255, 76, 57)'){
  			Indicator.open();
  			$('.zong').css('color','rgb(255, 76, 57)').siblings().css('color','#666')
	  		this.$refs.all.style.backgroundImage="url("+require('../../assets/img/down1.png')+")"
	  		this.$refs.price.style.backgroundImage="url("+require('../../assets/img/nosc.png')+")"
	  		this.key='zonghe';this.order='';this.page=1;
	  		axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword='+this.keyword+'&store_id=&gc_id='+this.sort_id+'&page='+this.page+'&per_page=&key='+this.key+'&order='+this.order).then(function(res){
	  				that.listArr=res.data.data.items
	  				Indicator.close();
	  		})
  		}
  	},  	
  	infiniteHandler($state) {        
			var that=this
			this.page++
		  	axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword=&store_id=&gc_id='+this.sort_id+'&page='+this.page+'&per_page=&key='+this.key+'&order='+this.order).then(function(res){
		  		if(Array.isArray(res.data.data.items)){
	  				that.listArr=that.listArr.concat(res.data.data.items)
	  				$state.loaded();
		  		}else{
		  			$state.complete();
		  			that.$refs.no_more.style.fontSize='24px';
		  		}
		  	})
        // }        
    },
    wat:function(){
    	var T=document.documentElement.scrollTop;
    	if(T>1200&&$('.top').css('opacity')!=1){
    		$('.top').stop().css('display','block').animate({'opacity':1},300)
    	}else{
    		$('.top').stop().animate({'opacity':0},500).css('display','none')
    	}
    }	
  },
  components:{
  	'goodlist':goodlist,
  	InfiniteLoading
  },
  mounted:function(){
  	var that=this
  	axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword=&store_id=&gc_id='+this.sort_id+'&page=1&per_page=&key=&order=').then(function(res){
  		that.listArr=res.data.data.items
  		that.bol=true
  	})
  	window.addEventListener('scroll',this.wat,true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.mallsearch
	position relative
	width pxtorem(750px)
	background-color #f2f2f2
	padding-top pxtorem(88px)
	>div:nth-of-type(1)
		display none
		opacity 0
		position fixed
		width pxtorem(90px)
		width pxtorem(90px)
		border-radius pxtorem(45px)
		right pxtorem(30px)
		bottom pxtorem(100px)
		>img
			width 100%
	.search
		width pxtorem(750px)
		height pxtorem(88px)
		background-color white
		position fixed
		top 0
		left 0
		>img
			width pxtorem(88px)
		>input
			width pxtorem(642px)
			height pxtorem(60px)
			background-color #f5f5f5
			vertical-align top
			margin-top pxtorem(14px)
			margin-left pxtorem(-10px)
			border-radius pxtorem(10px)
			outline none
			font-size pxtorem(30px)
			text-indent pxtorem(20px)
	.filter
		width pxtorem(750px)
		height pxtorem(88px)
		background-color white
		display flex
		margin-bottom pxtorem(20px)
		>div
			flex 1
			font-size pxtorem(30px)
			height pxtorem(88px)
			line-height pxtorem(88px)
			text-align center
			color #666
		>div:nth-of-type(1)
			color #ff4c39
			>span
				display inline-block
				vertical-align top
				width pxtorem(20px)
				height pxtorem(8px)
				margin pxtorem(40px) 0 0 pxtorem(8px)
				background url('../../assets/img/down1.png') no-repeat
				background-size pxtorem(16px)
		>div:nth-of-type(3)
			>span
				display inline-block
				vertical-align top
				width pxtorem(20px)
				height pxtorem(20px)
				margin pxtorem(35px) 0 0 pxtorem(8px)
				background url('../../assets/img/nosc.png') no-repeat
				background-size pxtorem(16px)
				
</style>
