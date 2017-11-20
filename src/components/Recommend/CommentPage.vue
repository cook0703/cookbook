<template>
  <div class='Comment'>
  	<my-head class='head'> 
      <strong slot='left'>
        <img src="../../assets/img/back-l.png" alt="" class="back" @click="backFn">
      </strong>
      <strong slot='center'>
        发布评论
      </strong>
    </my-head>
    <div class="com">
    	<span>给菜谱评分</span>
    	<div v-for='(star,index) in starArr'  class="star" @click="getStartFn(index)">
  			<img :src="star.url1" alt="" v-show='starBol[index]'><img :src="star.url2" alt="" v-show='!starBol[index]'>
  		</div>
  		<span>{{comArr}}</span>
    </div>
    <textarea placeholder="有什么想说的" v-model="mes"></textarea>
    <a href="javascript:;" class="file">
    	<img src="../../assets/img/camera.png" alt="">
    	<input type="file" name="" id="">
	</a>
    <button @click="releaseFn">发布</button>
  </div>
</template>

<script>
import Head from '../Header.vue'
import {mapGetters,mapActions} from "vuex"
import { Toast } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
    	starArr:[
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")}
     	],
     	starBol:[false,false,false,true,true],
     	comArr:"味道不错",
     	mes:"",
     	com:{name:"匿名",src:require("../../assets/img/phto1.png"),time:1,txt:"好好吃"},
     	btnBol:true
    }
  },
   //2.注册组件
  components:{
    "my-head":Head
  },
  methods:{
  	...mapActions([
  		"setComment"
  	]),
  	backFn:function(){
  		// console.log('返回')
  		this.$router.push("/cook");
  		
  	},
  	getStartFn:function(index){
  		// console.log(index)
  		switch (index) {
  			case 0:this.starBol=[false,true,true,true,true];this.comArr="不好吃";break;
  			case 1:this.starBol=[false,false,true,true,true];this.comArr="感觉一般";break;
  			case 2:this.starBol=[false,false,false,true,true];this.comArr="味道不错";break;
  			case 3:this.starBol=[false,false,false,false,true];this.comArr="很好吃";break;
  			case 4:this.starBol=[false,false,false,false,false];this.comArr="人间美味";break;
  			default:break;
  		}
  	},
  	releaseFn:function(){
  		var that = this;
  		if (this.mes.length==0) {
  			Toast({
		        message: "信息未填写完整",
		        duration:1000
		    })
			// alert("信息未填写完整")
  		}else {
  			
  			this.com.txt=this.mes;
  			if (this.btnBol) {
  				this.setComment(this.com);
			    this.btnBol=false;
  			}
  			Toast({
		        message: "发布成功",
		        duration:1000
		    })
  			setTimeout(function(){
		    	that.$router.push("/cook");
		    },1300)
  		}
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.Comment
	padding-top pxtorem(115px)
	font-size pxtorem(28px)
	.head
		strong
			.back
				display block
				width pxtorem(20px)
				margin-top pxtorem(40px)
	.com
		width pxtorem(690px)
		height pxtorem(130px)
		padding 0 pxtorem(30px)
		span
			display inline-block
			line-height pxtorem(100px)
			margin-right pxtorem(20px)
		>span:last-child
			margin-left pxtorem(50px)
		.star 
			display inline-block
			vertical-align middle
			margin-right pxtorem(10px)
			img
				width pxtorem(45px)
				display block
				margin-top pxtorem(-20px)
	textarea
		padding-left pxtorem(30px)
		pxtorem pxtorem(30px)
		outline none
		border none
		resize none
		font-size pxtorem(30px)	
		width pxtorem(690px)
		height pxtorem(120px)
	.file 
		position relative
		display inline-block
		width pxtorem(220px)
		height pxtorem(220px)
		border-radius pxtorem(10px)
		background #f2f2f2
		overflow hidden
		margin pxtorem(50px) 0 0 pxtorem(30px)
		img
			width pxtorem(80px)
			height pxtorem(80px)
			position absolute
			top 0
			left 0
			right 0
			bottom 0
			margin auto
		input[type=file]
			position absolute
			left 0
			top 0
			width pxtorem(180px)
			height pxtorem(180px)
			opacity 0
	button
		display block
		width pxtorem(690px)
		height pxtorem(70px)
		background-color #ff4c39
		border-radius pxtorem(35px)
		color #fff	
		font-size pxtorem(26px)
		margin pxtorem(60px) auto
		outline none		
</style>
