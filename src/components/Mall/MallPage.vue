<template>
  <div class="mallpage">
  	<my-nav></my-nav>
    <div class="search">
        <img src="../../assets/img/cart.png" alt="">
        <input type="text" placeholder='搜索商品' @click='toSearch'>
    </div>
    <div class="naver">
      <div v-for="(x,index) in ['推荐','分类','排行榜']" @click='switchFn(index)' ref='nav'>{{x}}</div>
    </div>
    <div class="wrap" ref='controler'>
        <div class="inner" ref='control'>
            <div ref='fir'>
              <mt-swipe :auto="2000" class='cycle'>
                  <mt-swipe-item v-for='item in cyArr'><img v-bind:src="item.src" alt=""></mt-swipe-item>
              </mt-swipe>
              <div class="area">- 每日优选 -</div>
              <well></well>
              <div class="area">- 日排行 -</div>
              <day :ran='dayrank' :so='s'></day>
              <div class="area">- 精选专题 -</div>
              <theme></theme>
              <div class="area">- 为你推荐 -</div>
              <goodlist :mes='recommendArr' :show='a'></goodlist>
            </div>
            <div ref='sec'>
              <div class="sort_items" v-for='item in sortArr' v-if='b'>
                <img :src="item.cover_img.big" alt="">
                <div>
                  <strong v-for='item2 in item.cates_sub_items' :id='item2.gc_id' @click='ToFn'>{{item2.gc_name}}</strong>
                </div>
              </div>
            </div>
            <div ref='thi'>
              <div class="area">- 日排行 -</div>
              <day :ran='dayrank' :so='s'></day>
              <div class="area">- 历史排行 -</div>
              <day :ran='historyrank' :so='s'></day>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import nav from '../Nav.vue'
import dayrank from './DayRank.vue'
import goodlist from './GoodList'
import welltheme from './WellTheme'
import wellselected from './WellSelected.vue'
import {mapGetters,mapActions} from 'vuex'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
//js的引入
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//css的引入
import 'mint-ui/lib/style.css'
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      cyArr:[{'src':require('../../assets/img-mall/swiper01.jpg')},
      {'src':require('../../assets/img-mall/swiper02.jpg')},
      {'src':require('../../assets/img-mall/swiper03.jpg')},
      {'src':require('../../assets/img-mall/swiper04.jpg')},],
      recommendArr:[],
      a:false,
      sortArr:[],
      b:false,
      s:false,
      dayrank:[],
      historyrank:[]
    }
  },
  computed:mapGetters({
    selected:'getMallSelected'
  }),
  components:{
  	'my-nav':nav,
    'well':wellselected,
    'day':dayrank,
    'theme':welltheme,
    'goodlist':goodlist
  },
  methods:{
    ...mapActions([
      'setMallSelected',
      'setSortId'
    ]),
    toSearch:function(){
      this.setSortId('');
      this.$router.push('/mall_search')
    },
    switchFn:function(index){
      window.scrollTo(0,0);
      for(var i=0;i<3;i++){
        if(i==index){
          this.$refs.nav[i].style.color='rgb(255, 76, 57)';
          this.$refs.nav[i].style.borderBottom='5px solid rgb(255, 76, 57)';
        }else{
          this.$refs.nav[i].style.color='#292929';
          this.$refs.nav[i].style.borderBottom='none';
        }
      }
      this.setMallSelected(index)
      this.$refs.control.style.transform='translateX('+(index*-750)+'px)'
      if(index==0){
          this.$refs.controler.style.height=this.$refs.fir.offsetHeight+'px'
      }else if(index==1){
          this.$refs.controler.style.height=this.$refs.sec.offsetHeight+'px'
      }else if(index==2){
          this.$refs.controler.style.height=this.$refs.thi.offsetHeight+'px'
      }
    },
    ToFn:function(){
        this.setSortId(event.currentTarget.id)
        this.$router.push('/mall_search')
    }
  },
  mounted:function(){
    var that=this
    this.$refs.nav[this.selected].style.color='rgb(255, 76, 57)';
    this.$refs.nav[this.selected].style.borderBottom='5px solid rgb(255, 76, 57)';
    this.$refs.control.style.transform='translateX('+(this.selected*-750)+'px)';
    axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=goods_list1&keyword=&store_id=&gc_id=1099&page=&per_page=&key=&order=').then(function(res){
          that.recommendArr=res.data.data.items
          that.a=true
    })
    axios.get('http://mshop.meishij.net/mobile/index.php?act=goods_class&op=get_class').then(function(res){
          that.sortArr=res.data.data.items
          that.b=true
    })
    axios.get('http://mshop.meishij.net/mobile/index.php?act=goods&op=rank_list').then(function(res){
          that.dayrank=res.data.data[0];
          that.historyrank=res.data.data[1];
          that.s=true;
    })
    setTimeout(function(){
        if(that.selected==0){
            that.$refs.controler.style.height=that.$refs.fir.offsetHeight+'px'
        }else if(that.selected==1){
            that.$refs.controler.style.height=that.$refs.sec.offsetHeight+'px'
        }else if(that.selected==2){
            that.$refs.controler.style.height=that.$refs.thi.offsetHeight+'px'
        }
    },400)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.mallpage
  padding pxtorem(200px) 0 pxtorem(100px) 0
  background-color #f2f2f2
  .search
    width pxtorem(750px)
    height pxtorem(100px)
    background-color white
    z-index 9999
    position fixed
    left 0
    top 0
    overflow hidden
    line-height pxtorem(100px)
    img
      width pxtorem(150px)
      height pxtorem(110px)
      margin-left pxtorem(-20px)
      margin-top pxtorem(-10px)
    input
      width pxtorem(500px)
      height pxtorem(80px)
      background-image url('../../assets/img/search.png')
      background-repeat no-repeat
      background-size pxtorem(40px)
      background-color #f2f2f2
      background-position pxtorem(150px) pxtorem(20px)
      vertical-align top
      margin-top pxtorem(10px)
      margin-left pxtorem(-10px)
      outline none
      font-size pxtorem(32px)
      text-indent pxtorem(200px)
  .naver
    z-index 9999
    background-color white
    position fixed
    top pxtorem(100px)
    left 0
    width pxtorem(500px)
    padding 0 pxtorem(125px)
    height pxtorem(100px)
    display flex
    >div
      line-height pxtorem(100px)
      height pxtorem(100px)
      font-size pxtorem(32px)
      color #292929
      margin auto
      box-sizing border-box
  .wrap
    width pxtorem(750px)
    overflow hidden
    .inner
      width pxtorem(2250px)
      overflow hidden
      transition 0.5s
      >div
        width pxtorem(750px)
        float left
      >div:nth-of-type(1)
        .cycle
          width pxtorem(750px)
          height pxtorem(627px)
          div
            img
              width pxtorem(750px)
        .area
          background-color white
          width pxtorem(750px)
          height pxtorem(100px)
          line-height pxtorem(100px)
          font-size pxtorem(40px)
          text-align center
          color #292929
          margin-top pxtorem(15px)
      >div:nth-of-type(2)
        .sort_items
          width pxtorem(750px)
          background-color white
          >img
            width pxtorem(750px)
            height pxtorem(240px)
            display block
          >div
            width pxtorem(710px)
            padding pxtorem(30px) pxtorem(20px) pxtorem(60px)
            >strong
              height pxtorem(54px)
              padding 0 pxtorem(19px)
              line-height pxtorem(54px)
              font-size pxtorem(24px)
              color #292929
              border pxtorem(1px) solid #dcdcdc
              display inline-block
              margin 0 pxtorem(20px) pxtorem(20px) 0
      >div:nth-of-type(3)
        .area
          background-color white
          width pxtorem(750px)
          height pxtorem(100px)
          line-height pxtorem(100px)
          font-size pxtorem(40px)
          text-align center
          color #292929
          margin-top pxtorem(15px)       
</style>
