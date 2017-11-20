<template>
  <div class="mypage">
    <div class="header">
      <div class="top">
        <img src="https://css.meishij.net/images/default/tx2_9.png" alt="">
        <span>小冰0703</span>
        <span>正在通往美食达人的路上...</span>
      </div>
      <span class="jie">美食杰DNA 0条</span>
    </div>
    <div class="header_a">
      <strong @click='attentionFn'><span>1</span>关注</strong><strong @click='cookbookFn'><span>0</span>菜谱</strong>
    </div>
    <h3>荣誉勋章</h3>
    <div class="content">   
      <ul>
        <li v-for='item in medalArr'>
          <img v-bind:src="item.url">
        </li>
      </ul>   
    </div>
    <div class="empty"></div>
    <div class="footer">
    <ul v-for='(item,index) in optionArr'>
      <li @click='addressFn(index)'>
        <img v-bind:src="item.url">
          <span>{{item.title}}</span>
          <img v-bind:src="item.src" class="forward">
      </li>
    </ul>
   </div>
  	<my-nav></my-nav>
  </div>
</template>

<script>
import nav from '../Nav.vue'
export default {
  name: '',
  data () {
    return {
      optionArr:[
        {url:require("../../assets/images/store_a.png"),title:"我的收藏",src:require("../../assets/images/forward.png")},
        {url:require("../../assets/images/order_a.png"),title:"我的订单",src:require("../../assets/images/forward.png")},
        {url:require("../../assets/images/draft.png"),title:"我的草稿",src:require("../../assets/images/forward.png")},
        {url:require("../../assets/images/feedback_a.png"),title:"我的反馈",src:require("../../assets/images/forward.png")},
        {url:require("../../assets/images/set_b.png"),title:"我的设置",src:require("../../assets/images/forward.png")},    
      ],
      medalArr:[
         {url:require("../../assets/images/sousuo.png")}, 
         {url:require("../../assets/images/caipu1.png")}, 
         {url:require("../../assets/images/xihao1.png")}, 
         {url:require("../../assets/images/kouwei1.png")}, 
         {url:require("../../assets/images/zucai1.png")}, 
         {url:require("../../assets/images/caixi1.png")}, 
         {url:require("../../assets/images/zucai1.png")}, 
         {url:require("../../assets/images/gexing1.png")}, 
         {url:require("../../assets/images/zuopin1.png")} 
      ]
    }
  },
  components:{
  	'my-nav':nav
  },
  methods:{
    addressFn:function(index){
    console.log(index)
    switch (index) {
      case 0:this.$router.push('/MyCollection'); 
        break;
      case 1:this.$router.push('/MyOrder'); 
        break;
      case 2:this.$router.push('/MyDraft'); 
        break;
      case 3:this.$router.push('/MyFeedback'); 
        break;
      case 4:this.$router.push('/MySet'); 
        break;
    }            
   },
   cookbookFn:function(){
      this.$router.push('/MyCookbook');
   },
   attentionFn:function(){
      this.$router.push('/MyAttention');
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.header
  height pxtorem(300px)
  background url('../../assets/images/bg.png')
  .top
    overflow hidden
    width pxtorem(500px)
    height pxtorem(144px)
    padding-left pxtorem(75px)
    padding-top pxtorem(40px)
    img
      float left
      width pxtorem(132px)
      height pxtorem(132px)
      border pxtorem(6px) solid rgba(255,255,255,0.5)
      border-radius 100%
    span
      color white
      margin-top pxtorem(25px)
      margin-left pxtorem(18px)    
    span:nth-child(2)
      vertical-align top
      display inline-block
      font-size pxtorem(32px)
    span:nth-child(3)
      display inline-block
      font-size pxtorem(24px)
  .jie
    height pxtorem(48px)
    line-height pxtorem(44px)
    border-radius pxtorem(32px)
    color #fmages
    border pxtorem(2px) solid rgba(255,255,255,0.5)
    background: rgba(255,255,255,0.2)
    box-sizing border-box
    display inline-block
    vertical-align top
    padding 0 pxtorem(24px)
    position absolute
    left pxtorem(250px)
.header_a
  height pxtorem(88px)
  text-align center
  border-bottom pxtorem(20px) solid #f2f2f2
  strong
    display inline-block
    width pxtorem(300px)
    margin pxtorem(20px) auto
    height pxtorem(48px)
    font-size pxtorem(32px)
    line-height pxtorem(48px)
    color gray
    span
      color red
  strong:nth-child(1)
    border-right pxtorem(2px) solid gray
 h3
   position absolute
   font-size pxtorem(32px)
   padding pxtorem(12px) 0 0 pxtorem(23px)   
 .content
   width pxtorem(750px)
   height pxtorem(168px)
   overflow scroll
   overflow-y visible    
   ul
     width pxtorem(800px)    
     li
       position relative
       overflow-x auto      
       overflow-y hidden
       display inline-block
       margin-left pxtorem(12px)
       width pxtorem(76px)      
       img
         margin-top 70px
         width pxtorem(76px)
         height pxtorem(64px)
 .empty
   position absolute
   top pxtorem(560px)
   left 0
   width pxtorem(750px)
   height pxtorem(18px)
   background white
 .footer
    border-top pxtorem(20px) solid #f2f2f2
    ul 
      li
        height pxtorem(80px)
        line-height pxtorem(55px)
        margin-top pxtorem(15px)
        margin-left pxtorem(20px)
        span
          font-size pxtorem(31px)
          vertical-align top
          line-height pxtorem(76px)
        .forward
          position absolute   
          right pxtorem(30px)
          margin-top pxtorem(25px)
    ul:nth-child(1)
      border-bottom pxtorem(20px) solid #f2f2f2
    ul:nth-child(2)
      border-bottom pxtorem(20px) solid #f2f2f2     
</style>
