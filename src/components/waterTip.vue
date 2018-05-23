<template lang="html">
  <div class="water_tip__wrap">
    <header>
      <img src="//p8jtbvrrf.bkt.clouddn.com/icon_xianrenzhang.png" alt="">
      <p>{{title}}</p>
    </header>
    <div class="desc">
      <slot name='desc'>
        <p>今天还需要喝{{desc}}杯水，继续保持就会成长的更快哦</p>
      </slot>
    </div>
    <div class="">
      <chart-bar :barData="barData" :showBar="true"></chart-bar>
    </div>
    <img class="modal_close_water" @click="closeModal" src="//p8jtbvrrf.bkt.clouddn.com/icon_close.png" alt="">
  </div>
</template>

<script>
import chartBar from '@/components/chartBar.vue'

export default {
  name: 'water-tip',
  props: {
    title: String,
    desc: [String, Number],
    barData: {
      type: Array,
      default: ()=> ([])
    }
  },
  data: ()=> ({
    // barData: [
    //   {
    //     bg: '#d43f77',
    //     value: 40,
    //     total: 2000,
    //     part: 1500
    //   }
    // ]
  }),
  components: {
    chartBar
  },
  methods: {
    closeModal() {
      this.$emit('iclose')
    }
  }
}
</script>

<style lang="less">
.water_tip__wrap {
  position: relative;
  width: 80%;
  display: block;
  margin: 0 auto;
  height: 140px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #fff;
  padding: 10px;
  color: #333;
  header {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 10px;
    }
  }
  .desc {
    margin: 10px 0;
    font-size: 13px;
    line-height: 15px;
  }
  .modal_close_water {
    width: 30px;
    position: absolute;
    right: -10px;
    top: -10px;
  }
}
</style>
