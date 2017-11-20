<template>
  <div class='detail' v-if='loaded'>
  	<mt-swipe :auto="2000" class='cycle'>
        <mt-swipe-item v-for='item in detail_data.covers'><img v-bind:src="item.media.big" alt=""></mt-swipe-item>
    </mt-swipe>
    <h2>{{detail_data.title}}</h2>
    <p>{{detail_data.sub_title}}</p>
    <p>￥{{detail_data.price}}</p>
    <div><span>{{detail_data.shop_info.store_name}}</span></div>
    <div class="size">
    	规格选择
    	<strong>{{size==''?'请选择数量规格':'size'}}</strong>
    	<img src="../../assets/img/forward.png" alt="">
    	<span>{{size==''?'':'22'}}</span>
    </div>
    <div class="size" style='margin-bottom:0;font-size:0.4rem;font-weight:bold'>商品详情</div>
    <img  alt="" v-for='x in detail_data.desc_info' :src="x.media.big">
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
//js的引入
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//css的引入
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
     	detail_data:'',
     	size:'',
     	num:'',
     	loaded:false
    }
  },
  computed:mapGetters({
  	detailId:'getDetailId'
  }),
  mounted:function(){
  	Indicator.open();
  	var that=this
  	axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_detail_new&goods_id='+this.detailId).then(function(res){
  			that.detail_data=res.data.data.goods_info
  			that.loaded=true
  			Indicator.close();
  			console.log(res.data.data.goods_info)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.detail
	background-color #f2f2f2
	.cycle
		width pxtorem(750px)
		margin auto
		height pxtorem(750px)
		div
			img
				width pxtorem(750px)
				height pxtorem(750px)
				display block
	h2
		width pxtorem(654px)
		padding pxtorem(32px) pxtorem(48px) pxtorem(12px)
		font-size pxtorem(38px)
		text-align center
		overflow hidden
		text-overflow ellipsis
		white-space nowrap
		color #333
		background-color white
	>p:nth-of-type(1)
		background-color white
		width pxtorem(654px)
		height pxtorem(40px)
		padding 0 pxtorem(48px)
		line-height pxtorem(40px)
		font-size pxtorem(28px)
		color #666
		text-align center
		overflow hidden
		text-overflow ellipsis
		white-space nowrap
	>p:nth-of-type(2)
		background-color white
		width pxtorem(654px)
		height pxtorem(50px)
		padding pxtorem(12px) pxtorem(48px)
		line-height pxtorem(50px)
		text-align center
		color #ff4c39
		font-size pxtorem(38px)
	>div:nth-of-type(2)
		width pxtorem(750px)
		height pxtorem(82px)
		background-color white
		text-align center
		line-height pxtorem(82px)
		margin-bottom pxtorem(20px)
		>span
			border pxtorem(1px) solid #ff9913
			display inline-block
			height pxtorem(40px)
			line-height pxtorem(40px)
			color #ff9913
			padding 0 pxtorem(15px)
	.size
		width pxtorem(686px)
		height pxtorem(88px)
		padding 0 pxtorem(32px)
		background-color white
		font-size pxtorem(28px)
		line-height pxtorem(88px)
		color #333
		overflow hidden
		margin-bottom pxtorem(20px)
		>strong
			color #999
			padding-left pxtorem(15px)
		>span
			float right
			margin-right pxtorem(30px)
			font-size pxtorem(25px)
			color #999
		>img
			float right
			width pxtorem(15px)
			height pxtorem(28px)
			margin-top pxtorem(30px)
	>img
		width pxtorem(750px)
		display block
</style>
