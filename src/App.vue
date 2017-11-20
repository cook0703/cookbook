<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='stylus'>
@import './assets/common.styl'
.mint-indicator-wrapper
	width pxtorem(200px)
	height pxtorem(200px)
	z-index 99999
	.mint-indicator-spin
		width pxtorem(80px)
		height pxtorem(80px)
		margin-top pxtorem(40px)
		.mint-spinner-snake
			width pxtorem(70px)!important
			height pxtorem(70px)!important
			marign auto!important
	.mint-indicator-text
		font-size pxtorem(25px)
		margin-top pxtorem(20px)
</style>
