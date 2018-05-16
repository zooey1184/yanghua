<template lang="html">
  <div class="">
    <div class="sun_pane" v-if="isUse">
      <img src="//p8jtbvrrf.bkt.clouddn.com/pic_sun.png" alt="">
      <p>{{point}}</p>
    </div>
    <div class="sun_pane" v-else>
      <img src="//p8jtbvrrf.bkt.clouddn.com/pic_sun_dis.png" alt="">
      <p>{{left}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    isUse: false,
    left: "00:00"
  }),
  props: {
    state: Boolean,
    point: [String, Number],
    times: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {

  },
  watch: {
    state: function(n, o){
      this.isUse = n
    }
  },
  methods: {
    gettime: ()=> {
      let h = 0
      let m = 0
      let s = 0
      setTimeout(()=> {
        console.log(this.times);
        h = Math.floor(this.times/3600)
        m = Math.floor((this.times%3600)/60)<10? `0${Math.floor((this.times%3600)/60)}` : Math.floor((this.times%3600)/60)
        s = Math.floor((this.times%3600)%60)<10? `0${Math.floor((this.times%3600)%60)}` : Math.floor((this.times%3600)%60)
        console.log('h', h);
        if(h>0) {
          this.left = `${h}小时`
        }else {
          this.left = `${m}:${s}`
        }
      }, 10)
    }
  },
  created() {
    this.isUse = this.state
    this.gettime()
  }
}
</script>

<style lang="less">
.sun_pane {
  width: 60px;
  height: 60px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    font-size: 15px;
    line-height: 15px;
    width: 100%;
    text-align: center;
    margin-top: 22px;
    left: 0;
    top: 0;
    z-index: 2;
    color: #fff;
  }
}
</style>
