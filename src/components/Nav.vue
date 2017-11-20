<template>
  <div class="nav">
    <div v-for='(item,index) in navArr' @click='goFn(index)'>
    	<img :src="item.url" alt="">
    	<p ref='nav_p'>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: '',
  data () {
    return {
      	navArr:[
      		{'url':require("../assets/img/footer01.png"),'name':'推荐','link':'/'},
      		{'url':require("../assets/img/footer02.png"),'name':'商城','link':'/mall'},     		
      		{'url':require("../assets/img/footer03.png"),'name':'我的','link':'/mine'}
      	],
      	pageArr:['/','/mall','/mine']
    }
  },
  methods:{
  	goFn:function(index){     
        this.$router.push(this.navArr[index].link)      
     }
  },
  mounted:function(){
  	var tag=this.pageArr.indexOf(this.$route.fullPath);
  	this.navArr[tag].url=require("../assets/img/footer00"+(tag+1)+".png")
  	this.$refs.nav_p[tag].style.color='#ff4c39';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
@import '../assets/common.styl'
.nav
  position fixed
  bottom 0
  left 0
  width pxtorem(750px)
  height pxtorem(100px)
  background-color #f2f2f2
  display flex
  z-index 99
  div
    flex 1
    img
      display block
      margin pxtorem(0) auto
      height pxtorem(60px)
    p
      text-align center
      color gray
  
</style>
