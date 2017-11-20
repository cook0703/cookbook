<template>
  <div class='scr2'>
    <div>
      <div v-for='(item,index) in scrollSmallImg'>
        <img :src="item.src" alt="">
        <strong>{{item.foodName}}</strong>
        <p>{{item.name}}</p>
      </div>
      <div class="mask"><img :src="scrollSmallImg[0].src" alt="" class="mackImg"><span>点击查看更多</span></div>
    </div>
  </div>
</template>

<script>

export default {
	props:['scrollSmallImg'],
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
// 引用路径根据文件夹位置调整
@import '../../assets/common.styl'
.scr2
  width pxtorem(690px)
  height pxtorem(403px)
  overflow hidden
  padding 0 pxtorem(30px)
  .mask
    position relative
    top pxtorem(-90px)
    left pxtorem(-10px)
    width pxtorem(350px)
    height pxtorem(300px)
    border pxtorem(1px) solid red
    line-height pxtorem(300px)
    overflow hidden
    margin-right pxtorem(50px)
    .mackImg
      display block
      width pxtorem(350px)
      height pxtorem(300px)
    span
      text-align left
      padding-left pxtorem(70px)
      color #fff
      display block
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      background-color rgba(0, 0, 0, .5)
  >div
    width pxtorem(750px)
    overflow-x scroll
    white-space nowrap
    div
      width pxtorem(380px)
      display inline-block
      img
        display block
        width pxtorem(350px)
        height pxtorem(300px)
        z-index -100
      strong
        display block
        font-size pxtorem(28px)
        margin-top pxtorem(10px)
        line-height pxtorem(50px)
      p
        display block
        font-size pxtorem(24px)
        line-height pxtorem(50px)
        color #363636
</style>
