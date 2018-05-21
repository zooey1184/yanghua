<template lang="html">
  <div class="plant__wrap">
    <div class="flower">
      <slot name="flower">
        <div style="width: 80px; height: 100px; background: #eee; display: block; margin: 0 auto"></div>
      </slot>
      <transition name="fade">
        <div class="tip" v-if="seed">
          <img src="//p8jtbvrrf.bkt.clouddn.com/pic_hand.png" alt="">
        </div>
      </transition>

      <transition name="fade">
        <div class="tip" v-if="water" @click="watering">
          <img src="//p8jtbvrrf.bkt.clouddn.com/pic_nowater.png" alt="">
        </div>
      </transition>

    </div>
    <div class="pot">
      <slot name="pot">
        <div style="width: 100px; height: 60px; background: #d43e33"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seed: {
      type: Boolean,
      default: false
    },
    water: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    watering() {
      this.$emit('water')
    },
    seedFn() {
      this.$emit('seed')
    }
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
    .tip {
      position: absolute;
      top: 40%;
      width: 40%;
      right: -15%;
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
