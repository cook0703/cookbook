<template>
  <div class='scr'>
  	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for='(recommend,index) in scrollImgArr' class=''>
	      <img :src="recommend" alt="">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import Vue from "vue";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	props:['scrollImgArr'],
  name: '',
  data () {
    return {
     	swiperOption: {
        notNextTick: true,
        direction : 'horizontal',
        autoplay: 3000,
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
        debugger: false,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.swiper-container
	height auto
	.swiper-pagination
		height pxtorem(40px)
		position relative
		top pxtorem(13px)
		
</style>
