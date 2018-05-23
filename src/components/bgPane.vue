<template lang="html">
  <div class="bg_contain_wrap">
    <img class="bg" v-if="day=='day'" src="//p8jtbvrrf.bkt.clouddn.com/bg_day.png" alt="">
    <img class="bg" v-else src="//p8jtbvrrf.bkt.clouddn.com/bg_night.png" alt="">
    <img class="window" src="//p8jtbvrrf.bkt.clouddn.com/bg_window.png" alt="">
    <div class="bg zindex"></div>
    <div class="plant_slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      default: 'day'
    },
  },
}
</script>

<style lang="less">
.bg_contain_wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .zindex {
    z-index: 5;
  }
  .window {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .plant_slot {
    position: absolute;
    left: 57%;
    bottom: 10%;
    width: 70%;
    height: 25%;
    transform: translateX(-50%);
    z-index: 20;
    bottom: 5%;
    img {
      width: 100%;
    }
  }
}
</style>
