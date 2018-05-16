<template lang="html">
  <div class="bg_contain_wrap">
    <img class="bg" v-if="day=='day'" src="//p8jtbvrrf.bkt.clouddn.com/bg_day.png" alt="">
    <img class="bg" v-else src="//p8jtbvrrf.bkt.clouddn.com/bg_night.png" alt="">
    <img class="window" src="//p8jtbvrrf.bkt.clouddn.com/bg_window.png" alt="">
  </div>
</template>

<script>
export default {
  data: ()=> ({
    day: 'day',
  }),
  methods: {
    getDay() {
      let d = new Date()
      let t = d.getHours()
      if(t>5 && t<18) {
        this.day = 'day'
      }else {
        this.day = 'night'
      }
    }
  },
  created() {
    this.getDay()
  }
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
  .window {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
