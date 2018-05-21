<template lang="html">
  <div class="">
    <transition name="topOffset">
      <div class="sun_pane" v-if="showEng" :class="{showAnimate: showAnimate}" @click="getEngFn">
        <img :style="{opacity: isUse? '1': '0.7'}" src="//p8jtbvrrf.bkt.clouddn.com/pic_sun.png" alt="">
        <p>{{isUse? point: left}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    isUse: false,
    left: "--:--",
    showEng: false,
    showAnimate: false
  }),
  props: {
    state: Boolean,
    index: {
      type: Number,
      default: 0
    },
    point: [String, Number],
    time: {
      type: [Number, String],
      default: 0
    }
  },
  watch: {
    state: function(n, o){
      this.isUse = n
    }
  },
  methods: {
    gettime(t) {
      let h = 0
      let m = 0
      let s = 0
      h = Math.floor(t/3600)
      m = Math.floor((t%3600)/60)<10? `0${Math.floor((t%3600)/60)}` : Math.floor((t%3600)/60)
      s = Math.floor((t%3600)%60)<10? `0${Math.floor((t%3600)%60)}` : Math.floor((t%3600)%60)
      if(h>0) {
        this.left = `${h}小时`
      }else {
        this.left = `${m}:${s}`
      }
    },
    interval() {
      let t = this.time
      let c = 1000
      if(Math.floor(t/3600)>1) {
        c = 60000
      }
      try {
        let timer = setInterval(()=> {
          if(this.isUse) {
            clearInterval(timer)
          }else {
            if(t>0) {
              t--
              this.gettime(t)
            }else {
              this.isUse = true
              clearInterval(timer)
            }
          }
        }, c)
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(()=> {
          this.left = '00:00'
          this.isUse = true
        }, this.time*1000+100)
      }
    },
    disFn() {
      this.$toast.show('还不能收获哦')
    },
    getEngFn() {
      if(this.isUse) {
        this.showAnimate = false
        setTimeout(()=> {
          this.showEng = false
        }, 10)
      }else {
        this.disFn()
      }
    }
  },
  created() {
    this.isUse = this.state
    let t = 500
    let d = this.index/10*1000
    let s =
    setTimeout(()=> {
      this.showEng = true
    }, t+d)
    setTimeout(()=> {
      this.showAnimate = true
    }, t+d+1050)
  },
  mounted() {
    this.interval()
  }
}
</script>

<style lang="less">
.sun_pane {
  width: 60px;
  height: 60px;
  overflow: hidden;
  position: relative;
  margin: 5px;
  //
  img {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    font-size: 12px;
    line-height: 12px;
    width: 100%;
    text-align: center;
    margin-top: 24px;
    left: 0;
    top: 0;
    z-index: 2;
    color: #fff;
  }

}
.showAnimate {
  animation: linearUP 2s linear infinite;
}
.topOffset-enter-active, .topOffset-leave-active {
  transition: all 1s ease-out;
}
.topOffset-enter, .topOffset-leave-to {
  transform: translate3d(40px, 150px, 0) scale(0);
  opacity: 0;
}
</style>
