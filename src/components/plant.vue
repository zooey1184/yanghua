<template lang="html">
  <div class="plant__wrap">
    <div class="flower">
      <slot name="flower">
        <img :src="img" alt="" @touchstart="touchPlant">
      </slot>

      <transition name="fade">
        <div class="tip" v-if="seed" @click="seedFn">
          <img src="//p8jtbvrrf.bkt.clouddn.com/pic_hand.png" alt="">
        </div>
      </transition>
      <transition name="fade">
        <div class="tip" v-if="water" @click="watering">
          <img src="//p8jtbvrrf.bkt.clouddn.com/pic_nowater.png" alt="">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    img: '',
    state: 'a',
    level: null,
    type: ''
  }),
  props: {
    seed: {
      type: Boolean,
      default: false
    },
    water: {
      type: Boolean,
      default: false
    },
    plantId: {
      type: [String, Number],
      default: 10
    },
    growStage: {
      type: [String, Number],
      default: 1
    }
  },
  watch: {
    state: function(n, o) {
      let t = this.plantType()
      let l = this.plantLevel()
      this.img = `//p8jtbvrrf.bkt.clouddn.com/${t}_${l}_${this.state}.gif`
    }
  },
  methods: {
    watering() {
      this.$emit('water')
    },
    seedFn() {
      this.$emit('seed')
    },
    plantType() {
      let type = 10
      if(this.plantId==10) {
        type = 'xrz'
      }else if(this.plantId==11) {
        type = 'xrk'
      }
      this.type = type
      return type
    },
    plantLevel() {
      let level = 'l'
      if(this.growStage==1) {
        level = 'l'
      }else if(this.growStage==2) {
        level = 'm'
      }else {
        level = 'h'
      }
      this.level = level
      return level
    },
    plantState() {
      let state = 'a'
      if(this.water) {
        state = 'b'
      }else {
        state = 'a'
      }
      this.state = state
      return state
    },
    touchPlant() {
      if(this.state == 'a') {
        this.state = 'c'
        setTimeout(()=> {
          this.state = 'a'
        }, 1000)
      }
    }
  },
  created() {

    let t = this.plantType()
    let l = this.plantLevel()
    let s = this.plantState()

    this.img = `//p8jtbvrrf.bkt.clouddn.com/${t}_${l}_${this.state}.gif`
  }
}
</script>

<style lang="less">
.plant__wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .flower {
    position: relative;
    width: 80%;
    // background: #ddd;
    img {
      width: 100%;
    }
    .tip {
      position: absolute;
      top: 40%;
      width: 20%;
      right: 15%;
      img {
        width: 100%;
      }
    }
  }
  .pot {
    position: relative;
  }
}
</style>
