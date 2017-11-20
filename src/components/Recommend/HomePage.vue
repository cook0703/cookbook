<template>
  <div class="homepage">
  	<my-nav></my-nav>
  </div>
</template>

<script>
import nav from '../Nav.vue'
export default {
  name: '',
  data () {
    return {
     
    }
  },
  components:{
  	'my-nav':nav
  },
  mounted:function(){
  	console.log("aaa")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
// @import '../../assets/common.styl'
</style>
