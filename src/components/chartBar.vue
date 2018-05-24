<template>
  <div class="chart_bar_wrap_hor" >
    <div class="chart_bar_contain_hor">
      <div class="chart_item_bar_hor" v-for="(item, index) of barData" :key="index">

        <div class="hor_item_chart_wrap">
          <transition name="scaleX">
            <div v-if="showBar" :style="{width: `${item.value*percent}px`, background: item.bg}" class="hor_item_chart_contain"></div>
          </transition>
          <p>{{item.part}}/{{item.total}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {clientRect} from '@/common/js/base'

export default {
  data: ()=> ({
    // showH: false
  }),
  props: {
    barData: {
      type: Array,
      default: ()=> ([])
    },
    showBar: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 220
    },
  },
  computed: {
    percent: function() {
      let h = clientRect().w
      let p = 0.76*h/100
      return p
    }
  },
  mounted() {
    setTimeout(()=> {
      this.showH = true
    }, 3000)
  }
}
</script>

<style lang="less">
.chart_bar_wrap_hor {
  position: relative;
  // padding: 10px 0;
  // padding-bottom: 5px;
  width: 100%;
  left: 0;
  .chart_item_bar_hor {
    // margin: 10px 0;
    .chart_item_bar_horize {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8%;
    }
    p {
      font-size: 12px;
    }
    .hor_item_chart_wrap {
      height: 14px;
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      background: #f8f8f8;
      position: relative;
      left: 0;
      margin: 3px 0 5px 0;
      .hor_item_chart_contain {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #d43f44;
        width: 20px;
      }
      p {
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #888;
        margin: 1px 0;
      }
    }
  }
}

.scaleX-enter-active, .scaleX-leave-active {
  transition: all 0.6s linear;
  transform-origin: 0 50%;
}
.scaleX-enter, .scaleX-leave-to {
  transform: scaleX(0);
  transform-origin: 0 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
