<template>
  <div class='list'>
  	<my-head class='head'> 
      <strong slot='center'>
        菜篮买菜清单
      </strong>
      <strong slot='right'>
        <img src="../../assets/img/close.png" alt="" class="back" @click="backFn">
      </strong>
    </my-head>
    <ul>
    	<li v-for="(item,index) in listArr">{{item.material}}</li>
    </ul>
  </div>
</template>

<script>
import Head from '../Header.vue'
import {bus} from '../../bus/public.js';
export default {
  name: '',
  data () {
    return {
     listArr:[
     	{material:"猪骨",weight:"500克"},
     	{material:"西红柿",weight:"300克"}
     ]
    }
  },
  //2.注册组件
  components:{
    "my-head":Head
  },
  methods:{
  	backFn:function(){
  		// console.log('返回')//发送数据bus.$emit('data',that.select);
  		this.$router.push("/cook");
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.list
	padding-top pxtorem(115px)
	font-size pxtorem(28px)
	.head
		strong
			.back
				display block
				width pxtorem(35px)
				margin-top pxtorem(40px)
	>ul
		li
			line-height pxtorem(70px)
</style>
