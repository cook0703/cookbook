<template>
  <div class="homepage">
    <div class="header">
      <div>
        <img src="../../assets/img/search.png" alt="" class="searchImg">
        <input type="text" placeholder="菜谱、食材">
      </div>
    </div>
    
    <div class="scroll clear">
      <span>每日三餐</span>•<span>{{threeMeals[0]}}</span><span>更多<img src="../../assets/img/forward.png" alt=""></span>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for='(item,index) in scrol'>
          <div v-for='x in item' @click='treeMealsFn(index)'>
            <img :src="x.albums" alt="" class="swiperImg">
            <strong>早餐</strong>
            <p>{{x.title}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

    <div class="cookBook clear">
      <div>
        <span>
          <strong>智能组菜</strong>
          <p>INTELLIGENT</p>
        </span>
        <span><img src="../../assets/img/Intelligence.png" alt=""></span>
      </div>
      <div>
        <span>
          <strong>菜谱分类</strong>
          <p>CATEGORY</p>
        </span>
        <span><img src="../../assets/img/menu.png" alt=""></span>
      </div>
    </div>

    <div class="todayRecommend">
      <p>今日推荐</p>
      <scroll-content :scrollImgArr='todayRecommendArr'></scroll-content>
    </div>
    
     <div class="goods" >
      <span>精选好货必Buy</span>
      <span class="more">更多<img src="../../assets/img/forward.png" alt=""></span>
    </div>

    <div class="fresh" >
      <span>新鲜专题</span>
      <span class="more">更多<img src="../../assets/img/forward.png" alt=""></span>
      <a href="javascript:void(0)" v-for="(fre,index) in freshArr"><img :src="fre" alt=""></a>
    </div>

    <div class="newestMenu" >
      <span>最新菜谱</span>
      <scroll-small :scrollSmallImg='scrollSmallArr'></scroll-small>
    </div>

    <div class="OverlordRecipes" >
      <span>霸王菜谱</span>|<span>时令美味</span>
      <scroll-small :scrollSmallImg='OverlordRecipes'></scroll-small>
    </div>

    <div class="OverlordRecipes" >
      <span>霸王菜谱</span>|<span>简单易学的美味菜谱</span>
      <scroll-small :scrollSmallImg='OverlordRecipes1'></scroll-small>
    </div>

    <div class="RankingList" >
      <span>上周人气菜谱排行榜</span>
      <scroll-small :scrollSmallImg='RankingList'></scroll-small>
    </div>

  	<my-nav></my-nav>
  </div>
</template>

<script>
import nav from '../Nav.vue'
import scrollContent from './ScrollingContent.vue'
import scrollSmall from './ScrollSmallImg.vue'
import Vue from "vue";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      threeMeals:["早餐","午餐","晚餐"],
      scrol:[
        [
          {'src':"http://s1.ig.meishij.net/p/20171115/ff9742b4cdd280e2a466fc450bc760d1.jpg",'name':"黑椒嫩肉卷饼",'title':"牛肉和生菜的搭配，味道鲜美，很受欢迎"},
          {'src':"http://s1.ig.meishij.net/p/20171115/e8dcbc26f142b00a7502f8406a92d1c5.jpg",'name':"番茄鸡蛋疙瘩汤",'title':"咬一口微咸、Q弹有筋道、好看更好吃"},
          {'src':"http://s1.ig.meishij.net/p/20171115/8e77bce7841352a2b25c384e27344da9.jpg",'name':"鲜汤米面",'title':"简单又营养，入口爽滑，汤鲜味美"}
        ],
         [
          {'src':"http://s1.ig.meishij.net/p/20171115/a7709083dfe6448b85dec29b5dd17b56.jpg",'name':"砂锅炖鸡翅根",'title':"软嫩鲜美又好吃，美滋滋来一锅"},
          {'src':"http://s1.ig.meishij.net/p/20171115/72442bb965af39c1e64a9ff60c678813.jpg",'name':"砂锅焖猪蹄",'title':"猪蹄软糯，萝卜清甜，让人很舒心的一餐"},
          {'src':"http://s1.ig.meishij.net/p/20171115/9e8a894de43e0b112c8def05819c58fa.jpg",'name':"青椒小炒肉",'title':"营养丰富，有荤有素真好吃"}
        ],
         [
          {'src':"http://s1.ig.meishij.net/p/20171115/283651cd2a40cd76c05119adec0a12c0.jpg",'name':"茄汁排骨",'title':"排骨这样做，轻松吃掉一整盘"},
          {'src':"http://s1.ig.meishij.net/p/20171115/529a3d4125112c780053c043e91c6490.jpg",'name':"蚂蚁上树",'title':"粉丝爽滑无比，配上肉末，鲜美无比"},
          {'src':"http://s1.ig.meishij.net/p/20171115/ed578c26c51e215d02a869ec966d8416.jpg",'name':"茄汁大虾",'title':"色泽红润，酱汁饱满，一边看一边咽口水"}
        ]
      ],
      todayRecommendArr:[
       "http://s1.ig.meishij.net/p/20170726/4da8b634ec34f61069d2ee6e15ce6579.jpg","http://s1.ig.meishij.net/p/20170725/a3f08a09bfffdd1d52e0055eb5545b0b.jpg","http://s1.ig.meishij.net/p/20170724/f2c4cae8d4eb9cfde2127f5fdc8837aa.jpg"
      ],
      swiperOption: {
        notNextTick: true,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',//上一张
        nextButton:'.swiper-button-next',//下一张
        mousewheelControl : true,
        observeParents:true,
        debugger: false,
      },
      freshArr:[
        require("../../assets/img/fresh1.png"),
        require("../../assets/img/fresh2.png"),
        require("../../assets/img/fresh3.png"),
        require("../../assets/img/fresh4.png"),
        require("../../assets/img/fresh5.png")
      ],
      scrollSmallArr:[
        {src:"http://site.meishij.net/r/223/54/8326223/a8326223_147548601694094.jpg",foodName:"土豆沙拉",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/186/15/6503936/a6503936_147461319198579.jpg",foodName:"蔓越莓千层面包",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/94/36/4384094/a4384094_147446032138689.jpg",foodName:"芋圆",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/180/58/8452180/a8452180_147426277455752.jpg",foodName:"那普勒斯意面",name:"兔兔安爱思考"}
      ],
      OverlordRecipes:[
        {src:"http://site.meishij.net/r/223/54/8326223/a8326223_147548601694094.jpg",foodName:"土豆沙拉",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/186/15/6503936/a6503936_147461319198579.jpg",foodName:"蔓越莓千层面包",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/94/36/4384094/a4384094_147446032138689.jpg",foodName:"芋圆",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/180/58/8452180/a8452180_147426277455752.jpg",foodName:"那普勒斯意面",name:"兔兔安爱思考"}
      ],
       OverlordRecipes1:[
        {src:"http://site.meishij.net/r/223/54/8326223/a8326223_147548601694094.jpg",foodName:"土豆沙拉",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/186/15/6503936/a6503936_147461319198579.jpg",foodName:"蔓越莓千层面包",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/94/36/4384094/a4384094_147446032138689.jpg",foodName:"芋圆",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/180/58/8452180/a8452180_147426277455752.jpg",foodName:"那普勒斯意面",name:"兔兔安爱思考"}
      ],
      RankingList:[
        {src:"http://site.meishij.net/r/223/54/8326223/a8326223_147548601694094.jpg",foodName:"土豆沙拉",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/186/15/6503936/a6503936_147461319198579.jpg",foodName:"蔓越莓千层面包",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/94/36/4384094/a4384094_147446032138689.jpg",foodName:"芋圆",name:"兔兔安爱思考"},
        {src:"http://site.meishij.net/r/180/58/8452180/a8452180_147426277455752.jpg",foodName:"那普勒斯意面",name:"兔兔安爱思考"}
      ]
    }
  },
  components:{
  	'my-nav':nav,
    'scroll-content':scrollContent,
    'scroll-small':scrollSmall,
    swiper,
    swiperSlide
  },
  methods:{

    treeMealsFn:function(index){
      this.$router.push("/cook")
      console.log('001')
    }
  },
  mounted:function(){
    var that =this;
  	// axios.get('http://apis.juhe.cn/cook/queryid?key=36b11b54f8f5b4b049c279d0b361d024&id=1001').then(res=>{
   //    console.log(res);
   //  }).catch(error=>console.log(error));
    // $.ajax({
    //   type:'get',
    //   url:'http://apis.juhe.cn/cook/query?key=36b11b54f8f5b4b049c279d0b361d024&menu=早餐&rn=3',
    //   dataType:'jsonp',
    //   success:function(res){
    //     that.scrol[0]=res.result.data
    //     console.log(res.result.data)
    //   }
    // });
    // $.ajax({
    //   type:'get',
    //   url:'http://apis.juhe.cn/cook/query?key=36b11b54f8f5b4b049c279d0b361d024&menu=麻辣&rn=10',
    //   dataType:'jsonp',
    //   success:function(res){
    //     console.log(res)
    //   }
    // });
    // $.ajax({
    //   type:'get',
    //   url:'http://apis.juhe.cn/cook/query?key=36b11b54f8f5b4b049c279d0b361d024&menu=午餐&rn=3&pn=5',
    //   dataType:'jsonp',
    //   success:function(res){
    //     that.scrol[2]=res.result.data
    //     console.log(res.result.data)
    //   }
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.homepage
    width pxtorem(750px)
    padding-bottom pxtorem(150px)
    padding-top pxtorem(115px)
    overflow hidden
    .header
      width pxtorem(750px)
      height pxtorem(115px)
      border-bottom pxtorem(2px) solid #eeeeee
      text-align center
      line-height pxtorem(115px)
      position fixed 
      top 0
      left 0
      z-index 100
      background-color #fff
      div
        position relative
        input 
          display inline-block
          width pxtorem(555px)
          height pxtorem(60px)
          margin auto
          background-color #f5f5f5
          text-align center
        .searchImg
          width pxtorem(30px)
          position absolute
          top pxtorem(45px)
          left pxtorem(270px) 
    .scroll
      width pxtorem(750px)
      font-size pxtorem(32px)
      height pxtorem(1050px)
      overflow hidden
      span
        line-height pxtorem(110px)
        color #1f1f1f
      span:nth-child(1)
        line-height pxtorem(70px)
        margin-left pxtorem(30px)
        margin-right pxtorem(5px)
      span:nth-child(2)
        margin-left pxtorem(5px)
      span:nth-child(3)
        float right
        margin-right pxtorem(30px)
        color #959595
        img
          margin-left pxtorem(10px)
      .swiper-container
        width pxtorem(750px)
        .swiper-pagination
          position relative
        .swiper-wrapper
          width pxtorem(750px)
          overflow-x scroll
          .swiper-slide 
            div
              // border pxtorem(1px) solid green
              width pxtorem(630px)
              margin auto
              height pxtorem(280px)
              margin-bottom pxtorem(10px)
              position relative
              color #fff
              overflow hidden
              padding 0 pxtorem(30px)
              background rgba(0, 0, 0, .25)
              strong
                display block
                margin-top pxtorem(150px)
                font-size pxtorem(42px)
                font-weight bold
                line-height pxtorem(80px)
                z-index 10
              p
                font-size pxtorem(26px)
                z-index 10
              .swiperImg
                position absolute
                top pxtorem(-100px) 
                left 0
                width pxtorem(690px)
                z-index -10
      ul
        margin-left pxtorem(280px)
        min-height pxtorem(5px)
        li
          display inline-block
          width pxtorem(50px)
          height pxtorem(5px)
          background-color #f34c3a
    .cookBook
      width pxtorem(690px)
      margin-top pxtorem(00px)
      margin auto
      div
        display inline-block
        width pxtorem(336px)
        height pxtorem(153px)
        background-color #a4e1fa
        line-height pxtorem(53px)
        font-size pxtorem(32px)
        text-align center
        span
          display inline-block
          margin-top pxtorem(20px)
          text-align left
          p
            color #a4bcc6
            font-size pxtorem(26px)
          img
            width pxtorem(80px)
            vertical-algin middle
            margin-left pxtorem(20px)
      div:nth-child(2)
        background-color #fbe1bc
        float right
    .todayRecommend
      margin-top pxtorem(25px)
      p
        line-height pxtorem(110px)
        color #1f1f1f
        font-size pxtorem(32px)
        margin-left pxtorem(30px)
    .goods
      width pxtorem(750px)
      font-size pxtorem(32px)
      overflow hidden
      line-height pxtorem(110px)
      color #1f1f1f
      margin-top pxtorem(30px)
      span:first-child
        margin-left pxtorem(30px)
      .more
        float right
        margin-right pxtorem(30px)
        color #959595
    .fresh
      width pxtorem(750px)
      font-size pxtorem(32px)
      overflow hidden
      line-height pxtorem(110px)
      color #1f1f1f
      margin-top pxtorem(30px)
      span:first-child
        margin-left pxtorem(30px)
      .more
        float right
        margin-right pxtorem(30px)
        color #959595
        img
          margin-left pxtorem(10px)
      a
        img
          display block
          width pxtorem(690px)
          height pxtorem(303px) 
          margin 0 auto pxtorem(20px)
    .newestMenu
      width pxtorem(750px)
      font-size pxtorem(32px)
      overflow hidden
      line-height pxtorem(110px)
      color #1f1f1f
      margin-top pxtorem(10px)
      span:first-child
        margin-left pxtorem(30px)
    .OverlordRecipes
      width pxtorem(750px)
      font-size pxtorem(32px)
      overflow hidden
      line-height pxtorem(110px)
      color #1f1f1f
      margin-top pxtorem(10px)
      span:first-child
        margin-left pxtorem(30px)
        margin-right pxtorem(10px)
      span:nth-child(2)
        margin-left pxtorem(10px)
    .RankingList
      width pxtorem(750px)
      font-size pxtorem(32px)
      overflow hidden
      line-height pxtorem(110px)
      color #1f1f1f
      margin-top pxtorem(10px)
      span:first-child
        margin-left pxtorem(30px)
        margin-right pxtorem(10px)
      span:nth-child(2)
        margin-left pxtorem(10px)
     
</style>
