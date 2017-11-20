<template>
  <div class='cookpage'>
  	<div v-for="item in detailArr" class="detail">
  		<div class="head">
	  		<div class="header1">
  				<img src="../../assets/img/back-w.png" alt="" v-show="blackBol" class="back1">
  				<img src="../../assets/img/back-l.png" alt="" v-show="!blackBol" class="back1">
  				<span>{{mes}}</span>
		  		<ul class="nav" @click="HearNavFn">
		  			<li></li>
		  			<li></li>
		  			<li></li>
		  		</ul>
  			</div>
	  		<img :src="item.bgUrl" alt="">
	  	</div>
		<!-- 2 -->
	  	<div class="collection">
	  		<p class="text1">{{item.name}}</p>
	  		<span>{{clect}}</span>人收藏
	  		<span>{{see}}</span>人浏览
	  	</div>
		<!-- 3 -->
	  	<div>
	  		<span>评分</span>
	  		<div v-for='(star,index) in starArr'  class="star">
	  			<img :src="star.url1" alt="" v-show='starBol[index]'><img :src="star.url2" alt="" v-show='!starBol[index]'>
	  		</div>
	  		<div class="score"><img src="../../assets/img/score.png" alt=""></div>
	  		<ul>
	  			<li v-for='prac in practiceArr'><img :src="prac.src" alt="">{{prac.name}}</li>
	  		</ul>
	  	</div>
		<!-- 4 -->
	  	<div>
	  		<div>主料</div>
	  		<div v-for ='ingre in ingredientsArr'>
	  			<span>{{ingre.material}}</span>
	  			<span>
	  				<span>{{ingre.weight}}</span>
	  			</span>
	  		</div>
	  	</div>
		<!-- 5 -->
	  	<div>
	  		<div>辅料</div>
	  		<div v-for ='access in accessoriesArr'><span>{{access.material}}</span><span>{{access.weight}}</span></div>
	  	</div>
	  	<!-- 6 -->
	  	<div>
	  		<ul>
	  			<li>用量转换</li>
	  			<li><img src="../../assets/img/basket.png" alt="">菜篮</li>
	  			<li @click="listFn"><span>+</span>买菜清单</li>
	  		</ul>
	  	</div>
		<!-- 7步骤 -->
	  	<div>
	  		<ul v-for="step in stepArr">
	  			<li>{{step.num}}</li>
	  			<li><img :src="step.src" alt=""></li>
	  			<li>{{step.txt}}</li>
	  		</ul>
	  		<div>
	  			<p>成品图</p>
	  			<img :src="finishedArr[0]" alt="" class="FinishDrawing">
	  		</div>
	  		<div class="finish">
	  			<span v-for='(finish,index) in finishedArr' class="mask" @click="maskFn(index)"><img :src="finish" alt=""></span>
	  		</div>
	  	</div>
	  	<!-- 8烹饪心得 -->
	  	<div>
	  		<p>烹饪心得</p>
	  		<p>{{experience}}</p>
	  		<div></div>
	  	</div>
	  	<!-- 9评论 -->
	  	<div>
	  		<p>评论</p>
	  		<ul v-for="(comm,index) in commentArr" v-show="commBol[index]">
	  			<li>
  					<span>
  						<img :src="comm.src" alt="">
  					</span>
  					<span>
  						<span>{{comm.name}}</span>
  						<span>{{comm.time}}{{minue[0]}}</span>
  					</span>
	  			</li>
	  			<li><p>{{comm.txt}}</p></li>
	  		</ul>
	  		<div>
	  			<span @click='comMoreFn'>{{comMore[n]}}({{commNum}})</span>
	  			<span @click="commentFn">我要评论</span>
	  		</div>
	  		<div class="stop" @click="toTopFn">回顶部</div>
	  	</div>
	  	<!-- 10底部导航 -->
	  	<div>
	  		<span><img src="../../assets/img/comment.png" alt=""></span>
	  		<span><img src="../../assets/img/store.png" alt=""></span>
	  		<span><img src="../../assets/img/send.png" alt=""></span>
	  	</div>
	  	<div class="func" v-show="HearNavBol">
  			<span class="triangle"></span>
  			<ul>
  				<li v-for="(fn,index) in funcArr">{{fn}}</li>
  			</ul>
  		</div>
  	</div>
  	

  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
  name: '',
  data () {
    return {
    	HearNavBol:false,
    	funcArr:["计时器","同名菜谱","字体调整","意见反馈"],
     	detailArr:[
     		{bgUrl:"http://s1.ig.meishij.net/p/20171115/ff9742b4cdd280e2a466fc450bc760d1.jpg",name:"煎饼"}
     	],
     	mes:"",
     	clect:2809,
     	see:17022,
     	starArr:[
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")},
     		{url1:require("../../assets/img/star.png"),url2:require("../../assets/img/star-a.png")}
     	],
     	starBol:[false,false,true,true,true],
     	practiceArr:[
     		{src:require("../../assets/img/cook_way.png"),name:"炖"},
     		{src:require("../../assets/img/seasoning.png"),name:"咸鲜味"},
     		{src:require("../../assets/img/clock.png"),name:"<60分钟"},
     		{src:require("../../assets/img/fire.png"),name:"较高热量"}
     	],
     	ingredientsArr:[
     		{material:"猪骨",weight:"500克"},
     		{material:"西红柿",weight:"300克"},
     	],
     	accessoriesArr:[
     		{material:"红烧酱油",weight:"20毫升"},
     		{material:"瓜皮",weight:"50克"},
     		{material:"姜",weight:"10克"}
     	],
     	stepArr:[
     		{num:"步骤1",src:"http://s1.ig.meishij.net/p/20171115/ff9742b4cdd280e2a466fc450bc760d1.jpg",txt:"时代峰峻哦啊烦都烦就爱生动风景啊山东"},
     		{num:"步骤2",src:"http://s1.ig.meishij.net/p/20171115/ff9742b4cdd280e2a466fc450bc760d1.jpg",txt:"时代峰峻哦啊烦都烦就爱生动风景啊山东"}
     	],
     	finishedArr:["http://site.meishij.net/r/186/15/6503936/a6503936_147461319198579.jpg","http://site.meishij.net/r/94/36/4384094/a4384094_147446032138689.jpg","http://site.meishij.net/r/186/15/6503936/a6503936_147461319198579.jpg","http://site.meishij.net/r/94/36/4384094/a4384094_147446032138689.jpg"],
     	experience:"胜多负少的奇偶时点击凡时代峰峻苏东坡封建割据东方国际生当复来归",
     	commNum:0,
     	blackBol:true,
     	minue:["分钟前","小时前"],
     	commBol:[],
     	comMore:["更多评论","收起评论"],
     	n:0,
     	comMoreBol:true

    }
  },
  //实时监听页面数据的变化
  computed:mapGetters({
  	commentArr:'getCommentArr'
  }),
  methods:{
  	//头部导航
  	HearNavFn:function(){
		if (this.HearNavBol==false) {
			$(".func").slideDown();
		}else {
			$(".func").slideUp();
		}
		this.HearNavBol=!this.HearNavBol;  
  		
  	},
  	listFn:function(){
  		this.$router.push("/list")
  	},
  	maskFn:function(index){
  		$(".mask").removeClass("mask1");
  		$(".FinishDrawing").get(0).src=this.finishedArr[index];
  		$(".mask").eq(index).addClass("mask1");
  	},
  	//我要评论
  	commentFn:function(){
  		this.$router.push("/comment")
  	},
  	seeTwoFn:function(){
  		this.commBol=[];
  		for(var i=2;i<this.commentArr.length-2;i++){
	  		this.commBol.push(false)
	  	}
	  	this.commBol[0]=true;
	  	this.commBol[1]=true;
  	},
  	//更多评论
  	comMoreFn:function(){
  		if (this.comMoreBol) {
  			var comArr=[];
	  		for(var i=0;i<this.commentArr.length;i++){
	  			comArr.push(true);
	  		}
	  		this.commBol=comArr;
	  		this.n = 1;
  		}else {
  			this.seeTwoFn();
  			this.n = 0;
  		}
  		this.comMoreBol=!this.comMoreBol;
  	},
  	//回到顶部
  	toTopFn:function(){
  		// scrollTo(0,0);
  		$('html,body').animate({scrollTop: '0px'},500)
  	}
  },
  mounted:function(){
  	this.commNum = this.commentArr.length;
  	$(".mask").eq(0).addClass("mask1");
  	var that = this;
  	window.addEventListener('scroll',function(){ 
  		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  		var end=$(".collection").get(0).offsetTop+$(".collection").get(0).offsetHeight-$(".header1").get(0).offsetHeight;
  		var mes = (parseFloat(scrollTop/1000)+0.2).toFixed(2);
  		var tet = $(".text1").get(0).getBoundingClientRect().top;
  		if (scrollTop==0) {
  			$(".header1").css({"backgroundColor":"rgba(255,255,255,0)","borderBottomColor":"transparent"});
  			that.mes="";
  		}else if(scrollTop>0&&scrollTop<300){
  			$(".header1").css({"backgroundColor":"rgba(255,255,255,"+mes+")","display":"block"});
  			that.blackBol=true;
  			$(".nav>li").css({"backgroundColor":"#fff","borderBottomColor":"transparent"})
  			that.mes="";
  		}else if (scrollTop>=300&&scrollTop<end) {
  			$(".header1").css({"backgroundColor":"rgba(255,255,255,"+mes+")","display":"block"});
  			$(".header1").stop().animate({"height":"1.5333rem"},400)
  			that.blackBol=false;
  			$(".nav>li").css({"backgroundColor":"black","borderBottomColor":"transparent"})
  			that.mes="";
  		}else if (tet<$(".header1").get(0).offsetHeight) {
  			that.mes=that.detailArr[0].name
  			$(".header1").css({"backgroundColor":"rgba(255,255,255,1)","borderBottomColor":"#ccc"});
  		}else {
  			$(".header1").css({"backgroundColor":"rgba(255,255,255,1)","borderBottomColor":"#ccc"});
  			that.mes="";
  		}
  	},true);
  	this.seeTwoFn();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.cookpage
	width pxtorem(750px)
	overflow hidden
	font-size pxtorem(26px)
	padding-bottom pxtorem(90px)
	.detail
		width pxtorem(750px)
		.head
			width pxtorem(750px)
			height pxtorem(750px)
			.header1
				width pxtorem(720px)
				height pxtorem(115px)
				background-color rgba(255, 255, 255,0)
				padding-left pxtorem(30px)
				position fixed
				top 0
				left 0
				color #000
				text-align center
				font-size pxtorem(36px)
				line-height pxtorem(115px)
				border-bottom pxtorem(1px) solid transparent
				z-index 200
				.back1
					float left
					margin-top pxtorem(40px)
					width pxtorem(20px)
				ul
					float right
					z-index 100
					margin-right pxtorem(30px)
					li
						display inline-block
						width pxtorem(10px)
						height pxtorem(10px)
						border-radius 50%
						background-color #fff
						margin-right pxtorem(2px)	
			>img
				position absolute
				top 0
				left 0
				z-index -100
				width 100%
				height pxtorem(750px)
		>div:nth-child(2)
			padding-left pxtorem(30px)
			width pxtorem(720px)
			height pxtorem(130px)
			background-color #fff4d6
			font-size pxtorem(26px)
			color #736f63
			padding-top pxtorem(50px)
			p
				font-size pxtorem(42px)
				font-weight bold
				color #000
			span
				line-height pxtorem(90px)
		>div:nth-child(3)
			width pxtorem(690px)
			height pxtorem(290px)
			padding 0 pxtorem(30px)
			border-top pxtorem(1px) solid #ccc
			border-bottom pxtorem(1px) solid #ccc
			margin-top pxtorem(50px)
			position relative
			.star 
				display inline-block
				line-height pxtorem(100px)
				img
					width pxtorem(30px)
			.score
				height pxtorem(60px) 
				width 0
				border pxtorem(35px) solid #e2e2e2
				border-bottom-color transparent 
				position absolute
				top 0
				right pxtorem(30px)
				img
					position absolute
					top pxtorem(-5px) 
					left pxtorem(-25px)
					width pxtorem(50px)
			>ul
				margin-top pxtorem(10px)
				li
					display inline-block
					width pxtorem(250px)
					line-height pxtorem(50px)
					border-bottom pxtorem(1px) solid #ccc
					margin-top pxtorem(10px)
					img
						margin-right pxtorem(10px)
						vertical-align middle
						margin-bottom pxtorem(5px)
				li:nth-child(2n+2)
					margin-left pxtorem(50px)
		>div:nth-child(4)
			width pxtorem(750px)
			line-height pxtorem(50px)
			margin-top pxtorem(30px)
			text-indent pxtorem(30px)
			div:nth-child(1)
				line-height pxtorem(80px)
				font-weight bold
				font-size pxtorem(32px)
			div
				border-bottom pxtorem(1px) solid #ccc
				padding-left pxtorem(30px)
				text-indent pxtorem(0px)
				overflow hidden
				line-height pxtorem(45px)
				span
					line-height pxtorem(70px)
				>span:nth-child(2n+2)
					width pxtorem(350px)
					display inline-block
					float right
					margin-right pxtorem(30px)	
		>div:nth-child(5)
			width pxtorem(750px)
			line-height pxtorem(50px)
			margin-top pxtorem(30px)
			text-indent pxtorem(30px)
			div:nth-child(1)
				line-height pxtorem(80px)
				font-weight bold
				font-size pxtorem(32px)
			div
				border-bottom pxtorem(1px) solid #ccc
				padding-left pxtorem(30px)
				text-indent pxtorem(0px)
				overflow hidden
				span
					line-height pxtorem(70px)
				>span:nth-child(2n+2)
					width pxtorem(350px)
					display inline-block
					float right
					margin-right pxtorem(30px)
		>div:nth-child(6)
			padding-top pxtorem(50px)
			width pxtorem(690px)
			margin auto
			ul
				li
					border pxtorem(1px) solid #ccc
					height pxtorem(62px)
					line-height pxtorem(62px)
					text-align center
					display inline-block
					border-radius pxtorem(31px)
					padding 0 pxtorem(40px)
					margin-right pxtorem(10px)
				li:nth-child(3)
					margin-right 0
					padding 0 pxtorem(60px)
					span
						display inline-block
						font-size pxtorem(40px)
						margin pxtorem(-2px) pxtorem(5px) 0 pxtorem(-15px)
				li:nth-child(2)
					img
						width pxtorem(40px)
						vertical-align middle
						margin-right pxtorem(10px)
		>div:nth-child(7)
			margin-top pxtorem(150px)
			text-align center
			ul
				font-size pxtorem(32px)
				li:nth-child(1)
					line-height pxtorem(160px)
					font-weight bold
				li:nth-child(2)
					img
						width pxtorem(750px)
						height pxtorem(560px)
				li:nth-child(3)
					line-height pxtorem(120px)
					text-align left
					padding-left pxtorem(30px)
			div
				line-height pxtorem(100px)
				margin-top pxtorem(50px)
				font-size pxtorem(32px)
				font-weight bold
				img
					width pxtorem(750px)
					height pxtorem(1122px)
			.finish
				margin 0 pxtorem(30px)
				text-align left
				width pxtorem(690px)
				overflow-x scroll
				white-space nowrap
				span:nth-child(1)
					margin-left 0
				span
					display inline-block
					margin-left pxtorem(20px)
					position relative
					width pxtorem(200px)
					height pxtorem(200px)
					img 
						position absolute
						top 0
						left 0
						width pxtorem(200px)
						height pxtorem(200px)
						z-index -100
				.mask1
					background-color rgba(0, 0, 0,0.7)
					
		>div:nth-child(8)
			width pxtorem(750px)
			margin-top pxtorem(83px)
			p:nth-child(1)
				line-height pxtorem(90px)
				padding 0 pxtorem(30px)
				font-weight bold
				font-size pxtorem(32px)
			p:nth-child(2)
				line-height pxtorem(50px)
				font-size pxtorem(26px)
				color #696969
				padding 0 pxtorem(30px)	
			div
				width pxtorem(750px)
				height pxtorem(36px)
				background-color #f0f0f0
		>div:nth-child(9)
			width pxtorem(750px)
			padding pxtorem(30px) 0
			>p
				line-height pxtorem(80px)
				font-size pxtorem(32px)
				font-weight bold
				padding-left pxtorem(30px)
			ul
				border-top pxtorem(1px) solid #ccc
				padding-top pxtorem(30px)
				li
					padding-left pxtorem(30px)
				li:nth-child(1)
					>span
						display inline-block
					>span:nth-child(1)
						img 
							width pxtorem(65px)
							height pxtorem(65px)
					>span:nth-child(2)
						margin-left pxtorem(10px)
						span
							display block
						span:nth-child(1)
							line-height pxtorem(50px)
							font-size pxtorem(28px)
							color #656565
						span:nth-child(2)
							line-height pxtorem(20px)
							font-size pxtorem(22px)
							color #9a9a9a
				li:nth-child(2)
					p
						line-height pxtorem(90px)
						color #343434
			div
				text-align center
				margin-top pxtorem(50px)
				>span
					display inline-block 
					height pxtorem(65px)
					border pxtorem(2px) solid #ccc	
					border-radius pxtorem(35px)
					padding 0 pxtorem(70px)
					line-height pxtorem(65px)
					font-size pxtorem(26px)
					color #646464
					margin-right pxtorem(40px)
					letter-spacing pxtorem(2px)
				>span:last-child
					margin-right 0
			.stop
				width pxtorem(100px)
				height pxtorem(100px)
				border-radius 50%
				background-color rgba(0, 0, 0, .5)
				position fixed 
				bottom pxtorem(150px)
				right pxtorem(50px)
				text-align center
				line-height pxtorem(100px)
				color #fff
		>div:nth-child(10)
			width pxtorem(750px)
			height pxtorem(80px)
			border-top pxtorem(2px) solid #ccc
			position fixed
			bottom 0
			left 0
			background-color #FFF
			text-align center
			span
				display inline-block
				width pxtorem(70px)
				height pxtorem(70px)
				vertical-align middle
				margin-right pxtorem(150px)
				img
					width 100%
					height 100%
			span:last-child
				margin-right 0
		.func
			position fixed
			top pxtorem(115px)
			right pxtorem(30px)
			width pxtorem(250px)
			background-color #383838
			border-radius pxtorem(10px)
			z-index 500
			color #fff
			transform-style preserve-3d
			perspective pxtorem(1000px)
			.triangle
				position absolute
				top pxtorem(-40px)
				right pxtorem(40px)
				display inline-block
				border pxtorem(20px) solid transparent
				border-bottom pxtorem(20) solid #383838
				z-index 600
			>ul
				padding 0 pxtorem(27px)
				text-align center
				li
					line-height pxtorem(78px)
					border-bottom pxtorem(1px) solid #585656
</style>
