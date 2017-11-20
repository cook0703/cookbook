<template>
  <div class="wrap">
    <div class="inner clear">
      <span>
        <slot name='left'></slot>
      </span>
      <span>
        <slot name='center'></slot>
      </span>
      <span>
        <slot name='right'></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../assets/common.styl'
  .wrap
    width 100%
    height pxtorem(115px)
    line-height pxtorem(115px)
    position fixed
    font-size pxtorem(32px)
    top 0
    left 0
    z-index 10
    border-bottom pxtorem(1px) solid #ccc
    .inner
      width pxtorem(690px)
      line-height pxtorem(120px)
      margin auto
      text-align center
      position relative
      span:nth-child(1)
        float left
      span:nth-child(3)
        float right
</style>